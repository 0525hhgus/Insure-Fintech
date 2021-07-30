from selenium import webdriver
from selenium.webdriver.support.ui import Select
import time

driver = webdriver.Chrome('./chromedriver')
driver.get('https://www.eum.go.kr/web/am/amMain.jsp')

# sideSelect = Select(driver.find_element_by_xpath('//*[@id="selSido"]'))
# sideSelect.select_by_visible_text('경기도')

# 실습2 지번으로 조회하는 기능 만들기
# 전라남도 / 고흥군 / 고흥읍 / 남계리 / 45 / 1
# 조회후 공시지가 가지고 오기
sideSelect = Select(driver.find_element_by_xpath('//*[@id="selSido"]'))
sggSelect = Select(driver.find_element_by_xpath('//*[@id="selSgg"]'))
umdSelect = Select(driver.find_element_by_xpath('//*[@id="selUmd"]'))
riSelect = Select(driver.find_element_by_xpath('//*[@id="selRi"]'))
bobnInput = driver.find_element_by_xpath('//*[@id="bobn"]')
bubnInput = driver.find_element_by_xpath('//*[@id="bubn"]')

sideSelect.select_by_visible_text('전라남도')
driver.implicitly_wait(1)
sggSelect.select_by_visible_text('고흥군')
driver.implicitly_wait(1)
umdSelect.select_by_visible_text('고흥읍')
driver.implicitly_wait(1)
riSelect.select_by_visible_text('남계리')
bobnInput.send_keys('45')
bubnInput.send_keys('1')

searchButton = driver.find_element_by_xpath('//*[@id="frm"]/fieldset/div[3]/p/span/a')
searchButton.click()

price = driver.find_element_by_xpath('//*[@id="appoint"]/div[2]/table/tbody/tr[3]/td')
print(price.text[:-18])