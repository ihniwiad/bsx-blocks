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


import { 
    getUrlTruncAndExtension,
    fullImgIsScaled,
    getOriginalImgUrl,
    getSizesAndWithoutSizesTruncFromUrlTrunc,
    makeSizedImgs,
    getImgWithHeight,
    imgExists,
    getImgSizesData,
} from './../_functions/img.js';


const responsivePortraitMediaIndexList = [
    {
        media: '(orientation: portrait) and (max-width: 499.98px)',
        imgSizeIndexShift: '-1',
        minImgSizeIndex: '1',
    },
    {
        media: '(orientation: portrait)',
        imgSizeIndexShift: '0',
        minImgSizeIndex: '2',
    },
];
const responsiveMediaIndexList = [
    {
        media: '(max-width: 459.98px)',
        imgSizeIndexShift: '-2',
        minImgSizeIndex: '1',
    },
    {
        media: '(max-width: 767.98px)',
        imgSizeIndexShift: '-1',
        minImgSizeIndex: '2',
    },
];
const skipIndex = 0;

const makeSourcesAttributesList = ( config ) => {

    const sourcesAttributesList = [];

    // portrait img
    config.responsivePortraitMediaIndexList.forEach( ( item, index ) => {

        const currentPortraitImgIndex = parseInt( config.portraitImgSizeIndex ) + parseInt( item.imgSizeIndexShift );

        const adaptedCurrentPortraitImgIndex = currentPortraitImgIndex < parseInt( item.minImgSizeIndex ) ? parseInt( item.minImgSizeIndex ) : currentPortraitImgIndex;

        if ( 
            adaptedCurrentPortraitImgIndex < parseInt( config.portraitImgSizeIndex ) 
            && adaptedCurrentPortraitImgIndex > config.skipIndex
            && typeof config.portraitImgSizes[ adaptedCurrentPortraitImgIndex ] != 'undefined' 
            && typeof config.portraitImgSizes[ adaptedCurrentPortraitImgIndex ].url != 'undefined' 
        ) {
            sourcesAttributesList.push( {
                media: item.media,
                srcset: '',
                'data-srcset': config.portraitImgSizes[ adaptedCurrentPortraitImgIndex ].url,
                'data-width': config.portraitImgSizes[ adaptedCurrentPortraitImgIndex ].width,
                'data-height': config.portraitImgSizes[ adaptedCurrentPortraitImgIndex ].height,
            } );
        }
    } );

    // default img
    config.responsiveMediaIndexList.forEach( ( item, index ) => {

        const currentImgIndex = parseInt( config.imgSizeIndex ) + parseInt( item.imgSizeIndexShift );

        const adaptedCurrentImgIndex = currentImgIndex < parseInt( item.minImgSizeIndex ) ? parseInt( item.minImgSizeIndex ) : currentImgIndex;

        if ( 
            adaptedCurrentImgIndex < parseInt( config.imgSizeIndex ) 
            && adaptedCurrentImgIndex > config.skipIndex
            && typeof config.imgSizes[ adaptedCurrentImgIndex ] != 'undefined' 
            && typeof config.imgSizes[ adaptedCurrentImgIndex ].url != 'undefined' 
        ) {
            sourcesAttributesList.push( {
                media: item.media,
                srcset: '',
                'data-srcset': config.imgSizes[ adaptedCurrentImgIndex ].url,
                'data-width': config.imgSizes[ adaptedCurrentImgIndex ].width,
                'data-height': config.imgSizes[ adaptedCurrentImgIndex ].height,
            } );
        }
    } );

    return sourcesAttributesList;

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
                url,
                width,
                height,
                origWidth,
                origHeight,
                portraitImgId,
                portraitImgSizes,
                portraitImgSizeIndex,
                alt,
                figcaption,
            },
            setAttributes,
            isSelected,
            setState,
        } = props;
        async function onSelectImage( img ) {

            if ( typeof img.url !== 'undefined' ) {

                const newImgSizesData = await getImgSizesData( img );
                const newImgSizes = newImgSizesData.imgs;
                const originalWidth = newImgSizesData.originalWidth;
                const originalHeight = newImgSizesData.originalHeight;

                // TEST
                // console.log( '-----> newImgSizes:' );
                // newImgSizes.forEach( ( imgSize, index ) => {
                //     console.log( 'imgSize[ ' + index + ' ] ( ' + imgSize.width + 'x' + imgSize.height + ' ): "' + imgSize.url + '"' );
                // } );

                // check if current img size index fits to new img (might be too large)
                let newImgSizeIndex = parseInt( imgSizeIndex );
                if ( imgSizeIndex >= newImgSizes.length ) {
                    newImgSizeIndex = newImgSizes.length - 1;
                    //console.log( 'reduce initial imgSizeIndex to: ' + newImgSizeIndex );
                }

                // do not use thumbnail for srcset if has square format, start with img sizes index 1 then
                const newLowestSrcsetImgSizeIndex = img.sizes.thumbnail.width !== img.sizes.thumbnail.height ? 0 : 1;

                setAttributes( {
                    imgId: img.id,
                    imgSizes: newImgSizes,
                    imgSizeIndex: newImgSizeIndex.toString(),
                    url: newImgSizes[ newImgSizeIndex ].url,
                    width: newImgSizes[ newImgSizeIndex ].width,
                    height: newImgSizes[ newImgSizeIndex ].height,
                    origWidth: originalWidth,
                    origHeight: originalHeight,
                    alt: img.alt,
                } );

                // TEST – TODO: remove
                // for ( let [ key, value ] of Object.entries( img.sizes ) ) {
                //     console.log( 'key: "' + key + '", val: "' + value + '"' );
                // }

                // console.log( 'mediumUrl: ' + img.sizes.medium.url );
                // console.log( 'mediumWidth: ' + img.sizes.medium.width );
                // console.log( 'mediumHeight: ' + img.sizes.medium.height );
                // console.log( 'largeUrl: ' + img.sizes.large.url );
                // console.log( 'largeWidth: ' + img.sizes.large.width );
                // console.log( 'largeHeight: ' + img.sizes.large.height );

                // console.log( 'ratio thumbnail ( ' + img.sizes.thumbnail.width + ' / ' + img.sizes.thumbnail.height + ' ): ' + img.sizes.thumbnail.width / img.sizes.thumbnail.height );

                // console.log( 'ratio medium ( ' + img.sizes.medium.width + ' / ' + img.sizes.medium.height + ' ): ' + img.sizes.medium.width / img.sizes.medium.height );
                // console.log( 'ratio large ( ' + img.sizes.large.width + ' / ' + img.sizes.large.height + ' ): ' + img.sizes.large.width / img.sizes.large.height );
                // console.log( 'ratio full ( ' + img.sizes.full.width + ' / ' + img.sizes.full.height + ' ): ' + img.sizes.full.width / img.sizes.full.height );

            }
        };

        async function onSelectPortraitImage( portraitImg ) {

            if ( typeof portraitImg.url !== 'undefined' ) {

                const newPortraitImgSizesData = await getImgSizesData( portraitImg );
                const newPortraitImgSizes = newPortraitImgSizesData.imgs;

                // check if current img size index fits to new img (might be too large)
                let newPortraitImgSizeIndex = parseInt( portraitImgSizeIndex );
                if ( portraitImgSizeIndex >= newPortraitImgSizeIndex.length ) {
                    newPortraitImgSizeIndex = newPortraitImgSizeIndex.length - 1;
                }

                setAttributes( {
                    portraitImgId: portraitImg.id,
                    portraitImgSizes: newPortraitImgSizes,
                    portraitImgSizeIndex: newPortraitImgSizeIndex.toString(),
                } );
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

        const onChangePortraitImgSizeIndex = ( value ) => {
            setAttributes( { 
                portraitImgSizeIndex: value.toString(),
            } );
        };
        const portraitImgSizeRadioControlOptions = [];
        portraitImgSizes.forEach( ( portraitImgSize, index ) => {
            portraitImgSizeRadioControlOptions.push( 
                { value: index.toString(), label: portraitImgSize.width + 'x' + portraitImgSize.height + ( portraitImgSize.width === portraitImgSize.height ? ' ' + __( '(Square format)', 'bsx-blocks' ) : '' ) } 
            );
        } );

        // prepare img sources attributes

        const sourcesAttributesList = makeSourcesAttributesList( {
            imgSizes: imgSizes,
            imgSizeIndex: imgSizeIndex,
            responsiveMediaIndexList: responsiveMediaIndexList,
            portraitImgSizes: portraitImgSizes,
            portraitImgSizeIndex: portraitImgSizeIndex,
            responsivePortraitMediaIndexList: responsivePortraitMediaIndexList,
            skipIndex: skipIndex,
        } );

        return [
            <InspectorControls>
                <PanelBody title={ __( 'Image', 'bsx-blocks' ) }>
                    <TextControl 
                        label={ __( 'Alt', 'bsx-blocks' ) }
                        value={ alt } 
                        onChange={ onChangeMediaAlt }
                    />
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
                                <a class="bsxui-link" href={ imgSizes[ imgSizeIndex ].url } target="_blank">{ __( 'Preview selected image', 'bsx-blocks' ) }</a>
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

                <PanelBody title={ __( 'Portrait image (optional)', 'bsx-blocks' ) }>
                    {
                        portraitImgId ? (
                            <MediaUpload
                                onSelect={ onSelectPortraitImage }
                                allowedTypes="image"
                                value={ portraitImgId }
                                render={ ( { open } ) => (
                                    <Button
                                        className="bsxui-config-panel-img-button has-margin-bottom"
                                        onClick={ open }
                                    >
                                        <img class="bsxui-config-panel-img" src={ portraitImgSizes[ portraitImgSizeIndex ].url } alt={ __( 'Change / upload portrait image', 'bsx-blocks' ) } />
                                    </Button>
                                ) }
                            />
                        )
                        : 
                        (
                            <div class="bsxui-config-panel-row">
                                <div class="bsxui-config-panel-text">{ __( '– No portrait image selected yet –', 'bsx-blocks' ) }</div>
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
                                <a class="bsxui-link" href={ portraitImgSizes[ portraitImgSizeIndex ].url } target="_blank">{ __( 'Preview selected portrait image', 'bsx-blocks' ) }</a>
                            </div>
                        )
                    }
                </PanelBody>
            </InspectorControls>,
            (
                <figure className={ className }>
                    {
                        imgId ? (
                            <picture>
                                {
                                    sourcesAttributesList.map( ( sourceAttributes, index ) => (
                                        <source { ...sourceAttributes } />
                                    ) )
                                }
                                <img className={ 'img-fluid upload-img' } src={ url } alt={ alt } />
                            </picture>
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
                    <RichText
                        tagName="figcaption"
                        multiline={ false }
                        placeholder={ __( 'Caption (optional)', 'bsx-blocks' ) }
                        value={ figcaption }
                        onChange={ onChangeFigcaption }
                        keepPlaceholderOnFocus
                    />
                </figure>
            )
        ];
    },

// <script>
//     document.write(
//         '<picture>'
//         + '<source media="(orientation: portrait) and (max-width: 799.98px)" srcset="" data-srcset="/example-img-006-720x720-thumb.jpg" data-width="720" data-height="720">\n'
//         + '<source media="(min-width: 1440px)" srcset="" data-srcset="/example-img-006-1440x720.jpg" data-width="1440" data-height="480">\n'
//         + '<source media="(min-width: 1140px)" srcset="" data-srcset="/example-img-006-1140x380.jpg" data-width="1140" data-height="380">\n'
//         + '<img class="img-fluid" alt="Example image" src="" data-fn="lazyload" data-src="/example-img-006-720x480.jpg" data-width="1140" data-height="380">'
//         + '</picture>'
//     );
// </script>
// <noscript><img class="img-fluid" src="/example-img-006-720x480.jpg" alt="Example image"></noscript>

    save: ( props ) => {
        const {
            className,
            attributes: {
                imgSizeIndex,
                imgSizes,
                url,
                width,
                height,
                origWidth,
                origHeight,
                portraitImgId,
                portraitImgSizes,
                portraitImgSizeIndex,
                alt,
                figcaption,
            },
        } = props;

        // prepare img sources attributes

        const sourcesAttributesList = makeSourcesAttributesList( {
            imgSizes: imgSizes,
            imgSizeIndex: imgSizeIndex,
            responsiveMediaIndexList: responsiveMediaIndexList,
            portraitImgSizes: portraitImgSizes,
            portraitImgSizeIndex: portraitImgSizeIndex,
            responsivePortraitMediaIndexList: responsivePortraitMediaIndexList,
            skipIndex: skipIndex,
        } );

        return (
            <div className={ className }>

                {
                    url && (
                        <figure>
                            <script>document.write( '
                                <picture>
                                    {
                                        sourcesAttributesList.map( ( sourceAttributes, index ) => (
                                            <source { ...sourceAttributes } />
                                        ) )
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
