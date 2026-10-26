//funcion de mostrar y ocultar divs
function mostrar(id) {
    document.getElementById('div1').className = 'oculto';
    document.getElementById('div2').className = 'oculto';
    document.getElementById('div3').className = 'oculto';
    document.getElementById(id).className = 'visible';
}
//variable para guardar el usuario y contraseña
let usuarioGuardado = "";
let contraGuardada = "";
//funcion para registrar usuario y contraseña
function registrar() {
    let usuarioInput = document.getElementById("USUARIO").value;
    let contraInput = document.getElementById("contra").value;
    let confirmaContraInput = document.getElementById("confirmacontra").value;

    if (usuarioInput === "" || contraInput === "" || confirmaContraInput === "") {
        alert("Uno o dos mas campos estan vacios");

    } else if (contraInput !== confirmaContraInput) {
        alert("Las contraseñas no coinciden");

    } else {
        alert("Usuario registrado correctamente");
        usuarioGuardado = usuarioInput;
        contraGuardada = contraInput;


    }

}
//funcion para ingresar a la pagina
function InicioSesion() {
    let UsuarioInicio = document.getElementById('UsuarioInicio').value;
    let contraInicio = document.getElementById('contraInicio').value;

    if (UsuarioInicio !== usuarioGuardado || contraInicio !== contraGuardada) {
        alert("Contraseña o Usuario incorrecto");
    } else if (UsuarioInicio === "" || contraInicio === "") {
        alert("Uno o mas campos vacios")
    }
    else {
        alert("Datos correctos ingresando.....");
    }
}


const elemento = document.getElementById('mielemento');
const contenedorOriginal = document.getElementById('contenedor-original');

const mediaQuery = window.matchMedia('(max-width: 490px)');

function manejarResponsive(e) {
    if (e.matches) {
        document.body.appendChild(elemento);
        elemento.classList.add('fuera-del-contenedor');
    } else {
        contenedorOriginal.appendChild(elemento);
        elemento.classList.remove('fuera-del-contenedor');
    }
}

mediaQuery.addEventListener('change', manejarResponsive);

manejarResponsive(mediaQuery);