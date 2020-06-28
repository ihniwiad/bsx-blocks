const { __, setLocaleData } = wp.i18n;
const {
    registerBlockType,
} = wp.blocks;
const {
    InnerBlocks,
    InspectorControls,
} = wp.blockEditor;
const { 
    PanelBody,
    ToggleControl,
    SelectControl,
} = wp.components;

const { 
    withSelect, 
} = wp.data;

const makeContainerClassNames = ( isFluid, containerBreakpoint, marginBefore, marginAfter ) => {

    const prefix = 'container';

    const containerClassNames = [];

    if ( isFluid ) {
    	if ( containerBreakpoint === '' ) {
    		containerClassNames.push( prefix + '-fluid' );
    	}
    	else {
    		containerClassNames.push( prefix + '-' + containerBreakpoint );
    	}
    }
    else {
    	containerClassNames.push( prefix );
    }

    if ( marginBefore && marginBefore === marginAfter ) {
    	containerClassNames.push( 'my-' + marginBefore );
    }
    else {
	    if ( marginBefore ) {
	    	containerClassNames.push( 'mt-' + marginAfter );
	    }
	    if ( marginAfter ) {
	    	containerClassNames.push( 'mb-' + marginAfter );
	    }
    }

    return containerClassNames.join( ' ' );
}


registerBlockType( 'bsx-blocks/container', {
    title: __( 'BSX Container', 'bsx-blocks' ),
    icon: 'welcome-widgets-menus',
    category: 'layout',
    attributes: {
        isFluid: {
            type: 'boolean',
            default: false,
        },
        containerBreakpoint: {
            type: 'string',
            default: '',
        },
        marginBefore: {
            type: 'string',
            default: '',
        },
        marginAfter: {
            type: 'string',
            default: '',
        },
    },

    /*
    getEditWrapperProps() {
        return {
            'data-editor-title': 'show',
        };
    },
    */

    edit: withSelect( ( select, { clientId } ) => {
        const { 
            getBlocksByClientId,
            getBlockAttributes, 
        } = select( 'core/block-editor' );

        const children = getBlocksByClientId( clientId )[ 0 ]
            ? getBlocksByClientId( clientId )[ 0 ].innerBlocks
            : [];

        return {
            children,
        };
    } )( ( props ) => {

        const {
            className,
            attributes: {
	            isFluid,
	            containerBreakpoint,
	            marginBefore,
	            marginAfter,
            },
            setAttributes,
            children,
        } = props;

        const hasInnerBlocks = ( children ) => {
            return children.length > 0;
        }

        const onChangeIsFluid = ( value ) => {
        	if ( value === false ) {
        		// reset container breakpoint
        		setAttributes( { containerBreakpoint: '' } );
        	}
            setAttributes( { isFluid: value } );
        };

        const onChangeContainerBreakpoint = ( value ) => {
            setAttributes( { containerBreakpoint: value } );
        };

        const onChangeMarginBefore = ( value ) => {
            setAttributes( { marginBefore: value } );
        };

        const onChangeMarginAfter = ( value ) => {
            setAttributes( { marginAfter: value } );
        };

        const containerClassName = makeContainerClassNames( isFluid, containerBreakpoint, marginBefore, marginAfter );

        return [
            <InspectorControls>
                <PanelBody title={ __( 'Container Settings', 'bsx-blocks' ) }>
                    <ToggleControl
                        label={ __( 'Fluid container', 'bsx-blocks' ) }
                        checked={ !! isFluid }
                        onChange={ onChangeIsFluid }
                        help={ __( 'Fluid width from XS up', 'bsx-blocks' ) }
                    />
                    <SelectControl 
                        label={ __( 'Non fluid Breakpoint', 'bsx-blocks' ) }
                        value={ containerBreakpoint }
                        onChange={ onChangeContainerBreakpoint }
                        options={ [
                            { value: '', label: __( '– unset –', 'bsx-blocks' ) },
                            { value: 'sm', label: __( 'SM', 'bsx-blocks' ) },
                            { value: 'md', label: __( 'MD', 'bsx-blocks' ) },
                            { value: 'lg', label: __( 'LG', 'bsx-blocks' ) },
                            { value: 'xl', label: __( 'XL', 'bsx-blocks' ) },
                        ] }
                        disabled={ ! isFluid }
                        help={ __( 'Has (non fluid) Container width from this breakpoint up', 'bsx-blocks' ) }
                    />
                </PanelBody>

                <PanelBody title={ __( 'Margin', 'bsx-blocks' ) }>
                    <SelectControl 
                        label={ __( 'Margin before', 'bsx-blocks' ) }
                        value={ marginBefore }
                        onChange={ onChangeMarginBefore }
                        options={ [
                            { value: '', label: __( '– none –', 'bsx-blocks' ) },
                            { value: '1', label: __( 'extra small', 'bsx-blocks' ) },
                            { value: '2', label: __( 'small', 'bsx-blocks' ) },
                            { value: '3', label: __( 'medium', 'bsx-blocks' ) },
                            { value: '4', label: __( 'large', 'bsx-blocks' ) },
                            { value: '5', label: __( 'extra large', 'bsx-blocks' ) },
                        ] }
                        help={ __( 'Spacer before Container', 'bsx-blocks' ) }
                    />
                    <SelectControl 
                        label={ __( 'Margin after', 'bsx-blocks' ) }
                        value={ marginAfter }
                        onChange={ onChangeMarginAfter }
                        options={ [
                            { value: '', label: __( '– none –', 'bsx-blocks' ) },
                            { value: '1', label: __( 'extra small', 'bsx-blocks' ) },
                            { value: '2', label: __( 'small', 'bsx-blocks' ) },
                            { value: '3', label: __( 'medium', 'bsx-blocks' ) },
                            { value: '4', label: __( 'large', 'bsx-blocks' ) },
                            { value: '5', label: __( 'extra large', 'bsx-blocks' ) },
                        ] }
                        help={ __( 'Spacer after Container', 'bsx-blocks' ) }
                    />
                </PanelBody>
            </InspectorControls>,
            (
            	<div className={ containerClassName }>
                    <InnerBlocks 
                        renderAppender={
                            hasInnerBlocks
                            ? undefined
                            : () => <InnerBlocks.ButtonBlockAppender />
                        }
                    />
                </div>
            )
        ];
    } ),
    save: ( props ) => {
        const {
            className,
            attributes: {
	            isFluid,
	            containerBreakpoint,
	            marginBefore,
	            marginAfter,
            },
        } = props;

        const containerClassName = makeContainerClassNames( isFluid, containerBreakpoint, marginBefore, marginAfter );

        return (
            <div className={ containerClassName }>
                <InnerBlocks.Content />
            </div>
        );
    },
} );
