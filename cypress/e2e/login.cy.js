describe('Login', () => {

    it('Deve visitar pagina', () => {
      // Acessar a página de login 
      cy.visit('https://www.saucedemo.com/');
  
      // Preencher o campo de nome
      cy.get('#user-name').type('standard_user'); 

     // Preencher o campo de senha
    cy.get('#password').type('secret_sauce');  // Insira sua senha
  
      // Clicar no botão "Continuar"
      cy.get('#login-button').click();

      cy.title().should('be.equal', 'Swag Labs')
      
  
     
    });

    
    it('Realizar legin informando credenciais inválidas', () => {
        // Arrange
        cy.visit('https://www.saucedemo.com/')
        
        // Act
        cy.get('[data-test="username"]').type('user.invalid')
        
        cy.get('[data-test=password]').type('senha')
        
        cy.get('[data-test="login-button"]').click()
        
        // Assert
        cy.get('[data-test="error"]')
        . should(
        'contain.text',
        'Username and password do not match any user in this service' )
        
    })


  });
  