Feature: Teste automatizado 

Eu como tester do sistema
Quero acessar o site jsonplaceholder
Para realização de testes e2e

Scenario: Acessar menu guide
    Given que estou na tela de inicio do site jsonplaceholder
    When clico no link Guide
    Then o site é redirecionado para a tela do menu Guide

Scenario: Acessar link de posts e validar campos retornados
    Given que estou na tela do menu Guide
    When clico no link de posts
    Then realizo uma validação dos campos retornados