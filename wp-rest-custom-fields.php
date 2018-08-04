<?php 
add_action( 'rest_api_init', 'create_api_posts_meta_field' );
 

/**
 * regiester a new custom field postMeta
 */
 function create_api_posts_meta_field() {
    register_rest_field( 'post', 'postMeta', array(
    'get_callback' => 'get_post_meta_for_api',
    'update_callback'   => 'null',
    'schema' => null,
    )
    );
    register_rest_field( 'post', 'content', array(
        'get_callback' => 'get_post_content',
        'update_callback'   => 'update_post_meta_for_html_strip',
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


/**
 * Each register_rest_field field name need a retrive and update for custom content
 * @param fieldName {string } the update field name
 * @return the field to update using the update_callback
 */
function get_post_content($object, $fieldName) {
    return get_post_field('post_content', $object['id']);
}


/**
 * Each register_rest_field field name need a retrive and update for custom content
 * @param $value {any_type} the value of retrived field
 * @param $object {object} the current post object
 * @param $field_name {string} the post property that need to be updated
 * @return the updated value
 */
function update_post_meta_for_html_strip($value, $object, $field_name) {

    //$stripedContent = wpautop($value);
    update_post_meta( $object->ID, $field_name, strip_tags( $value ) );
}