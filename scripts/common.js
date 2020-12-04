var sticked = false;
var menuAnimation = false;

const headerBar = $('body').data('bar');

$(window).on('load', function(){
    $("#content").animate({ opacity: 1 }, 500);
    $("#logo-min").height($("#menu").height() - 10);

    if (shouldStick($(window).scrollTop())) {
        stickMenu(true);
    }
})

$(window).on('resize scroll', function() {
    const scrollTop = $(window).scrollTop();
    if(shouldStick(scrollTop) && !sticked) {
        stickMenu(true);
    }
    if(!shouldStick(scrollTop) && sticked) {
        stickMenu(false);
    }
});

async function stickMenu(stick) {
    const menu = $("#menu");
    var calc = menu.width();

    $(".menu-item").each(function() {
        calc -= $(this).width() + 0.05 * $(window).width();
    });

    if (stick) {
        menu.css("position", "fixed");
        menu.css("top", 0);

        $('#main-container').css("margin-top", menu.height());
        animateMargin(calc, stick);
    } else {
        menu.css("position", "unset");
        menu.css("top", "unset");

        $('#main-container').css("margin-top", 0);
        animateMargin("2.5vw", stick);
    }

    sticked = stick;
}

function animateMargin(margin, show) {
    if(!menuAnimation) {
        menuAnimation = true;
        if(show) {
            $('#logo-min').fadeIn(500);
        } else {
            $('#logo-min').fadeOut(500);
        }
        $('.menu-item').first().animate({marginLeft: margin}).promise().done(function(){
            menuAnimation = false;
        });        
    }
}

function isDesktop() {
    return $(window).width() >= 800;
}

function shouldStick(scrollTop) {
    return !isDesktop() && (scrollTop >= (headerBar ? 105 : 100));
}