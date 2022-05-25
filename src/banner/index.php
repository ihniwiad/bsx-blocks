<?php 

/**
 * @package bsx-blocks
 */

defined( 'ABSPATH' ) || exit;

function bsx_blocks_banner_register_block() {

    if ( ! function_exists( 'register_block_type' ) ) {
        // Gutenberg is not active.
        return;
    }

    register_block_type( 'bsx-blocks/banner', array(
        'editor_script' => 'bsx-blocks-script',
        // DIRTY HACK: 
        // Use `editor_style` to include 2 Theme styles (`bsx-blocks-theme-atf-style` and `bsx-blocks-theme-style`) since WordPress does’n offer any solution to do this regulary since Version 6
        'editor_style' => 'bsx-blocks-theme-atf-style',
        'style' => 'bsx-blocks-theme-style',
    ) );
}
add_action( 'init', 'bsx_blocks_banner_register_block' );


