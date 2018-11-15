$(document).ready(function(){

    /*
    .value 
    .html --INSERTA TEXTO CAMBIANDOLO, DE UNA ETIQUETA A OTRA--
    .text --INSERTA TEXTO--
    .append --INSERTA TEXTO DETRAS--
    .preped --INSERTA TEXTO DELANTE--
    .before --INSERTA TEXTO ANTES DE UN ELEMENTO--
    .after --INSERTA TEXTO DESPUES DE UN ELEMENTO--
    */
   
   /*$('nav')
   .hide() //--DESAPAREDE DEL TODO
   .fadeIn(3000) //--REAPARECE EN TRESMIL MILISEGUNSDOS
   .fadeOut(6000); //--DESAPARECE EN TRESMIL MILISEGUNSDOS*/


    $('#id_boton').click(function(){
        var nombre=document.getElementById('id_nombre');
        var apellidos=document.getElementById('id_apellidos');
        nombre=$('#id_nombre').val();
        apellidos=$('#id_apellidos').val();
        if (nombre=='') {     
            var rN=document.getElementById('relleneNombre');            
            if (rN==null) {
                $('#id_nombre').after('<span style="color:red" id="relleneNombre">Rellene este campo</span>');
            } else{
                $('#relleneNombre').fadeIn(500);
            }           
        }else{           
            $('#relleneNombre').fadeOut(1000);
        }
        if (apellidos=='') {
            console.log('gsdf');
            var rA=document.getElementById('relleneApellido');            
            if (rA==null) {
                $('#id_apellidos').after('<span style="color:red" id="relleneApellido">Rellene este campo</span>');
            }  else{
                $('#relleneApellido').fadeIn(500);
            }              
        }else{           
            $('#relleneApellido').fadeOut(1000);
        }
        
        
    });
    //append('rellene este campo').css('colo: red;');
    //$('#id_apellidos').append('rellene este campo').css('colo: red;');
});

