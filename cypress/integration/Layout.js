describe('Header Tests', () => {
    beforeEach(() => {
        cy.visit('/');

        cy.asAll();
    });

    it('Displays the site name link to home', () => {
        cy.get('@headerLinkHome').should('be.visible');
    });

    it('Does not display the dropdown links before the dropdown is clicked', () => {
        cy.get('@headerDropdownLinkHome').should('not.be.visible');
    });

    it('displays the dropdown links once the dropdown menu is open', () => {
        cy.get('@headerDropdownMenu').click();
        cy.get('@headerDropdownLinkHome').should('be.visible');
    });
});

describe('Footer Tests', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.asAll();
    });

    it('Has a link to Twitter in the footer', () => {
        cy.get('@footerTwitterLink').should('have.attr', 'href', 'https://twitter.com/samcboland');
    });

    it('Has a link to Github in the footer', () => {
        cy.get('@footerGithubLink').should(
            'have.attr',
            'href',
            'https://www.github.com/samuelboland/',
        );
    });
});
