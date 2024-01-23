# check every mandatory is working or not 

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select
import time
from selenium.webdriver.common.keys import Keys

driver = webdriver.Chrome()

driver.get('https://udyogasethu.karnataka.gov.in/')

# finding the candidate login 
driver.find_element(By.ID, 'Login').click()
driver.find_element(By.ID, 'Aspirant').click()

# login process
driver.find_element(By.XPATH, '//*[@id="ContentPlaceHolder1_txtUserEmail"]').send_keys('swami0045@gmail.com')
driver.find_element(By.XPATH, '//*[@id="ContentPlaceHolder1_txtUserPassword"]').send_keys('Testing@123')
driver.find_element(By.XPATH, '//*[@id="form1"]/div[3]/div/div/div/div[2]/div[4]/input').click()

# get into edit profile
driver.find_element(By.ID, 'Edit').click()


k = driver.find_elements(By.CLASS_NAME, 'form-control')

def select_value(ref):
    select = Select(ref)
    select.select_by_index(1)


for i in range(len(k)):
    try:
        select_value(k[i])
    except:
        try:
            time.sleep(0.5)
            k[i].send_keys(2000)
            k[i].send_keys(Keys.ENTER)
            time.sleep(0.5)
            k[i].send_keys('C:/Users/hp/Downloads/email (6).png')
            k[i].send_keys(Keys.ENTER)
        except:
            try:
                k[i].send_keys(1)
            except:
                continue

driver.find_element(By.ID, 'ms-list-1').click()
driver.find_element(By.ID, 'ms-opt-1').click()
driver.find_element(By.ID, 'ms-list-2').click()
driver.find_element(By.ID, 'ms-opt-6').click()

driver.find_element(By.XPATH, '//*[@id="ProfileSave"]/input')


print('Completed')


while True:
    pass


