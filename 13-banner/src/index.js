const { __, setLocaleData } = wp.i18n;
const {
    registerBlockType,
} = wp.blocks;
const {
    InnerBlocks,
    InspectorControls,
    InspectorAdvancedControls,
    MediaUpload,
} = wp.blockEditor;
const { 
    PanelBody,
    TextControl,
    ToggleControl,
    SelectControl,
    Button,
    SVG, 
    Path,
    RadioControl,
} = wp.components;

const { 
    withSelect, 
} = wp.data;


const makeClassNames = ( bannerType, bannerSize, belowNavbar, bgAttachment, bgSize, bgPosition, alignItems, marginBefore, marginAfter, paddingBefore, paddingAfter ) => {

    const classNames = [];

    if ( true ) {
        // always set bannerType and bannerSize to keep debugging easy
        classNames.push( 'banner-' + bannerType + '-' + bannerSize );
    }

    if ( belowNavbar ) {
        classNames.push( 'below-navbar-content' );
    }

    if ( bgAttachment ) {
        classNames.push( 'bg-' + bgAttachment );
    }
    if ( bgSize ) {
        classNames.push( 'bg-' + bgSize );
    }

    if ( bgPosition ) {
        classNames.push( 'bg-' + bgPosition );
    }
    
    if ( alignItems ) {
        classNames.push( 'd-flex' );
        classNames.push( 'align-items-' + alignItems );
    }

    if ( marginBefore && marginBefore === marginAfter ) {
        classNames.push( 'my-' + marginBefore );
    }
    else {
        if ( marginBefore ) {
            classNames.push( 'mt-' + marginBefore );
        }
        if ( marginAfter ) {
            classNames.push( 'mb-' + marginAfter );
        }
    }

    if ( paddingBefore && paddingBefore === paddingAfter ) {
        classNames.push( 'py-' + paddingBefore );
    }
    else {
        if ( paddingBefore ) {
            classNames.push( 'pt-' + paddingBefore );
        }
        if ( paddingAfter ) {
            classNames.push( 'pb-' + paddingAfter );
        }
    }

    return classNames.join( ' ' );
}

const getUrlTruncAndExtension = ( url ) => {

    const urlExplode = url.split( '.' );

    const fileExtension = urlExplode[ urlExplode.length - 1 ];
    urlExplode.pop();
    const urlWithoutFileExtension = urlExplode.join( '.' );

    return {
        trunc: urlWithoutFileExtension,
        extension: fileExtension,
    };
}

const fullImgIsScaled = ( fullUrl ) => {

    const urlWithoutFileExtension = getUrlTruncAndExtension( fullUrl ).trunc;

    return urlWithoutFileExtension.lastIndexOf( '-scaled' ) === urlWithoutFileExtension.length - 7;
}

const getOriginalImgUrl = ( fullUrl ) => {

    const truncAndExtension = getUrlTruncAndExtension( fullUrl );

    return truncAndExtension.trunc.substring(0, truncAndExtension.trunc.length - 7) + '.' + truncAndExtension.extension;
}

const getSizesAndWithoutSizesTruncFromUrlTrunc = ( urlTrunc ) => {

    const urlWithoutFileExtensionExplode = urlTrunc.split( '-' );
    const sizes = urlWithoutFileExtensionExplode[ urlWithoutFileExtensionExplode.length - 1 ].split( 'x' );

    urlWithoutFileExtensionExplode.pop();

    return {
        width: sizes[ 0 ],
        height: sizes[ 1 ],
        withoutSizesTrunc: urlWithoutFileExtensionExplode.join( '-' ),
    };
}

const makeSizedImgs = ( config ) => {

    const ratio = config.originalWidth / config.originalHeight;

    const urlTruncAndExtension = getUrlTruncAndExtension( config.url );

    const fileExtension = urlTruncAndExtension.extension;
    const urlWithoutFileExtension = urlTruncAndExtension.trunc;

    const sizesAndWithoutSizesTrunc = getSizesAndWithoutSizesTruncFromUrlTrunc( urlWithoutFileExtension );

    const width = sizesAndWithoutSizesTrunc.width;
    const urlWithoutSizesAndFileExtension = sizesAndWithoutSizesTrunc.withoutSizesTrunc;

    const returnList = [];

    config.scaleList.forEach( ( scale, index ) => {

        // calculate new size
        const scaledWidth = Math.round( width * scale );

        // check if default size exists for current img (only if original img is larger)
        if ( scaledWidth <= config.originalWidth ) {

            const scaledHeight = Math.round( scaledWidth / ratio );
            const scaledUrl = urlWithoutSizesAndFileExtension + '-' + scaledWidth + 'x' + scaledHeight + '.' + fileExtension;

            returnList.push( {
                url: scaledUrl,
                width: scaledWidth,
                height: scaledHeight,
            } );
        }

    } ); 

    return returnList;

}

