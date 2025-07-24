import { recruiting } from "../../PageObjectModel/PageAction/recruiting"
describe('Resgression Testing', () => {
  it('Login test', () => {
    cy.visit('https://recruiting.apiswagger.co.uk/sign-in')
    recruiting.login()
    recruiting.nagativeTest()
  })

})