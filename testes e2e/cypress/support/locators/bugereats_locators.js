/// <reference types="Cypress" />
class BugerEatsLocators {
    
    clicarBotao = () => { return 'a'}
    fillUserName = () => { return 'input[name="name"]'}
    fillUserCpf = () => {return 'input[name="cpf"]'}
    fillUserEmail = () => { return 'input[name="email"]'}
    fillUserWhatsapp = () => { return 'input[name="whatsapp"]'}
    fillUserCep = () => { return 'input[name="postalcode"]'}
    fillUserNumero = () => { return 'input[name="address-number"]'}
    fillUserComplemento = () => { return 'input[name="address-details"]'}
    clicarBotaoCep = () => { return 'input[type=button][value="Buscar CEP"]'}
    selecionarMetodoEntrega = () => { return '.delivery-method > :nth-child(3)'}
    uploadCnh = () => {return 'input[accept^="image"]'}
    finalizarCadastro = () => { return 'form button[type="submit"]'}
    validarMensagemConfirmacao = () => { return '.swal2-container .swal2-html-container'}
    fecharMensagemConfirmacao = () => { return '.swal2-confirm'}
}

export default BugerEatsLocators