$(document).ready(function(){

    $(".item").css("background-color","#cecece");
    $("#cart_items").css("border","4px solid black");    
    $("img").css("border","1px solid blue");    
    $(".item").children("label").css("text-decoration","underline");  
    
    $("#cart_container button").css("color","red");   
    $(".item").children("label + label").css("color","white");   
    $(":contains('€') , input").css("color","green");
    $("div:empty").css("background-color","yellow");

    var imagenes=document.querySelectorAll("img");
    for (let i = 0; i < imagenes.length; i++) {
        //console.log(imagenes[i].src);
        var str=imagenes[i].src.substr(imagenes[i].src.length-13,8);        
        if (str=="camiseta") {
            //console.log(imagenes[i].alt);            
            $('img[alt="'+imagenes[i].alt+'"]').css("border-color","green");  
        }        
    }
    
    var items=document.querySelectorAll(".item");    
    $('#'+items[0].id).css("background-color","red"); 
    $('#'+items[items.length-1].id).css("background-color","red"); 
});