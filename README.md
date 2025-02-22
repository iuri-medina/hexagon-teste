## **Relatório do Projeto: Sistema de Gerenciamento de Pessoas**

### **1. Visão Geral do Projeto**

O projeto consiste em uma aplicação full-stack para gerenciamento de pessoas, com funcionalidades de cadastro, edição, exclusão e listagem de registros. A aplicação foi desenvolvida utilizando tecnologias modernas e boas práticas de desenvolvimento.

---

### **2. Tecnologias Utilizadas**

### **Frontend**

- **React**
- **TypeScript**
- **HTML/CSS**
- **Fetch API**

### **Backend**

- **ASP.NET**
- **MySQL**
- **Entity Framework**

### **Banco de Dados**

- **MySQL**: Banco de dados utilizado para armazenar as informações das pessoas.
    - **Nome do banco**: `bancotestehexagon`
    - **Usuário**: `Hexagon`
    - **Senha**: `senhaHexagon`
    - **Porta**: `3306`

### **Ferramentas e Bibliotecas**

- **Visual Studio Code**
- Postman
- MySQL Workbench

---

### **3. Decisões de Desenvolvimento**

### **Frontend**

1. **Componentização**:
    - O projeto foi estruturado em componentes reutilizáveis, como `Form` e `Table`, para facilitar a manutenção e escalabilidade.
2. **Validações e Máscaras**:
    - Foram implementadas validações de CPF e formatação de campos como nome e cidade diretamente no frontend para melhorar a experiência do usuário.
    - A máscara de CPF foi implementada usando expressões regulares (`regex`).
3. **Estado Global**:
    - O estado da aplicação é gerenciado localmente no componente `Home`, que controla os dados da tabela e as operações de CRUD.
4. **Reutilização de Código**:
    - O componente `Form` foi reutilizado para a funcionalidade de edição, evitando duplicação de código e garantindo consistência.

### **Backend**

1. **API RESTful**:
    - A API foi desenvolvida em ASP.NET, seguindo o padrão REST para operações CRUD (Create, Read, Update, Delete).
    - As rotas da API são:
        - `GET /api/pessoa`: Retorna a lista de pessoas.
        - `POST /api/pessoa`: Adiciona uma nova pessoa.
        - `PUT /api/pessoa/{id}`: Atualiza uma pessoa existente.
        - `DELETE /api/pessoa/{id}`: Exclui uma pessoa.
2. **Banco de Dados**:
    - O MySQL foi escolhido por sua confiabilidade e facilidade de integração com o ASP.NET.
    - As credenciais de acesso ao banco de dados são seguras e configuradas no backend.
3. **Tratamento de Erros**:
    - O backend retorna códigos de status HTTP apropriados (200, 400, 500) para indicar sucesso ou falha nas operações.
    - O frontend trata esses erros exibindo mensagens adequadas ao usuário.

---

### **4. Funcionalidades e Implementação**

### **Funcionalidades**

1. **Listagem de Pessoas**:
    - Ao carregar a página, os dados são buscados da API e exibidos em uma tabela.
    - Implementação: A função `fetchData` faz uma requisição `GET` para a API e atualiza o estado local.
2. **Cadastro de Nova Pessoa**:
    - O usuário preenche um formulário com campos validados e formatados.
    - Implementação: A função `addItem` envia uma requisição `POST` para a API com os dados do formulário.
3. **Edição de Pessoa**:
    - Ao clicar em "Editar", os campos da linha correspondente são substituídos pelo formulário, permitindo a edição.
    - Implementação: O componente `Form` é reutilizado, e a função `updateItem` envia uma requisição `PUT` para a API.
4. **Exclusão de Pessoa**:
    - Ao clicar em "Excluir", o registro é removido da tabela e do banco de dados.
    - Implementação: A função `deleteItem` envia uma requisição `DELETE` para a API.

### **Implementação Detalhada**

- **Formulário**:
    - O componente `Form` contém campos para nome, idade, estado civil, CPF, cidade e estado.
    - Validações e máscaras são aplicadas diretamente nos eventos `onChange`.
- **Tabela**:
    - O componente `Table` exibe os dados em uma tabela HTML.
    - Quando o usuário clica em "Editar", o formulário é renderizado na linha correspondente.
- **Comunicação com a API**:
    - As funções no arquivo `api.ts` (`fetchData`, `addItem`, `updateItem`, `deleteItem`) encapsulam as requisições HTTP.
    - O uso de `async/await` garante que as operações assíncronas sejam tratadas de forma eficiente.

