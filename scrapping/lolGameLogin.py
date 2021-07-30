from selenium import webdriver

driver = webdriver.Chrome('./chromedriver')
driver.get('https://na.leagueoflegends.com/ko-kr/')

loginButton = driver.find_element_by_xpath('//*[@id="riotbar-right-content"]/div[3]/div[1]/a')
loginButton.click()

idInput = driver.find_element_by_css_selector('body > div > div > div > div.grid.grid-direction__row.grid-page-web__content > div > div > div.grid.grid-align-center.grid-justify-space-between.grid-fill.grid-direction__column.grid-panel-web__content.grid-panel__content > div > div > div > div:nth-child(1) > div > input')
idInput.send_keys('test')

passwordInput = driver.find_element_by_css_selector('body > div > div > div > div.grid.grid-direction__row.grid-page-web__content > div > div > div.grid.grid-align-center.grid-justify-space-between.grid-fill.grid-direction__column.grid-panel-web__content.grid-panel__content > div > div > div > div.field.password-field.field--animate > div > input')
passwordInput.send_keys('test')

ClickButton = driver.find_element_by_css_selector('body > div > div > div > div.grid.grid-direction__row.grid-page-web__content > div > div > button')
ClickButton.click()
