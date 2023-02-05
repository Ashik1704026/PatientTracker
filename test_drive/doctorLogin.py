from selenium import webdriver
from time import sleep
from selenium.webdriver.common.by import By

username = "ashik@gmail.com"
# username = "aaa@gmail.com"
# password = "ashik"
password = "sdad"


url = "http://localhost:3000/doctorlogin"

driver = webdriver.Chrome(executable_path = "/home/ashik/PatientTracker/test_drive/chromedriver_win32/chromedrive.exe")
driver.get(url)
driver.maximize_window()

driver.find_element(By.ID, "email").send_keys(username)
sleep(1)
driver.find_element(By.ID, "password").send_keys(password)
sleep(1)
driver.find_element(By.XPATH, "//button[@class='btn btn-primary btn-block']").click()
sleep(3)

try:
    if(driver.find_element(By.ID, "doctorLogout").is_displayed()):

        print("Login successful!")
except:
    print("Unsuccessful Login :(")
driver.close()
