// TODO: refactor, use external controls, use addClassName()


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


import { addClassNames } from './../_functions/add-class-names.js';
import { 
    belowNavbarToggle,
    // touchFooterToggle,
    textShadowSelect,
    fontWeightSelect,
    // inverseTextColorToggle,
    // headingInheritTextColorToggle,
    // headingInheritFontWeightToggle,
    // marginLeftSelect,
    // marginRightSelect,
    // marginBeforeSelect,
    // marginAfterSelect,
    // paddingBeforeSelect,
    // paddingAfterSelect,
    // paddingLeftSelect,
    // paddingRightSelect,
    // bgColorSelect,
    // roundedToggle,
    // borderSelect,
    // borderStateSelect,
    textColorSelect,
} from './../_functions/controls.js';


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
            textColor,
            fontWeight,
            textShadow,
            belowNavbar,
            marginBefore,
            marginAfter,
            // additionaClassNames,
            className,
        } = attributes;


        // TEST – force editor to add class names to core blocks created by custom attributes
        // const addClassName = ( value ) => {
        //     // already existing class name(s) – might be undefined

        //     // const classNamesArr = typeof className !== 'undefined' ? className.split( ' ' ) : [];

        //     // ignore exiting class names to be able to reset once added class names (use custom setting for additional class names)
        //     const classNamesArr = typeof className !== 'undefined' ? className.split( ' ' ) : [];
        //     // class name value(s) to add (one or multiple space separated)
        //     const valuesArr = value.split( ' ' );
        //     valuesArr.forEach( ( value ) => {
        //         if ( classNamesArr.indexOf( value ) == -1 ) {
        //             // add class name if not already set (avoid infinite adding of equal class name)
        //             classNamesArr.push( value );
        //             setAttributes( { className: classNamesArr.join( ' ' ) } );
        //         }
        //     } );
        // }
        const toAddClassNames = addClassNames( {
            textSize,
            textColor,
            fontWeight,
            textShadow,
            belowNavbar,
            marginBefore,
            marginAfter,
        }, 'bsxui-core-block-wrapper' );
        // if ( allowedBlocks.includes( props.name ) ) {
        //     addClassName( toAddClassNames );
        //     // console.log( 'props: ' + JSON.stringify( props, null, 2 ) );
        // }
        // /TEST


        // TEST 2
        // props.setAttributes( {
        //     className: 'TEST',
        // } );
        // /TEST 2


        const onChangeId = ( value ) => {
            setAttributes( { id: value } );
        };

        const onChangeTextSize = ( value ) => {
            setAttributes( { textSize: value } );
        };
        const onChangeTextColor = ( value ) => {
            setAttributes( { textColor: value } );
        };
        const onChangeFontWeight = ( value ) => {
            setAttributes( { fontWeight: value } );
        };
        const onChangeTextShadow = ( value ) => {
            setAttributes( { textShadow: value } );
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

        // const onChangeAdditionaClassNames = ( value ) => {
        //     setAttributes( { additionaClassNames: value } );
        // };


        const wrappedBlockEdit = (
            <>
                {
                    allowedBlocks.includes( props.name ) && typeof toAddClassNames !== 'undefiend' && toAddClassNames ?
                    (
                        <div className={ toAddClassNames }>
                            <BlockEdit { ...props } />
                        </div>
                    )
                    :
                    (
                        <BlockEdit { ...props } />
                    )
                }
            </>
        );


        // If this block supports custom property and is currently selected, add our UI
        if ( allowedBlocks.includes( props.name ) && props.isSelected ) {
            return (
                <Fragment>
                    {
                        wrappedBlockEdit
                    }
                    <InspectorControls>
                        <PanelBody title={ __( 'BSX global settings', 'bsx-blocks' ) }>
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
                                    { value: 'h5', label: __( 'Heading 5', 'bsx-blocks' ) },
                                    { value: 'h4', label: __( 'Heading 4', 'bsx-blocks' ) },
                                    { value: 'h3', label: __( 'Heading 3', 'bsx-blocks' ) },
                                    { value: 'h2', label: __( 'Heading 2', 'bsx-blocks' ) },
                                    { value: 'h1', label: __( 'Heading 1 (biggest)', 'bsx-blocks' ) },
                                    { value: 'display-4', label: __( 'Large 4 (smallest)', 'bsx-blocks' ) },
                                    { value: 'display-3', label: __( 'Large 3', 'bsx-blocks' ) },
                                    { value: 'display-2', label: __( 'Large 2', 'bsx-blocks' ) },
                                    { value: 'display-1', label: __( 'Large 1 (biggest)', 'bsx-blocks' ) },
                                ] }
                            />
                            {
                                textColorSelect( textColor, onChangeTextColor )
                            }
                            {
                                fontWeightSelect( fontWeight, onChangeFontWeight )
                            }
                            {
                                textShadowSelect( textShadow, onChangeTextShadow )
                            }
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
                        </PanelBody>
                    </InspectorControls>
                    <InspectorAdvancedControls>
                        {
                            belowNavbarToggle( belowNavbar, onChangeBelowNavbar )
                        }
                    </InspectorAdvancedControls>
                </Fragment>
            );
        }

        /*
                            <TextControl 
                                label={ __( 'Additional class(es)', 'bsx-blocks' ) }
                                value={ additionaClassNames } 
                                onChange={ onChangeAdditionaClassNames }
                                help={ __( 'Use this field instead of WordPress native additional class(es)', 'bsx-blocks' ) }
                            />
        */

        return wrappedBlockEdit;
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
    
        if ( typeof settings.attributes.textColor === 'undefined' ) {
            settings.attributes = Object.assign( settings.attributes, {
                textColor: {
                    type: 'string',
                },
            } );
        }
    
        if ( typeof settings.attributes.fontWeight === 'undefined' ) {
            settings.attributes = Object.assign( settings.attributes, {
                fontWeight: {
                    type: 'string',
                },
            } );
        }
    
        if ( typeof settings.attributes.textShadow === 'undefined' ) {
            settings.attributes = Object.assign( settings.attributes, {
                textShadow: {
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
    
        // if ( typeof settings.attributes.additionaClassNames === 'undefined' ) {
        //     settings.attributes = Object.assign( settings.attributes, {
        //         additionaClassNames: {
        //             type: 'string',
        //         },
        //     } );
        // }

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
        textColor,
        fontWeight,
        textShadow,
        belowNavbar,
        marginBefore,
        marginAfter,
        dataTest,
        // additionaClassNames,
    } = attributes;

    // If the current block is valid, add our prop.
    if ( allowedBlocks.includes( blockType.name ) ) {
        //if ( attributes.additionalAttributes ) extraProps.additionalAttributes = attributes.additionalAttributes;

        if ( attributes.id ) extraProps.id = attributes.id;

        if ( attributes.dataTest ) extraProps.dataTest = attributes.dataTest;

        // class names

        const classNames = typeof extraProps.className !== 'undefined' ? extraProps.className.split( ' ' ) : [];

        if ( typeof textSize !== 'undefined' && !! textSize ) {
            
            if ( ! classNames.includes( textSize ) ) {
                // add (if not already set)
                classNames.push( textSize );
            }
        }

        if ( typeof textColor !== 'undefined' && !! textColor ) {
            
            if ( ! classNames.includes( 'text-' + textColor ) ) {
                // add (if not already set)
                classNames.push( 'text-' + textColor );
            }
        }

        if ( typeof fontWeight !== 'undefined' && !! fontWeight ) {
            
            if ( ! classNames.includes( 'font-weight-' + fontWeight ) ) {
                // add (if not already set)
                classNames.push( 'font-weight-' + fontWeight );
            }
        }

        if ( typeof textShadow !== 'undefined' && !! textShadow ) {
            
            if ( ! classNames.includes( 'text-shadow-' + textShadow ) ) {
                // add (if not already set)
                classNames.push( 'text-shadow-' + textShadow );
            }
        }

        if ( typeof belowNavbar !== 'undefined' && belowNavbar ) {
            
            if ( ! classNames.includes( 'below-navbar-content' ) ) {
                // add (if not already set)
                classNames.push( 'below-navbar-content' );
            }
        }

        // check wp internal attributes, add custom class names for certain ones
        // NOTE: added class name will be updated but never removed (as WP currently does too)

        // textAlign
        const alignAllowedValues = [
            'left',
            'center',
            'right',
        ];
        const alignPrefix = 'text-';
        const textAlignAttrVal = attributes.textAlign != undefined ? attributes.textAlign : attributes.align;
        
        if ( !! textAlignAttrVal && alignAllowedValues.includes( textAlignAttrVal ) ) {
            classNames.push( alignPrefix + textAlignAttrVal );
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

        // if ( typeof additionaClassNames !== 'undefined' && additionaClassNames ) {

        //     const additionaClassNamesArr = additionaClassNames.split( ' ' );
        //     additionaClassNamesArr.forEach( ( additionaClassName ) => {
        //         if ( ! classNames.includes( additionaClassName ) ) {
        //             // add (if not already set)
        //             classNames.push( additionaClassName );
        //         }
        //     } );
        // }

        extraProps.className = classNames.join( ' ' );

        // extraProps.className = classnames( extraProps.className, 'mobile-hidden' );
    }

    return extraProps;

}// end addSaveProps()

// on register
addFilter( 
    'blocks.registerBlockType', 
    'bsx-blocks/custom-attributes', 
    addAttribute 
);



// on get editor class name
// Our filter function
// function setBlockCustomClassName( className, blockName ) {
//     console.log( 'setBlockCustomClassName() – blockName: ' + blockName + ', className: ' + className )
//     return blockName === 'core/paragraph' ? className + ' TEST-3' : className;
// }
 
// // Adding the filter
// addFilter(
//     'blocks.getBlockDefaultClassName',
//     'bsx-blocks/set-block-custom-class-name-2',
//     setBlockCustomClassName
// );



// on edit
addFilter( 
    'editor.BlockEdit', 
    'bsx-blocks/add-global-block-settings', 
    addGlobalBlockSettings 
);

// blocks.getSaveElement

// on save
addFilter( 
    'blocks.getSaveContent.extraProps', 
    'bsx-blocks/apply-extra-attributes', 
    addSaveProps 
);
