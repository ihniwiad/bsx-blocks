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
    iconFamilySelect,
    textColorSelect,
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
        } = select( 'core/block-editor' );

        const children = getBlocksByClientId( clientId )[ 0 ]
            ? getBlocksByClientId( clientId )[ 0 ].innerBlocks
            : [];

        return {
            children,
        };
    } )( ( props ) => {
        const {
            // className,
            attributes: {
                className,
                globalIconFamily,
                globalIconTextColor,
                textAlign,
                marginBefore,
                marginAfter,
            },
            setAttributes,
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
            setAttributes( { globalIconTextColor: value } );
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

        const ulClassNames = addClassNames( { 
            textAlign, 
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
    } ),
    save: ( props ) => {
        const {
            // className,
            attributes: {
                className,
                globalIconFamily,
                globalIconTextColor,
                textAlign,
                marginBefore,
                marginAfter,
            },
        } = props;

        const ulClassNames = addClassNames( { 
            textAlign, 
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

