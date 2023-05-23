# Projeto FullStack utilizando React.js & Nest.js
![https://nodejs.org/en/docs](https://img.shields.io/static/v1?label&?style=flat&logo=nodedotjs&logoColor=339933&message=node.js&color=026e00)
![https://swagger.io/tools/swagger-ui/](https://img.shields.io/static/v1?label&?style=flat&logo=swagger&logoColor=173647&message=swagger&color=85EA2D)
![https://www.npmjs.com/](https://img.shields.io/static/v1?label&?style=flat&logo=npm&logoColor=FFFFFF&message=npm&color=CB3837)
![https://react.dev](https://img.shields.io/static/v1?label&?style=flat&logo=react&logoColor=61DAFB&message=react.js&color=087ea4&)
![https://vitejs.dev](https://img.shields.io/static/v1?label&?style=flat&logo=vite&logoColor=FFC93C&message=vite&color=646CFF)
![https://tailwindcss.com](https://img.shields.io/static/v1?label&?style=flat&logo=tailwindcss&logoColor=06B6D4&message=tailwindcss&color=172554)
![https://www.typescriptlang.org](https://img.shields.io/static/v1?label&?style=flat&logo=typescript&logoColor=FFFFFF&message=typescript&color=3178C6)
![https://nestjs.com](https://img.shields.io/static/v1?label&?style=flat&logo=nestjs&logoColor=E0234E&message=nest.js&color=111)
![https://www.prisma.io](https://img.shields.io/static/v1?label&?style=flat&logo=prisma&logoColor=FFFFFF&message=prisma&color=2D3748)

Projeto web fullstack simples desenvolvido para teste de conhecimento prático

### 🛠 Tecnologias utilizadas no projeto de back-end
- Nodejs 
- Nestjs 
- @nestjs/swagger
- Typescript 
- PrismaORM 
- Sqlite

### 💻 Tecnologias utilizadas no projeto de front-end
- React 
- Vite 
- Typescript 
- Axios 
- React-Hook-Form 
- Zod 
- Tailwindcss
- Radix-ui
- Radix-icons

## Após clonar o repositório siga os seguintes passos para baixar as dependências
Para seguir nesta etapa é necessário que você tenha conhecimentos de comando de terminal, npm e vscode.

**1º Etapa:** Abra o projeto no vscode e depois abra dois terminais, sendo um para entrar na pasta do backend e a outra para a pasta do frontend.

**2º Etapa:** Após acessar as duas pastas no terminal, digite no terminal de ambas o seguinte comando:
```
npm i
```
> Terminando de instalar todas as dependências, os dois projetos estão prontos para serem executados, para entender como executar cada um, siga o passo a passo a seguir.

## Manual do projeto back-end
Para rodar a aplicação back-end, vá para o terminal onde está aberto a pasta backend e digite o seguinte comando:
```
npm run start:dev
```
> Se quiser executar sem o modo dev é só tirar o :dev

Porta em que o projeto roda
```
localhost:4015
```
> O projeto rodará na porta 4015, caso deseje mudar vá para o arquivo main e mude a porta. **Aviso:** Alterando a porta, será necessário que mude também no front-end na pasta src/api/Api.ts. 

### Acessando o prisma studio
O banco de dados utilizado no projeto foi o sqlite, que é um banco de dados que fica armazenado internamente na pasta do projeto, facilitando a conexão e podendo ser acessado para modificar os dados das tabelas, utilizando-se tanto pelo **beekeeper studio** quanto pelo **prisma**. Para esta ocasião utilizaremos o **prisma**.
Para acessar o prisma studio, vá para o terminal do back-end e digite o seguinte comando:
```
npx prisma studio
```
> Após a execução irá abrir uma página da web onde nela você acessará as tabelas, criar dados, modificá-los e deletá-los. Para sair basta fechar a guia dele no browser.

### Acessando a documentação OpenAPI das rotas http na web
Para acessar a documentação da OpenAPI basta digitar a seguinte url
```
localhost:4015/doc
```
> Na documentação OpenAPI você verá como executa cada requisição http e ver sua resposta de retorno. Caso deseje botar em prática pelo Postman ou Insomnia, você precisará pegar o esquema de cada rota url descrita na documentação, além de cópiar o json para fazer as requisições post e delete.

### Descrição das rotas
Descrição da funcionalidade de cada rota http presente no back-end.

**POST** Create Empresa:

Cria uma empresa

> /empresa

**GET** Find Empresa by ID:

Mostra os dados de uma empresa, é necessário passar o ID da empresa pelas Path Variables do request.

> /empresa/:id

**GET** List All Empresas:

Lista todas as empresas cadastradas:

> /empresa

**PATCH** Update Empresa:

Nesta rota é possível fazer a atualização nos dados da empresa, é necessário passar o ID da empresa pelas Path Variables do request, e depois passar o json no body, detalhe, não precisa ter o id no corpo do json, só no path

> /empresa/:id

**DELETE** Delete Empresa:

Nesta rota é possível deletar uma empresa, pelo ID informado no Path Variables.

> /empresa/:id

## Manual do projeto front-end
Para rodar a aplicação front-end, á para o terminal onde está aberto a pasta frontend e digite o seguinte comando: 
```
npm run dev
```
> Quando a aplicação começar a rodar, clique no link que está escrito no console do terminal para poder acessar a aplicação na web.

**Obs.:** Para poder visualizar a tabela, é necessário que o back-end esteja rodando e que tenha dados no banco de dados.

