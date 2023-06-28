resource "azurerm_network_interface" "main" {
  name                = "myNetworkInterface"
  location            = var.location
  resource_group_name = var.resourcegroupname

  ip_configuration {
    name                          = "internal"
    subnet_id                     = azurerm_subnet.internal.id
    private_ip_address_allocation = "Dynamic"
    public_ip_address_id          = azurerm_public_ip.main.id
  }
}

resource "azurerm_virtual_network" "main" {
  name                = "myNetwork"
  address_space       = ["10.0.0.0/24"]
  location            = var.location
  resource_group_name = var.resourcegroupname
}

resource "azurerm_subnet" "internal" {
  name                 = "internal"
  resource_group_name  = var.resourcegroupname
  virtual_network_name = azurerm_virtual_network.main.name
  address_prefixes     = ["10.0.0.0/24"]
}

resource "azurerm_public_ip" "main" {
  name                = "myPublicIP"
  resource_group_name = var.resourcegroupname
  location            = var.location
  allocation_method   = "Static"
}

resource "azurerm_linux_virtual_machine" "" {
  name                = "myVM"
  location            = var.location
  resource_group_name = var.resourcegroupname
  size                = "Standard_DS2_v2"
  admin_username      = var.username
  network_interface_ids = [azurerm_network_interface.main.id]
  admin_ssh_key {
    username   = "quang"
    public_key = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQC18vpKwuM6jQj1HH7KWmH25oLLB4+HAujm9jOK7GYvFlUBMp18b6B/o56LiISNna43e7zUeg6ngOLES60xznuDT2sPhpBu02IlNQ25FX/JL4x5BeBDaZPdJDKDhhKJyqZ1LxN9JopK7n6JWBmjwFVUSix0c2pDV7XkBoA4bcFfllHRhjsjyhy6B6yKXxsV1ZeoHqgxk8gnXFCcf7Nakz8sGEtAglMbV2fOK6Zu9pPPsi88ZfsXdYLevfhpBUiEC+tsXxnHBN3L3xZ5lHlE3EgjOe/Z3aIUrklWUrHSNnbu1NpRJtb3tj43W/8NE/b+XQX/FS6V9/XL1eefOk+50GMczH9cCNZAeccsliFRcAXI9MSLPNZ+CCxqwtyY9eik7tEmIfpxh6w5c/Ivzq2bCSQd0mLfe+XpsSXXkzXTTQQjb1+tm6TUIKwPYpDKWRdllQkNvlS/xjNnI7ddteEWW+JtYYjTT4iIIs1YA7MEHyhoLz/6m+YyfvqyUm7spaIICJE= quang@DuyPQ"
  }
  os_disk {
    caching           = "ReadWrite"
    storage_account_type = "Standard_LRS"
  }
  source_image_reference {
    publisher = "Canonical"
    offer     = "UbuntuServer"
    sku       = "18.04-LTS"
    version   = "latest"
  }
}

resource "azurerm_lb" "main" {
  name                = "myLoadBalancer"
  location            = var.location
  resource_group_name = var.resourcegroupname

  frontend_ip_configuration {
    name                 = "myPublicIPAddress"
    public_ip_address_id = azurerm_public_ip.main.id
  }
}

resource "azurerm_lb_backend_address_pool" "main" {
  loadbalancer_id     = azurerm_lb.main.id
  name                = "myBackEndAddressPool"
}

