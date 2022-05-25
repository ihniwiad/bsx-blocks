<?php 

/**
 * @package bsx-blocks
 */

defined( 'ABSPATH' ) || exit;

/**
 * register block
 */
function bsx_blocks_column_rows_register_block() {

    if ( ! function_exists( 'register_block_type' ) ) {
        // Gutenberg is not active.
        return;
    }

    register_block_type( 'bsx-blocks/column-rows', array(
        'editor_script' => 'bsx-blocks-script',
        'editor_style' => 'bsx-blocks-ui-editor-style',
        // missing 2 styles which are included as dirty hack in `text-elements/index.php`
    ) );
    register_block_type( 'bsx-blocks/column-row', array(
        'editor_script' => 'bsx-blocks-script',
        'editor_style' => 'bsx-blocks-ui-editor-style',
        // missing 2 styles which are included as dirty hack in `text-elements/index.php`
    ) );

}
add_action( 'init', 'bsx_blocks_column_rows_register_block' );

