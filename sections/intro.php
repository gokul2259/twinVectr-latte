<?php 
$latte_intro_scroll = get_theme_mod('latte_intro_scroll', '#about' ); 
$bg_video_url = wp_get_attachment_url(stripslashes(get_theme_mod('latte_parallax_background')));
$blogInfo = get_bloginfo( 'name' );
$blogDescription= get_bloginfo( 'description' );
?>

<div class="parallax-video-container" js-react-module="backgroundVideo" data-react-props='<?php echo json_encode(['videoMp4' => $bg_video_url, 'blogInfo'=> $blogInfo, 'blogDesciption'=> $blogDescription, 'scrollTarget' => $latte_intro_scroll]) ?>' > </div>

