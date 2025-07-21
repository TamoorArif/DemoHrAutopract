import { Nopecoommerce } from "../../PageObjectModel/PageAction/NopeCommrce";

// const nopeCommerce = new Nopecoommerce()
describe('Test1 for ecommrece', () => {
    it('Buy computer', () => {
        cy.visit('https://demo.nopcommerce.com/')
        Nopecoommerce.Buildyourowncomputer()

    })
    it('By shoes and aplly filter', () => {
        cy.visit('https://demo.nopcommerce.com/')
        Nopecoommerce.Addshoestfilter()

    })
    it.only('By shoes and aplly filter', () => {
        cy.visit('https://demo.nopcommerce.com/')
        Nopecoommerce.Addtowishlist()

    })


})