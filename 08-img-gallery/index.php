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
add_action( 'init', 'bsx_blocks_img_gallery_load_textdomain' );

function bsx_blocks_img_gallery_load_textdomain() {
    load_plugin_textdomain( 'bsx-blocks', false, basename( __DIR__ ) . '/languages' );
}

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * Passes translations to JavaScript.
 */
function bsx_blocks_img_gallery_register_block() {

    if ( ! function_exists( 'register_block_type' ) ) {
        // Gutenberg is not active.
        return;
    }

    //$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');

    wp_register_script(
        'bsx-blocks-img-gallery',
        plugins_url( 'build/index.js', __FILE__ ),
        //$asset_file['dependencies'],
        //$asset_file['version']
        array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'underscore' ),
        filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js' )
    );
    register_block_type( 'bsx-blocks/img-gallery', array(
        'editor_style' => array( 'bsx-blocks-editor-atf-style', 'bsx-blocks-editor-style', 'bsx-blocks-ui-editor-style' ),
        'editor_script' => 'bsx-blocks-img-gallery',
    ) );

    if ( function_exists( 'wp_set_script_translations' ) ) {
        /**
         * May be extended to wp_set_script_translations( 'my-handle', 'my-domain',
         * plugin_dir_path( MY_PLUGIN ) . 'languages' ) ). For details see
         * https://make.wordpress.org/core/2018/11/09/new-javascript-i18n-support-in-wordpress/
         */
        wp_set_script_translations( 'bsx-blocks-img-gallery', 'bsx-blocks' );
    }

}
add_action( 'init', 'bsx_blocks_img_gallery_register_block' );
