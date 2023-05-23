# Projeto FullStack utilizando React.js & Nest.js
![https://nodejs.org/en/docs](https://img.shields.io/static/v1?label&?style=flat&logo=nodedotjs&logoColor=339933&message=node.js&color=026e00) 
![https://www.npmjs.com/](https://img.shields.io/static/v1?label&?style=flat&logo=npm&logoColor=FFFFFF&message=npm&color=CB3837)
![https://react.dev](https://img.shields.io/static/v1?label&?style=flat&logo=react&logoColor=61DAFB&message=react.js&color=087ea4&)
![https://vitejs.dev](https://img.shields.io/static/v1?label&?style=flat&logo=vite&logoColor=FFC93C&message=vite&color=646CFF)
![https://tailwindcss.com](https://img.shields.io/static/v1?label&?style=flat&logo=tailwindcss&logoColor=06B6D4&message=tailwindcss&color=172554)
![https://www.typescriptlang.org](https://img.shields.io/static/v1?label&?style=flat&logo=typescript&logoColor=FFFFFF&message=typescript&color=3178C6)
![https://nestjs.com](https://img.shields.io/static/v1?label&?style=flat&logo=nestjs&logoColor=E0234E&message=nest.js&color=111)
![https://www.prisma.io](https://img.shields.io/static/v1?label&?style=flat&logo=prisma&logoColor=FFFFFF&message=prisma&color=2D3748)

Projeto FullStack simples desenvolvido para teste de conhecimento prático. No desenvolvimento back-end foi utilizado Nodejs, Nestjs, Typescript, PrismaORM, Sqlite, e para o front-end React, Vite, Typescript, Axios, React-Hook-Form, Zod, Tailwindcss, Radix-ui, Radix-icons.

## Após clonar o repositório siga os seguintes passos para baixar as dependências
Para seguir nesta etapa é necessário que você tenha conhecimentos de comando de terminal, npm e vscode.

**1º Etapa:** Abra o projeto no vscode e depois abra dois terminais, sendo um para acessar a pasta do backend e a outra para a pasta do frontend

**2º Etapa:** Após acessar as duas pastas no terminal, digite no terminal de ambas o seguinte comando:
```
npm i
```

## Acessando o prisma studio
O banco de dados utilizado no projeto foi o sqlite, que é um banco de dados que fica armazenado internamente na pasta do projeto, podendo ser acessado para modificar os dados os tabelas, utilizando-se tanto pelo **beekeeper studio** quanto pelo **prisma**. Para esta ocasião utilizaremos o **prisma**.
Para acessar o prisma studio, vá para o terminal do back-end e digite o seguinte comando:
```
npx prisma studio
```
Após a execução irá abrir uma página da web onde nela você acessará as tabelas, criar dados, modificá-los e deletá-los. Para sair basta fechar a guia dele no browser.

