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
        - figure (and caption) optional
        - text align for figure (toolbar)
        - sizes { Max, Large, Medium, Small } -> get all image sizes from img.sizes
        - make own srcset sizes
*/

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
        smallUrl: {
            type: 'string',
        },
        smallWidth: {
            type: 'number',
        },
        smallHeight: {
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
                smallUrl,
                smallWidth,
                smallHeight,
                largeUrl,
                largeWidth,
                largeHeight,
                alt,
                figcaption,
            },
            setAttributes,
            isSelected,
        } = props;
        const onSelectImage = ( img ) => {
            setAttributes( {
                imgId: img.id,
                url: img.url,
                width: img.sizes.full.width,
                height: img.sizes.full.height,
                smallUrl: img.sizes.medium.url,
                smallWidth: img.sizes.medium.width,
                smallHeight: img.sizes.medium.height,
                largeUrl: img.sizes.large.url,
                largeWidth: img.sizes.large.width,
                largeHeight: img.sizes.large.height,
                alt: img.alt,
            } );

            // TEST – TODO: remove
            //for ( let [ key, value ] of Object.entries( img.sizes ) ) {
            //    console.log( 'key: "' + key + '", val: "' + value + '"' );
            //}
            /*
            console.log( 'smallUrl: ' + img.sizes.medium.url );
            console.log( 'smallWidth: ' + img.sizes.medium.width );
            console.log( 'smallHeight: ' + img.sizes.medium.height );
            console.log( 'largeUrl: ' + img.sizes.large.url );
            console.log( 'largeWidth: ' + img.sizes.large.width );
            console.log( 'largeHeight: ' + img.sizes.large.height );
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
                            <img className={ 'upload-img' } src={ url } alt={ alt } />
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
        + '<source media="(orientation: portrait) and (max-width: 799.98px)" srcset="" data-srcset="/documents/category/3677/example-img-006-720x720-thumb.jpg" data-width="720" data-height="720">\n'
        + '<source media="(min-width: 1440px)" srcset="" data-srcset="/documents/category/3677/example-img-006-1440x720.jpg" data-width="1440" data-height="480">\n'
        + '<source media="(min-width: 1140px)" srcset="" data-srcset="/documents/category/3677/example-img-006-1140x380.jpg" data-width="1140" data-height="380">\n'
        + '<img class="img-fluid" alt="Example image" src="" data-fn="lazyload" data-src="/documents/category/3677/example-img-006-720x480.jpg" data-width="1140" data-height="380">'
        + '</picture>'
    );
</script>
<noscript><img class="img-fluid" src="/documents/category/3677/example-img-006-720x480.jpg" alt="Example image"></noscript>
*/

    save: ( props ) => {
        const {
            className,
            attributes: {
                url,
                width,
                height,
                smallUrl,
                smallWidth,
                smallHeight,
                largeUrl,
                largeWidth,
                largeHeight,
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
                                    <source media="(max-width: 459.98px)" srcset="" data-srcset={ smallUrl } data-width={ smallWidth } data-height={ smallHeight } />
                                    <img className="img-fluid" src="" alt={ alt } width={ largeWidth } height={ largeHeight } data-src={ largeUrl } data-fn="lazyload" />
                                </picture>
                            ' );</script>
                            <noscript><img className="img-fluid" src={ largeUrl } alt={ alt } width={ largeWidth } height={ largeHeight } /></noscript>
                        
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
