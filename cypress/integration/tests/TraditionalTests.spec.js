import * as LoginActions from '../actions/LoginActions';

describe('Traditional Test Suite', () => {

  beforeEach(() => {
    cy.visit('https://demo.applitools.com/hackathon.html');
  });

  it('Login Page Elements Presence', () => {
    LoginActions.checkLoginPage()
  });


  });