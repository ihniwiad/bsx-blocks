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


registerBlockType( 'bsx-blocks/groups', {
    title: __( 'BSX Groups', 'bsx-blocks' ),
    icon: svgIcon( 'groups' ),
    category: 'layout',
    attributes: {
        templateName: {
            type: 'string',
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
            },
            setAttributes,
            children,
        } = props;

        const hasInnerBlocks = ( children ) => {
            return children.length > 0;
        }

        const templates = [
            {
                name: 'lazy-img-paragraph-button',
                title: __( 'Lazy image, paragraph, button', 'bsx-blocks' ),
                icon: svgIcon( 'groups-lazy-img-paragraph-button' ),
                attributes: {},
                template: [ 
                    [ 
                        'bsx-blocks/lazy-img', 
                        {},
                    ], 
                    [
                        'core/paragraph',
                        { 
                            placeholder: 'Add text...', 
                        },
                    ],
                    [
                        'bsx-blocks/buttons',
                        {},
                    ],
                ],
                templateLock: false,
            },
            {
                name: 'lazy-img-heading-paragraph',
                title: __( 'Lazy image, heading, paragraph', 'bsx-blocks' ),
                icon: svgIcon( 'groups-lazy-img-heading-paragraph' ),
                attributes: {},
                template: [ 
                    [ 
                        'bsx-blocks/lazy-img', 
                        {},
                    ], 
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

            console.log( 'changed templateName: ' + value );
            // console.log( 'changed template: ' + template );
        };

        return [
            <InspectorControls>
                <PanelBody title={ __( 'Group Settings', 'bsx-blocks' ) }>
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
                </PanelBody>
            </InspectorControls>,
            <Fragment>
                {
                    ! templateName ? (
                        <div class="bsxui-initial-inline-control">
                            <div class="bsxui-initial-inline-control-heading">
                                { __( 'Please select Group template', 'bsx-blocks' ) }
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
                        <InnerBlocks 
                            template={ template }
                            renderAppender={
                                hasInnerBlocks
                                ? undefined
                                : () => <InnerBlocks.ButtonBlockAppender />
                            }
                        />
                    )
                }
            </Fragment>
        ];
    } ),
    save: ( props ) => {
        const {
            className,
            attributes: {
                templateName,
            },
        } = props;

        return (
            <InnerBlocks.Content />
        );
    },
} );
