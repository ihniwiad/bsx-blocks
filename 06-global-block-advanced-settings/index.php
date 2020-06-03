<?php

/**
 * Plugin Name: BSX Blocks
 * Plugin URI: https://github.com/ihniwiad/bsx-blocks
 * Description: Global block advanced settings for BSX (a Bootstrap based style & js package) WordPress blocks.
 * Version: 1.0.1
 * Author: ihniwiad
 *
 * @package bsx-blocks
 */

defined( 'ABSPATH' ) || exit;


/**
 * register block
 */
function bsx_blocks_06_global_block_advanced_settings() {

    if ( ! function_exists( 'register_block_type' ) ) {
        // Gutenberg is not active.
        return;
    }

    //$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');

    wp_register_script(
        'bsx-blocks-06-global-block-advanced-settings',
        plugins_url( 'build/index.js', __FILE__ ),
        array( 'wp-blocks', 'wp-element' ), 
        filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js' )
        //$asset_file['dependencies'],
        //$asset_file['version']
    );
 
    wp_enqueue_script( 'bsx-blocks-06-global-block-advanced-settings' );

}
add_action( 'enqueue_block_editor_assets', 'bsx_blocks_06_global_block_advanced_settings' );
