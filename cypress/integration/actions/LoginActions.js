import * as LoginPage from '../elements/LoginPageElements';
import * as CommonActions from './CommonActions';

export function checkErrorMessage(ExpectedError) {
  cy.get(LoginPage.ErrorMessageSelector)
    .should('have.text', ExpectedError);
}

export function checkLoginPageTexts() {
  Object.entries(LoginPage.LoginPageElements.LoginPageElementsWithText)
    .forEach(([, element]) => {
      cy.get(element.Selector).should('have.text', element.text);
    });
}

export function checkLoginPageElements() {
  Object.entries(LoginPage.LoginPageElements.AllLoginPageElements)
    .forEach(([, element]) => {
      cy.get(element.Selector).should('be.visible');
    });
}

export function login(Username, Password) {
  if (Username === null & Password === null) {
    cy.get(LoginPage.LoginPageElements.AllLoginPageElements.LoginButton.Selector).click();
  } else if (Password === null) {
    CommonActions.TypeText(LoginPage.LoginPageElements.AllLoginPageElements.UsernameField.Selector, Username);
    cy.get(LoginPage.LoginPageElements.AllLoginPageElements.LoginButton.Selector).click();
  } else if (Username === null) {
    CommonActions.TypeText(LoginPage.LoginPageElements.AllLoginPageElements.PasswordField.Selector, Password);
    cy.get(LoginPage.LoginPageElements.AllLoginPageElements.UsernameField.Selector).clear();
    cy.get(LoginPage.LoginPageElements.AllLoginPageElements.LoginButton.Selector).click();
  } else {
    CommonActions.TypeText(LoginPage.LoginPageElements.AllLoginPageElements.UsernameField.Selector, Username);
    CommonActions.TypeText(LoginPage.LoginPageElements.AllLoginPageElements.PasswordField.Selector, Password);
    cy.get(LoginPage.LoginPageElements.AllLoginPageElements.LoginButton.Selector).click();
  }
}