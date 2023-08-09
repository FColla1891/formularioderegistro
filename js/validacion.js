function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

const checkbox = document.getElementById("terminos");
const regBtn = document.getElementById("regBtn");
const errorMensaje = document.getElementById("errorMensaje");
























































function compararContraseña(){
    let contraseña = document.getElementById('password1').value;
    let nuevaContraseña = document.getElementById('password2').value;
    return contraseña === nuevaContraseña;
}