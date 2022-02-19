describe('Can navigate around application', () => {
    it('Navigates from home page to posts index', () => {
        cy.visit('/');
        cy.asAll();
        cy.get('@indexLinkForBlog').click().url().should('include', '/posts');
    });

    it('Navigates from posts index to a post', () => {
        cy.visit('/posts');
        cy.asAll();
        cy.get('@postIndexLink').eq(0).click().url().should('include', '/posts/');
    });
});
