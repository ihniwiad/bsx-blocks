// TODO: add default marginAfter: '5'?

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
    SVG, 
    Path,
} = wp.components;

const { 
    withSelect, 
} = wp.data;


import { svgIcon } from './../_functions/wp-icons.js';

import { addClassNames } from './../_functions/add-class-names.js';
import { 
    belowNavbarToggle,
    marginLeftSelect,
    marginRightSelect,
    marginBeforeSelect,
    marginAfterSelect,
    paddingBeforeSelect,
    paddingAfterSelect,
    paddingLeftSelect,
    paddingRightSelect,
} from './../_functions/controls.js';


const makeContainerClassNames = ( isFluid, containerBreakpoint, sized ) => {

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
    else if ( !! sized ) {
        if ( sized == 'text-column' )
            classNames.push( 'text-column' );
        else {
            // e.g. .sized-container-xl
            classNames.push( 'sized-' + prefix + '-' + sized );
        }
    }
    else {
    	classNames.push( prefix );
    }

    return classNames.join( ' ' );
}


registerBlockType( 'bsx-blocks/container', {
    title: __( 'BSX Container', 'bsx-blocks' ),
    icon: svgIcon( 'container' ),
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
        marginLeft: {
            type: 'string',
        },
        paddingRight: {
            type: 'string',
        },
        sized: {
            type: 'string',
        },
    },

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
                paddingLeft,
                paddingRight,
                sized,
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
        const onChangePaddingLeft = ( value ) => {
            setAttributes( { paddingLeft: value } );
        };
        const onChangePaddingRight = ( value ) => {
            setAttributes( { paddingRight: value } );
        };

        const onChangeSized = ( value ) => {
            setAttributes( { sized: value } );
        };

        let containerClassName = makeContainerClassNames( 
            isFluid, 
            containerBreakpoint, 
            sized, 
        );
        
        containerClassName = addClassNames( {
            belowNavbar, 
            marginBefore, 
            marginAfter, 
            paddingBefore, 
            paddingAfter,
            paddingLeft,
            paddingRight,
        }, containerClassName );

        return [
            <InspectorControls>
                <PanelBody title={ __( 'Container Settings', 'bsx-blocks' ) }>
                    <ToggleControl
                        label={ __( 'Fluid container', 'bsx-blocks' ) }
                        checked={ !! isFluid }
                        onChange={ onChangeIsFluid }
                        disabled={ !! sized }
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
                    <SelectControl 
                        label={ __( 'Sized container', 'bsx-blocks' ) }
                        value={ sized }
                        onChange={ onChangeSized }
                        options={ [
                            { value: '', label: __( '– unset –', 'bsx-blocks' ) },
                            { value: 'text-column', label: __( 'Text Column', 'bsx-blocks' ) },
                            { value: 'lg', label: __( 'LG', 'bsx-blocks' ) },
                            { value: 'xl', label: __( 'XL', 'bsx-blocks' ) },
                        ] }
                        disabled={ isFluid }
                        help={ __( 'Has (non fluid) Container width from this breakpoint up', 'bsx-blocks' ) }
                    />
                </PanelBody>

                <PanelBody title={ __( 'Margin', 'bsx-blocks' ) }>
                    {
                        marginBeforeSelect( marginBefore, onChangeMarginBefore )
                    }
                    {
                        marginAfterSelect( marginAfter, onChangeMarginAfter )
                    }
                </PanelBody>
            </InspectorControls>,
            <InspectorAdvancedControls>
                {
                    belowNavbarToggle( belowNavbar, onChangeBelowNavbar )
                }
                {
                    paddingBeforeSelect( paddingBefore, onChangePaddingBefore )
                }
                {
                    paddingAfterSelect( paddingAfter, onChangePaddingAfter )
                }
                {
                    paddingLeftSelect( paddingLeft, onChangePaddingLeft )
                }
                {
                    paddingRightSelect( paddingRight, onChangePaddingRight )
                }
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
                paddingLeft,
                paddingRight,
                sized,
            },
        } = props;

        let containerClassName = makeContainerClassNames( 
            isFluid, 
            containerBreakpoint, 
            sized, 
        );
        
        containerClassName = addClassNames( {
            belowNavbar, 
            marginBefore, 
            marginAfter, 
            paddingBefore, 
            paddingAfter,
            paddingLeft,
            paddingRight,
        }, containerClassName );

        return (
            <div className={ containerClassName }>
                <InnerBlocks.Content />
            </div>
        );
    },
} );