const getOriginalImgSizes = ( originalImgUrl ) => {

    return new Promise( ( resolve, reject ) => {

        let img = document.createElement( 'img' );
        img.onload = () => { 

            resolve( {
                width: img.width,
                height: img.height,
            } );

            img.remove;
        };
        img.onerror = ( err ) => {
            reject( 'Error on loading image "' + originalImgUrl + '"', err );
        }
        img.src = originalImgUrl;
        document.body.appendChild( img );
    } );
}

const imageExists = ( url ) => {
    return new Promise( ( resolve, reject ) => {
        const xhr = new XMLHttpRequest();
        xhr.open( 'HEAD', url, true );
        xhr.onreadystatechange = () => {
            if ( xhr.readyState == 4 ) {
                if ( xhr.status == 200 ) {
                    resolve( true );
                } 
                else {
                    resolve( false );
                }
            }
        };
        xhr.send( null );
    } );
}

// scaled (hidden) img settings
const imgScaleList = [ 0.75, 1.5, 2 ];
const imgBaseSize = 'large';

const defaultImgList = [ 
    'thumbnail', 
    'medium', 
    imgBaseSize, 
    'full', 
];
const imgSizesOrder = [ 
    'thumbnail', 
    'medium', 
    imgScaleList[ 0 ] + '',
    imgBaseSize, 
    imgScaleList[ 1 ] + '',
    imgScaleList[ 2 ] + '',
    'full',
    'original',
];

// getting sorted list of all imgs (default and hidden scaled)
async function getImgSizes( img ) {

    let originalImgUrl = '';
    let originalWidth = 0;
    let originalHeight = 0;

    if ( fullImgIsScaled( img.url ) ) {
        // get original, get sizes
        originalImgUrl = getOriginalImgUrl( img.url );

        let originalImgSizes;
        try {
            originalImgSizes = await getOriginalImgSizes( originalImgUrl );
        } catch( err ) {
            console.error( err );
        }

        originalWidth = originalImgSizes.width || 0;
        originalHeight = originalImgSizes.height || 0;
    }
    else {
        // get sizes from full img
        originalWidth = img.sizes.full.width;
        originalHeight = img.sizes.full.height;
    }

    let scaledImgs = {};
    const returnImgs = [];

    // make sizes only if marge img exists
    if ( img.sizes.large != undefined ) {

        // config for making sizes (might change in newer WP versions)
        const sizedImgsConfig = {
            url: img.sizes[ imgBaseSize ].url,
            scaleList: imgScaleList,
            originalWidth: originalWidth,
            originalHeight: originalHeight,
        };
        const sizedImgs = makeSizedImgs( sizedImgsConfig );

        // check all imgs if exist (since WordPress might change hidden img sizes one day);
        await Promise.all( sizedImgs.map( async ( sizedImg, index ) => {
            const currentImageExists = await imageExists( sizedImg.url );
            if ( currentImageExists ) {
                scaledImgs[ imgScaleList[ index ] + '' ] = sizedImg;
            }
        } ) );

        // TEST – TODO: remove
        // for ( let [ key, value ] of Object.entries( scaledImgs ) ) {
        //     console.log( 'scaledImgs[ ' + key + ' ]: ' + value.url );
        // }

        // make ordered list of all existing default img sizes and scaled (hidden) img sizes
        imgSizesOrder.forEach( ( imgSize, index ) => {

            if ( defaultImgList.indexOf( imgSize ) != -1 && img.sizes[ imgSize ] != undefined ) {
                // get from default img list
                returnImgs.push( {
                    url: img.sizes[ imgSize ].url,
                    width: img.sizes[ imgSize ].width,
                    height: img.sizes[ imgSize ].height, 
                } );
            }
            else if ( imgScaleList.indexOf( parseFloat( imgSize ) ) != -1 && scaledImgs[ imgSize ] != undefined ) {
                // get from scaled imgs list
                returnImgs.push( scaledImgs[ imgSize ] );
            }
            else if ( imgSize == 'original' && originalImgUrl ) {
                // add unscaled original
                returnImgs.push( {
                    url: originalImgUrl,
                    width: originalWidth,
                    height: originalHeight, 
                } );
            }

        } );

    }

    // TEST – TODO: remove
    // returnImgs.forEach( ( returnImg, index ) => {
    //     console.log( 
    //         index + ':\n' 
    //         + returnImg.url + '\n'
    //         + returnImg.width + '\n'
    //         + returnImg.height + '\n'
    //     );
    // } );

    return returnImgs;
}

