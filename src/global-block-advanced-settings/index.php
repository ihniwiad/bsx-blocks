<?php

/**
 * @package bsx-blocks
 */

defined( 'ABSPATH' ) || exit;


function bsx_blocks_global_block_advanced_settings() {

    if ( ! function_exists( 'register_block_type' ) ) {
        // Gutenberg is not active.
        return;
    }

    $asset_file = include( BSX_BLOCKS_PLUGIN_DIR_PATH . 'build/custom-block-settings.asset.php');

    wp_register_script(
        'bsx-blocks-global-block-advanced-settings',
        BSX_BLOCKS_PLUGINS_URL . 'build/custom-block-settings.js',
        $asset_file[ 'dependencies' ],
        $asset_file[ 'version' ],
    );
 
    wp_enqueue_script( 'bsx-blocks-global-block-advanced-settings' );

}
add_action( 'enqueue_block_editor_assets', 'bsx_blocks_global_block_advanced_settings' );

