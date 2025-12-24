describe('Action Item part 2' , () => {

    it('verify zipcode entry is retained in results page', () => {
        //navigate to uhc website
        cy.visit('https://www.uhc.com/');

        cy.wait(10000);
        //close out popup
        cy.get('[aria-label="Close"]').click()

        //scroll to health insurance plans
        cy.get('[data-cta-component="ctaComponent"]').eq(6).scrollIntoView();

        //click on health insurance plans
        cy.get('[data-cta-component="ctaComponent"]').eq(6).click();

        //enter zip code
        cy.get('[id="zip-code"]').type('11218');

        //click on find plans near me button
        cy.get('[aria-label="Find plans near me "]').click();

        //capture the heading on the results page and verify the text contains the zip code entered
        cy.get('[id="edit-zip-code-header"]').invoke('text').then((resultHeader) => {
            expect(resultHeader).to.contain('11218');

        })//end of then

    })//end of test


})//end of describe