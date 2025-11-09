# 🏦 Banco Web Tests

Projeto de testes automatizados desenvolvido para a **Mentoria 2.0**, com o objetivo de demonstrar boas práticas de automação de testes utilizando **Cypress** e **JavaScript**.

## 📋 Sobre o Projeto

Este projeto foi criado para ensinar aos alunos da Mentoria 2.0 como automatizar testes de aplicações web utilizando o framework Cypress. A aplicação testada é um sistema bancário simples que permite realizar login e transferências entre contas.

O foco está em demonstrar:
- Organização de código com Custom Commands
- Uso de fixtures para gerenciamento de dados de teste
- Geração de relatórios automatizados
- Boas práticas de estruturação de testes E2E

## 🏗️ Componentes do Projeto

### Estrutura de Pastas

```
banco-web-tests/
├── cypress/
│   ├── e2e/                      # Testes end-to-end
│   │   ├── login.cy.js           # Testes de login
│   │   └── transferencia.cy.js   # Testes de transferência
│   ├── fixtures/                 # Dados de teste
│   │   └── credenciais.json      # Credenciais para login
│   ├── support/                  # Comandos customizados e configurações
│   │   ├── commands.js           # Importação dos comandos
│   │   ├── e2e.js                # Configurações globais
│   │   └── commands/             # Custom Commands organizados
│   │       ├── common.js         # Comandos comuns/utilitários
│   │       ├── login.js          # Comandos de login
│   │       └── transferencias.js # Comandos de transferência
│   ├── reports/                  # Relatórios HTML gerados
│   ├── screenshots/              # Capturas de tela dos testes
│   └── videos/                   # Vídeos das execuções
├── cypress.config.js             # Configurações do Cypress
└── package.json                  # Dependências do projeto
```

### Tecnologias Utilizadas

- **[Cypress](https://www.cypress.io/)** (v14.5.1) - Framework de testes E2E
- **[cypress-mochawesome-reporter](https://www.npmjs.com/package/cypress-mochawesome-reporter)** (v4.0.2) - Gerador de relatórios HTML

## 🚀 Pré-requisitos

Antes de executar os testes, certifique-se de ter:

1. **Node.js** instalado (versão 14 ou superior)
2. **API do Banco** em execução: [banco-api](https://github.com/juliodelimas/banco-api)
3. **Aplicação Web** em execução: [banco-web](https://github.com/juliodelimas/banco-web)

> ⚠️ **Importante**: Os testes dependem que a API e a aplicação web estejam rodando localmente. A aplicação deve estar disponível em `http://localhost:4000`.

## 📦 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/ilanaalc/banco-web-tests.git
cd banco-web-tests
```

2. Instale as dependências:
```bash
npm install
```

## ▶️ Executando os Testes

### Modo Headless (sem interface gráfica)
```bash
npm test
```

### Modo Headed (com navegador visível)
```bash
npm run cy:headed
```

### Modo Interativo (Cypress Test Runner)
```bash
npm run cy:open
```

### Relatórios

Após a execução dos testes, os relatórios HTML são gerados automaticamente em:
```
cypress/reports/html/index.html
```

## 🧪 Documentação dos Testes

### Login (`login.cy.js`)

Testa as funcionalidades de autenticação do sistema.

#### Cenários:

| Cenário | Descrição | Resultado Esperado |
|---------|-----------|-------------------|
| **Login com dados válidos** | Realiza login com credenciais corretas | Usuário é direcionado para a tela de transferências |
| **Login com dados inválidos** | Tenta login com senha incorreta | Mensagem de erro é exibida: "Erro no login. Tente novamente." |

### Transferências (`transferencia.cy.js`)

Testa as funcionalidades de transferência entre contas.

#### Cenários:

| Cenário | Descrição | Resultado Esperado |
|---------|-----------|-------------------|
| **Transferência com dados válidos** | Transfere valor abaixo de R$5.000 | Mensagem de sucesso: "Transferência realizada!" |
| **Transferência acima de R$5.000** | Tenta transferir acima do limite sem token | Mensagem de erro sobre autenticação necessária |

## 🛠️ Custom Commands

Os Custom Commands foram organizados em módulos para melhor manutenibilidade:

### Commands de Login (`commands/login.js`)

#### `cy.realizarLoginComCredenciaisValidas()`
Realiza o login utilizando credenciais válidas do arquivo `credenciais.json`.

**Exemplo:**
```javascript
cy.realizarLoginComCredenciaisValidas()
```

#### `cy.realizarLoginComCredenciaisInvalidas()`
Realiza o login utilizando credenciais inválidas do arquivo `credenciais.json`.

**Exemplo:**
```javascript
cy.realizarLoginComCredenciaisInvalidas()
```

---

### Commands de Transferência (`commands/transferencias.js`)

#### `cy.realizarTransferencia(contaOrigem, contaDestino, valor)`
Realiza uma transferência entre contas.

**Parâmetros:**
- `contaOrigem` (string): Nome da conta de origem
- `contaDestino` (string): Nome da conta de destino
- `valor` (string): Valor a ser transferido

**Exemplo:**
```javascript
cy.realizarTransferencia('João da Silva', 'Maria Oliveira', '100')
```

---

### Commands Comuns (`commands/common.js`)

#### `cy.verificarMensagemNoToast(mensagem)`
Verifica se a mensagem esperada é exibida no toast de notificação.

**Parâmetros:**
- `mensagem` (string): Texto esperado no toast

**Exemplo:**
```javascript
cy.verificarMensagemNoToast('Transferência realizada!')
```

#### `cy.selecionarOpcaoNaComboBox(labelDoCampo, opcao)`
Seleciona uma opção em um campo de seleção (combo box).

**Parâmetros:**
- `labelDoCampo` (string): ID do label do campo
- `opcao` (string): Texto da opção a ser selecionada

**Exemplo:**
```javascript
cy.selecionarOpcaoNaComboBox('conta-origem', 'João da Silva')
```

## 📊 Fixtures

### `credenciais.json`

Armazena as credenciais utilizadas nos testes:

```json
{
  "valida": {
    "usuario": "julio.lima",
    "senha": "123456"
  },
  "invalida": {
    "usuario": "julio.lima",
    "senha": "654321"
  }
}
```

## 🔧 Configurações

O arquivo `cypress.config.js` contém as configurações principais:

- **baseUrl**: `http://localhost:4000` - URL base da aplicação
- **reporter**: `cypress-mochawesome-reporter` - Gerador de relatórios
- **e2e**: Configurações específicas para testes E2E

## 📝 Scripts Disponíveis

| Script | Comando | Descrição |
|--------|---------|-----------|
| `test` | `npm test` | Executa os testes em modo headless |
| `test-qa` | `npm run test-qa` | Executa os testes no ambiente de QA |
| `test-prod` | `npm run test-prod` | Executa os testes no ambiente de produção |
| `cy:headed` | `npm run cy:headed` | Executa os testes com navegador visível |
| `cy:open` | `npm run cy:open` | Abre o Cypress Test Runner |

## 📚 Recursos Adicionais

- [Documentação Oficial do Cypress](https://docs.cypress.io/)
- [API do Banco](https://github.com/juliodelimas/banco-api)
- [Aplicação Web do Banco](https://github.com/juliodelimas/banco-web)

## 👥 Autor

Desenvolvido para a **Mentoria 2.0** por [ilanaalc](https://github.com/ilanaalc)

## 📄 Licença

ISC

---

⭐ **Dica**: Explore os testes e Custom Commands para entender como estruturar seus próprios projetos de automação!
