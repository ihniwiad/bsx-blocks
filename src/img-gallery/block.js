const { __, setLocaleData } = wp.i18n;
const {
    registerBlockType,
} = wp.blocks;
const {
    RichText,
    MediaUpload,
    InspectorControls,
    InspectorAdvancedControls,
} = wp.blockEditor;
const { 
    Button,
    TextControl,
    SelectControl,
    PanelBody,
    ToggleControl,
    SVG, 
    Path,
} = wp.components;


import { addClassNames } from './../_functions/add-class-names.js';


const makeClassName = ( attributes ) => {

    const {
        galleryType,
    } = attributes;

    const classNames = [ 'bsx-gallery' ];

    if ( !! galleryType ) {
        if ( galleryType == 'floating' ) {
            classNames.push( 'bsx-floating-gallery' );
        }
    }

    return classNames.join( ' ' );
}

const makeInnerClassName = ( attributes ) => {

    const {
        galleryType,
    } = attributes;

    const classNames = [];

    if ( !! galleryType ) {
        if ( galleryType == 'floating' ) {
            classNames.push( 'bsx-floating-gallery-inner' );
        }
        else if ( galleryType == 'columns' ) {
            classNames.push( 'row' );
        }
    }
    
    return classNames.join( ' ' );
}

const makeItemClassName = ( attributes ) => {

    const {
        galleryType,
    } = attributes;

    const classNames = [];

    if ( !! galleryType ) {
        if ( galleryType == 'floating' ) {
            classNames.push( 'bsx-floating-gallery-figure d-inline-block' );
        }
        else if ( galleryType == 'columns' ) {
            // TODO: make configurable later
            classNames.push( 'col-6 col-sm-3 mb-4' );
        }
    }
    
    return classNames.join( ' ' );
}

const makeLinkClassName = ( attributes ) => {

    const {
        galleryType,
    } = attributes;

    const classNames = [];

    if ( !! galleryType ) {
        if ( galleryType == 'floating' ) {
            classNames.push( 'd-inline-block' );
        }
        else if ( galleryType == 'columns' ) {
            classNames.push( 'd-block text-center' );
        }
    }
    
    return classNames.join( ' ' );
}

const makeImgClassName = ( attributes ) => {

    const {
        galleryType,
    } = attributes;

    const classNames = [];

    if ( !! galleryType ) {
        if ( galleryType == 'floating' ) {
            classNames.push( 'bsx-floating-gallery-img-md' );
        }
        else if ( galleryType == 'columns' ) {
            classNames.push( 'img-fluid' );
        }
    }
    
    return classNames.join( ' ' );
}

const makeUploadElementClassName = ( attributes ) => {

    const {
        galleryType,
    } = attributes;

    const classNames = [];

    if ( !! galleryType ) {
        if ( galleryType == 'floating' ) {
            classNames.push( 'bsxui-mt-3' );
        }
    }
    
    return classNames.join( ' ' );
}


