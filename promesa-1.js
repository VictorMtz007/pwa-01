//FIC: enviar  la consola "hola mundo".
console.log('hola mundo');

function fcnSumarUno( numero, fcnResultadoCallBack ){

    setTimeout(function(){
        //return numero + 1;
        fcnResultadoCallBack( numero + 1 );
    }, 800);
}

//FIC: llamar la funcion.
fcnSumarUno (5, function(nuevoValor1){
    //FIC: desplegar el resultado en consola.
    //console.log("Resultado:", nuevoValor1);
    fcnSumarUno(nuevoValor1, function(nuevoValor2){;
        //console.log("Resultado:", nuevoValor2);
        fcnSumarUno(nuevoValor2, function(nuevoValor3){
            console.log("Resultado:", nuevoValor3);
        });
    });
});