
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { addFilter } = wp.hooks;
const { TextControl, PanelBody } = wp.components;
const { createHigherOrderComponent } = wp.compose;
const { InspectorControls } = wp.blockEditor;


//restrict to specific block names
const allowedBlocks = [
    'core/paragraph',
    'core/image',
    'core/heading',
    'bsx-blocks/wrapper',
];


/**
 * Override the default edit UI to include a new block inspector control for
 * adding our custom control.
 *
 * @param {function|Component} BlockEdit Original component.
 *
 * @return {string} Wrapped component.
 */
export const addGlobalBlockSettings = createHigherOrderComponent( ( BlockEdit ) => {

    return ( props ) => {

        // If this block supports custom property and is currently selected, add our UI
        if ( allowedBlocks.includes( props.name ) && props.isSelected ) {
            return (
                <Fragment>
                    <BlockEdit { ...props } />
                    <InspectorControls>
                        <PanelBody title={ __( 'BSX Global Settings' ) }>
                            <TextControl
                                label={ __( 'ID (optional)' ) }
                                help={ __( 'Add ID to element, e.g. as anchor.' ) }
                                value={ props.attributes.id || '' }
                                onChange={ ( value ) => {
                                    props.setAttributes( {
                                        id: value,
                                    } );
                                } } />
                            <TextControl
                                label={ __( 'data-test attribute (optional)' ) }
                                help={ __( 'This is only a test.' ) }
                                value={ props.attributes.dataTest || '' }
                                onChange={ ( value ) => {
                                    props.setAttributes( {
                                        dataTest: value,
                                    } );
                                } } />
                        </PanelBody>
                    </InspectorControls>
                </Fragment>
            );
        }

        return <BlockEdit { ...props } />;
    };
}, 'addGlobalBlockSettings' );

addFilter( 'editor.BlockEdit', 'bsx-blocks/add-global-block-settings', addGlobalBlockSettings );


/**
 * Filters registered block settings, extending attributes with our custom data.
 *
 * @param {Object} settings Original block settings.
 *
 * @return {Object} Filtered block settings.
 */
export function addAttribute( settings ) {

    /*
    // If this is a valid block
    if ( allowedBlocks.includes( settings.name ) ) {

        // Use Lodash's assign to gracefully handle if attributes are undefined
        settings.attributes = assign( settings.attributes, {
            additionalAttributes: {
                type: 'string',
            },
        } );
    }
    */


    if ( typeof settings.attributes !== 'undefined' && allowedBlocks.includes( settings.name ) ) {
    
        if ( typeof settings.attributes.id === 'undefined' ) {
            settings.attributes = Object.assign( settings.attributes, {
                id: {
                    type: 'string',
                },
            } );
        }
    
        /*if ( typeof settings.attributes.additionalAttributes === 'undefined' ) {
            settings.attributes = Object.assign( settings.attributes, {
                additionalAttributes: {
                    type: 'string',
                },
            } );
        }*/
    
        if ( typeof settings.attributes.dataTest === 'undefined' ) {
            settings.attributes = Object.assign( settings.attributes, {
                dataTest: {
                    type: 'string',
                },
            } );
        }
    
    }


    return settings;

}// end addAttribute()


/**
 * Override props assigned to save component to inject our custom data.
 * This is only done if the component is a valid block type.
 *
 * @param {Object} extraProps Additional props applied to save element.
 * @param {Object} blockType  Block type.
 * @param {Object} attributes Current block attributes.
 *
 * @return {Object} Filtered props applied to save element.
 */
export function addSaveProps( extraProps, blockType, attributes ) {

    // If the current block is valid, add our prop.
    if ( allowedBlocks.includes( blockType.name ) ) {
        //if ( attributes.additionalAttributes ) extraProps.additionalAttributes = attributes.additionalAttributes;
        if ( attributes.id ) extraProps.id = attributes.id;
        if ( attributes.dataTest ) extraProps.dataTest = attributes.dataTest;
        // extraProps.className = classnames( extraProps.className, 'mobile-hidden' );
    }

    return extraProps;

}// end addSaveProps()

addFilter( 'blocks.registerBlockType', 'bsx-blocks/custom-attributes', addAttribute );
addFilter( 'blocks.getSaveContent.extraProps', 'bsx-blocks/apply-extra-attributes', addSaveProps );
