/// <reference types="cypress" />

describe('Teste da agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app');
    });

    it('Deve adicionar um contato', () => {
        
        // Adiciona primeiro contato
        cy.get('input[placeholder="Nome"]').clear().type('Raphael de Lima').wait(210);
        cy.get('input[placeholder="E-mail"]').clear().type('raphael@teste.com').wait(210);
        cy.get('input[placeholder="Telefone"]').clear().type('11 123456789').wait(210);
        cy.get('.adicionar').first().click().wait(210);

        // Adiciona segundo contato
        cy.get('input[placeholder="Nome"]').clear().type('Laura Muller').wait(210);
        cy.get('input[placeholder="E-mail"]').clear().type('laura@teste.com').wait(210);
        cy.get('input[placeholder="Telefone"]').clear().type('88 123456789').wait(210);
        cy.get('.adicionar').click().wait(210);

        // Adiciona terceiro contato
        cy.get('input[placeholder="Nome"]').clear().type('Julia Passos').wait(210);
        cy.get('input[placeholder="E-mail"]').clear().type('julia@teste.com').wait(210);
        cy.get('input[placeholder="Telefone"]').clear().type('49 123456789').wait(210);
        cy.get('.adicionar').click().wait(210);
    });

    it('Deve editar um contato', () => {

        // Edita o primeiro contato
        cy.get('.edit').first().click();
        cy.get('input[placeholder="Nome"]').clear().type('Raphael de Lima de Farias').wait(210);
        cy.get('.alterar').click().wait(500);

        // Edita o segundo contato
        cy.get('.edit').eq(1).click();
        cy.get('input[placeholder="Nome"]').clear().type('Maria do Carmo').wait(210);
        cy.get('.alterar').click().wait(500);

        // Edita o terceiro contato
        cy.get('.edit').eq(2).click();
        cy.get('input[placeholder="Nome"]').clear().type('José Freitas').wait(210);
        cy.get('.alterar').click().wait(500);
    });

    it('Deve deletar contatos', () => {
        cy.get('.delete').each(($el) => {
            cy.wrap($el).click();
            cy.wait(500);
        });
    });

});