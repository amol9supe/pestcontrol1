//
(function ($) {
"use strict";
	// Define your library strictly...
	jQuery(document).ready( function ($) {
		if ( $.isFunction($.fn.preloadify) ) {
		   /* --------------------Preloadify----------------- */
			$(".flexslider, .gallery, .gallery-item, .postimg, .lightbox, .bio, .pest-img ").preloadify({
			   force_icon: "true",
				mode: "sequence"
			});
		}

		$('.footer-branches').hide();
		$( ".at-footer-branches" ).on('click', function(e) {
			e.preventDefault();
 			$(this).toggleClass('at-toggleOpen');
			$( ".footer-branches" ).slideToggle(500);
		  	$('html, body').animate({
          		scrollTop: $(document).height()
      		}, 500);
		});
		/* ---------------PrettyPhoto---------------------- */
		if ( $.isFunction($.fn.prettyPhoto) ) {
			$("a[data-rel^='prettyPhoto']").prettyPhoto({
			   theme: 'pp_default'
			});
		}

		/* --------------Hover Socialicons----------------------- */
		$('li').hover(function () {
			$(this).find('span.ttip').fadeIn();
		}, function () {
			$(this).find('span.ttip').fadeOut();
		});

		/* ----------------Vidoe Resize Fitvids--------------------- */
		if ( $.isFunction($.fn.fitVids) ) {

			$('.video-frame,.boxcontent,.video-stage,.video,.post').fitVids();
		}	

		/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
			Back to top jQuery
		-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */

		// hide #back-top first
		$("#back-top").hide();

		// fade in #back-top
		$(function () {
			$(window).scroll(function () {
				if ($(this).scrollTop() > 100) {
					$('#back-top').fadeIn();
				} else {
					$('#back-top').fadeOut();
				}
			});

			// scroll body to 0px on click
			$('#back-top a').click(function () {
				$('body,html').animate({
					scrollTop: 0
				}, 800);

			   return false;
			});
		});

		/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
			Fixed Header
		-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */

		var $aSelected = $('#wrapper').find('div');

		if( $aSelected.is('#fixedheader') ){

			var stickyHeaderTop = $('#fixedheader').offset().top;
			var $wpAdminBar = $('#wpadminbar');

			$( window ).scroll(function(){
				if( $( window ).scrollTop() > stickyHeaderTop ) {
					$('#fixedheader').addClass("fixed-header");
					if ( jQuery(window).width() > 1024) {
						$('.logo img').css({'transform':'scale(0.72)'});
						if ( $wpAdminBar.length ) {
							$('.fixed-header').css('top',$wpAdminBar.height()+'px');
						}
					}
				} else {
					$('#fixedheader').removeClass("fixed-header");
					$('#fixedheader').css('top','0');
					if ( jQuery(window).width() > 1024) {
						$('.logo img').css({'transform':'scale(1)'});
					}
				}
			});
		}

		/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
			Searchbar Pop-up
		-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */

		$('#ivaSearch').on("click", function(e) {
			if ($(e.srcElement).closest('#ivaSearchbar').length) return;
			$('#ivaSearchbar').slideDown(300);
			$('#ivaSearchbar input[type=text]').focus();
			return false;
		});

		$('.search-close').on("click", function(e) {
			jQuery('#ivaSearchbar').slideUp(300);
		});

		$('body').on("click", function(e){
			var target = $(e.target);
			if(!target.is(".ivaInput")) {
				jQuery('#ivaSearchbar').slideUp(300);
			}
		})

		$("#atp_menu").superfish();


		if ( $.isFunction($.fn.flexslider) ) {	
			flexslider();
		}

		jQuery(".ui-datepicker").addClass("iva-date-ui");
	});
})();

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
	Testimonials Slider
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
function MySlider( interval, id ) {
	'use strict';

	var slides,cnt,amount,i;

	function run() {
		// hiding previous image and showing next
		jQuery(slides[i]).fadeOut('slow', function () {
			// Animation complete.
			i++;
			if (i >= amount) i = 0;
			jQuery(slides[i]).fadeIn('slow');

			// updating counter
			cnt.text(i + 1 + ' / ' + amount);
		});
		// loop
		setTimeout(run, interval);
	}
	slides  = jQuery('#' + id + ' .testimonials > li');
	cnt 	= jQuery('#counter');
	amount  = slides.length;
	i = 0;

	// updating counter
	cnt.text(i + 1 + ' / ' + amount);
	if (amount > 1) setTimeout(run, interval);
}

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
	Flex Slider
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */

	function flexslider() {
		jQuery('.flexslider').flexslider({
			animation: "fade",
			//String: Select your animation type, "fade" or "slide"
			controlsContainer: ".flex-container",
			slideshow: true,
			//Boolean: Animate slider automatically
			slideshowSpeed: 2000,
			//Integer: Set the speed of the slideshow cycling, in milliseconds
			animationDuration: 2000,
			//Integer: Set the speed of animations, in milliseconds
			directionNav: true,
			//Boolean: Create navigation for previous/next navigation? (true/false)
			controlNav: false,
			//Boolean: Create navigation for paging control of each clide? Note: Leave true for
			mousewheel: false,
			smoothHeight: true,
		});
	}

// Mobile menu Jquery
jQuery(document).ready(function($) {
	'use strict';
	$('.iva-mobile-dropdown').click(function(){
		$('.iva-mobile-menu').slideToggle(500);
		return false;
	});

	// Child Menu Toggle
	jQuery('.iva-children-indenter').click(function(){
		$(this).parent().parent().toggleClass('iva-menu-open');
		$(this).parent().parent().find('> ul').slideToggle();

		return false;
	});

	 jQuery("#trigger").click(function () {
				jQuery(this).find('i').toggleClass('fa-arrow-circle-o-up');
                jQuery(this).next("#sticky").slideToggle({
                    duration: 300
                });
            });
	 
	resizemobile();
});

// On Window Resize
function resizemobile(){
	// show meun starting from iPad Portrait
	if( window.innerWidth < 768 ){
		jQuery('.header #menuwrap').hide();
	}else {
		jQuery('.header #menuwrap').show();
		jQuery('.iva-mobile-menu').hide();
	}
}
//Init
jQuery(window).resize(resizemobile);

/*-----initialise Superfish------*/

jQuery(document).ready(function(){
	jQuery('ul.sf-menu').superfish();
});


/*Sticy Bar */

jQuery(document).ready(function(){
	//Scroll Animation

	$('#sidebar .sticky-sidebar ul li a').click(function(event){
		event.preventDefault();		
		var hlink = $(this).attr("href");
		$("body,html").animate({
		scrollTop: $(hlink).offset().top	 
		},500);
	});

	//Scroll Color Change
	$(window).scroll(function(){
		var scrollTop = $(document).scrollTop();
		$(".box").each(function(){
		var id = $(this).attr("id");
		var boxHeight = $(this).outerHeight();
		var oTop = $(this).offset().top - 20;
		if(scrollTop > oTop && scrollTop < oTop + boxHeight) {
		$("a[href='#" + id + "']").parent().addClass('current_page_item');
		}
		else {
		$("a[href='#" + id + "']").parent().removeClass('current_page_item');
		}
		});
	});
		
});