describe('Navigation', () => {
    it('should navigte to the blog page', () => {
        cy.visit('http://localhost:3000/');

        cy.get('a[href*="blog"]').click();

        cy.url().should('include', '/blog');
    });
});
