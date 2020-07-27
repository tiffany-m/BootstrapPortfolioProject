$(function() {
    $("#carousel1").carousel( { interval: 2000 } );
    $("#carouselButton1").click(function(){
        if ($("#carouselButton1").children("i").hasClass("fa-pause")) {
            $("#carousel1").carousel("pause");
            $("#carouselButton1").children("i").removeClass("fa-pause");
            $("#carouselButton1").children("i").addClass("fa-play");
        } else {
            $("#carousel1").carousel("cycle");
            $("#carouselButto1").children("i").removeClass("fa-play");
            $("#carouselButton1").children("i").addClass("fa-pause"); 
        }
    });
});

$(function() {
    $("#carousel2").carousel( { interval: 2000 } );
    $("#carouselButton2").click(function(){
        if ($("#carouselButton2").children("i").hasClass("fa-pause")) {
            $("#carousel2").carousel("pause");
            $("#carouselButton2").children("i").removeClass("fa-pause");
            $("#carouselButton2").children("i").addClass("fa-play");
        } else {
            $("#carousel2").carousel("cycle");
            $("#carouselButton2").children("i").removeClass("fa-play");
            $("#carouselButton2").children("i").addClass("fa-pause"); 
        }
    });
});