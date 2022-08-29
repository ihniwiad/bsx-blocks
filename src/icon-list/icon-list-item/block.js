// TODO: add state classes for text-link button

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
    SVG, 
    Path,
} = wp.components;

const { 
    withSelect, 
} = wp.data;


// functions imports

import { svgIcon } from './../../_functions/wp-icons.js';
import { addClassNames } from './../../_functions/add-class-names.js';
import { makeSaveAttributes } from './../../_functions/attributes.js';
import { 
    textColorSelect,
    iconFamilySelect,
    iconKeyInput,
    marginBeforeSelect,
    marginAfterSelect,
} from './../../_functions/controls.js';


registerBlockType( 'bsx-blocks/icon-list-item', {
    title: __( 'BSX Icon List Item', 'bsx-blocks' ),
    icon: svgIcon( 'icon-list-item' ),
    category: 'layout',
    parent: [ 'bsx-blocks/icon-list' ],
    attributes: {
        content: {
            type: 'array',
            source: 'children',
            selector: '.content',
        },
        iconKey: {
            type: 'string',
            default: 'check',
        },
        iconFamily: {
            type: 'string',
        },
        calcIconFamily: {
            type: 'string',
        },
        itemTextColor: {
            type: 'string',
        },
        iconTextColor: {
            type: 'string',
        },
        calcIconTextColor: {
            type: 'string',
        },
    },

    edit: withSelect( ( select, { clientId } ) => {
        const { 
            getBlockParentsByBlockName, 
            getBlockAttributes, 
        } = select( 'core/block-editor' );

        const ancestorClientIds = getBlockParentsByBlockName( clientId, 'bsx-blocks/icon-list' );

        // get last item which is parent
        const parentClientId = ancestorClientIds[ ancestorClientIds.length - 1 ];

        const parentAttributes = getBlockAttributes( parentClientId );

        return {
            parentAttributes,
        };
    } )( ( props ) => {

        const {
            // className,
            attributes: {
                // get className from attributes and add manually to buttonClassNames
                className,
                content,
                iconKey,
                iconFamily,
                calcIconFamily,
                itemTextColor,
                iconTextColor,
                calcIconTextColor,
            },
            setAttributes,
            isSelected,
            parentAttributes,
        } = props;

        // console.log( JSON.stringify( parentAttributes, null, 2 ) );
        // console.log( JSON.stringify( props.attributes, null, 2 ) );

        // initial settings
        if ( ! calcIconFamily ) {
            setAttributes( {
                calcIconFamily: ( ! iconFamily && typeof parentAttributes.globalIconFamily != 'undefined' ) ? parentAttributes.globalIconFamily : '',
            } );
        }
        if ( ! calcIconTextColor && ! itemTextColor ) {
            // do not set icon color if item color is set, inherit icon color instead
            setAttributes( { 
                calcIconTextColor: ( ! iconTextColor && typeof parentAttributes.globalIconTextColor != 'undefined' ) ? parentAttributes.globalIconTextColor : '',
            } );
        }

        const onChangeContent = ( value ) => {
            setAttributes( { content: value } );
        };

        const onChangeIconKey = ( value ) => {
            setAttributes( { iconKey: value } );
        };
        const onChangeIconFamily = ( value ) => {
            // get icon family from item config or from parent config
            setAttributes( {
                iconFamily: value,
                calcIconFamily: ( ! value && typeof parentAttributes.globalIconFamily != 'undefined' ) ? parentAttributes.globalIconFamily : value,
            } );
        };
        const onChangeIconTextColor = ( value ) => {
            setAttributes( {
                iconTextColor: value,
                calcIconTextColor: ( ! value && typeof parentAttributes.globalIconTextColor != 'undefined' ) ? parentAttributes.globalIconTextColor : value,
            } );
        };

        const onChangeItemTextColor = ( value ) => {
            // reset icon color if all item has text color
            setAttributes( {
                itemTextColor: value,
                iconTextColor: '',
                calcIconTextColor: '',
            } );
        };

        const itemClassNames = addClassNames( {
            textColor: itemTextColor,
        }, className );

        const iconClassNames = addClassNames( {
            textColor: calcIconTextColor,
        }, 'fa-li ' + 'fa' + calcIconFamily + ' fa-' + iconKey );

        return [
            <InspectorControls>
                <PanelBody title={ __( 'Icon Appearance', 'bsx-blocks' ) }>
                    {
                        iconKeyInput( iconKey, onChangeIconKey )
                    }
                    {
                        iconFamilySelect( iconFamily, onChangeIconFamily )
                    }
                    {
                        textColorSelect( iconTextColor, onChangeIconTextColor, [], __( 'Icon Color', 'bsx-blocks' ) )
                    }
                </PanelBody>
                <PanelBody title={ __( 'Item Appearance', 'bsx-blocks' ) }>
                    {
                        textColorSelect( itemTextColor, onChangeItemTextColor, [], __( 'Item Color', 'bsx-blocks' ) )
                    }
                </PanelBody>
            </InspectorControls>,
            (
                <li class={ itemClassNames }>
                    <i class={ iconClassNames } aria-hidden="true"></i>
                    <RichText
                        tagName="span"
                        multiline={ false }
                        placeholder={ __( 'Add text...', 'bsx-blocks' ) }
                        value={ content }
                        onChange={ onChangeContent }
                        allowedFormats={ [] }
                    />
                </li>
            )
        ];
    } ),
    save: ( props ) => {
        const {
            // className,
            attributes: {
                // get className from attributes and add manually to buttonClassNames
                className,
                content,
                iconKey,
                iconFamily,
                calcIconFamily,
                itemTextColor,
                iconTextColor,
                calcIconTextColor,
            },
        } = props;

        const itemClassNames = addClassNames( {
            textColor: itemTextColor,
        }, className );
        
        const iconClassNames = addClassNames( {
            textColor: calcIconTextColor,
        }, 'fa-li ' + 'fa' + calcIconFamily + ' fa-' + iconKey );

        return (
            <li class={ itemClassNames }>
                <span class={ iconClassNames } aria-hidden="true"></span>
                <>
                    {
                        content && ! RichText.isEmpty( content ) && (
                            <RichText.Content 
                                tagName="span"
                                value={ content } 
                                className="content"
                            />
                        )
                    }
                </>
            </li>
        );
    },
} );
