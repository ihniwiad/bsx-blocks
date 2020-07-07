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

const getFileUrlTruncAndExtension = ( fileUrl ) => {

    const urlExplode = fileUrl.split( '.' );

    const fileExtension = urlExplode[ urlExplode.length - 1 ];
    urlExplode.pop();
    const urlWithoutFileExtension = urlExplode.join( '.' );

    return {
        trunc: urlWithoutFileExtension,
        extension: fileExtension,
    };
}

const fullImgIsScaled = ( fullUrl ) => {

    const urlWithoutFileExtension = getFileUrlTruncAndExtension( fullUrl ).trunc;

    return urlWithoutFileExtension.lastIndexOf( '-scaled' ) === urlWithoutFileExtension.length - 7;
}

const getOriginalImgUrl = ( fullUrl ) => {

    const truncAndExtension = getFileUrlTruncAndExtension( fullUrl );

    return truncAndExtension.trunc.substring(0, truncAndExtension.trunc.length - 7) + '.' + truncAndExtension.extension;
}

const makeSizedImg = ( largeUrl, ratio, scale ) => {

    // TODO: problem: full width and height is not original width and heigt but scaled, so it causes errors when rounding

    const urlExplode = largeUrl.split( '.' );

    const fileExtension = urlExplode[ urlExplode.length - 1 ];
    urlExplode.pop();
    const urlWithoutFileExtension = urlExplode.join( '.' );

    // get large sizes
    const urlWithoutFileExtensionExplode = largeUrl.split( '-' );
    const largeSizes = urlWithoutFileExtensionExplode[ urlWithoutFileExtensionExplode.length - 1 ].split( 'x' );
    const largeWidth = largeSizes[ 0 ];
    const largeHeight = largeSizes[ 1 ];

    // get url trunc
    urlWithoutFileExtensionExplode.pop();
    const urlWithoutSizesAndFileExtension = urlWithoutFileExtensionExplode.join( '-' );

    /*
    console.log( 'urlWithoutFileExtension: ' + urlWithoutFileExtension );
    console.log( 'fileExtension: ' + fileExtension );
    console.log( 'urlWithoutSizesAndFileExtension: ' + urlWithoutSizesAndFileExtension );
    */

    // calculate new size

    const scaledWidth = Math.round( largeWidth * scale );
    const scaledHeight = Math.round( scaledWidth / ratio );
    const scaledUrl = urlWithoutSizesAndFileExtension + '-' + scaledWidth + 'x' + scaledHeight + '.' + fileExtension;

    /*
    console.log( 'scaledUrl: ' + scaledUrl );
    console.log( 'scaledWidth: ' + scaledWidth );
    console.log( 'scaledHeight: ' + scaledHeight + ' = Math.roung( ' + scaledWidth + ' / ' + ratio + ' )' );
    */

    return {
        url: scaledUrl,
        width: scaledWidth,
        height: scaledHeight,
    };

}

function getOriginalImgSizes( originalImgUrl ) {

    return new Promise( function( resolve, reject ) {

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
            default: '',
        },
        imgId: {
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
                url,
                width,
                height,
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

            let originalWidth = 0;
            let originalHeight = 0;

            if ( fullImgIsScaled( img.url ) ) {

                // get original, get sizes

                console.log( 'getOriginalImgUrl( img.url ): ' + getOriginalImgUrl( img.url ) );

                const originalImgUrl = getOriginalImgUrl( img.url );

                // TODO: load img, get original sizes

                let originalImgSizes;

                console.log( 'originalImgSizes calling' );
                try {
                    originalImgSizes = await getOriginalImgSizes( originalImgUrl );
                } catch( err ) {
                    console.error( err );
                }
                console.log( 'originalImgSizes done' );

                originalWidth = originalImgSizes.width || 0;
                originalHeight = originalImgSizes.height || 0;

                console.log( 'after await: originalWidth: ' + originalWidth + ' – originalHeight: ' + originalHeight );

                /*
                const xhr = new XMLHttpRequest();
                xhr.open( 'HEAD', originalImgUrl, true );
                xhr.onreadystatechange = function(){
                    if ( xhr.readyState == 4 ) {
                        if ( xhr.status == 200 ) {
                            const responseHeaders = xhr.getAllResponseHeaders();
                            console.log( responseHeaders );
                            alert( 'Size in bytes: ' + xhr.getResponseHeader( 'Content-Length' ) );
                        } 
                        else {
                            alert( 'ERROR' );
                        }
                    }
                };
                xhr.send( null );
                */
            }
            else {

                // get sizes from full img
                // check which sizes exist


                originalWidth = img.sizes.full.width;
                originalHeight = img.sizes.full.height;

            }

            console.log( 'originalWidth: ' + originalWidth + ' – originalHeight: ' + originalHeight );

            let ratio = originalWidth / originalHeight;
            const x0_75LargeImg = makeSizedImg( img.sizes.large.url, ratio, .75 );
            const x1_5LargeImg = makeSizedImg( img.sizes.large.url, ratio, 1.5 );
            const x2LargeImg = makeSizedImg( img.sizes.large.url, ratio, 2 );

            setAttributes( {
                imgId: img.id,
                url: img.url,
                width: img.sizes.full.width,
                height: img.sizes.full.height,
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
                origUrl,
                origWidth,
                origHeight,
                alt: img.alt,
            } );

            // TEST – TODO: remove
            /*
            for ( let [ key, value ] of Object.entries( img.sizes ) ) {
                console.log( 'key: "' + key + '", val: "' + value + '"' );
            }
            */
            
            console.log( 'mediumUrl: ' + img.sizes.medium.url );
            console.log( 'mediumWidth: ' + img.sizes.medium.width );
            console.log( 'mediumHeight: ' + img.sizes.medium.height );
            console.log( 'largeUrl: ' + img.sizes.large.url );
            console.log( 'largeWidth: ' + img.sizes.large.width );
            console.log( 'largeHeight: ' + img.sizes.large.height );
            

            //console.log( 'ratio thumbnail ( ' + img.sizes.thumbnail.width + ' / ' + img.sizes.thumbnail.height + ' ): ' + img.sizes.thumbnail.width / img.sizes.thumbnail.height );
            /*
            console.log( 'ratio medium ( ' + img.sizes.medium.width + ' / ' + img.sizes.medium.height + ' ): ' + img.sizes.medium.width / img.sizes.medium.height );
            console.log( 'ratio large ( ' + img.sizes.large.width + ' / ' + img.sizes.large.height + ' ): ' + img.sizes.large.width / img.sizes.large.height );
            console.log( 'ratio full ( ' + img.sizes.full.width + ' / ' + img.sizes.full.height + ' ): ' + img.sizes.full.width / img.sizes.full.height );
            */
            console.log( 'calculated ratio: ' + ratio );

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
                url,
                width,
                height,
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
                                    <source media="(max-width: 459.98px)" srcset="" data-srcset={ mediumUrl } data-width={ mediumWidth } data-height={ mediumHeight } />
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
