describe('Action Item part 1' , async () => {

    it('Usps - verify the url for track a package contains the word track', () => {
        //visit usps website
        cy.visit('https://www.ups.com/');

        //click on tracking 
        cy.get('[aria-controls="subsection-tracking"]').click();

        //wait 2 seconds
        cy.wait(2000);

        //click on track a package 
        cy.xpath('[role="menuitem"]').eq(1).click();
    
        //capture the URL and verify it contains the word track
        cy.url().should('contain', 'Track');

    })//end of test 1

    it('enter invalid tracking number and verify error message is shown', () => {
            
            cy.visit('https://tools.usps.com/go/TrackConfirmAction_input');
        
            //enter invalid tracking number
            cy.get('[id="tracking-input"]').type('7483927593394678')

            //click on track
            cy.get('[class="button tracking-btn"]').click()

            //capture and verify the error message contains "Currently, we are not able to provide the tracking details"
            cy.get('[class="banner-content"]').invoke('text').then((errorMsg) => {
                expect(errorMsg).to.contain('Tracking is not available for this item.')
            })//end of then

    })//end of test

})//end of describe
