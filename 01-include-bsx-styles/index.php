<?php 

/**
 * Plugin Name: BSX Blocks
 * Plugin URI: https://github.com/ihniwiad/bsx-blocks
 * Description: Style includes for BSX (a Bootstrap based style & js package) WordPress blocks.
 * Version: 1.0.0
 * Author: ihniwiad
 *
 * @package bsx-blocks
 */

defined( 'ABSPATH' ) || exit;

/**
 * include stylesheet from theme `assets/css/atf.css` and `assets/css/style.css`
 *
 * use `'editor_style' => array( 'bsx-blocks-editor-atf-style', 'bsx-blocks-editor-style' ),` within `register_block_type()` to include styles into your block or plugin
 */
function bsx_blocks_01_include_stylesheets() {
    wp_register_style(
        'bsx-blocks-editor-atf-style',
        get_template_directory_uri() . '/assets/css/atf.css',
        array( 'wp-edit-blocks' ),
        filemtime( get_template_directory() . '/assets/css/atf.css' ),
    );
    wp_register_style(
        'bsx-blocks-editor-style',
        get_template_directory_uri() . '/assets/css/style.css',
        array( 'wp-edit-blocks' ),
        filemtime( get_template_directory() . '/assets/css/style.css' ),
    );
}
add_action( 'init', 'bsx_blocks_01_include_stylesheets' );

/**
 *  Enqueue custom editor styles
 */
function bsx_blocks_ui_add_editor_styles() {
    wp_enqueue_style( 'bsx-blocks-ui-editor-style',
        plugins_url( 'build/css/editor-style.css', __FILE__ ) 
    );
}
add_action( 'enqueue_block_assets', 'bsx_blocks_ui_add_editor_styles' );
