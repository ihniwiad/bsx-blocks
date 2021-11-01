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


// functions imports

import { svgIcon } from './../../_functions/wp-icons.js';
import { addClassNames } from './../../_functions/add-class-names.js';
import { makeSaveAttributes } from './../../_functions/attributes.js';
import { 
    buttonStateSelect,
    stateTypeSelect,
    sizeSelect,
    linkUrlInput,
    ignoreMailtoSpamProtectionToggle,
    targetToggle,
    disabledToggle,
    relInput,
    dataFnInput,
    marginLeftSelect,
    marginRightSelect,
    marginBeforeSelect,
    marginAfterSelect,
} from './../../_functions/controls.js';


// functions

const makeButtonClassNames = ( attributes, className ) => {

    const {
        state,
        stateType,
        size,
        hrefIsEmailIsContent,
        ignoreMailtoSpamProtection,
    } = attributes;

    const classNames = [];

    let buildClassName = 'btn-';

    if ( !! state ) {

        if ( state == 'text-link' ) {
            classNames.push( 'text-link' );
        }
        else {
            classNames.push( 'btn' );
            if ( !! stateType ) {
                buildClassName += stateType + '-';
            }
            buildClassName += state;
            classNames.push( buildClassName );
        }
    }

    if ( !! size ) {
        classNames.push( 'btn-' + size );
    }

    if ( ! ignoreMailtoSpamProtection && hrefIsEmailIsContent ) {
        classNames.push( 'create-mt' );
    }

    if ( !! className ) {
        classNames.push( className );
    }

    return classNames.join( ' ' );
}

const isEmailFormat = ( href ) => {
    if ( href.indexOf( 'mailto:' ) == 0 && /\S+@\S+\.\S+/.test( href.substring( 7 ) ) ) {
        let explode = href.substring( 7 ).split( '@' ); 
        const name = explode[ 0 ];
        explode = explode[ 1 ].split( '.' );
        const suffix = explode[ explode.length - 1 ]; // doest’t need to contain the whole suffix in cases of e.g. `.co.uk`
        explode.pop();
        const domain = explode.join( '.' ); // might contain part of suffix in cases of e.g. `.co.uk`
        // console.log( 'href: ' + href );
        // console.log( 'valid: ' + true );
        // console.log( 'name: ' + name );
        // console.log( 'domain: ' + domain );
        // console.log( 'suffix: ' + suffix );
        return {
            valid: true,
            name: name,
            domain: domain,
            suffix: suffix,
        };
    }
    else {
        // console.log( 'href: ' + href );
        // console.log( 'valid: ' + false );
        return {
            valid: false,
        };
    }
}

