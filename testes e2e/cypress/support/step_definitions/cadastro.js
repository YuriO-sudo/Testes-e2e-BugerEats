import { And, Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('Acesso o sistema', function (){
    cy.acessoSistema()
})

And('clico no botão da tela principal', function (){
    cy.clicarBotaoPrincipal()
})

And('preencho os campos {string} e {string} e {string} e {string} e {string} e {string} e {string}', function (nome, cpf, email, whatsapp, cep, numero, complemento){
    cy.preencherCamposCadastro(nome, cpf, email, whatsapp, cep, numero, complemento)
})

And('clico no botão {string}', function (){
    cy.clicarBotaoCep()
})

And('seleciono o metodo de entrega', function (){
    cy.selecionarMetodoEntrega()
})

And('faço upload da CNH', function (){
    cy.uploadCnh()
})

When('clico no botão para finalizar o cadastro', function (){
    cy.finalizarCadastro()
})

When('o sistema mostra a mensagem de confirmação do cadastro', function (){
    cy.validarMensagemConfirmacao()
})

Then('fecho a janela de confirmação do cadastro', function (){
    cy.fecharMensagemConfirmacao()
})