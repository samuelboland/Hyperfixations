import { useSession } from 'next-auth/react';

describe('Login Page', () => {
    it('Displays the login page', () => {
        cy.visit('/login');
    });

    it('Lets user know that they are logged out', () => {
        cy.get("[data-cy='signedOutNotice']");
    });

    it('Displays sign in button when logged out', () => {
        cy.get("[data-cy='loginButton']");
    });

    it('Shows google as an oauth provider', () => {
        cy.get("[data-cy='loginButton']").click();
        cy.get('button').should('contain', 'Sign in with Google');
    });

    /*it('Mocks a logged in session', () => {});

    it('Display username when logged in', () => {
        cy.stub(useSession).returns({
            user: { email: 'test@test.com', name: 'Test Testperson' },
        });

        cy.visit('/login');

        cy.get("[data-cy='userIdDisplay']").should('include', 'test@test.com');
    });

    it('Displays sign out button when logged in', () => {
        cy.get("[data-cy='logoutButton']");
    });*/
});
