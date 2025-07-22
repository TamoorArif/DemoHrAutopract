export class recruiting {
    static login() {
        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root').click().type('mofm708@yopmail.com')
        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root').click().type('PLib$$786')
        cy.get('[type="submit"]').click()
        cy.get('.go3958317564').should('be.visible').contains('Successfully logged in.')
        cy.contains('a', 'Configuration').click();
        cy.contains('p', 'Custom Options').click()
        cy.get('[href="/configuration/custom-options/candidates"]').click().wait(3000)
        cy.get(':nth-child(2) > .MuiButtonBase-root').click().wait(3000)
        // cy.get('[type="text"]').click().type('Test automation').wait(3000)
        cy.contains('button', 'Add New Category').click()
        cy.get('#\\:r9\\:').click().type('Test Automation')
        cy.contains('Next').eq(0).click();
        cy.get('input[type="file"]').selectFile('cypress/fixtures/caniddate.csv', { force: true });
        cy.get("button[type='submit']").click()
        cy.get('#\\:ra\\:').click()
        cy.get('.go3958317564').contains('Section imported successfully')
        // cy.get(':nth-child(6) > .css-wkp18m > .css-zaltu2 > .MuiTypography-root').contains('Test automation').should('be.visible')
        // cy.get('[data-cy="automation-title"]').should('be.visible');
        cy.contains('.MuiTypography-root', 'Test automation')



    }
    static nagativeTest() {

    }
}