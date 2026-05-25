# Gerador de CPF

## Sobre

Projeto de prática focado em lógica JavaScript 

## Funcionalidades

- Gera CPFs válidos com dígitos verificadores corretos
- Interface simples com botão de gerar

## Demo

[Acesse aqui](https://renan-lopes7.github.io/cpf-generator-js/)
> Quer verificar se os CPFs gerados são válidos? Teste em [4devs — Validador de CPF](https://www.4devs.com.br/validador_cpf)

## Como funciona

O algoritmo de validação do CPF:
1. Gera 9 dígitos aleatórios
2. Calcula o 1º dígito verificador usando soma ponderada (×10 até ×2)
3. Calcula o 2º dígito verificador usando soma ponderada (×11 até ×2)
4. Formata como `000.000.000-00`


## Tecnologias

- HTML5
- CSS3
- JavaScript 
