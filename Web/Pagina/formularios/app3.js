var titulo = document.getElementById('Titulo');
var genero = document.getElementById('Genero');
var file = document.getElementById('File');
//var descripcion = document.getElementById('Descripcion');
var error = document.getElementById('error');

var validaArc=/\.(mp4)$/;

error.style.color = 'red';

function enviarformularios(){
    console.log('Enviar formulario...');
    var mensajeError=[];

    

    if(titulo.value == null || titulo.value == ''){
        mensajeError.push('Ingresa el titulo...');
    }

    if(genero.value == null || genero.value == ''){
        mensajeError.push('Ingresa el genero...');
    }

    if(file.value == null || file.value == ''){
        mensajeError.push('Ingresa el archivo...');
    }else{
        if(!(validaArc.test(file.value))){
            mensajeError.push("El archivo debe ser .mp3 o .mp4");
        }
    }
    /*
    if(descripcion.value == null || descripcion.value == ''){
        mensajeError.push('Ingresa el descripcion...');
    }
    */
   

    error.innerHTML = mensajeError.join(' , ')
    return false;


}