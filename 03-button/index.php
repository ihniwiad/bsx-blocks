<?php

/**
 * Plugin Name: Myguten Block
 * Plugin URI: https://github.com/WordPress/gutenberg-examples
 * Description: This is a plugin demonstrating how to register new blocks for the Gutenberg editor.
 * Version: 1.0.2
 * Author: the Gutenberg Team
 *
 * @package gutenberg-examples
 */

defined( 'ABSPATH' ) || exit;


// include blocks
//include '01-include-bsx-styles/index.php';


/**
 * Load all translations for our plugin from the MO file.
 */
add_action( 'init', 'bsx_blocks_03_button_load_textdomain' );

function bsx_blocks_03_button_load_textdomain() {
    load_plugin_textdomain( 'bsx-blocks', false, basename( __DIR__ ) . '/languages' );
}




/**
 * render callback
 */
function bsx_blocks_03_button_render_callback( $attributes, $content ) {

    // debug output
    $debug = false;

    // get sttributes
    $postId = 0;
    $linkHref = $attributes[ 'linkHref' ];
    $linkHash = $attributes[ 'linkHash' ];
    $linkText = $attributes[ 'linkText' ];
    $linkTarget = $attributes[ 'linkTarget' ];
    $linkRel = $attributes[ 'linkRel' ];
    $linkState = $attributes[ 'linkState' ];
    $linkStateType = $attributes[ 'linkStateType' ];
    $linkAttributes = $attributes[ 'linkAttributes' ];

    // check for numeric href (use as post id, get permalink)
    if ( is_numeric( $linkHref ) ) {
        $postId = $linkHref;
        $linkHref = get_permalink( $postId );
    }

    // check for hash, add to href
    if ( $linkHash ) {
        $linkHref .= '#' . $linkHash;
    }


    // TEST – TODO: remove
    $readAttributes = 'TEST (' . count( $attributes ) . '):<br>';
    foreach( $attributes as $key => $value ) {
        $readAttributes .= $key . ': ' . $value . '<br>';
    }

    return sprintf(
        '<a class="btn btn-%s%s" href="%s"%s%s data-id="%s"%s>%s</a>%s',
        $linkStateType != '' ? $linkStateType. '-' : '',
        $linkState,
        esc_url( $linkHref ),
        $linkTarget ? ' target="' . $linkTarget . '"' : '',
        $linkRel ? ' rel="' . $linkRel . '"' : '',
        $postId ? $postId : 'text',
        strpos( $linkAttributes, ' ' ) == 1 ? $linkAttributes : ' ' . $linkAttributes,
        esc_html( $linkText ),
        $debug ? '<div class="mt-4">' . $readAttributes . '</div>' : ''
    );
}

/**
 * register block
 */
function bsx_blocks_03_button_register_block() {

    if ( ! function_exists( 'register_block_type' ) ) {
        // Gutenberg is not active.
        return;
    }

    $asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');

    wp_register_script(
        'bsx-blocks-03-button',
        plugins_url( 'build/index.js', __FILE__ ),
        $asset_file['dependencies'],
        $asset_file['version']
    );
    register_block_type( 'bsx-blocks/bsx-03-button', array(
        'editor_style' => array( 'bsx-blocks-editor-atf-style', 'bsx-blocks-editor-style' ),
        'editor_script' => 'bsx-blocks-03-button',
        'render_callback' => 'bsx_blocks_03_button_render_callback',
        'attributes' => array(
            'linkHref' => array(
                'type' => 'string',
            ),
            'linkText' => array(
                'type' => 'string',
                'default' => 'BUTTON TEXT MISSING',
            ),
            'linkHash' => array(
                'type' => 'string',
                'default' => '',
            ),
            'linkTarget' => array(
                'type' => 'string',
                'default' => '',
            ),
            'linkRel' => array(
                'type' => 'string',
                'default' => '',
            ),
            'linkState' => array(
                'type' => 'string',
                'default' => 'primary',
            ),
            'linkStateType' => array(
                'type' => 'string',
                'default' => 'outline',
            ),
            'linkAttributes' => array(
                'type' => 'string',
                'default' => '',
            ),
        )
    ) );

    if ( function_exists( 'wp_set_script_translations' ) ) {
        /**
         * May be extended to wp_set_script_translations( 'my-handle', 'my-domain',
         * plugin_dir_path( MY_PLUGIN ) . 'languages' ) ). For details see
         * https://make.wordpress.org/core/2018/11/09/new-javascript-i18n-support-in-wordpress/
         */
        wp_set_script_translations( 'bsx-blocks-03-button', 'bsx-blocks' );
    }

}
add_action( 'init', 'bsx_blocks_03_button_register_block' );
