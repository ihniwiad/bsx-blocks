// TODO: enable inheritance of default attribute values to allow precomposed blocks of equal buttons ?

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


// functions imports

import { svgIcon } from './../../_functions/wp-icons.js';
import { addClassNames } from './../../_functions/add-class-names.js';
import { 
    marginBeforeSelect,
    marginAfterSelect,
} from './../../_functions/controls.js';


registerBlockType( 'bsx-blocks/buttons', {
    title: __( 'BSX Buttons', 'bsx-blocks' ),
    icon: svgIcon( 'buttons' ),
    category: 'layout',
    attributes: {
        templateName: {
            type: 'string',
        },
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
            templateName,
            textAlign,
            marginBefore,
            marginAfter,
        } = attributes;

        return {
            'data-template-name': templateName,
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
                templateName,
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

        const allowedBlocks = [ 
            'bsx-blocks/button-label',
            'bsx-blocks/button',  
        ];

        const templates = [
            {
                name: 'one-button',
                title: __( 'One Button', 'bsx-blocks' ),
                icon: svgIcon( 'buttons-one-button' ),
                attributes: {},
                template: [
                    [ 
                        'bsx-blocks/button', 
                        {
                        },
                    ],
                ],
                templateLock: false,
            },
            {
                name: 'two-buttons',
                title: __( 'Two Buttons', 'bsx-blocks' ),
                icon: svgIcon( 'buttons-two-buttons' ),
                attributes: {},
                template: [
                    [ 
                        'bsx-blocks/button', 
                        {
                        },
                    ],
                    [ 
                        'bsx-blocks/button', 
                        {
                        },
                    ],
                ],
                templateLock: false,
            },
            {
                name: 'text-link',
                title: __( 'Text Link', 'bsx-blocks' ),
                icon: svgIcon( 'buttons-text-link' ),
                attributes: {},
                template: [ 
                    [ 
                        'bsx-blocks/button', 
                        {
                            state: 'text-link',
                        },
                    ],
                ],
                templateLock: false,
            },
            {
                name: 'label-text-link',
                title: __( 'Label with Text Link', 'bsx-blocks' ),
                icon: svgIcon( 'buttons-label-text-link' ),
                attributes: {},
                template: [  
                    [ 
                        'bsx-blocks/button-label', 
                        {
                        },
                    ],
                    [ 
                        'bsx-blocks/button', 
                        {
                            state: 'text-link',
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

            // console.log( 'changed templateName: ' + value );
            // console.log( 'changed template: ' + template );
        };

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
            textAlign, 
            marginBefore, 
            marginAfter,
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
                    <PanelBody title={ __( 'Settings', 'bsx-blocks' ) }>
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
                    <PanelBody title={ __( 'Margin', 'bsx-blocks' ) }>
                        {
                            marginBeforeSelect( marginBefore, onChangeMarginBefore )
                        }
                        {
                            marginAfterSelect( marginAfter, onChangeMarginAfter )
                        }
                    </PanelBody>
                </InspectorControls>
            </Fragment>,
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
                }
            </Fragment>
        ];
    } ),
    save: ( props ) => {
        const {
            className,
            attributes: {
                templateName,
                textAlign,
                marginBefore,
                marginAfter,
            },
        } = props;

        const wrapperClassNames = addClassNames( { 
            textAlign, 
            marginBefore, 
            marginAfter,
        } );

        return (
            <div className={ wrapperClassNames }>
                <InnerBlocks.Content />
            </div>
        );
    },
} );

