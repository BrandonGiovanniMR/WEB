var correo = document.getElementById('email');
var password = document.getElementById('password');

error.style.color = 'red';

function enviarformulario(){
    console.log('Enviar formulario...');
    var mensajeError=[];

    if((correo.value == null || correo.value == '')||(password.value == null || password.value == '')){
        mensajeError.push('Aun no llena los campos sugeridos');
    }else if(correo.value == "giomendezrdz1@gmail.com" &&  password.value == "Brandon19" ){
        location.href="formularios/usuario.html"
    }else{
        mensajeError.push('El correo o la contraeña son incorrectos');
    }

    error.innerHTML = mensajeError.join(' , ');
    return false;
    
}