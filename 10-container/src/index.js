const { __, setLocaleData } = wp.i18n;
const {
    registerBlockType,
} = wp.blocks;
const {
    InnerBlocks,
    InspectorControls,
    InspectorAdvancedControls,
} = wp.blockEditor;
const { 
    PanelBody,
    ToggleControl,
    SelectControl,
} = wp.components;

const { 
    withSelect, 
} = wp.data;

const makeContainerClassNames = ( isFluid, containerBreakpoint ) => {

    const prefix = 'container';

    const classNames = [];

    if ( isFluid ) {
    	if ( containerBreakpoint === '' ) {
    		classNames.push( prefix + '-fluid' );
    	}
    	else {
    		classNames.push( prefix + '-' + containerBreakpoint );
    	}
    }
    else {
    	classNames.push( prefix );
    }

    // if ( belowNavbar ) {
    //     classNames.push( 'below-navbar-content' );
    // }

    // if ( marginBefore && marginBefore === marginAfter ) {
    // 	classNames.push( 'my-' + marginBefore );
    // }
    // else {
    //     if ( marginBefore ) {
    //     	classNames.push( 'mt-' + marginBefore );
    //     }
    //     if ( marginAfter ) {
    //     	classNames.push( 'mb-' + marginAfter );
    //     }
    // }

    // if ( paddingBefore && paddingBefore === paddingAfter ) {
    //     classNames.push( 'py-' + paddingBefore );
    // }
    // else {
    //     if ( paddingBefore ) {
    //         classNames.push( 'pt-' + paddingBefore );
    //     }
    //     if ( paddingAfter ) {
    //         classNames.push( 'pb-' + paddingAfter );
    //     }
    // }

    return classNames.join( ' ' );
}



// let config = { 
//     belowNavbar, 
//     marginBefore, 
//     marginAfter, 
//     paddingBefore, 
//     paddingAfter, 
//     paddingLeft, 
//     paddingRight,
//     bgColor, 
//     textColor, 
//     rounded, 
// }

