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


// include '01-include-bsx-styles/index.php';
include 'src/_init/index.php';


// include '13-banner/index.php';
include 'src/banner/index.php';

// include '12-buttons/index.php';
include 'src/buttons/index.php';

// include '10-container/index.php';
include 'src/container/index.php';

// include '08-img-gallery/index.php';
include 'src/img-gallery/index.php';

// include '02-lazy-img/index.php';
include 'src/lazy-img/index.php';

// include '09-row-with-cols/index.php';
include 'src/row-with-cols/index.php';

// include '11-section/index.php';
include 'src/section/index.php';

// include '04-wrapper/index.php';
include 'src/wrapper/index.php';


//include '03-button/index.php'; // do not use, use `buttons` instead

// NOTE: the following components need separate js
// include '05-global-block-settings/index.php';
include 'src/global-block-settings/index.php';
// NOTE: global block advanced settings have been joined with global block settings
// include '06-global-block-advanced-settings/index.php';

// include '07-custom-core-class-names/index.php';
include 'src/custom-class-names/index.php';

//include '90-config-sidebar/index.php'; // do not use

