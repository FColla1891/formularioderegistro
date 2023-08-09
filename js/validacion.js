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

function compararContraseña(){
    let contraseña = document.getElementById('password1').value;
    let nuevacontraseña = document.getElementById('password2').value;

   return contraseña === nuevacontraseña;
}