import LoginPage from '../../support/pages/LoginPage';
import Header from '../../support/components/Header';
import Footer from '../../support/components/Footer';

//Test suite
describe('LUMA e-commerce - [LOGIN]', () => {

     // Visit the login page
    beforeEach(() => {
      cy.goToApp();
      
    });

    const user_credentials = require('../../fixtures/credentials.json');
    const valid_email = user_credentials.valid_email;
    const valid_password = user_credentials.valid_password;
    const invalid_email = user_credentials.invalid_email;
    const invalid_password = user_credentials.invalid_password;


    // Test case for logging in with valid credentials
    it('@regression [LOGIN - positive] - validate that user is able to login using valid credentials', () => {
  
  // Enter username and password
  LoginPage.fillEmailInput(valid_email);
  LoginPage.fillPasswordInput(valid_password);  // opraveno tady

  // Click the login button
  LoginPage.clickLoginButton();

  // Validate that the user is redirected to the home page
  cy.contains('Account Information');
  Header.elements.header_title().should('be.visible');
  Footer.elements.footer_message().should('include.text', 'All rights reserved.');
  cy.screenshot();

  });



  // Test case for logging in with valid credentials
    it('@sanity [LOGIN - negative] - validate that user is unable to login using invalid credentials', () => {
    // Enter username and password
    cy.get('#email').type(invalid_email);
    cy.get('#pass').type(invalid_password);

    // Click the login button
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click(); // if the parent is a button
    // Validate that the user is redirected to the home page
    cy.get("div[data-bind=\"html: $parent.prepareMessageForHtml(message.text)\"]").should('be.visible');
    cy.screenshot();
  });
});