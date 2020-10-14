/**
 * External Dependencies
 */
//import classnames from 'classnames';

/**
 * WordPress Dependencies
 */
const { __ } = wp.i18n;
const { addFilter } = wp.hooks;
const { Fragment }  = wp.element;
const { InspectorAdvancedControls } = wp.blockEditor;
const { createHigherOrderComponent } = wp.compose;
const { 
    ToggleControl, 
    TextControl,
    SelectControl,
} = wp.components;


// restrict to specific block names
const allowedBlocks = [ 
    'core/paragraph', 
    'core/heading',
    'bsx-blocks/wrapper',
];


/**
 * Add custom attribute for mobile visibility.
 *
 * @param {Object} settings Settings for the block.
 *
 * @return {Object} settings Modified settings.
 */
function addAttributes( settings ) {
    
    //check if object exists for old Gutenberg version compatibility
    //add allowedBlocks restriction
    if ( typeof settings.attributes !== 'undefined' && allowedBlocks.includes( settings.name ) ) {
    
        if ( typeof settings.attributes.belowNavbar === 'undefined' ) {
            settings.attributes = Object.assign( settings.attributes, {
                belowNavbar: { 
                    type: 'boolean',
                    default: false,
                }
            } );
        }
    
        if ( typeof settings.attributes.id === 'undefined' ) {
            settings.attributes = Object.assign( settings.attributes, {
                id: { 
                    type: 'string',
                }
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
    
    }

    return settings;
}

/**
 * Add mobile visibility controls on Advanced Block Panel.
 *
 * @param {function} BlockEdit Block edit component.
 *
 * @return {function} BlockEdit Modified block edit component.
 */
const addAdvancedSettings = createHigherOrderComponent( ( BlockEdit ) => {
    return ( props ) => {

        const {
            name,
            attributes,
            setAttributes,
            isSelected,
        } = props;

        const {
            id,
            belowNavbar,
            marginBefore,
            marginAfter,
        } = attributes;

        const onChangeId = ( value ) => {
            setAttributes( { id: value } );
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
        
        return (
            <Fragment>
                <BlockEdit {...props} />
                { isSelected && allowedBlocks.includes( name ) &&
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
                }
            </Fragment>
        );
    };
}, 'addAdvancedSettings' );

/**
 * Add custom element class in save element.
 *
 * @param {Object} extraProps     Block element.
 * @param {Object} blockType      Blocks object.
 * @param {Object} attributes     Blocks attributes.
 *
 * @return {Object} extraProps Modified block element.
 */
function addExtraProps( extraProps, blockType, attributes ) {

    const { 
        belowNavbar,
        marginBefore,
        marginAfter,
    } = attributes;
    
    //check if attribute exists for old Gutenberg version compatibility
    //add allowedBlocks restriction
    if ( allowedBlocks.includes( blockType.name ) ) {

        const classNames = typeof extraProps.className !== 'undefined' ? extraProps.className.split( ' ' ) : [];

        if ( typeof belowNavbar !== 'undefined' && belowNavbar ) {
            
            if ( ! classNames.includes( 'below-navbar-content' ) ) {
                // add (if not already set)
                classNames.push( 'below-navbar-content' );
            }
        }

        if ( typeof marginBefore !== 'undefined' && marginBefore ) {
            
            if ( ! ( classNames.includes( 'mt-' + marginBefore ) || classNames.includes( 'my-' + marginBefore ) ) ) {
                // add (if not already set)
                classNames.push( 'mt-' + marginBefore );
            }

        }

        if ( typeof marginAfter !== 'undefined' && marginAfter ) {
            
            if ( ! ( classNames.includes( 'mb-' + marginAfter ) || classNames.includes( 'my-' + marginAfter ) ) ) {
                // add (if not already set)
                classNames.push( 'mb-' + marginAfter );
            }

        }

        extraProps.className = classNames.join( ' ' );

    }

    return extraProps;
}

//add filters

addFilter(
    'blocks.registerBlockType',
    'bsx-blocks/add-custom-attributes',
    addAttributes
);

addFilter(
    'editor.BlockEdit',
    'bsx-blocks/custom-advanced-control',
    addAdvancedSettings
);

addFilter(
    'blocks.getSaveContent.extraProps',
    'bsx-blocks/apply-extra-class',
    addExtraProps
);

