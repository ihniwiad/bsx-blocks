<?php 

/**
 * Plugin Name: BSX Blocks
 * Plugin URI: https://github.com/ihniwiad/bsx-blocks
 * Description: Image gallery for BSX (a Bootstrap based style & js package) WordPress blocks.
 * Version: 1.0.0
 * Author: ihniwiad
 *
 * @package bsx-blocks
 */

defined( 'ABSPATH' ) || exit;

/**
 * Load all translations for our plugin from the MO file.
 */
add_action( 'init', 'bsx_blocks_09_row_with_cols_load_textdomain' );

function bsx_blocks_09_row_with_cols_load_textdomain() {
    load_plugin_textdomain( 'bsx-blocks', false, basename( __DIR__ ) . '/languages' );
}

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * Passes translations to JavaScript.
 */
function bsx_blocks_09_row_with_cols_register_block() {

    if ( ! function_exists( 'register_block_type' ) ) {
        // Gutenberg is not active.
        return;
    }

    //$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');

    wp_register_script(
        'bsx-blocks-09-row-with-cols',
        plugins_url( 'build/index.js', __FILE__ ),
        //$asset_file['dependencies'],
        //$asset_file['version']
        array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'underscore' ),
        filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js' )
    );
    register_block_type( 'bsx-blocks/row-with-cols', array(
        'editor_style' => array( 'bsx-blocks-editor-atf-style', 'bsx-blocks-editor-style' ),
        'editor_script' => 'bsx-blocks-09-row-with-cols',
    ) );
    register_block_type( 'bsx-blocks/row', array(
        'editor_style' => array( 'bsx-blocks-editor-atf-style', 'bsx-blocks-editor-style' ),
        'editor_script' => 'bsx-blocks-09-row-with-cols',
    ) );
    register_block_type( 'bsx-blocks/col', array(
        'editor_style' => array( 'bsx-blocks-editor-atf-style', 'bsx-blocks-editor-style' ),
        'editor_script' => 'bsx-blocks-09-row-with-cols',
    ) );

    if ( function_exists( 'wp_set_script_translations' ) ) {
        /**
         * May be extended to wp_set_script_translations( 'my-handle', 'my-domain',
         * plugin_dir_path( MY_PLUGIN ) . 'languages' ) ). For details see
         * https://make.wordpress.org/core/2018/11/09/new-javascript-i18n-support-in-wordpress/
         */
        wp_set_script_translations( 'bsx-blocks-09-row-with-cols', 'bsx-blocks' );
    }

}
add_action( 'init', 'bsx_blocks_09_row_with_cols_register_block' );

/**
 *  Enqueue custom styles to resolve conflicts between core block editor style and theme style
 */
function bsx_blocks_09_row_with_cols_add_editor_styles() {
    wp_enqueue_style( 'build/editor-style.css',
        plugins_url( 'build/editor-style.css', __FILE__ ) 
    );
}
add_action( 'enqueue_block_assets', 'bsx_blocks_09_row_with_cols_add_editor_styles' );
