describe('Página de cadastro', () => {
    beforeEach(() => {
       cy.visit('https://adopet-frontend-cypress.vercel.app/');
       cy.get('[data-test="register-button"]').click();
   })

    it('Preencher os campos do formulário incorretamente e exibir mensagens ao usuário', () => {
        cy.cadastroIncorreto('É necessário informar um endereço de email', 'Crie uma senha', 'Repita a senha criada acima');
     })
  })