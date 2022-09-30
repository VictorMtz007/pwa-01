//Enviar a la consola "Hola Mundo".
console.log('¡Hola Mundo!');

//Funcion que recibe un nuemero y le suma uno.
function fcnSumarUno( numero ){
    var promesa = new Promise(function(resolve, reject){

        if ( numero >= 7 ){
            reject('El numero ya es muy alto');
        }

        setTimeout(function(){
            resolve( numero + 1 );
            }, 800);

    });

  return promesa;
  
}

/*Llamado de la funcion y promesa
fcnSumarUno(5).then( function(nuevoNumero){
    console.log(nuevoNumero);
});*/

/*FIC: llamado de la funcion y promesa de forma recursiva de manera encadenada.
fcnSumarUno(5).then( nuevoNumero=>{
    console.log("Resultado:",nuevoNumero);
    return fcnSumarUno(nuevoNumero);
}).then( nuevoNumero=>{
    console.log("Resultado:",nuevoNumero);
    return fcnSumarUno(nuevoNumero);
}).then( nuevoNumero=>{
    console.log("Resultado:",nuevoNumero);
});*/

//LLamado de la funcion y promesa de forma recursiva y 
//optimizada y con validacion de error.
fcnSumarUno(5)
    .then( fcnSumarUno)
    .then( fcnSumarUno)
    .then( nuevoNumero=>{
    console.log("Resultado:",nuevoNumero);
})
.catch(error =>{
    console.log('Error en la Promesa', error);
});