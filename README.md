# Full-stack web project with React.js & Nest.js.
![https://nodejs.org/en/docs](https://img.shields.io/static/v1?label&?style=flat&logo=nodedotjs&logoColor=339933&message=node.js&color=026e00)
![https://swagger.io/tools/swagger-ui/](https://img.shields.io/static/v1?label&?style=flat&logo=swagger&logoColor=173647&message=swagger&color=85EA2D)
![https://www.npmjs.com/](https://img.shields.io/static/v1?label&?style=flat&logo=npm&logoColor=FFFFFF&message=npm&color=CB3837)
![https://react.dev](https://img.shields.io/static/v1?label&?style=flat&logo=react&logoColor=61DAFB&message=react.js&color=087ea4&)
![https://vitejs.dev](https://img.shields.io/static/v1?label&?style=flat&logo=vite&logoColor=FFC93C&message=vite&color=646CFF)
![https://tailwindcss.com](https://img.shields.io/static/v1?label&?style=flat&logo=tailwindcss&logoColor=06B6D4&message=tailwindcss&color=172554)
![https://www.typescriptlang.org](https://img.shields.io/static/v1?label&?style=flat&logo=typescript&logoColor=FFFFFF&message=typescript&color=3178C6)
![https://nestjs.com](https://img.shields.io/static/v1?label&?style=flat&logo=nestjs&logoColor=E0234E&message=nest.js&color=111)
![https://www.prisma.io](https://img.shields.io/static/v1?label&?style=flat&logo=prisma&logoColor=FFFFFF&message=prisma&color=2D3748)

A simple full-stack web project developed for practical knowledge testing of both back-end and front-end.

### 🛠 Technologies
- Nodejs 
- Nestjs 
- @nestjs/swagger
- Typescript 
- PrismaORM 
- Sqlite
- React 
- Vite 
- Typescript 
- Axios 
- React-Hook-Form 
- Zod 
- Tailwindcss
- Radix-ui
- Radix-icons

## After cloning the repository, follow these steps to download the dependencies
To proceed with this step, you need to have knowledge of terminal commands, npm, and VSCode.

**1º step:** Open the project in VSCode and then open two terminals, one for the backend folder and the other for the frontend folder

**2º step:** After accessing both folders in the terminal, enter the following command in both terminals:
```
npm i
```
> Once all dependencies have finished installing, both projects are ready to be executed. To understand how to run each one, follow the step-by-step guide below.

## 📙 Front-end Project Guide
To run the front-end application, go to the terminal where the frontend folder is open and type the following command:
```
npm run dev
```
> When the application starts running, click on the link shown in the terminal console to access the web application.

**Note:** To view the table, it's necessary for the backend to be running and have data in the database.


<img align="center" alt="Printscreen" src="https://github.com/Marlinsk/desafio-dev-fullstack-jr/blob/main/.github/Print%20recortado%20da%20aplica%C3%A7%C3%A3o%20front-end.png">

## 📙 Back-end Project Guide
To run the back-end application, go to the terminal where the backend folder is open and type the following command:
```
npm run start:dev
```
> If you want to run it without the dev mode, simply remove the :dev part.

Port on which the project runs
```
localhost:4015
```
> The project will run on port 4015. If you want to change it, go to the main file and modify the port. Note: If you change the port, make sure to also change it in the front-end in the src/api/Api.ts file.

### Accessing Prisma Studio
The database used in the project is SQLite, which is a database stored internally in the project folder, making it easy to connect to and can be accessed to modify table data using either **beekeeper studio** or **prisma**. For this case, we will use **prisma**.

To access Prisma Studio, go to the backend terminal and type the following command:
```
npx prisma studio
```
> After execution, a web page will open where you can access tables, create data, modify them, and delete them. To exit, simply close the tab in your browser and press **CTRL + C** in the terminal.

### Accessing the OpenAPI Documentation for HTTP Routes Online
To access the OpenAPI documentation, enter the following URL:
```
localhost:4015/doc
```
> In the OpenAPI documentation, you will see how to perform each **HTTP request** and view its response. If you want to put it into practice using Postman or Insomnia, you will need to take the schema for each URL route described in the documentation and copy the **JSON** to make **POST** and **DELETE** requests.

### Route Descriptions
Route Descriptions

**POST** Create Empresa (Create Company):

Creates a company.

> /empresa

**GET** Find Empresa by ID (Find Company by ID):

Displays the data of a company. You need to pass the company's ID through the Path Variables of the request.

> /empresa/:id

**GET** List All Empresas (List All Companies):

Lists all registered companies.

> /empresa

**PATCH** Update Empresa (Update Company):

In this route, you can update company data. You need to pass the company's ID through the Path Variables of the request and then pass the JSON in the request body. Please note that you don't need to include the ID in the JSON body, only in the path.

> /empresa/:id

**DELETE** Delete Empresa (Delete Company):

In this route, you can delete a company by providing the ID in the Path Variables.

> /empresa/:id

