//Referencia al elémento Checkbox de términos y condiciones
const checkbox = document.getElementById("terminos");
//Referencia al botón de registro
const regBtn = document.getElementById("regBtn");
//Referencia a donde se mostrará el mensaje de error de Checkbox
const errorMensajeCheckbox = document.getElementById("errorMensajeCheckbox");
//Mensaje de error del Checkbox
const mensajeCheckbox = "Debes aceptar los términos y condiciones.";

//Refencia a donde se mostrará el mensaje de error de Contraseña
const errorMensajeContraseña = document.getElementById("errorMensajeContraseña");

//Función encargada de mostrar mensaje de éxito al registrarse
function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

//Función encargada de mostrar mensaje de error al registrarse
function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

//Verifica y compara constraseñas retornando valor booleano
function compararContraseña() {
    let contraseña = document.getElementById('password1').value;
    let confirmacionContraseña = document.getElementById('password2').value;

    return contraseña === confirmacionContraseña;
  }

//Agrega funcionalidad al botón registrarse y verifica los requisitos
document.addEventListener("DOMContentLoaded", function () {  
    regBtn.addEventListener("click", function () {
      if (!checkbox.checked) {
        errorMensajeCheckbox.innerHTML = mensajeCheckbox;
        showAlertError();
      }
      if (!compararContraseña()) {
        errorMensajeContraseña.innerHTML = "Las contraseñas no coinciden.";
        showAlertError();
      }
      if (!checkCampos()){ //Si uno o mas campos no tienen contenido enviara la alerta de error.
        showAlertError();
      }
      if (!longitudContraseña()){
        errorMensajeContraseña.innerHTML = "La contraseña debe tener al menos 6 caracteres."
      }
      if (checkbox.checked && compararContraseña() && checkCampos() && longitudContraseña()){
        showAlertSuccess();
      }
    });
  });

//Función que verifica si los campos tienen contenido.
function checkCampos(){
  let nombre = document.getElementById('nombre').value;
  let apellido = document.getElementById('apellido').value;
  let email = document.getElementById('email').value;
  let pass1 = document.getElementById('password1').value;
  let pass2 = document.getElementById('password2').value;

  return (nombre!="" && apellido!="" && email!="" && pass1!="" && pass2!="");
} 

//Función que verifica la longitud de la contraseña.
function longitudContraseña(){
  let contraseña = document.getElementById('password1').value;
  let longitudContraseña = contraseña.length;
  return (longitudContraseña >= 6);
}