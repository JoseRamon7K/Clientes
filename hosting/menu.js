$(document).ready(function(){
    $('.secun2').slideUp();
    
    $('.princi').hover(function (e) {
        // over
        var x= e.target;
        console.log(x);
        $(x).children('ul').slideDown('fast'); 
    },function (e) {
        // over
        var x= e.target;
        console.log(x);
        $(x).children('ul').slideUp('fast'); 
    });

    
    $('.subs').hover(function (e) {
        // over
        var x= e.target;
        console.log(x);
        $(x).children('ul').slideDown('fast'); 
    },function (e) {
        // over
        var x= e.target;
        console.log(x);
        $(x).children('ul').slideUp('fast'); 
    });

    $('header, main, footer').mouseover(function(e){        
        $('.secun').slideUp();
        $('.secunl').slideUp();
        $('.secunr').slideUp();
        $('.secunc').slideUp();
    });
    
});
