function main() {

(function () {
   'use strict';

    
 	// Smooth Scrolling
    //==========================================
    $(function() {
      $('a.scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          let target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top -50
            }, 1000);
            return false;
          }
        }
      });
    });

    /*====================================
    Script for the Counters for Facts Section
    ======================================*/
    $('.count').each(function() {
        const $this = $(this);
        $this.data('target', parseInt($this.html()));
        $this.data('counted', false);
        $this.html('0');
    });
    $(window).bind('scroll', function() {
        const speed = 3000;
        $('.count').each(function() {
            var $this = $(this);
            if (!$this.data('counted') && $(window).scrollTop() +
                $(window).height() >= $this.offset().top) {
                $this.data('counted', true);
                $this.animate({
                    dummy: 1
                }, {
                    duration: speed,
                    step: function(now) {
                        var $this = $(this);
                        var val = Math.round(
                            $this.data(
                                'target') *
                            now);
                        $this.html(val);
                        if (0 < $this.parent(
                            '.value').length) {
                            $this.parent(
                                '.value').css(
                                'width',
                                val + '%');
                        }
                    }
                });
            }
        });
    }).triggerHandler('scroll');

    /*====================================
    Portfolio Carousel 
    ======================================*/
  	$(document).ready(function() {
        const owl = $("#team");
        owl.owlCarousel({
  	     
  	      itemsCustom : [
  	        [0, 1],
  	        [450, 1],
  	        [660, 2],
  	        [700, 2],
  	        [1200, 3],
  	        [1600, 3]
  	      ],
  	      navigation : false,
  	      pagination: true,
  	  });
  	 
  	});

    /*====================================
    Portfolio Isotope Filter
    ======================================*/
    $(window).load(function() {
        const $container = $('#itemsWork , #itemsWorkTwo, #itemsWorkThree');
        $container.isotope({
            filter: '* , all',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            const selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });

    /*====================================
    Nivo Lightbox 
    ======================================*/
    $('#itemsWork a , #itemsWorkTwo a , #itemsWorkThree a , #popup a').nivoLightbox({
            effect: 'slideDown',  
            keyboardNav: true,                            
        });

    $(document).ready(function() {
 
      $("#owl-demo").owlCarousel({

          navigation : false, // Show next and prev buttons
          slideSpeed : 300,
          paginationSpeed : 400,
          singleItem: true

          // "singleItem:true" is a shortcut for:
          // items : 1,
          // itemsDesktop : false,
          // itemsDesktopSmall : false,
          // itemsTablet: false,
          // itemsMobile : false

      });

    });

    /*====================================
    Insert placeholders
    ======================================*/
    $(document).ready(function() {
        // myAge
        const ageDifMs = Date.now() - Date.UTC(1992, 5, 30);
        const ageDate = new Date(ageDifMs); // miliseconds from epoch
        const myAge = Math.abs(ageDate.getUTCFullYear() - 1970);
        $("#myAge").html(myAge);

        // currentYear
        $("#currentYear").html(new Date().getFullYear());
    });

}());


}
main();