// responsive sizes
const responsiveMediaSrcIndexList = [
    {
        media: '(max-width: 999.98px)',
        imgSizeIndexShift: '-3',
    },
    {
        media: '(max-width: 1399.98px)',
        imgSizeIndexShift: '-2',
    },
];     
const makeSrcsetJson = ( _imgSizes, _imgSizeIndex ) => {
    // srcsetJson = "[ { media: '" + mobileMediaQuery + "', src: '" + url + "' }, { media: '" + smallMobileMediaQuery + "', src: '" + _imgSizes[ ( imgSizeIndex - mobileSizeStep > 0 ? imgSizeIndex - mobileSizeStep : 0 ) ].url + "' }, { media: '', src: '" + _imgSizes[ ( imgSizeIndex - smallMobileSizeStep > 0 ? imgSizeIndex - smallMobileSizeStep : 0 ) ].url + "' } ]";
    let srcsetJson = '[ ';
    responsiveMediaSrcIndexList.forEach( ( item, index ) => {
        // add item if img resulting indes > 0 (no square format)
        const currentImgSizeIndex = ( parseInt( _imgSizeIndex ) + parseInt( item.imgSizeIndexShift ) );
        if ( currentImgSizeIndex > 0 ) {
            srcsetJson += '{ media: \'' + item.media + '\', src: \'' + _imgSizes[ currentImgSizeIndex ].url + '\' }';
        }
        // add comma
        srcsetJson += ', ';
    } );
    if ( srcsetJson.lastIndexOf( ', ' ) == srcsetJson.length - 2 ) {
        srcsetJson = srcsetJson.substring( 0, srcsetJson.length - 2 );
    }
    srcsetJson += ' ]';
    return srcsetJson;
}

const makeSaveAttributes = ( attributes ) => {
    const nonEmptyAttributes = {};
    for ( let [ key, value ] of Object.entries( attributes ) ) {
        //console.log( 'key: "' + key + '", val: "' + value + '"' );
        if ( value ) {
            nonEmptyAttributes[ key ] = value;
        }
    }
    return nonEmptyAttributes;
}


// TODO: add additional portrait option


