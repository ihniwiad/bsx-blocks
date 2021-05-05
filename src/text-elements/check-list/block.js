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
    SelectControl,
} = wp.components;


// functions imports

import { svgIcon } from './../../_functions/wp-icons.js';
import { addClassNames } from './../../_functions/add-class-names.js';
import { makeSaveAttributes } from './../../_functions/attributes.js';
import { 
    stateSelect,
    linkUrlInput,
    targetToggle,
    relInput,
    marginLeftSelect,
    marginRightSelect,
    marginBeforeSelect,
    marginAfterSelect,
} from './../../_functions/controls.js';


// functions

registerBlockType( 'bsx-blocks/check-list', {
    title: __( 'BSX Check List', 'bsx-blocks' ),
    icon: svgIcon( 'check-list' ),
    category: 'layout',
    attributes: {
        content: {
            type: 'array',
            source: 'children',
            selector: '.checklist',
        },
        state: {
            type: 'string',
            default: 'primary',
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

    edit: ( props ) => {

        const {
            className,
            attributes: {
                content,
                state,
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
        const onChangeState = ( value ) => {
            setAttributes( { state: value } );
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

        const checklistClassNames = addClassNames( {
            marginLeft, 
            marginRight, 
            marginBefore,
            marginAfter,
        }, 'checklist' );

        return [
            <InspectorControls>
                <PanelBody title={ __( 'Appearance', 'bsx-blocks' ) }>
                    {
                        stateSelect( state, onChangeState )
                    }
                </PanelBody>

                <PanelBody title={ __( 'Margin', 'bsx-blocks' ) }>
                    {
                        marginLeftSelect( marginLeft, onChangeMarginLeft, [ '', '0', '1', '2', '3' ] )
                    }
                    {
                        marginRightSelect( marginRight, onChangeMarginRight, [ '', '0', '1', '2', '3' ] )
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
                <RichText
                    tagName="ul"
                    multiline="li"
                    placeholder={ __( 'Add list items...', 'bsx-blocks' ) }
                    value={ content }
                    onChange={ onChangeContent }
                    className="checklist"
                />
            )
        ];
    },
    save: ( props ) => {
        const {
            className,
            attributes: {
                content,
                state,
                marginLeft,
                marginRight,
                marginBefore,
                marginAfter,
            },
        } = props;
        const checklistClassNames = addClassNames( {
            marginLeft, 
            marginRight, 
            marginBefore,
            marginAfter,
        }, 'checklist' );

        return (
            <>
                {
                    ( content && ! RichText.isEmpty( content ) ) && (
                        <RichText.Content 
                            tagName="ul" 
                            value={ content } 
                            className={ checklistClassNames }
                        />
                    )
                }
            </>
        );
    },
} );
