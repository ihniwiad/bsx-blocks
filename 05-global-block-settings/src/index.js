
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { addFilter } = wp.hooks;
const { 
    TextControl, 
    PanelBody,
    SelectControl,
} = wp.components;
const { createHigherOrderComponent } = wp.compose;
const { InspectorControls } = wp.blockEditor;


//restrict to specific block names
const allowedBlocks = [
    'core/paragraph',
    'core/heading',
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

        const {
            name,
            attributes,
            setAttributes,
            isSelected,
        } = props;

        const {
            id,
            textSize,
            dataTest,
        } = attributes;

        const onChangeId = ( value ) => {
            setAttributes( { id: value } );
        };

        const onChangeTextSize = ( value ) => {
            setAttributes( { textSize: value } );
        };

        const onChangeDataTest = ( value ) => {
            setAttributes( { dataTest: value } );
        };

        // If this block supports custom property and is currently selected, add our UI
        if ( allowedBlocks.includes( props.name ) && props.isSelected ) {
            return (
                <Fragment>
                    <BlockEdit { ...props } />
                    <InspectorControls>
                        <PanelBody title={ __( 'BSX Global Settings', 'bsx-blocks' ) }>
                            <TextControl 
                                label={ __( 'ID', 'bsx-blocks' ) }
                                value={ id } 
                                onChange={ onChangeId }
                                help={ __( 'Add ID if necessary (optional).', 'bsx-blocks' ) }
                            />
                            <SelectControl 
                                label={ __( 'Text size (optional)', 'bsx-blocks' ) }
                                value={ textSize }
                                onChange={ onChangeTextSize }
                                options={ [
                                    { value: '', label: __( '– unset –', 'bsx-blocks' ) },
                                    { value: 'lead', label: __( 'Larger', 'bsx-blocks' ) },
                                    { value: 'small', label: __( 'Smaller', 'bsx-blocks' ) },
                                    { value: 'h6', label: __( 'Heading 6 (smallest)', 'bsx-blocks' ) },
                                    { value: 'h2', label: __( 'Heading 5', 'bsx-blocks' ) },
                                    { value: 'h3', label: __( 'Heading 4', 'bsx-blocks' ) },
                                    { value: 'h4', label: __( 'Heading 3', 'bsx-blocks' ) },
                                    { value: 'h5', label: __( 'Heading 2', 'bsx-blocks' ) },
                                    { value: 'h6', label: __( 'Heading 1 (biggest)', 'bsx-blocks' ) },
                                    { value: 'display-4', label: __( 'Large 4 (smallest)', 'bsx-blocks' ) },
                                    { value: 'display-3', label: __( 'Large 3', 'bsx-blocks' ) },
                                    { value: 'display-2', label: __( 'Large 2', 'bsx-blocks' ) },
                                    { value: 'display-1', label: __( 'Large 1 (biggest)', 'bsx-blocks' ) },
                                ] }
                            />
                            <TextControl
                                label={ __( 'data-test attribute (optional)' ) }
                                value={ dataTest }
                                onChange={ onChangeDataTest }
                                help={ __( 'This is only a test.' ) }
                            />
                        </PanelBody>
                    </InspectorControls>
                </Fragment>
            );
        }

        return <BlockEdit { ...props } />;
    };
}, 'addGlobalBlockSettings' );



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
    
        if ( typeof settings.attributes.textSize === 'undefined' ) {
            settings.attributes = Object.assign( settings.attributes, {
                textSize: {
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

    const { 
        id,
        textSize,
        dataTest,
    } = attributes;

    // If the current block is valid, add our prop.
    if ( allowedBlocks.includes( blockType.name ) ) {
        //if ( attributes.additionalAttributes ) extraProps.additionalAttributes = attributes.additionalAttributes;

        if ( attributes.id ) extraProps.id = attributes.id;

        if ( attributes.dataTest ) extraProps.dataTest = attributes.dataTest;

        // class names

        const classNames = typeof extraProps.className !== 'undefined' ? extraProps.className.split( ' ' ) : [];

        if ( typeof textSize !== 'undefined' && textSize ) {
            
            if ( ! classNames.includes( textSize ) ) {
                // add (if not already set)
                classNames.push( textSize );
            }
        }

        extraProps.className = classNames.join( ' ' );

        // extraProps.className = classnames( extraProps.className, 'mobile-hidden' );
    }

    return extraProps;

}// end addSaveProps()

addFilter( 
    'editor.BlockEdit', 
    'bsx-blocks/add-global-block-settings', 
    addGlobalBlockSettings 
);
addFilter( 
    'blocks.registerBlockType', 
    'bsx-blocks/custom-attributes', 
    addAttribute 
);
addFilter( 
    'blocks.getSaveContent.extraProps', 
    'bsx-blocks/apply-extra-attributes', 
    addSaveProps 
);
