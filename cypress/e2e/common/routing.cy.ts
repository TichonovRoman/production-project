import {selectByTestId} from "cypress/helpers/selectByTestId";

describe('Роутинг ', () => {
  describe('Пользователь НЕ авторизован', () => {
    it('Переход на главную страницу', () => {
      cy.visit('/');
      cy.get(selectByTestId('MainPage')).should('exist')
    })
    it('Переход открывает страницу профиля', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('MainPage')).should('exist')
    })
    it('Пользователь открывает не существующий маршрут', () => {
      cy.visit('/profilefgfggrgerg');
      cy.get(selectByTestId('NotFoundPage')).should('exist')
    })
  })

  describe('Пользователь авторизован', () => {
    beforeEach(() => {
      cy.login('admin', '123');
    })
    it('Пользователь открывает страницу профилю', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('ProfilePage')).should('exist')
    })
    it('Пользователь открывает страницу статей', () => {
      cy.visit('/articles');
      cy.get(selectByTestId('ArticlesPage')).should('exist')
    })
  })

})