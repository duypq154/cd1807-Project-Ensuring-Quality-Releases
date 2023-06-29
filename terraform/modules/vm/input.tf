/*variable "resourcegroupname" {
	default = "Azuredevops"
	description = "Resource group name"
}

variable "virtualmachineName" {
	default = "myVM"
	description = "Virtual machine name"
}

variable "location" {
	default = "East US"
	description = "Localtion name"
}

variable "username" {
  default = "adminUser"
  description = "The Azure admin user for login to VM"
}

variable "password" {
  default = "P@ssw0rd1234!"
  description = "The password of admin user for login to VM"
}

variable "tags" {
	type = map(string)
	default     = {
	    project     = "project-3",
	    environment = "udacity"
  	}
	description = "Define tag to your resource"
}

variable "networkInterfaceName" {
	default = "myNIC"
	description = "NIC name"
}
*/
# Resource Group/VM
variable "location" {}
variable "application_type" {}
variable "resource_type" {}
variable "resource_group" {}
variable "subnet_id" {}
variable "public_ip_address_id" {}
