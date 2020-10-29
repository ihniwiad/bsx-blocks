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


include 'src/_init/index.php';

include 'src/lazy-img/index.php';
// include '02-lazy-img/index.php';

//include '03-button/index.php';
include '04-wrapper/index.php';
include '05-global-block-settings/index.php';
include '06-global-block-advanced-settings/index.php';
include '07-custom-core-class-names/index.php';
include '08-img-gallery/index.php';
include '09-row-with-cols/index.php';
include '10-container/index.php';
include '11-section/index.php';
include '12-buttons/index.php';
include '13-banner/index.php';
//include '90-config-sidebar/index.php';

