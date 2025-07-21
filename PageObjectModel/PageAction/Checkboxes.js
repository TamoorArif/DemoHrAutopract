
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
    cy.get('.oxd-autocomplete-text-input > input').type('a').wait(3000)
    cy.get('.oxd-autocomplete-dropdown > :nth-child(1)').click()
    cy.get('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3)').click().wait(3090)
    cy.contains("Enabled").click()
    const uniqueValue = this.generateRandomString(5); {
      cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type(uniqueValue);

    }
    cy.get('.user-password-cell > .oxd-input-group').type('Admin@12')
    cy.get('.user-password-row > .oxd-grid-2 > :nth-child(2) > .oxd-input-group').type('Admin@12')
    cy.get('.oxd-button--secondary').click().wait(5000)
    this.findValue("uniqueValue", 5);
  }

  findValue(value, remainingAttempts) {
    let isValueFound = false;

    cy.get("div[class='oxd-input-group oxd-input-field-bottom-space'] div input[class='oxd-input oxd-input--active']").clear().type(value);
    cy.get('.oxd-form-actions > .oxd-button--secondary').click();
    cy.get('.orangehrm-container').contains(value).should('be.visible')
      .then((result) => {
        cy.log(result, 'Test');
        // Element is not visible, revalidate
        if (!result && remainingAttempts > 0) {
          this.findValue(value, remainingAttempts - 1);
        }
      })
    isValueFound = true | false;
    if (!isValueFound) {
      this.findValue(value, remainingAttempts - 1);
    } else {
      return;
    }
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
    // const selectedDay = '15';
    // const selectedYear = '2023';
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon').click().type('2023-01-15')
      // cy.get('.datepicker-days').contains('.day', selectedDay).click();
      // cy.get('.datepicker-years').contains('.year', selectedYear).click();
      .wait(2000)
    cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
      .click({ force: true })
    cy.contains('.oxd-select-option', 'Afghan').should('be.visible').click()
    cy.get(':nth-child(5) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click({ multiple: true })
    cy.get(':nth-child(5) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').contains('Married').click().should('be.visible')
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').clear().click().type('2023-01-23')
    cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label').click()
    cy.get(':nth-child(7) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('test')
    cy.get(':nth-child(2) > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click()
    cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()
    cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click({ multiple: true }) // Use { multiple: true } to allow clicking multiple elements
    cy.contains('A+').should('be.visible').click()
    cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button').click()
    cy.get('.orangehrm-action-header > .oxd-button').click()
    cy.get('[class="oxd-file-input"]').selectFile(filePath, { force: true });
    cy.get('.orangehrm-attachment > .orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button--secondary').click()





  }
}
