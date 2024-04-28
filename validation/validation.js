document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu__toggle');
    const menuNav = document.querySelector('.menu__nav'); // Seleccionar el contenedor del menú
    const menuList = document.querySelector('.menu__list');

    // Función para abrir/cerrar el menú al hacer clic en el icono de menú
    menuToggle.addEventListener('click', function () {
        // Toggle para mostrar/ocultar el menú completo al hacer clic en el icono de menú
        menuNav.style.display = menuNav.style.display === 'block' ? 'none' : 'block';
    });

    // Función para gestionar la visualización del menú y el icono basado en el ancho de la pantalla
    function toggleMenuDisplay() {
        if (window.matchMedia("(max-width: 1339px)").matches) {
            // Pantalla de 900px o menos: ocultar menú completo y mostrar solo el icono
            menuNav.style.display = 'none';
            menuToggle.style.display = 'flex'; // Mostrar icono de menú
        } else {
            // Pantalla mayor a 900px: mostrar menú completo y ocultar el icono
            menuNav.style.display = 'flex';
            menuToggle.style.display = 'none'; // Ocultar icono de menú
        }
    }

    // Ejecutar la función al cargar la página y cada vez que cambie el tamaño de la pantalla
    toggleMenuDisplay(); // Ejecutar al cargar la página

    window.addEventListener('resize', toggleMenuDisplay); // Ejecutar al cambiar el tamaño de la pantalla
});

function toggleMenu() {
    var menuNav = document.getElementById(".menu__nav");
    if (menuNav.style.display === "block") {
        menuNav.style.display = "none";
    } else {
        menuNav.style.display = "block";
    }
}

// Definimos una función para cambiar la posición de las imágenes
function alternarPosiciones() {
    const boxes = document.querySelectorAll('.experience__box');

    boxes.forEach((box, index) => {
        if (window.matchMedia("(max-width: 375px)").matches) {
            // Si la pantalla es menor o igual a 375px, colocar la imagen encima de la descripción
            box.style.flexDirection = 'column'; // Cambia la dirección del flexbox a columna
            box.querySelector('.experience__img').style.marginRight = '0'; // Elimina el margen derecho de la imagen
            box.querySelector('.experience__info-container').style.textAlign = 'center'; // Centra el contenido
        } else {
            // Restablecer la disposición original para pantallas más grandes
            if (index > 0 && index % 2 !== 0) {
                box.style.flexDirection = 'row-reverse';
                box.querySelector('.experience__img').style.marginRight = '0';
                box.querySelector('.experience__info-container').style.textAlign = 'right';
            }
        }
    });
}

// Llama a la función cuando la página se carga por primera vez y al cambiar el tamaño de la ventana
window.addEventListener('load', alternarPosiciones);
window.addEventListener('resize', alternarPosiciones);

// Llamamos a la función cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    alternarPosiciones();
});

// Definimos una función para configurar los estilos de los contenedores de experiencia
function configurarEstilosInfoContainers() {
    const infoContainers = document.querySelectorAll('.experience__info-container');

    infoContainers.forEach(container => {
        container.style.textAlign = 'left'; // Siempre alinear el contenido a la izquierda
        container.style.width = '368px'; // Ancho fijo para el contenedor
        container.style.height = '112px'; // Altura fija para el contenedor
    });
}

// Llamamos a la función cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    configurarEstilosInfoContainers();
});

const tema = document.querySelector('.menu__list__item-tema');

tema.addEventListener('click', e  => {
    tema.classList.toggle('active');
    document.body.classList.toggle('active');
})


// Guarda los datos en el almacenamiento local
// BLOQUEA Y NO DEJA GUARDAR LOS DATOS EN CONTACTOS.JSON
/*document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.querySelector("[data-formulario]");

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        const listaRespuestas = {
            name: formulario.elements["name"].value,
            email: formulario.elements["email"].value,
            subject: formulario.elements["subject"].value,
            message: formulario.elements["message"].value,
        };

        // Guarda los datos en el almacenamiento local
        localStorage.setItem("registro", JSON.stringify(listaRespuestas));

        // Redirige a otra página
        window.location.href = "./index.html";
    });
});*/

/*function guardarDatos() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("subject", subject);
    localStorage.setItem("message", message);
}

guardarDatos();*/

// *Cargar datos si están presentes en el almacenamiento local
/*document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.querySelector("[data-formulario]");

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = formulario.elements["name"].value;
        const email = formulario.elements["email"].value;
        const subject = formulario.elements["subject"].value;
        const message = formulario.elements["message"].value;

        // Guarda los datos en el almacenamiento local
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("subject", subject);
        localStorage.setItem("message", message);

        // Redirige a otra página
        window.location.href = "./index.html";
    });

    // Cargar datos si están presentes en el almacenamiento local
    const nameStored = localStorage.getItem("name");
    const emailStored = localStorage.getItem("email");
    const subjectStored = localStorage.getItem("subject");
    const messageStored = localStorage.getItem("message");

    if (nameStored) {
        formulario.elements["name"].value = nameStored;
    }
    if (emailStored) {
        formulario.elements["email"].value = emailStored;
    }
    if (subjectStored) {
        formulario.elements["subject"].value = subjectStored;
    }
    if (messageStored) {
        formulario.elements["message"].value = messageStored;
    }
});
*/

document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.querySelector("[data-formulario]");

    function guardarDatos() {
        const name = formulario.elements["name"].value;
        const email = formulario.elements["email"].value;
        const subject = formulario.elements["subject"].value;
        const message = formulario.elements["message"].value;

        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("subject", subject);
        localStorage.setItem("message", message);
    }

    formulario.addEventListener('input', guardarDatos);

    const nameStored = localStorage.getItem("name");
    const emailStored = localStorage.getItem("email");
    const subjectStored = localStorage.getItem("subject");
    const messageStored = localStorage.getItem("message");

    if (nameStored) {
        formulario.elements["name"].value = nameStored;
    }
    if (emailStored) {
        formulario.elements["email"].value = emailStored;
    }
    if (subjectStored) {
        formulario.elements["subject"].value = subjectStored;
    }
    if (messageStored) {
        formulario.elements["message"].value = messageStored;
    }
});