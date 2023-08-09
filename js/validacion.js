function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}


function compararContraseña(){
    let contraseña = document.getElementById('password1').value;
    let nuevacontraseña = document.getElementById('password2').value;

    if (contraseña === nuevacontraseña){
        return true;
    }else 
        return false;
}