var nombre = document.getElementById('nombre');
var asunto = document.getElementById('asunto');
var mensaje = document.getElementById('mensajes');
var email = document.getElementById('email');
var formulario = document.getElementById('formulario');
const botonGuardar = document.getElementById('enviar');
var url = 'https://formsubmit.co/mayerlinbastidas92@gmail.com';

botonGuardar.addEventListener('click', () => {

	if (nombre.value.length === 0 || 
		asunto.value.length === 0 || 
		mensaje.value.length === 0 || 
		email.value.length === 0) {
		alert('¡Algún campo está vacío!');
		formulario.action = window.location.roload();
		formulario.submit();
	}else{
		formulario.action = url;
		formulario.submit();
	}
	 
});