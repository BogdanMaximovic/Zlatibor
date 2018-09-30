$(document).ready(function() {

    /* For the sticky navigation */
    $('.js--section-apartmants').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px'
    });
    $('.js--section-apartmant').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px'
    });


    /* Navigation scroll */
    $('.js--main-nav a').click(function() {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1500);
        return false;
    });

    $('.js--name').waypoint(function(direction) {
        $('.js--name').addClass('animated bounce');
    }, {
        offset: '50%'
    })

    $('.js--pulse').waypoint(function(direction) {
        $('.js--pulse').addClass('animated shake');
    }, {
        offset: '50%'
    })

    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.icon');

        nav.slideToggle(200);

    });
})