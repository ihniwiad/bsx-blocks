<?php

/**
 * Plugin Name: BSX Blocks
 * Plugin URI: https://github.com/ihniwiad/bsx-blocks
 * Description: Wrapper for BSX (a Bootstrap based style & js package) WordPress blocks.
 * Version: 1.0.1
 * Author: ihniwiad
 *
 * @package bsx-blocks
 */

defined( 'ABSPATH' ) || exit;


/**
 * Load all translations for our plugin from the MO file.
 */
add_action( 'init', 'bsx_blocks_04_wrapper_load_textdomain' );

function bsx_blocks_04_wrapper_load_textdomain() {
    load_plugin_textdomain( 'bsx-blocks', false, basename( __DIR__ ) . '/languages' );
}


/**
 * register block
 */
function bsx_blocks_04_wrapper_register_block() {

    if ( ! function_exists( 'register_block_type' ) ) {
        // Gutenberg is not active.
        return;
    }

    $asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');

    wp_register_script(
        'bsx-blocks-04-wrapper',
        plugins_url( 'build/index.js', __FILE__ ),
        $asset_file['dependencies'],
        $asset_file['version']
    );
    register_block_type( 'bsx-blocks/wrapper', array(
        'editor_style' => array( 'bsx-blocks-editor-atf-style', 'bsx-blocks-editor-style', 'bsx-blocks-ui-editor-style' ),
        'editor_script' => 'bsx-blocks-04-wrapper'
    ) );

    if ( function_exists( 'wp_set_script_translations' ) ) {
        /**
         * May be extended to wp_set_script_translations( 'my-handle', 'my-domain',
         * plugin_dir_path( MY_PLUGIN ) . 'languages' ) ). For details see
         * https://make.wordpress.org/core/2018/11/09/new-javascript-i18n-support-in-wordpress/
         */
        wp_set_script_translations( 'bsx-blocks-04-wrapper', 'bsx-blocks' );
    }

}
add_action( 'init', 'bsx_blocks_04_wrapper_register_block' );
