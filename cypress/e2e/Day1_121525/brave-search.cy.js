let currentUrl;

//describe suite represents what module/functionality is being tested
describe('Brave Search Functionality', () => {

    it('Search for a keyword and verify the search url contains the keyword', () => {
        // Visit Brave Search homepage
        cy.visit('https://search.brave.com/');

        // type cypress testing in your search field 
        cy.get('[id=searchbox]').type('cypress testing{enter}');
        
        //verify that the URL contains Cypress+testing
        cy.url().should('contain', 'cypress+testing');

        //store the current url to use in test 2
        cy.url().then((url) => {
            currentUrl = url;
        });
    })//end of test 1

    it('clicks on more button and verifies additional content is shown', () => {
        //visit the url stored from test 1
        cy.visit(currentUrl);
        cy.get('[id=llm-show-more-button]').click();

        //verify the text contains "Cypress is a modern, open-source end-to-end testing framework" 

        cy.get('[class=svelte-e12qt1]').invoke('text').then((results) => {
            expect(results).to.contain('Cypress is a modern, open-source JavaScript-based end-to-end (E2E) testing framework designed for web applications');
        }//end of then

)})//end of test 2


})//end of describe suite