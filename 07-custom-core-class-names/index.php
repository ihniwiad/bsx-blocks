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
        'bsx-blocks-custom-core-class-names',
        esc_url( plugins_url( 'build/index.js', __FILE__ ) ),
        array( 'wp-blocks', 'wp-element', 'wp-editor' ),
        filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js' )
    );
}
add_action( 'enqueue_block_editor_assets', 'bsx_blocks_07_custom_core_class_names' );

/**
 *	Enqueue custom styles to resolve conflicts between core block editor style and theme style
 */
function bsx_blocks_07_add_editor_styles() {
	wp_enqueue_style( 'bsx-blocks-custom-core-class-names-editor-style',
		plugins_url( 'css/editor-style.css', __FILE__ ) 
	);
}
add_action( 'enqueue_block_assets', 'bsx_blocks_07_add_editor_styles' );