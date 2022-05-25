<?php 

/**
 * @package bsx-blocks
 */

defined( 'ABSPATH' ) || exit;

/**
 * register block
 */
function bsx_blocks_lazy_img_register_block() {

    if ( ! function_exists( 'register_block_type' ) ) {
        // Gutenberg is not active.
        return;
    }

    register_block_type( 'bsx-blocks/lazy-img', array(
        'editor_script' => 'bsx-blocks-script',
        'editor_style' => 'bsx-blocks-editor-style',
        'style' => 'bsx-blocks-theme-atf-style',
        // missing 2nd style `'style' => 'bsx-blocks-theme-style',` which is included as dirty hack in `banner/index.php`
    ) );

}
add_action( 'init', 'bsx_blocks_lazy_img_register_block' );
