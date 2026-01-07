import "cypress-real-events";

describe("Suite de tests connexion", () => {
  beforeEach(() => {
    cy.visit("http://sidewalk:elementary@smiling-glove.localsite.io/");
  });

  it("Connexion", () => {
    // Placer son curseur sur l’icône en forme de buste dans le bandeau en haut de la page http://sidewalk:elementary@smiling-glove.localsite.io/
    cy.get(".icofont-user-alt-4").realHover();
    // Cliquer sur l’item Se déconnecter
    cy.get(
      ".woocommerce-MyAccount-navigation-link.woocommerce-MyAccount-navigation-link--customer-logout"
    ).click();
    // Les variables sont placées dans le dossier "fixtures"
    cy.fixture("users").then((users) => {
      // Saisir son identifiant dans la zone de saisie identifiant ou e-mail
      cy.get("#username").type(users.user.username);
      // Saisir le mot de passe associé à son identifiant dans la zone de saisie Mot de passe
      cy.get("#password").type(users.user.password);
      // Cliquer sur le bouton Se connecter
      cy.get('[name="login"]').click();
      // La page affiche le message Bonjour <son identifiant>
      cy.get("#post-83 p:nth-child(2)").should(
        "have.text",
        "\n\tBonjour " +
          users.user.name +
          " (vous n’êtes pas " + users.user.name + " ? Déconnexion)"
      );
    });
  });

  xit("Présence de bouton d'accès à barre de recherche (utilisateur connecté)", () => {
// à faire
  })

it("Accès à fiche produit via son image", () => {
  // Localiser le produit "" dans la liste de produits.
})

});
