var secundario=document.getElementById("principal");
var saludo=document.getElementById("id_saludo");

var nombre=prompt("Introduzca un nombre:");
saludo.innerText="Buenos dias "+nombre;
nombre=nombre.toLowerCase();

switch (nombre) {
    case "jose":{
        secundario.style="background-color: red;";
        break;
    }
    case "luis":{
        secundario.style="background-color: green;";
        break;
    }
    case "ramon":{
        secundario.style="background-color: blue;";
        break;
    }
    case "maria":{
        secundario.style="background-color: black;";
        break;
    }
    case "juan":{
        secundario.style="background-color: yellow;";
        break;
    }
    case "bruno":{
        secundario.style="background-color: gray;";
        break;
    }
    case "mercedes":{
        secundario.style="background-color: rgb(25,65,45);";
        break;
    }
    case "cesar":{
        secundario.style="background-color: pink;";
        break;
    }
    case "ivan":{
        secundario.style="background-color: orange;";
        break;
    }
    default:{        
        saludo.innerText="";
        secundario.style="background-color: rgb(237, 0, 245);";
        break;
    }
}


