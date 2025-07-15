/// <reference types="cypress" />

describe("Partner Add", () => {
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

  it("adds a new partner and shows it in the list", () => {
    const newPartner = {
      name: "Diana Prince",
      company: "WonderCars",
      mobile_phone: "07456789012",
      email_address: "diana@wondercars.com",
      postcode: "WC7 8HI",
      pay_later: true,
      pay_now: false,
    };

    // ? Intercept the POST request for adding a partner
    cy.intercept("POST", "/api/partners", {
      statusCode: 201,
      body: newPartner,
    }).as("addPartner");

    // ? Intercepts the GET request after redirect to include the new partner
    cy.intercept("GET", "/api/partners", {
      body: [...partners, newPartner],
    }).as("getPartnersAfterAdd");

    // ? Visits the partner registration page
    cy.visit("/partner-register");

    // ? Fills out the form
    cy.get('input[name="name"]').type(newPartner.name);
    cy.get('input[name="company"]').type(newPartner.company);
    cy.get('input[name="mobile_phone"]').type(newPartner.mobile_phone);
    cy.get('input[name="email_address"]').type(newPartner.email_address);
    cy.get('input[name="postcode"]').type(newPartner.postcode);
    cy.contains("Pay Later").click();
    cy.get('[data-testid="register-btn"]').click();

    // ? Waits for the POST and redirect
    cy.wait("@addPartner");
    cy.url().should("include", "/interested-dealerships");
    cy.wait("@getPartnersAfterAdd");

    // ? Asserts the new partner is in the list
    cy.contains("WonderCars").should("exist");
    cy.contains("Diana Prince").should("exist");
  });
});
