describe('Post Index page', () => {
    before(() => {
        cy.visit('/blog/1');
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

    it('Contains at least one working link to a post show page', () => {
        cy.get('@postIndexLink').first().click();
    });
});
