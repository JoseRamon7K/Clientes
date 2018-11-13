var articulo=document.getElementById("id_section");
var saludo=document.getElementById("id_saludo");

var nombre=prompt("Introduzca un nombre:");
saludo.innerText="Buenos dias "+nombre;
nombre=nombre.toLowerCase();

switch (nombre) {
    case "jose":{
        articulo.style="background-color: red;";
        break;
    }
    case "luis":{
        articulo.style="background-color: green;";
        break;
    }
    case "ramon":{
        articulo.style="background-color: blue;";
        break;
    }
    case "maria":{
        articulo.style="background-color: black;";
        break;
    }
    case "juan":{
        articulo.style="background-color: yellow;";
        break;
    }
    case "bruno":{
        articulo.style="background-color: gray;";
        break;
    }
    case "mercedes":{
        articulo.style="background-color: rgb(25,65,45);";
        break;
    }
    case "cesar":{
        articulo.style="background-color: pink;";
        break;
    }
    case "ivan":{
        articulo.style="background-color: orange;";
        break;
    }
    default:{        
        saludo.innerText="";
        articulo.style="background-color: rgb(237, 0, 245);";
        break;
    }
}

