import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import NoSuchElementException
import time

@pytest.fixture
def driver():
    driver = webdriver.Chrome()
    yield driver
    driver.quit()

def test_validar_endpoint_de_gestion(driver):
    # Agrega aquí el código que deseas probar
    driver.get("https://trainme.trainme-staging.com/")

    # Espera hasta que se cargue completamente la página web
    wait = WebDriverWait(driver, 10)
    correo = wait.until(EC.visibility_of_element_located((By.XPATH, "//input[@name='email']")))

    try:
        # Busca el elemento de correo electrónico
        correo = driver.find_element(by=By.XPATH, value="//input[@name='email']")
        correo.click()
        correo.send_keys("qa@trainme.cloud")
    except NoSuchElementException:
        print("No se pudo encontrar el elemento de correo electrónico en la página web")

    try:
        # Busca el elemento de contraseña
        password = driver.find_element(by=By.XPATH, value="//input[@name='password']")
        password.clear()
        password.send_keys("qwerty")
    except NoSuchElementException:
        print("No se pudo encontrar el elemento de contraseña en la página web")

    # Busca el botón de inicio de sesión y haz clic en él
    boton_inicio_sesion = driver.find_element(by=By.XPATH, value="//button[@type='submit']")
    boton_inicio_sesion.click()

    # Espera hasta que se cargue completamente la página de gestión
    wait.until(EC.url_contains("/management"))

    # Verifica que la URL actual contenga el endpoint de gestión
    assert "/management" in driver.current_url, "La validación del endpoint ha fallado"

    # Espera 5 segundos antes de cerrar el navegador
    time.sleep(5)