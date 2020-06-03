<?php
 
/*
TODO
*/
 
function sidebar_plugin_register() {
    wp_register_script(
        'plugin-sidebar-js',
        plugins_url( 'js/sidebar.js', __FILE__ ),
        array( 'wp-plugins', 'wp-edit-post', 'wp-element' ),
        filemtime( plugin_dir_path( __FILE__ ) . 'js/sidebar.js' )
    );
}
add_action( 'init', 'sidebar_plugin_register' );
 
function sidebar_plugin_script_enqueue() {
    wp_enqueue_script( 'plugin-sidebar-js' );
}
add_action( 'enqueue_block_editor_assets', 'sidebar_plugin_script_enqueue' );