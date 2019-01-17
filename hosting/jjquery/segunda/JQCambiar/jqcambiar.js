$(document).ready(function(){

    var imagenes=document.querySelectorAll("img");
    for (let index = 0; index < imagenes.length; index++) {
        imagenes[index]=document.addEventListener("mouseover",activa,false);
        imagenes[index]=document.addEventListener("mouseout",desactiva,false);
    }
    
});

function activa(num){
    var img;
    var num;
    var tipo='';
    if(num.target.id=='img1'){
        img=$('#img1');
        num=1;
    }else if(num.target.id=='img2'){
        img=$('#img2');
        num=2;
    }else if(num.target.id=='img3'){
        img=$('#img3');
        num=3;
    }else if(num.target.id=='img4'){
        img=$('#img4');
        num=4;
    }else if(num.target.id=='img5'){
        img=$('#img5');
        num=5;
    }else if(num.target.id=='img6'){
        img=$('#img6');
        num=6;
    }else if(num.target.id=='img7'){
        img=$('#img7');
        num=7;
    }else if(num.target.id=='img8'){
        img=$('#img8');
        num=8;
    }else if(num.target.id=='img9'){
        img=$('#img9');
        num=9;
    }else if(num.target.id=='img10'){
        img=$('#img10');
        num=10;
    }else if(num.target.id=='img11'){
        img=$('#img11');
        num=11;
    }else if(num.target.id=='img12'){
        img=$('#img12');
        num=12;
    }else if(num.target.id=='img13'){
        img=$('#img13');
        num=13;
    }else if(num.target.id=='img14'){
        img=$('#img14');
        num=14;
    }else if(num.target.id=='img15'){
        img=$('#img15');
        num=15;
    }else if(num.target.id=='img16'){
        img=$('#img16');
        num=16;
    }else if(num.target.id=='img17'){
        img=$('#img17');
        num=17;
    }else if(num.target.id=='img18'){
        img=$('#img18');
        num=18;
    }else if(num.target.id=='img19'){
        img=$('#img19');
        num=19;
    }else if(num.target.id=='img20'){
        img=$('#img20');
        num=20;
    }     
    cambio(img,num,tipo);  
}

function desactiva(num){   
    var img;
    var num;
    var tipo='/bn';
    if(num.target.id=='img1'){
        img=$('#img1');
        num=1;
    }else if(num.target.id=='img2'){
        img=$('#img2');
        num=2;
    }else if(num.target.id=='img3'){
        img=$('#img3');
        num=3;
    }else if(num.target.id=='img4'){
        img=$('#img4');
        num=4;
    }else if(num.target.id=='img5'){
        img=$('#img5');
        num=5;
    }else if(num.target.id=='img6'){
        img=$('#img6');
        num=6;
    }else if(num.target.id=='img7'){
        img=$('#img7');
        num=7;
    }else if(num.target.id=='img8'){
        img=$('#img8');
        num=8;
    }else if(num.target.id=='img9'){
        img=$('#img9');
        num=9;
    }else if(num.target.id=='img10'){
        img=$('#img10');
        num=10;
    }else if(num.target.id=='img11'){
        img=$('#img11');
        num=11;
    }else if(num.target.id=='img12'){
        img=$('#img12');
        num=12;
    }else if(num.target.id=='img13'){
        img=$('#img13');
        num=13;
    }else if(num.target.id=='img14'){
        img=$('#img14');
        num=14;
    }else if(num.target.id=='img15'){
        img=$('#img15');
        num=15;
    }else if(num.target.id=='img16'){
        img=$('#img16');
        num=16;
    }else if(num.target.id=='img17'){
        img=$('#img17');
        num=17;
    }else if(num.target.id=='img18'){
        img=$('#img18');
        num=18;
    }else if(num.target.id=='img19'){
        img=$('#img19');
        num=19;
    }else if(num.target.id=='img20'){
        img=$('#img20');
        num=20;
    }     
    cambio(img,num,tipo); 
}

function cambio(img,num,tipo){    
    $(img).attr("src","img"+tipo+"/img"+num+".png");
}

function ver_peludos(){
    var peludo=document.querySelectorAll("img.peludos"); 
    var tipo='';
    eliminar();
    for (let index = 0; index < peludo.length; index++) {  
        
        var img=$('#'+peludo[index].id); 
        $(img).css('visibility','visible');
        var num=peludo[index].id.substr(3);          
        cambio(img,num,tipo);
    }    
}
function ver_lagartos(){
    var reptiles=document.querySelectorAll("img.reptiles");    
    var tipo='';
    eliminar();
    for (let index = 0; index < reptiles.length; index++) {  
        
        var img=$('#'+reptiles[index].id);
        $(img).css('visibility','visible');
        var num=reptiles[index].id.substr(3);          
        cambio(img,num,tipo);
    }    
}
function ver_marinos(){
    var marinos=document.querySelectorAll("img.marinos");    
    var tipo='';
    eliminar();
    for (let index = 0; index < marinos.length; index++) {  
        
        var img=$('#'+marinos[index].id); 
        $(img).css('visibility','visible');
        var num=marinos[index].id.substr(3);          
        cambio(img,num,tipo);
    }   
}
function ver_pajaros(){
    var ave=document.querySelectorAll("img.ave");    
    var tipo='';
    eliminar();
    for (let index = 0; index < ave.length; index++) {  
        
        var img=$('#'+ave[index].id); 
        $(img).css('visibility','visible');
        var num=ave[index].id.substr(3);          
        cambio(img,num,tipo);
    }   
}
function ver_todos(){
    var todos=document.querySelectorAll("img");    
    var tipo='';
    for (let index = 0; index < todos.length; index++) {  
        
        var img=$('#'+todos[index].id); 
        $(img).css('visibility','visible');
        var num=todos[index].id.substr(3);          
        cambio(img,num,tipo);
    } 
}

function eliminar(){
    var todos=document.querySelectorAll("img");
    for (let index = 0; index < todos.length; index++) { 
        var img=$('#'+todos[index].id);  
        $(img).css('visibility','hidden');
    }
}