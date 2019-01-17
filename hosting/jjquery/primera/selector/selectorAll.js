$(document).ready(function(){

    var botones=document.querySelectorAll("input");
    
    console.log(botones.length);  
    for (let index = 0; index < botones.length; index++) {
        botones[index].addEventListener("click",aumentar,false);
        botones[index].addEventListener("click",disminulle,false);
        
    }
});

function aumentar(e){
    var sitio;
    if (e.target==aumento1) {
        sitio="#texto1";
    }else if (e.target==aumento2) {
        sitio="#texto2";
    }else if (e.target==aumento3) {
        sitio="#texto3";
    }
    var porDefecto=$(sitio).css("font-size");
    
    porDefecto=parseInt(porDefecto);

    $(sitio).css("font-size",porDefecto*1.1);
    
}
function disminulle(e){
    
    var sitio;
    if (e.target==disminulle1) {      
        sitio="#texto1";
    }else if (e.target==disminulle2) {
        sitio="#texto2";
    }else if (e.target==disminulle3) {
        sitio="#texto3";
    }
    var porDefecto=$(sitio).css("font-size");

    porDefecto=parseInt(porDefecto);

    console.log(porDefecto);
    $(sitio).css("font-size",porDefecto/1.1);
}