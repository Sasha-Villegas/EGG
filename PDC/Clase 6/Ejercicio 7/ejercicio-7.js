var botonesSubir = document.querySelectorAll (".subir") 
var botonesBajar = document.querySelectorAll (".bajar")     

    botonesBajar.forEach(function(boton){
        boton.addEventListener ("click",function(){
            var elementoLi = this.parentNode;
            var elementoAnterior = elementoLi.previousElementSibling;
            if (elementoAnterior) {
                elementoLi.parentNode.insertBefore (elementoLi,elementoAnterior);
            }
        });
    });

    botonesSubir.forEach(function(boton){
        boton.addEventListener ("click",function(){
            var elementoLi = this.parentNode;
            var elementoSiguiente = elementoLi.nextElementSibling;
            if (elementoSiguiente) {
                elementoLi.parentNode.insertBefore (elementoSiguiente,elementoLi);
            }
        });
    });