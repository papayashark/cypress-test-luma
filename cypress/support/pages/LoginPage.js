class LoginPage {
  // Locators
  elements = {
    emailInput: () => cy.get('#email'),
    passwordInput: () => cy.get('#pass'),
    loginButton: () => cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2'),
    errorMessage: () => cy.get("div[data-bind=\"html: $parent.prepareMessageForHtml(message.text)\"]")
  }

  // Actions
  fillEmailInput(email) {
    this.elements.emailInput().clear().type(email);
  }

  fillPasswordInput(password) {
    this.elements.passwordInput().clear().type(password);
  }

  clickLoginButton() {
    this.elements.loginButton().click();
  }

  assertErrorMessageVisible() {
    this.elements.errorMessage().should('be.visible');
  }
}

export default new LoginPage();
