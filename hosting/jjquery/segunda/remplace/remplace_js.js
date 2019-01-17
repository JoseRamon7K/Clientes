$(document).ready(function(){

    /*
    .remove()
    .remplaceWith() Cambia el contenido que hay entre los parentesis
    */

    /*var boton=document.getElementById('id_banner');
    boton.addEventListener("click",cerrar_banner,false);*/

    /*
    var img1=document.getElementById('img1');
    var img2=document.getElementById('img2');
    var img3=document.getElementById('img3');
    var img4=document.getElementById('img4');
    var img5=document.getElementById('img5');
    img1.addEventListener("click",cambiarCarro1,false);    
    img2.addEventListener("click",cambiarCarro2,false);    
    img3.addEventListener("click",cambiarCarro3,false);
    img4.addEventListener("click",cambiarCarro4,false);
    img5.addEventListener("click",cambiarCarro5,false);
    */

    var imagenes=document.querySelectorAll("#tabla img");
    for(var index=0; index<imagenes.length;index++){
        imagenes[index].addEventListener("click",cambiarCarro,false);
    }

});

function cambiarCarro(num){
    var img;
    if(num.target.id=='img1'){
        img=$('#img1');
    }else if(num.target.id=='img2'){
        img=$('#img2');
    }else if(num.target.id=='img3'){
        img=$('#img3');
    }else if(num.target.id=='img4'){
        img=$('#img4');
    }else if(num.target.id=='img5'){
        img=$('#img5');
    }     
    cambio(img);  
}
/*
function cambiarCarro1(){
    img=$('#img1');
    cambio(img);    
}
function cambiarCarro2(){
    img=$('#img2');
    cambio(img);
}
function cambiarCarro3(){

    img=$('#img3');
    cambio(img);
}
function cambiarCarro4(){
    img=$('#img4');
    cambio(img);
}
function cambiarCarro5(){
    img=$('#img5');
    cambio(img);
}
*/
function cambio(img){
    img.replaceWith( '<img src="img/img6.png" alt="img3" width="200px" height="200px" id="carrito"></img>');
}