
describe('Позитивные и негативные авто-тесты для формы авторизации', function () {
   it('Позитивные тест авторизации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('успешно');
        cy.get('#exitMessageButton > .exitIcon').click();
    })
    it('Восстановление пароля', function () {
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('alliance-91@mail.ru');
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').click();
     })
    it('Негативный тест авторизации 1(Неправильный пароль)', function () {
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('Och123d');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').click();

     })
    it('Негативный тест авторизации 2(Неправильный логин)', function () {
        cy.get('#mail').type('alliance-91@mail.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').click();

     })
    it('Негативный тест авторизации 3(Невалидный логин)', function () {
        cy.get('#mail').type('asdfgh');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').click();

     })
    it('Негативный тест авторизации 4(Невалидный пароль)', function () {
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('asdfghj');
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').click();

     })
})