registerBlockType( 'bsx-blocks/banner', {
    title: __( 'BSX Banner', 'bsx-blocks' ),
    icon: 'category',
    category: 'layout',
    attributes: {
        templateName: {
            type: 'string',
            default: 'empty',
        },
        belowNavbar: {
            type: 'boolean',
            default: false,
        },
        imgId: {
            type: 'number',
        },
        imgSizes: {
            type: 'array',
            default: [],
        },
        imgSizeIndex: {
            type: 'string',
            default: '6',
        },
        url: {
            type: 'string',
        },
        bannerType: {
            type: 'string',
            default: 'vh',
        },
        bannerSize: {
            type: 'string',
            default: '2',
        },
        bgAttachment: {
            type: 'string',
            default: 'fixed',
        },
        bgSize: {
            type: 'string',
            default: 'cover',
        },
        bgPosition: {
            type: 'string',
            default: 'c',
        },
        alignItems: {
            type: 'string',
            default: 'center',
        },
        marginBefore: {
            type: 'string',
            default: '',
        },
        marginAfter: {
            type: 'string',
            default: '',
        },
        paddingBefore: {
            type: 'string',
            default: '',
        },
        paddingAfter: {
            type: 'string',
            default: '',
        },
    },

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
        };
    } )( ( props ) => {

        const {
            className,
            attributes: {
                templateName,
                belowNavbar,
                imgId,
                imgSizes,
                imgSizeIndex,
                url,
                bannerType,
                bannerSize,
                bgAttachment,
                bgSize,
                bgPosition,
                alignItems,
                marginBefore,
                marginAfter,
                paddingBefore,
                paddingAfter,
            },
            setAttributes,
            isSelected,
            children,
        } = props;

        const hasInnerBlocks = ( children ) => {
            return children.length > 0;
        }

        const templates = [
            {
                name: 'empty',
                title: __( 'Empty', 'bsx-blocks' ),
                icon: (
                    <svg 
                        width="48" 
                        height="48" 
                        viewBox="0 0 48 48" 
                        xmlns="http://www.w3.org/2000/svg" 
                        role="img" 
                        aria-hidden="true" 
                        focusable="false"
                    >
                        <path 
                            fill-rule="evenodd" 
                            clip-rule="evenodd" 
                            d="M23.58 26.28c0-.600003.1499985-1.099998.45-1.5.3000015-.400002.7433304-.8399976 1.33-1.32.5600028-.4533356.9833319-.8699981 1.27-1.25s.43-.8433306.43-1.39c0-.5466694-.1733316-1.0566643-.52-1.53s-.986662-.71-1.92-.71c-1.1066722 0-1.8533314.2766639-2.24.83-.3866686.5533361-.58 1.1766632-.58 1.87 0 .1466674.0033333.2666662.01.36.0066667.0933338.01.1533332.01.18h-1.78c-.0133334-.0533336-.0266666-.146666-.04-.28-.0133334-.133334-.02-.2733326-.02-.42 0-.7733372.1766649-1.4666636.53-2.08.3533351-.6133364.8899964-1.0999982 1.61-1.46.7200036-.3600018 1.5999948-.54 2.64-.54 1.2133394 0 2.2033295.3233301 2.97.97s1.15 1.5099946 1.15 2.59c0 .7066702-.1033323 1.3033309-.31 1.79-.2066677.4866691-.4533319.8799985-.74 1.18-.2866681.3000015-.6566644.6233316-1.11.97-.4800024.3866686-.8333322.7166653-1.06.99-.2266678.2733347-.34.6233312-.34 1.05v.82h-1.74zm-.14 2.56h2V31h-2zM39 12c1.1046 0 2 .8954 2 2v20c0 1.1046-.8954 2-2 2H9c-1.10457 0-2-.8954-2-2V14c0-1.1046.89543-2 2-2h30zm0 22V14H9v20h30z"
                        />
                    </svg>
                ),
                template: [
                    [
                        'core/paragraph',
                        { 
                            placeholder: 'Change paragraph text or delete...'
                        }
                    ]
                ],
                templateLock: false,
            },
            {
                name: 'container-with-heading',
                title: __( 'Container with Heading', 'bsx-blocks' ),
                icon: (
                    <svg 
                        width="48" 
                        height="48" 
                        viewBox="0 0 48 48" 
                        xmlns="http://www.w3.org/2000/svg" 
                        role="img" 
                        aria-hidden="true" 
                        focusable="false"
                    >
                        <path 
                            fill-rule="evenodd" 
                            clip-rule="evenodd" 
                            d="M23.58 26.28c0-.600003.1499985-1.099998.45-1.5.3000015-.400002.7433304-.8399976 1.33-1.32.5600028-.4533356.9833319-.8699981 1.27-1.25s.43-.8433306.43-1.39c0-.5466694-.1733316-1.0566643-.52-1.53s-.986662-.71-1.92-.71c-1.1066722 0-1.8533314.2766639-2.24.83-.3866686.5533361-.58 1.1766632-.58 1.87 0 .1466674.0033333.2666662.01.36.0066667.0933338.01.1533332.01.18h-1.78c-.0133334-.0533336-.0266666-.146666-.04-.28-.0133334-.133334-.02-.2733326-.02-.42 0-.7733372.1766649-1.4666636.53-2.08.3533351-.6133364.8899964-1.0999982 1.61-1.46.7200036-.3600018 1.5999948-.54 2.64-.54 1.2133394 0 2.2033295.3233301 2.97.97s1.15 1.5099946 1.15 2.59c0 .7066702-.1033323 1.3033309-.31 1.79-.2066677.4866691-.4533319.8799985-.74 1.18-.2866681.3000015-.6566644.6233316-1.11.97-.4800024.3866686-.8333322.7166653-1.06.99-.2266678.2733347-.34.6233312-.34 1.05v.82h-1.74zm-.14 2.56h2V31h-2zM39 12c1.1046 0 2 .8954 2 2v20c0 1.1046-.8954 2-2 2H9c-1.10457 0-2-.8954-2-2V14c0-1.1046.89543-2 2-2h30zm0 22V14H9v20h30z"
                        />
                    </svg>
                ),
                template: [ 
                    [ 
                        'bsx-blocks/container', 
                        {
                        },
                        [
                            [
                                'core/heading',
                                { 
                                    placeholder: 'Add heading, configure heading level...',
                                    className: 'display-1 text-white text-shadow-darker'
                                }
                            ]
                        ],
                    ], 
                ],
                templateLock: false,
            },
        ];

        const getTemplate = ( currentTemplateName ) => {
            const currentTemplate = templates.find( ( item ) => item.name === currentTemplateName );
            return currentTemplate ? currentTemplate.template : [];
        };

        let template = getTemplate( templateName );

        const onTemplateChange = ( value ) => {
            template = getTemplate( value );
            setAttributes( { templateName: value } );

            console.log( 'changed templateName: ' + value );
            console.log( 'changed template: ' + template );
        };

        const onChangeBelowNavbar = ( value ) => {
            setAttributes( { belowNavbar: value } );
        };

        async function onSelectImage( img ) {

            if ( typeof img.url !== 'undefined' ) {

                const newImgSizes = await getImgSizes( img );

                // check if current img size index fits to new img (might be too large)
                let newImgSizeIndex = parseInt( imgSizeIndex );
                if ( imgSizeIndex >= newImgSizes.length ) {
                    newImgSizeIndex = newImgSizes.length - 1;
                }

                // do not use thumbnail (square format) for srcset, start with img sizes index 1
                setAttributes( {
                    imgId: img.id,
                    imgSizes: newImgSizes,
                    imgSizeIndex: newImgSizeIndex.toString(),
                    url: newImgSizes[ newImgSizeIndex ].url,
                } );

                //console.log( 'url: ' + newImgSizes[ newImgSizeIndex ].url );
            }
        };

        const onChangeBannerType = ( value ) => {
            setAttributes( { bannerType: value } );
        };
        const onChangeBannerSize = ( value ) => {
            setAttributes( { bannerSize: value } );
        };

        const onChangeBgAttachment = ( value ) => {
            setAttributes( { bgAttachment: value } );
        };
        const onChangeBgSize = ( value ) => {
            setAttributes( { bgSize: value } );
        };
        const onChangeBgPosition = ( value ) => {
            setAttributes( { bgPosition: value } );
        };

        const onChangeAlignItems = ( value ) => {
            setAttributes( { alignItems: value } );
        };

        const onChangeMarginBefore = ( value ) => {
            setAttributes( { marginBefore: value } );
        };

        const onChangeMarginAfter = ( value ) => {
            setAttributes( { marginAfter: value } );
        };

        const onChangePaddingBefore = ( value ) => {
            setAttributes( { paddingBefore: value } );
        };

        const onChangePaddingAfter = ( value ) => {
            setAttributes( { paddingAfter: value } );
        };

        const onChangeImgSizeIndex = ( value ) => {
            setAttributes( { 
                imgSizeIndex: value.toString(),
                url: imgSizes[ value ].url,
            } );
        };
        const imgSizeRadioControlOptions = [];
        imgSizes.forEach( ( imgSize, index ) => {
            imgSizeRadioControlOptions.push( 
                { value: index.toString(), label: imgSize.width + 'x' + imgSize.height + ( imgSize.width === imgSize.height ? ' ' + __( '(Square format)', 'bsx-blocks' ) : '' ) } 
            );
        } );

        const bannerClassName = makeClassNames( bannerType, bannerSize, belowNavbar, bgAttachment, bgSize, bgPosition, alignItems, marginBefore, marginAfter, paddingBefore, paddingAfter );

        const bannerStyle = { backgroundImage: `url(${ url })` };

        return [
            <InspectorControls>
                <PanelBody title={ __( 'Banner Template', 'bsx-blocks' ) }>
                    <div className="bsxui-icon-text-button-list">
                        { templates.map( ( template, index ) => (
                            <Button
                                label={ template.title }
                                onClick={ () => {
                                    onTemplateChange( template.name );
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

                <PanelBody title={ __( 'Banner image', 'bsx-blocks' ) }>
                    {
                        imgId ? (
                            <div class="bsxui-config-panel-row">
                                <img class="bsxui-config-panel-img" src={ url } alt="Image preview" />
                            </div>
                        )
                        : 
                        (
                            <div class="bsxui-config-panel-row">
                                <div class="bsxui-config-panel-text">{ __( '– No image selected yet –', 'bsx-blocks' ) }</div>
                            </div>
                        )
                    }
                    <div class="bsxui-config-panel-row">
                        <MediaUpload
                            onSelect={ onSelectImage }
                            allowedTypes="image"
                            value={ imgId }
                            render={ ( { open } ) => (
                                <Button 
                                    onClick={ open }
                                    isSecondary
                                >
                                    { __( 'Change / upload Image', 'bsx-blocks' ) }
                                </Button>
                            ) }
                        />
                    </div>
                    <RadioControl
                        label={ __( 'Image size and format', 'bsx-blocks' ) }
                        selected={ imgSizeIndex.toString() }
                        options={ imgSizeRadioControlOptions }
                        onChange={ onChangeImgSizeIndex }
                    />
                    {
                        imgSizes[ imgSizeIndex ] != undefined && imgSizes[ imgSizeIndex ].url != undefined && (
                            <div class="components-base-control">
                                <a href={ imgSizes[ imgSizeIndex ].url } target="_blank">{ __( 'Preview selected image', 'bsx-blocks' ) }</a>
                            </div>
                        )
                    }
                </PanelBody>

                <PanelBody title={ __( 'Banner dimensions', 'bsx-blocks' ) }>
                    <SelectControl 
                        label={ __( 'Banner height type', 'bsx-blocks' ) }
                        value={ bannerType }
                        onChange={ onChangeBannerType }
                        options={ [
                            { value: 'vh', label: __( 'Viewport dependent height', 'bsx-blocks' ) },
                            { value: 'st', label: __( 'Static height', 'bsx-blocks' ) },
                        ] }
                        help={ __( 'Viewport dependent height will be e.g. all viewport height or viewport height - X pixels. Static height instead depends only on the banners contents.', 'bsx-blocks' ) }
                    />
                    <SelectControl 
                        label={ __( 'Banner height size', 'bsx-blocks' ) }
                        value={ bannerSize }
                        onChange={ onChangeBannerSize }
                        options={ [
                            { value: '1', label: __( '1 (biggest)', 'bsx-blocks' ) },
                            { value: '2', label: __( '2', 'bsx-blocks' ) },
                            { value: '3', label: __( '3 (smallest)', 'bsx-blocks' ) },
                        ] }
                        help={ __( 'Choose from 1 (maximum) to 3 (minimum)', 'bsx-blocks' ) }
                    />
                    <SelectControl 
                        label={ __( 'Background attachement', 'bsx-blocks' ) }
                        value={ bgAttachment }
                        onChange={ onChangeBgAttachment }
                        options={ [
                            { value: 'static', label: __( 'static', 'bsx-blocks' ) },
                            { value: 'fixed', label: __( 'fixed', 'bsx-blocks' ) },
                        ] }
                    />
                    <SelectControl 
                        label={ __( 'Align items', 'bsx-blocks' ) }
                        value={ alignItems }
                        onChange={ onChangeAlignItems }
                        options={ [
                            { value: 'center', label: __( 'center', 'bsx-blocks' ) },
                            { value: 'end', label: __( 'end', 'bsx-blocks' ) },
                        ] }
                    />
                </PanelBody>

                <PanelBody title={ __( 'Margin', 'bsx-blocks' ) }>
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
                        help={ __( 'Spacer before Banner', 'bsx-blocks' ) }
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
                        help={ __( 'Spacer after Banner', 'bsx-blocks' ) }
                    />
                </PanelBody>
            </InspectorControls>,

            <InspectorAdvancedControls>
                <ToggleControl
                    label={ __( 'Below navbar', 'bsx-blocks' ) }
                    checked={ !! belowNavbar }
                    onChange={ onChangeBelowNavbar }
                    help={ __( 'Enable if container starts below navbar. If enabled container has spacer top to avoid overlapping its contents by navbar.', 'bsx-blocks' ) }
                />
                <SelectControl 
                    label={ __( 'Background advanced position', 'bsx-blocks' ) }
                    value={ bgPosition }
                    onChange={ onChangeBgPosition }
                    options={ [
                        { value: 'c', label: __( 'Center center', 'bsx-blocks' ) },
                        { value: 'c25', label: __( 'Center 25%', 'bsx-blocks' ) },
                        { value: 'c66', label: __( 'Center 66%', 'bsx-blocks' ) },
                        { value: 'c75', label: __( 'Center 75%', 'bsx-blocks' ) },
                        { value: 'ct', label: __( 'Center top', 'bsx-blocks' ) },
                        { value: 'rc', label: __( 'Right center', 'bsx-blocks' ) },
                        { value: '33c', label: __( '33% center', 'bsx-blocks' ) },
                        { value: '80c', label: __( '80% center', 'bsx-blocks' ) },
                        { value: '66t', label: __( '66% top', 'bsx-blocks' ) },
                        { value: '66c', label: __( '66% center', 'bsx-blocks' ) },
                    ] }
                />
                <SelectControl 
                    label={ __( 'Background advanced size', 'bsx-blocks' ) }
                    value={ bgSize }
                    onChange={ onChangeBgSize }
                    options={ [
                        { value: 'cover', label: __( 'Cover', 'bsx-blocks' ) },
                        { value: 'contain', label: __( 'Contain', 'bsx-blocks' ) },
                        { value: '100a', label: __( '100% auto', 'bsx-blocks' ) },
                    ] }
                />

                <SelectControl 
                    label={ __( 'Padding before', 'bsx-blocks' ) }
                    value={ paddingBefore }
                    onChange={ onChangePaddingBefore }
                    options={ [
                        { value: '', label: __( '– none –', 'bsx-blocks' ) },
                        { value: '1', label: __( 'extra small', 'bsx-blocks' ) },
                        { value: '2', label: __( 'small', 'bsx-blocks' ) },
                        { value: '3', label: __( 'medium', 'bsx-blocks' ) },
                        { value: '4', label: __( 'large', 'bsx-blocks' ) },
                        { value: '5', label: __( 'extra large', 'bsx-blocks' ) },
                    ] }
                    help={ __( 'Inner spacer before', 'bsx-blocks' ) }
                />
                <SelectControl 
                    label={ __( 'Padding after', 'bsx-blocks' ) }
                    value={ paddingAfter }
                    onChange={ onChangePaddingAfter }
                    options={ [
                        { value: '', label: __( '– none –', 'bsx-blocks' ) },
                        { value: '1', label: __( 'extra small', 'bsx-blocks' ) },
                        { value: '2', label: __( 'small', 'bsx-blocks' ) },
                        { value: '3', label: __( 'medium', 'bsx-blocks' ) },
                        { value: '4', label: __( 'large', 'bsx-blocks' ) },
                        { value: '5', label: __( 'extra large', 'bsx-blocks' ) },
                    ] }
                    help={ __( 'Inner spacer after', 'bsx-blocks' ) }
                />
            </InspectorAdvancedControls>,

            (
                <div className={ bannerClassName } style={ bannerStyle }>
                    {
                        ! imgId && (
                            <div className="bsxui-in-widget-overlay-panel bsxui-top">
                                <MediaUpload
                                    onSelect={ onSelectImage }
                                    allowedTypes="image"
                                    value={ imgId }
                                    render={ ( { open } ) => (
                                        <Button 
                                            onClick={ open }
                                            isSecondary
                                        >
                                            { __( 'Select / upload Image', 'bsx-blocks' ) }
                                        </Button>
                                    ) }
                                />
                            </div>
                        )
                    }
                    <InnerBlocks 
                        template={ template }
                        renderAppender={
                            hasInnerBlocks
                            ? undefined
                            : () => <InnerBlocks.ButtonBlockAppender />
                        }
                    />
                </div>
            )
        ];
    } ),
    save: ( props ) => {
        const {
            className,
            attributes: {
                templateName,
                belowNavbar,
                imgId,
                imgSizes,
                imgSizeIndex,
                url,
                bannerType,
                bannerSize,
                bgAttachment,
                bgSize,
                bgPosition,
                alignItems,
                marginBefore,
                marginAfter,
                paddingBefore,
                paddingAfter,
            },
        } = props;

        const bannerClassName = makeClassNames( bannerType, bannerSize, belowNavbar, bgAttachment, bgSize, bgPosition, alignItems, marginBefore, marginAfter, paddingBefore, paddingAfter );

        const srcsetJson = makeSrcsetJson( imgSizes, imgSizeIndex );

        const saveAttributes = makeSaveAttributes( {
            'data-srcset': srcsetJson,
        } );

        return (
            <div className={ bannerClassName } data-fn="lazyload" data-src={ url } { ...saveAttributes }>
                <div class="banner-inner">
                    <InnerBlocks.Content />
                </div>
            </div>
        );
    },
} );
