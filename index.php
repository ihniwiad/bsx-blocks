<?php

/**
 * Plugin Name: BSX Blocks
 * Plugin URI: https://github.com/ihniwiad/bsx-blocks
 * Description: BSX WordPress blocks.
 * Version: 1.0.0
 * Author: ihniwiad
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
include 'src/wrapper/index.php';


// special components (need separate js)
include 'src/global-block-settings/index.php';
include 'src/custom-class-names/index.php';

