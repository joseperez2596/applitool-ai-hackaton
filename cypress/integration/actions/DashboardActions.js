import * as DashboardPage from '../elements/DashboardPageElements';
import * as DashboardData from '../data/DashboardData';

export function checkDashboard() {
  cy.get(DashboardPage.DashboardPageElements.UserPicture)
    .should('be.visible');
}

export function clickCompareExpensesLink() {
  cy.get(DashboardPage.DashboardPageElements.CompareExpensesLink).click();
}

export function clickAmountsHeader() {
  cy.get(DashboardPage.DashboardPageElements.AmountsHeader).click();
}

export function checkAmountsOrdering() {
  var i = 1;
  Object.entries(DashboardData.DashboardPageData.Rows)
    .forEach(([, value]) => {
    cy.get(`#transactionsTable > tbody > tr:nth-child(${i}) > td:nth-child(1) > span:nth-child(2)`)
      .should('have.text', value.Status);
    cy.get(`#transactionsTable > tbody > tr:nth-child(${i}) > td:nth-child(2) > span:nth-child(1)`)
      .should('have.text', value.Date);
    cy.get(`#transactionsTable > tbody > tr:nth-child(${i}) > td:nth-child(2) > span.smaller.lighter`)
      .should('have.text', value.Time);
    cy.get(`#transactionsTable > tbody > tr:nth-child(${i}) > td.cell-with-media > span`)
      .should('have.text', value.Description);
    cy.get(`#transactionsTable > tbody > tr:nth-child(${i}) > td.text-center > a`)
      .should('have.text', value.Category);
    cy.get(`#transactionsTable > tbody > tr:nth-child(${i}) > td.text-right.bolder.nowrap > span`)
      .should('have.text', value.Amount);
    i++;
  });
}