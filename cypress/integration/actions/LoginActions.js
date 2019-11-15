import * as LoginPage from '../elements/LoginPageElements';

export function checkLoginPage() {
  Object.entries(LoginPage.LoginPageElements)
    .forEach(([, selector]) => {
      cy.get(selector).should('be.visible');
    });
}
