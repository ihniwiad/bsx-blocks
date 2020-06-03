<?php

/**
 * Plugin Name: BSX Blocks
 * Plugin URI: https://github.com/ihniwiad/bsx-blocks
 * Description: Custom cors class names for BSX (a Bootstrap based style & js package) WordPress blocks.
 * Version: 1.0.1
 * Author: ihniwiad
 *
 * @package bsx-blocks
 */

defined( 'ABSPATH' ) || exit;


function bsx_blocks_07_custom_core_class_names() {
    wp_enqueue_script(
        'bsx-blocks-custom-cors-class-names',
        esc_url( plugins_url( 'build/index.js', __FILE__ ) ),
        array( 'wp-blocks', 'wp-element', 'wp-editor' ),
        filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js' )
    );
}
add_action( 'enqueue_block_editor_assets', 'bsx_blocks_07_custom_core_class_names' );


function bsx_blocks_07_add_editor_styles() {
    add_editor_style( 'css/editor-style.css' );
}
add_action( 'admin_init', 'bsx_blocks_07_add_editor_styles' );