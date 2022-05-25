<?php 

/**
 * @package bsx-blocks
 */

defined( 'ABSPATH' ) || exit;

/**
 * register block
 */
function bsx_blocks_slider_register_block() {

    if ( ! function_exists( 'register_block_type' ) ) {
        // Gutenberg is not active.
        return;
    }
    register_block_type( 'bsx-blocks/slider', array(
        'editor_script' => 'bsx-blocks-script',
        'editor_style' => 'bsx-blocks-editor-style',
        // missing 2 styles `'style' => 'bsx-blocks-theme-style',` which are included as dirty hack in `text-elements/index.php`
    ) );

}
add_action( 'init', 'bsx_blocks_slider_register_block' );
