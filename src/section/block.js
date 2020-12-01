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


import { svgIcon } from './../_functions/wp-icons.js';

import { addClassNames } from './../_functions/add-class-names.js';

import { makeSaveAttributes } from './../_functions/attributes.js';


registerBlockType( 'bsx-blocks/section', {
    title: __( 'BSX Section', 'bsx-blocks' ),
    icon: svgIcon( 'section' ),
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
                icon: svgIcon( 'section-empty' ),
                attributes: {
                    marginAfter: '5',
                },
                template: [],
                templateLock: false,
            },
            {
                name: 'container-with-heading',
                title: __( 'Container with Heading', 'bsx-blocks' ),
                icon: svgIcon( 'section-container-heading' ),
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
                icon: svgIcon( 'section-container-heading-text-gallery' ),
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
                icon: svgIcon( 'section-container-rounded-colored-banner' ),
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
                                            textColor: 'dark',
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
                                    { __( 'Please select template', 'bsx-blocks' ) }
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
