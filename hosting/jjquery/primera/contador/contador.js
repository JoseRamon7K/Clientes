$(document).ready(function(){

    var contador=document.getElementById("cont");

    contador.onclick=function () {
        var x=contador.textContent;
        x=parseInt(x)+1;
        contador.textContent=x;
    }
});