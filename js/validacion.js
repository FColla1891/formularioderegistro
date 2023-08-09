function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

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

console.log(checkPassword());