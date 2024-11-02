var keywords = ["RÁDIO MÁXIMA", "ONLINE TODOS OS DIAS", "E A TODA A HORA"];
var count = 1;
setInterval(function(){    
    $(".keyword").fadeOut(290, function(){        
        $(this).html(keywords[count]);        
        count++;        
        if(count == keywords.length)            
            count = 0;        
        $(this).fadeIn(290);    
    });
}, 5000);
