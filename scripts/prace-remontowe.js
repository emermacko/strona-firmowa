$(window).on('load', function() {
    displayArrow();
})

$(window).on('load scroll resize', function(){
    const actualHeight = window.innerHeight;
    const controlHeight = $('#control-height').height();
    const isAddressBar = actualHeight != controlHeight;

    $('img').bind("contextmenu dragstart", function(e){
        return false;
    });

    if(!isDesktop() && $(window).scrollTop() < 15) {
        $('#intro-bg').height(isAddressBar ? actualHeight - 145 : controlHeight - 145);
    }
});

$(window).scroll(function(){
    displayArrow();
});

$('#bounce-arrow').click(function() {
    if($(this).data('hidden') === false) {
        const margin = isDesktop() ? 100 : 50;
        $('html').animate({
            scrollTop: $("#subtitle-1").offset().top - margin
        }, 700, 'swing');
    }
});

function displayArrow() {
    const arrow = $('#bounce-arrow');
    const arrowBottom = arrow.offset().top + arrow.height();
    const windowBottom = $(window).scrollTop() + $(window).height();

    if(arrow.data('hidden') === false && windowBottom > arrowBottom+100) {
        arrow.data('hidden', true);
        arrow.animate({opacity: 0});
        arrow.css('cursor', 'unset');
    } else if(arrow.data('hidden') && windowBottom < arrowBottom+100) {
        arrow.data('hidden', false);
        arrow.animate({opacity: 1});
        arrow.css('cursor', 'pointer');
    }
}

function isDesktop() {
    return ($(window).width() >= 750);
}
