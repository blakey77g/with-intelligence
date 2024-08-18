export class resultsPage {


    listResults() {
    cy.get('[class="sc-iLIByi kBtGYR"]').should('contain', 'Displaying results for');
    cy.get('[class="sc-iLIByi kBtGYR"]').should('contain','investers');
    cy.get('[data-testid="tabsHandlers-tabPanel-nowResults"]').should('be.visible')
    }
   
   
   
   
   
   
   
}
export const onresultsPage = new resultsPage(); 