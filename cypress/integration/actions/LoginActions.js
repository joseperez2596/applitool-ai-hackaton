import * as LoginPage from '../elements/LoginPageElements';
import * as CommonActions from './CommonActions';

function checkErrorMessage(ExpectedError) {
  cy.get(LoginPage.ErrorMessageSelector)
    .should('have.text', ExpectedError);
}

export function checkLoginPage() {
  Object.entries(LoginPage.LoginPageElements)
    .forEach(([, selector]) => {
      cy.get(selector).should('be.visible');
    });
}

export function login(Username, Password) {
  if (Username === null & Password === null) {
    cy.get(LoginPage.LoginPageElements.LoginButtonSelector).click();
    checkErrorMessage('Both Username and Password must be present ');
  } else if (Password === null) {
    CommonActions.TypeText(LoginPage.LoginPageElements.UsernameFieldSelector, Username);
    cy.get(LoginPage.LoginPageElements.LoginButtonSelector).click();
    checkErrorMessage('Password must be present');
  } else if (Username === null) {
    CommonActions.TypeText(LoginPage.LoginPageElements.PasswordFieldSelector, Password);
    cy.get(LoginPage.LoginPageElements.UsernameFieldSelector).clear();
    cy.get(LoginPage.LoginPageElements.LoginButtonSelector).click();
    checkErrorMessage('Username must be present');
  } else {
    CommonActions.TypeText(LoginPage.LoginPageElements.UsernameFieldSelector, Username);
    CommonActions.TypeText(LoginPage.LoginPageElements.PasswordFieldSelector, Password);
    cy.get(LoginPage.LoginPageElements.LoginButtonSelector).click();
  }
}