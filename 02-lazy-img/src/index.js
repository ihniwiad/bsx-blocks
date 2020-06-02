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
        mediaID: {
            type: 'number',
        },
        mediaURL: {
            type: 'string',
        },
        mediaAlt: {
            type: 'string',
        },
        mediaWidth: {
            type: 'string',
        },
        mediaHeight: {
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
                mediaID,
                mediaURL,
                mediaAlt,
                mediaWidth,
                mediaHeight,
                figcaption,
            },
            setAttributes,
            isSelected,
        } = props;
        const onSelectImage = ( media ) => {
            setAttributes( {
                mediaURL: media.url,
                mediaID: media.id,
                mediaAlt: media.alt,
            } );
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
        const onChangeIngredients = ( value ) => {
            setAttributes( { ingredients: value } );
        };
        const onChangeFigcaption = ( value ) => {
            setAttributes( { figcaption: value } );
        };
        return (
            <div className={ className }>
                <div className={ mediaID ? 'bsx-ui-img-upload' : 'bsx-ui-img-upload border bg-light p-2' }>
                    <MediaUpload
                        onSelect={ onSelectImage }
                        allowedTypes="image"
                        value={ mediaID }
                        render={ ( { open } ) => (
                            <Button className={ mediaID ? 'bsx-ui-img-btn h-100 w-100 px-0' : 'button button-large' } onClick={ open }>
                                { ! mediaID ? __( 'Upload Image', 'bsx-blocks' ) : <img className={ 'img-fluid' } src={ mediaURL } alt={ __( 'Upload Recipe Image', 'bsx-blocks' ) } /> }
                            </Button>
                        ) }
                    />
                </div>
                <RichText
                    tagName="figcaption"
                    multiline={ false }
                    placeholder={ __( 'Bildbeschreibung (optional)', 'bsx-blocks' ) }
                    value={ figcaption }
                    onChange={ onChangeFigcaption }
                />
                { isSelected && (
                    <div class="border bg-light mt-2 px-1">
                        <div>
                            <TextControl 
                                label={ __( 'Width', 'bsx-blocks' ) }
                                className="mediaWidth" 
                                value={ mediaWidth } 
                                onChange={ onChangeMediaWidth }
                            />
                        </div>
                        <div>
                            <TextControl 
                                label={ __( 'Height', 'bsx-blocks' ) }
                                className="mediaHeight" 
                                value={ mediaHeight } 
                                onChange={ onChangeMediaHeight }
                            />
                        </div>
                        <div>
                            <TextControl 
                                label={ __( 'Alt', 'bsx-blocks' ) }
                                className="mediaAlt" 
                                value={ mediaAlt } 
                                onChange={ onChangeMediaAlt }
                            />
                        </div>
                    </div>
                ) }
            </div>
        );
    },
    save: ( props ) => {
        const {
            className,
            attributes: {
                mediaURL,
                mediaAlt,
                mediaWidth,
                mediaHeight,
                figcaption,
            },
        } = props;

        return (
            <div className={ className }>

                {
                    mediaURL && (
                        <figure>
                            <script>document.write( '<img className="img-fluid" src="" alt={ mediaAlt } width={ mediaWidth } height={ mediaHeight } data-src={ mediaURL } data-fn="lazyload" />' );</script>
                            <noscript><img className="img-fluid" src={ mediaURL } alt={ mediaAlt } width={ mediaWidth } height={ mediaHeight } /></noscript>
                        
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
