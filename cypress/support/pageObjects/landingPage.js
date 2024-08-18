export class landingPage {
  verifyloggedInURL() {
    cy.url().should("eq", "https://platform.withintelligence.com/all/now");
  }

  selectStartFollowButton() {
    cy.get('[class="Buttonstyled__ButtonWrapper-sc-1p61isx-0 eOssHf"]').click();
  }

  closeFollowWindow() {
    cy.get('[data-testid="popup-empty-value-crossBtn"]').click();
  }

  clickExplore() {
    cy.get('[data-testid="nav-link-header-discover-link"]').click();
  }

  verifyDiscoverURL() {
    cy.url().should("eq", "https://platform.withintelligence.com/all/discover");
  }

  enterValidSearch(textEntered) {
    cy.get('[data-testid="globalSearch-input"]').type(textEntered);
    //enterSearchText(textEntered);
  }

  enterInvaldSearch(textEntered) {
    cy.get('[data-testid="globalSearch-input"]').type(textEntered);
   // enterSearchText(textEntered);
    cy.get('[class="NotFoundstyled__Text-sc-1qxw8dj-0 kngPDg"]')
      .should("contain", "Your search for")
      .should("contain", "did not match any documents.");
    cy.get('[class="NotFoundstyled__Text-sc-1qxw8dj-0 kngPDg"]').should(
      "contain",
      textEntered
    );
  }

  selectFromDropDownMenu() {
    cy.get('[id="downshift-0-menu"]').click();
    cy.get('[id="downshift-0-item-3"]').click();
  }

  verifyPcfiURL() {
    cy.url().should("eq", "https://platform.withintelligence.com/pcfi/now");
  }
}

// function enterSearchText(textEntered) {
//   cy.get('[data-testid="globalSearch-input"]').type(textEntered);
// }

export const onLandingPage = new landingPage();
