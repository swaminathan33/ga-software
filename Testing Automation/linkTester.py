"""
final output - can be able to extract the links

error - can't able to find the exact link with href 
"""


from selenium import webdriver
from selenium.webdriver.common.by import By
from bs4 import BeautifulSoup as bs

driver = webdriver.Chrome()

driver.get('https://udyogasethu.karnataka.gov.in/')

driver.find_element(By.XPATH, '//*[@id="navbardrop"]').click()
driver.find_element(By.ID, "Aspirant").click()

driver.find_element(By.XPATH, '//*[@id="ContentPlaceHolder1_txtUserEmail"]').send_keys('swam@gmail.com')
driver.find_element(By.XPATH, '//*[@id="ContentPlaceHolder1_txtUserPassword"]').send_keys('Testing@123')
driver.find_element(By.XPATH, '//*[@id="form1"]/div[3]/div/div/div/div[2]/div[4]/input').click()

soup = bs(driver.page_source, 'html5lib')

a_list = soup.find_all('a')

def find_error(link):
    try:
        driver.get(link)
        print(driver.title)
    except:
        pass

for i in a_list:
    find_error('https://udyogasethu.karnataka.gov.in/'+i['href'])

print("Completed. ")