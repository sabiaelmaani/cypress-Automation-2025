describe('UPS website functionality', () => {
    
    it('search for a package and verify the error message', () => {
        
        //visit the UPS homepage
        cy.visit('https://www.ups.com/', {
            onBeforeLoad(win) {
                Object.defineProperty(win.navigator, 'webdriver', { get: () => undefined });
            },
        });

        cy.wait(2000);

        //click on tracking
        cy.get('[aria-controls="subsection-tracking"]').click();
        
        //click on track a package
        cy.get('[role="menuitem"]').eq(21).click();

        //capture url and verify it contains the word track
        cy.url().should('contain', 'track');

        cy.wait (3000);

        //enter invalid tracking number
        cy.get('[id="stApp_trackingNumber"]').type('2436353636');

        //click on track button
        cy.get('[id="stApp_btnTrack"]').click();

        //capture the error message and verify it contains "Currently, we are not able to provide the tracking details"

        cy.get('[id="stApp_error_alert_list0"]').invoke('text').then((errorMessage) => {
            expect(errorMessage).to.contain('Currently, we are not able to provide the tracking details');
            
        });//end of error message

    })//end of test    

});//end of describe