registerBlockType( 'bsx-blocks/button', {
    title: __( 'BSX Button', 'bsx-blocks' ),
    icon: svgIcon( 'button' ),
    category: 'layout',
    parent: [ 'bsx-blocks/buttons' ],
    attributes: {
        href: {
            type: 'string',
            default: '',
        },
        content: {
            type: 'array',
            source: 'children',
            selector: '.btn, .text-link',
        },
        target: {
            type: 'string',
            default: '',
        },
        rel: {
            type: 'string',
            default: '',
        },
        state: {
            type: 'string',
            default: 'primary',
        },
        stateType: {
            type: 'string',
            default: 'outline',
        },
        size: {
            type: 'string',
            default: '',
        },
        dataFn: {
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
        ignoreMailtoSpamProtection: {
            type: 'boolean',
        },
        disabled: {
            type: 'boolean',
            default: '',
        },
    },

    edit: ( props ) => {

        const {
            // className,
            attributes: {
                // get className from attributes and add manually to buttonClassNames
                className,
                href,
                content,
                target,
                rel,
                state,
                stateType,
                size,
                dataFn,
                marginLeft,
                marginRight,
                marginBefore,
                marginAfter,
                ignoreMailtoSpamProtection,
                disabled,
            },
            setAttributes,
            isSelected,
        } = props;

        const checkEmail = isEmailFormat( href );
        const hrefIsEmail = checkEmail.valid
        // const hrefIsEmailIsContent = checkEmail.valid && href == 'mailto:' + content;
        let hrefIsEmailIsContent = hrefIsEmail && ( href == 'mailto:' + content || ( typeof content == 'object' && content.length == 0 ) );

        const onChangeContent = ( value ) => {
            setAttributes( { content: value } );
        };
        const onChangeHref = ( value ) => {
            // TODO: check hrefIsEmailIsContent
            const checkEmail = isEmailFormat( href );
            const hrefIsEmail = checkEmail.valid
            hrefIsEmailIsContent = hrefIsEmail && ( href == 'mailto:' + content || ( typeof content == 'object' && content.length == 0 ) );
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
        const onChangeStateType = ( value ) => {
            setAttributes( { stateType: value } );
        };
        const onChangeSize = ( value ) => {
            setAttributes( { size: value } );
        };
        const onChangeDataFn = ( value ) => {
            setAttributes( { dataFn: value } );
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

        const onChangeDisabled = ( value ) => {
            setAttributes( { disabled: value } );
        };

        // exclude hrefIsEmailIsContent here to keep correct button title shown
        let buttonClassNames = makeButtonClassNames( { 
            state, 
            stateType, 
            size,
        }, className );
        buttonClassNames = addClassNames( {
            marginLeft, 
            marginRight, 
            marginBefore,
            marginAfter,
            disabled,
        }, buttonClassNames );

        // get content if is empty since content is spam protected email, get content from href instead of from html
        if ( ! ignoreMailtoSpamProtection && ! isSelected && typeof content == 'object' && content.length == 0 && hrefIsEmailIsContent ) {
            setAttributes( { content: href.substring( 7 ) } );
        }

        return [
            <InspectorControls>
                <PanelBody title={ __( 'Button link settings', 'bsx-blocks' ) }>
                    {
                        linkUrlInput( href, onChangeHref )
                    }
                    {
                        hrefIsEmail && (
                            <>
                                {
                                    ignoreMailtoSpamProtectionToggle( ignoreMailtoSpamProtection, onChangeIgnoreMailtoSpamProtection )
                                }
                            </>
                        )
                    }
                    {
                        targetToggle( target, onChangeTarget )
                    }
                    {
                        disabledToggle( disabled, onChangeDisabled )
                    }
                    {
                        relInput( rel, onChangeRel )
                    }
                    {
                        dataFnInput( dataFn, onChangeDataFn )
                    }
                </PanelBody>

                <PanelBody title={ __( 'Button appearance', 'bsx-blocks' ) }>
                    {
                        buttonStateSelect( state, onChangeState )
                    }
                    {
                        stateTypeSelect( stateType, onChangeStateType )
                    }
                    {
                        sizeSelect( size, onChangeSize )
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
                <>
                    <RichText
                        tagName={ href || state == 'text-link' ? 'a' : 'button' }
                        className={ buttonClassNames }
                        multiline={ false }
                        placeholder={ __( 'Add Title...', 'bsx-blocks' ) }
                        value={ content }
                        onChange={ onChangeContent }
                        allowedFormats={ [] }
                        keepPlaceholderOnFocus
                        href={ 'javascript:void( 0 );' }
                    />
                </>
            )
        ];
    },
    save: ( props ) => {
        const {
            // className,
            attributes: {
                // get className from attributes and add manually to buttonClassNames
                className,
                href,
                content,
                target,
                rel,
                state,
                stateType,
                size,
                dataFn,
                marginLeft,
                marginRight,
                marginBefore,
                marginAfter,
                ignoreMailtoSpamProtection,
                disabled,
            },
        } = props;

        const checkEmail = isEmailFormat( href );

        // adapt empty content of email link
        // if ( ! content && checkEmail.valid ) {
        //     content.push[ href.substring( 7 ) ];
        //     console.log( '----- save: content adapted' );
        // }

        // after reload content is empty in case of valid mailto href
        const hrefIsEmail = checkEmail.valid;
        const hrefIsEmailIsContent = hrefIsEmail && ( href == 'mailto:' + content || ( typeof content == 'object' && content.length == 0 ) );

        // console.log( '---------- checkEmail.valid: ' + checkEmail.valid );
        // console.log( '----- href: ' + href );
        // console.log( '----- content: ' + content );
        // console.log( '----- typeof content: ' + typeof content );
        // console.log( '----- content.length: ' + content.length );
        // console.log( '----- hrefIsEmailIsContent: ' + hrefIsEmailIsContent );
        
        let buttonClassNames = makeButtonClassNames( { 
            state, 
            stateType, 
            size,
            hrefIsEmailIsContent,
            ignoreMailtoSpamProtection,
        }, className );
        buttonClassNames = addClassNames( {
            marginLeft, 
            marginRight, 
            marginBefore,
            marginAfter,
            disabled,
        }, buttonClassNames );

        // save spam-protected mailto link format (no href-attribute, no content – both will be set via css / js):
        // `<a class="create-mt" data-fn="create-mt" data-mt-n="MY_NAME" data-mt-d="MY_DOMAIN" data-mt-s="MY_DOMAIN_SUFFIX"></a>`

        const saveAttributes = makeSaveAttributes( {
            href: ! ( ! ignoreMailtoSpamProtection && hrefIsEmail ) ? href : 'javascript:void( 0 );', 
            'data-fn': ! ignoreMailtoSpamProtection && hrefIsEmail ? 'create-mt' : dataFn,
            'data-mt-n': ! ignoreMailtoSpamProtection && hrefIsEmail ? checkEmail.name : '',
            'data-mt-d': ! ignoreMailtoSpamProtection && hrefIsEmail ? checkEmail.domain : '',
            'data-mt-s': ! ignoreMailtoSpamProtection && hrefIsEmail ? checkEmail.suffix : '',
            target: target, 
            rel: href ? ( rel ? rel + ' noopener noreferrer' : 'noopener noreferrer' ) : '',
            'disabled': ! href && disabled
        } );

        return (
            <>
                {
                    ( content && ! RichText.isEmpty( content ) || ! ignoreMailtoSpamProtection && hrefIsEmailIsContent ) && (
                        <RichText.Content 
                            tagName={ href || state == 'text-link' ? 'a' : 'button' } 
                            value={ ! ignoreMailtoSpamProtection && hrefIsEmailIsContent ? '' : content } 
                            className={ buttonClassNames }
                            { ...saveAttributes }
                        />
                    )
                }
            </>
        );
    },
} );
