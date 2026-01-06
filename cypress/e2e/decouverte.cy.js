import "cypress-real-events";

// Découverte de Cypress
describe("My First Test", () => {
  beforeEach(() => {
    cy.visit("https://landscape:somber@dull-ghost.localsite.io/");
  });

  it("Connexion", () => {
    cy.get(".icofont-user-alt-4").realHover();
    cy.get(
      ".woocommerce-MyAccount-navigation-link.woocommerce-MyAccount-navigation-link--customer-logout"
    ).click();
    cy.get('[name="username"]').click();
    cy.get('[name="username"]').type("anne.walch@yahoo.fr");
    cy.get("#password").click();
    cy.get("#password").type("n3n4@2025");
    cy.get('#customer_login [name="login"]').click();
  });

  it(" Ajout d'un produit au panier", function () {
    cy.get("#masthead i.icofont-search-2").click();
    cy.get('#search-bar [name="s"]').click();
    cy.get('#search-bar [name="s"]').type("lu");
    cy.get(
      '#search-bar a[href="https://dull-ghost.localsite.io/produit/voluptate/"] span.apsw_result_excerpt'
    ).click();
    cy.get("#product-2718 img.zoomImg").click();
    cy.get("#masthead i.icofont-grocery").click();
  });
});
