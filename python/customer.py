from selenium import webdriver
driver = webdriver.Chrome(r'E:\谷歌\chromedriver.exe')
driver.get('http://localhost:8000/#/customers')

ele=driver.find_element_by_xpath("button//[@class='ant-btn'][@type='button']")
ele.click()
driver.find_element_by_xpath("span//[@class='ant-form-item-children']//input[@type='text']")[0].send_keys('hhhhh')
driver.find_element_by_xpath("span//[@class='ant-form-item-children']//input[@type='text']")[1].send_keys('1111')
pass