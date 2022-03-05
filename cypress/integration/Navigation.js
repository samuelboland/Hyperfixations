describe('Can navigate around application', () => {
    it('Navigates from home page to posts index', () => {
        cy.visit('/');
        cy.asAll();
        cy.get('@indexLinkForBlog').click().url().should('include', '/blog/1');
    });

    it('Navigates from posts index to a post', () => {
        cy.visit('/blog/1');
        cy.asAll();
        cy.get('@postIndexLink').eq(0).click().url().should('include', '/blog/post');
    });
});
