jQuery(window).load(function () {

	if (latte_script_var.latte_preloader_display != 1) {
		/* Preloader */
		jQuery(".status").fadeOut();
		jQuery(".preloader").fadeOut("slow");
	}

	if (latte_script_var.latte_animations_display != 1) {
		/* scrollReval */
		window.sr = new scrollReveal();
	}

});

(function ($) {
	if (latte_script_var.latte_is_homepage != 1) {
		/* Smooth Scroll */
		setTimeout(function() {
			jQuery('a[href*=#]').click(function () {
				if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
					var target = jQuery(this.hash);
					target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
					if (target.length) {
						jQuery('html,body').animate({
							scrollTop: target.offset().top
						}, 1200);
						return false;
					}
				}
			})}, 1000);
	}

	if (latte_script_var.latte_is_homepage != 1) {

		if (latte_script_var.latte_services_display != 1) {
			$('.service-box').children().each(function () {
				$(this).matchHeight(true);
			});
		}
	}

}(jQuery));
