// TODO: add state classes for link button
// TODO: add toggle control for spam protected mailto or tel links (requires basic package js adaption)


const { __, setLocaleData } = wp.i18n;
const {
    registerBlockType,
} = wp.blocks;
const {
    InnerBlocks,
    InspectorControls,
    URLInput,
    RichText,
} = wp.blockEditor;
const { 
    TextControl,
    PanelBody,
    RangeControl,
    ToggleControl,
    SelectControl,
} = wp.components;

const { 
    withSelect, 
} = wp.data;


// functions imports

import { addClassNames } from './../../_functions/add-class-names.js';

import { makeSaveAttributes } from './../../_functions/attributes.js';


// functions

const makeButtonClassNames = ( config ) => {

    const classNames = [ 'btn' ];

    let buildClassName = 'btn-';

    if ( !! config.state ) {
        if ( !! config.stateType ) {
            buildClassName += config.stateType + '-';
        }
        buildClassName += config.state;
        classNames.push( buildClassName );
    }

    if ( !! config.size ) {
        classNames.push( 'btn-' + config.size );
    }

    if ( !! config.hrefIsContentIsEmail ) {
        classNames.push( 'create-mt' );
    }

    return classNames.join( ' ' );
}

// const makeSaveAttributes = ( attributes ) => {
//     const nonEmptyAttributes = {};
//     for ( let [ key, value ] of Object.entries( attributes ) ) {
//         //console.log( 'key: "' + key + '", val: "' + value + '"' );
//         if ( value ) {
//             nonEmptyAttributes[ key ] = value;
//         }
//     }
//     return nonEmptyAttributes;
// }

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

// const checkHrefIsContentIsEmail = ( emailIsValid, href, content ) => {
//     return emailIsValid && href == 'mailto:' + content;
// }

