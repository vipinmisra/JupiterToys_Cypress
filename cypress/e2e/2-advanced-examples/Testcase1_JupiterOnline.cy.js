//const cypress = require("cypress")

describe ('From the home page go to contact page', function () {
   
    it ('validate if errors are gone',function()

{
  cy.visit('https://jupiter.cloud.planittesting.com/#/contact')
  cy.get('.btn-contact').click()
  cy.wait(2000)

  cy.get('#forename-err').should('be.visible');
  cy.get('#forename-err').invoke('text').should('contain', 'Forename is required');
  cy.get('#email-err').should('be.visible');
  cy.get('#email-err').invoke('text').should('contain', 'Email is required');
  cy.get('#message-err').should('be.visible');
  cy.get('#message-err').invoke('text').should('contain', 'Message is required');
 

  cy.get('#forename').type('Vipin Misra')
  cy.get('#email').type('vipinmisra23@gmail.com')
  cy.get('#message').type('this is test message')

  cy.get('#forename-err').should('not.exist');
  cy.get('#email-err').should('not.exist');
  cy.get('#email-err').should('not.exist');
})


Cypress._.times(5, () =>{
it ('validate successful submission',function()

{
  cy.visit('https://jupiter.cloud.planittesting.com/#/contact')

  cy.wait(4000)
  cy.reload()
  cy.get('#forename').type('Vipin Misra')
  cy.get('#email').type('vipinmisra23@gmail.com')
  cy.get('#message').type('this is test message')

  cy.get('#forename-err').should('not.exist');
  cy.get('#email-err').should('not.exist');
  cy.get('#email-err').should('not.exist');
  
  cy.get('.btn-contact').click()
  cy.wait(4000)
  cy.get('.alert').invoke('text').should('contain', 'we appreciate your feedback');
}
)
}
)

})
