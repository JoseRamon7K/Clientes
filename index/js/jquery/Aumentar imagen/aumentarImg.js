$(function(){
    $("#imG").hide();
    $("td img").bind("click",muestraImg);
    $(document).bind("click keypress",ocultar);
});

function muestraImg(e) {  
    console.log($(this).attr("src"));
    e.stopPropagation();
    var imagen=document.getElementById("img_grande");
    imagen.setAttribute("src",$(this).attr("src"));    
    imagen.setAttribute("width","100%");
    $("#imG").fadeIn(500);
}
function ocultar() {  
    $("#imG").fadeOut(500);
}

