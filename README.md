# DOT Technical Assessment - Demoblaze

Este repositório contém a avaliação técnica para a DOT Digital Group, com foco na automação de testes para o site Demoblaze. Abaixo estão os detalhes do projeto, incluindo a história do usuário, critérios de aceite, casos de teste, estimativa de tempo e os testes automatizados desenvolvidos em Cypress.

## 1. História do Usuário (User Story)

**Como um** cliente do site Demoblaze  
**Eu quero** navegar pelas categorias de produtos e adicionar um item ao carrinho  
**Para que eu possa** encontrar e comprar um produto específico de forma prática.

## 2. Critérios de Aceite

1. O cliente deve ser capaz de selecionar uma categoria no menu para visualizar os produtos disponíveis.
2. Ao clicar em um produto, os detalhes devem ser exibidos (nome, preço e descrição).
3. O botão "Add to cart" deve adicionar o produto ao carrinho com uma mensagem de confirmação.

## 3. Regras de Negócio

- **RN-01**: Apenas produtos disponíveis devem ser exibidos ao selecionar uma categoria.
- **RN-02**: A seleção de uma categoria deve carregar todos os produtos associados à categoria escolhida.
- **RN-03**: Após adicionar um produto ao carrinho, uma mensagem "Product added" deve ser exibida.

## 4. Casos de Testes

### Cenário 1: Selecionar uma categoria
- **Dado** que o cliente está na página inicial,
- **Quando** clicar na categoria "Laptops",
- **Então** deve ser exibida uma lista de produtos pertencentes à categoria "Laptops".

### Cenário 2: Visualizar detalhes de um produto
- **Dado** que o cliente está na lista de produtos de "Laptops",
- **Quando** clicar em "Sony vaio i5",
- **Então** a página de detalhes deve ser exibida com o nome, preço e descrição do produto.

### Cenário 3: Adicionar produto ao carrinho
- **Dado** que o cliente está na página de detalhes de "Sony vaio i5",
- **Quando** clicar em "Add to cart",
- **Então** uma mensagem "Product added" deve ser exibida.

### Cenário 4: Selecionar uma categoria inexistente
- **Dado** que o cliente está na página inicial,
- **Quando** clicar na categoria "Teclados",
- **Então** deve ser exibida uma mensagem de erro.


## 5. Estimativa de Tempo

### Tempo Total Estimado: 8 horas

#### 5.1 Planejamento e Documentação: 1 hora
- **Descrição**: Tempo para revisar o escopo, identificar os fluxos e documentar os casos de teste.

#### 5.2 Desenvolvimento de Testes no Cypress: 4 horas
- **Descrição**: Tempo para criar scripts de teste para os cenários, levando em consideração a prática com automação de testes. Isso inclui a escrita e a depuração dos testes para garantir que funcionem corretamente.
- **Cálculo**: A escrita de testes em Cypress para cenários simples pode levar entre 1 a 1,5 horas por fluxo para quem está em processo de aprendizado. O tempo adicional inclui testes de depuração e ajustes.

#### 5.3 Configuração do Pipeline: 1 hora
- **Descrição**: Configuração do pipeline para rodar os testes automatizados. Esse tempo inclui a criação e testes do arquivo `pipeline.yml` e a verificação se tudo está configurado corretamente no ambiente de CI/CD.

#### 5.4 Execução dos Testes e Análise de Resultados: 1 hora
- **Descrição**: Tempo para rodar os testes e revisar os resultados. Esse tempo também leva em conta a identificação e correção de falhas que possam aparecer durante a execução.

### Resumo do Tempo de Teste

- **Planejamento e Documentação**: 1 hora
- **Desenvolvimento dos Scripts de Teste**: 4 horas
- **Configuração do Pipeline**: 1 hora
- **Execução e Análise de Resultados**: 1 hora

**Total Estimado**: 8 horas

## 6. Testes Automatizados (Cypress)

### Fluxos Automatizados
- Seleção de Categoria
- Visualização de Detalhes do Produto
- Adição ao Carrinho
- Selecionar uma categoria inexistente

## Pré requisitos para utilizar o projeto
### SO
macOS 10.9 e superior (Intel ou Apple Silicon 64-bit (x64 ou arm64))
Linux Ubuntu 20.04 e superior, Fedora 21 e Debian 8 (x86_64 ou Arm 64 bits (x64 ou arm64))
Windows 10 e superior (apenas 64 bits)

### Hardware
Mínimo de 2 CPUs para rodar o Cypress
1 CPU adicional se a gravação de vídeo estiver ativada
1 CPU adicional por processo executado fora do Cypress, como:
Servidor de aplicativos (frontend)
Servidor de aplicativos (back-end)
Banco de dados de aplicativos
Qualquer infraestrutura adicional (Redis, Kafka, etc.)

### Memória
Mínimo de 4 GB, 8 GB + para execuções de teste mais longos.

### NodeJS
Node.js 18.x
Node.js 20.x ou superior

### IDE
VSCODE
Qualquer outra de sua preferência

### Links de instalação
NodeJs - https://nodejs.org/en/download
VSCODE - https://code.visualstudio.com/download

### Documentos de referência
Cypress:
https://www.cypress.io/
https://example.cypress.io/commands/actions
https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Folder-Structure

## Configurando ambiente para começar a usar o Cypress
Agora iremos configurar o ambiente para iniciarmos nosso projeto com o Cypress. Para isso é necessário realizar o download da IDE do VSCODE

# 01 Instalação inicial
Faça o download o NodeJS e instale a versão compatível com seu Sistema Operacional;
Faça o download e instale o VSCODE ou outra IDE de sua preferência;

# 02 Instale o Cypress
npm install cypress --save-dev

# 03 Observação
Está configurado no package.json, um bloco de script para executar o cypress

"scripts": {
    "cypress:open": "cypress open"
  }
A sintaxe "cypress:open" determina como será executado o cypress, recebendo a instrução padrão "cypress open"

# 04 Executando o cypress
   npm run cypress:open
Pronto agora é só criar seus cenários de testes e aproveitar o melhor da ferramenta.

