/// <reference types="Cypress" />

import BugerEatsLocators from '../locators/bugereats_locators'
import 'cypress-file-upload'

const faker = require('faker-br')

const bugereatslocators = new BugerEatsLocators

Cypress.Commands.add('acessoSistema', () => {
    cy.viewport('macbook-15')
    cy.visit('/')
})

Cypress.Commands.add('clicarBotaoPrincipal', () => {
    cy.get(bugereatslocators.clicarBotao()).click()
})

Cypress.Commands.add('preencherCamposCadastro', (nome, cpf, email, whatsapp, cep, numero, complemento) => {
    
    nome = faker.name.firstName() + faker.name.lastName()
    cpf = faker.br.cpf()
    email = faker.internet.email().toLowerCase()
    whatsapp = faker.phone.phoneNumber('119####-####')
    cep = faker.address.zipCode('09020-270')
    numero = 349
    complemento = 'bloco 15'
    
    cy.get(bugereatslocators.fillUserName()).type(nome)
    cy.get(bugereatslocators.fillUserEmail()).type(email)
    cy.get(bugereatslocators.fillUserCpf()).type(cpf)
    cy.get(bugereatslocators.fillUserWhatsapp()).type(whatsapp)
    cy.get(bugereatslocators.fillUserCep()).type(cep)
    cy.get(bugereatslocators.fillUserNumero()).type(numero)
    cy.get(bugereatslocators.fillUserComplemento()).type(complemento)
})

Cypress.Commands.add('clicarBotaoCep', () => {
    cy.get(bugereatslocators.clicarBotaoCep()).click()
})

Cypress.Commands.add('selecionarMetodoEntrega', () => {
    cy.get(bugereatslocators.selecionarMetodoEntrega()).click()
})

Cypress.Commands.add('uploadCnh', () => {
    const file = 'images\\' + 'cnh.jpg'
    cy.get(bugereatslocators.uploadCnh()).attachFile(file)
    cy.wait(2000)
})

Cypress.Commands.add('finalizarCadastro', () =>{
    cy.get(bugereatslocators.finalizarCadastro()).click()
})

Cypress.Commands.add('validarMensagemConfirmacao', () =>{
    var expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
    cy.get(bugereatslocators.validarMensagemConfirmacao()).should('have.text',expectedMessage)
})

Cypress.Commands.add('fecharMensagemConfirmacao', () =>{
    cy.get(bugereatslocators.fecharMensagemConfirmacao()).click()
})