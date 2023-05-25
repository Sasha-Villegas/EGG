var personas = [ 
    {Nombre: "Pepito",Edad: 25, Ciudad: "Buenos Aires"},
    {Nombre: "Josesito",Edad: 31, Ciudad: "Paraná"},
    {Nombre: "Luisito",Edad: 28, Ciudad: "Cordoba"}
];

function presentacion (personas){
    var mensajes = [];
    for (var i = 0; i < personas.length; i++) {
        var mensaje = "Mi nombre es " + personas[i].Nombre + ", tengo " + personas[i].Edad + " años y vivo en " + personas[i].Ciudad + ".";
        mensajes.push(mensaje);
      } return mensajes;
}

const texto = presentacion (personas)
texto.forEach (function (mensaje){
    console.log (mensaje);
});