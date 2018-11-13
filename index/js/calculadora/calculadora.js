var salida=document.getElementById("id_text");

var variable="";
var numero;
var resultado=0;
var haciendo=false;
var modificar=true;
var nOperacion=true;
function operacion(op) {  
    numero=parseFloat(salida.value);
    if(nOperacion){        
        nOperacion=false;
        if (numero!=""){
            salida=document.getElementById("id_text");
            if (resultado==0) {
                resultado=numero
            }else{
                if (variable=="+") {
                    resultado=resultado+numero;
                }else if (variable=="-") {
                    resultado=resultado-numero;
                }else if (variable=="*") {
                    resultado=resultado*numero;
                }else if (variable=="/") {
                    if(numero==0){
                        resultado="ERROR";
                    }else{
                        resultado=resultado/numero;
                    }        
                }else{
                    resultado=numero;
                }
            }
            //salida.value=Math.round(resultado * 100) / 100;  
            salida.value=resultado;  
            console.log("Resultado Operacion "+resultado);      
            haciendo=true;
            modificar=true;  
            variable=op; 
        }   
    }
}

function igual() {
    salida=document.getElementById("id_text");
    if (haciendo==true) {
        operacion(variable);
    }
    console.log("Resultado Igual "+resultado);
    resultado=0;
    haciendo=false;
    modificar=true;
    variable="";
}

function insert(n) {  
    nOperacion=true;
    salida=document.getElementById("id_text");
    if (n=='.'){
        if (salida.value.indexOf('.')<0) {
            if (salida.value==0) {
                salida.value=0+n;                   
                modificar=false;
            }else{
                salida.value=salida.value+n;
            }
        }        
    }else{
        if (salida.value=='0'||modificar) {
            salida.value=n;
            modificar=false;
        }else{
            salida.value=salida.value+n;
        }
    }
}

function borrar() {
    salida=document.getElementById("id_text");
    variable="";
    numero="0";
    salida.value="0";
}

function borrarUltima() {
    salida=document.getElementById("id_text");
    var contenido="";
    for (let index = 0; index < salida.value.length-1; index++) {
        contenido+=salida.value[index];        
    }
    salida.value=contenido;
}
document.onkeypress=function(e){
    salida=document.getElementById("id_text");
    var esIE=(document.all);
    //var esNS=(document.layers);
    tecla=(esIE) ? event.keyCode : e.which;
    console.log(tecla);
    
    if(tecla==96||tecla==48){
        insert(0);
    }
    if(tecla==97||tecla==49){
        insert(1);
    }
    if(tecla==98||tecla==50){
        insert(2);
    }
    if(tecla==99||tecla==51){
        insert(3);
    }
    if(tecla==110||tecla==46){
        insert('.');
    }
    if(tecla==100||tecla==52){
        insert(4);
    }
    if(tecla==101||tecla==53){
        insert(5);
    }
    if(tecla==102||tecla==54){
        insert(6);
    }    
    if(tecla==103||tecla==55){
        insert(7);
    }
    if(tecla==104||tecla==56){
        insert(8);
    }
    if(tecla==105||tecla==57){
        insert(9);
    }    
    if(tecla==47){
        operacion('/');
    }
    if(tecla==42){
        operacion('*');
    }
    if(tecla==43){
        operacion('+');
    }
    if(tecla==45){
        operacion('-');
    }
    if(tecla==13||tecla==10){
        igual();
    }
    if(tecla==8){
        borrarUltima();
    }
    if(tecla==0){
        borrar();
    }

}
