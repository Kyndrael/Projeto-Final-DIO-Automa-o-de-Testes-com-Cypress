describe('Artigo - UI', () => {
  beforeEach(() => {
    cy.loginUI('usuario@teste.com', 'senha123');
  });

  it('Deve criar um novo artigo', () => {
    cy.visit('/editor');
    cy.get('input[placeholder="Article Title"]').type('Título do Artigo');
    cy.get('input[placeholder*="about"]').type('Sobre algo');
    cy.get('textarea[placeholder="Write your article"]').type('Conteúdo completo aqui...');
    cy.contains('Publish Article').click();

    cy.contains('Título do Artigo').should('be.visible');
  });
});
