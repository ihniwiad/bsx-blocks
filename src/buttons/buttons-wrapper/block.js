// TODO: enable inheritance of default attribute values to allow procomposed blocks of equal buttons

const { __, setLocaleData } = wp.i18n;
const {
    registerBlockType,
} = wp.blocks;
const {
    InnerBlocks,
    InspectorControls,
    BlockControls,
    AlignmentToolbar,
} = wp.blockEditor;
const { 
    TextControl,
    PanelBody,
    SelectControl,
} = wp.components;
const { 
    Fragment 
} = wp.element;

const { 
    withSelect,
} = wp.data;


import { addClassNames } from './../../_functions/add-class-names.js';


registerBlockType( 'bsx-blocks/buttons', {
    title: __( 'BSX Buttons', 'bsx-blocks' ),
    icon: 'admin-links',
    category: 'layout',
    attributes: {
        textAlign: {
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

    getEditWrapperProps( attributes ) {
        const {
            textAlign,
            marginBefore,
            marginAfter,
        } = attributes;

        return {
            'data-text-align': textAlign,
            'data-margin-before': marginBefore,
            'data-margin-after': marginAfter,
        };
    },

    edit: withSelect( ( select, { clientId } ) => {
        const { 
            getBlocksByClientId,
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
                textAlign,
                marginBefore,
                marginAfter,
            },
            setAttributes,
            children,
        } = props;

        const hasInnerBlocks = ( children ) => {
            return children.length > 0;
        }

        const template = [ 
            [ 
                'bsx-blocks/button', 
                {
                },
            ],
        ];

        const allowedBlocks = [ 'bsx-blocks/button' ];

        const onChangeTextAlign = ( value ) => {
            setAttributes( { textAlign: value } );
        };

        const onChangeMarginBefore = ( value ) => {
            setAttributes( { marginBefore: value } );
        };

        const onChangeMarginAfter = ( value ) => {
            setAttributes( { marginAfter: value } );
        };

        const alignmentControls = [
            {
                icon: 'editor-alignleft',
                title: __( 'Align left', 'bsx-blocks' ),
                align: 'left',
            },
            {
                icon: 'editor-aligncenter',
                title: __( 'Align center', 'bsx-blocks' ),
                align: 'center',
            },
            {
                icon: 'editor-alignright',
                title: __( 'Align right', 'bsx-blocks' ),
                align: 'right',
            },
        ];

        const wrapperClassNames = addClassNames( { 
            textAlign: textAlign, 
            marginBefore: marginBefore, 
            marginAfter: marginAfter,
        } );

        return [
            <Fragment>
                <BlockControls>
                    <AlignmentToolbar
                        label={ __( 'Alignment', 'bsx-blocks' ) }
                        value={ textAlign }
                        onChange={ onChangeTextAlign }
                        alignmentControls={ alignmentControls }
                    />
                </BlockControls>

                <InspectorControls>
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
                </InspectorControls>
            </Fragment>,
            (
                <div className={ wrapperClassNames }>
                    <InnerBlocks 
                        template={ template }
                        allowedBlocks={ allowedBlocks }
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
                textAlign,
                marginBefore,
                marginAfter,
            },
        } = props;

        const wrapperClassNames = addClassNames( { 
            textAlign: textAlign, 
            marginBefore: marginBefore, 
            marginAfter: marginAfter,
        } );

        return (
            <div className={ wrapperClassNames }>
                <InnerBlocks.Content />
            </div>
        );
    },
} );

