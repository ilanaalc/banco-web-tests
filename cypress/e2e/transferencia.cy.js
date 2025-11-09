describe('Transferências', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.realizarLoginComCredenciaisValidas()
    })

    it ('Deve transferir quando informo dados e valor válidos', () => {
      cy.realizarTransferencia('João da Silva', 'Maria Oliveira', '11')

      cy.verificarMensagemNoToast('Transferência realizada!')
    })

    it ('Deve apresentar erro quando tentar trasnferir mais de 5 mil sem o token', () => {
      cy.realizarTransferencia('João da Silva', 'Maria Oliveira', '6000')

      cy.verificarMensagemNoToast('Autenticação necessária para transferências acima de R$5.000,00.')
    })
})