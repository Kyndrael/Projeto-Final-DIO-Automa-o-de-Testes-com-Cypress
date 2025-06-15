describe('Cadastro - UI', () => {
  it('Deve cadastrar novo usuário com sucesso', () => {
    cy.visit('/register');
    cy.get('input[placeholder="Username"]').type('usuarioNovo');
    cy.get('input[placeholder="Email"]').type(`user${Date.now()}@teste.com`);
    cy.get('input[placeholder="Password"]').type('senha123');
    cy.get('button[type="submit"]').click();

    cy.contains('Your Feed').should('be.visible');
  });
});
