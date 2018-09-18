jQuery(window).load(function() {

	if( latte_script_var.latte_preloader_display != 1 ) {
		/* Preloader */
		jQuery(".status").fadeOut();
		jQuery(".preloader").delay(400).fadeOut("slow");
	}

	if( latte_script_var.latte_animations_display != 1 ) {
		/* scrollReval */
		window.sr = new scrollReveal();
	}

});

jQuery(document).ready(function($) {
	if( latte_script_var.latte_is_homepage != 1 ) {
		/* Smooth Scroll */
		jQuery('a[href*=#]').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = jQuery(this.hash);
				target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					jQuery('html,body').animate({
						scrollTop: target.offset().top
					}, 1200);
					return false;
				}
			}
		});
	}

	if( latte_script_var.latte_is_homepage != 1 ) {

		if( latte_script_var.latte_services_display != 1 ) {
			$('.service-box').children().each(function() {
				$(this).matchHeight(true);
			});
		}
	}

});
