describe('Teste da home', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app');
        cy.wait(500)
    });

    it('Deve editar o primeiro contato', () => {
        cy.get('.edit').first().click();
        cy.get('input[placeholder="Nome"]').type('Raphael de Lima');
        cy.get('input[placeholder="E-mail"]').clear().type('raphael@teste.com');
        cy.get('input[placeholder="Telefone"]').clear().type('11 123456789');
        cy.get('.alterar').click();
    });

    it('Deve editar o segundo contato', () => {
        cy.get('.edit').eq(1).click(); 
        cy.get('input[placeholder="Nome"]').clear().type('Maria do Carmo');
        cy.get('input[placeholder="E-mail"]').clear().type('maria.carmo@exemplo.br');
        cy.get('input[placeholder="Telefone"]').clear().type('56789012');
        cy.get('.alterar').click();
    });

    it('Deve editar o terceiro contato', () => {
        cy.get('.edit').eq(2).click(); 
        cy.get('input[placeholder="Nome"]').clear().type('José Freitas');
        cy.get('input[placeholder="E-mail"]').clear().type('jose.freitas@exemplo.br');
        cy.get('input[placeholder="Telefone"]').clear().type('01234567');
        cy.get('.alterar').click();
    });
});
