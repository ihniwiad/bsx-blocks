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
    TextControl,
    ToggleControl,
    SelectControl,
    Button,
    SVG, 
    Path,
} = wp.components;

const { 
    withSelect, 
} = wp.data;


import { addClassNames } from './../_functions/add-class-names.js';

import { makeSaveAttributes } from './../_functions/attributes.js';


registerBlockType( 'bsx-blocks/section', {
    title: __( 'BSX Section', 'bsx-blocks' ),
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" role="img" focusable="false">
            <path d="M14,4h-3v2h3V4z M8.29,5.71C8.48,5.9,8.73,6,9,6h0V3.59L7.71,2.29C7.52,2.1,7.26,2,7,2H6v2h0.58L8.29,5.71z M19,7V5 c0-0.27-0.1-0.52-0.29-0.71C18.52,4.1,18.27,4,18,4h-2v2h1v9L3,15v-2H1v3c0,0.26,0.11,0.52,0.29,0.71C1.48,16.89,1.74,17,2,17h2v-2 h2v2h3v-2h2v2h3v-2h2v2h2c0.27,0,0.52-0.1,0.71-0.29C18.89,16.52,19,16.27,19,16v-2h-2v-2h2V9h-2V7H19z M3,4h1V2H2 C1.74,2,1.48,2.11,1.29,2.29C1.11,2.48,1,2.74,1,3v3h2V4z M3,8H1v3h2V8z"/>
        </svg>
    ),
    category: 'layout',
    attributes: {
        templateName: {
            type: 'string',
        },
        belowNavbar: {
            type: 'boolean',
            default: false,
        },
        id: {
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
                templateName,
	            belowNavbar,
	            id,
	            marginBefore,
	            marginAfter,
            },
            setAttributes,
            children,
        } = props;

        const hasInnerBlocks = ( children ) => {
            return children.length > 0;
        }

        const templates = [
            {
                name: 'empty',
                title: __( 'Empty', 'bsx-blocks' ),
                icon: (
                    <svg 
                        width="48" 
                        height="48" 
                        viewBox="0 0 48 48" 
                        xmlns="http://www.w3.org/2000/svg" 
                        role="img" 
                        aria-hidden="true" 
                        focusable="false"
                    >
                        <path 
                            fill-rule="evenodd" 
                            clip-rule="evenodd" 
                            d="M23.58 26.28c0-.600003.1499985-1.099998.45-1.5.3000015-.400002.7433304-.8399976 1.33-1.32.5600028-.4533356.9833319-.8699981 1.27-1.25s.43-.8433306.43-1.39c0-.5466694-.1733316-1.0566643-.52-1.53s-.986662-.71-1.92-.71c-1.1066722 0-1.8533314.2766639-2.24.83-.3866686.5533361-.58 1.1766632-.58 1.87 0 .1466674.0033333.2666662.01.36.0066667.0933338.01.1533332.01.18h-1.78c-.0133334-.0533336-.0266666-.146666-.04-.28-.0133334-.133334-.02-.2733326-.02-.42 0-.7733372.1766649-1.4666636.53-2.08.3533351-.6133364.8899964-1.0999982 1.61-1.46.7200036-.3600018 1.5999948-.54 2.64-.54 1.2133394 0 2.2033295.3233301 2.97.97s1.15 1.5099946 1.15 2.59c0 .7066702-.1033323 1.3033309-.31 1.79-.2066677.4866691-.4533319.8799985-.74 1.18-.2866681.3000015-.6566644.6233316-1.11.97-.4800024.3866686-.8333322.7166653-1.06.99-.2266678.2733347-.34.6233312-.34 1.05v.82h-1.74zm-.14 2.56h2V31h-2zM39 12c1.1046 0 2 .8954 2 2v20c0 1.1046-.8954 2-2 2H9c-1.10457 0-2-.8954-2-2V14c0-1.1046.89543-2 2-2h30zm0 22V14H9v20h30z"
                        />
                    </svg>
                ),
                attributes: {},
                template: [],
                templateLock: false,
            },
            {
                name: 'container-with-heading',
                title: __( 'Container with Heading', 'bsx-blocks' ),
                icon: (
                    <svg 
                        width="48" 
                        height="48" 
                        viewBox="0 0 48 48" 
                        xmlns="http://www.w3.org/2000/svg" 
                        role="img" 
                        aria-hidden="true" 
                        focusable="false"
                    >
                        <path 
                            fill-rule="evenodd" 
                            clip-rule="evenodd" 
                            d="M23.58 26.28c0-.600003.1499985-1.099998.45-1.5.3000015-.400002.7433304-.8399976 1.33-1.32.5600028-.4533356.9833319-.8699981 1.27-1.25s.43-.8433306.43-1.39c0-.5466694-.1733316-1.0566643-.52-1.53s-.986662-.71-1.92-.71c-1.1066722 0-1.8533314.2766639-2.24.83-.3866686.5533361-.58 1.1766632-.58 1.87 0 .1466674.0033333.2666662.01.36.0066667.0933338.01.1533332.01.18h-1.78c-.0133334-.0533336-.0266666-.146666-.04-.28-.0133334-.133334-.02-.2733326-.02-.42 0-.7733372.1766649-1.4666636.53-2.08.3533351-.6133364.8899964-1.0999982 1.61-1.46.7200036-.3600018 1.5999948-.54 2.64-.54 1.2133394 0 2.2033295.3233301 2.97.97s1.15 1.5099946 1.15 2.59c0 .7066702-.1033323 1.3033309-.31 1.79-.2066677.4866691-.4533319.8799985-.74 1.18-.2866681.3000015-.6566644.6233316-1.11.97-.4800024.3866686-.8333322.7166653-1.06.99-.2266678.2733347-.34.6233312-.34 1.05v.82h-1.74zm-.14 2.56h2V31h-2zM39 12c1.1046 0 2 .8954 2 2v20c0 1.1046-.8954 2-2 2H9c-1.10457 0-2-.8954-2-2V14c0-1.1046.89543-2 2-2h30zm0 22V14H9v20h30z"
                        />
                    </svg>
                ),
                attributes: {},
                template: [ 
                    [ 
                        'bsx-blocks/container', 
                        {},
                        [
                            [
                                'core/heading',
                                { placeholder: 'Add heading, configure heading level...' }
                            ]
                        ],
                    ], 
                ],
                templateLock: false,
            },
        ];

        const getTemplateMap = ( currentTemplateName ) => {
            const currentTemplate = templates.find( ( item ) => item.name === currentTemplateName );
            return currentTemplate ? currentTemplate : {};
        };

        let template = getTemplateMap( templateName ).template;

        const onChangeTemplate = ( value ) => {
            const currentTemplateMap = getTemplateMap( value );
            if ( currentTemplateMap.template != undefined && currentTemplateMap.attributes != undefined ) {
                template = currentTemplateMap.template;
                setAttributes( { 
                    templateName: value,
                    ...currentTemplateMap.attributes,
                } );
            }
            else {
                console.log( 'Error: Template change failed.' );
            }

            // console.log( 'changed templateName: ' + value );
            // console.log( 'changed template: ' + template );
        };

        const onChangeBelowNavbar = ( value ) => {
            setAttributes( { belowNavbar: value } );
        };

        const onChangeId = ( value ) => {
            setAttributes( { id: value } );
        };

        const onChangeMarginBefore = ( value ) => {
            setAttributes( { marginBefore: value } );
        };

        const onChangeMarginAfter = ( value ) => {
            setAttributes( { marginAfter: value } );
        };

        // class name

        const containerClassName = addClassNames( { 
            belowNavbar: belowNavbar, 
            marginBefore: marginBefore, 
            marginAfter: marginAfter, 
        } );

        return [
            <InspectorControls>
                <PanelBody title={ __( 'Section Settings', 'bsx-blocks' ) }>
                    <div className="bsxui-icon-text-button-list">
                        { templates.map( ( template, index ) => (
                            <Button
                                label={ template.title }
                                onClick={ () => {
                                    onChangeTemplate( template.name );
                                } }
                                className={ 'bsxui-icon-text-button-list-item ' + ( templateName === template.name ? 'active' : '' ) }
                            >
                                <div class="bsxui-icon-text-button-list-item-icon">
                                    { template.icon }
                                </div>
                                <div class="bsxui-icon-text-button-list-item-label">
                                    { template.title }
                                </div>
                            </Button>
                        ) ) }
                    </div>
                    <ToggleControl
                        label={ __( 'Move below navbar', 'bsx-blocks' ) }
                        checked={ !! belowNavbar }
                        onChange={ onChangeBelowNavbar }
                        help={ __( 'If enabled section has spacer top to avoid overlapping its contents by navbar.', 'bsx-blocks' ) }
                    />
                    <TextControl 
                        label={ __( 'ID', 'bsx-blocks' ) }
                        value={ id } 
                        onChange={ onChangeId }
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
            <>
                {
                    ! templateName ? (
                        <div class="bsxui-initial-inline-control">
                            <div class="bsxui-initial-inline-control-heading">
                                { __( 'Please select Banner template', 'bsx-blocks' ) }
                            </div>
                            <div className="bsxui-icon-text-button-list">
                                { templates.map( ( template, index ) => (
                                    <Button
                                        label={ template.title }
                                        onClick={ () => {
                                            onChangeTemplate( template.name );
                                        } }
                                        className={ 'bsxui-icon-text-button-list-item ' + ( templateName === template.name ? 'active' : '' ) }
                                    >
                                        <div class="bsxui-icon-text-button-list-item-icon">
                                            { template.icon }
                                        </div>
                                        <div class="bsxui-icon-text-button-list-item-label">
                                            { template.title }
                                        </div>
                                    </Button>
                                ) ) }
                            </div>
                        </div>
                    )
                    : 
                    (
                        <section className={ containerClassName } id={ id }>
                            <InnerBlocks 
                                template={ template }
                                renderAppender={
                                    hasInnerBlocks
                                    ? undefined
                                    : () => <InnerBlocks.ButtonBlockAppender />
                                }
                            />
                        </section>
                    )
                }
            </>
        ];
    } ),
    save: ( props ) => {
        const {
            className,
            attributes: {
                templateName,
	            belowNavbar,
	            id,
	            marginBefore,
	            marginAfter,
            },
        } = props;

        const containerClassName = addClassNames( { 
            belowNavbar: belowNavbar, 
            marginBefore: marginBefore, 
            marginAfter: marginAfter, 
        } );

        const saveAttributes = makeSaveAttributes( {
            id: id,
        } );

        return (
            <section className={ containerClassName } { ...saveAttributes }>
                <InnerBlocks.Content />
            </section>
        );
    },
} );
