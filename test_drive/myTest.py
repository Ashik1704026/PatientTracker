from selenium import webdriver
from time import sleep

driver = webdriver.Chrome(executable_path = "/home/ashik/PatientTracker/test_drive/chromedriver_win32/chromedrive.exe")

# driver.get("https://cuet.ac.bd/")
driver.get("http://localhost:3000/")

driver.maximize_window()
print(driver) 
sleep(2)
driver.close()