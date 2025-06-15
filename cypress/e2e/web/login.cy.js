describe('Login - UI', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('Deve logar com sucesso usando a interface', () => {
    cy.get('input[placeholder="Email"]').type('usuario@teste.com');
    cy.get('input[placeholder="Password"]').type('senha123');
    cy.get('button[type="submit"]').click();

    cy.contains('Your Feed').should('be.visible');
  });

  it('Deve exibir erro com credenciais inválidas', () => {
    cy.get('input[placeholder="Email"]').type('invalido@teste.com');
    cy.get('input[placeholder="Password"]').type('senhaerrada');
    cy.get('button[type="submit"]').click();

    cy.get('.error-messages').should('contain', 'email or password is invalid');
  });
});
