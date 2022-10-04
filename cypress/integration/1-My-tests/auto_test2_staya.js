describe('Авторизация staya.dog', function () {
   it('Авторизация', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('danilin9191@list.ru');
        cy.get('.auth-form > form > [type="password"]').type('Qwerty12');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Мои заказы');
        cy.get('button.profile__aside--link').click();
        cy.get('.box__button_ok > .s-button__content').click();
    })
   it('Неправильный пароль', function () {
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('danilin9191@list.ru');
        cy.get('.auth-form > form > [type="password"]').type('Qwerty123');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Невозможно войти с предоставленными учетными данными');
    })
   it('Восстановление пароля', function () {
        cy.get('.auth-page__form > :nth-child(2) > a').click();
        cy.get('.form__field').type('danilin9191@list.ru');
        cy.get('.form__button > .s-button__content').click();
        cy.contains('Письмо отправлено');
    })
})