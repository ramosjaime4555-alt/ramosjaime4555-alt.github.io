function mostrar(id) {
   document.getElementById('div1').className = 'oculto';
   document.getElementById('div2').className = 'oculto';
   document.getElementById(id).className = 'visible';
}
let usuarioGuardado = "";
let contraGuardada = "";
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
       
    }

}