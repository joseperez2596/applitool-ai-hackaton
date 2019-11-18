export function TypeText(Selector, Text) {
    cy.get(Selector)
    .clear()
    .type(Text)
    .should('have.value', Text);
}