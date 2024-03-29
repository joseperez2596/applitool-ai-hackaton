import {login} from '../actions/LoginActions';
import {clickCompareExpensesLink, clickAmountsHeader} from '../actions/DashboardActions';
import {clickAddNextYear} from '../actions/CompareExpensesActions';

const TestText = 'test';

describe('Visual AI Test Suite', () => {

  beforeEach(() => {
    cy.visit('https://demo.applitools.com/hackathonV2.html');
  });

  afterEach(() => {
    cy.eyesClose();
  });

  describe('Login Page UI Elements Test', () => {
    it('Login page elements check', () => {
      cy.eyesOpen({
        appName: 'Applitools Demo App',
        testName: 'Login Page UI Elements Test',
        browser: { width: 800, height: 600 },
      });
      cy.eyesCheckWindow('Login Page');
    });
  });

  describe('Data-Driven Test', () => {
    var n = 1;
    beforeEach(() => {
      cy.eyesOpen({
        appName: 'Applitools Demo App',
        testName: `Data-Driven Test ${n}`,
        browser: { width: 800, height: 600 },
      });
      n++;
    });

    it('Login with null username and password', () => {
      login(null, null);
      cy.eyesCheckElement('Please enter both username and password');
    });
    it('Login with null password', () => {
      login(TestText, null);
      cy.eyesCheckWindow('Login Page with null password');
    });
    it('Login with null username', () => {
      login(null, TestText);
      cy.eyesCheckWindow('Login Page with null username');
    });
    it('Successful Login', () => {
      login(TestText, TestText);
      cy.eyesCheckWindow('Dashboard Page');
    });
  });

  describe('Table Sort Test', () => {
    it('Ascending amounts ordering', () => {
      cy.eyesOpen({
        appName: 'Applitools Demo App',
        testName: 'Table Sort Test',
        browser: { width: 800, height: 600 },
      });
      login(TestText, TestText);
      cy.eyesCheckWindow('Dashboard Page 1');
      clickAmountsHeader();
      cy.eyesCheckWindow('Dashboard Page 2');
    });
  });

  describe('Canvas Chart Test', () => {
    it('Add year to chart', () => {
      cy.eyesOpen({
        appName: 'Applitools Demo App',
        testName: `Canvas Chart Test`,
        browser: { width: 800, height: 600 },
      });
      login(TestText, TestText);
      cy.eyesCheckWindow('Dashboard Page');
      clickCompareExpensesLink();
      cy.eyesCheckWindow('Compare Expenses Page 1');
      clickAddNextYear();
      cy.eyesCheckWindow('Compare Expenses Page 2');
    });
  });

  describe('Dynamic Content Test', () => {
    it('Ascending amounts ordering', () => {
      cy.eyesOpen({
        appName: 'Applitools Demo App',
        testName: 'Dynamic Content Test',
        browser: { width: 800, height: 600 },
      });
      cy.visit('https://demo.applitools.com/hackathonV2.html?showAd=true');
      cy.eyesCheckWindow('Login Page');
      login(TestText, TestText);
      cy.eyesCheckWindow('Dashboard Page');
    });
  });
});
