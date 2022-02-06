describe('Layout Wrapper', () => {
    it('Displays a header', () => {
        cy.visit('/');
        cy.get(["data-cy='headerLink'"]);
    });

    it('Displays a footer', () => {
        cy.get(["data-cy='footer"]);
    });
});
