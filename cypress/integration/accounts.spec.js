import Web3 from "web3";
import PrivateKeyProvider from "truffle-privatekey-provider";

describe("Test account request", () => {
  it("should display the website's header", () => {
    cy.visit("/");
    cy.get("h1").should("have.text", "web3-integration-testing");
  });

  it("should have no accounts because no provider was registered", () => {
    cy.visit("/");
    cy.get("#accounts").should("have.text", "");
  });

  it("should render specified account address in div", () => {
    cy.on("window:before:load", (window) => {
      const provider = new PrivateKeyProvider(
        "d631de5b7e9cf451135896c833187c8b4dc230bf47756a9a2ca4ffccc161175e",
        "http://localhost:7545"
      );
      window.web3 = new Web3(provider);
    });

    cy.visit("/");

    cy.wait(1000);

    cy.get("#accounts").should(
      "have.text",
      "0x5015ce354045b9a9836caa781286a9d6194aafad"
    );
  });
});
