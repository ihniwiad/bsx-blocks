const { __, setLocaleData } = wp.i18n;
const {
    registerBlockType,
} = wp.blocks;
const {
    InspectorControls,
    RichText,
} = wp.blockEditor;
const { 
    PanelBody,
    SelectControl,
    SVG, 
    Path,
} = wp.components;


// functions imports


import { svgIcon } from './../../_functions/wp-icons.js';

import { addClassNames } from './../../_functions/add-class-names.js';


registerBlockType( 'bsx-blocks/button-label', {
    title: __( 'BSX Button Label', 'bsx-blocks' ),
    icon: svgIcon( 'button-label' ),
    category: 'layout',
    parent: [ 'bsx-blocks/buttons' ],
    attributes: {
        content: {
            type: 'array',
            source: 'children',
            selector: 'span',
        },
        display: {
            type: 'string',
            default: '',
        },
        marginLeft: {
            type: 'string',
            default: '',
        },
        marginRight: {
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

    edit: ( props ) => {

        const {
            className,
            attributes: {
                content,
                display,
                marginLeft,
                marginRight,
                marginBefore,
                marginAfter,
            },
            setAttributes,
            isSelected,
        } = props;

        const onChangeContent = ( value ) => {
            setAttributes( { content: value } );
        };

        const onChangeDisplay = ( value ) => {
            setAttributes( { display: value } );
        };

        const onChangeMarginLeft = ( value ) => {
            setAttributes( { marginLeft: value } );
        };

        const onChangeMarginRight = ( value ) => {
            setAttributes( { marginRight: value } );
        };

        const onChangeMarginBefore = ( value ) => {
            setAttributes( { marginBefore: value } );
        };

        const onChangeMarginAfter = ( value ) => {
            setAttributes( { marginAfter: value } );
        };

        const onChangeIgnoreMailtoSpamProtection = ( value ) => {
            setAttributes( { ignoreMailtoSpamProtection: ! value } );
        };

        const labelClassNames = addClassNames( {
            display,
            marginLeft, 
            marginRight, 
            marginBefore,
            marginAfter,
        } );

        return [
            <InspectorControls>
                <PanelBody title={ __( 'Button Label appearance (optional)', 'bsx-blocks' ) }>
                    <SelectControl label={ __( 'Display', 'bsx-blocks' ) }
                        value={ display }
                        onChange={ onChangeDisplay }
                        options={ [
                            { value: '', label: __( '– unset –', 'bsx-blocks' ) },
                            { value: 'inline-block', label: __( 'Inline-block', 'bsx-blocks' ) },
                        ] }
                    />
                </PanelBody>

                <PanelBody title={ __( 'Margin (optional)', 'bsx-blocks' ) }>
                    <SelectControl 
                        label={ __( 'Margin left', 'bsx-blocks' ) }
                        value={ marginLeft }
                        onChange={ onChangeMarginLeft }
                        options={ [
                            { value: '', label: __( '– unset –', 'bsx-blocks' ) },
                            { value: '0', label: __( 'none (0)', 'bsx-blocks' ) },
                            { value: '1', label: __( 'extra small', 'bsx-blocks' ) },
                            { value: '2', label: __( 'small', 'bsx-blocks' ) },
                            { value: '3', label: __( 'medium', 'bsx-blocks' ) },
                        ] }
                    />
                    <SelectControl 
                        label={ __( 'Margin right', 'bsx-blocks' ) }
                        value={ marginRight }
                        onChange={ onChangeMarginRight }
                        options={ [
                            { value: '', label: __( '– unset –', 'bsx-blocks' ) },
                            { value: '0', label: __( 'none (0)', 'bsx-blocks' ) },
                            { value: '1', label: __( 'extra small', 'bsx-blocks' ) },
                            { value: '2', label: __( 'small', 'bsx-blocks' ) },
                            { value: '3', label: __( 'medium', 'bsx-blocks' ) },
                        ] }
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
                </PanelBody>
            </InspectorControls>,
            (
                <>
                    <RichText
                        tagName="span"
                        className={ labelClassNames }
                        multiline={ false }
                        placeholder={ __( 'Add label...', 'bsx-blocks' ) }
                        value={ content }
                        onChange={ onChangeContent }
                        allowedFormats={ [] }
                        keepPlaceholderOnFocus
                    />
                </>
            )
        ];
    },
    save: ( props ) => {
        const {
            className,
            attributes: {
                content,
                display,
                marginLeft,
                marginRight,
                marginBefore,
                marginAfter,
            },
        } = props;
        
        const labelClassNames = addClassNames( {
            display,
            marginLeft, 
            marginRight, 
            marginBefore,
            marginAfter,
        } );

        return (
            <>
                {
                    content && ! RichText.isEmpty( content ) && (
                        <RichText.Content 
                            tagName="span" 
                            value={ content } 
                            className={ labelClassNames }
                        />
                    )
                }
            </>
        );
    },
} );
