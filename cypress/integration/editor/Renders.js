describe('New post form renders correctly', () => {
    it('Renders the new post page', () => {
        cy.visit('/blog/new');
    });
    it('Displays a status message', () => {
        cy.get('[data-cy="postStatusMessage"]').should('exist');
    });

    it('Shows that the post has not been submitted yet', () => {
        cy.get('[data-cy="postStatusMessage"]').contains('Not Submitted');
    });

    it('Contains a title input field', () => {
        cy.get('[data-cy="postTitleInput"]').should('exist');
    });

    it('Contains a menu bar', () => {
        cy.get('[data-cy="editorMenuBar"]').should('exist');
    });

    it('Contains a body input field', () => {
        cy.get('[data-cy="editorBodyInput"]').should('exist');
    });
});
