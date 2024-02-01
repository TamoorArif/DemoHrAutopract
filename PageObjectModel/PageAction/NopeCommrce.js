export class Nopecoommerce {
    Buildyourowncomputer() {
        cy.get(':nth-child(1) > .product-item > .picture > a > img').click()
        cy.get('#product_attribute_1').should('be.visible').wait(3000).select('2.2 GHz Intel Pentium Dual-Core E2200')
        cy.get('#product_attribute_2').should('be.visible').wait(3000).select('4GB [+$20.00]')
        cy.get('#product_attribute_3_6').should('be.visible').click()
        cy.get('#product_attribute_4_8').should('be.visible').click()
        cy.get('#product_attribute_5_10').should('be.visible').click()
        cy.get('#product_attribute_5_10').click().wait(3000)
        cy.get('#price-value-1').contains('$1,320.00')
        cy.get('#add-to-cart-button-1').click()
        this.Addtocarddetails()
    }
    Addtocarddetails() {
        cy.get('.content').should('contain', 'The product has been added to your shopping cart')
        cy.log('After getting the .content element')
        cy.get('.content > a').should('be.visible').click()
        cy.log('After getting the .content element').wait(3000)
        cy.get('#checkout').click()
        cy.get('#ui-id-2').contains('Terms of service')
        cy.get('.ui-button').click()
        cy.get('#termsofservice').click()
        cy.get('#checkout').click().wait(4000)
        cy.get('.checkout-as-guest-button').click().wait(3000)
        cy.get('#BillingNewAddress_FirstName').type('tamioor')
        cy.get('#BillingNewAddress_LastName').type('khan')
        cy.get('#BillingNewAddress_Email').type('test@gmail.com')
        cy.get('#BillingNewAddress_Company').type('new user')
        cy.get('#BillingNewAddress_CountryId').select('Angola').should('be.visible')
        cy.get('#BillingNewAddress_StateProvinceId').select('Other')
        cy.get('#BillingNewAddress_City').type('M.garh')
        cy.get('#BillingNewAddress_Address1').type('tesct')
        cy.get('#BillingNewAddress_Address2').type('tts')
        cy.get('#BillingNewAddress_ZipPostalCode').type('email')
        cy.get('#BillingNewAddress_PhoneNumber').type('12345677')
        cy.get('#BillingNewAddress_FaxNumber').type('yyyy')
        cy.get('#billing-buttons-container > .new-address-next-step-button').click()
        cy.get('#shipping-method-buttons-container > .button-1').click()
        cy.get('#paymentmethod_0').click()
        cy.get('#payment-method-buttons-container > .button-1').click()
        cy.get('#payment-info-buttons-container > .button-1').click()
        cy.get('#confirm-order-buttons-container > .button-1').click()
        cy.get('.section > .title > strong').contains('Your order has been successfully processed!')
    }
    Addshoestfilter() {
        cy.get('.notmobile > :nth-child(3) > [href="/apparel"]').wait(3000).click();
        cy.get(':nth-child(1) > .sub-category-item > .title > a').click()
        cy.get('#attribute-option-15').should('be.visible').click().wait(2000)
        cy.get('.product-box-add-to-cart-button').click({ force: true })
        cy.get('#product_attribute_9').select('8')
        cy.get('#price-value-25').contains('$27.56')
        cy.get('#add-to-cart-button-25').click({ force: true }).wait(2000)
        this.Addtocarddetails()
    }
    Addtowishlist() {
        cy.get('.notmobile > :nth-child(3) > [href="/apparel"]').wait(3000).click();
        cy.get(':nth-child(1) > .sub-category-item > .title > a').click()
        cy.get('#attribute-option-15').should('be.visible').click().wait(2000)
        cy.get('.product-box-add-to-cart-button').click({ force: true })
        cy.get('#product_attribute_9').select('8').wait(1000)
        cy.get('#add-to-wishlist-button-25').click().wait(3000)
        cy.get('.content').contains('The product has been added to your wishlist')


    }

}


// const checkout = true

// while(checkout === true) {

//     if() {
//         checkout = false
//     }
//     cy.get('#add-to-cart-button-25').click({ force: true }).wait(2000)
// }