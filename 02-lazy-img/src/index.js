const { __, setLocaleData } = wp.i18n;
const {
    registerBlockType,
} = wp.blocks;
const {
    RichText,
    MediaUpload,
    InspectorControls,
} = wp.blockEditor;
const { 
    Button,
    TextControl,
    PanelBody,
    RadioControl,
} = wp.components;

/*
    TODO: 
        - !!! check which img sizes exist (small img 200w will NOT have size large 1024w)
        - figure (and caption) optional
        - text align for figure (toolbar)
        - sizes { Max, Large, Medium, Small } -> get all image sizes from img.sizes
        - make own srcset sizes (?)
*/

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

    /*
    console.log( 'urlWithoutFileExtension: ' + urlWithoutFileExtension );
    console.log( 'fileExtension: ' + fileExtension );
    console.log( 'urlWithoutSizesAndFileExtension: ' + urlWithoutSizesAndFileExtension );
    */

    const returnList = [];

    config.scaleList.forEach( ( scale, index ) => {

        //console.log( '-----> scale: ' + scale );

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
            
            /*
            console.log( 'scaledUrl: ' + scaledUrl );
            console.log( 'scaledWidth: ' + scaledWidth );
            console.log( 'scaledHeight: ' + scaledHeight + ' = Math.round( ' + scaledWidth + ' / ' + ratio + ' )' );
            */
        }

    } ); 

    return returnList;

}

