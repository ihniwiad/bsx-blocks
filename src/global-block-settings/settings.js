const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { addFilter } = wp.hooks;
const { 
    ToggleControl,
    TextControl, 
    PanelBody,
    SelectControl,
} = wp.components;
const { createHigherOrderComponent } = wp.compose;
const { 
    InspectorControls, 
    InspectorAdvancedControls,
} = wp.blockEditor;


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
            belowNavbar,
            marginBefore,
            marginAfter,
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

        const onChangeBelowNavbar = ( value ) => {
            setAttributes( { belowNavbar: value } );
        };
        
        const onChangeMarginBefore = ( value ) => {
            setAttributes( { marginBefore: value } );
        };

        const onChangeMarginAfter = ( value ) => {
            setAttributes( { marginAfter: value } );
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
                    <InspectorAdvancedControls>
                        <TextControl 
                            label={ __( 'ID', 'bsx-blocks' ) }
                            value={ id } 
                            onChange={ onChangeId }
                            help={ __( 'Add ID if necessary (optional).', 'bsx-blocks' ) }
                        />
                        <ToggleControl
                            label={ __( 'Below navbar', 'bsx-blocks' ) }
                            checked={ !! belowNavbar }
                            onChange={ onChangeBelowNavbar }
                            help={ __( 'Enable if container starts below navbar. If enabled container has spacer top to avoid overlapping its contents by navbar.', 'bsx-blocks' ) }
                        />
                        <SelectControl 
                            label={ __( 'Margin before', 'bsx-blocks' ) }
                            value={ marginBefore }
                            onChange={ onChangeMarginBefore }
                            options={ [
                                { value: '', label: __( '– unset –', 'bsx-blocks' ) },
                                { value: '0', label: __( 'none (0)', 'bsx-blocks' ) },
                                { value: '1', label: __( 'extra small', 'bsx-blocks' ) },
                                { value: '2', label: __( 'small', 'bsx-blocks' ) },
                                { value: '3', label: __( 'medium', 'bsx-blocks' ) },
                                { value: '4', label: __( 'large', 'bsx-blocks' ) },
                                { value: '5', label: __( 'extra large', 'bsx-blocks' ) },
                            ] }
                            help={ __( 'Spacer before element', 'bsx-blocks' ) }
                        />
                        <SelectControl 
                            label={ __( 'Margin after', 'bsx-blocks' ) }
                            value={ marginAfter }
                            onChange={ onChangeMarginAfter }
                            options={ [
                                { value: '', label: __( '– unset –', 'bsx-blocks' ) },
                                { value: '0', label: __( 'none (0)', 'bsx-blocks' ) },
                                { value: '1', label: __( 'extra small', 'bsx-blocks' ) },
                                { value: '2', label: __( 'small', 'bsx-blocks' ) },
                                { value: '3', label: __( 'medium', 'bsx-blocks' ) },
                                { value: '4', label: __( 'large', 'bsx-blocks' ) },
                                { value: '5', label: __( 'extra large', 'bsx-blocks' ) },
                            ] }
                            help={ __( 'Spacer after element', 'bsx-blocks' ) }
                        />
                    </InspectorAdvancedControls>
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
    
        if ( typeof settings.attributes.belowNavbar === 'undefined' ) {
            settings.attributes = Object.assign( settings.attributes, {
                belowNavbar: { 
                    type: 'boolean',
                    default: false,
                }
            } );
        }
    
        if ( typeof settings.attributes.textSize === 'undefined' ) {
            settings.attributes = Object.assign( settings.attributes, {
                textSize: {
                    type: 'string',
                },
            } );
        }
    
        if ( typeof settings.attributes.marginBefore === 'undefined' ) {
            settings.attributes = Object.assign( settings.attributes, {
                marginBefore: { 
                    type: 'string',
                }
            } );
        }
    
        if ( typeof settings.attributes.marginAfter === 'undefined' ) {
            settings.attributes = Object.assign( settings.attributes, {
                marginAfter: { 
                    type: 'string',
                }
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

        // add custom props in case of several wp props
        /*
        if ( typeof settings.attributes.align !== 'undefined' ) {
            settings.attributes = Object.assign( settings.attributes, {
                textAlign: {
                    type: 'string',
                },
            } );
        }
        else {
            // TODO: remove attr?
        }
        */
    
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
        belowNavbar,
        marginBefore,
        marginAfter,
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

        // check wp internal attributes, add custom class names for certain ones
        // NOTE: addedclass name will be updated but never removed (as WP currently does too)

        // text align
        const alignAllowedValues = [
            'left',
            'center',
            'right',
        ];
        const alignPrefix = 'text-';
        if ( !! attributes.align && alignAllowedValues.includes( attributes.align ) ) {
            classNames.push( alignPrefix + attributes.align );
        }
        else {
            for ( let i = 0; i < classNames.length; i++ ) {
                if ( 
                    classNames[ i ].indexOf( alignPrefix ) == 0 
                    && alignAllowedValues.includes( classNames[ i ].substring( alignPrefix.length ) ) 
                ) {
                    classNames.splice( i, 1 );
                }
            }
        };


        if ( typeof marginBefore !== 'undefined' && !! marginBefore && marginBefore == marginAfter ) {
            if ( ! ( classNames.includes( 'my-' + marginBefore ) ) ) {
                // add (if not already set)
                classNames.push( 'my-' + marginBefore );
            }
        }
        else {
            if ( typeof marginBefore !== 'undefined' && !! marginBefore ) {
                
                if ( ! ( classNames.includes( 'mt-' + marginBefore ) || classNames.includes( 'my-' + marginBefore ) ) ) {
                    // add (if not already set)
                    classNames.push( 'mt-' + marginBefore );
                }

            }
            if ( typeof marginAfter !== 'undefined' && !! marginAfter ) {
                
                if ( ! ( classNames.includes( 'mb-' + marginAfter ) || classNames.includes( 'my-' + marginAfter ) ) ) {
                    // add (if not already set)
                    classNames.push( 'mb-' + marginAfter );
                }

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