// TODO: add to global functions
const addClassNames = ( config, classNamesString ) => {

    const classNames = ( typeof classNamesString != 'undefined' ) ? classNamesString.split( ' ' ) : [];

    // const prefix = 'container';

    // if ( config.isFluid ) {
    //     if ( config.containerBreakpoint === '' ) {
    //         classNames.push( prefix + '-fluid' );
    //     }
    //     else {
    //         classNames.push( prefix + '-' + config.containerBreakpoint );
    //     }
    // }
    // else {
    //     classNames.push( prefix );
    // }

    if ( config.belowNavbar ) {
        classNames.push( 'below-navbar-content' );
    }

    if ( config.marginBefore && config.marginBefore === config.marginAfter ) {
        classNames.push( 'my-' + config.marginBefore );
    }
    else {
        if ( config.marginBefore ) {
            classNames.push( 'mt-' + config.marginBefore );
        }
        if ( config.marginAfter ) {
            classNames.push( 'mb-' + config.marginAfter );
        }
    }

    if ( !! config.paddingBefore && config.paddingBefore === config.paddingAfter && config.paddingBefore === config.paddingLeft && config.paddingBefore === config.paddingRight ) {
        // all
        classNames.push( 'p-' + config.paddingBefore );
    }
    else {

        // top & bottom
        if ( !! config.paddingBefore && config.paddingBefore === config.paddingAfter ) {
            classNames.push( 'py-' + config.paddingBefore );
        }
        else {
            // top
            if ( !! config.paddingBefore ) {
                classNames.push( 'pt-' + config.paddingBefore );
            }
            // bottom
            if ( !! config.paddingAfter ) {
                classNames.push( 'pb-' + config.paddingAfter );
            }
        }

        // left & right
        if ( !! config.paddingLeft && config.paddingLeft === config.paddingRight ) {
            classNames.push( 'px-' + config.paddingLeft );
        }
        else {
            // left
            if ( !! config.paddingLeft ) {
                classNames.push( 'pt-' + config.paddingLeft );
            }
            // right
            if ( !! config.paddingRight ) {
                classNames.push( 'pb-' + config.paddingRight );
            }
        }

    }

    if ( !! config.bgColor ) {
        classNames.push( 'bg-' + config.bgColor );
    }

    if ( !! config.textColor ) {
        classNames.push( 'text-' + config.textColor );
    }

    if ( !! config.rounded ) {
        classNames.push( 'rounded' );
    }

    return classNames.join( ' ' );
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
        belowNavbar: {
            type: 'boolean',
            default: false,
        },
        marginBefore: {
            type: 'string',
            default: '',
        },
        marginAfter: {
            type: 'string',
            default: '',
        },
        paddingBefore: {
            type: 'string',
            default: '',
        },
        paddingAfter: {
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
                belowNavbar,
	            marginBefore,
	            marginAfter,
                paddingBefore,
                paddingAfter,
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

        const onChangeBelowNavbar = ( value ) => {
            setAttributes( { belowNavbar: value } );
        };

        const onChangeMarginBefore = ( value ) => {
            setAttributes( { marginBefore: value } );
        };

        const onChangeMarginAfter = ( value ) => {
            setAttributes( { marginAfter: value } );
        };

        const onChangePaddingBefore = ( value ) => {
            setAttributes( { paddingBefore: value } );
        };

        const onChangePaddingAfter = ( value ) => {
            setAttributes( { paddingAfter: value } );
        };

        let containerClassName = makeContainerClassNames( isFluid, containerBreakpoint );
        const config = {
            belowNavbar: belowNavbar, 
            marginBefore: marginBefore, 
            marginAfter: marginAfter, 
            paddingBefore: paddingBefore, 
            paddingAfter: paddingAfter,
        };
        containerClassName = addClassNames( config, containerClassName );

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
                            { value: '', label: __( '– unset –', 'bsx-blocks' ) },
                            { value: '0', label: __( 'none (0)', 'bsx-blocks' ) },
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
                            { value: '', label: __( '– unset –', 'bsx-blocks' ) },
                            { value: '0', label: __( 'none (0)', 'bsx-blocks' ) },
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
            <InspectorAdvancedControls>
                <ToggleControl
                    label={ __( 'Below navbar', 'bsx-blocks' ) }
                    checked={ !! belowNavbar }
                    onChange={ onChangeBelowNavbar }
                    help={ __( 'Enable if container starts below navbar. If enabled container has spacer top to avoid overlapping its contents by navbar.', 'bsx-blocks' ) }
                />

                <SelectControl 
                    label={ __( 'Padding before', 'bsx-blocks' ) }
                    value={ paddingBefore }
                    onChange={ onChangePaddingBefore }
                    options={ [
                        { value: '', label: __( '– unset –', 'bsx-blocks' ) },
                        { value: '0', label: __( 'none (0)', 'bsx-blocks' ) },
                        { value: '1', label: __( 'extra small', 'bsx-blocks' ) },
                        { value: '2', label: __( 'small', 'bsx-blocks' ) },
                        { value: '3', label: __( 'medium', 'bsx-blocks' ) },
                        { value: '4', label: __( 'large', 'bsx-blocks' ) },
                        { value: '5', label: __( 'extra large', 'bsx-blocks' ) },
                    ] }
                    help={ __( 'Inner spacer before', 'bsx-blocks' ) }
                />
                <SelectControl 
                    label={ __( 'Padding after', 'bsx-blocks' ) }
                    value={ paddingAfter }
                    onChange={ onChangePaddingAfter }
                    options={ [
                        { value: '', label: __( '– unset –', 'bsx-blocks' ) },
                        { value: '0', label: __( 'none (0)', 'bsx-blocks' ) },
                        { value: '1', label: __( 'extra small', 'bsx-blocks' ) },
                        { value: '2', label: __( 'small', 'bsx-blocks' ) },
                        { value: '3', label: __( 'medium', 'bsx-blocks' ) },
                        { value: '4', label: __( 'large', 'bsx-blocks' ) },
                        { value: '5', label: __( 'extra large', 'bsx-blocks' ) },
                    ] }
                    help={ __( 'Inner spacer after', 'bsx-blocks' ) }
                />
            </InspectorAdvancedControls>,
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
                belowNavbar,
	            marginBefore,
	            marginAfter,
                paddingBefore,
                paddingAfter,
            },
        } = props;

        let containerClassName = makeContainerClassNames( isFluid, containerBreakpoint );
        const config = {
            belowNavbar: belowNavbar, 
            marginBefore: marginBefore, 
            marginAfter: marginAfter, 
            paddingBefore: paddingBefore, 
            paddingAfter: paddingAfter,
        };
        containerClassName = addClassNames( config, containerClassName );

        return (
            <div className={ containerClassName }>
                <InnerBlocks.Content />
            </div>
        );
    },
} );
