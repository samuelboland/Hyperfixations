describe('Navigation', () => {
    // I want to test whether the application loads at all first. It could just use
    // the later tests as a proxy for this one, since obviously they would fail if
    // the app didn't load. However, if a later test fails I'll then have to look
    // into the logs of that test and find out why, and only then will I realize that
    // the app didn't load at all. This
    it('Loads the application', () => {
        cy.visit('/');
    });

    it('Contains the link to the blog page', () => {
        cy.get('[data-cy="indexLinkForBlog"]');
    });

    it('Contains the blurb for the blog page', () => {
        cy.get('[data-cy="indexBlurbForBlog');
    });

    it('Follows link to blog route', () => {
        cy.get('[data-cy="indexLinkForBlog"]').click();
        cy.url().should('include', '/blog');
    });
});
