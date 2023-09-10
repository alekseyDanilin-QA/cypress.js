describe('Тренировка работы с Cypress на тестовом сайте demowebshop', function () {
    it('Проверка добавления и удаления товаров в корзину', function () {
         cy.visit('https://demowebshop.tricentis.com/');
         cy.get('.block-category-navigation > .listbox > .list > :nth-child(1) > a').click();
         cy.get(':nth-child(1) > .product-item > .details > .add-info > .buttons > .button-2').click();
         cy.get('.list > :nth-child(2) > a').click();
         cy.get(':nth-child(2) > .sub-category-item > .picture > a > img').click();
         cy.get('.button-2').click()
         cy.get('.ico-cart > .cart-label').click();
         cy.contains('Computing and Internet');
         cy.contains('14.1-inch Laptop');
         cy.get(':nth-child(1) > .remove-from-cart > input').click();
         cy.get(':nth-child(2) > .remove-from-cart > input').click();
         cy.get('.update-cart-button').click();
         cy.contains('Your Shopping Cart is empty! ');
     })
     it('Проверка перехода к товару со страницы корзины', function(){
        cy.visit('https://demowebshop.tricentis.com/');
        cy.get('.top-menu > :nth-child(3) > [href="/electronics"]').click();
        cy.get(':nth-child(2) > .sub-category-item > .picture > a > img').click();
        cy.get(':nth-child(1) > .product-item > .details > .add-info > .buttons > .button-2').click();
        cy.get('.ico-cart > .cart-label').click();
        cy.get('.product-name').click();
        cy.contains('Home / Electronics / Cell phones / Smartphone ');
     })
     it('Проверка ввода валидного email в инпут для подписки на новости', function(){
        cy.visit('https://demowebshop.tricentis.com/');
        cy.get('#newsletter-email').type('Games_auto_test1@yandex.ru');
        cy.get('#newsletter-subscribe-button').click();
        cy.contains('Thank you for signing up! A verification email has been sent. We appreciate your interest.');
     })
     it('Проверка ввода невалидного email в инпут для подписки на новости', function(){
        cy.visit('https://demowebshop.tricentis.com/');
        cy.get('#newsletter-email').type('fsdfasddasda');
        cy.get('#newsletter-subscribe-button').click();
        cy.contains('Enter valid email')
     })
     it('Нельзя зарегистрироваться с уже зарегестрированным email', function(){
        cy.visit('https://demowebshop.tricentis.com/');
        cy.get('.ico-register').click();
        cy.get('#gender-male').click();
        cy.get('#FirstName').type('Ivan');
        cy.get('#LastName').type('Ivanov');
        cy.get('#Email').type('Games_auto_test1@yandex.ru');
        cy.get('#Password').type('sdfsdfsf');
        cy.get('#ConfirmPassword').type('sdfsdfsf');
        cy.get('#register-button').click();
        cy.contains('The specified email already exists')
     })
     it('Проверка валидации поля эмейла на собаку', function(){
        cy.visit('https://demowebshop.tricentis.com/');
        cy.get('.ico-register').click();
        cy.get('#gender-male').click();
        cy.get('#FirstName').type('Ivan');
        cy.get('#LastName').type('Ivanov');
        cy.get('#Email').type('Games_auto_test1yandex.ru');
        cy.get('#Password').type('sdfsdfsf');
        cy.get('#ConfirmPassword').type('sdfsdfsf');
        cy.get('#register-button').click();
        cy.contains('Wrong email')
     })
     it('Проверка обязательности ввода имени в поле FirstName', function(){
        cy.visit('https://demowebshop.tricentis.com/');
        cy.get('.ico-register').click();
        cy.get('#gender-male').click();
        cy.get('#LastName').type('Ivanov');
        cy.get('#Email').type('Games_auto_test1@yandex.ru');
        cy.get('#Password').type('sdfsdfsf');
        cy.get('#ConfirmPassword').type('sdfsdfsf');
        cy.get('#register-button').click();
        cy.contains('First name is required.')
     })
     it('Проверка обязательности ввода фамилии в поле LastName', function(){
        cy.visit('https://demowebshop.tricentis.com/');
        cy.get('.ico-register').click();
        cy.get('#gender-male').click();
        cy.get('#FirstName').type('Ivan');
        cy.get('#Email').type('Games_auto_test1@yandex.ru');
        cy.get('#Password').type('sdfsdfsf');
        cy.get('#ConfirmPassword').type('sdfsdfsf');
        cy.get('#register-button').click();
        cy.contains('Last name is required.')
     })
     it('Проверка обязательности ввода email', function(){
        cy.visit('https://demowebshop.tricentis.com/');
        cy.get('.ico-register').click();
        cy.get('#gender-male').click();
        cy.get('#FirstName').type('Ivan');
        cy.get('#LastName').type('Ivanov');
        cy.get('#Password').type('sdfsdfsf');
        cy.get('#ConfirmPassword').type('sdfsdfsf');
        cy.get('#register-button').click();
        cy.contains('Email is required.')
     })
     it('Проверка обязательности заполнения 1 инпута для ввода пароля', function(){
        cy.visit('https://demowebshop.tricentis.com/');
        cy.get('.ico-register').click();
        cy.get('#gender-male').click();
        cy.get('#FirstName').type('Ivan');
        cy.get('#LastName').type('Ivanov');
        cy.get('#Email').type('Games_auto_test1@yandex.ru');
        cy.get('#ConfirmPassword').type('sdfsdfsf');
        cy.get('#register-button').click();
        cy.contains('Password is required.')
        cy.contains('The password and confirmation password do not match.')
     })
     it('Проверка обязательности заполнения 2 инпута для ввода пароля', function(){
        cy.visit('https://demowebshop.tricentis.com/');
        cy.get('.ico-register').click();
        cy.get('#gender-male').click();
        cy.get('#FirstName').type('Ivan');
        cy.get('#LastName').type('Ivanov');
        cy.get('#Email').type('Games_auto_test1@yandex.ru');
        cy.get('#Password').type('sdfsdfsf');
        cy.get('#register-button').click();
        cy.contains('Password is required.')
     })
     it('Проверка не совпадающих паролей', function(){
        cy.visit('https://demowebshop.tricentis.com/');
        cy.get('.ico-register').click();
        cy.get('#gender-male').click();
        cy.get('#FirstName').type('Ivan');
        cy.get('#LastName').type('Ivanov');
        cy.get('#Email').type('Games_auto_test1@yandex.ru');
        cy.get('#Password').type('sdfsdfsf');
        cy.get('#ConfirmPassword').type('sdfsdfsf123');
        cy.get('#register-button').click();
        cy.contains('The password and confirmation password do not match.')
     })
 })