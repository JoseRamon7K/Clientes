$(document).ready(function(){

    document.getElementById('id_botonvideos').addEventListener("click",destacarlo2,false);
    document.getElementById('id_botoninfo').addEventListener("click",destacar2,false);
    document.getElementById('id_botonnav').addEventListener("click",destacando2,false);
    var radioOption = [document.getElementsByName('rb')[0],document.getElementsByName('rb')[1],document.getElementsByName('rb')[2]];
    //Use forEach
    radioOption.forEach(function(e) {
        e.addEventListener("click", function() {     
            if (e.value=='Video') {
                destacarlo1();
            }else if(e.value=='Info'){
                destacar1();
            }
            else if(e.value=='Nav'){
                destacando1();
            }
        });
    });
});

function destacarlo1(){
    $(".cl_videos1").addClass("cl_destaca1");
    $(".cl_info1").removeClass("cl_destaca1");    
    $(".cl_buscador1").removeClass("cl_destaca1");
}

function destacar1(){
    $(".cl_videos1").removeClass("cl_destaca1");
    $(".cl_info1").addClass("cl_destaca1");     
    $(".cl_buscador1").removeClass("cl_destaca1");
}
function destacando1(){
    $(".cl_videos1").removeClass("cl_destaca1");    
    $(".cl_info1").removeClass("cl_destaca1"); 
    $(".cl_buscador1").addClass("cl_destaca1");
}

function destacarlo2(){
    $(".cl_videos2").addClass("cl_destaca2");
    $(".cl_info2").removeClass("cl_destaca2");
    $(".cl_buscador2").removeClass("cl_destaca2");
}

function destacar2(){
    $(".cl_videos2").removeClass("cl_destaca2");
    $(".cl_info2").addClass("cl_destaca2");    
    $(".cl_buscador2").removeClass("cl_destaca2");
}

function destacando2(){
    $(".cl_videos2").removeClass("cl_destaca2");    
    $(".cl_info2").removeClass("cl_destaca2"); 
    $(".cl_buscador2").addClass("cl_destaca2");
}