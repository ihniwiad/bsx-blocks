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
    withDispatch,
} = wp.data;


// functions imports

import { svgIcon } from './../../_functions/wp-icons.js';
import { addClassNames } from './../../_functions/add-class-names.js';
import { 
    iconFamilySelect,
    textColorSelect,
    displaySelect,
    marginLeftSelect,
    marginRightSelect,
    marginBeforeSelect,
    marginAfterSelect,
    textAlignToolbar,
} from './../../_functions/controls.js';


registerBlockType( 'bsx-blocks/icon-list', {
    title: __( 'BSX Icon List', 'bsx-blocks' ),
    icon: svgIcon( 'icon-list' ),
    category: 'layout',
    attributes: {
        globalIconFamily: {
            type: 'string',
        },
        globalIconTextColor: {
            type: 'string',
            default: 'primary',
        },
        textAlign: {
            type: 'string',
        },
        display: {
            type: 'string',
        },
        marginLeft: {
            type: 'string',
        },
        marginRight: {
            type: 'string',
        },
        marginBefore: {
            type: 'string',
        },
        marginAfter: {
            type: 'string',
        },
    },

    // getEditWrapperProps( attributes ) {
    //     const {
    //         templateName,
    //         textAlign,
    //         marginBefore,
    //         marginAfter,
    //     } = attributes;

    //     return {
    //         'data-template-name': templateName,
    //         'data-text-align': textAlign,
    //         'data-margin-before': marginBefore,
    //         'data-margin-after': marginAfter,
    //     };
    // },

    // TODO: remove?
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
            getBlockAttributes,
        };
    } )( withDispatch( ( dispatch ) => {

            const { updateBlockAttributes } = dispatch( 'core/block-editor' );

            return {
                updateBlockAttributes,
            };
    } )( ( props ) => {
        const {
            // className,
            attributes: {
                className,
                globalIconFamily,
                globalIconTextColor,
                textAlign,
                display,
                marginLeft,
                marginRight,
                marginBefore,
                marginAfter,
            },
            setAttributes,
            children,
            getBlockAttributes,
            updateBlockAttributes,
        } = props;

        const hasInnerBlocks = ( children ) => {
            return children.length > 0;
        }

        const allowedBlocks = [ 
            'icon-list-item',  
        ];

        const onChangeGlobalIconFamily = ( value ) => {
            setAttributes( { globalIconFamily: value } );
        };
        const onChangeGlobalIconTextColor = ( value ) => {
            // change childrens calcIconTextColor
            setAttributes( { globalIconTextColor: value } );

            children.forEach( ( child, index ) => {
                const childAttributes = getBlockAttributes( child.clientId );

                // console.log( 'child[ ' + index + ' ] attributes: \n' );
                // console.log( JSON.stringify( childAttributes, null, 2 ) );

                if ( ! childAttributes.iconTextColor && ! childAttributes.itemTextColor ) {
                    // change only if no icon color and no item color is set
                    const newAttributes = { 
                        calcIconTextColor: value, 
                    };
                    updateBlockAttributes( child.clientId, newAttributes );
                }
            } );
        };

        const onChangeTextAlign = ( value ) => {
            setAttributes( { textAlign: value } );
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

        const ulClassNames = addClassNames( { 
            textAlign, 
            display,
            marginLeft,
            marginRight,
            marginBefore, 
            marginAfter,
        }, 'fa-ul' );

        return [
            <Fragment>
                <BlockControls>
                    {
                        textAlignToolbar( textAlign, onChangeTextAlign )
                    }
                </BlockControls>

                <InspectorControls>
                    <PanelBody title={ __( 'Settings', 'bsx-blocks' ) }>
                        {
                            iconFamilySelect( globalIconFamily, onChangeGlobalIconFamily )
                        }
                        {
                            textColorSelect( globalIconTextColor, onChangeGlobalIconTextColor, [], __( 'List Icon Color', 'bsx-blocks' ) )
                        }
                        {
                            displaySelect( display, onChangeDisplay )
                        }
                    </PanelBody>
                    <PanelBody title={ __( 'Margin', 'bsx-blocks' ) }>
                        {
                            marginLeftSelect( marginLeft, onChangeMarginLeft )
                        }
                        {
                            marginRightSelect( marginRight, onChangeMarginRight )
                        }
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
                    (
                        <ul className={ ulClassNames }>
                            <InnerBlocks 
                                allowedBlocks={ allowedBlocks }
                            />
                        </ul>
                    )
                }
            </Fragment>
        ];
    } ) ),
    save: ( props ) => {
        const {
            // className,
            attributes: {
                className,
                globalIconFamily,
                globalIconTextColor,
                textAlign,
                display,
                marginLeft,
                marginRight,
                marginBefore,
                marginAfter,
            },
        } = props;

        const ulClassNames = addClassNames( { 
            textAlign, 
            display,
            marginLeft,
            marginRight,
            marginBefore, 
            marginAfter,
        }, 'fa-ul' );

        return (
            <ul className={ ulClassNames }>
                <InnerBlocks.Content />
            </ul>
        );
    },
} );

