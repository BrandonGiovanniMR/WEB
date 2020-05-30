var nombre = document.getElementById('Nombre_Completo');
var error = document.getElementById('error');
var email = document.getElementById('Correo_Electronico');
var password = document.getElementById('Password');
var confirma = document.getElementById('Confirma');
var file = document.getElementById('File');
var sexo = document.getElementById('Sexo');
var telefono = document.getElementById('Telefono');
var comentario = document.getElementById('Comentario');

var validaCadena=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
var validaTel=/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
var validaCorreo=/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|es)+$/;
var validaImg=/\.(jpg|png|gif)$/;
error.style.color = 'red';

function enviarformularios(){
    console.log('Enviar formulario...');
    var mensajeError=[];

    if(nombre.value == null || nombre.value == ''){
        mensajeError.push('Ingresa tu nombre...');
    }
    
    if (password.value == null || password.value =='' || confirma.value == null || confirma.value == ''){
        mensajeError.push('Ingresa y/o confirme contraseña...');
    }else{
        if(password.value != confirma.value){
            mensajeError.push('Las constraseñas no coinciden...');
        }else{
            if (!(validaCadena.test(password.value)) || (password == confirma)) { 
                mensajeError.push('Tu contraseña debe tener 8 caracteres con numeros y/o alguna mayuscula...');
            } 
        }     
    }
    
    if(file.value == null || file.value == ''){
        mensajeError.push('Ingresa tu foto...');
    }else{
        if(!(validaImg.test(file.value))){
            mensajeError.push("La imagen debe ser .png o.jpg");
        }
    }

    if(telefono.value == null || telefono.value == ''){
        mensajeError.push('Ingresa tu Telefono...');
    }else{
        if (!(validaTel.test(telefono.value))) {
            mensajeError.push('El formato del Telefono no es correcto...');
        }
    }

    if(email.value == null || email.value == ''){
        mensajeError.push('Ingresa tu Correo electronico...');
    }else{
        if (!(validaCorreo.test(email.value))) {
            mensajeError.push('El formato del correo no es correcto...');
        }
    }
    
    if (sexo.value==0  || sexo.value=="" ) {
        mensajeError.push('Selecciona tu sexo...');
    } 

    if(comentario.value == null || comentario.value == ''){
        mensajeError.push('Ingresa tu comentario...');
    }
      
    

    if(error.innerHTML = mensajeError.join(' , ')){
        return false;
        
    }else  {
        alert('Te has registrado con exito! Vuelve al inicio paraa iniciar sesion');
        location.href="index.html";
    }
    
    
    
    
}