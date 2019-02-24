var wh;
var ww;
var isMobile;

function init () {
    wh = $(window).height();
    ww = $(window).width();

    verifmobile();

    $('body').removeClass('noscroll');
    $('#menumobile').removeClass('open');

    if ($('body').hasClass('home')) {
        ajustbandeauhp();
        $('#scrollbottom').click(function() {
            if (!isMobile) {
                $("html, body").animate({ scrollTop: wh }, 800, 'easeOutCirc');
            }
        })
        $(window).scroll(function(){
            var scrollTop = $(window).scrollTop();

            if (isMobile) {
                (scrollTop>$('body.home .bandeau').height()) ? $('body.home header').addClass('sticky-top') : $('body.home header').removeClass('sticky-top');
            } else {
                (scrollTop>wh) ? $('body.home header').addClass('sticky-top') : $('body.home header').removeClass('sticky-top');
            }

        })
    }
}

function verifmobile() {
    ww > 974 ? isMobile = false : isMobile = true;
}

function ajustbandeauhp() {
    if ($('body').hasClass('home') && !isMobile ) {
        $('body.home .bandeau').height(wh);
    } else {
        $('body.home .bandeau').height('');
    }
}

$(function() {

    init();

    /* MENU MOBILE */
    $('#btmenu, #menuclose').click(function(e){
        e.preventDefault();
        $('body').toggleClass('noscroll');
        $('#menumobile').toggleClass('open');
    })

    /* RESIZE */
    $(window).resize(function(){
        init();
    });

    /* CONTACT */
    $('form[name="contact"] input.form-control').focusin(function(){
      $(this).prev('label').addClass('actif');
    })
    $('form[name="contact"] input.form-control').focusout(function(){
      if ($(this).val() === '') {
        $(this).prev('label').removeClass('actif');
      }
    })
});
