const { __, setLocaleData } = wp.i18n;
const {
    registerBlockType,
} = wp.blocks;
const {
    InspectorControls,
    InspectorAdvancedControls,
    RichText,
    PlainText,
    BlockControls,
} = wp.blockEditor;
const { 
    PanelBody,
    SVG, 
    Path,
    SelectControl,
    TextControl,
    TextareaControl,
} = wp.components;
import { RawHTML } from '@wordpress/element';



// functions imports

import { svgIcon } from './../../_functions/wp-icons.js';
import { addClassNames } from './../../_functions/add-class-names.js';
import { makeSaveAttributes } from './../../_functions/attributes.js';
import { 
    stateSelect,
    linkUrlInput,
    targetToggle,
    relInput,
    marginBeforeSelect,
    marginAfterSelect,
    verticalAlignSelect,
    nodeNameSelect,
    textAlignToolbar,
} from './../../_functions/controls.js';


const unwrapContent = ( content ) => {
    if ( content.indexOf( 'svg-wrap' ) != -1 ) {
        const unwrappedContentArray = content.split( '><' );
        unwrappedContentArray.shift();
        unwrappedContentArray.pop();
        const unwrappedContent = '<' + unwrappedContentArray.join( '><' ) + '>';

        return unwrappedContent;
    }
    else {
        return content;
    }
}


registerBlockType( 'bsx-blocks/svg-img', {
    title: __( 'BSX SVG Image', 'bsx-blocks' ),
    icon: svgIcon( 'svg' ),
    category: 'layout',
    attributes: {
        content: {
            type: 'string',
            source: 'html',
        },
        nodeName: {
            type: 'string',
            default: 'figure',
        },
        href: {
            type: 'string',
        },
        target: {
            type: 'string',
        },
        rel: {
            type: 'string',
        },
        state: {
            type: 'string',
        },
        marginBefore: {
            type: 'string',
        },
        marginAfter: {
            type: 'string',
        },
        verticalAlign: {
            type: 'string',
        },
        textAlign: {
            type: 'string',
        },
    },

    edit: ( props ) => {

        const {
            className,
            attributes: {
                content,
                nodeName,
                href,
                target,
                rel,
                state,
                marginBefore,
                marginAfter,
                verticalAlign,
                textAlign,
            },
            setAttributes,
            isSelected,
        } = props;

        // unwrap content (remove wrapping outer element)
        setAttributes( { content: unwrapContent( content ) } );


        const onChangeContent = ( value ) => {
            setAttributes( { content: value } );
        };
        const onChangeHref = ( value ) => {
            setAttributes( { href: value } );
        };
        const onChangeTarget = ( value ) => {
            setAttributes( { target: !! value ? '_blank' : '' } );
        };
        const onChangeRel = ( value ) => {
            setAttributes( { rel: value } );
        };
        const onChangeState = ( value ) => {
            setAttributes( { state: value } );
        };

        const onChangeMarginBefore = ( value ) => {
            setAttributes( { marginBefore: value } );
        };
        const onChangeMarginAfter = ( value ) => {
            setAttributes( { marginAfter: value } );
        };

        const onChangeVerticalAlign = ( value ) => {
            setAttributes( { verticalAlign: value } );
        };
        const onChangeNodeName = ( value ) => {
            setAttributes( { nodeName: value } );
        };
        const onChangeTextAlign = ( value ) => {
            setAttributes( { textAlign: value } );
        };


        const wrapperClassNames = addClassNames( {
            state,
            marginBefore,
            marginAfter,
            verticalAlign,
            textAlign,
        }, 'svg-wrap' );

        const saveAttributes = makeSaveAttributes( {
            href: href, 
            target: target, 
            rel: href ? ( rel ? rel + ' noopener noreferrer' : 'noopener noreferrer' ) : '',
        } );

        const TagName = !! href
            ? 'a'
            : 'div'
        ; 

        return [
            <BlockControls>
                {
                    textAlignToolbar( textAlign, onChangeTextAlign )
                }
            </BlockControls>,
            <InspectorControls>

                <PanelBody title={ __( 'Content', 'bsx-blocks' ) }>
                    <TextareaControl 
                        label={ __( 'SVG code', 'bsx-blocks' ) }
                        value={ content } 
                        onChange={ onChangeContent }
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
                <PanelBody title={ __( 'Link', 'bsx-blocks' ) }>
                    {
                        linkUrlInput( href, onChangeHref )
                    }
                    {
                        targetToggle( target, onChangeTarget )
                    }
                    {
                        relInput( rel, onChangeRel )
                    }
                </PanelBody>
            </InspectorControls>,
            <InspectorAdvancedControls>
                {
                    verticalAlignSelect( verticalAlign, onChangeVerticalAlign )
                }
                {
                    nodeNameSelect( nodeName, onChangeNodeName, [ '' , 'figure', 'div', 'span' ] )
                }
            </InspectorAdvancedControls>,
            (
                <RawHTML>{ content }</RawHTML>
            )
        ];
    },
    save: ( props ) => {
        const {
            className,
            attributes: {
                content,
                nodeName,
                href,
                target,
                rel,
                state,
                marginBefore,
                marginAfter,
                verticalAlign,
                textAlign,
            },
        } = props;

        // unwrap content (remove wrapping outer element)
        const unwrappedContent = unwrapContent( content );

        
        const wrapperClassNames = addClassNames( {
            state,
            marginBefore,
            marginAfter,
            verticalAlign,
            textAlign,
        }, 'svg-wrap' );

        const saveAttributes = makeSaveAttributes( {
            href: href, 
            target: target, 
            rel: href ? ( rel ? rel + ' noopener noreferrer' : 'noopener noreferrer' ) : '',
        } );

        let TagName = !! nodeName ? nodeName : '';
        if ( !! href ) {
            TagName = 'a';
        }

        return (
            <>
                {
                    TagName ? 
                    (
                        <TagName className={ wrapperClassNames } { ...saveAttributes }>
                            <RawHTML>{ unwrappedContent }</RawHTML>
                        </TagName>
                    )
                    : 
                    (
                        <RawHTML>{ unwrappedContent }</RawHTML>
                    )
                }
            </>
        );
    },
} );
