function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}


document.addEventListener("DOMContentLoaded", function () {
    const checkbox = document.getElementById("terminos");
    const regBtn = document.getElementById("regBtn");
    const errorMensaje = document.getElementById("errorMensaje");
  
    regBtn.addEventListener("click", function () {
      if (!checkbox.checked) {
        alert("Debes aceptar los términos y condiciones");
      } else {
      }
    });
  });

  
const contraseña = document.getElementById('password1').value;
const nuevacontraseña = document.getElementById('password2').value;

function checkPassword(){
    return compararContraseña();
}

function compararContraseña(contraseña, nuevacontraseña){
    if (contraseña === nuevacontraseña){
        return showAlertSuccess;
    }else 
        return showAlertError;
}
