const { __, setLocaleData } = wp.i18n;
const {
    registerBlockType,
} = wp.blocks;
const {
    InnerBlocks,
    InspectorControls,
    InspectorAdvancedControls
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
import { getTemplate } from './../_functions/utilities.js';
import { 
    belowNavbarToggle,
    touchFooterToggle,
    marginBeforeSelect,
    marginAfterSelect,
} from './../_functions/controls.js';


// data
import templates from './templates';


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
        touchFooter: {
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
                touchFooter,
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

        let template = getTemplate( templates, templateName ).template;

        const onChangeTemplate = ( value ) => {
            const currentTemplateMap = getTemplate( templates, value );
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
        const onChangeTouchFooter = ( value ) => {
            setAttributes( { touchFooter: value } );
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
            belowNavbar, 
            touchFooter,
            marginBefore, 
            marginAfter, 
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
                        <TextControl 
                            label={ __( 'ID', 'bsx-blocks' ) }
                            value={ id } 
                            onChange={ onChangeId }
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
                </InspectorControls>
                <InspectorAdvancedControls>
                    {
                        belowNavbarToggle( belowNavbar, onChangeBelowNavbar )
                    }
                    {
                        touchFooterToggle( touchFooter, onChangeTouchFooter )
                    }
                </InspectorAdvancedControls>
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
                touchFooter,
	            id,
	            marginBefore,
	            marginAfter,
            },
        } = props;

        const containerClassName = addClassNames( { 
            belowNavbar, 
            touchFooter,
            marginBefore, 
            marginAfter, 
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
