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
            console.log( 'onload test img in function: ' + img.width + ' x ' + img.height );

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
        console.log( 'doing imageExists: ' + url );
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
        imgSize: {
            type: 'string',
            default: '2',
        },
        imgId: {
            type: 'number',
        },
        imgSizes: {
            type: 'array',
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
        mediumUrl: {
            type: 'string',
        },
        mediumWidth: {
            type: 'number',
        },
        mediumHeight: {
            type: 'number',
        },
        x0_75LargeUrl: {
            type: 'string',
        },
        x0_75LargeWidth: {
            type: 'number',
        },
        x0_75LargeHeight: {
            type: 'number',
        },
        largeUrl: {
            type: 'string',
        },
        largeWidth: {
            type: 'number',
        },
        largeHeight: {
            type: 'number',
        },
        x1_5LargeUrl: {
            type: 'string',
        },
        x1_5LargeWidth: {
            type: 'number',
        },
        x1_5LargeHeight: {
            type: 'number',
        },
        x2LargeUrl: {
            type: 'string',
        },
        x2LargeWidth: {
            type: 'number',
        },
        x2LargeHeight: {
            type: 'number',
        },
        origUrl: {
            type: 'string',
        },
        origWidth: {
            type: 'number',
        },
        origHeight: {
            type: 'number',
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
                mediumUrl,
                mediumWidth,
                mediumHeight,
                x0_75LargeUrl,
                x0_75LargeWidth,
                x0_75LargeHeight,
                largeUrl,
                largeWidth,
                largeHeight,
                x1_5LargeUrl,
                x1_5LargeWidth,
                x1_5LargeHeight,
                x2LargeUrl,
                x2LargeWidth,
                x2LargeHeight,
                url,
                width,
                height,
                origUrl,
                origWidth,
                origHeight,
                alt,
                figcaption,
            },
            setAttributes,
            isSelected,
        } = props;
        async function onSelectImage( img ) {

            console.log( 'img.url: ' + img.url );

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

            console.log( 'fullImgIsScaled( img.url ): ' + fullImgIsScaled( img.url ) );
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

            console.log( 'originalWidth: ' + originalWidth + ' – originalHeight: ' + originalHeight );


            // config for making sizes (might change in newer WP versions)
            const sizedImgsConfig = {
                url: img.sizes[ 'large' ].url,
                scaleList: [ 0.75, 1.5, 2 ],
                originalWidth: originalWidth,
                originalHeight: originalHeight,
            };
            const sizedImgs = makeSizedImgs( sizedImgsConfig );

            const x0_75LargeImg = sizedImgs[ 0 ] || {};
            const x1_5LargeImg = sizedImgs[ 1 ] || {};
            const x2LargeImg = sizedImgs[ 2 ] || {};





            console.log( 'imageExists calling' );
            let existingImgList = await Promise.all( [
                imageExists( x0_75LargeImg.url ),
                imageExists( x1_5LargeImg.url ),
                imageExists( x2LargeImg.url ),
            ] );
            console.log( 'imageExists done' );

            existingImgList.forEach( ( imageExists, index ) => {
                console.log( 'imageExists[ ' + index + ' ]: ' + imageExists );
            } ); 

            // start build list of all really existing img sizes
            const buildImgSizes = [];
            // medium
            if ( img.sizes.medium.url ) {
                buildImgSizes.push( {
                    url: img.sizes.medium.url,
                    width: img.sizes.medium.width,
                    height: img.sizes.medium.height, 
                } );
            }
            if ( img.sizes.large.url ) {
                // x0.75 large
                if ( existingImgList[ 0 ] ) {
                    buildImgSizes.push( {
                        url: x0_75LargeImg.url,
                        width: x0_75LargeImg.width,
                        height: x0_75LargeImg.height, 
                    } );
                }
                // large
                buildImgSizes.push( {
                    url: img.sizes.large.url,
                    width: img.sizes.large.width,
                    height: img.sizes.large.height, 
                } );
                // x1.5 large
                if ( existingImgList[ 1 ] ) {
                    buildImgSizes.push( {
                        url: x1_5LargeImg.url,
                        width: x1_5LargeImg.width,
                        height: x1_5LargeImg.height, 
                    } );
                }
                // x2 large
                if ( existingImgList[ 1 ] ) {
                    buildImgSizes.push( {
                        url: x2LargeImg.url,
                        width: x2LargeImg.width,
                        height: x2LargeImg.height, 
                    } );
                }
            }
            // full (uploaded or down scaled size)
            buildImgSizes.push( {
                url: img.sizes.full.url,
                width: img.sizes.full.width,
                height: img.sizes.full.height, 
            } );
            // original (unscaled uploaded size)
            if ( originalImgUrl ) {
                buildImgSizes.push( {
                    url: originalImgUrl,
                    width: originalWidth,
                    height: originalHeight, 
                } );
            }

            // TEST
            console.log( '-----> buildImgSizes:' );
            buildImgSizes.forEach( ( imgSize, index ) => {
                console.log( 'mgSize[ ' + index + ' ] ( ' + imgSize.width + 'x' + imgSize.height + ' ): "' + imgSize.url + '"' );
            } ); 


            setAttributes( {
                imgId: img.id,
                mediumUrl: img.sizes.medium.url,
                mediumWidth: img.sizes.medium.width,
                mediumHeight: img.sizes.medium.height,
                x0_75LargeUrl: x0_75LargeImg.url,
                x0_75LargeWidth: x0_75LargeImg.width,
                x0_75LargeHeight:  x0_75LargeImg.height,
                largeUrl: img.sizes.large.url,
                largeWidth: img.sizes.large.width,
                largeHeight: img.sizes.large.height,
                x1_5LargeUrl: x1_5LargeImg.url,
                x1_5LargeWidth: x1_5LargeImg.width,
                x1_5LargeHeight: x1_5LargeImg.height,
                x2LargeUrl: x2LargeImg.url,
                x2LargeWidth: x2LargeImg.width,
                x2LargeHeight: x2LargeImg.height,
                url: img.url,
                width: img.sizes.full.width,
                height: img.sizes.full.height,
                origUrl: originalImgUrl,
                origWidth: originalWidth,
                origHeight: originalHeight,
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

        };
        const onChangeMediaAlt = ( value ) => {
            setAttributes( { alt: value } );
        };
        const onChangeMediaWidth = ( value ) => {
            setAttributes( { width: value } );
        };
        const onChangeMediaHeight = ( value ) => {
            setAttributes( { height: value } );
        };
        const onChangeFigcaption = ( value ) => {
            setAttributes( { figcaption: value } );
        };
        return [
            <InspectorControls>
                <PanelBody title={ __( 'BSX Block Settings', 'bsx-blocks' ) }>
                    <TextControl 
                        label={ __( 'Width', 'bsx-blocks' ) }
                        value={ width } 
                        onChange={ onChangeMediaWidth }
                    />
                    <TextControl 
                        label={ __( 'Height', 'bsx-blocks' ) }
                        value={ height } 
                        onChange={ onChangeMediaHeight }
                    />
                </PanelBody>
            </InspectorControls>,
            (
                <div className={ className }>
                    {
                        imgId ? (

                            <>

                            <img className={ 'upload-img' } src={ url } alt={ alt } />


                            <div>
                                TEST:
                            </div>
                            <div class="row">
                                <div class="col-4">
                                    <img className="img-fluid" src={ x0_75LargeUrl } alt={ alt } width={ x0_75LargeWidth } height={ x0_75LargeHeight } />
                                    <div class="small">
                                        { x0_75LargeWidth }x{ x0_75LargeHeight }
                                    </div>
                                </div>
                                <div class="col-4">
                                    <img className="img-fluid" src={ x1_5LargeUrl } alt={ alt } width={ x1_5LargeWidth } height={ x1_5LargeHeight } />
                                    <div class="small">
                                        { x1_5LargeWidth }x{ x1_5LargeHeight }
                                    </div>
                                </div>
                                <div class="col-4">
                                    <img className="img-fluid" src={ x2LargeUrl } alt={ alt } width={ x2LargeWidth } height={ x2LargeHeight } />
                                    <div class="small">
                                        { x2LargeWidth }x{ x2LargeHeight }
                                    </div>
                                </div>
                            </div>


                            </>

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
                imgSizes,
                mediumUrl,
                mediumWidth,
                mediumHeight,
                x0_75LargeUrl,
                x0_75LargeWidth,
                x0_75LargeHeight,
                largeUrl,
                largeWidth,
                largeHeight,
                x1_5LargeUrl,
                x1_5LargeWidth,
                x1_5LargeHeight,
                x2LargeUrl,
                x2LargeWidth,
                x2LargeHeight,
                url,
                width,
                height,
                origUrl,
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
                                        mediumUrl && (
                                            <source media="(max-width: 459.98px)" srcset="" data-srcset={ mediumUrl } data-width={ mediumWidth } data-height={ mediumHeight } />
                                        )
                                    }
                                    <img className="img-fluid" src="" alt={ alt } data-src={ largeUrl } width={ largeWidth } height={ largeHeight } data-fn="lazyload" />
                                </picture>
                            ' );</script>
                            <noscript><img className="img-fluid" src={ largeUrl } alt={ alt } width={ largeWidth } height={ largeHeight } /></noscript>
                        
                            <div>
                                TEST:
                            </div>
                            <div class="row">
                                <div class="col-4">
                                    <img className="img-fluid" src={ x0_75LargeUrl } alt={ alt } width={ x0_75LargeWidth } height={ x0_75LargeHeight } />
                                    <div class="small">
                                        { x0_75LargeWidth }x{ x0_75LargeHeight }
                                    </div>
                                </div>
                                <div class="col-4">
                                    <img className="img-fluid" src={ x1_5LargeUrl } alt={ alt } width={ x1_5LargeWidth } height={ x1_5LargeHeight } />
                                    <div class="small">
                                        { x1_5LargeWidth }x{ x1_5LargeHeight }
                                    </div>
                                </div>
                                <div class="col-4">
                                    <img className="img-fluid" src={ x2LargeUrl } alt={ alt } width={ x2LargeWidth } height={ x2LargeHeight } />
                                    <div class="small">
                                        { x2LargeWidth }x{ x2LargeHeight }
                                    </div>
                                </div>
                            </div>

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
