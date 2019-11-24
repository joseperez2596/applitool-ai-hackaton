import * as LoginActions from '../actions/LoginActions';
import * as DashboardActions from '../actions/DashboardActions';

const TestText = 'test';

describe('Traditional Test Suite', () => {

  beforeEach(() => {
    cy.visit('https://demo.applitools.com/hackathonV2.html');
  });

  describe('Login Page UI Elements Test', () => {
    it('Login page elements check', () => {
      LoginActions.checkLoginPageElements();
      LoginActions.checkLoginPageTexts();
    });
  });

  describe('Data-Driven Test', () => {
    it('Login with null username and password', () => {
      LoginActions.login(null, null);
      LoginActions.checkErrorMessage('Please enter both username and password');
    });
    it('Login with null password', () => {
      LoginActions.login(TestText, null);
      LoginActions.checkErrorMessage('Password must be present');
    });
    it('Login with null username', () => {
      LoginActions.login(null, TestText);
      LoginActions.checkErrorMessage('Username must be present');
    });
    it('Successful Login', () => {
      LoginActions.login(TestText, TestText);
      DashboardActions.checkDashboard();
    });
  });

  describe('Table Sort Test', () => {
    it('Ascending amounts ordering', () => {
      LoginActions.login(TestText, TestText);
      DashboardActions.checkDashboard();
      DashboardActions.clickAmountsHeader();
      DashboardActions.checkAmountsOrdering();
    });
  });

  describe('Canvas Chart Test', () => {
    it('Check canvas chart data', () => {
      /* This cannot be automated because cypress
        does not access to the chart values */
    });
    it('Add year to chart', () => {
      /* This cannot be automated because cypress
        does not access to the chart values */
    });
  });

  describe('Dynamic Content Test', () => {
    it('Assert gifs presence', () => {
      cy.visit('https://demo.applitools.com/hackathonV2.html?showAd=true')
      LoginActions.login(TestText, TestText);
      DashboardActions.checkDashboard();
      DashboardActions.checkGifs();
    });
  });
});