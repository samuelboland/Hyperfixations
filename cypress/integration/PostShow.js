describe('Post Show page', () => {
    before(() => {
        cy.visit('/posts/2022-02-13-move-github-fetching-logic-lib-file');
    });

    beforeEach(() => {
        cy.asAll();
    });

    it('Renders the page', () => {});

    it('Contains a post title', () => {
        cy.get('@postShowTitle');
    });

    it('Contains a post date', () => {
        cy.get('@postShowDate');
    });

    it('Contains a post body', () => {
        cy.get('@postShowBody');
    });

});
