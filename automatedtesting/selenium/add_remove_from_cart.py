# #!/usr/bin/env python
from selenium import webdriver
from selenium.webdriver.chrome.options import Options as ChromeOptions
from selenium.webdriver.common.by import By
import logging

 
# Start the browser and login with standard_user

def functional_ui_test(user, password):

    logging.basicConfig(filename="./seleniumlog.txt", format="%(asctime)s %(message)s", filemode="w", level=logging.INFO, datefmt="%Y-%m-%d %H:%M:%S")
    logging.info('Starting the browser...')
    
    # --uncomment when running in Azure DevOps.
    options = ChromeOptions()
    options.add_argument('--headless')
    options.add_argument('--no-sandbox')
    options.add_argument('--disable-dev-shm-usage')

    # options.add_argument("--headless")
    driver = webdriver.Chrome(options=options)

    # Test Login to the site
    logging.info('Browser started. Access to the demo page.')

    driver.get('https://www.saucedemo.com/')

    driver.find_element(By.CSS_SELECTOR,"input[id='user-name']").send_keys(user)

    driver.find_element(By.CSS_SELECTOR,"input[id='password']").send_keys(password)

    driver.find_element(By.CSS_SELECTOR,"input[id='login-button']").click()

    path_content_div = "div[id='page_wrapper'] > div[id='contents_wrapper']"

    results = driver.find_element(By.CSS_SELECTOR,path_content_div + " > div[class='header_container'] > div[class='header_secondary_container'] > span").text

    assert "Products" in results
    logging.info("Successfully logged in as user: " + user)


    # Test Add Items to Shopping Cart
    logging.info("Starting the shopping...")

    path_inventory_item = "//*[@id='inventory_container']/*[@class='inventory_list']/div[@class='inventory_item']"

    product_items = driver.find_elements(By.XPATH,path_inventory_item)

    assert len(product_items) == 5

    logging.info("Successfully found 5 product items.")    

    for item in product_items:

        product_item_name = item.find_element(By.XPATH,"//div[@class='inventory_item_name']")

        item.find_element(By.XPATH,"//button[contains(text(),'Add to cart')]").click()

        print("Succesfully added to shopping cart: " + product_item_name.text)

        logging.info("Succesfully added to shopping cart: " + product_item_name.text)

    path_shopping_cart_link = "//*[@id='shopping_cart_container']"

    path_shopping_cart_badge = path_shopping_cart_link + "//span[@class='shopping_cart_badge']"

    shopping_cart_total_items = driver.find_element(By.XPATH,path_shopping_cart_badge).text

    assert '5' == shopping_cart_total_items

    logging.info("Succesfully added to shopping cart: 5 items in total")

 
    # Test Remove Items from Shopping Cart

    logging.info("A spouse came in, need to destroy the the evidence... ;-)")

    driver.find_element(By.XPATH,path_shopping_cart_link).click()

    path_cart_title = "//*[@id='header_container']/div[@class='header_secondary_container']/span"

    cart_title = driver.find_element(By.XPATH,path_cart_title).text

    assert 'Your Cart' in cart_title

    logging.info("Successfully entered the shopping cart page.")

 
    path_cart_item_remove_buttons = "//*[@id='cart_contents_container']//div[@class='cart_list']//div[@class='cart_item']"

    remove_item_buttons = driver.find_elements(By.XPATH,path_cart_item_remove_buttons)


    for remove_button in remove_item_buttons:

        shopping_cart_item_name = remove_button.find_element(By.XPATH,"//*[@class='inventory_item_name']").text

        remove_button.find_element(By.XPATH,"//button[text()='Remove']").click()

        logging.info("Succesfully removed an item from shopping cart: " + shopping_cart_item_name)

    shopping_cart_total_items = driver.find_elements(By.XPATH,path_shopping_cart_badge)

    assert 0 == len(shopping_cart_total_items)

    logging.info("Succesfully removed all items from shopping cart.")

functional_ui_test('standard_user', 'secret_sauce')