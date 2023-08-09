function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}


const contraseña = document.getElementById('password1').value;
const nuevacontraseña = document.getElementById('password2').value;

const checkbox = document.getElementById("terminos");
const regBtn = document.getElementById("regBtn");
const errorMensaje = document.getElementById("errorMensaje");



function compararContraseña(){
    if (contraseña === nuevacontraseña){
        return showAlertSuccess();
    } else {
        return showAlertError();
    }
}

document.addEventListener("DOMContentLoaded", function () {  
    regBtn.addEventListener("click", function () {
      if (!checkbox.checked) {
        alert("Debes aceptar los términos y condiciones");
      }
      compararContraseña();
    });
  });

