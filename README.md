# Projeto da Unidade 8: API RESTful de Gerenciamento de Vagas Express.js

## Descrição do Projeto
Este projeto é uma API RESTful simples para gerenciamento de vagas de emprego, desenvolvida utilizando Node.js com o framework **Express**. A API foi criada com o objetivo de aprendizado e estudo, utilizando uma estrutura CRUD (Create, Read, Update, Delete) para manipular os dados de vagas. 

A base de dados é mantida localmente, armazenada na própria estrutura do código, facilitando o desenvolvimento sem a necessidade de configurar um banco de dados externo. Isso permite focar no desenvolvimento das funcionalidades da API e no entendimento dos métodos HTTP sem complexidade adicional, sendo uma escolha ideal para estudos e testes iniciais.

## Funcionalidades Principais
A API oferece rotas para operações CRUD, permitindo o gerenciamento das vagas:
- **POST /vagas**: Cria uma nova vaga.
- **GET /vagas**: Retorna todas as vagas cadastradas.
- **PUT /vagas/:id**: Atualiza uma vaga específica, com o ID informado na URL.
- **DELETE /vagas/:id**: Deleta uma vaga específica pelo ID.

### Estrutura de Dados
Cada vaga possui os seguintes campos:
- **title**: Título da vaga
- **description**: Descrição da vaga
- **dateRegistration**: Data de registro da vaga
- **telephone**: Telefone de contato
- **company**: Nome da empresa que oferece a vaga

## Bibliotecas Utilizadas
O projeto utiliza as seguintes bibliotecas:

- **Express**: Facilita a criação de rotas e o tratamento de requisições e respostas HTTP, sendo uma escolha popular para criar APIs em Node.js de forma rápida e eficiente.
- **Nodemon**: Permite a atualização automática do servidor sempre que o código é modificado, acelerando o desenvolvimento, pois elimina a necessidade de reiniciar manualmente o servidor após cada alteração.
- **UUID** e **UUIDv4**: São usadas para gerar identificadores únicos para cada vaga criada, garantindo que cada recurso tenha um identificador único sem risco de conflitos.

## Conceitos Fundamentais

### O Que é uma API RESTful?
Uma API RESTful é uma interface que permite a comunicação entre sistemas através de operações padronizadas (como HTTP) e se baseia em recursos, representados em URLs. Cada recurso pode ser acessado e manipulado de acordo com o método HTTP utilizado:
- **GET**: Recupera recursos
- **POST**: Cria novos recursos
- **PUT**: Atualiza recursos existentes
- **DELETE**: Exclui recursos

Esse padrão facilita a escalabilidade e integração entre diferentes sistemas, tornando as APIs RESTful uma escolha comum para aplicações modernas.

### Introdução ao Protocolo HTTP
O HTTP (Hypertext Transfer Protocol) é o protocolo que define como as mensagens são transmitidas na web. A comunicação cliente-servidor em HTTP é baseada em requisições e respostas:
1. **Requisição HTTP**: Contém um método (como GET ou POST), o caminho do recurso, e, opcionalmente, cabeçalhos e corpo de dados.
2. **Resposta HTTP**: Inclui um código de status (como 200 OK ou 404 Not Found), cabeçalhos e, quando necessário, um corpo de conteúdo.

### Métodos HTTP e Códigos de Status
Cada método HTTP serve para uma função específica, e os códigos de status indicam o resultado da operação:
- **200 OK**: Operação bem-sucedida
- **201 Created**: Recurso criado com sucesso
- **404 Not Found**: Recurso não encontrado
- **500 Internal Server Error**: Erro no servidor

## Executando e Testando o Backend

### Pré-requisitos
Antes de começar, certifique-se de que você tem os seguintes programas instalados em sua máquina:

- **Node.js**: A plataforma de JavaScript necessária para executar o servidor. Você pode baixar e instalar o Node.js através do [site oficial](https://nodejs.org/).
- **Postman**: Uma ferramenta popular para testar APIs. Você pode baixar e instalar o Postman através do [site oficial](https://www.postman.com/downloads/).
- **Editor de Código**: Utilize um editor de código como o **Visual Studio Code (VSCode)** ou qualquer outro de sua preferência para editar o código-fonte.

### Passos para Execução

1. **Clone o Repositório**
   Clone o repositório do projeto para sua máquina local:
   ```bash
   git clone https://github.com/diogomasc/ResTIC36_VagasAPI_CRUD.git
   cd ResTIC36_VagasAPI_CRUD
   ```

2. **Instale as Dependências**
   Navegue até o diretório do projeto e instale as dependências necessárias executando:
   ```bash
   npm install
   ```

3. **Inicie o Servidor**
   Após a instalação das dependências, você pode iniciar o servidor com o seguinte comando:
   ```bash
   npm start
   ```
   O servidor será iniciado na porta padrão (geralmente a porta 3000). Você verá uma mensagem no console indicando que o servidor está rodando.

4. **Teste a API no Postman**
   Abra o Postman e utilize as seguintes rotas para testar a API:

   - **Criar uma nova vaga (POST)**
     - URL: `http://localhost:3000/vagas`
     - Método: `POST`
     - Corpo da requisição (JSON):
       ```json
       {
         "title": "Desenvolvedor Backend",
         "description": "Vaga para desenvolvedor backend com experiência em Node.js.",
         "dateRegistration": "2024-11-01",
         "telephone": "(11) 99999-9999",
         "company": "Tech Company"
       }
       ```

   - **Obter todas as vagas (GET)**
     - URL: `http://localhost:3000/vagas`
     - Método: `GET`

   - **Atualizar uma vaga (PUT)**
     - URL: `http://localhost:3000/vagas/:id` (substitua `:id` pelo ID da vaga que deseja atualizar)
     - Método: `PUT`
     - Corpo da requisição (JSON):
       ```json
       {
         "title": "Desenvolvedor Fullstack",
         "description": "Vaga para desenvolvedor fullstack com experiência em Node.js e React.",
         "dateRegistration": "2024-11-01",
         "telephone": "(11) 88888-8888",
         "company": "Tech Company"
       }
       ```

   - **Deletar uma vaga (DELETE)**
     - URL: `http://localhost:3000/vagas/:id` (substitua `:id` pelo ID da vaga que deseja deletar)
     - Método: `DELETE`

### Considerações Finais

Certifique-se de que o servidor esteja rodando antes de fazer qualquer requisição no Postman. A API deve responder com os códigos de status apropriados e, em caso de sucesso, retornar os dados solicitados.

## Exemplos de Uso no Postman
Abaixo, você encontrará prints das requisições feitas no Postman para cada operação, demonstrando o funcionamento completo da API:

**Exemplo de Requisição POST /vagas**

![1-post](https://github.com/user-attachments/assets/f4af1cee-2a56-4722-8198-fdd7ab17e3ad)

**Exemplo de Requisição GET /vagas**

![2-get](https://github.com/user-attachments/assets/f82acde3-6406-416c-a611-308f4594d25b)

**Exemplo de Requisição PUT /vagas/:id**

![3-put](https://github.com/user-attachments/assets/9e5ce2b6-2cc6-4e61-84ea-589d59ada576)

**Exemplo de Requisição DELETE /vagas/:id**

![4-delete](https://github.com/user-attachments/assets/e2f73210-2811-4e18-a57e-fd929640bf20)

Este projeto oferece uma visão prática sobre como construir uma API RESTful simples e eficaz, abordando conceitos fundamentais de HTTP e uso de bibliotecas essenciais em Node.js.
