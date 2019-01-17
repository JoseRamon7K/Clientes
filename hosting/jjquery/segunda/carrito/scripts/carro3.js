$(function(){
    var items=document.querySelectorAll(".item");
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener('dblclick',carrito,false);
    }
});

function carrito(e) {
    
    var id="#"+this.id;
    /*if(e.target.parentNode.className=="item"){
        id="#"+e.target.parentNode.id;
    }else{
        id="#"+e.target.id;
    }*/
    
    //console.log(id);
    comprueba_stock(id)
}

function comprueba_stock(id) {
    var clase=".stock";
    var stock=$(id+' '+clase)[0].textContent;
    stock=stock.substr(6); 

    if (stock>0) {
        //console.log(stock);
        stock--;
        $(id+' '+clase)[0].textContent="Stock "+(parseInt(stock));

        compra($(id+' .price')[0].textContent);
        add_carrito(id.substr(1));
    }
    if(stock==0){
        $(id+' '+clase)[0].setAttribute("class", "agotado stock");
    }
    
}

function compra(precio) {
    var n_compras=$("#citem")[0].value;
    n_compras++;   
    $("#citem")[0].value=n_compras;

    var price=$("#cprice")[0].value;
    price=price.substr(0,price.length-1);

    price=parseInt(price)+parseInt(precio);   
    $("#cprice")[0].value=price+"€";
}

function add_carrito(id) {
    $("#cart_items").css("overflow","auto");
    var copia=$("#"+id)[0];
    $(copia).clone().prependTo("#cart_items");

    var aux=$("#cart_items>#"+id)[0];
    aux.setAttribute("id","c"+id);
    aux.setAttribute("class","item icart");
    console.log(aux.id);
    $("#"+aux.id+">.stock").hide();    
    $("#"+aux.id).css("cursor", "default");    
    $("#"+aux.id+">.title").css("cursor", "default"); 
    $("#"+aux.id+">.price").css("cursor", "default"); 
    
    add_borrar(aux);
    
}

function add_borrar(aux) {
    //var $delete = $('<a href="" class="delete"></a>');
    var drop=document.createElement("a");
    drop.setAttribute("class", "delete");

    drop.onclick=function (e) {
        var id=e.target.parentNode.id;
        $("#"+id).remove();
        id=id.substr(1);
        console.log(id);        
        retirar_producto("#"+id);
    }
    aux.prepend(drop);
}


function retirar_producto(id){
    var clase=".stock";
    var stock=$(id+' '+clase)[0].textContent;
    stock=stock.substr(6); 
    stock++;
    $(id+' '+clase)[0].textContent="Stock "+(parseInt(stock));
    retirar_precio($(id+' .price')[0].textContent);    
    if (stock>0) {        
        $(id+' '+clase)[0].setAttribute("class", "stock");
    }
}

function retirar_precio(precio){
    var n_compras=$("#citem")[0].value;
    n_compras--;   
    $("#citem")[0].value=n_compras;

    var price=$("#cprice")[0].value;
    price=price.substr(0,price.length-1);

    price=parseInt(price)-parseInt(precio);   
    $("#cprice")[0].value=price+"€";
}