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
    
    imagen.setAttribute("width","30%");
    $("#imG").fadeIn(500);    
    console.log($('#img_grande').width());
}
function ocultar() {  
    $("#imG").fadeOut(500);
}

