<?php

/**
 * Plugin Name: BSX Blocks
 * Plugin URI: https://github.com/ihniwiad/bsx-blocks
 * Description: Global block settings for BSX (a Bootstrap based style & js package) WordPress blocks.
 * Version: 1.0.1
 * Author: ihniwiad
 *
 * @package bsx-blocks
 */

defined( 'ABSPATH' ) || exit;


function bsx_blocks_05_global_block_settings() {
    wp_enqueue_script(
        'bsx-blocks-05-global-block-settings',
        esc_url( plugins_url( 'build/index.js', __FILE__ ) ),
        array( 'wp-blocks', 'wp-element', 'wp-editor' ),
        filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js' )
    );
}

add_action( 'enqueue_block_editor_assets', 'bsx_blocks_05_global_block_settings' );
