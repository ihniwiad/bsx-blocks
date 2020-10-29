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
 * Load all translations for our plugin from the MO file.
 */
// function bsx_blocks_load_textdomain() {
//     load_plugin_textdomain( 'bsx-blocks', false, basename( __DIR__ ) . '/languages' );
// }
// add_action( 'init', 'bsx_blocks_load_textdomain' );


/**
 * include stylesheet from theme `assets/css/atf.css` and `assets/css/style.css`
 *
 * use `'editor_style' => array( 'bsx-blocks-editor-atf-style', 'bsx-blocks-editor-style' ),` within `register_block_type()` to include styles into your block or plugin
 */
function bsx_blocks_include_style_and_script() {

    $asset_file = include( BSX_BLOCKS_PLUGIN_DIR_PATH . 'build/index.asset.php');

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
    wp_register_style(
        'bsx-blocks-ui-editor-style',
        BSX_BLOCKS_PLUGINS_URL . 'build/css/index.css',
        array( 'wp-edit-blocks' ),
        filemtime( BSX_BLOCKS_PLUGIN_DIR_PATH . 'build/css/index.css' )
    );
    wp_register_script(
        'bsx-blocks-script',
        BSX_BLOCKS_PLUGINS_URL . 'build/index.js',
        $asset_file[ 'dependencies' ],
        $asset_file[ 'version' ]
        // array(),
        // filemtime( BSX_BLOCKS_PLUGIN_DIR_PATH . 'build/index.js' )
    );

    // if ( function_exists( 'wp_set_script_translations' ) ) {
        /**
         * May be extended to wp_set_script_translations( 'my-handle', 'my-domain',
         * plugin_dir_path( MY_PLUGIN ) . 'languages' ) ). For details see
         * https://make.wordpress.org/core/2018/11/09/new-javascript-i18n-support-in-wordpress/
         */
    //     wp_set_script_translations( 'bsx-blocks', 'bsx-blocks' );
    // }
}
add_action( 'init', 'bsx_blocks_include_style_and_script' );

