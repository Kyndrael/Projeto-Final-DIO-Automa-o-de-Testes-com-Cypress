describe('Login - API', () => {
  const BASE_URL = 'https://api.realworld.io/api';

  it('Deve retornar status 200 ao logar com sucesso', () => {
    cy.request({
      method: 'POST',
      url: `${BASE_URL}/users/login`,
      body: {
        user: {
          email: 'usuario@teste.com',
          password: 'senha123',
        }
      }
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.user).to.have.property('token');
    });
  });

  it('Deve retornar 422 ao usar credenciais inválidas', () => {
    cy.request({
      method: 'POST',
      url: `${BASE_URL}/users/login`,
      failOnStatusCode: false,
      body: {
        user: {
          email: 'email@invalido.com',
          password: 'errada',
        }
      }
    }).then((res) => {
      expect(res.status).to.eq(422);
      expect(res.body.errors['email or password']).to.include('is invalid');
    });
  });
});
