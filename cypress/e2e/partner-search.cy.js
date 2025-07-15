/// <reference types="cypress" />

describe("Partner Search", () => {
  const partners = [
    {
      name: "Alice Smith",
      company: "AutoWorld",
      mobile_phone: "07123456789",
      email_address: "alice@autoworld.com",
      postcode: "AW1 2BC",
    },
    {
      name: "Bob Jones",
      company: "CarExperts",
      mobile_phone: "07234567890",
      email_address: "bob@carexperts.com",
      postcode: "CE3 4DE",
    },
    {
      name: "Charlie Brown",
      company: "DrivePro",
      mobile_phone: "07345678901",
      email_address: "charlie@drivepro.com",
      postcode: "DP5 6FG",
    },
  ];

  beforeEach(() => {
    cy.intercept("GET", "/api/partners", { body: partners }).as("getPartners");
    cy.visit("/interested-dealerships");
    cy.wait("@getPartners");
  });

  it("filters partners by company name", () => {
    // ? Types first 3 letters of 'AutoWorld'
    cy.get('input[placeholder*="Start typing"]').type("Aut");
    // ? Waits for debounce
    cy.wait(350);
    cy.contains("AutoWorld").should("exist");
    cy.contains("CarExperts").should("not.exist");
    cy.contains("DrivePro").should("not.exist");
  });
});
