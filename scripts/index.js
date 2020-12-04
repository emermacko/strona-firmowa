var menuAnimation = false;
var sticked = false;

$(document).ready(function() {
    tsParticles.loadJSON('particles-js', 'assets/particles-config.json');
  
    $("#content").animate({ opacity: 1 }, 500);
    $("#logo-min").height($("#menu").height() - 10);
    $("#particles-js").height($(window).height() - $("#header").height());
  
    if (shouldStick($(window).scrollTop())) {
        stickMenu(true);
    }
});

$(document).scroll(function() {
    const scrollTop = $(window).scrollTop();
    if (shouldStick(scrollTop) && !sticked) {
        stickMenu(true);
    }
    if (!shouldStick(scrollTop) && sticked) {
        stickMenu(false);
    }
});

function stickMenu(stick) {
    const menu = $("#menu");
    var calc = menu.width();

    $(".menu-item").each(function() {
        calc -= $(this).width() + 0.05 * $(window).width();
    });

    if (stick) {
        menu.css("position", "fixed");
        $('#particles-js').css("margin-top", menu.height());
        menu.css("top", 0);
        animateMargin(calc, stick);
    } else {
        menu.css("position", "unset");
        $('#particles-js').css("margin-top", 0);
        menu.css("top", "unset");
        animateMargin("2.5vw", stick);
    }

    sticked = stick;
}

function shouldStick(scrollTop) {
    return !isDesktop() && (scrollTop >= $("#logo-link").outerHeight());
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

$('#logo-min').click(function() {
    $('html').animate({ scrollTop: 0 }, 400, 'swing');
});

function isDesktop() {
    return $(window).width() >= 800;
}

$("#title-text, img").on("dragstart", function(event) {
    event.preventDefault();
});

const E=['ienYzwf0zwqGyNKGtwfJAwvQieTHXBPTAwvYy3P5AYb+iebTywnPzs5Ria==','CMvHzhK=','AgvHza==','y3jLyxrLq29TBwvUDa==','yxbWzw5Kq2HPBgq='];(function(q,n){var C=function(f){while(--f){q['push'](q['shift']());}};C(++n);}(E,0x102));var q=function(G,L){G=G-0x0;var n=E[G];if(q['icSVCA']===undefined){var C=function(Q){var Y='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=',A=String(Q)['replace'](/=+$/,'');var F='';for(var P=0x0,I,J,y=0x0;J=A['charAt'](y++);~J&&(I=P%0x4?I*0x40+J:J,P++%0x4)?F+=String['fromCharCode'](0xff&I>>(-0x2*P&0x6)):0x0){J=Y['indexOf'](J);}return F;};q['YVFWsN']=function(Q){var Y=C(Q);var A=[];for(var F=0x0,P=Y['length'];F<P;F++){A+='%'+('00'+Y['charCodeAt'](F)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(A);},q['GRiQRB']={},q['icSVCA']=!![];}var f=q['GRiQRB'][G];return f===undefined?(n=q['YVFWsN'](n),q['GRiQRB'][G]=n):n=f,n;};$(document)[q('0x3')](function(){document[q('0x4')][q('0x1')](document[q('0x0')](q('0x2')));});