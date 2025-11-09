describe('Login', () => {
  beforeEach(() => { //Callback
    //Arrange
    cy.visit('/')
    cy.screenshot('Após visitar página')
  })

  it('Login com dados válidos deve permitir entrada no sistema', () => {
    //Act
    cy.realizarLoginComCredenciaisValidas()

    //Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

    it('Login com dados inválidos deve apresentar mensagem de erro', () => {
    //Act
    cy.realizarLoginComCredenciaisInvalidas()

    //Assert
    cy.verificarMensagemNoToast('Erro no login. Tente novamente.')
  })
})