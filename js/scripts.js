$(function() {
    $(".carousel").carousel( { interval: 5000 } );
    $("#carouselButton1").click(function(){
        if ($("#carouselButton1").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton1").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButto1").children("i").removeClass("fa-play");
            $("#carouselButton1").children("i").addClass("fa-pause"); 
        }
    });
});

$(function() {
    $(".carousel").carousel( { interval: 5000 } );
    $("#carouselButton2").click(function(){
        if ($("#carouselButton2").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton2").children("i").removeClass("fa-pause");
            $("#carouselButton2").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton2").children("i").removeClass("fa-play");
            $("#carouselButton2").children("i").addClass("fa-pause"); 
        }
    });
});