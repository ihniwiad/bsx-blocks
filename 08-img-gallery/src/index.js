const { __, setLocaleData } = wp.i18n;
const {
    registerBlockType,
} = wp.blocks;
const {
    RichText,
    MediaUpload,
} = wp.blockEditor;
const { 
    Button,
    TextControl,
} = wp.components;


registerBlockType( 'bsx-blocks/img-gallery', {
    title: __( 'BSX Image Gallery', 'bsx-blocks' ),
    icon: 'format-gallery',
    category: 'layout',
    attributes: {
        mediaList: {
            type: 'array',
            default: [],
        }
    },
    edit: ( props ) => {
        const {
            className,
            attributes: {
                mediaList,
            },
            setAttributes,
            isSelected,
        } = props;
        const onAddImage = ( media ) => {
            addMediaListItem( { 
                url: media.url,
                id: media.id,
                alt: media.alt,
                width: media.sizes.full.width,
                height: media.sizes.full.height,
                caption: media.alt,
            } );
        };
        const onUpdateImage = ( media, index ) => {
            updateMediaListItem( { 
                url: media.url,
                id: media.id,
                alt: media.alt,
                width: media.sizes.full.width,
                height: media.sizes.full.height,
                caption: media.alt,
            }, index );
        };
        const onClickDelete = ( index ) => {
            deleteMediaListItem( index );
        };

        const onClickMoveUp = ( index ) => {
            const newIndex = index > 0 ? index - 1 : mediaList.length - 1;
            mediaListItemMoveTo( index, newIndex );
        };

        const onClickMoveDown = ( index ) => {
            const newIndex = index < mediaList.length - 1 ? index + 1 : 0;
            mediaListItemMoveTo( index, newIndex );
        };

        const onChangeCaption = ( value, index ) => {
            const newMediaList = [
                ...mediaList.slice( 0, index ),
                { 
                    url: mediaList[ index ].url,
                    id: mediaList[ index ].id,
                    alt: mediaList[ index ].alt,
                    width: mediaList[ index ].width,
                    height: mediaList[ index ].height,
                    caption: value,
                },
                ...mediaList.slice( index + 1 )
            ];
            setAttributes( { mediaList: newMediaList } );
        }



        const addMediaListItem = ( newItem ) => setAttributes( { mediaList: [ ...mediaList, newItem ] } );

        const updateMediaListItem = ( newItem, index ) => {
            const newMediaList = [
                ...mediaList.slice( 0, index ),
                newItem,
                ...mediaList.slice( index + 1 )
            ];
            setAttributes( { mediaList: newMediaList } );
        }

        const deleteMediaListItem = ( index ) => {
            const newMediaList = [
                ...mediaList.slice( 0, index ),
                ...mediaList.slice( index + 1 )
            ];
            setAttributes( { mediaList: newMediaList } );
        }

        const mediaListItemMoveTo = ( index, newIndex ) => {
            const newMediaList = [
                ...mediaList.slice( 0, index ),
                ...mediaList.slice( index + 1 )
            ];
            const newMediaList2 = [
                ...newMediaList.slice( 0, newIndex ),
                mediaList[ index ],
                ...newMediaList.slice( newIndex )
            ];
            setAttributes( { mediaList: newMediaList2 } );
        }


        
        return (
            <div className={ className }>

                {
                    mediaList.map( ( media, index ) => 
                        <div className="bsx-ui-img-upload">
                            <MediaUpload
                                key={ index }
                                onSelect={ ( value ) => onUpdateImage( value, index ) }
                                allowedTypes="image"
                                value={ media.id }
                                render={ ( { open } ) => (
                                    <Button className="bsx-ui-img-btn h-100 w-100 px-0" onClick={ open }>
                                        <img className={ 'img-fluid' } src={ media.url } alt={ __( 'Upload Image', 'bsx-blocks' ) } />
                                    </Button>
                                ) }
                            />
                            <div className="d-flex pb-3">
                                <button className="button" onClick={ () => { onClickMoveUp( index ) } }>
                                    { __( 'Move up', 'bsx-blocks' ) }
                                </button>
                                <button className="button ml-1" onClick={ () => { onClickMoveDown( index ) } }>
                                    { __( 'Move down', 'bsx-blocks' ) }
                                </button>
                                <button className="button text-danger border-danger ml-auto" onClick={ () => { onClickDelete( index ) } } isDestructive>
                                    { __( 'Remove Image', 'bsx-blocks' ) }
                                </button>
                            </div>
                            <div className="mb-3">
                                <RichText
                                    tagName="div"
                                    multiline={ false }
                                    placeholder={ __( 'Caption (optional)', 'bsx-blocks' ) }
                                    value={ media.caption }
                                    onChange={ ( value ) => { onChangeCaption( value, index ) } }
                                />
                            </div>
                        </div>
                    )
                }

                <div className="bsx-ui-img-upload border bg-light p-2">
                    <MediaUpload
                        onSelect={ onAddImage }
                        allowedTypes="image"
                        render={ ( { open } ) => (
                            <Button className="button button-large" onClick={ open }>
                                { __( 'Add Image', 'bsx-blocks' ) }
                            </Button>
                        ) }
                    />
                </div>
            </div>
        );
        
    },
    save: ( props ) => {
        const {
            className,
            attributes: {
                mediaList,
            },
        } = props;

        return (
            <div className={ className }>
                <div class="row">
                {
                    mediaList.map( ( media, index ) => 
                        <div class="col-md-4">
                            <figure>
                                <script>document.write( '<img className="img-fluid" src="" alt={ media.alt } width={ media.width } height={ media.height } data-src={ media.url } data-fn="lazyload" />' );</script>
                                <noscript><img className="img-fluid" src={ media.url } alt={ media.alt } width={ media.width } height={ media.height } /></noscript>
                            
                                {
                                    media.caption && ! RichText.isEmpty( media.caption ) && (
                                        <RichText.Content tagName="figcaption" className="font-italic" value={ media.caption } />
                                    )
                                }

                            </figure>
                        </div>
                    )
                }
                </div>
            </div>
        );
    },
} );
