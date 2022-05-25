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
        // $asset_file[ 'dependencies' ],
        // WARNING: Do not forget to declare dependencies, otherwise might remain undefiend
        array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'underscore' ),
        $asset_file[ 'version' ]
        // filemtime( BSX_BLOCKS_PLUGIN_DIR_PATH . 'build/index.js' )
    );

    if ( function_exists( 'wp_set_script_translations' ) ) {
        /**
         * May be extended to wp_set_script_translations( 'my-handle', 'my-domain',
         * plugin_dir_path( MY_PLUGIN ) . 'languages' ) ). For details see
         * https://make.wordpress.org/core/2018/11/09/new-javascript-i18n-support-in-wordpress/
         */
        wp_set_script_translations( '4ce22f4e704ba9511fe28284498d5a36', 'bsx-blocks', BSX_BLOCKS_PLUGINS_URL . 'languages' );
    }
}
add_action( 'init', 'bsx_blocks_include_style_and_script' );

