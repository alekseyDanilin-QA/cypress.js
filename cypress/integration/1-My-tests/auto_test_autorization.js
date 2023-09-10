describe('Тренировка работы с Cypress на тестовом сайте demowebshop', function () {
    it('Позитивный кейс авторизации', function () {
         cy.visit('https://demowebshop.tricentis.com/');
         cy.get('.ico-login').click();
         cy.get('#Email').type('Games_auto_test1@yandex.ru');
         cy.get('#Password').type('9205416647');
         cy.get('form > .buttons > .button-1').click();
         cy.get('.header-links > ul > :nth-child(1) > .account').click();
         cy.contains('Your Personal Details');
     })
     it('Негативный кейс авторизации. Неправильный пароль', function () {
        cy.visit('https://demowebshop.tricentis.com/');
        cy.get('.ico-login').click();
        cy.get('#Email').type('Games_auto_test1@yandex.ru');
        cy.get('#Password').type('920541664711');
        cy.get('form > .buttons > .button-1').click();
        cy.contains('Login was unsuccessful.')
    })
    it('Негативный кейс авторизации. Неправильный логин', function () {
        cy.visit('https://demowebshop.tricentis.com/');
        cy.get('.ico-login').click();
        cy.get('#Email').type('Games_auto_test2@yandex.ru');
        cy.get('#Password').type('920541664711');
        cy.get('form > .buttons > .button-1').click();
        cy.contains('Login was unsuccessful.');
    })
    it('Проверка кнопки logout', function () {
        cy.visit('https://demowebshop.tricentis.com/');
        cy.get('.ico-login').click();
        cy.get('#Email').type('Games_auto_test1@yandex.ru');
        cy.get('#Password').type('9205416647');
        cy.get('form > .buttons > .button-1').click();
        cy.get('.header-links > ul > :nth-child(1) > .account').click();
        cy.get('.ico-logout').click();
        cy.contains('Log in');
    })
    it('Проверка, что у авторизованного пользователя сохраняется товар добавленный в корзину', function () {
        cy.visit('https://demowebshop.tricentis.com/');
        cy.get('.ico-login').click();
        cy.get('#Email').type('Games_auto_test1@yandex.ru');
        cy.get('#Password').type('9205416647');
        cy.get('form > .buttons > .button-1').click();
        cy.get('.ico-cart > .cart-label').click();
        cy.contains("50's Rockabilly Polka Dot Top JR Plus Size");
        cy.contains('14.1-inch Laptop');
    })
})