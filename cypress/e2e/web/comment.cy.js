describe('Comentários - UI', () => {
  beforeEach(() => {
    cy.loginUI('usuario@teste.com', 'senha123');
    cy.visit('/');
    cy.contains('Global Feed').click();
    cy.get('.article-preview').first().click();
  });

  it('Deve adicionar comentário', () => {
    cy.get('textarea[placeholder="Write a comment..."]').type('Comentário de teste Cypress');
    cy.contains('Post Comment').click();

    cy.get('.card-text').should('contain', 'Comentário de teste Cypress');
  });
});
