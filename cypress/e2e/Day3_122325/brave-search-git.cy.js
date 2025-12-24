//describe suite represents what module/functionality is being tested
describe('Brave Search Functionality', () => {

    it('Search for a keyword and verify the search url contains the keyword', () => {
        // Visit Brave Search homepage
        cy.visit('https://search.brave.com/');

        // type cypress testing in your search field 
        cy.get('[id=searchbox]').type('cypress testing{enter}');
        
        //verify that the URL contains Cypress+testing
        cy.url().should('contain', 'cypress+testing');

        //wait 2 seconds
        cy.wait(2000);

        cy.get('[id=llm-show-more-button]').click();

        //verify the text contains "Cypress is a modern, open-source end-to-end testing framework" 

        cy.get('[class=svelte-e12qt1]').invoke('text').then((results) => {
            expect(results).to.contain('Cypress is a modern, open-source JavaScript-based end-to-end (E2E) testing framework designed for web applications');
        }//end of then

)})//end of test 

})//end of describe suite
//comment