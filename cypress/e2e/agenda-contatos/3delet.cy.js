/// <reference types="cypress" />

describe('Teste da home', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app')
    })

    it('Deve editar o contato', () => {
        cy.get('.delete').first().click()
        cy.get('.delete').eq(1).first().click()
        cy.get('.delete').eq(2).first().click()
    })
})












