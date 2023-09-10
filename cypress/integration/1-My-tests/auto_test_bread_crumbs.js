
describe('Тренировка работы с Cypress на тестовом сайте demowebshop', function () {
   it('Переходы по категориям - книги. Проверка отображения хлебных крошек', function () {
        cy.visit('https://demowebshop.tricentis.com/');
        cy.get('.block-category-navigation > .listbox > .list > :nth-child(1) > a').click();
        cy.contains('Home / Books ');
    })
    it('Переходы по категориям - компьютеры. Проверка отображения хлебных крошек', function () {
        cy.visit('https://demowebshop.tricentis.com/');
        cy.get('.list > :nth-child(2) > a').click();
        cy.contains('Home / Computers ');
    })
    it('Переходы по категориям - электроника. Проверка отображения хлебных крошек', function () {
        cy.visit('https://demowebshop.tricentis.com/');
        cy.get('.list > :nth-child(3) > a').click();
        cy.contains('Home / Electronics ');
    })
    it('Переходы по категориям - одежда и обувь. Проверка отображения хлебных крошек', function () {
        cy.visit('https://demowebshop.tricentis.com/');
        cy.get('.list > :nth-child(4) > a').click();
        cy.contains('Home / Apparel & Shoes ');
    })
    it('Переходы по категориям - цифровые загрузки. Проверка отображения хлебных крошек', function () {
        cy.visit('https://demowebshop.tricentis.com/');
        cy.get('.list > :nth-child(5) > a').click();
        cy.contains('Home / Digital downloads ');
    })
    it('Переходы по категориям - ювелирные изделия. Проверка отображения хлебных крошек', function () {
        cy.visit('https://demowebshop.tricentis.com/');
        cy.get('.list > :nth-child(6) > a').click();
        cy.contains('Home / Jewelry ');
    })
    it('Переходы по категориям - подарочные карты. Проверка отображения хлебных крошек', function () {
        cy.visit('https://demowebshop.tricentis.com/');
        cy.get('.list > :nth-child(7) > a').click();
        cy.contains('Home / Gift Cards ');
    })
    it('Проверка работоспособности кнопки Home в хлебных крошках.', function () {
    cy.visit('https://demowebshop.tricentis.com/');
    cy.get('.list > :nth-child(7) > a').click();
    cy.get('.breadcrumb > ul > :nth-child(1) > a').click()
    cy.contains('Welcome to our store');
    })
})