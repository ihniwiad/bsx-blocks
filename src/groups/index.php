<?php 

/**
 * @package bsx-blocks
 */

defined( 'ABSPATH' ) || exit;

/**
 * register block
 */
function bsx_blocks_section_register_block() {

    if ( ! function_exists( 'register_block_type' ) ) {
        // Gutenberg is not active.
        return;
    }

    register_block_type( 'bsx-blocks/section', array(
        'editor_style' => array( 'bsx-blocks-editor-atf-style', 'bsx-blocks-editor-style', 'bsx-blocks-ui-editor-style' ),
        'editor_script' => 'bsx-blocks-script',
    ) );
}
add_action( 'init', 'bsx_blocks_section_register_block' );


