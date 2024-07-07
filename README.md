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

## Uso de EmailJS
Para enviar los datos del formulario de contacto al correo electrónico se utiliza [EmailJS](https://www.emailjs.com/).
### Pasos

1. Agregar en el **index.html** el script:

            <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>

2. En [EmailJS](https://www.emailjs.com/), crear la plantilla con los nombres del id de cada campo. En este caso se tiene los campos con nombre de id:

            id="name"
            id="email"
            id="subject"
            id="message"

3. Agregar en el **index.html** el script de la librería [Sweetalert2](https://sweetalert2.github.io/), para crear los mensajes de confirmación:

            <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

4. En el formulario agregarle un id:

            id="frmEmail"
5. Crear un archivo `configEmailJS.js` con la configuración, donde se agregan los datos que se obtienen al abrir la cuenta en [EmailJS](https://www.emailjs.com/), en 

            data/configEmailJS.js

*Datos:*
            const serviceId = 'service_XXXXX'; // Sustituye con el service ID de EmailJS
            const templateId = 'template_XXXXX'; // Sustituye con el template ID de EmailJS
            const apikey = 'XXXXXX'; // Sustituye con el API key de EmailJS

6. Agregar al index.html el script:

            <script src="./data/configEmailJS.js"></script>

## Estructura del proyecto:

      desafio-portafolio-v2/
      ├── assets
      │   ├── icons
      │   │   └── hobbies
      │   |   └── skills
      │   |── image
      │   |     └── experiencia
      |   └── logos  
      |── data
      │   └── configEmailJS.js
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
