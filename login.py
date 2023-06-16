from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

# Abre el navegador Chrome y accede al sitio web
driver = webdriver.Chrome()
driver.get("https://www.ejemplo.com")


time.sleep(5)

correo = driver.find_element_by_name("correo")
correo.clear()
correo.send_keys("josuetesting@gmail.com")


password = driver.find_element_by_name("password")
password.clear()
password.send_keys("qwerty")

# Busca el botón de inicio de sesión y haz clic en él
boton_inicio_sesion = driver.find_element_by_xpath("//button[@type='submit']")
boton_inicio_sesion.click()

time.sleep(5)

# Verifica que el texto de bienvenida aparezca en la página de inicio de sesión
texto_bienvenida = driver.find_element_by_xpath("//h1[contains(text(),'Bienvenido')]")
assert texto_bienvenida.text == "Bienvenido"

# Cierra el navegador
driver.quit()