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


import { addClassNames } from './../_functions/add-class-names.js';


const makeBannerClassNames = ( bannerType, bannerSize, belowNavbar, bgAttachment, bgSize, bgPosition, alignItems, templateName, marginBefore, marginAfter, paddingBefore, paddingAfter ) => {

    const classNames = [];

    if ( true ) {
        // always set bannerType and bannerSize to keep debugging easy
        classNames.push( 'banner-' + bannerType + '-' + bannerSize );
    }

    if ( !! belowNavbar ) {
        classNames.push( 'below-navbar-content' );
    }

    if ( !! bgAttachment ) {
        classNames.push( 'bg-' + bgAttachment );
    }
    if ( !! bgSize ) {
        classNames.push( 'bg-' + bgSize );
    }

    if ( !! bgPosition ) {
        classNames.push( 'bg-' + bgPosition );
    }
    
    if ( !! alignItems ) {
        classNames.push( 'd-flex' );
        if ( templateName !== 'column-row-banner' ) {
            classNames.push( 'align-items-' + alignItems );
        }
    }
    
    if ( !! templateName && templateName == 'column-row-banner' && classNames.indexOf( 'd-flex' ) == -1 ) {
        classNames.push( 'd-flex' );
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


const makeBannerInnerClassNames = ( config ) => {

    const classNames = [ 'banner-inner' ];
    
    if ( !! config.templateName && config.templateName == 'column-row-banner' ) {
        classNames.push( 'w-100' );
        classNames.push( 'd-flex' );
        classNames.push( 'flex-column' );
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
const responsivePortraitMediaIndexList = [
    {
        media: '(orientation: portrait) and (max-width: 499.98px)',
        imgSizeIndexShift: '-1',
    },
    {
        media: '(orientation: portrait)',
        imgSizeIndexShift: '0',
    },
];
const responsiveMediaIndexList = [
    {
        media: '(max-width: 999.98px)',
        imgSizeIndexShift: '-3',
    },
    {
        media: '(max-width: 1399.98px)',
        imgSizeIndexShift: '-2',
    },
];
const makeSrcsetJson = ( _imgSizes, _imgSizeIndex, _portraitImgSizes, _portraitImgSizeIndex ) => {
    // srcsetJson = "[ { media: '" + mobileMediaQuery + "', src: '" + url + "' }, { media: '" + smallMobileMediaQuery + "', src: '" + _imgSizes[ ( imgSizeIndex - mobileSizeStep > 0 ? imgSizeIndex - mobileSizeStep : 0 ) ].url + "' }, { media: '', src: '" + _imgSizes[ ( imgSizeIndex - smallMobileSizeStep > 0 ? imgSizeIndex - smallMobileSizeStep : 0 ) ].url + "' } ]";
    let srcsetJson = '[ ';
    responsivePortraitMediaIndexList.forEach( ( item, index ) => {
        // add item if img resulting indes > 0 (no square format)
        const currentPortraitImgSizeIndex = ( parseInt( _portraitImgSizeIndex ) + parseInt( item.imgSizeIndexShift ) );
        if ( currentPortraitImgSizeIndex > 0 && currentPortraitImgSizeIndex < _portraitImgSizes.length ) {
            srcsetJson += '{ media: \'' + item.media + '\', src: \'' + _portraitImgSizes[ currentPortraitImgSizeIndex ].url + '\' }, ';
        }
    } );
    responsiveMediaIndexList.forEach( ( item, index ) => {
        // add item if img resulting indes > 0 (no square format)
        const currentImgSizeIndex = ( parseInt( _imgSizeIndex ) + parseInt( item.imgSizeIndexShift ) );
        if ( currentImgSizeIndex > 0 && currentImgSizeIndex < _imgSizes.length ) {
            srcsetJson += '{ media: \'' + item.media + '\', src: \'' + _imgSizes[ currentImgSizeIndex ].url + '\' }, ';
        }
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


// insert directly into banner element without `.banner-inner`
const noBannerInnerTemplateNames = [
    'column-row-banner',
];


registerBlockType( 'bsx-blocks/banner', {
    title: __( 'BSX Banner', 'bsx-blocks' ),
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" role="img" aria-hidden="true" focusable="false">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M39,16H9c-1.1,0-2,0.9-2,2v12c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V18C41,16.9,40.1,16,39,16z M12,18c1.66,0,3,1.34,3,3 s-1.34,3-3,3s-3-1.34-3-3S10.34,18,12,18z M39,30H9v-2l8-3l4,2l12-6l6,4V30z"/>
        </svg>
    ),
    category: 'layout',
    attributes: {
        templateName: {
            type: 'string',
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
        portraitImgId: {
            type: 'number',
        },
        portraitImgSizes: {
            type: 'array',
            default: [],
        },
        portraitImgSizeIndex: {
            type: 'string',
            default: '3',
        },
        portraitUrl: {
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
                portraitImgId,
                portraitImgSizes,
                portraitImgSizeIndex,
                portraitUrl,
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" role="img" aria-hidden="true" focusable="false">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M39,16H9c-1.1,0-2,0.9-2,2v12c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V18C41,16.9,40.1,16,39,16z M24.72,30.03 h-2.02v-1.89h2.02V30.03z M26.91,23.22c-0.39,0.58-0.9,1.12-1.52,1.61c-0.31,0.28-0.51,0.53-0.58,0.77s-0.11,0.6-0.11,1.07h-1.98 c0.01-0.79,0.09-1.35,0.26-1.67c0.17-0.32,0.56-0.74,1.16-1.25c0.43-0.42,0.77-0.82,1.02-1.18c0.24-0.37,0.37-0.78,0.37-1.25 c0-0.54-0.14-0.95-0.42-1.23s-0.69-0.43-1.22-0.43c-0.46,0-0.85,0.12-1.15,0.36c-0.31,0.24-0.46,0.61-0.46,1.1h-1.98 c0.01-1,0.34-1.77,1-2.31c0.66-0.54,1.52-0.8,2.59-0.8c1.16,0,2.05,0.29,2.68,0.86s0.94,1.38,0.94,2.43 C27.5,22.01,27.3,22.65,26.91,23.22z"/>
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" role="img" aria-hidden="true" focusable="false">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M39,16H9c-1.1,0-2,0.9-2,2v12c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V18C41,16.9,40.1,16,39,16z M13,31h-1v-2h1V31z M13,27h-1 v-2h1V27z M13,23h-1v-2h1V23z M13,19h-1v-2h1V19z M27,26H14v-3h13V26z M36,31h-1v-2h1V31z M36,27h-1v-2h1V27z M36,23h-1v-2h1V23z M36,19h-1v-2h1V19z"/>
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
                                    placeholder: 'Add heading text, configure heading level...',
                                    textSize: 'display-1',
                                    textColor: 'white',
                                    textShadow: 'darker',
                                }
                            ]
                        ],
                    ], 
                ],
                templateLock: false,
            },
            {
                name: 'column-row-banner',
                title: __( 'Bottom bar Banner', 'bsx-blocks' ),
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" role="img" aria-hidden="true" focusable="false">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M39,16H9c-1.1,0-2,0.9-2,2v12c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V18C41,16.9,40.1,16,39,16z M35,17h1v2h-1V17z M35,21h1v2 h-1V21z M35,25h1v2h-1V25z M14,21h13v3H14V21z M12,17h1v2h-1V17z M12,21h1v2h-1V21z M12,25h1v2h-1V25z M39,30H9v-2h30V30z"/>
                    </svg>
                ),
                template: [  
                    [ 
                        'bsx-blocks/column-rows', 
                        {
                            templateName: 'default-auto',
                            display: 'flex',
                            flexDirection: 'column',
                            className: 'banner-inner',
                        },
                        [
                            [ 
                                'bsx-blocks/column-row', 
                                {
                                    columnRowType: '',
                                    display: 'flex',
                                    alignItems: 'center',
                                },
                                [ 
                                    [ 
                                        'bsx-blocks/wrapper', 
                                        {
                                            className: 'w-100',
                                        },
                                        [
                                            [ 
                                                'bsx-blocks/container', 
                                                {},
                                                [
                                                    [
                                                        'core/heading',
                                                        { 
                                                            placeholder: 'Add heading text, configure heading level...',
                                                            textSize: 'display-1',
                                                            textColor: 'white',
                                                            textShadow: 'darker', 
                                                        }
                                                    ]
                                                ],
                                            ], 
                                        ],
                                    ], 
                                ],
                            ], 
                            [ 
                                'bsx-blocks/column-row', 
                                {
                                    columnRowType: 'auto',
                                },
                                [
                                    [ 
                                        'bsx-blocks/wrapper', 
                                        {
                                            bgColor: 'primary-transparent',
                                            paddingBefore: '3',
                                            paddingAfter: '3'
                                        },
                                        [
                                            [ 
                                                'bsx-blocks/container', 
                                                {},
                                                [
                                                    [
                                                        'core/paragraph',
                                                        { 
                                                            placeholder: 'Add text...',
                                                            textSize: 'lead',
                                                            textColor: 'white',
                                                            marginAfter: '0',
                                                        }
                                                    ]
                                                ],
                                            ], 
                                        ],
                                    ], 
                                ],
                            ], 
                        ],
                    ],
                ],
                templateLock: false,
            },
        ];

// <div class="below-navbar-content d-flex bg-fixed bg-cover banner-vh-2 bg-66c bg-md-c" data-fn="lazyload" data-src="/wp-content/themes/bsx-wordpress-example/assets/example-img/example-banner-005.jpg">
//     <div class="banner-inner w-100 d-flex flex-column">
//         <div class="column-row d-flex">
//             <div class="w-100 d-flex">

//             </div>
//         </div>
//         <div class="column-row-auto">

//         </div>
//     </div>
// </div>

        const getTemplate = ( currentTemplateName ) => {
            const currentTemplate = templates.find( ( item ) => item.name === currentTemplateName );
            return currentTemplate ? currentTemplate.template : [];
        };

        let template = getTemplate( templateName );

        const onTemplateChange = ( value ) => {
            template = getTemplate( value );
            setAttributes( { templateName: value } );

            // console.log( 'changed templateName: ' + value );
            // console.log( 'changed template: ' + template );
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

                setAttributes( {
                    imgId: img.id,
                    imgSizes: newImgSizes,
                    imgSizeIndex: newImgSizeIndex.toString(),
                    url: newImgSizes[ newImgSizeIndex ].url,
                } );

                // console.log( 'url: ' + newImgSizes[ newImgSizeIndex ].url );
            }
        };

        async function onSelectPortraitImage( portraitImg ) {

            if ( typeof portraitImg.url !== 'undefined' ) {

                const newPortraitImgSizes = await getImgSizes( portraitImg );

                // check if current img size index fits to new img (might be too large)
                let newPortraitImgSizeIndex = parseInt( portraitImgSizeIndex );
                if ( portraitImgSizeIndex >= newPortraitImgSizeIndex.length ) {
                    newPortraitImgSizeIndex = newPortraitImgSizeIndex.length - 1;
                }

                setAttributes( {
                    portraitImgId: portraitImg.id,
                    portraitImgSizes: newPortraitImgSizes,
                    portraitImgSizeIndex: newPortraitImgSizeIndex.toString(),
                    portraitUrl: newPortraitImgSizes[ newPortraitImgSizeIndex ].url,
                } );

                // console.log( 'portraitUrl: ' + newPortraitImgSizes[ newPortraitImgSizeIndex ].url );
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

        const onChangePortraitImgSizeIndex = ( value ) => {
            setAttributes( { 
                portraitImgSizeIndex: value.toString(),
                portraitUrl: portraitImgSizes[ value ].url,
            } );
        };
        const portraitImgSizeRadioControlOptions = [];
        portraitImgSizes.forEach( ( portraitImgSize, index ) => {
            portraitImgSizeRadioControlOptions.push( 
                { value: index.toString(), label: portraitImgSize.width + 'x' + portraitImgSize.height + ( portraitImgSize.width === portraitImgSize.height ? ' ' + __( '(Square format)', 'bsx-blocks' ) : '' ) } 
            );
        } );

        const bannerClassName = makeBannerClassNames( bannerType, bannerSize, belowNavbar, bgAttachment, bgSize, bgPosition, alignItems, templateName, marginBefore, marginAfter, paddingBefore, paddingAfter );

        const bannerInnerClassName = makeBannerInnerClassNames( {
            templateName: templateName,
        } );

        const bannerStyle = { backgroundImage: `url(${ url })` };

        return [
            <InspectorControls>
                <PanelBody title={ __( 'Banner template', 'bsx-blocks' ) }>
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
                            <MediaUpload
                                onSelect={ onSelectImage }
                                allowedTypes="image"
                                value={ imgId }
                                render={ ( { open } ) => (
                                    <Button
                                        className="bsxui-config-panel-img-button has-margin-bottom"
                                        onClick={ open }
                                    >
                                        <img class="bsxui-config-panel-img" src={ url } alt={ __( 'Change / upload image', 'bsx-blocks' ) } />
                                    </Button>
                                ) }
                            />
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
                                    { __( 'Change / upload image', 'bsx-blocks' ) }
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

                <PanelBody title={ __( 'Banner portrait image (optional)', 'bsx-blocks' ) }>
                    {
                        imgId ? (
                            <MediaUpload
                                onSelect={ onSelectPortraitImage }
                                allowedTypes="image"
                                value={ portraitImgId }
                                render={ ( { open } ) => (
                                    <Button
                                        className="bsxui-config-panel-img-button has-margin-bottom"
                                        onClick={ open }
                                    >
                                        <img class="bsxui-config-panel-img" src={ portraitUrl } alt={ __( 'Change / upload portrait image', 'bsx-blocks' ) } />
                                    </Button>
                                ) }
                            />
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
                            onSelect={ onSelectPortraitImage }
                            allowedTypes="image"
                            value={ portraitImgId }
                            render={ ( { open } ) => (
                                <Button 
                                    onClick={ open }
                                    isSecondary
                                >
                                    { __( 'Change / upload portrait image', 'bsx-blocks' ) }
                                </Button>
                            ) }
                        />
                    </div>
                    <RadioControl
                        label={ __( 'Image size and format', 'bsx-blocks' ) }
                        selected={ portraitImgSizeIndex.toString() }
                        options={ portraitImgSizeRadioControlOptions }
                        onChange={ onChangePortraitImgSizeIndex }
                    />
                    {
                        portraitImgSizes[ portraitImgSizeIndex ] != undefined && portraitImgSizes[ portraitImgSizeIndex ].url != undefined && (
                            <div class="components-base-control">
                                <a href={ portraitImgSizes[ portraitImgSizeIndex ].url } target="_blank">{ __( 'Preview selected portrait image', 'bsx-blocks' ) }</a>
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

            <>
                {
                    ! templateName ? (
                        <div class="bsxui-initial-inline-control">
                            <div class="bsxui-initial-inline-control-heading">
                                { __( 'Please select Banner template', 'bsx-blocks' ) }
                            </div>
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
                        </div>
                    )
                    : 
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
                            {
                                noBannerInnerTemplateNames.indexOf( templateName ) == -1 ? (
                                    <div className={ bannerInnerClassName }>
                                        <InnerBlocks 
                                            template={ template }
                                            renderAppender={
                                                hasInnerBlocks ? undefined
                                                : () => <InnerBlocks.ButtonBlockAppender />
                                            }
                                        />
                                    </div>
                                )
                                :
                                (
                                    <InnerBlocks 
                                        template={ template }
                                        renderAppender={
                                            hasInnerBlocks ? undefined
                                            : () => <InnerBlocks.ButtonBlockAppender />
                                        }
                                    />
                                )
                            }
                        </div>
                    )
                }
            </>
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
                portraitImgId,
                portraitImgSizes,
                portraitImgSizeIndex,
                portraitUrl,
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

        // TODO: use addClassNames
        // TODO: add templateName
        // TODO: make bannerInnerCLassName
        const bannerClassName = makeBannerClassNames( bannerType, bannerSize, belowNavbar, bgAttachment, bgSize, bgPosition, alignItems, templateName, marginBefore, marginAfter, paddingBefore, paddingAfter );

        const bannerInnerClassName = makeBannerInnerClassNames( {
            templateName: templateName,
        } );

        const srcsetJson = makeSrcsetJson( imgSizes, imgSizeIndex, portraitImgSizes, portraitImgSizeIndex );

        const saveAttributes = makeSaveAttributes( {
            'data-srcset': srcsetJson,
        } );

        return (
            <div className={ bannerClassName } data-fn="lazyload" data-src={ url } { ...saveAttributes }>
                {
                    noBannerInnerTemplateNames.indexOf( templateName ) == -1 ? (
                        <div className={ bannerInnerClassName }>
                            <InnerBlocks.Content />
                        </div>
                    )
                    :
                    (
                        <InnerBlocks.Content />
                    )
                }
            </div>
        );
    },
} );
