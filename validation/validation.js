import { mensajes } from "./customErrors.js";

const tema = document.querySelector('.menu__list__item-tema');
const camposDeFormulario = document.querySelectorAll("[required]");

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu__toggle');
    const menuNav = document.querySelector('.menu__nav'); 
    const menuList = document.querySelector('.menu__list');

    menuToggle.addEventListener('click', function () {
        menuNav.style.display = menuNav.style.display === 'block' ? 'none' : 'block';
    });

    function toggleMenuDisplay() {
        if (window.matchMedia("(max-width: 1339px)").matches) {
            menuNav.style.display = 'none';
            menuToggle.style.display = 'flex';
        } else {
            menuNav.style.display = 'flex';
            menuToggle.style.display = 'none';
        }
    }
    toggleMenuDisplay(); 
    window.addEventListener('resize', toggleMenuDisplay);
});

function toggleMenu() {
    var menuNav = document.querySelector(".menu__nav");
    if (menuNav.style.display === "block") {
        menuNav.style.display = "none";
    } else {
        menuNav.style.display = "block";
    }
}

function alternarPosiciones() {
    const boxes = document.querySelectorAll('.experience__box');

    boxes.forEach((box, index) => {
        if (window.matchMedia("(max-width: 375px)").matches) {
            box.style.flexDirection = 'column'; 
            box.querySelector('.experience__img').style.marginRight = '0'; 
            box.querySelector('.experience__info-container').style.textAlign = 'center'; 
        } else {
            if (index > 0 && index % 2 !== 0) {
                box.style.flexDirection = 'row-reverse';
                box.querySelector('.experience__img').style.marginRight = '0';
                box.querySelector('.experience__info-container').style.textAlign = 'right';
            }
        }
    });
}

window.addEventListener('load', alternarPosiciones);
window.addEventListener('resize', alternarPosiciones);

document.addEventListener('DOMContentLoaded', () => {
    alternarPosiciones();
});

tema.addEventListener('click', e  => {
    tema.classList.toggle('active');
    document.body.classList.toggle('active');
});

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

function verificarCampo(campo) {
    let mensaje = "";
    campo.setCustomValidity("");

    if (campo.name === "name") {
        if (!campo.validity.valid) {
            mensaje = mensajes.name[campo.validity.valueMissing ? "valueMissing" : "tooShort"];
        }
    } else if (campo.name === "email") {
        if (!campo.validity.valid) {
            mensaje = mensajes.email[campo.validity.valueMissing ? "valueMissing" : "typeMismatch"];
        }
    } else if (campo.name === "subject" || campo.name === "message") {
        if (!campo.validity.valid) {
            mensaje = mensajes[campo.name][campo.validity.valueMissing ? "valueMissing" : "tooShort"];
        }
    }

    const mensajeError = campo.parentNode.querySelector(".mensaje-error");
    if (mensajeError) {
        mensajeError.textContent = mensaje;
    }

    if (mensaje) {
        campo.setCustomValidity(mensaje);
    } else {
        campo.setCustomValidity("");
    }
}

camposDeFormulario.forEach(campo => {
    campo.addEventListener("blur", (e) => verificarCampo(e.target));
    campo.addEventListener("invalid", (e) => {
        e.preventDefault();
        verificarCampo(e.target);
    });
});
