# #!/usr/bin/env python
from selenium import webdriver
from selenium.webdriver.chrome.options import Options as ChromeOptions
from selenium.webdriver.common.by import By
import logging

# Start the browser and login with standard_user
def login(user, password):
    logging.basicConfig(filename="./selenium.log", format="%(asctime)s %(message)s", filemode="w", level=logging.INFO, datefmt="%Y-%m-%d %H:%M:%S")
    logging.info('myVM Starting the browser...')

    options = ChromeOptions()

    options.add_argument("--headless") 
    options.add_argument('--no-sandbox')
    options.add_argument("--remote-debugging-port=9222")

    driver = webdriver.Chrome(options=options)
    logging.info('myVM Logging in...')
    driver.get('https://www.saucedemo.com/')

    # login
    driver.find_element(By.CSS_SELECTOR, "input[id='user-name']").send_keys(user)
    driver.find_element(By.CSS_SELECTOR, "input[id='password']").send_keys(password)
    driver.find_element(By.ID, "login-button").click()
    product_label = driver.find_element(By.CSS_SELECTOR, "span.title").text

    assert "Products" in product_label
    logging.info('myVM Login successfully with username: {:s} and password: {:s}'.format(user, password))

    return driver

def add_cart(driver, numOfItem):
    for i in range(numOfItem):
        # Get URL
        element = "a[id='item_" + str(i) + "_title_link']"
        # Find URL
        driver.find_element(By.CSS_SELECTOR, element).click()
        # Add product
        driver.find_element(By.CSS_SELECTOR, "button.btn_primary.btn_inventory").click()
        # Get product's name
        product = driver.find_element(By.CSS_SELECTOR, "div.inventory_details_name").text
        # Logging
        logging.info("myVM " +product + " was added to shopping cart.")
        # Back to main site
        driver.find_element(By.CSS_SELECTOR, "button.inventory_details_back_button").click()
    logging.info('myVM {:d} items were added to shopping cart.'.format(numOfItem))

def remove_cart(driver, numOfItem):
    for i in range(numOfItem):
        element = "a[id='item_" + str(i) + "_title_link']"
        driver.find_element(By.CSS_SELECTOR, element).click()
        driver.find_element(By.CSS_SELECTOR, "button.btn_secondary.btn_inventory").click()
        product = driver.find_element(By.CSS_SELECTOR, "div.inventory_details_name").text
        logging.info("myVM " +product + "Removed from shopping cart item name:" +product)
        driver.find_element(By.CSS_SELECTOR, "button.inventory_details_back_button").click()
        logging.info('myVM {:d} items are all removed from shopping cart.'.format(numOfItem))

if __name__ == "__main__":
    numberOfItem = 6
    TEST_USER = 'standard_user'
    TEST_PASS = 'secret_sauce'
    driver = login(TEST_USER, TEST_PASS)
    add_cart(driver, numberOfItem)
    remove_cart(driver, numberOfItem)
    logging.info('myVM Selenium UI tests are completed')