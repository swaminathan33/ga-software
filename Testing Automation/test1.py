from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()

driver.get('https://www.amazon.in/')

driver.find_element(By.XPATH, '//*[@id="twotabsearchtextbox"]').send_keys('tv')

driver.find_element(By.XPATH, '//*[@id="nav-search-submit-button"]').click()

while True:
    pass

