const sampleText = 'Sample Text';

describe('Editor menu buttons all work correctly', () => {
    it('Makes an unordered list', () => {
        cy.visit('/blog/new');
        cy.get('[data-cy="editorBodyInput"]')
            .type(sampleText + '{enter} ' + sampleText.length)
            .type('{selectall}');
        cy.get('[data-cy="unorderedListButton"]')
            .should('be.visible')
            .click()
            .should('not.have.focus');
        // Wait for the DOM to settle. See here: https://www.cypress.io/blog/2020/07/22/do-not-get-too-detached/
        cy.get('[data-cy="editorBodyInput"]').find('ul > li').should('have.length', 2);
        cy.contains(sampleText);
        cy.contains(sampleText.length);
    });
    it('Makes an ordered list', () => {
        cy.visit('/blog/new');
        cy.get('[data-cy="editorBodyInput"]')
            .type(sampleText + '{enter} ' + sampleText.length)
            .type('{selectall}');
        cy.get('[data-cy="orderedListButton"]')
            .should('be.visible')
            .click()
            .should('not.have.focus');
        // Wait for the DOM to settle. See here: https://www.cypress.io/blog/2020/07/22/do-not-get-too-detached/
        cy.get('[data-cy="editorBodyInput"]').find('ol > li').should('have.length', 2);
        cy.contains(sampleText);
        cy.contains(sampleText.length);
    });
    it('Writes bold text', () => {
        cy.visit('/blog/new');
        cy.get('[data-cy="editorBodyInput"]').type(sampleText).type('{selectall}');
        cy.get('[data-cy="boldButton"]').should('be.visible').click().should('not.have.focus');
        cy.get('[data-cy="editorBodyInput"]').find('strong').should('have.text', sampleText);
    });

    it('Writes italicized text', () => {
        cy.visit('/blog/new');
        cy.get('[data-cy="editorBodyInput"]').type(sampleText).type('{selectall}');
        cy.get('[data-cy="italicButton"]').should('be.visible').click().should('not.have.focus');
        cy.get('[data-cy="editorBodyInput"]').find('em').should('have.text', sampleText);
    });

    it('Writes strikethrough text', () => {
        cy.visit('/blog/new');
        cy.get('[data-cy="editorBodyInput"]').type(sampleText).type('{selectall}');
        cy.get('[data-cy="strikeButton"]').should('be.visible').click().should('not.have.focus');
        cy.get('[data-cy="editorBodyInput"]').find('s').should('have.text', sampleText);
    });
    it('Makes code blocks', () => {
        cy.visit('/blog/new');
        cy.get('[data-cy="editorBodyInput"]').type(sampleText).type('{selectall}');
        cy.get('[data-cy="codeBlockButton"]').should('be.visible').click().should('not.have.focus');
        cy.get('[data-cy="editorBodyInput"]').find('pre > code').should('have.text', sampleText);
    });
    it('Writes a level 1 header', () => {
        cy.visit('/blog/new');
        cy.get('[data-cy="editorBodyInput"]').type(sampleText).type('{selectall}');
        cy.get('[data-cy="h1Button"]').should('be.visible').click().should('not.have.focus');
        cy.get('[data-cy="editorBodyInput"]').find('h1').should('have.text', sampleText);
    });
    it('Writes a level 2 header', () => {
        cy.visit('/blog/new');
        cy.get('[data-cy="editorBodyInput"]').type(sampleText).type('{selectall}');
        cy.get('[data-cy="h2Button"]').should('be.visible').click().should('not.have.focus');
        cy.get('[data-cy="editorBodyInput"]').find('h2').should('have.text', sampleText);
    });
    it('Writes a level 3 header', () => {
        cy.visit('/blog/new');
        cy.get('[data-cy="editorBodyInput"]').type(sampleText).type('{selectall}');
        cy.get('[data-cy="h3Button"]').should('be.visible').click().should('not.have.focus');
        cy.get('[data-cy="editorBodyInput"]').find('h3').should('have.text', sampleText);
    });
    it('Makes a block quote', () => {
        cy.visit('/blog/new');
        cy.get('[data-cy="editorBodyInput"]').type(sampleText).type('{selectall}');
        cy.get('[data-cy="blockQuoteButton"]')
            .should('be.visible')
            .click()
            .should('not.have.focus');
        cy.get('[data-cy="editorBodyInput"]').find('blockquote').should('have.text', sampleText);
    });
});

const difficultOnes = ['unorderedListButton', 'orderedListButton'];
