describe('Perfil - UI', () => {
  beforeEach(() => {
    cy.loginUI('usuario@teste.com', 'senha123');
  });

  it('Deve editar o perfil com sucesso', () => {
    cy.contains('Settings').click();
    cy.get('input[placeholder="URL of profile picture"]').clear().type('https://picsum.photos/200');
    cy.get('textarea[placeholder="Short bio about you"]').clear().type('QA na DIO 🚀');
    cy.get('button[type="submit"]').click();

    cy.contains('Your Feed').should('be.visible');
  });
});