registerBlockType( 'bsx-blocks/button', {
    title: __( 'BSX Button', 'bsx-blocks' ),
    icon: 'admin-links',
    category: 'layout',
    parent: [ 'bsx-blocks/buttons' ],
    attributes: {
        href: {
            type: 'string',
            default: '',
        },
        hash: {
            type: 'string',
            default: '',
        },
        content: {
            type: 'array',
            source: 'children',
            selector: '.btn',
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
    },

    edit: ( props ) => {

        const {
            className,
            attributes: {
                href,
                hash,
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
            },
            setAttributes,
            isSelected,
        } = props;

        const onChangeContent = ( value ) => {
            setAttributes( { content: value } );
        };
        const onChangeHref = ( value ) => {
            setAttributes( { href: value } );
        };
        const onChangeHash = ( value ) => {
            setAttributes( { hash: value } );
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

        const checkEmail = isEmailFormat( href );
        // const hrefIsContentIsEmail = checkEmail.valid && href == 'mailto:' + content;
        const hrefIsContentIsEmail = checkEmail.valid && ( href == 'mailto:' + content || ( typeof content == 'object' && content.length == 0 ) );

        // exclude hrefIsContentIsEmail here to keep correct button title shown
        let buttonClassNames = makeButtonClassNames( { 
            state: state, 
            stateType: stateType, 
            size: size,
        } );
        buttonClassNames = addClassNames( {
            marginLeft: marginLeft, 
            marginRight: marginRight, 
            marginBefore: marginBefore,
            marginAfter: marginAfter,
        }, buttonClassNames );

        // adapt content since mailto link saves empty content, see `value={ ! content && hrefIsContentIsEmail ? href.substring( 7 ) : content }`

        // edit spam-protected mailto link format (no class name `create-mt`, no data-attributes):
        // `<a>MY_NAME@MY_DOMAIN.MY_DOMAIN_SUFFIX</a>` or `<a>SOME_CONTENT</a>`
        // console.log( '! content && hrefIsContentIsEmail ? [ href.substring( 7 ) ] : content: ' + ! content && hrefIsContentIsEmail ? [ href.substring( 7 ) ] : content );

        return [
            <InspectorControls>
                <PanelBody title={ __( 'Button link settings', 'bsx-blocks' ) }>
                    <URLInput
                        label={ __( 'Link URL', 'bsx-blocks' ) }
                        value={ href }
                        onChange={ onChangeHref }
                    />
                    <ToggleControl
                        label={ __( 'Open in new tab', 'bsx-blocks' ) }
                        checked={ target == '_blank' }
                        onChange={ onChangeTarget }
                    />
                    <TextControl 
                        label={ __( 'Hash (optional)', 'bsx-blocks' ) }
                        value={ hash } 
                        onChange={ onChangeHash }
                    />
                    <TextControl 
                        label={ __( 'Rel (optional)', 'bsx-blocks' ) }
                        value={ rel } 
                        onChange={ onChangeRel }
                    />
                    <TextControl 
                        label={ __( 'data-fn (optional)', 'bsx-blocks' ) }
                        value={ dataFn } 
                        onChange={ onChangeDataFn }
                    />
                </PanelBody>

                <PanelBody title={ __( 'Button appearance', 'bsx-blocks' ) }>
                    <SelectControl 
                        label={ __( 'State', 'bsx-blocks' ) }
                        value={ state }
                        onChange={ onChangeState }
                        options={ [
                            { value: 'primary', label: __( 'Primary', 'bsx-blocks' ) },
                            { value: 'secondary', label: __( 'Secondary', 'bsx-blocks' ) },
                            { value: 'success', label: __( 'Success', 'bsx-blocks' ) },
                            { value: 'danger', label: __( 'Danger', 'bsx-blocks' ) },
                            { value: 'warning', label: __( 'Warning', 'bsx-blocks' ) },
                            { value: 'info', label: __( 'Info', 'bsx-blocks' ) },
                            { value: 'light', label: __( 'Light', 'bsx-blocks' ) },
                            { value: 'dark', label: __( 'Dark', 'bsx-blocks' ) },
                            { value: 'link', label: __( 'Link', 'bsx-blocks' ) },
                        ] }
                    />
                    <SelectControl label={ __( 'State Type', 'bsx-blocks' ) }
                        value={ stateType }
                        onChange={ onChangeStateType }
                        options={ [
                            { value: 'outline', label: __( 'Outline', 'bsx-blocks' ) },
                            { value: '', label: __( 'Filled', 'bsx-blocks' ) },
                        ] }
                    />
                    <SelectControl label={ __( 'Size', 'bsx-blocks' ) }
                        value={ size }
                        onChange={ onChangeSize }
                        options={ [
                            { value: '', label: __( '– unset –', 'bsx-blocks' ) },
                            { value: 'sm', label: __( 'Small', 'bsx-blocks' ) },
                            { value: 'lg', label: __( 'Large', 'bsx-blocks' ) },
                        ] }
                    />
                </PanelBody>

                <PanelBody title={ __( 'Margin', 'bsx-blocks' ) }>
                    <SelectControl 
                        label={ __( 'Margin left', 'bsx-blocks' ) }
                        value={ marginLeft }
                        onChange={ onChangeMarginLeft }
                        options={ [
                            { value: '', label: __( '– none –', 'bsx-blocks' ) },
                            { value: '1', label: __( 'extra small', 'bsx-blocks' ) },
                            { value: '2', label: __( 'small', 'bsx-blocks' ) },
                            { value: '3', label: __( 'medium', 'bsx-blocks' ) },
                        ] }
                    />
                    <SelectControl 
                        label={ __( 'Margin right', 'bsx-blocks' ) }
                        value={ marginRight }
                        onChange={ onChangeMarginRight }
                        options={ [
                            { value: '', label: __( '– none –', 'bsx-blocks' ) },
                            { value: '1', label: __( 'extra small', 'bsx-blocks' ) },
                            { value: '2', label: __( 'small', 'bsx-blocks' ) },
                            { value: '3', label: __( 'medium', 'bsx-blocks' ) },
                        ] }
                    />
                    <SelectControl 
                        label={ __( 'Margin before', 'bsx-blocks' ) }
                        value={ marginBefore }
                        onChange={ onChangeMarginBefore }
                        options={ [
                            { value: '', label: __( '– unset –', 'bsx-blocks' ) },
                            { value: '0', label: __( 'none (0)', 'bsx-blocks' ) },
                            { value: '1', label: __( 'extra small', 'bsx-blocks' ) },
                            { value: '2', label: __( 'small', 'bsx-blocks' ) },
                            { value: '3', label: __( 'medium', 'bsx-blocks' ) },
                            { value: '4', label: __( 'large', 'bsx-blocks' ) },
                            { value: '5', label: __( 'extra large', 'bsx-blocks' ) },
                        ] }
                        help={ __( 'Spacer before element', 'bsx-blocks' ) }
                    />
                    <SelectControl 
                        label={ __( 'Margin after', 'bsx-blocks' ) }
                        value={ marginAfter }
                        onChange={ onChangeMarginAfter }
                        options={ [
                            { value: '', label: __( '– unset –', 'bsx-blocks' ) },
                            { value: '0', label: __( 'none (0)', 'bsx-blocks' ) },
                            { value: '1', label: __( 'extra small', 'bsx-blocks' ) },
                            { value: '2', label: __( 'small', 'bsx-blocks' ) },
                            { value: '3', label: __( 'medium', 'bsx-blocks' ) },
                            { value: '4', label: __( 'large', 'bsx-blocks' ) },
                            { value: '5', label: __( 'extra large', 'bsx-blocks' ) },
                        ] }
                        help={ __( 'Spacer after element', 'bsx-blocks' ) }
                    />
                </PanelBody>
            </InspectorControls>,
            (
                <>
                    <span className={ buttonClassNames }>
                        <RichText
                            tagName="a"
                            multiline={ false }
                            placeholder={ __( 'Add Title...', 'bsx-blocks' ) }
                            value={ typeof content == 'object' && content.length == 0 && hrefIsContentIsEmail ? [ href.substring( 7 ) ] : content }
                            onChange={ onChangeContent }
                            allowedFormats={ [] }
                            keepPlaceholderOnFocus
                        />
                    </span>
                </>
            )
        ];
    },
    save: ( props ) => {
        const {
            className,
            attributes: {
                href,
                hash,
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
            },
        } = props;

        const checkEmail = isEmailFormat( href );

        // adapt empty content of email link
        // if ( ! content && checkEmail.valid ) {
        //     content.push[ href.substring( 7 ) ];
        //     console.log( '----- save: content adapted' );
        // }

        // after reload content is empty in case of valid mailto href
        const hrefIsContentIsEmail = checkEmail.valid && ( href == 'mailto:' + content || ( typeof content == 'object' && content.length == 0 ) );

        // console.log( '---------- checkEmail.valid: ' + checkEmail.valid );
        // console.log( '----- href: ' + href );
        // console.log( '----- content: ' + content );
        // console.log( '----- typeof content: ' + typeof content );
        // console.log( '----- content.length: ' + content.length );
        // console.log( '----- hrefIsContentIsEmail: ' + hrefIsContentIsEmail );

        let buttonClassNames = makeButtonClassNames( { 
            state: state, 
            stateType: stateType, 
            size: size,
            hrefIsContentIsEmail: hrefIsContentIsEmail,
        } );
        buttonClassNames = addClassNames( {
            marginLeft: marginLeft, 
            marginRight: marginRight, 
            marginBefore: marginBefore,
            marginAfter: marginAfter,
        }, buttonClassNames );

        // save spam-protected mailto link format (no href-attribute, no content – both will be set via css / js):
        // `<a class="create-mt" data-fn="create-mt" data-mt-n="MY_NAME" data-mt-d="MY_DOMAIN" data-mt-s="MY_DOMAIN_SUFFIX"></a>`

        const saveAttributes = makeSaveAttributes( {
            href: ! hrefIsContentIsEmail ? ( hash ? href + '#' + hash : href ) : 'javascript:void( 0 );', 
            'data-fn': checkEmail.valid ? 'create-mt' : dataFn,
            'data-mt-n': checkEmail.valid ? checkEmail.name : '',
            'data-mt-d': checkEmail.valid ? checkEmail.domain : '',
            'data-mt-s': checkEmail.valid ? checkEmail.suffix : '',
            target: target, 
            rel: href && ! hrefIsContentIsEmail ? ( rel ? rel + ' noopener noreferrer' : 'noopener noreferrer' ) : '',
        } );

        return (
            <>
                {
                    ( content && ! RichText.isEmpty( content ) || hrefIsContentIsEmail ) && (
                        <RichText.Content 
                            tagName={ href ? 'a' : 'button' } 
                            value={ hrefIsContentIsEmail ? '' : content } 
                            className={ buttonClassNames }
                            { ...saveAttributes }
                        />
                    )
                }
            </>
        );
    },
} );
