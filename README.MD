# ESTRUCTURA DE CARPETAS CON TYPESCRIPT Y NODEJS
![image-estructura](https://github.com/sotoflore/Creacion-y-Estructura-de-Carpetas-con-TypeScript-Nodejs/blob/main/src/image-estructura.png)

## Instalar Node.js
Primero, necesitas instalar **Node.js** en tu máquina. Puedes descargar el instalador desde la [página oficial de Node.js](https://nodejs.org/). Asegúrate de instalar también **`npm`** (Node Package Manager), que generalmente viene incluido con **Node.js**.

## Configurar el Entorno de Trabajo
Crea un nuevo directorio para tu proyecto y navega a él en la terminal.

```bash
mkdir mi-proyecto-node
```
```bash
cd mi-proyecto-node
```

## Inicializar el Proyecto
Utiliza **`npm`** para inicializar tu proyecto. Esto creará un archivo **`package.json`** en tu directorio, que mantendrá el registro de las dependencias y scripts de tu proyecto.

```bash
npm init
```

Durante este proceso, se te pedirá que ingreses información sobre tu proyecto, como el **nombre**, la **versión**, la **descripción**, el **punto de entrada**, **etc**. Puedes presionar **`Enter`** para aceptar los valores predeterminados o proporcionar tus propios valores.

```json
 {
    "name": "estructura-app-de-typescript-nodejs",
    "version": "1.0.0",
    "description": "ejemplo de como estructurar nuestros archivos al desarollar una app con TypeScript",
    "main": "index.js",
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "Francisco Soto Flores",
    "license": "ISC"
}
```
## Instalar TypeScript
Instala **TypeScript** y el tipo de definiciones para **Node.js** como dependencias de desarrollo.
```bash
npm install typescript @types/node --save-dev
```
o
```bash
npm install -D typescript
```

## Configurar TypeScript
Inicializa un archivo de configuración de TypeScript **`tsconfig.json`**.
```bash
tsc --init
```
Esto generará un archivo **`tsconfig.json`** en tu directorio de proyecto. Puedes personalizar este archivo según tus necesidades, pero una configuración básica puede verse así:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  }
} 
```
## Crear el Directorio de Código Fuente
Crea un directorio **`src`** donde colocarás tus archivos **TypeScript**.
```bash
mkdir src
```

## Crear el Archivo Principal
Por lo general, el archivo de entrada de un proyecto **Node.js** es **`index.ts`** o **`app.ts`**. Crea este archivo en tu directorio de proyecto.

## Instalar TypeScript y las Definiciones de Tipo
Instala **TypeScript** y las definiciones de tipo para **Node.js** y **Express** como dependencias de desarrollo.
```bash
npm install @types/express --save-dev
```

## Instalar Express
Instala **Express** como una dependencia del proyecto.
```bash
npm install express
```

## Escribir el Código en TypeScript
Crea un archivo **`src/index.ts`** y escribe tu código **TypeScript** con **Express**. Un ejemplo simple:
```ts
import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, world!");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

``` 
## Compilar el Código TypeScript
Compila tu proyecto utilizando el comando **`tsc`**.
```bash
npx tsc
``` 
Este comando generará los archivos **JavaScript** compilados en el directorio **`dist`**.

## Ejecutar el Código Compilado
Para ejecutar tu código, usa **`node`** y apunta al archivo **JavaScript** compilado.
```bash
node dist/index.js
```
## Configurar Scripts en package.json
Para facilitar el proceso de **compilación** y **ejecución**, puedes agregar **scripts** a tu **`package.json`**:
```json
`"scripts": {
  "build": "tsc",
  "start": "node dist/index.js",
  "dev": "tsc && node dist/index.js"
}` 
```
Ahora puedes usar los siguientes comandos:
-   Para compilar el proyecto: **`npm run build`**
-   Para ejecutar el proyecto: **`npm start`**
-   Para compilar y ejecutar el proyecto: **`npm run dev`**

 ## Estructura Simple 
 Esta estructura es más simple y directa:
```
my-simple-api/
├── src/
│   ├── controllers/
│   │   ├── userController.ts
│   ├── models/
│   │   ├── userModel.ts
│   ├── routes/
│   │   ├── userRoutes.ts
│   ├── services/
│   │   ├── userService.ts
│   ├── config/
│   │   ├── dbConfig.ts
│   ├── middlewares/
│   │   ├── errorHandler.ts
│   ├── app.ts
│   └── server.ts
├── test/
│   ├── controllers/
│   │   ├── userController.test.ts
│   ├── models/
│   │   ├── userModel.test.ts
│   ├── routes/
│   │   ├── userRoutes.test.ts
│   ├── services/
│   │   ├── userService.test.ts
├── package.json
├── tsconfig.json
├── .eslintrc.js
├── .prettierrc
└── README.md 
```

### Descripción de la estructura
-   **src/**: Directorio principal del código fuente.
    -   **controllers/**: Contiene los controladores que gestionan las solicitudes HTTP.
        -   **userController.ts**: Controlador para las operaciones relacionadas con los usuarios.
    -   **models/**: Contiene los modelos que representan las estructuras de datos (por ejemplo, esquemas de base de datos).
        -   **userModel.ts**: Modelo de datos para los usuarios.
    -   **routes/**: Contiene las definiciones de rutas de la API.
        -   **userRoutes.ts**: Rutas para las operaciones relacionadas con los usuarios.
    -   **services/**: Contiene la lógica de negocio y servicios de la aplicación.
        -   **userService.ts**: Servicio para las operaciones relacionadas con los usuarios.
    -   **config/**: Contiene archivos de configuración.
        -   **dbConfig.ts**: Configuración de la base de datos.
    -   **middlewares/**: Contiene middleware para la aplicación.
        -   **errorHandler.ts**: Middleware para el manejo de errores.
    -   **app.ts**: Configuración y creación de la aplicación Express.
    -   **server.ts**: Punto de entrada principal para iniciar el servidor.
-   **test/**: Directorio para los tests.
    -   **controllers/**: Tests para los controladores.
    -   **models/**: Tests para los modelos.
    -   **routes/**: Tests para las rutas.
    -   **services/**: Tests para los servicios.
-   **package.json**: Archivo de configuración de npm.
-   **tsconfig.json**: Archivo de configuración de TypeScript.
-   **.eslintrc.js**: Configuración de ESLint.
-   **.prettierrc**: Configuración de Prettier.
-   **README.md**: Documentación del proyecto.

Esta estructura es más sencilla y directa, ideal para proyectos pequeños o medianos donde la complejidad adicional de una arquitectura limpia no es necesaria.
