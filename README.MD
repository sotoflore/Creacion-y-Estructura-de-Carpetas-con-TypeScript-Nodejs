# ESTRUCTURA DE CARPETAS CON TYPESCRIPT Y NODEJS

![image-estructura](https://github.com/sotoflore/Creacion-y-Estructura-de-Carpetas-con-TypeScript-Nodejs/blob/main/src/image-estructura.png)


# REST API con Node.js, Express y TypeScript

## Paso 1: Instalar Node.js y configurar un proyecto

- **Instala Node.js**: Si aún no lo tienes instalado, puedes descargarlo desde [nodejs.org](https://nodejs.org/).

- **Inicializa un nuevo proyecto**:
    
    ```bash
    // Creamos un directorio
    mkdir rest-api

    // Accedemos al directorio
    cd  rest-api

    // Inicializamos el proyecto, esto creará un archivo package.json
    npm init -y
    ```

## Paso 2: Instalar TypeScript y configuraciones básicas

- **Instala TypeScript y las definiciones de tipo para Node.js**:
    
    ```bash
    npm install typescript @types/node --save-dev
    ```
    
- **Inicializa TypeScript**:

    ```bash
    npx tsc --init
    ```
    
    Esto creará un archivo **`tsconfig.json`**, donde puedes personalizar tu configuración de **TypeScript**. Unas configuraciones básicas podrían ser:
    
    ```bash
    {
      "compilerOptions": {
        "target": "ES6",
        "module": "commonjs",
        "outDir": "./dist",
        "rootDir": "./src",
        "strict": true,
        "esModuleInterop": true
      },
      "include": ["src/**/*.ts"],
      "exclude": ["node_modules"]
    }
    ```
    - **`compilerOptions`**: Aquí defines las opciones que el compilador usará para transformar tu código **TypeScript** en **JavaScript**.

    - **`target`**: Especifica a qué versión de **JavaScript** se debe compilar. Los valores típicos son **ES5**, **ES6** (o ES2015), **ES2020**, etc. Si eliges **ES6**, el compilador generará código que siga las características de **ECMAScript 2015**.

    - **`module`**: Define el sistema de **módulos** que estás utilizando. Para **Node.js**, comúnmente se usa **CommonJS**, ya que **Node.js** por defecto utiliza ese sistema de módulos.

    - **`outDir`**: Especifica el **directorio** donde se colocará el código **JavaScript** generado después de la compilación. En este caso, el código compilado se ubicará en la carpeta **dist**.

    - **`rootDir`**: Indica la **carpeta raíz** donde está el código **TypeScript**. Esto ayuda a que la estructura de carpetas sea la misma entre tu código fuente y el código compilado.

    - **`strict`**: Habilita todas las verificaciones estrictas del compilador, como la no aceptación de valores null o undefined en lugares no permitidos, controlando de manera más precisa los tipos de datos.

    - **`esModuleInterop`**: Esta opción facilita la interoperabilidad entre los **módulos ES** y **CommonJS**. Con true, te permite importar módulos CommonJS como si fueran módulos ES, usando import en lugar de require.

    - **`include`**: Aquí defines qué archivos deben ser incluidos en la compilación. Por ejemplo, **`src/**/*`** indica que se incluirán todos los archivos dentro de la carpeta **src**.

    - **`exclude`**: Define los archivos o carpetas que deben ser excluidos de la compilación. Normalmente, se excluyen los módulos de **Node.js (node_modules)** y la carpeta donde se guarda el código compilado **(dist)**.
    
- **Crea la carpeta `src`** donde irá todo el código **TypeScript**:

    ```bash
    mkdir src
    ```

## Paso 3: Instalar Express y otros paquetes útiles

- **Instala Express y las definiciones de tipo para TypeScript**:
    
    ```bash
    npm install express
    npm install @types/express --save-dev
    ```
    
- **Instala nodemon** para recargar automáticamente el servidor durante el desarrollo:
    
    ```bash
    npm install nodemon --save-dev
    ```
    
- **Instala ts-node** para ejecutar **TypeScript** directamente en **Node.js**:
    
    ```bash
    npm install ts-node --save-dev
    ```
    

## Paso 4: Crear el archivo de entrada del servidor

- En la carpeta **`src`**, crea un archivo llamado **`index.ts`**:
    ```bash
    touch src/index.ts
    ```
    
- **Configura el servidor básico** en `index.ts`:
    
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

## Paso 5: Configurar scripts en package.json

- En el archivo **`package.json`**, agrega los siguientes scripts para ejecutar el servidor:

    ```js
    "scripts": {
        "start": "node dist/index.js",
        "build": "tsc",
        "dev": "nodemon --watch src --exec ts-node src/index.ts"
    }
    ```

    -   **`start`**: para iniciar el servidor en producción.
    -   **`build`**: para compilar **TypeScript** a **JavaScript** en la carpeta **`dist`**.
    -   **`dev`**: para iniciar el servidor en modo desarrollo con recarga automática.

## Paso 6: Probar el servidor

- **Inicia el servidor en modo desarrollo**:
    ```bash
    npm run dev
    ```
    
- **Verifica el servidor** abriendo tu navegador y accediendo a **`http://localhost:3000`**. Deberías ver el mensaje **"Hello, world!"**.

## Paso 7: Agregar rutas y controladores

- **Crea una estructura de carpetas** para organizar mejor tu código:
    
    ```bash
    mkdir src/routes src/controllers
    ```
    
- **Crear una ruta** en **`src/routes/index.ts`**:
    
    ```ts
    import { Router } from "express";
    import { getUsers } from "../controllers/userController";

    const router = Router();

    router.get("/users", getUsers);

    export default router;
    ```
    
- **Crear un controlador** en **`src/controllers/userController.ts`**:
    
    ```ts
    import { Request, Response } from "express";

    export const getUsers = (req: Request, res: Response) => {
    const users = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Smith" },
    ];
    res.json(users);
    };
    ```
    
- **Agregar la ruta en `src/index.ts`**:
    
    ```ts
    import express from "express";
    import routes from "./routes";

    const app = express();
    const port = process.env.PORT || 3000;

    app.use(express.json());
    app.use("/api", routes);

    app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
    });
    ```
    
## Paso 8: Configurar variables de entorno

- **Instala dotenv** para manejar variables de entorno:
    ```bash
    npm install dotenv
    ```
    
- **Crea un archivo `.env`** en la raíz del proyecto, añade alguna variable como el puerto:
    ```bash
    PORT=4000
    ```
    
- **Carga las variables en `src/index.ts`**:
    
    ```ts
    import dotenv from "dotenv";
    dotenv.config();
    ```
    

## Paso 9: Configurar el manejo de errores

- **Crea un middleware de manejo de errores** en **`src/middleware/errorHandler.ts`**:
    
    ```ts
    import { Request, Response, NextFunction } from "express";

    export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
    ) => {
    console.error(err.stack);
    res.status(500).send({ message: "Something went wrong!" });
    };
    ```
    
- **Utiliza el middleware en `src/index.ts`**:
    
    ```ts
    import { errorHandler } from "./middleware/errorHandler";
    
    app.use(errorHandler);
    ```
    

## Paso 10: Compilar y desplegar

- **Compila el proyecto**:

    ```bash
    npm run build
    ```
    
- **Ejecuta el servidor compilado**:
    
    ```bash
    npm start
    ```
>info
Con estos pasos tendrás una **API** básica con **Node.js** y **TypeScript** que incluye **rutas**, **controladores**, **manejo de errores** y **configuración de variables de entorno**.

 ## Estructura Simple 
 Esta estructura es más simple y directa:
```bash
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
