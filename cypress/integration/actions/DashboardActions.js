import * as DashboardPage from '../elements/DashboardPageElements';

export function checkDashboard() {
  cy.get(DashboardPage.DashboardPageElements.UserPicture)
    .should('be.visible');
}

export function clickCompareExpensesLink() {
  cy.get(DashboardPage.DashboardPageElements.CompareExpensesLink).click();
}
