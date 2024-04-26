# PORTAFOLIO

## Configurar el servidor con Node.js:
   1. Tener Node.js instalado en el sistema.
   2. Crear un nuevo directorio para tu proyecto y abre una terminal en ese directorio.
   3. Inicializar el proyecto de Node.js ejecutando: 

      `npm init`
---
   4. Instalar Express, un framework de Node.js, ejecutando:

      `npm install express`
---
   5.  Crea un archivo server.js y agregar el  código.
   6. Levantar el servidor de Node.js con el comando:

      `node server.js`
---

El servidor se levanta en el puerto 3000:

      http://localhost:3000

**Descripción:** El servidor Express escucha en el puerto 3000, maneja las solicitudes POST en la ruta /guardar para guardar datos de formularios en un archivo JSON, y proporciona una interfaz para que el cliente se comunique con el servidor.

---
## Crear archivos 
Dentro del proyecto se crea los archivos:

      contactos.json
      server.js

a mismo nivel que el index.html.
   El archivo`contactos.json` debe tener [].


## Estructura del proyecto:

      desafio-portafolio-v2/
      ├── assets
      │   ├── icons
      │   │   └── hobbies
      │   |   └── skills
      │   |── image
      │   |     └── experiencia
      |   └── logos  
      |── node_modules 
      |── styles
      |   └── style.css  
      │── validation
      │   └── validation.js
      |── contactos.json
      |── index.html
      |── package-lock.json
      |── package.json
      |── README.md 
      ├── README.md
      └── server.js
