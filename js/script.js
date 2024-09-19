/* SELECCIONAR CONTENIDO DEL HTML con querySelector querySelectorAll getElementById */
/* querySelector. Este método devuelve el primer elemento que coincide con el selector especificado. Si no encuentra ningún elemento que coincida, devuelve null.*/

const heading = document.querySelector('.header__texto h2') //Es importante poner document porque hace referencia a todo el documento del HTML
/* heading.textContent = 'Nuevo Heading'; */


/* querySelectorAll. Este método devuelve todos los elementos que coinciden con el selector especificado, en forma de una NodeList */

const enlaces = document.querySelectorAll('.navegacion a')
console.log(enlaces);

/*enlaces[0].textContent = 'Nuevo Texto para Enlace';
enlace[0].href = 'http....' para cambiar la dirección del enlance*/

/* getElementById */

const heading2 = document.getElementById('heading');
console.log(heading2);


/* GENERAR UN NUEVO ENLACE CON createElement*/

const nuevoEnlace = document.createElement('A'); //Se recomienda poner la etiqueta en mayuscula

console.log(nuevoEnlace);

//Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';

//Agregar el texto
nuevoEnlace.textContent = 'Nuevo Enlace';

//Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

//Agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);


/*********** EVENTOS JAVA **************/

/* Método addEventListener */

console.log(1);

window.addEventListener('load', function(){ //load espera a que el JS y los archivos que dependen del HTML esten listos
    console.log(2);

}); //window hace referencia a todo el js disponible, a todas las funciones y al html. document sólo hace referencia al html

window.onload = function(){
    console.log(3);
    
}

document.addEventListener('DOMContentLoaded', function () { // En comparación con load, DOMContentLoaded espera por el HTML, pero no espera a que se descargue el css o imagenes
    console.log(4);
    
});

/* console.log(5);

window.onscroll = function () {
    console.log('scrolling...');
    
} */



/* Seleccionar elementos y asociarles un evento 

const btnEnviar = document.querySelector('.boton--primario');

btnEnviar.addEventListener('click', function (event) {
    console.log(event);
    event.preventDefault(); //impide que una pagina se recargue. Recordar quitarla si una vex presionado el botón se debe redirigir a otra pagina
    console.log('enviando formulario');
    
    
})*/



/* Eventos de los input y textarea */
const datos ={
    nombre : '',
    email:'',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

/* nombre.addEventListener('input', function(e){
    console.log(e);

}) UNA FORMA DE REALIZARLO, PERO SI SE QUIERE AGREGAR MÁS EVENTOS A DIFERENTES INPUTS SE RECOMIENDA ALMACENARLOS EN FUNCIONES*/

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

/* Evento de submit */
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    //Validar el formulario
const { nombe, email, mensaje }= datos;

if (nombre === '' || email === '' || mensaje === ''){
    mostrarError('Todos los campos son obligatorios');

    return; //Corta la ejecución del código
}
    //Enviar el formulario
    envioCorrecto('Se ha enviado el formulario');
});


function leerTexto(e){
    datos[e.target.id] = e.target.value; //para hacer que lo que se introduzca en los inputs se guarde en el objeto
    //console.log(datos);
}

//Muestra un error en pantalla... creación de un texto de error
function mostrarError(mensaje){
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');

    formulario.appendChild(error);

    //Desaparezca despues de 5 segundos
    setTimeout(()=>{
        error.remove(); //para hacer que desaparezca la alerta
    }, 5000)
}

//Muestra una alerta de que se envió correctamente

function envioCorrecto(msj){
    const envio = document.createElement('P');
    envio.textContent = msj;
    envio.classList.add('envio');

    formulario.appendChild(envio);

    //Desaparezca despues de 5 segundos
    setTimeout(()=>{
        envio.remove(); //para hacer que desaparezca la alerta
    }, 5000)
}
