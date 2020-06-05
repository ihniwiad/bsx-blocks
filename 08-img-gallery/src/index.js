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
    IconButton,
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
                id: media.id,
                url: media.url,
                width: media.sizes.full.width,
                height: media.sizes.full.height,
                alt: media.alt,
                thumbUrl: media.sizes.medium.url,
                thumbWidth: media.sizes.medium.width,
                thumbHeight: media.sizes.medium.height,
                caption: media.alt,
            } );
        };
        const onUpdateImage = ( media, index ) => {
            updateMediaListItem( { 
                id: media.id,
                url: media.url,
                width: media.sizes.full.width,
                height: media.sizes.full.height,
                alt: media.alt,
                thumbUrl: media.sizes.medium.url,
                thumbWidth: media.sizes.medium.width,
                thumbHeight: media.sizes.medium.height,
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
                    id: mediaList[ index ].id,
                    url: mediaList[ index ].url,
                    width: mediaList[ index ].width,
                    height: mediaList[ index ].height,
                    alt: mediaList[ index ].alt,
                    thumbUrl: mediaList[ index ].thumbUrl,
                    thumbWidth: mediaList[ index ].thumbWidth,
                    thumbHeight: mediaList[ index ].thumbHeight,
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

                <div class="row">
                    {
                        mediaList.map( ( media, index ) => 
                            <div class="col-xs-6 col-sm-3 mb-4">
                                <MediaUpload
                                    key={ index }
                                    onSelect={ ( value ) => onUpdateImage( value, index ) }
                                    allowedTypes="image"
                                    value={ media.id }
                                    render={ ( { open } ) => (
                                        <Button className="bsx-ui-img-btn h-auto w-100 px-0" onClick={ open }>
                                            <img className={ 'img-fluid' } src={ media.url } alt={ __( 'Upload Image', 'bsx-blocks' ) } />
                                        </Button>
                                    ) }
                                />
                                <div>
                                    <RichText
                                        tagName="div"
                                        multiline={ false }
                                        placeholder={ __( 'Caption (optional)', 'bsx-blocks' ) }
                                        value={ media.caption }
                                        onChange={ ( value ) => { onChangeCaption( value, index ) } }
                                    />
                                </div>
                                <div className="d-flex mb-3">
                                    <IconButton 
                                        className="button" 
                                        icon="arrow-left-alt2"
                                        onClick={ () => { onClickMoveUp( index ) } }
                                        label={ __( 'Move backward', 'bsx-blocks' ) }
                                    />
                                    <IconButton 
                                        className="button ml-1" 
                                        icon="arrow-right-alt2"
                                        onClick={ () => { onClickMoveDown( index ) } }
                                        label={ __( 'Move forward', 'bsx-blocks' ) }
                                    />
                                    <IconButton 
                                        className="button text-danger border-danger ml-auto" 
                                        icon="trash"
                                        onClick={ () => { onClickDelete( index ) } }
                                        label={ __( 'Remove Image', 'bsx-blocks' ) }
                                    />
                                </div>
                            </div>
                        )
                    }
                </div>

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

/*

            print('
<div class="my-gallery" itemscope itemtype="http://schema.org/ImageGallery" data-fn="photoswipe">
    <div class="row">
            ');

            foreach( $galleryData as $item ) {
                print('
<figure class="col-xs-6 col-sm-3 mb-4" itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
    <a class="d-block text-center" href="'.$item[ 'srcTrunc' ].$fileExtension.'" itemprop="contentUrl" data-size="'.$item[ 'size' ].'">
        <script>document.write(\'<img class="img-fluid" src="" itemprop="thumbnail" alt="'.$item[ 'caption' ].'" width="'.$item[ 'width' ].'" height="'.$item[ 'height' ].'" data-fn="lazyload" data-src="'.$item[ 'srcTrunc' ].$thumbSuffix.$fileExtension.'">\');</script>
        <noscript><img class="img-fluid" src="'.$item[ 'srcTrunc' ].$thumbSuffix.$fileExtension.'" itemprop="thumbnail" alt="'.$item->caption.'"></noscript>
    </a>
    <figcaption class="sr-only" itemprop="caption description">'.$item[ 'caption' ].'</figcaption>
</figure>
                ');
            }
            
            print('
    </div>
</div>
            ');
*/

        return (
            <div className={ className }>
                <div class="my-gallery" itemscope itemtype="http://schema.org/ImageGallery" data-fn="photoswipe">
                    <div class="row">
                        {
                            mediaList.map( ( media, index ) =>     
                                <figure class="col-xs-6 col-sm-3 mb-4" itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
                                    <a class="d-block text-center" href={ media.url } itemprop="contentUrl" data-size={ media.width + 'x' + media.height }>
                                        <script>document.write( '<img className="img-fluid" src="" alt={ media.alt } width={ media.thumbWidth } height={ media.thumbHeight } data-src={ media.thumbUrl } data-fn="lazyload" />' );</script>
                                        <noscript><img className="img-fluid" src={ media.thumbUrl } alt={ media.alt } width={ media.thumbWidth } height={ media.thumbHeight } /></noscript>
                                    </a>

                                    {
                                        media.caption && ! RichText.isEmpty( media.caption ) && (
                                            <RichText.Content tagName="figcaption" className="sr-only" value={ media.caption } itemprop="caption description" />
                                        )
                                    }

                                </figure>
                            )
                        }
                    </div>
                </div>
            </div>
        );
    },
} );
