/// <reference types="cypress" />

describe('Teste da home', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app')
    })

    it('Deve renderizar 3 inputs', () => {
        cy.get('.sc-gLDzan.ckeKmo input').should('have.length', 3)
    })

    it('Deve preencher os dados do contato', () => {
        cy.get('input[placeholder="Nome"]').type('Raphael de Lima')
        cy.get('input[placeholder="E-mail"]').type('raphael@teste.com')
        cy.get('input[placeholder="Telefone"]').type('11 123456789')
        cy.get('.adicionar').first().click()
        cy.get('.sc-beqWaB.eQdhbg.contato')

        cy.get('input[placeholder="Nome"]').type('Laura Muller')
        cy.get('input[placeholder="E-mail"]').type('laura@teste.com')
        cy.get('input[placeholder="Telefone"]').type('88 123456789')
        cy.get('.adicionar').click()
        cy.get('.sc-beqWaB.eQdhbg.contato')

        cy.get('input[placeholder="Nome"]').type('Julia Passos')
        cy.get('input[placeholder="E-mail"]').type('julia@teste.com')
        cy.get('input[placeholder="Telefone"]').type('49 123456789')
        cy.get('.adicionar').click()
        cy.get('.sc-beqWaB.eQdhbg.contato')

    })

})