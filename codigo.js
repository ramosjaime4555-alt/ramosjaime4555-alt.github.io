

//decaracion de variables para el responsive
const elemento = document.getElementById('mielemento');
const contenedorOriginal = document.getElementById('contenedor-original');
//declaracion de media query para detectar el tamaño de la pantalla
const mediaQuery = window.matchMedia('(max-width: 490px)');
//funcion para manejar el responsive
function manejarResponsive(e) {
    if (e.matches) {
        document.body.appendChild(elemento);
        elemento.classList.add('fuera-del-contenedor');
    } else {
        contenedorOriginal.appendChild(elemento);
        elemento.classList.remove('fuera-del-contenedor');
    }
}
//agregar un event listener para detectar cambios en el tamaño de la pantalla
mediaQuery.addEventListener('change', manejarResponsive);

manejarResponsive(mediaQuery);