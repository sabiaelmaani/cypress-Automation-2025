describe('testing different cypress commands on mlcalc website', () => {

it('visit mlcalc and change the purchase price to practice type command', () => {
    //visit mlcalc website
    cy.visit('https://www.mlcalc.com/');

    //change the value in the purchase price field to 450000
    cy.get('[id=ma]').clear().type('450000');

    //click on calculate button
    cy.get('[type=submit]').eq(0).click();

    //capture the results summary text and validate it contains "$296,664"
    cy.get('[id=summary]').invoke('text').then((summaryText) => {
        expect(summaryText).to.contain('$296,664');
        })//end of then

    })//end of test 1

    it('Go to UHC website and capture the no coverage message', () => {

        //visit UHC website
        cy.visit('https://www.uhc.com/');

        
        cy.get("text='View more articles'").scrollIntoView().should('be.visible');

        //click on View more articles
        cy.get("text='View more articles'").trigger('mousedown', { button: 0 }).trigger('mouseup', { button: 0 });





    })//end of test2


})//end of describe suite
