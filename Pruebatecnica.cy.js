import 'cypress-file-upload';
describe("Pruebas", () => { 
    beforeEach(() => { 
        cy.visit("https://demo.testim.io/") 
        cy.wait(2000)
        cy.viewport(1900 , 900)
    
    })
    it("Validadcion de titulo correcto", () => {
        cy.get('div.flexboxgrid__row___1y_mg h1.Hero__headline-1___3C6vA').should('be.visible') // VALIDA QUE EL COMPONENTE DEL TITULO SEA VISIBLE
        cy.get('div.flexboxgrid__row___1y_mg h1.Hero__headline-1___3C6vA').contains('Space & Beyond space| Testim.io demo') // VALIDA QUE EL TITULO CONTANTE EL TEXTO CORRECTO
    }) 
    it("Validadcion de card llamada madan", () => {
        cy.get('div[data-react-toolbox="card"].GalleryItem__gallery-item___2P8g-').should('be.visible') // VALIDACION DE CARD EXISTENTE
        cy.get('div[data-react-toolbox="card"].GalleryItem__gallery-item___2P8g-').contains('Madan') // VALIDA QUE LA CARD CONTENGA EL TEXTO MADAN
        cy.get('h5.theme__title___35Wsy').should('be.visible') // VALIDA QUE EL TITULO SEA Madan
    })  
    it("Validadcion de fecha correcta", () => {
        cy.get('div[data-react-toolbox="date-picker"] input[type="text"].theme__inputElement___27dyY.theme__inputElement___1oBGc.WhiteDatePicker__inputElement___3d9uL') .should('have.attr', 'readonly') // VALIDA QUE EL DIV DE FECHA SEA VISIBLE
        cy.get('input[type="text"].theme__inputElement___27dyY.theme__inputElement___1oBGc.WhiteDatePicker__inputElement___3d9uL').should('have.attr', 'readonly') // VALIDA QUE EL INPUT DE FECHA SEA VISIBLE
        cy.get('input[type="text"].theme__inputElement___27dyY.theme__inputElement___1oBGc.WhiteDatePicker__inputElement___3d9uL').first().click(); // HACE CLICK EN EL INPUT PARA ABRIR EL CALENDARIO
        cy.get('#left').should('exist'); // VALIDA BOTON PARA DARLE AL CALENDARIO A LA FECHA ANTERIORES
        cy.get('#left').click() // HACE CLICK AL BOTON ANTERIOR DEL CALENDARIO
        cy.get('#left').click() // HACE CLICK AL BOTON ANTERIOR DEL CALENDARIO
        cy.get('#left').click() // HACE CLICK AL BOTON ANTERIOR DEL CALENDARIO
        cy.get('div[data-react-toolbox="day"].theme__disabled___2N4Gy').contains('28').should('exist'); // VALIDA QUE LA FECHA 28/04/2023 NO ESTA DISPONIBLE
    }) 
    it("Validadcion de seleccionar boleto para 2 adultos 1 niño", () => {
        cy.get('div[data-react-toolbox="date-picker"] input[type="text"].theme__inputElement___27dyY.theme__inputElement___1oBGc.WhiteDatePicker__inputElement___3d9uL') .should('have.attr', 'readonly') // VALIDA QUE EL DIV DE FECHA SEA VISIBLE
        cy.get('input[type="text"].theme__inputElement___27dyY.theme__inputElement___1oBGc.WhiteDatePicker__inputElement___3d9uL').should('have.attr', 'readonly') // VALIDA QUE EL INPUT DE FECHA SEA VISIBLE
        cy.get('input[type="text"].theme__inputElement___27dyY.theme__inputElement___1oBGc.WhiteDatePicker__inputElement___3d9uL').first().click(); // HACE CLICK EN EL INPUT PARA ABRIR EL CALENDARIO
        cy.get('div[data-react-toolbox="day"].theme__active___2k63V').contains('25').click(); // SELECCIONA LA FECHA ACTUAL PARA SELECCIONAR VIAJE
        cy.contains('button', 'Ok').should('have.class', 'theme__button___1iKuo').click(); // CLICK EN EL BOTON DE OK PARA CERRAR EL CALENDARIO
        cy.get('input.theme__inputElement___27dyY[value="Adults (18+)"]').click() // VALIDA EL INPUT DE CANTIDAD DE ADULTOS
        cy.get('.theme__active___31xyK > .theme__values___1jS4g > :nth-child(3)').click() // SELECCIONA 2 ADULTOS
        cy.get(':nth-child(4) > .theme__input___qUQeP > .theme__inputElement___27dyY').should('be.visible') // VALIDA INPUT DE EL CAMPO DE NIÑOS
        cy.get(':nth-child(4) > .theme__input___qUQeP > .theme__inputElement___27dyY').click() // HACE CLICK EN EL INPUT DE NIÑO
        cy.get('.theme__active___31xyK > .theme__values___1jS4g > :nth-child(2)').click() // SELECCIONA 1 NIÑO PARA EL BOLETO
    }) 
    it("Validadcion de filtrado por planetas azules solamente", () => {
        cy.get('button[data-react-toolbox="button"]').should('be.visible') // VALIDA QUE EL BOTON DE DESTINO SEA VISIBLE
        cy.get('button[data-react-toolbox="button"]').contains('Select Destination').click(); // VALIDA QUE LE DE CLICK AL BOTON DE DESTINO
        cy.get('.Gallery__filters-box___1z3SX > :nth-child(2) > .theme__input___qUQeP > .theme__inputElement___27dyY').click() // HACE CLICK EN EL SELECT DE FILTRADO DE PLANETAS
        cy.get('.theme__active___31xyK > .theme__values___1jS4g > :nth-child(4)').click() // SELECCIONA PLANETAS AZULES
    })
    it("Validadcion de seleccionar del planeta Tayabamba", () => {
        cy.get('button[data-react-toolbox="button"]').should('be.visible') // VALIDA QUE EL BOTON DE DESTINO SEA VISIBLE
        cy.get('button[data-react-toolbox="button"]').contains('Select Destination').click(); // VALIDA QUE LE DE CLICK AL BOTON DE DESTINO
        cy.get('.Gallery__filters-box___1z3SX > :nth-child(2) > .theme__input___qUQeP > .theme__inputElement___27dyY').click() // HACE CLICK EN EL SELECT DE FILTRADO DE PLANETAS
        cy.get('.theme__active___31xyK > .theme__values___1jS4g > :nth-child(4)').click() // SELECCIONA PLANETAS AZULES
        cy.get(':nth-child(2) > .theme__cardActions___1aHjq > .theme__button___1iKuo').click() // SELECCIONA EL PLANETA TAYABAMBA
    })
    it("Validadcion de Checkout", () => {
        cy.get('button[data-react-toolbox="button"]').should('be.visible') // VALIDA QUE EL BOTON DE DESTINO SEA VISIBLE
        cy.get('button[data-react-toolbox="button"]').contains('Select Destination').click(); // VALIDA QUE LE DE CLICK AL BOTON DE DESTINO
        cy.get('.Gallery__filters-box___1z3SX > :nth-child(2) > .theme__input___qUQeP > .theme__inputElement___27dyY').click() // HACE CLICK EN EL SELECT DE FILTRADO DE PLANETAS
        cy.get('.theme__active___31xyK > .theme__values___1jS4g > :nth-child(4)').click() // SELECCIONA PLANETAS AZULES
        cy.get(':nth-child(2) > .theme__cardActions___1aHjq > .theme__button___1iKuo').click() // SELECCIONA EL PLANETA TAYABAMBA
        cy.get('form > :nth-child(1) > .theme__inputElement___27dyY').type('Josue Venegas') // INTRODUCE NOMBRE PARA EL CHECKOUT
        cy.get('form > :nth-child(2) > .theme__inputElement___27dyY').type('josuedanii.v@gmail.com') // INTRODUCE EMAIL PARA EL CHECKOUT
        cy.get(':nth-child(3) > .theme__inputElement___27dyY').type('111-11-1111') // INTRODUCE EL SOCIAL SECURITY DESADO
        cy.get(':nth-child(4) > .theme__inputElement___27dyY').type('2124567890') // INTRODUCE EL PHONE DESEADO
    })
    it("Validadcion de Subida de foto", () => {

        cy.get('button[data-react-toolbox="button"]').should('be.visible') // VALIDA QUE EL BOTON DE DESTINO SEA VISIBLE
        cy.get('button[data-react-toolbox="button"]').contains('Select Destination').click(); // VALIDA QUE LE DE CLICK AL BOTON DE DESTINO
        cy.get('.Gallery__filters-box___1z3SX > :nth-child(2) > .theme__input___qUQeP > .theme__inputElement___27dyY').click() // HACE CLICK EN EL SELECT DE FILTRADO DE PLANETAS
        cy.get('.theme__active___31xyK > .theme__values___1jS4g > :nth-child(4)').click() // SELECCIONA PLANETAS AZULES
        cy.get(':nth-child(2) > .theme__cardActions___1aHjq > .theme__button___1iKuo').click() // SELECCIONA EL PLANETA TAYABAMBA
        cy.get('form > :nth-child(1) > .theme__inputElement___27dyY').type('Josue Venegas') // INTRODUCE NOMBRE PARA EL CHECKOUT
        cy.get('form > :nth-child(2) > .theme__inputElement___27dyY').type('josuedanii.v@gmail.com') // INTRODUCE EMAIL PARA EL CHECKOUT
        cy.get(':nth-child(3) > .theme__inputElement___27dyY').type('111-11-1111') // INTRODUCE EL SOCIAL SECURITY DESADO
        cy.get(':nth-child(4) > .theme__inputElement___27dyY').type('2124567890') // INTRODUCE EL PHONE DESEADO
        cy.get('.CustomerInfo__dropzone-box___27VMo').click() // HACE CLICK PARA ABRIR LA CARGA DE IMAGEN
        cy.fixture('jorge.jpg').then((fileContent) => {
                cy.get('input[type="file"]').attachFile({
                  fileContent: fileContent,
                  fileName: 'jorge.jpg',
              mimeType: 'image/jpg'
            });
          });
        });

        it("Validadcion de De codigo de promocion", () => {
            cy.get('button[data-react-toolbox="button"]').should('be.visible') // VALIDA QUE EL BOTON DE DESTINO SEA VISIBLE
            cy.get('button[data-react-toolbox="button"]').contains('Select Destination').click(); // VALIDA QUE LE DE CLICK AL BOTON DE DESTINO
            cy.get('.Gallery__filters-box___1z3SX > :nth-child(2) > .theme__input___qUQeP > .theme__inputElement___27dyY').click() // HACE CLICK EN EL SELECT DE FILTRADO DE PLANETAS
            cy.get('.theme__active___31xyK > .theme__values___1jS4g > :nth-child(4)').click() // SELECCIONA PLANETAS AZULES
            cy.get(':nth-child(2) > .theme__cardActions___1aHjq > .theme__button___1iKuo').click() // SELECCIONA EL PLANETA TAYABAMBA
            cy.get('form > :nth-child(1) > .theme__inputElement___27dyY').type('Josue Venegas') // INTRODUCE NOMBRE PARA EL CHECKOUT
            cy.get('form > :nth-child(2) > .theme__inputElement___27dyY').type('josuedanii.v@gmail.com') // INTRODUCE EMAIL PARA EL CHECKOUT
            cy.get(':nth-child(3) > .theme__inputElement___27dyY').type('111-11-1111') // INTRODUCE EL SOCIAL SECURITY DESADO
            cy.get(':nth-child(4) > .theme__inputElement___27dyY').type('2124567890') // INTRODUCE EL PHONE DESEADO
            cy.get('.flexboxgrid__col-xs-7___3o2m- > .theme__input___qUQeP > .theme__inputElement___27dyY').type('30076') // INTRODUCE EL CODIGO DE PROMOCION
        })
        it("Validadcion de realizacion del pago", () => {
            cy.get('button[data-react-toolbox="button"]').should('be.visible') // VALIDA QUE EL BOTON DE DESTINO SEA VISIBLE
            cy.get('button[data-react-toolbox="button"]').contains('Select Destination').click(); // VALIDA QUE LE DE CLICK AL BOTON DE DESTINO
            cy.get('.Gallery__filters-box___1z3SX > :nth-child(2) > .theme__input___qUQeP > .theme__inputElement___27dyY').click() // HACE CLICK EN EL SELECT DE FILTRADO DE PLANETAS
            cy.get('.theme__active___31xyK > .theme__values___1jS4g > :nth-child(4)').click() // SELECCIONA PLANETAS AZULES
            cy.get(':nth-child(2) > .theme__cardActions___1aHjq > .theme__button___1iKuo').click() // SELECCIONA EL PLANETA TAYABAMBA
            cy.get('form > :nth-child(1) > .theme__inputElement___27dyY').type('Josue Venegas') // INTRODUCE NOMBRE PARA EL CHECKOUT
            cy.get('form > :nth-child(2) > .theme__inputElement___27dyY').type('josuedanii.v@gmail.com') // INTRODUCE EMAIL PARA EL CHECKOUT
            cy.get(':nth-child(3) > .theme__inputElement___27dyY').type('111-11-1111') // INTRODUCE EL SOCIAL SECURITY DESADO
            cy.get(':nth-child(4) > .theme__inputElement___27dyY').type('2124567890') // INTRODUCE EL PHONE DESEADO
            cy.get('.flexboxgrid__col-xs-7___3o2m- > .theme__input___qUQeP > .theme__inputElement___27dyY').type('30076') // INTRODUCE EL CODIGO DE PROMOCION
            cy.get('.flexboxgrid__col-xs-5___1HkK5 > .theme__button___1iKuo').click() // CLICK EN APPLY PARA REALIZAR EL PAGO
        })


})