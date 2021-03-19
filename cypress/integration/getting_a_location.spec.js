
describe('Getting a Location', () => {
    it('Displays the location pertinent to lnanguage', () => {

        cy.visit('http://localhost:3002');

        cy.get('[data-testid="Job"]')
            .type("New Job");
        
        cy.get('[data-testid="sendButton"]')
            .click();

        cy.get('[data-testid="Job"]')
            .should('have.value', '');

        cy.contains('New Job');
    });
});