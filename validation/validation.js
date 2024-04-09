document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu__toggle');
    const menuNav = document.querySelector('.menu__nav'); // Seleccionar el contenedor del menú
    const menuList = document.querySelector('.menu__list');

    // Función para abrir/cerrar el menú al hacer clic en el icono de menú
    menuToggle.addEventListener('click', function() {
        // Toggle para mostrar/ocultar el menú completo al hacer clic en el icono de menú
        menuNav.style.display = menuNav.style.display === 'block' ? 'none' : 'block';
    });

    // Función para gestionar la visualización del menú y el icono basado en el ancho de la pantalla
    function toggleMenuDisplay() {
        if (window.matchMedia("(max-width: 900px)").matches) {
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
    var menuNav = document.getElementById("menuNav");
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
            // Comprobamos si el índice es par o impar para decidir la posición de la imagen
            if (index % 2 === 0) {
                // Índice par: imagen a la izquierda
                box.style.flexDirection = 'row-reverse'; // Invierte la disposición fila
                box.querySelector('.experience__img').style.marginRight = '0'; // Elimina el margen derecho
                box.querySelector('.experience__info-container').style.textAlign = 'right'; // Alinea el texto a la derecha
            } else {
                // Índice impar: imagen a la derecha (manteniendo la disposición predeterminada)
                box.style.flexDirection = 'row'; // Restaura la disposición fila
                box.querySelector('.experience__img').style.marginRight = '24px'; // Restaura el margen derecho
                box.querySelector('.experience__info-container').style.textAlign = 'left'; // Alinea el texto a la izquierda
            }
        });
    }

    // Llamamos a la función cuando el DOM esté completamente cargado
    document.addEventListener('DOMContentLoaded', () => {
        alternarPosiciones();
    });