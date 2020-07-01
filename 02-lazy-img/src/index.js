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


registerBlockType( 'bsx-blocks/lazy-img', {
    title: __( 'BSX Lazy Image', 'bsx-blocks' ),
    icon: 'format-image',
    category: 'layout',
    attributes: {
        mediaId: {
            type: 'number',
        },
        mediaUrl: {
            type: 'string',
        },
        mediaAlt: {
            type: 'string',
        },
        mediaWidth: {
            type: 'number',
        },
        mediaHeight: {
            type: 'number',
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
                mediaId,
                mediaUrl,
                mediaWidth,
                mediaHeight,
                mediaSmallUrl,
                mediaSmallWidth,
                mediaSmallHeight,
                mediaAlt,
                figcaption,
            },
            setAttributes,
            isSelected,
        } = props;
        const onSelectImage = ( media ) => {
            setAttributes( {
                mediaId: media.id,
                mediaUrl: media.url,
                mediaWidth: media.sizes.full.width,
                mediaHeight: media.sizes.full.height,
                mediaSmallUrl: media.sizes.medium.url,
                mediaSmallWidth: media.sizes.medium.width,
                mediaSmallHeight: media.sizes.medium.height,
                mediaAlt: media.alt,
            } );
            //console.log( 'mediaSmallUrl: ' + media.sizes.medium.url );
            //console.log( 'mediaSmallWidth: ' + media.sizes.medium.width );
            //console.log( 'mediaSmallHeight: ' + media.sizes.medium.height );
        };
        const onChangeMediaAlt = ( value ) => {
            setAttributes( { mediaAlt: value } );
        };
        const onChangeMediaWidth = ( value ) => {
            setAttributes( { mediaWidth: value } );
        };
        const onChangeMediaHeight = ( value ) => {
            setAttributes( { mediaHeight: value } );
        };
        const onChangeFigcaption = ( value ) => {
            setAttributes( { figcaption: value } );
        };
        return [
            <InspectorControls>
                <PanelBody title={ __( 'BSX Block Settings', 'bsx-blocks' ) }>
                    <TextControl 
                        label={ __( 'Width', 'bsx-blocks' ) }
                        value={ mediaWidth } 
                        onChange={ onChangeMediaWidth }
                    />
                    <TextControl 
                        label={ __( 'Height', 'bsx-blocks' ) }
                        value={ mediaHeight } 
                        onChange={ onChangeMediaHeight }
                    />
                </PanelBody>
            </InspectorControls>,
            (
                <div className={ className }>
                    {
                        mediaId ? (
                            <img className={ 'upload-img' } src={ mediaUrl } alt={ mediaAlt } />
                        )
                        : 
                        (
                            <div className={ 'bsxui-img-upload-placeholder' }>
                                <MediaUpload
                                    onSelect={ onSelectImage }
                                    allowedTypes="image"
                                    value={ mediaId }
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
                                mediaId && (
                                    <div className="bsxui-upload-btn-wrapper">
                                        <MediaUpload
                                            onSelect={ onSelectImage }
                                            allowedTypes="image"
                                            value={ mediaId }
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
                                value={ mediaAlt } 
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
                mediaUrl,
                mediaWidth,
                mediaHeight,
                mediaSmallUrl,
                mediaSmallWidth,
                mediaSmallHeight,
                mediaAlt,
                figcaption,
            },
        } = props;

        return (
            <div className={ className }>

                {
                    mediaUrl && (
                        <figure>
                            <script>document.write( '
                                <picture>
                                    <source media="(max-width: 459.98px)" srcset="" data-srcset={ mediaSmallUrl } data-width={ mediaSmallWidth } data-height={ mediaSmallHeight } />
                                    <img className="img-fluid" src="" alt={ mediaAlt } width={ mediaWidth } height={ mediaHeight } data-src={ mediaUrl } data-fn="lazyload" />
                                </picture>
                            ' );</script>
                            <noscript><img className="img-fluid" src={ mediaUrl } alt={ mediaAlt } width={ mediaWidth } height={ mediaHeight } /></noscript>
                        
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
