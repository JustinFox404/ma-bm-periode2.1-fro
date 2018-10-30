$(document).ready(function() {
    $(".hero-image").click(function (ev) {
        $(this).parent().children(".hero-footer").slideToggle(50);
    }).mouseover(function(e){
        $(this).fadeTo("slow", 0);
    }).mouseout(function(e){
        $(this).fadeTo("slow", 1);
    });
    let i = 0;
    $("footer").click(function(e) {
        if(i === 0) {
            i = 1;
            $(this).animate({
                bottom: "50px",
                opacity: "0.8"
            }, 500)
        } else if(i === 1) {
            $(this).animate({
                bottom: "100px",
                opacity: "0.4"
            }, 500)
        }

    }).dblclick(function(e) {
        i = 0;
        $(this).animate({
            bottom: "0",
            opacity: "1 "
        }, 500)
    });
});