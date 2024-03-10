## SGC - Sistema de Gerenciamento de Clientes

**Descrição:**

Um sistema composto por um backend em Node.js utilizando PostgreSQL como banco de dados, e um frontend em React.

* Visualizar listas de clientes
* Cadastrar clientes
* Encontrar a menor rota para casa de cada cliente

**Tecnologias:**

* Node.js (v20.10.0)
* PostgreSQL
* React (v18.2.0)
* Fastify (v4.26.2)
* Fastify-cors
* React-router-dom (v6.22.3)
* Axios

**Pré-requisitos:**

* Node.js v20.10.0 ou superior
* PostgreSQL instalado e configurado
* npm

**Instalação:**

1. Clone o repositório do projeto:

```
git clone https://github.com/seu-usuario/SGC-Sistema_de_Gerenciamento_de_Clientes.git
```

2. Acesse a pastas do projeto, backend e frontend/SGC, e instale as dependências:

```
npm install
```

3. Crie o banco de dados e a tabela:

```
Crie um database com nome SGC e execute o arquivo SGC.sql para criar a tabela
```

**Execução:**

1. Inicie o servidor Node.js:

```
npm run dev
```

2. Inicie o servidor React:

```
npm run dev
```

**Funcionalidades:**

* **Cadastro de clientes:**

    * Acesse a página `/cadastrado-clientes`.
    * Preencha o formulário com os dados do cliente.
    * Clique no botão "Salvar".

* **Listagem de clientes:**

    * Acesse a página `/`.
    * Visualize a lista de clientes cadastrados.
    * Clique no nome de um cliente para visualizar seus detalhes.

* **Menor rota para casa:**
  
    * Clique no botão "Calcular rota".

