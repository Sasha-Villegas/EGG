// Obtener los elementos de los enlaces de la barra de navegación
const inicioLink = document.getElementById('menu');
const pagina1Link = document.getElementById('servicio');
const pagina2Link = document.getElementById('contacto');

// Funciones de manejo de eventos para los enlaces
function irAInicio(event) {
  event.preventDefault();
  console.log('Ir a Inicio');
  // Aquí puedes agregar el código para redirigir o mostrar el contenido de la página de inicio
}

function irAPagina1(event) {
  event.preventDefault();
  console.log('Ir a servicio');
  // Aquí puedes agregar el código para redirigir o mostrar el contenido de la página 1
}

function irAPagina2(event) {
  event.preventDefault();
  console.log('Ir a contacto');
  // Aquí puedes agregar el código para redirigir o mostrar el contenido de la página 2
}

// Asignar los manejadores de eventos a los enlaces
inicioLink.addEventListener('click', irAInicio);
pagina1Link.addEventListener('click', irAPagina1);
pagina2Link.addEventListener('click', irAPagina2);