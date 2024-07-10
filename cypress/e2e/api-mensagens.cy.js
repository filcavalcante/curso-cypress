describe('Api Adopet', () => {

    //Atenção, o token possui um prazo de validade. Dessa forma, você deverá realizar o login e copiar o toker presente no Local Storage do seu navegador.
     
     it('Mensagens da API', () => {
            cy.request({
             method: 'GET' ,
             url: 'https://adopet-api-i8qu.onrender.com/mensagem/702845d0-0b1d-4982-84df-15d94c993b4c',
             headers: Cypress.env()
                   
                }).then((res) => {
                    expect(res.status).to.be.equal(200)
                    expect(res.body).is.not.empty
                    expect(res.body).to.have.property('msg')
                                 
                })
    })
})