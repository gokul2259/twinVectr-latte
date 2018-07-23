<?php 
add_action( 'rest_api_init', 'create_api_posts_meta_field' );
 

/**
 * regiester a new custom field postMeta
 */
 function create_api_posts_meta_field() {
    register_rest_field( 'post', 'postMeta', array(
    'get_callback' => 'get_post_meta_for_api',
    'schema' => null,
    )
    );
}
 
/**
 * return the custom post meta object
 * @param {$object} post object - given by REST Post API
 */
function get_post_meta_for_api( $object ) {
    //get the id of the post object array
    $post_id = $object['id'];
    //post fetured image - thumbnail
    $postFeaturedImage = get_the_post_thumbnail_url($post_id);
    $postMeta = get_post_meta( $post_id );
    $postMeta = array_merge($postMeta, array('featuredImage'=> $postFeaturedImage));
        
    //return the post meta
    return $postMeta;
}