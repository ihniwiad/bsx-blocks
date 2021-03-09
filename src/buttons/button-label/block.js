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
    SelectControl,
    SVG, 
    Path,
} = wp.components;


// functions imports

import { svgIcon } from './../../_functions/wp-icons.js';
import { addClassNames } from './../../_functions/add-class-names.js';
import { 
    marginLeftSelect,
    marginRightSelect,
    marginBeforeSelect,
    marginAfterSelect,
    displaySelect,
} from './../../_functions/controls.js';


registerBlockType( 'bsx-blocks/button-label', {
    title: __( 'BSX Button Label', 'bsx-blocks' ),
    icon: svgIcon( 'button-label' ),
    category: 'layout',
    parent: [ 'bsx-blocks/buttons' ],
    attributes: {
        content: {
            type: 'array',
            source: 'children',
            selector: 'span',
        },
        display: {
            type: 'string',
            default: '',
        },
        marginLeft: {
            type: 'string',
            default: '',
        },
        marginRight: {
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

    edit: ( props ) => {

        const {
            className,
            attributes: {
                content,
                display,
                marginLeft,
                marginRight,
                marginBefore,
                marginAfter,
            },
            setAttributes,
            isSelected,
        } = props;

        const onChangeContent = ( value ) => {
            setAttributes( { content: value } );
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

        const onChangeIgnoreMailtoSpamProtection = ( value ) => {
            setAttributes( { ignoreMailtoSpamProtection: ! value } );
        };

        const labelClassNames = addClassNames( {
            display,
            marginLeft, 
            marginRight, 
            marginBefore,
            marginAfter,
        } );

        return [
            <InspectorControls>
                <PanelBody title={ __( 'Button Label appearance (optional)', 'bsx-blocks' ) }>
                    {
                        displaySelect( display, onChangeDisplay, [ '', 'inline-block' ] )
                    }
                </PanelBody>

                <PanelBody title={ __( 'Margin (optional)', 'bsx-blocks' ) }>
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
            </InspectorControls>,
            (
                <>
                    <RichText
                        tagName="span"
                        className={ labelClassNames }
                        multiline={ false }
                        placeholder={ __( 'Add label...', 'bsx-blocks' ) }
                        value={ content }
                        onChange={ onChangeContent }
                        allowedFormats={ [] }
                        keepPlaceholderOnFocus
                    />
                </>
            )
        ];
    },
    save: ( props ) => {
        const {
            className,
            attributes: {
                content,
                display,
                marginLeft,
                marginRight,
                marginBefore,
                marginAfter,
            },
        } = props;
        
        const labelClassNames = addClassNames( {
            display,
            marginLeft, 
            marginRight, 
            marginBefore,
            marginAfter,
        } );

        return (
            <>
                {
                    content && ! RichText.isEmpty( content ) && (
                        <RichText.Content 
                            tagName="span" 
                            value={ content } 
                            className={ labelClassNames }
                        />
                    )
                }
            </>
        );
    },
} );
