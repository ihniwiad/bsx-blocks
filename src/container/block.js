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
        
        containerClassName = addClassNames( {
            belowNavbar, 
            marginBefore, 
            marginAfter, 
            paddingBefore, 
            paddingAfter,
        }, containerClassName );

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
        
        containerClassName = addClassNames( {
            belowNavbar, 
            marginBefore, 
            marginAfter, 
            paddingBefore, 
            paddingAfter,
        }, containerClassName );

        return (
            <div className={ containerClassName }>
                <InnerBlocks.Content />
            </div>
        );
    },
} );
