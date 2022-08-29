<?php

/**
 * Plugin Name: BSX Blocks
 * Plugin URI: https://github.com/ihniwiad/bsx-blocks
 * Description: BSX WordPress blocks.
 * Version: 1.0.6
 * Author: ihniwiad
 * Text Domain: bsx-blocks
 * Domain Path: /languages
 *
 * @package bsx-blocks
 */

defined( 'ABSPATH' ) || exit;

// define plugin dir path (relative to local file system)
if ( ! defined( 'BSX_BLOCKS_PLUGIN_DIR_PATH' ) ) {
	define( 'BSX_BLOCKS_PLUGIN_DIR_PATH', plugin_dir_path( __FILE__ ) );
}
// define plugins url (relative to server domain)
if ( ! defined( 'BSX_BLOCKS_PLUGINS_URL' ) ) {
	define( 'BSX_BLOCKS_PLUGINS_URL', plugins_url( '/', __FILE__ ) );
}


/**
 * Load all translations for our plugin from the MO file.
 */
// function bsx_blocks_load_textdomain() {
//     load_plugin_textdomain( 'bsx-blocks', false, basename( __DIR__ ) . '/languages' );
// }
// add_action( 'plugins_loaded', 'bsx_blocks_load_textdomain' );



/**
 * Load plugin textdomain.
 */
// add_action( 'init', 'bsx_blocks_load_textdomain' );
// function bsx_blocks_load_textdomain() {
//     // echo '<h1 class="m-5">dirname( plugin_basename( __FILE__ ) ): "' . dirname( plugin_basename( __FILE__ ) ) . '"</h1>';
//     // echo '<h1 class="m-5">$local: "' . $local . '"</h1>';
//     // load_plugin_textdomain( 'bsx-blocks', false, dirname( plugin_basename( __FILE__ ) ) . '/languages' ); 
// }

// load translations
// function bsx_blocks_set_script_translations() {
    // wp_set_script_translations( '4ce22f4e704ba9511fe28284498d5a36', 'bsx-blocks', plugin_dir_path( __FILE__ ) . 'languages' );
    // wp_set_script_translations( '4ce22f4e704ba9511fe28284498d5a36', 'bsx-blocks', dirname( plugin_basename( __FILE__ ) ) . '/languages' );

    // echo '<script>console.log( "plugin_dir_path( __FILE__ ) . \'languages\': ' . plugin_dir_path( __FILE__ ) . 'languages' . '" );</script>';
    // echo '<script>console.log( "dirname( plugin_basename( __FILE__ ) ) . \'/languages\': ' . dirname( plugin_basename( __FILE__ ) ) . '/languages' . '" );</script>';
// }
// add_action( 'plugins_loaded', 'bsx_blocks_set_script_translations' );



// init
include 'src/_init/index.php';


// blocks
include 'src/banner/index.php';
include 'src/buttons/index.php';
include 'src/column-rows/index.php';
include 'src/container/index.php';
include 'src/img-gallery/index.php';
include 'src/lazy-img/index.php';
include 'src/row-with-cols/index.php';
include 'src/section/index.php';
include 'src/slider/index.php';
include 'src/text-elements/index.php';
include 'src/video/index.php';
include 'src/wrapper/index.php';


// special components (need separate js)
include 'src/global-block-settings/index.php';
include 'src/custom-class-names/index.php';