---

### **5. Estrutura do Projeto**

### **Frontend**

- **Componentes**:
    - `Form.tsx`: Formulário para adicionar/editar pessoas.
    - `Table.tsx`: Tabela para exibir e gerenciar registros.
    - `Home.tsx`: Página principal que integra o formulário e a tabela.
- **Serviços**:
    - `api.ts`: Funções para comunicação com a API.
- **Estilos**:
    - `styles.css`: Estilos globais para a aplicação.

### **Backend**

- **API**:
    - Endpoint: `http://localhost:5281/api/pessoa`.
    - Métodos: `GET`, `POST`, `PUT`, `DELETE`.
- **Banco de Dados**:
    - Tabela `Pessoas`: Armazena os campos `id`, `nome`, `idade`, `estadoCivil`, `cpf`, `cidade`, `estado`.

---

### **6. Conclusão**

O projeto foi desenvolvido com foco em boas práticas de desenvolvimento, como componentização, reutilização de código e validações robustas. A integração entre frontend (React + TypeScript) e backend (ASP.NET + MySQL) foi realizada de forma eficiente, garantindo uma experiência de usuário fluida e segura.

### Como o projeto está:
<img width="1252" alt="image" src="https://github.com/user-attachments/assets/07c27135-1e46-409d-893e-7a2e3b397114" />


### Como executar o projeto:

 - **FrontEnd**:
    - Ir na pasta hexagon-frontend, baixar as dependencias do react e executar o projeto com o comando `npm start`
    - O projeto estará no endereço `http://localhost:3000`
 
 - **BackEnd**
    - Com o ASP.net instalado, ir na pasta hexagonAPI e executar o comando `dotnet run`
    - A API estará no endereço `http://localhost:5281`

### Script SQL para Inserção de Dados Fictícios

INSERT INTO bancotestehexagon.Pessoas (Nome, Idade, EstadoCivil, CPF, Cidade, Estado)
VALUES
('João Silva', 28, 'Solteiro(a)', '529.982.247-25', 'São Paulo', 'SP'),
('Maria Oliveira', 34, 'Casado(a)', '398.476.123-87', 'Rio de Janeiro', 'RJ'),
('Carlos Souza', 45, 'Divorciado(a)', '123.456.789-09', 'Belo Horizonte', 'MG'),
('Ana Costa', 29, 'Solteiro(a)', '987.654.321-00', 'Porto Alegre', 'RS'),
('Pedro Santos', 50, 'Casado(a)', '456.789.123-45', 'Salvador', 'BA'),
('Mariana Lima', 22, 'Solteiro(a)', '321.654.987-09', 'Brasília', 'DF'),
('Lucas Pereira', 33, 'Casado(a)', '654.321.987-00', 'Fortaleza', 'CE'),
('Juliana Almeida', 27, 'Solteiro(a)', '789.123.456-78', 'Curitiba', 'PR'),
('Fernando Rocha', 40, 'Divorciado(a)', '234.567.890-12', 'Recife', 'PE'),
('Patrícia Gomes', 31, 'Casado(a)', '876.543.210-98', 'Manaus', 'AM'),
('Rafael Martins', 25, 'Solteiro(a)', '345.678.901-23', 'Belém', 'PA'),
('Camila Ribeiro', 38, 'Casado(a)', '432.109.876-54', 'Goiânia', 'GO'),
('Gustavo Ferreira', 42, 'Divorciado(a)', '567.890.123-45', 'Vitória', 'ES'),
('Isabela Carvalho', 26, 'Solteiro(a)', '678.901.234-56', 'Florianópolis', 'SC'),
('Roberto Nunes', 55, 'Casado(a)', '789.012.345-67', 'Natal', 'RN'),
('Tatiane Dias', 30, 'Solteiro(a)', '890.123.456-78', 'Campo Grande', 'MS'),
('Bruno Castro', 35, 'Casado(a)', '901.234.567-89', 'João Pessoa', 'PB'),
('Larissa Mendes', 29, 'Solteiro(a)', '012.345.678-90', 'Teresina', 'PI'),
('Diego Araújo', 47, 'Divorciado(a)', '123.456.789-01', 'Maceió', 'AL'),
('Amanda Barbosa', 32, 'Casado(a)', '234.567.890-12', 'Aracaju', 'SE');
