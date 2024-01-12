
export class CheckboxesMethods {
  uniqueValue;
  generateRandomString(length) {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      result += charset[randomIndex];
    }
    return result;
  }
  Method1() {
    cy.get('[name="username"]').type("admin");
    cy.get('[type="password"]').type("admin123");
    cy.get('[type="submit"]').click();
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click();
    cy.get('.orangehrm-header-container > .oxd-button').click();
    cy.get('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > i:nth-child(1)').click().wait(3000);
    cy.contains("ESS").click();
    cy.get('.oxd-autocomplete-text-input > input').type('O').wait(3000)
    cy.contains('Odis Adalwin').click()
    cy.get('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3)').click().wait(3090)
    cy.contains("Enabled").click()
    const uniqueValue = this.generateRandomString(5); {
      cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type(uniqueValue);

    }
    cy.get('.user-password-cell > .oxd-input-group').type('Admin@12')
    cy.get('.user-password-row > .oxd-grid-2 > :nth-child(2) > .oxd-input-group').type('Admin@12')
    cy.get('.oxd-button--secondary').click().wait(5000)
    this.findValue(uniqueValue, 5);


  }
  findValue(value, remainingAttempts) {
    cy.get("div[class='oxd-input-group oxd-input-field-bottom-space'] div input[class='oxd-input oxd-input--active']").clear().type(value);
    cy.get('.oxd-form-actions > .oxd-button--secondary').click();
    cy.get('.orangehrm-container').contains(value).should('be.visible').then((result) => {
      cy.log(result, 'Test')
      // Element is not visible, revalidate
      if (!result && remainingAttempts > 0) {
        this.findValue(value, remainingAttempts - 1);
      }
    })
  }
  UpdatePersanolDetails() {
    cy.get('[name="username"]').type("admin");
    cy.get('[type="password"]').type("admin123");
    cy.get('[type="submit"]').click();
    cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text').click().wait(2000)
    cy.get('.employee-image').click().wait(2000)
    const filePath = 'cypress/fixtures/Test.jpg';
    cy.get('.oxd-file-input').selectFile(filePath, { force: true })
    cy.get('.oxd-button').click()
    // cy.get('.orangehrm-edit-employee-image > .employee-image').should('contain', filePath); Pending for future
    cy.get(':nth-child(1) > .orangehrm-tabs-item').click()
    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').clear().type('Tamoor').should('have.value', 'Tamoor')
    cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').clear().type('arif').should('have.value', 'arif')
    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').clear().type('khan').should('have.value', 'khan')
    cy.get(':nth-child(3) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('321').should('have.value', '321')
    cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('231').should('have.value', '231')
    cy.get(':nth-child(3) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('333').should('have.value', '333')
    const selectedDay = '15';
    const selectedYear = '2023';
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon').click()
    cy.get('.datepicker-days').contains('.day', selectedDay).click();
    cy.get('.datepicker-years').contains('.year', selectedYear).click();







  }
}