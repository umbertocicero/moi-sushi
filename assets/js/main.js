"use strict";

jQuery(document).ready(function ($) {

    /*---------------------------------------------*
     * Mobile menu
     ---------------------------------------------*/
	 
    $('#navbar-collapse').find('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 40)
                }, 1000);
                if ($('.navbar-toggle').css('display') != 'none') {
                    $(this).parents('.container').find(".navbar-toggle").trigger("click");
                }
                return false;
            }
        }
    });

	 /* ---------------------------------------------------------------------
      * Carousel
     ---------------------------------------------------------------------= */
	$( '.swipebox' ).swipebox({
		hideBarsDelay : 5000,
		loopAtEnd: true
	});

    /*---------------------------------------------*
     * Menu Section
     ---------------------------------------------*/

    $('.cd-menu-trigger').on('click', function (event) {
        event.preventDefault();
        $('#main-nav').addClass('is-visible');
    });
    //close menu
    $('.cd-close-menu').on('click', function (event) {
        event.preventDefault();
        $('#main-nav').removeClass('is-visible');
    });

    $('#main-nav a[href^="#"]').on('click', function (event) {
        event.preventDefault();
        var target = $(this.hash);
        $('#main-nav').removeClass('is-visible');
        $('body,html').animate(
                {'scrollTop': target.offset() ? target.offset().top : null},
        900
                );
    });

	/* ---------------------------------------------------------------------
     * FLOATING "BACK TO TOP" BUTTON
     ---------------------------------------------------------------------= */
	$(document).ready(function(){ 
		$(window).scroll(function(){ 
			if ($(this).scrollTop() > 100) { 
				$('.scroll-top').fadeIn(); 
			} else { 
				$('.scroll-top').fadeOut(); 
			} 
		}); 
		$('.scroll-top').click(function(){ 
			$("html, body").animate({ scrollTop: 0 }, 600); 
			return false; 
		}); 
	});

    //End
});
