 // Funcionalidad del botón de menú hamburguesa
 const navbarToggle = document.getElementById('navbarToggle');
 const navbarMenu = document.getElementById('navbarMenu');

 navbarToggle.addEventListener('click', () => {
   navbarMenu.classList.toggle('active');
 });