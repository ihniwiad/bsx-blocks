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
    SelectControl,
    SVG, 
    Path,
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


import { svgIcon } from './../_functions/wp-icons.js';


import { addClassNames } from './../_functions/add-class-names.js';


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

const makeSourcesAttributesList = ( attributes ) => {

    const {
        imgSizes,
        imgSizeIndex,
        responsiveMediaIndexList,
        portraitImgSizes,
        portraitImgSizeIndex,
        responsivePortraitMediaIndexList,
        skipIndex,
    } = attributes;

    const sourcesAttributesList = [];

    // portrait img
    responsivePortraitMediaIndexList.forEach( ( item, index ) => {

        const currentPortraitImgIndex = parseInt( portraitImgSizeIndex ) + parseInt( item.imgSizeIndexShift );

        const adaptedCurrentPortraitImgIndex = currentPortraitImgIndex < parseInt( item.minImgSizeIndex ) ? parseInt( item.minImgSizeIndex ) : currentPortraitImgIndex;

        if ( 
            adaptedCurrentPortraitImgIndex < parseInt( portraitImgSizeIndex ) 
            && adaptedCurrentPortraitImgIndex > skipIndex
            && typeof portraitImgSizes[ adaptedCurrentPortraitImgIndex ] != 'undefined' 
            && typeof portraitImgSizes[ adaptedCurrentPortraitImgIndex ].url != 'undefined' 
        ) {
            sourcesAttributesList.push( {
                media: item.media,
                srcset: '',
                'data-srcset': portraitImgSizes[ adaptedCurrentPortraitImgIndex ].url,
                'data-width': portraitImgSizes[ adaptedCurrentPortraitImgIndex ].width,
                'data-height': portraitImgSizes[ adaptedCurrentPortraitImgIndex ].height,
            } );
        }
    } );

    // default img
    responsiveMediaIndexList.forEach( ( item, index ) => {

        const currentImgIndex = parseInt( imgSizeIndex ) + parseInt( item.imgSizeIndexShift );

        const adaptedCurrentImgIndex = currentImgIndex < parseInt( item.minImgSizeIndex ) ? parseInt( item.minImgSizeIndex ) : currentImgIndex;

        if ( 
            adaptedCurrentImgIndex < parseInt( imgSizeIndex ) 
            && adaptedCurrentImgIndex > skipIndex
            && typeof imgSizes[ adaptedCurrentImgIndex ] != 'undefined' 
            && typeof imgSizes[ adaptedCurrentImgIndex ].url != 'undefined' 
        ) {
            sourcesAttributesList.push( {
                media: item.media,
                srcset: '',
                'data-srcset': imgSizes[ adaptedCurrentImgIndex ].url,
                'data-width': imgSizes[ adaptedCurrentImgIndex ].width,
                'data-height': imgSizes[ adaptedCurrentImgIndex ].height,
            } );
        }
    } );

    return sourcesAttributesList;

}


registerBlockType( 'bsx-blocks/lazy-img', {
    title: __( 'BSX Lazy Image', 'bsx-blocks' ),
    icon: svgIcon( 'lazy-img' ),
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
        rounded: {
            type: 'string',
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
                rounded,
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

                // console.log( 'originalWidth: ' + originalWidth );
                // console.log( 'originalHeight: ' + originalHeight );
                // console.log( 'newImgSizes.length: ' + newImgSizes.length );

                // console.log( 'imgSizeIndex: ' + imgSizeIndex );

                // console.log( '-----> newImgSizes:' );
                // newImgSizes.forEach( ( imgSize, index ) => {
                //     console.log( 'imgSize[ ' + index + ' ] ( ' + imgSize.width + 'x' + imgSize.height + ' ): "' + imgSize.url + '"' );
                // } );

                // check if current img size index fits to new img (might be too large)
                let newImgSizeIndex = parseInt( imgSizeIndex );
                if ( imgSizeIndex >= newImgSizes.length ) {
                    newImgSizeIndex = newImgSizes.length - 1;
                    // console.log( 'reduce initial imgSizeIndex to: ' + newImgSizeIndex );
                }

                // do not use thumbnail for srcset if has square format, start with img sizes index 1 then
                const newLowestSrcsetImgSizeIndex = img.sizes.thumbnail.width !== img.sizes.thumbnail.height ? 0 : 1;

                setAttributes( {
                    imgId: img.id,
                    imgSizes: newImgSizes,
                    imgSizeIndex: newImgSizeIndex.toString(),
                    url: newImgSizes[ newImgSizeIndex ].url,
                    width: parseInt( newImgSizes[ newImgSizeIndex ].width ),
                    height: parseInt( newImgSizes[ newImgSizeIndex ].height ),
                    origWidth: originalWidth,
                    origHeight: originalHeight,
                    alt: img.alt,
                } );

                // TEST – TODO: remove
                // for ( let [ key, value ] of Object.entries( img.sizes ) ) {
                //     console.log( 'key: "' + key + '", val: "' + value + '"' );
                // }
                
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
        
        const onChangeImgWidth = ( value ) => {
            setAttributes( { width: parseInt( value ) } );
        };
        const onChangeImgHeight = ( value ) => {
            setAttributes( { height: parseInt( value ) } );
        };
        const onChangeRounded = ( value ) => {
            setAttributes( { rounded: value } );
        };

        const onChangeImgSizeIndex = ( value ) => {
            setAttributes( { 
                imgSizeIndex: value.toString(),
                url: imgSizes[ value ].url,
                width: parseInt( imgSizes[ value ].width ),
                height: parseInt( imgSizes[ value ].height ),
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
            imgSizes,
            imgSizeIndex,
            responsiveMediaIndexList,
            portraitImgSizes,
            portraitImgSizeIndex,
            responsivePortraitMediaIndexList,
            skipIndex,
        } );

        // class names

        const imgClassName = addClassNames( {
            rounded: rounded,
        }, 'img-fluid' );

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
                        onChange={ onChangeImgWidth }
                    />
                    <TextControl 
                        label={ __( 'Displayed image height', 'bsx-blocks' ) }
                        value={ height } 
                        onChange={ onChangeImgHeight }
                    />
                    <SelectControl 
                        label={ __( 'Rounded', 'bsx-blocks' ) }
                        value={ rounded }
                        onChange={ onChangeRounded }
                        options={ [
                            { value: '', label: __( '– unset –', 'bsx-blocks' ) },
                            { value: 'rounded', label: __( 'Rounded corners', 'bsx-blocks' ) },
                            { value: 'circle', label: __( 'Circle', 'bsx-blocks' ) },
                        ] }
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
                                <img className={ imgClassName } src={ url } alt={ alt } />
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
                rounded,
            },
        } = props;

        // prepare img sources attributes

        const sourcesAttributesList = makeSourcesAttributesList( {
            imgSizes,
            imgSizeIndex,
            responsiveMediaIndexList,
            portraitImgSizes,
            portraitImgSizeIndex,
            responsivePortraitMediaIndexList,
            skipIndex,
        } );

        // class names

        const imgClassName = addClassNames( {
            rounded: rounded,
        }, 'img-fluid' );

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
                                    <img className={ imgClassName } src="" alt={ alt } data-src={ url } width={ width } height={ height } data-fn="lazyload" />
                                </picture>
                            ' );</script>
                            <noscript><img className={ imgClassName } src={ url } alt={ alt } width={ width } height={ height } /></noscript>

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
