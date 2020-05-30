var titulo = document.getElementById('Titulo');
var file = document.getElementById('File');
var error = document.getElementById('error');

var validaArc=/\.(mp4)$/;

error.style.color = 'red';

function enviarformularios(){
    console.log('Enviar formulario...');
    var mensajeError=[];

    

    if(titulo.value == null || titulo.value == ''){
        mensajeError.push('Ingresa el titulo...');
    }

    if(file.value == null || file.value == ''){
        mensajeError.push('Ingresa el archivo...');
    }else{
        if(!(validaArc.test(file.value))){
            mensajeError.push("El archivo debe ser .mp4");
        }
    }
    
    error.innerHTML = mensajeError.join(' , ')
    return false;


}