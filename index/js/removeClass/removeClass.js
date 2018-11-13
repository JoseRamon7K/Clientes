$(document).ready(function(){

    document.getElementById('id_botonvideos').addEventListener("click",destacarlo,false);
    document.getElementById('id_botoninfo').addEventListener("click",destacar,false);
    document.getElementById('r_videos').addEventListener("click",destacar_videos,false);
    document.getElementById('r_info').addEventListener("click",destacar_info,false);
});

function destacar_videos(){

    if($("#r_videos".value)==true){
        $(".cl_videos").addClass("cl_destaca");
    }else{
        $(".cl_videos").removeClass("cl_destaca");
    }
}

function destacar_info(){
    if($("#r_info".value)==true){
        $(".cl_info").addClass("cl_destaca");
    }else{
        $(".cl_info").removeClass("cl_destaca");
    }
}

function destacarlo(){
    $(".cl_videos").addClass("cl_destaca");
    $(".cl_info").removeClass("cl_destaca");
}

function destacar(){
    $(".cl_videos").removeClass("cl_destaca");
    $(".cl_info").addClass("cl_destaca");
}