const getOriginalImgSizes = ( originalImgUrl ) => {

    return new Promise( ( resolve, reject ) => {

        let img = document.createElement( 'img' );
        img.onload = () => { 
            //console.log( 'onload test img in function: ' + img.width + ' x ' + img.height );

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
        //console.log( 'doing imageExists: ' + url );
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

// TODO: use array with maps instead, see banner `responsiveMediaSrcIndexList`
const smallMobileSizeStep = 2;
const smallMobileMediaQuery = '(max-width: 459.98px)';
const mobileSizeStep = 1;
const mobileMediaQuery = '(max-width: 767.98px)';

registerBlockType( 'bsx-blocks/lazy-img', {
    title: __( 'BSX Lazy Image', 'bsx-blocks' ),
    icon: 'format-image',
    category: 'layout',
    attributes: {
        hasFigure: {
            boolean: 'string',
            default: true,
        },
        textAlign: {
            type: 'string',
            default: '',
        },
        imgSizes: {
            type: 'array',
            default: [],
        },
        imgSizeIndex: {
            type: 'string',
            default: '3',
        },
        imgId: {
            type: 'number',
        },
        smallMobileUrl: {
            type: 'string',
        },
        smallMobileWidth: {
            type: 'number',
        },
        smallMobileHeight: {
            type: 'number',
        },
        mobileUrl: {
            type: 'string',
        },
        mobileWidth: {
            type: 'number',
        },
        mobileHeight: {
            type: 'number',
        },
        url: {
            type: 'string',
        },
        width: {
            type: 'number',
        },
        height: {
            type: 'number',
        },
        origWidth: {
            type: 'number',
        },
        origHeight: {
            type: 'number',
        },
        lowestSrcsetImgSizeIndex: {
            type: 'number',
            default: 1,
        },
        alt: {
            type: 'string',
        },
        figcaption: {
            type: 'array',
            source: 'children',
            selector: 'figcaption',
        },
    },
    edit: ( props ) => {
        const {
            className,
            attributes: {
                imgId,
                imgSizes,
                imgSizeIndex,
                smallMobileUrl,
                smallMobileWidth,
                smallMobileHeight,
                mobileUrl,
                mobileWidth,
                mobileHeight,
                url,
                width,
                height,
                origWidth,
                origHeight,
                lowestSrcsetImgSizeIndex,
                alt,
                figcaption,
            },
            setAttributes,
            isSelected,
            setState,
        } = props;
        async function onSelectImage( img ) {

            if ( typeof img.url !== 'undefined' ) {

                //console.log( 'img.url: ' + img.url );

                // TEST img object
                /*
                for ( let [ key, value ] of Object.entries( img ) ) {
                    console.log( 'key: "' + key + '", val: "' + value + '"' );
                }

                console.log( 'img.nonces' );
                if ( img.nonces ) {
                    for ( let [ key, value ] of Object.entries( img.nonces ) ) {
                        console.log( 'key: "' + key + '", val: "' + value + '"' );
                    }
                }

                console.log( 'img.sizes' );
                if ( img.sizes ) {
                    for ( let [ key, value ] of Object.entries( img.sizes ) ) {
                        console.log( 'key: "' + key + '", val: "' + value + '"' );
                    }
                }

                console.log( 'img.compat' );
                if ( img.compat ) {
                    for ( let [ key, value ] of Object.entries( img.compat ) ) {
                        console.log( 'key: "' + key + '", val: "' + value + '"' );
                    }
                }
                */

                //console.log( 'fullImgIsScaled( img.url ): ' + fullImgIsScaled( img.url ) );
                //console.log( 'url               : ' + url );
                //console.log( 'img.sizes.full.url: ' + img.sizes.full.url );

                let originalImgUrl = '';
                let originalWidth = 0;
                let originalHeight = 0;

                if ( fullImgIsScaled( img.url ) ) {

                    // get original, get sizes

                    //console.log( 'getOriginalImgUrl( img.url ): ' + getOriginalImgUrl( img.url ) );

                    originalImgUrl = getOriginalImgUrl( img.url );

                    // TODO: load img, get original sizes

                    let originalImgSizes;

                    //console.log( 'originalImgSizes calling' );
                    try {
                        originalImgSizes = await getOriginalImgSizes( originalImgUrl );
                    } catch( err ) {
                        console.error( err );
                    }
                    //console.log( 'originalImgSizes done' );

                    originalWidth = originalImgSizes.width || 0;
                    originalHeight = originalImgSizes.height || 0;

                    //console.log( 'after await: originalWidth: ' + originalWidth + ' – originalHeight: ' + originalHeight );

                }
                else {

                    // get sizes from full img
                    // check which sizes exist

                    originalWidth = img.sizes.full.width;
                    originalHeight = img.sizes.full.height;

                }

                // /TEST
                //console.log( 'originalWidth: ' + originalWidth + ' – originalHeight: ' + originalHeight );

                let existingImgList;
                let x0_75LargeImg;
                let x1_5LargeImg;
                let x2LargeImg;

                // make sizes only if marge img exists
                if ( img.sizes.large != undefined ) {

                    // config for making sizes (might change in newer WP versions)
                    const sizedImgsConfig = {
                        url: img.sizes[ 'large' ].url,
                        scaleList: [ 0.75, 1.5, 2 ],
                        originalWidth: originalWidth,
                        originalHeight: originalHeight,
                    };
                    const sizedImgs = makeSizedImgs( sizedImgsConfig );

                    x0_75LargeImg = sizedImgs[ 0 ] || {};
                    x1_5LargeImg = sizedImgs[ 1 ] || {};
                    x2LargeImg = sizedImgs[ 2 ] || {};


                    //console.log( 'imageExists calling' );
                    existingImgList = await Promise.all( [
                        imageExists( x0_75LargeImg.url ),
                        imageExists( x1_5LargeImg.url ),
                        imageExists( x2LargeImg.url ),
                    ] );
                    //console.log( 'imageExists done' );

                    /*
                    existingImgList.forEach( ( imageExists, index ) => {
                        console.log( 'imageExists[ ' + index + ' ]: ' + imageExists );
                    } ); 
                    */

                }

                // start build list of all really existing img sizes
                const newImgSizes = [];
                // thumbnail
                if ( img.sizes.thumbnail != undefined && img.sizes.thumbnail.url ) {
                    newImgSizes.push( {
                        url: img.sizes.thumbnail.url,
                        width: img.sizes.thumbnail.width,
                        height: img.sizes.thumbnail.height, 
                    } );
                }
                // medium
                if ( img.sizes.medium != undefined && img.sizes.medium.url ) {
                    newImgSizes.push( {
                        url: img.sizes.medium.url,
                        width: img.sizes.medium.width,
                        height: img.sizes.medium.height, 
                    } );
                }
                if ( img.sizes.large != undefined && img.sizes.large.url ) {
                    // x0.75 large
                    if ( existingImgList[ 0 ] ) {
                        newImgSizes.push( {
                            url: x0_75LargeImg.url,
                            width: x0_75LargeImg.width,
                            height: x0_75LargeImg.height, 
                        } );
                    }
                    // large
                    newImgSizes.push( {
                        url: img.sizes.large.url,
                        width: img.sizes.large.width,
                        height: img.sizes.large.height, 
                    } );
                    // x1.5 large
                    if ( existingImgList[ 1 ] ) {
                        newImgSizes.push( {
                            url: x1_5LargeImg.url,
                            width: x1_5LargeImg.width,
                            height: x1_5LargeImg.height, 
                        } );
                    }
                    // x2 large
                    if ( existingImgList[ 1 ] ) {
                        newImgSizes.push( {
                            url: x2LargeImg.url,
                            width: x2LargeImg.width,
                            height: x2LargeImg.height, 
                        } );
                    }
                }
                // full (uploaded or down scaled size)
                newImgSizes.push( {
                    url: img.sizes.full.url,
                    width: img.sizes.full.width,
                    height: img.sizes.full.height, 
                } );
                // original (unscaled uploaded size)
                if ( originalImgUrl ) {
                    newImgSizes.push( {
                        url: originalImgUrl,
                        width: originalWidth,
                        height: originalHeight, 
                    } );
                }

                // TEST
                //console.log( '-----> newImgSizes:' );
                /*
                newImgSizes.forEach( ( imgSize, index ) => {
                    console.log( 'imgSize[ ' + index + ' ] ( ' + imgSize.width + 'x' + imgSize.height + ' ): "' + imgSize.url + '"' );
                } );
                */ 

                // check if current img size index fits to new img (might be too large)
                let newImgSizeIndex = parseInt( imgSizeIndex );
                if ( imgSizeIndex >= newImgSizes.length ) {
                    newImgSizeIndex = newImgSizes.length - 1;
                    //console.log( 'reduce initial imgSizeIndex to: ' + newImgSizeIndex );
                }

                // do not use thumbnail for srcset if has square format, start with img sizes index 1 then
                const newLowestSrcsetImgSizeIndex = img.sizes.thumbnail.width !== img.sizes.thumbnail.height ? 0 : 1;

                // do not use thumbnail (square format) for srcset, start with img sizes index 1
                setAttributes( {
                    imgId: img.id,
                    imgSizes: newImgSizes,
                    imgSizeIndex: newImgSizeIndex.toString(),
                    smallMobileUrl: newImgSizeIndex - smallMobileSizeStep >= newLowestSrcsetImgSizeIndex ? newImgSizes[ newImgSizeIndex - smallMobileSizeStep ].url : '',
                    smallMobileWidth: newImgSizeIndex - smallMobileSizeStep >= newLowestSrcsetImgSizeIndex ? newImgSizes[ newImgSizeIndex - smallMobileSizeStep ].width : 0,
                    smallMobileHeight: newImgSizeIndex - smallMobileSizeStep >= newLowestSrcsetImgSizeIndex ? newImgSizes[ newImgSizeIndex - smallMobileSizeStep ].height : 0,
                    mobileUrl: newImgSizeIndex - mobileSizeStep >= newLowestSrcsetImgSizeIndex ? newImgSizes[ newImgSizeIndex - mobileSizeStep ].url : '',
                    mobileWidth: newImgSizeIndex - mobileSizeStep >= newLowestSrcsetImgSizeIndex ? newImgSizes[ newImgSizeIndex - mobileSizeStep ].width : 0,
                    mobileHeight: newImgSizeIndex - mobileSizeStep >= newLowestSrcsetImgSizeIndex ? newImgSizes[ newImgSizeIndex - mobileSizeStep ].height : 0,
                    url: newImgSizes[ newImgSizeIndex ].url,
                    width: newImgSizes[ newImgSizeIndex ].width,
                    height: newImgSizes[ newImgSizeIndex ].height,
                    origWidth: originalWidth,
                    origHeight: originalHeight,
                    lowestSrcsetImgSizeIndex: newLowestSrcsetImgSizeIndex,
                    alt: img.alt,
                } );

                // TEST – TODO: remove
                /*
                for ( let [ key, value ] of Object.entries( img.sizes ) ) {
                    console.log( 'key: "' + key + '", val: "' + value + '"' );
                }
                */
                /*
                console.log( 'mediumUrl: ' + img.sizes.medium.url );
                console.log( 'mediumWidth: ' + img.sizes.medium.width );
                console.log( 'mediumHeight: ' + img.sizes.medium.height );
                console.log( 'largeUrl: ' + img.sizes.large.url );
                console.log( 'largeWidth: ' + img.sizes.large.width );
                console.log( 'largeHeight: ' + img.sizes.large.height );
                */

                //console.log( 'ratio thumbnail ( ' + img.sizes.thumbnail.width + ' / ' + img.sizes.thumbnail.height + ' ): ' + img.sizes.thumbnail.width / img.sizes.thumbnail.height );
                /*
                console.log( 'ratio medium ( ' + img.sizes.medium.width + ' / ' + img.sizes.medium.height + ' ): ' + img.sizes.medium.width / img.sizes.medium.height );
                console.log( 'ratio large ( ' + img.sizes.large.width + ' / ' + img.sizes.large.height + ' ): ' + img.sizes.large.width / img.sizes.large.height );
                console.log( 'ratio full ( ' + img.sizes.full.width + ' / ' + img.sizes.full.height + ' ): ' + img.sizes.full.width / img.sizes.full.height );
                */
            }
        };
        const onChangeMediaAlt = ( value ) => {
            setAttributes( { alt: value } );
        };
        const onChangeFigcaption = ( value ) => {
            setAttributes( { figcaption: value } );
        };
        
        const onChangeMediaWidth = ( value ) => {
            setAttributes( { width: value } );
        };
        const onChangeMediaHeight = ( value ) => {
            setAttributes( { height: value } );
        };

        const onChangeImgSizeIndex = ( value ) => {
            setAttributes( { 
                imgSizeIndex: value.toString(),
                smallMobileUrl: value - smallMobileSizeStep >= lowestSrcsetImgSizeIndex ? imgSizes[ value - smallMobileSizeStep ].url : '',
                smallMobileWidth: value - smallMobileSizeStep >= lowestSrcsetImgSizeIndex ? imgSizes[ value - smallMobileSizeStep ].width : 0,
                smallMobileHeight: value - smallMobileSizeStep >= lowestSrcsetImgSizeIndex ? imgSizes[ value - smallMobileSizeStep ].height : 0,
                mobileUrl: value - mobileSizeStep >= lowestSrcsetImgSizeIndex ? imgSizes[ value - mobileSizeStep ].url : '',
                mobileWidth: value - mobileSizeStep >= lowestSrcsetImgSizeIndex ? imgSizes[ value - mobileSizeStep ].width : 0,
                mobileHeight: value - mobileSizeStep >= lowestSrcsetImgSizeIndex ? imgSizes[ value - mobileSizeStep ].height : 0,
                url: imgSizes[ value ].url,
                width: imgSizes[ value ].width,
                height: imgSizes[ value ].height,
            } );
        };
        const imgSizeRadioControlOptions = [];
        imgSizes.forEach( ( imgSize, index ) => {
            imgSizeRadioControlOptions.push( 
                { value: index.toString(), label: imgSize.width + 'x' + imgSize.height + ( imgSize.width === imgSize.height ? ' ' + __( '(Square format)', 'bsx-blocks' ) : '' ) } 
            );
        } );
        return [
            <InspectorControls>
                <PanelBody title={ __( 'Image Size', 'bsx-blocks' ) }>
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
                     
                    <TextControl 
                        label={ __( 'Displayed image width', 'bsx-blocks' ) }
                        value={ width } 
                        onChange={ onChangeMediaWidth }
                    />
                    <TextControl 
                        label={ __( 'Displayed image height', 'bsx-blocks' ) }
                        value={ height } 
                        onChange={ onChangeMediaHeight }
                    />
                </PanelBody>
            </InspectorControls>,
            (
                <div className={ className }>
                    {
                        imgId ? (
                            <figure data-img-size={ imgSizeIndex }>
                                <picture>
                                    {
                                        smallMobileUrl && (
                                            <source media={ smallMobileMediaQuery } srcset={ smallMobileUrl } width={ smallMobileWidth } height={ smallMobileHeight } />
                                        )
                                    }
                                    {
                                        mobileUrl && (
                                            <source media={ smallMobileUrl ? mobileMediaQuery : smallMobileMediaQuery } srcset={ mobileUrl } width={ mobileWidth } height={ mobileHeight } />
                                        )
                                    }
                                    <img className={ 'img-fluid upload-img' } src={ url } alt={ alt } />
                                </picture>
                            </figure>
                        )
                        : 
                        (
                            <div className={ 'bsxui-img-upload-placeholder' }>
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
                        figcaption && ! RichText.isEmpty( figcaption ) && (
                            <RichText
                                tagName="figcaption"
                                multiline={ false }
                                placeholder={ __( 'Caption (optional)', 'bsx-blocks' ) }
                                value={ figcaption }
                                onChange={ onChangeFigcaption }
                                keepPlaceholderOnFocus
                            />
                        )
                    }
                    { isSelected && (
                        <div class="bsxui-isselected-config-panel">
                            {
                                ! figcaption && RichText.isEmpty( figcaption ) && (
                                    <RichText
                                        tagName="figcaption"
                                        multiline={ false }
                                        placeholder={ __( 'Caption (optional)', 'bsx-blocks' ) }
                                        value={ figcaption }
                                        onChange={ onChangeFigcaption }
                                        keepPlaceholderOnFocus
                                    />
                                )
                            }
                            {
                                imgId && (
                                    <div className="bsxui-upload-btn-wrapper">
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
                                )
                            }
                            <TextControl 
                                label={ __( 'Alt', 'bsx-blocks' ) }
                                value={ alt } 
                                onChange={ onChangeMediaAlt }
                            />
                        </div>
                    ) }
                </div>
            )
        ];
    },

/*
<script>
    document.write(
        '<picture>'
        + '<source media="(orientation: portrait) and (max-width: 799.98px)" srcset="" data-srcset="/example-img-006-720x720-thumb.jpg" data-width="720" data-height="720">\n'
        + '<source media="(min-width: 1440px)" srcset="" data-srcset="/example-img-006-1440x720.jpg" data-width="1440" data-height="480">\n'
        + '<source media="(min-width: 1140px)" srcset="" data-srcset="/example-img-006-1140x380.jpg" data-width="1140" data-height="380">\n'
        + '<img class="img-fluid" alt="Example image" src="" data-fn="lazyload" data-src="/example-img-006-720x480.jpg" data-width="1140" data-height="380">'
        + '</picture>'
    );
</script>
<noscript><img class="img-fluid" src="/example-img-006-720x480.jpg" alt="Example image"></noscript>
*/

    save: ( props ) => {
        const {
            className,
            attributes: {
                imgSizeIndex,
                imgSizes,
                smallMobileUrl,
                smallMobileWidth,
                smallMobileHeight,
                mobileUrl,
                mobileWidth,
                mobileHeight,
                url,
                width,
                height,
                origWidth,
                origHeight,
                alt,
                figcaption,
            },
        } = props;

        return (
            <div className={ className }>

                {
                    url && (
                        <figure>
                            <script>document.write( '
                                <picture>
                                    {
                                        smallMobileUrl && (
                                            <source media={ smallMobileMediaQuery } srcset="" data-srcset={ smallMobileUrl } data-width={ smallMobileWidth } data-height={ smallMobileHeight } />
                                        )
                                    }
                                    {
                                        mobileUrl && (
                                            <source media={ smallMobileUrl ? mobileMediaQuery : smallMobileMediaQuery } srcset="" data-srcset={ mobileUrl } data-width={ mobileWidth } data-height={ mobileHeight } />
                                        )
                                    }
                                    <img className="img-fluid" src="" alt={ alt } data-src={ url } width={ width } height={ height } data-fn="lazyload" />
                                </picture>
                            ' );</script>
                            <noscript><img className="img-fluid" src={ url } alt={ alt } width={ width } height={ height } /></noscript>

                            {
                                figcaption && ! RichText.isEmpty( figcaption ) && (
                                    <RichText.Content tagName="figcaption" className="font-italic" value={ figcaption } />
                                )
                            }

                        </figure>
                    )
                }
                
            </div>
        );
    },
} );
