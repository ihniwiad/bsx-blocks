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
const { ToggleControl, TextControl } = wp.components;


//restrict to specific block names
const allowedBlocks = [ 
    'core/paragraph', 
    'core/heading',
    'bsx-blocks/lazy-img',
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
        } = attributes;
        
        
        return (
            <Fragment>
                <BlockEdit {...props} />
                { isSelected && allowedBlocks.includes( name ) &&
                    <InspectorAdvancedControls>
                        <TextControl
                            label={ __( 'ID' ) }
                            help={ __( 'Add ID if necessary (optional).' ) }
                            value={ id || '' }
                            onChange={ ( value ) => {
                                props.setAttributes( {
                                    id: value,
                                } );
                            } } 
                        />
                        <ToggleControl
                            label={ __( 'Below narbar' ) }
                            checked={ !! belowNavbar }
                            onChange={ () => setAttributes( {  belowNavbar: ! belowNavbar } ) }
                            help={ !! belowNavbar ? __( 'Block is overlayed by navbar.' ) : __( 'Block is not overlayed by navbar.' ) }
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

    const { belowNavbar } = attributes;
    
    //check if attribute exists for old Gutenberg version compatibility
    //add allowedBlocks restriction
    if ( typeof belowNavbar !== 'undefined' && belowNavbar && allowedBlocks.includes( blockType.name ) ) {

        const classNames = typeof extraProps.className !== 'undefined' ? extraProps.className.split( ' ' ) : [];
        
        if ( ! classNames.includes( 'below-navbar-content' ) ) {
            // add (if not already set)
            classNames.push( 'below-navbar-content' );
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

