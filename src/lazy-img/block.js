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


// TODO: use array with maps instead, see banner `responsiveMediaSrcIndexList`
const smallMobileSizeStep = 2;
const smallMobileMediaQuery = '(max-width: 459.98px)';
const mobileSizeStep = 1;
const mobileMediaQuery = '(max-width: 767.98px)';

// TODO: make srcset list from this map, remove attributes after ( smallMobile..., mobile..., lowestSrcsetImgSizeIndex )
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

        // prepare img sources attributes

        const sourcesAttributesList = makeSourcesAttributesList( {
            imgSizes: imgSizes,
            imgSizeIndex: imgSizeIndex,
            responsiveMediaIndexList: responsiveMediaIndexList,
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

        // prepare img sources attributes

        const sourcesAttributesList = makeSourcesAttributesList( {
            imgSizes: imgSizes,
            imgSizeIndex: imgSizeIndex,
            responsiveMediaIndexList: responsiveMediaIndexList,
            skipIndex: skipIndex,
        } );

        // let sourcesHtml = '';
        // const sourcesAttributesList = [];
        // // console.log( 'imgSizeIndex: ' + imgSizeIndex );
        // responsiveMediaIndexList.forEach( ( item, index ) => {
        //     const currentImgIndex = parseInt( imgSizeIndex ) + parseInt( item.imgSizeIndexShift );
        //     // console.log( 'currentImgIndex: ' + currentImgIndex );
        //     let adaptedCurrentImgIndex = currentImgIndex;
        //     if ( currentImgIndex < parseInt( item.minImgSizeIndex ) ) {
        //         // use larger img if downsized img index is smaller than minimum img index, keep media
        //         adaptedCurrentImgIndex = parseInt( item.minImgSizeIndex );
        //     }

        //     // if ( currentImgIndex > skipIndex && typeof imgSizes[ currentImgIndex ].url != 'undefined' ) {
        //     if ( 
        //         adaptedCurrentImgIndex < parseInt( imgSizeIndex ) 
        //         && adaptedCurrentImgIndex > skipIndex
        //         && typeof imgSizes[ adaptedCurrentImgIndex ].url != 'undefined' 
        //     ) {
        //         // sourcesHtml += '<source media="' + item.media + '" srcset="" data-srcset="' + imgSizes[ currentImgIndex ].url + '" data-width="' + imgSizes[ currentImgIndex ].width + '" data-height="' + imgSizes[ currentImgIndex ].height + '" />';
        //         // sourcesHtml += `<source media="#{item.media}" srcset="" data-srcset="#{imgSizes[ currentImgIndex ].url}" data-width="#{imgSizes[ currentImgIndex ].width}" data-height="#{imgSizes[ currentImgIndex ].height}" />`;
        //         sourcesAttributesList.push( {
        //             media: item.media,
        //             srcset: '',
        //             'data-srcset': imgSizes[ adaptedCurrentImgIndex ].url,
        //             'data-width': imgSizes[ adaptedCurrentImgIndex ].width,
        //             'data-height': imgSizes[ adaptedCurrentImgIndex ].height,
        //         } );
        //     }
        // } );

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
