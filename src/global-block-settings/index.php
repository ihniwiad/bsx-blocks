<?php

/**
 * @package bsx-blocks
 */

defined( 'ABSPATH' ) || exit;


function bsx_blocks_global_block_settings() {

    $asset_file = include( BSX_BLOCKS_PLUGIN_DIR_PATH . 'build/custom-block-settings.asset.php');

    wp_enqueue_script(
        'bsx-blocks-global-block-settings',
        BSX_BLOCKS_PLUGINS_URL . 'build/custom-block-settings.js',
        $asset_file[ 'dependencies' ],
        $asset_file[ 'version' ],
    );
}
add_action( 'enqueue_block_editor_assets', 'bsx_blocks_global_block_settings' );
