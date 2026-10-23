//funcion de mostrar y ocultar divs
function mostrar(id) {
    document.getElementById('div1').className = 'oculto';
    document.getElementById('div2').className = 'oculto';
    document.getElementById('div3').className = 'oculto';
    document.getElementById(id).className = 'visible';
}

// Variables globales para guardar el usuario y contraseña en memoria
let usuarioGuardado = "";
let contraGuardada = "";

// Función para registrar usuario y contraseña
function registrar() {
    let usuarioInput = document.getElementById("USUARIO").value;
    let contraInput = document.getElementById("contra").value;
    let confirmaContraInput = document.getElementById("confirmacontra").value;

    if (usuarioInput === "" || contraInput === "" || confirmaContraInput === "") {
        alert("Uno o más campos están vacíos");
        return;
    }

    if (contraInput !== confirmaContraInput) {
        alert("Las contraseñas no coinciden");
        return;
    }

    // Guardamos los datos en las variables globales
    usuarioGuardado = usuarioInput;
    contraGuardada = contraInput;

    alert("Usuario registrado correctamente");
}

// Función para iniciar sesión
function InicioSesion() {
    let UsuarioInicio = document.getElementById('UsuarioInicio').value;
    let contraInicio = document.getElementById('contraUsuario').value;

    // Validamos por seguridad si ya se registró un usuario antes
    if (usuarioGuardado === "") {
        alert("Primero debes registrarte.");
        return;
    }

    if (UsuarioInicio !== usuarioGuardado) {
        alert("Usuario incorrecto");
    } else if (contraInicio !== contraGuardada) {
        alert("Contraseña incorrecta");
    } else {
        alert("Datos correctos, ingresando.....");
        // Aquí puedes poner el código para ocultar el div de login y mostrar tu contenido
    }
}