$(document).ready(function(){

    /*
    .remove()
    .remplaceWith() Cambia el contenido que hay entre los parentesis
    */

    /*var boton=document.getElementById('id_banner');
    boton.addEventListener("click",cerrar_banner,false);*/

    document.getElementById('id_boton').addEventListener("click",cerrar_banner,false);
});

function cerrar_banner(){
    $('#id_banner').remove();
    
    //$('#id_boton').remplaceWith('Adios');
}