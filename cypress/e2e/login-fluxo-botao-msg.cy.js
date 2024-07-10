describe('Página de login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('.header__message').click();
    })

    it('Deve preencher os campos do login e autenticar o usuário na página', () => {
        cy.login('marjorie@email.com', 'Senha123')
     })
  })