

function muestraInforamacionRaton(e) {
    var eve=e||window.event;

    var nav_coordenadasX=eve.clientX;
    var nav_coordenadasY=eve.clientY;
    var nav=document.getElementById("nav_pos");
    nav.textContent="["+[nav_coordenadasX,nav_coordenadasY]+"]";

    var pag_coordenadasX=eve.screenX;
    var pag_coordenadasY=eve.screenY;
    var pag=document.getElementById("pag_pos");
    pag.textContent="["+[pag_coordenadasX,pag_coordenadasY]+"]";


    var rat=document.getElementById("raton");
    rat.style="background-color:#FFFFFF";
    
    var tec=document.getElementById("teclado");
    tec.style="background-color:#FFFFFF";
}


function muestraInforamacionTeclado(e) {
    var eve=e||window.event;
    
    var caracter=String.fromCharCode(eve.charCode);
    var car=document.getElementById("car_inf");
    

    var codigo=eve.keyCode;
    if (codigo==0) {
        codigo=eve.charCode;
    }else{        
        caracter="Especial";
    }
    car.textContent="["+[caracter]+"]";
    var cod=document.getElementById("cod_inf");
    cod.textContent="["+[codigo]+"]";
    var tec=document.getElementById("teclado");
    tec.style="background-color:#CCE6FF";

}

document.onkeypress=muestraInforamacionTeclado;
document.onmousemove=muestraInforamacionRaton;
document.onclick=click;

function click(e) {
    cambiarColor();

    var eve=e||window.event;

    var ancho=screen.width;
    var alto=screen.height;

    var coordenadasX=eve.clientX;
    var coordenadasY=eve.clientY;

    
    var pos=document.getElementById("pos_inf");
    if ((ancho/2)>coordenadasX) {
        if ((alto/2)>coordenadasY) {        
            pos.textContent="[1]";
        }else{
            pos.textContent="[3]";
        }
    }else{
        if ((alto/2)>coordenadasY) {        
            pos.textContent="[2]";
        }else{
            pos.textContent="[4]";
        }
    }
}

function cambiarColor(e) {    
    var rat=document.getElementById("raton");
    rat.style="background-color:#FFFFCC";
}
