//Enviar a la consola "Hola Mundo".
var request = new XMLHttpRequest();
request.open('GET', 'https://reqres.in/api/users', true );
request.send(null);
request.onreadystatechange = function( state ){
    if (request.readyState === 4) {
        //La respuesta obtiene un string.
        var resp = request.response;
        //Transformamos la cadena en formato
        var respObj = JSON.parse(resp);
        //Enviamos el resultado a la consola.
        console.log( respObj );
        //Obtenemos solo la pagina actual
        console.log( respObj.page );
        //Obtenemos solo la data de los usuarios.
        console.log( respObj.data );
    }
}