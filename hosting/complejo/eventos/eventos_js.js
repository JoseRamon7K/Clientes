function otro() {  
    alert("Click");
}
function dlclick() {  
    document.write("Doble Click<br>");
    document.write("<a href='eventos_js.html'>Volver</a>");
}
function mousedown() {  
    var section=document.getElementById("principal");
    section.style="background-color: rgb(0, 117, 250);";
}
function mousemove() {  
    var titulo=document.getElementById("titulo");
    titulo.style="color: rgb(255, 0, 0);";
}
function mouseoute() {  
    var tabla=document.getElementById("tabla");
    tabla.style="border: 10px black solid;";
}