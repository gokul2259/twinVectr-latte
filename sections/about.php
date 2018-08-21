<?php
	$latte_about_title = get_theme_mod('latte_about_title',__( 'About Me', 'latte' ));
	$latte_about_subtitle = get_theme_mod('latte_about_subtitle',__( 'Here are some things that you should know about me.', 'latte' ));
	$latte_about_avatar = get_theme_mod('latte_about_avatar', get_template_directory_uri().'/assets/images/383x383.png');
	$latte_about_image1 = get_theme_mod('latte_about_parallax_image1', get_template_directory_uri().'/assets/images/383x383.png');
	$latte_about_image2 = get_theme_mod('latte_about_parallax_image2', get_template_directory_uri().'/assets/images/383x383.png');
	$latte_about_position = get_theme_mod('latte_about_position',__( 'Web Designer', 'latte' ));
	$latte_about_name = get_theme_mod('latte_about_name',__( 'John Doe', 'latte' ));
	$latte_about_content = esc_html(get_theme_mod('latte_about_content',__( '<p>Latte is a one-page parallax WordPress theme for developers, designers & freelancers, to showcase their profile and portfolio.</p> <p>It comes with many options, including services section, portfolio, maps, contact form, testimonials, pricing tables, and more.</p> <p>Plus, it\'s easy to customize! You don\'t need a page builder or a drag & drop editor. Every thing can be customized straight from the WordPress Customizer.</p>', 'latte' )));
	?>


	<?php echo header('Content-Type: application/json; charset=utf-8'); ?>

<div id="about" class="parllax-image-text" js-react-module="parllaxImageText" data-react-props='<?php echo json_encode(['title' => $latte_about_title, 'subtitle'=> $latte_about_subtitle, 'mainImage'=> $latte_about_avatar, 'subImageOne' => $latte_about_image1, 'subImageTwo' => $latte_about_image2, 'aboutName' => $latte_about_name, 'aboutContent' => $latte_about_content]) ?>' > 
</div>

