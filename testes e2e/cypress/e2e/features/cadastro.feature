
Feature: Cadastro Formulario

    Scenario Outline: Login Buger Eats
        Given Acesso o sistema
        And clico no botão da tela principal
        And preencho os campos "<nome>" e "<cpf>" e "<email>" e "<whatsapp>" e "<cep>" e "<numero>" e "<complemento>"
        And clico no botão "Buscar CEP"
        And seleciono o metodo de entrega
        And faço upload da CNH
        And clico no botão para finalizar o cadastro
        When o sistema mostra a mensagem de confirmação do cadastro
        Then fecho a janela de confirmação do cadastro

        
        Examples:
            |      nome            |      cpf        |     email          |    whatsapp           |    cep          | numero   | complemento  |
            |    nome dinamico     |  cpf dinamico   |   email dinamico   |   whatsapp dinamico   |  cep dinamico   | 349      |  bloco 15    |