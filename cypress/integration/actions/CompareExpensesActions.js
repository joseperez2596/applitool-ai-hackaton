import * as CompareExpensesPage from '../elements/CompareExpensesPageElements';

export function checkCompareExpenesesPage() {
  cy.get(CompareExpensesPage.CompareExpensesPageElements.AddNextYearDataButton)
    .should('be.visible');
}
