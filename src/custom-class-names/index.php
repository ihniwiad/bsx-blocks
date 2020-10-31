<?php

/**
 * @package bsx-blocks
 */

defined( 'ABSPATH' ) || exit;


function bsx_blocks_custom_class_names() {

    $asset_file = include( BSX_BLOCKS_PLUGIN_DIR_PATH . 'build/custom-class-names.asset.php');

    wp_enqueue_script(
        'bsx-blocks-custom-class-names',
        BSX_BLOCKS_PLUGINS_URL . 'build/custom-class-names.js',
        $asset_file[ 'dependencies' ],
        $asset_file[ 'version' ],
    );
}
add_action( 'enqueue_block_editor_assets', 'bsx_blocks_custom_class_names' );