data "azurerm_image" "test" {
  name                = "myPackerImage"
  resource_group_name = "${var.resource_group}"
}

resource "azurerm_network_interface" "test" {
  name                = "${var.application_type}-${var.resource_type}"
  location            = "${var.location}"
  resource_group_name = "${var.resource_group}"

  ip_configuration {
    name                          = "internal"
    subnet_id                     = "${var.subnet_id}"
    private_ip_address_allocation = "Dynamic"
    public_ip_address_id          = "${var.public_ip_address_id}"
  }
}

resource "azurerm_linux_virtual_machine" "test" {
  name                = "${var.application_type}-${var.resource_type}"
  location            = "${var.location}"
  resource_group_name = "${var.resource_group}"
  size                = "Standard_DS2_v2"
  admin_username      = "adminuser"
  network_interface_ids = [azurerm_network_interface.test.id]
  admin_ssh_key {
    username   = "adminuser"
    public_key = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQC18vpKwuM6jQj1HH7KWmH25oLLB4+HAujm9jOK7GYvFlUBMp18b6B/o56LiISNna43e7zUeg6ngOLES60xznuDT2sPhpBu02IlNQ25FX/JL4x5BeBDaZPdJDKDhhKJyqZ1LxN9JopK7n6JWBmjwFVUSix0c2pDV7XkBoA4bcFfllHRhjsjyhy6B6yKXxsV1ZeoHqgxk8gnXFCcf7Nakz8sGEtAglMbV2fOK6Zu9pPPsi88ZfsXdYLevfhpBUiEC+tsXxnHBN3L3xZ5lHlE3EgjOe/Z3aIUrklWUrHSNnbu1NpRJtb3tj43W/8NE/b+XQX/FS6V9/XL1eefOk+50GMczH9cCNZAeccsliFRcAXI9MSLPNZ+CCxqwtyY9eik7tEmIfpxh6w5c/Ivzq2bCSQd0mLfe+XpsSXXkzXTTQQjb1+tm6TUIKwPYpDKWRdllQkNvlS/xjNnI7ddteEWW+JtYYjTT4iIIs1YA7MEHyhoLz/6m+YyfvqyUm7spaIICJE= quang@DuyPQ"
  }
  os_disk {
    caching           = "ReadWrite"
    storage_account_type = "Standard_LRS"
  }
  source_image_id = data.azurerm_image.test.id
  //source_image_reference {
  //  publisher = "Canonical"
  //  offer     = "UbuntuServer"
  //  sku       = "18.04-LTS"
  //  version   = "latest"
  // }
}