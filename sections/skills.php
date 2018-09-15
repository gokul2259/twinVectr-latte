<?php
	$latte_skills_title = get_theme_mod('latte_skills_title',__( 'Skills', 'latte' ));
	$latte_skills_subtitle = get_theme_mod('latte_skills_subtitle',__( 'Things that I\'m good at.', 'latte' ));
	$latee_configured_skills = get_option('widget_latte_skills_widget');
	
?>

<div id="about" class="circular-progressbar" js-react-module="skillsSection" data-react-props='<?php echo json_encode(['skillItems' => $latee_configured_skills, 'sectionTitle' => $latte_skills_title]) ?>' ></div> 

