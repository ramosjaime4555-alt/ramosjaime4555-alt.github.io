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
        return;
    } else if (contraInput !== confirmaContraInput) {
        alert("Las contraseñas no coinciden");
        return;
    } else{
        alert("Usuario registrado correctamente");
        usuarioGuardado = usuarioInput;
        contraGuardada = contraInput;
        return;
       
    }

}

function InicioSesion(){
    let UsuarioInicio = document.getElementById('UsuarioInicio').value;
    let contraInicio = document.getElementById('contraInicio').value;

    if (UsuarioInicio !== usuarioGuardado){
        alert("Usuario incorrecto");
    }else if (contraInicio !== contraGuardada){
        alert("Contraseña incorrecta");
    }else {
        alert("Datos correctos ingresando.....");
    }
}