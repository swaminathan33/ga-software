from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()

driver.get('https://casites.bdabangalore.org/')

driver.find_element(By.XPATH, '//*[@id="mat-input-0"]').send_keys('em@bdabangalore.org')
driver.find_element(By.XPATH, '//*[@id="mat-input-1"]').send_keys('Bdaca@4567')
driver.find_element(By.XPATH, '/html/body/app-root/app-auth/app-signin/div/div[1]/div/form/div[3]/button').click()

while True:
    pass
