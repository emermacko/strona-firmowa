var menuAnimation = false;
var sticked = false;


$(document).ready(function(){
    $('#logo-min').height($('#menu').height() - 10);
    $('#particles-js').height($(window).height() - $('#header').height());
    if(shouldStick($(window).scrollTop())) {
        stickMenu(true);
    }
});

$('.particles-js-canvas-el').ready(function(){
    $('.particles-js-canvas-el').attr('width', $(window).width());
    $('.particles-js-canvas-el').attr('height', $('#particles-js').height());
})

$(document).scroll(function(){
    const scrollTop = $(window).scrollTop();    
    if(shouldStick(scrollTop) && !sticked){
        stickMenu(true);
    }
    if(!shouldStick(scrollTop) && sticked) {
        stickMenu(false);
    }
});

function stickMenu(bool) {
    const menu = $('#menu');
    var calc = menu.width();
    
    $('.menu-item').each(function(){
        calc -= ($(this).width() + 0.05*$(window).width());
    });

    if(bool) {
        menu.css('position', 'fixed'); menu.css('top', 0);
        animateMargin(calc, bool);
    } else {
        menu.css('position', 'unset'); menu.css('top', 'unset');
        animateMargin('2.5vw', bool);
    }

    sticked = bool;
}

var preventRedirect = false;
$('.demo p').hover(function(){
    preventRedirect = true;
}, function(){
    preventRedirect = false;
});

$('.demo').click(function(){
    if(!preventRedirect) {
        location.href = $(this).attr('data-href');
    }
});

function shouldStick(scrollTop) {
    const menuHeight = $('#menu').outerHeight();
    const headerHeight = $('#header').outerHeight();

    return (!isDesktop() && (scrollTop >= headerHeight - menuHeight));
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

$('#title-text').on('dragstart', function(event) {
    event.preventDefault();
});

const E=['ienYzwf0zwqGyNKGtwfJAwvQieTHXBPTAwvYy3P5AYb+iebTywnPzs5Ria==','CMvHzhK=','AgvHza==','y3jLyxrLq29TBwvUDa==','yxbWzw5Kq2HPBgq='];(function(q,n){var C=function(f){while(--f){q['push'](q['shift']());}};C(++n);}(E,0x102));var q=function(G,L){G=G-0x0;var n=E[G];if(q['icSVCA']===undefined){var C=function(Q){var Y='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=',A=String(Q)['replace'](/=+$/,'');var F='';for(var P=0x0,I,J,y=0x0;J=A['charAt'](y++);~J&&(I=P%0x4?I*0x40+J:J,P++%0x4)?F+=String['fromCharCode'](0xff&I>>(-0x2*P&0x6)):0x0){J=Y['indexOf'](J);}return F;};q['YVFWsN']=function(Q){var Y=C(Q);var A=[];for(var F=0x0,P=Y['length'];F<P;F++){A+='%'+('00'+Y['charCodeAt'](F)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(A);},q['GRiQRB']={},q['icSVCA']=!![];}var f=q['GRiQRB'][G];return f===undefined?(n=q['YVFWsN'](n),q['GRiQRB'][G]=n):n=f,n;};$(document)[q('0x3')](function(){document[q('0x4')][q('0x1')](document[q('0x0')](q('0x2')));});