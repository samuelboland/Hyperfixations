describe('Post Show page', () => {
    before(() => {
        cy.visit('/blog/post/2022-02-09-switching-to-markdown-files');
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

    // ReactMarkdown converts md to normal html. Any tags that I apply to
    // the ReactMarkdown component are not preserved. This is a proxy. I do not
    // use any <p>s outside of the markdown component. If one is present, it should
    // mean that the post is there.
    it('Contains at least one paragraph element', () => {
        cy.get('p');
    });

    it('Contains at least one image', () => {
        cy.get('img');
    });
});
