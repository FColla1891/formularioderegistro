//Referencia al elémento Checkbox de términos y condiciones
const checkbox = document.getElementById("terminos");
//Referencia al botón de registro
const regBtn = document.getElementById("regBtn");
//Referencia a donde se mostrará el mensaje de error de Checkbox
const errorMensajeCheckbox = document.getElementById("errorMensajeCheckbox");
//Mensaje de error del Checkbox
const mensajeCheckbox = "Debes aceptar los términos y condiciones.";

const errorMensajeContraseña = document.getElementById("errorMensajeContraseña");


function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

function compararContraseña() {
    const contraseña = document.getElementById('password1').value;
    const confirmacionContraseña = document.getElementById('password2').value;
    
    if (contraseña === "" || confirmacionContraseña === "") {
        errorMensajeContraseña.innerHTML = "Recuerda llenar los campos de contraseña."
    }
    return contraseña === confirmacionContraseña;
  }

document.addEventListener("DOMContentLoaded", function () {  
    regBtn.addEventListener("click", function () {
      if (!checkbox.checked) {
        errorMensajeCheckbox.innerHTML = mensajeCheckbox;
      }
      if (!compararContraseña()) {
        errorMensajeContraseña.innerHTML = "Las contraseñas no coinciden.";
      }
    });
  });

