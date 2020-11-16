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
    Fragment 
} = wp.element;

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
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" role="img" aria-hidden="true" focusable="false">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M30,18l5,0v-2l-5,0V18z M22,36h5v-2h-5V36z M22,18l5,0v-2l-5,0V18z M40.66,16.3c-0.19-0.19-0.44-0.29-0.71-0.29l-1.95,0v2 l0.95,0V21h2v-3.99C40.95,16.75,40.84,16.49,40.66,16.3z M30,36h5v-2h-5V36z M14,36h5v-2h-5V36z M16.46,12H15v2h1.08l2.42,2.13 l1.42-1.42l-2.8-2.47C16.94,12.09,16.7,12,16.46,12z M38.95,28h2v-4h-2V28z M9,32H7v3c0,0.26,0.11,0.52,0.29,0.71 C7.48,35.89,7.74,36,8,36h3v-2H9V32z M38.95,34H38v2h1.95c0.26,0,0.52-0.11,0.71-0.29c0.19-0.19,0.29-0.44,0.29-0.71v-4h-2V34z M9,18H7v4h2V18z M7.29,12.29C7.11,12.48,7,12.74,7,13v2h2v-1h3v-2H8C7.74,12,7.48,12.11,7.29,12.29z M9,25H7v4h2V25z"/>
                    </svg>
                ),
                attributes: {
                    marginAfter: '5',
                },
                template: [],
                templateLock: false,
            },
            {
                name: 'container-with-heading',
                title: __( 'Container with Heading', 'bsx-blocks' ),
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" role="img" aria-hidden="true" focusable="false">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9,25H7v4h2V25z M14,36h5v-2h-5V36z M22,18l5,0v-2l-5,0V18z M22,36h5v-2h-5V36z M9,14h3v-2H8c-0.26,0-0.52,0.11-0.71,0.29 C7.11,12.48,7,12.74,7,13v2h2V14z M18.5,16.13l1.42-1.42l-2.8-2.47C16.94,12.09,16.7,12,16.46,12H15v2h1.08L18.5,16.13z M9,18H7v4h2 V18z M35,16.01l-5,0v2l5,0V16.01z M9,32H7v3c0,0.26,0.11,0.52,0.29,0.71C7.48,35.89,7.74,36,8,36h3v-2H9V32z M40.66,16.3 c-0.19-0.19-0.44-0.29-0.71-0.29l-1.95,0v2l0.95,0V21h2v-3.99C40.95,16.75,40.84,16.49,40.66,16.3z M38.95,34H38v2h1.95 c0.26,0,0.52-0.11,0.71-0.29c0.19-0.19,0.29-0.44,0.29-0.71v-4h-2V34z M38.95,28h2v-4h-2V28z M30,36h5v-2h-5V36z M12,25h1v-2h-1V25z M12,21h1v-2h-1V21z M12,17h1v-2h-1V17z M12,29h1v-2h-1V29z M12,33h1v-2h-1V33z M35,25h1v-2h-1V25z M35,21h1v-2h-1V21z M35,29h1v-2 h-1V29z M35,33h1v-2h-1V33z M14,24h13v-3H14V24z"/>
                    </svg>
                ),
                attributes: {
                    marginAfter: '5',
                },
                template: [ 
                    [ 
                        'bsx-blocks/container', 
                        {},
                        [
                            [
                                'core/heading',
                                { 
                                    placeholder: 'Add heading, configure heading level...', 
                                },
                            ],
                        ],
                    ], 
                ],
                templateLock: false,
            },
            {
                name: 'container-heading-text-gallery',
                title: __( 'Container, Heading, Text & Gallery', 'bsx-blocks' ),
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" role="img" aria-hidden="true" focusable="false">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M39,12H9c-1.1,0-2,0.9-2,2v20c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V14C41,12.9,40.1,12,39,12z M39,34H9V14h30V34z M22.49,31.03h2.35v-2.21h-2.35V31.03z M22.51,19.38c0.36-0.28,0.81-0.42,1.35-0.42c0.63,0,1.1,0.17,1.43,0.5s0.49,0.81,0.49,1.44 c0,0.54-0.14,1.03-0.43,1.45s-0.68,0.89-1.18,1.38c-0.71,0.6-1.16,1.09-1.35,1.46s-0.3,1.02-0.3,1.94h2.3 c0-0.56,0.04-0.97,0.13-1.25s0.32-0.58,0.68-0.9c0.72-0.58,1.31-1.21,1.77-1.88c0.46-0.67,0.69-1.42,0.69-2.23 c0-1.22-0.37-2.16-1.09-2.83c-0.73-0.67-1.77-1-3.12-1c-1.25,0-2.26,0.31-3.02,0.94c-0.76,0.62-1.15,1.52-1.17,2.69h2.3 C21.97,20.09,22.15,19.66,22.51,19.38z"/>
                    </svg>
                ),
                attributes: {
                    marginAfter: '5',
                },
                template: [ 
                    [ 
                        'bsx-blocks/container', 
                        {},
                        [
                            [
                                'core/heading',
                                { 
                                    placeholder: 'Add heading, configure heading level...',
                                },
                            ],
                            [
                                'core/paragraph',
                                { 
                                    placeholder: 'Add text...', 
                                },
                            ],
                            [
                                'bsx-blocks/img-gallery',
                                { 
                                    galleryType: 'floating', 
                                },
                            ],
                        ],
                    ], 
                ],
                templateLock: false,
            },
            {
                name: 'rounded-color-banner',
                title: __( 'Rounded colored Banner (primary dark)', 'bsx-blocks' ),
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" role="img" aria-hidden="true" focusable="false">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M39,12H9c-1.1,0-2,0.9-2,2v20c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V14C41,12.9,40.1,12,39,12z M39,34H9V14h30V34z M22.49,31.03h2.35v-2.21h-2.35V31.03z M22.51,19.38c0.36-0.28,0.81-0.42,1.35-0.42c0.63,0,1.1,0.17,1.43,0.5s0.49,0.81,0.49,1.44 c0,0.54-0.14,1.03-0.43,1.45s-0.68,0.89-1.18,1.38c-0.71,0.6-1.16,1.09-1.35,1.46s-0.3,1.02-0.3,1.94h2.3 c0-0.56,0.04-0.97,0.13-1.25s0.32-0.58,0.68-0.9c0.72-0.58,1.31-1.21,1.77-1.88c0.46-0.67,0.69-1.42,0.69-2.23 c0-1.22-0.37-2.16-1.09-2.83c-0.73-0.67-1.77-1-3.12-1c-1.25,0-2.26,0.31-3.02,0.94c-0.76,0.62-1.15,1.52-1.17,2.69h2.3 C21.97,20.09,22.15,19.66,22.51,19.38z"/>
                    </svg>
                ),
                attributes: {
                    marginAfter: '5',
                },
                template: [ 
                    [ 
                        'bsx-blocks/container', 
                        {},
                        [
                            [  
                                'bsx-blocks/wrapper', 
                                {
                                    bgColor: 'primary',
                                    textColor: 'dark',
                                    textAlign: 'center',
                                    rounded: true,
                                    paddingBefore: '4',
                                    paddingAfter: '4',
                                    paddingLeft: '3',
                                    paddingRight: '3',
                                },
                                [
                                    [
                                        'core/heading',
                                        { 
                                            placeholder: 'Add heading, configure heading level...',
                                            marginAfter: '3',
                                        },
                                    ],
                                    [
                                        'core/paragraph',
                                        { 
                                            placeholder: 'Add text...', 
                                            textSize: 'lead',
                                        },
                                    ],
                                    [
                                        'bsx-blocks/buttons',
                                        {},
                                        [
                                            [
                                                'bsx-blocks/button',
                                                {
                                                    state: 'dark',
                                                    marginBefore: '1',
                                                    marginAfter: '1',
                                                    marginLeft: '1',
                                                    marginRight: '1',
                                                },
                                            ],
                                        ],
                                    ],
                                ],
                            ], 
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
            <Fragment>
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
                            label={ __( 'Below navbar', 'bsx-blocks' ) }
                            checked={ !! belowNavbar }
                            onChange={ onChangeBelowNavbar }
                            help={ __( 'Enable if element starts below navbar. If enabled element has spacer top to avoid overlapping its contents by navbar.', 'bsx-blocks' ) }
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
                </InspectorControls>
            </Fragment>,
            (
                <Fragment>
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
                </Fragment>
            )
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
