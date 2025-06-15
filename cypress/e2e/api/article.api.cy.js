describe('Artigo - API', () => {
  let token = '';

  before(() => {
    cy.loginAPI().then((t) => {
      token = t;
    });
  });

  it('Deve criar e deletar artigo pela API', () => {
    cy.request({
      method: 'POST',
      url: 'https://api.realworld.io/api/articles',
      headers: {
        Authorization: `Token ${token}`
      },
      body: {
        article: {
          title: 'Artigo Teste',
          description: 'Desc API',
          body: 'Conteúdo de teste API'
        }
      }
    }).then((res) => {
      expect(res.status).to.eq(200);
      const slug = res.body.article.slug;

      cy.request({
        method: 'DELETE',
        url: `https://api.realworld.io/api/articles/${slug}`,
        headers: { Authorization: `Token ${token}` }
      }).then((deleteRes) => {
        expect(deleteRes.status).to.eq(204);
      });
    });
  });
});
