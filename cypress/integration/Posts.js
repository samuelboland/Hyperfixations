describe('Posts page', () => {
    before(() => {
        cy.visit('/posts');
    });

    beforeEach(() => {
        cy.asAll();
    });

    it('Renders the page', () => {});

    it('Contains at least one post title', () => {
        cy.get('@postIndexTitle');
    });

    it('Contains at least one post date', () => {
        cy.get('@postIndexDate');
    });

    it('Contains at least one post body', () => {
        cy.get('@postIndexBody');
    });
});
