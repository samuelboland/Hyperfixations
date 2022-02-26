describe('Homepage', () => {
    before(() => {
        cy.visit('/');
    });

    beforeEach(() => {
        cy.asAll();
    });
    // I want to test whether the application loads at all first. It could just use
    // the later tests as a proxy for this one, since obviously they would fail if
    // the app didn't load. However, if a later test fails I'll then have to look
    // into the logs of that test and find out why, and only then will I realize that
    // the app didn't load at all. This
    it('Loads the application', () => {});

    it('Contains the link to the development log page', () => {
        cy.get('@indexLinkForBlog').should('have.attr', 'href', '/posts');
    });

    it('Contains the link to the about page', () => {
        cy.get('@indexLinkForAbout').should('have.attr', 'href', '/about');
    });

    it('does not show the header', () => {
        cy.get('header').should('not.exist');
    });

    it('does not show the footer', () => {
        cy.get('footer').should('not.exist');
    });
});
