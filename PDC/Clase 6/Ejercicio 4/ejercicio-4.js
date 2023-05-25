function Script (string) {
    var palabras = string.split('');
    var resultados = '';
    for (var i = palabras.length - 1; i >= 0; i --){
        resultados += palabras [i] + '';
    }
    console.log(resultados.trim());
}

Script ('Anita lava la tina');