from selenium import webdriver
from time import sleep
from selenium.webdriver.common.by import By


id = "63c14dc54b81b2ecc3790caf"
# id = "63c14dc54b81b2ecc3790ca"
url = "http://localhost:3000/doctorlogin"
username = "ashik@gmail.com"
password = "ashik"

driver = webdriver.Chrome(executable_path = "/home/ashik/PatientTracker/test_drive/chromedriver_win32/chromedrive.exe")
driver.get(url)
driver.maximize_window()

# enter into 'doctorlogin' page
driver.find_element(By.ID, "email").send_keys(username)
sleep(1)
driver.find_element(By.ID, "password").send_keys(password)
sleep(1)
driver.find_element(By.XPATH, "//button[@class='btn btn-primary btn-block']").click()
sleep(1)

# enter into 'doctor' page
driver.find_element(By.ID, "patientIDform").send_keys(id)
sleep(1)
driver.find_element(By.XPATH, "//button[@class='btn btn-primary']").click()
sleep(3)

try:
    if(driver.find_element(By.ID, "newRecordButton").is_displayed()):

        print("Test Passed!")
except:
    print("Test Failed :(")

driver.close()
