from selenium import webdriver
import time

driver = webdriver.Chrome('./chromedriver')
driver.get('https://www.eum.go.kr/web/am/amMain.jsp')

inputAddress = driver.find_element_by_xpath('//*[@id="recent"]/input')
inputAddress.send_keys('광주 광산구 산월로 80')

time.sleep(5)
# addressButton = driver.find_element_by_xpath('//*[@id="recent"]/div[2]/div/ul/li/a')
addressButton = driver.find_element_by_css_selector('#recent > div.recent_list.addrDiv > div > ul > li > a')
addressButton.click()

# searchButton = driver.find_element_by_xpath('//*[@id="frm"]/fieldset/div[3]/p/span/a')
# searchButton.click()

table = driver.find_element_by_xpath('//*[@id="appoint"]/div[2]/table/tbody')
rows = table.find_elements_by_tag_name('tr')

for index, row in enumerate(rows):
    areaTitle = row.find_elements_by_tag_name('td')[2]
    print(areaTitle.text)