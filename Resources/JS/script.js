

$(document).ready(function() {
    
    /* For the sticky navigation */

    $('.js--section-feature').waypoint(function(direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
          offset: '60px;'
    });
    
    
    
    
    /* Scroll on buttons */
    
    $('.js--scroll-to-plans').click(function () {
       $('html, body').animate({scrollTop: $('.js--plans').offset().top}, 1000);
    });
    
    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-feature').offset().top}, 1000);
    });
    
    $('.js--scroll-to-work').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-steps').offset().top}, 1000);
    });
    
    $('.js--scroll-to-cities').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-cities').offset().top}, 1000);
    });
    
    $('.js--scroll-to-signup').click(function () {
        $('html, body').animate({scrollTop: $('.js--signup').offset().top}, 1000)
    })
    
    $('.js--scroll-to-header').click(function() {
        $('html, body').animate({scrollTop: $('.header').offset().top}, 1000)
    });
    
    
    /* Anomations on scroll*/ 
});