var personas = [
    { nombre: "Juan", edad: 25, ciudad: "Madrid" },
    { nombre: "María", edad: 30, ciudad: "Barcelona" },
    { nombre: "Pedro", edad: 28, ciudad: "Valencia" }
  ];
  
  function crearMensajesDePresentacion(personas) {
    var mensajes = [];
  
    personas.forEach(function(persona) {
      var mensaje = "Mi nombre es " + persona.nombre + ", tengo " + persona.edad + " años y vivo en " + persona.ciudad + ".";
      mensajes.push(mensaje);
    });
  
    return mensajes;
  }
  
  const mensajesDePresentacion = crearMensajesDePresentacion(personas);
  
  mensajesDePresentacion.forEach((mensaje) => {
    console.log(mensaje);
  });