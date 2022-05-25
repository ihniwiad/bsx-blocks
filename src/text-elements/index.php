<?php 

/**
 * @package bsx-blocks
 */

defined( 'ABSPATH' ) || exit;

function bsx_blocks_text_elements_register_block() {

    if ( ! function_exists( 'register_block_type' ) ) {
        // Gutenberg is not active.
        return;
    }

    register_block_type( 'bsx-blocks/badge', array(
        'editor_script' => 'bsx-blocks-script',
        'editor_style' => 'bsx-blocks-ui-editor-style',
    ) );

    register_block_type( 'bsx-blocks/icon', array(
        'editor_script' => 'bsx-blocks-script',
        // DIRTY HACK (PART 1/2): include 1st theme style
        'editor_style' => 'bsx-blocks-editor-atf-style',
    ) );

    register_block_type( 'bsx-blocks/check-list', array(
        'editor_script' => 'bsx-blocks-script',
        // DIRTY HACK (PART 2/2): include 2nd theme style
        'editor_style' => 'bsx-blocks-editor-style',
    ) );

    register_block_type( 'bsx-blocks/svg-img', array(
        'editor_script' => 'bsx-blocks-script',
        'editor_style' => 'bsx-blocks-editor-style',
    ) );
}
add_action( 'init', 'bsx_blocks_text_elements_register_block' );

