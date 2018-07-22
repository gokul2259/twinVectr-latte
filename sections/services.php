<?php
	$latte_services_title = get_theme_mod('latte_services_title',__( 'Services', 'latte' ));
	$latte_services_subtitle = get_theme_mod('latte_services_subtitle',__( 'Things that I work on.', 'latte' ));
?>



		<section class="services" id="services" js-react-module="recentWorks" data-react-props = '<?php echo json_encode(['title' => $latte_services_title, 'subTitle'=> $latte_services_subtitle,]) ?>'>

		</section>

