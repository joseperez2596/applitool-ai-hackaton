import * as LoginActions from '../actions/LoginActions';

const TestText = 'test';

describe('Traditional Test Suite', () => {

  beforeEach(() => {
    cy.visit('https://demo.applitools.com/hackathon.html');
  });

  describe('Login Page UI Elements Test', () => {
    it('Login page elements check', () => {
      LoginActions.checkLoginPage();
    });
  });

  describe('Data-Driven Test', () => {
    it('Login with null username and password', () => {
      LoginActions.login(null, null);
    });
    it('Login with null password', () => {
      LoginActions.login(TestText, null);
    });
    it('Login with null username', () => {
      LoginActions.login(null, TestText);
    });
    it('Successful Login', () => {
      LoginActions.login(TestText, TestText);
    });
  });
});