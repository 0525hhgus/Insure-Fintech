from selenium import webdriver

driver = webdriver.Chrome('./chromedriver')
# 크롬을 통해서 스크래핑을 진행 크롬 드라이버 로딩

driver.get('https://sports.v.daum.net/v/20210727104826854')
# naver 페이지 열기

title = driver.find_element_by_xpath('//*[@id="cSub"]/div/h3')
# xpath 기반으로 요소 찾기
print(title.text)

subscript = driver.find_element_by_id('harmonyContainer')
print(subscript.text)

# //*[@id="cSub"]/div/h3
# //*[@id="harmonyContainer"]/section/p[1]

driver.quit()