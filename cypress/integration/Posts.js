describe('Posts page', () => {
    before(() => {
        cy.visit('/posts');
    });

    beforeEach(() => {
        cy.asAll();
    });

    it('Renders the page', () => {});

    it('Contains post titles', () => {
        cy.get('@postIndexTitle');
    });

    it('Contains links to blog posts', () => {
        cy.get('@postIndexLink').should('have.attr', 'href');
    });
});