registerBlockType( 'bsx-blocks/img-gallery', {
    title: __( 'BSX Image Gallery', 'bsx-blocks' ),
    icon: 'format-gallery',
    category: 'layout',
    attributes: {
        mediaList: {
            type: 'array',
            default: [],
        },
        galleryType: {
            type: 'string',
            default: 'columns',
        },
        figcaption: {
            type: 'array',
            source: 'children',
            selector: '.bsx-gallery-figcaption',
        },
        rounded: {
            type: 'boolean',
        },
        imgThumbnail: {
            type: 'boolean',
        },
        borderState: {
            type: 'string',
        },
        marginBefore: {
            type: 'string',
            default: '',
        },
        marginAfter: {
            type: 'string',
            default: '',
        },
    },
    edit: ( props ) => {
        const {
            className,
            attributes: {
                mediaList,
                galleryType,
                figcaption,
                rounded,
                imgThumbnail,
                borderState,
                marginBefore,
                marginAfter,
            },
            setAttributes,
            isSelected,
        } = props;

        const onAddImage = ( mediaStack ) => {
            const addMedia = [];
            mediaStack.forEach( ( media ) => {
                addMedia.push( { 
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
            } );
            addMediaListItem( addMedia );
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

        const addMediaListItem = ( newItem ) => setAttributes( { mediaList: [ ...mediaList, ...newItem ] } );

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

        const onChangeGalleryType = ( value ) => {
            setAttributes( { galleryType: value } );
        }
        const onChangeFigcaption = ( value ) => {
            setAttributes( { figcaption: value } );
        };

        const onChangeRounded = ( value ) => {
            setAttributes( { rounded: value } );
        };
        const onChangeImgThumbnail = ( value ) => {
            setAttributes( { imgThumbnail: value } );
        };
        const onChangeBorderState = ( value ) => {
            setAttributes( { borderState: value } );
        };

        const onChangeMarginBefore = ( value ) => {
            setAttributes( { marginBefore: value } );
        };
        const onChangeMarginAfter = ( value ) => {
            setAttributes( { marginAfter: value } );
        };

        // class names

        let galleryClassName = makeClassName( { 
            galleryType 
        } );
        galleryClassName = addClassNames( {
            marginBefore, 
            marginAfter, 
        }, galleryClassName );

        const innerClassName = makeInnerClassName( { 
            galleryType 
        } );

        const itemClassName = makeItemClassName( { 
            galleryType 
        } );

        const linkClassName = makeLinkClassName( { 
            galleryType 
        } );

        let imgClassName = makeImgClassName( { 
            galleryType 
        } );
        imgClassName = addClassNames( {
            rounded,
            imgThumbnail,
            borderState,
        }, imgClassName );

        const uploadElementClassName = makeUploadElementClassName( { 
            galleryType 
        } );

        const TagName = 'figure';

        
        return [
            <InspectorControls>
                <PanelBody title={ __( 'Gallery settings', 'bsx-blocks' ) }>
                    <SelectControl 
                        label={ __( 'Gallery type', 'bsx-blocks' ) }
                        value={ galleryType }
                        onChange={ onChangeGalleryType }
                        options={ [
                            { value: 'columns', label: __( 'Columns', 'bsx-blocks' ) },
                            { value: 'floating', label: __( 'Floating (equal image height)', 'bsx-blocks' ) },
                        ] }
                    />
                </PanelBody>

                <PanelBody title={ __( 'Thumbnail appearance', 'bsx-blocks' ) }>
                    <ToggleControl
                        label={ __( 'Rounded corners', 'bsx-blocks' ) }
                        checked={ !! rounded }
                        onChange={ onChangeRounded }
                    />
                    <ToggleControl
                        label={ __( 'Border', 'bsx-blocks' ) }
                        checked={ !! imgThumbnail }
                        onChange={ onChangeImgThumbnail }
                    />
                    <SelectControl 
                        label={ __( 'Border color', 'bsx-blocks' ) }
                        value={ borderState }
                        onChange={ onChangeBorderState }
                        options={ [
                            { value: '', label: __( '– unset –', 'bsx-blocks' ) },
                            { value: 'white', label: __( 'White', 'bsx-blocks' ) },
                            { value: 'primary', label: __( 'Primary', 'bsx-blocks' ) },
                            { value: 'secondary', label: __( 'Secondary', 'bsx-blocks' ) },
                            { value: 'success', label: __( 'Success', 'bsx-blocks' ) },
                            { value: 'danger', label: __( 'Danger', 'bsx-blocks' ) },
                            { value: 'warning', label: __( 'Warning', 'bsx-blocks' ) },
                            { value: 'info', label: __( 'Info', 'bsx-blocks' ) },
                            { value: 'light', label: __( 'Light', 'bsx-blocks' ) },
                            { value: 'dark', label: __( 'Dark', 'bsx-blocks' ) },
                        ] }
                    />
                </PanelBody>

                <PanelBody title={ __( 'Margin', 'bsx-blocks' ) }>
                    <SelectControl 
                        label={ __( 'Margin before', 'bsx-blocks' ) }
                        value={ marginBefore }
                        onChange={ onChangeMarginBefore }
                        options={ [
                            { value: '', label: __( '– unset –', 'bsx-blocks' ) },
                            { value: '0', label: __( 'none (0)', 'bsx-blocks' ) },
                            { value: '1', label: __( 'extra small', 'bsx-blocks' ) },
                            { value: '2', label: __( 'small', 'bsx-blocks' ) },
                            { value: '3', label: __( 'medium', 'bsx-blocks' ) },
                            { value: '4', label: __( 'large', 'bsx-blocks' ) },
                            { value: '5', label: __( 'extra large', 'bsx-blocks' ) },
                        ] }
                        help={ __( 'Spacer before element', 'bsx-blocks' ) }
                    />
                    <SelectControl 
                        label={ __( 'Margin after', 'bsx-blocks' ) }
                        value={ marginAfter }
                        onChange={ onChangeMarginAfter }
                        options={ [
                            { value: '', label: __( '– unset –', 'bsx-blocks' ) },
                            { value: '0', label: __( 'none (0)', 'bsx-blocks' ) },
                            { value: '1', label: __( 'extra small', 'bsx-blocks' ) },
                            { value: '2', label: __( 'small', 'bsx-blocks' ) },
                            { value: '3', label: __( 'medium', 'bsx-blocks' ) },
                            { value: '4', label: __( 'large', 'bsx-blocks' ) },
                            { value: '5', label: __( 'extra large', 'bsx-blocks' ) },
                        ] }
                        help={ __( 'Spacer after element', 'bsx-blocks' ) }
                    />
                </PanelBody>
            </InspectorControls>,
            (
                <TagName className={ galleryClassName }>

                    <div className={ innerClassName }>
                        {
                            mediaList.map( ( media, index ) => 
                                <div class={ itemClassName }>
                                    <MediaUpload
                                        key={ index }
                                        onSelect={ ( value ) => onUpdateImage( value, index ) }
                                        allowedTypes="image"
                                        value={ media.id }
                                        render={ ( { open } ) => (
                                            <Button className="bsxui-h-auto bsxui-w-100 bsxui-px-0" onClick={ open }>
                                                <img className={ imgClassName } src={ media.url } alt={ __( 'Upload Image', 'bsx-blocks' ) } />
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
                                    <div className="d-flex">
                                        <Button 
                                            className="button bsxui-icon-button" 
                                            onClick={ () => { onClickMoveUp( index ) } }
                                            label={ __( 'Move backward', 'bsx-blocks' ) }
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" role="img" focusable="false"><path d="M14 5l-5 5 5 5-1 2-7-7 7-7z"></path></svg>
                                        </Button>
                                        <Button 
                                            className="button bsxui-icon-button" 
                                            onClick={ () => { onClickMoveDown( index ) } }
                                            label={ __( 'Move forward', 'bsx-blocks' ) }
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" role="img" focusable="false"><path d="M6 15l5-5-5-5 1-2 7 7-7 7z"></path></svg>
                                        </Button>
                                        <Button 
                                            className="button bsxui-icon-button bsxui-text-danger bsxui-border-danger bsxui-ml-auto"
                                            onClick={ () => { onClickDelete( index ) } }
                                            label={ __( 'Remove Image', 'bsx-blocks' ) }
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" role="img" focusable="false"><path d="M12 4h3c.6 0 1 .4 1 1v1H3V5c0-.6.5-1 1-1h3c.2-1.1 1.3-2 2.5-2s2.3.9 2.5 2zM8 4h3c-.2-.6-.9-1-1.5-1S8.2 3.4 8 4zM4 7h11l-.9 10.1c0 .5-.5.9-1 .9H5.9c-.5 0-.9-.4-1-.9L4 7z"></path></svg>
                                        </Button>
                                    </div>
                                </div>
                            )
                        }
                    </div>

                    <div className={ uploadElementClassName }>
                        <MediaUpload
                            onSelect={ onAddImage }
                            allowedTypes="image"
                            multiple
                            render={ ( { open } ) => (
                                <Button className="button button-large bsxui-w-100" onClick={ open }>
                                    { __( 'Add image(s)', 'bsx-blocks' ) }
                                </Button>
                            ) }
                        />
                    </div>

                    <RichText
                        tagName="figcaption"
                        multiline={ false }
                        placeholder={ __( 'Caption (optional)', 'bsx-blocks' ) }
                        value={ figcaption }
                        onChange={ onChangeFigcaption }
                        keepPlaceholderOnFocus
                    />
                </TagName>
            )
        ];
    },
    save: ( props ) => {
        const {
            className,
            attributes: {
                mediaList,
                galleryType,
                figcaption,
                rounded,
                imgThumbnail,
                borderState,
                marginBefore,
                marginAfter,
            },
        } = props;

        // class names

        let galleryClassName = makeClassName( { 
            galleryType 
        } );
        galleryClassName = addClassNames( {
            marginBefore, 
            marginAfter, 
        }, galleryClassName );

        const innerClassName = makeInnerClassName( { 
            galleryType 
        } );

        const itemClassName = makeItemClassName( { 
            galleryType 
        } );

        const linkClassName = makeLinkClassName( { 
            galleryType 
        } );

        let imgClassName = makeImgClassName( { 
            galleryType 
        } );
        imgClassName = addClassNames( {
            rounded,
            imgThumbnail,
            borderState,
        }, imgClassName );

        const TagName = 'figure';

        return (
            <TagName className={ galleryClassName }>
                <div class="bsx-gallery" itemscope itemtype="http://schema.org/ImageGallery" data-fn="photoswipe">
                    <div class={ innerClassName }>
                        {
                            mediaList.map( ( media, index ) =>     
                                <figure class={ itemClassName } itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
                                    <a class={ linkClassName } href={ media.url } itemprop="contentUrl" data-size={ media.width + 'x' + media.height }>
                                        <script>document.write( '<img className={ imgClassName } src="" alt={ media.alt } width={ media.thumbWidth } height={ media.thumbHeight } data-src={ media.thumbUrl } data-fn="lazyload" />' );</script>
                                        <noscript><img className={ imgClassName } src={ media.thumbUrl } alt={ media.alt } width={ media.thumbWidth } height={ media.thumbHeight } /></noscript>
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
                {
                    figcaption && ! RichText.isEmpty( figcaption ) && (
                        <RichText.Content tagName="figcaption" className="bsx-gallery-figcaption font-italic" value={ figcaption } />
                    )
                }
            </TagName>
        );
    },
} );
