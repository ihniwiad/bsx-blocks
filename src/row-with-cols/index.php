<?php 

/**
 * @package bsx-blocks
 */

defined( 'ABSPATH' ) || exit;

/**
 * register block
 */
function bsx_blocks_row_with_cols_register_block() {

    if ( ! function_exists( 'register_block_type' ) ) {
        // Gutenberg is not active.
        return;
    }

    register_block_type( 'bsx-blocks/row-with-cols', array(
        'editor_style' => array( 'bsx-blocks-editor-atf-style', 'bsx-blocks-editor-style', 'bsx-blocks-ui-editor-style' ),
        'editor_script' => 'bsx-blocks-script',
    ) );
    register_block_type( 'bsx-blocks/row', array(
        'editor_style' => array( 'bsx-blocks-editor-atf-style', 'bsx-blocks-editor-style', 'bsx-blocks-ui-editor-style' ),
        'editor_script' => 'bsx-blocks-script',
    ) );
    register_block_type( 'bsx-blocks/col', array(
        'editor_style' => array( 'bsx-blocks-editor-atf-style', 'bsx-blocks-editor-style', 'bsx-blocks-ui-editor-style' ),
        'editor_script' => 'bsx-blocks-script',
    ) );

}
add_action( 'init', 'bsx_blocks_row_with_cols_register_block' );

