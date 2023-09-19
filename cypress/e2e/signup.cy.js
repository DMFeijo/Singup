describe('singup', () => {
  beforeEach(() => {

    cy.visit('https://notes-serverless-app.com/')
    cy.contains('Scratch')
    cy.get('.btn-success').should('be.visible')
    cy.get('.btn-success').click()

  });
  it('Cadastro com sucesso', () => {

    cy.generateRandomUserData().then(userData => {
      cy.url().should('include', 'signup')
      cy.get('#email').type(userData.email)
      cy.get('#password').type('123456789Bc.')
      cy.get('#confirmPassword').type('123456789Bc.')
      cy.get('.LoaderButton').should('be.visible')
      cy.get('.LoaderButton').click()
      cy.contains('Confirmation Code')

    })
  })
  it('Cadastro com senhas diferentes', () => {
    cy.generateRandomUserData().then(userData => {
      cy.url().should('include', 'signup')
      cy.get('#email').type(userData.email)
      cy.get('#password').type('senha123')
      cy.get('#confirmPassword').type('Senha456')
      //Verifica se o botão 'Singup' não está habilitado para click
      cy.get('.LoaderButton').should('not.be.enabled')

    })
  })
  it('Cadastro com senha fraca', () => {
    cy.generateRandomUserData().then(userData => {
      cy.url().should('include', 'signup')
      cy.get('#email').type(userData.email)
      cy.get('#password').type('123')
      cy.get('#confirmPassword').type('123')
      cy.get('.LoaderButton').should('be.visible')
      cy.get('.LoaderButton').click()
      cy.url().should('include', '/signup')

    })
  });
  it('Cadastro com e-mail inválido', () => {
    cy.url().should('include', 'signup')
    cy.get('#email').type('emailinvalido')
    cy.get('#password').type('senha123')
    cy.get('#confirmPassword').type('senha123')
    cy.get('.LoaderButton').should('be.visible')
    cy.get('.LoaderButton').click()
    
  })
  it.only('Cadastro com e-mail existente', () => {
    // Certifique-se de que um usuário com o mesmo e-mail já existe no sistema
    // e use esse e-mail no teste
    cy.url().should('include', 'signup')
    cy.get('#email').type('Nettie48@gmail.com')
    cy.get('#password').type('senha123')
    cy.get('#confirmPassword').type('senha123')
    cy.get('.LoaderButton').should('be.visible')
    cy.get('.LoaderButton').click()
    
  })
  
})

