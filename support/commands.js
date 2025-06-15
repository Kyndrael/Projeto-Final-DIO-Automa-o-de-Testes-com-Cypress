Cypress.Commands.add('loginUI', (email, password) => {
  cy.visit('/login');
  cy.get('input[placeholder="Email"]').type(email);
  cy.get('input[placeholder="Password"]').type(password);
  cy.get('button[type="submit"]').click();
});

Cypress.Commands.add('loginAPI', () => {
  cy.fixture('user').then((user) => {
    cy.request({
      method: 'POST',
      url: 'https://api.realworld.io/api/users/login',
      body: {
        user: {
          email: user.validUser.email,
          password: user.validUser.password
        }
      }
    }).then((res) => {
      window.localStorage.setItem('jwtToken', res.body.user.token);
    });
  });
});
