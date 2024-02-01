import { CheckboxesMethods } from "../../PageObjectModel/PageAction/Checkboxes";


const checkboxesMethods = new CheckboxesMethods()

describe('Checkboxes', () => {
  it.only('Add user or login user', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    checkboxesMethods.Method1()



  });
  it('Add user or login user', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    checkboxesMethods.UpdatePersanolDetails()



  });
});