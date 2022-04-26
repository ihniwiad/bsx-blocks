// TODO: save img urls in shorter way (e.g. trunc + suffixes/sizes, or only id?)
/*
    "imgUrlTrunc":"http://localhost/wordpress-testing/wp-content/uploads/2021/04/sergio-jara-yX9WbPbz8J8-unsplash-3000x1000-1-"
    "imgUrlExt":".jpg"
    "imgTruncSizes":[
        {"u":"150x150","s":"[150,150]"},
        {"u":"300x100","s":"[300,100]"},
        ...
    ]
*/
// TODO: advanced setting: allow zoomable img without `data-fn="photoswipe"` attr for making gallery with external attr (e.g. container or wrapper)


const { __, setLocaleData } = wp.i18n;
const {
    registerBlockType,
} = wp.blocks;
const {
    RichText,
    MediaUpload,
    InspectorControls,
    InspectorAdvancedControls,
    BlockControls,
    AlignmentToolbar,
} = wp.blockEditor;
const { 
    Button,
    TextControl,
    PanelBody,
    RadioControl,
    SelectControl,
    ToggleControl,
    SVG, 
    Path,
} = wp.components;


// functions imports

import { svgIcon } from './../_functions/wp-icons.js';
import { addClassNames } from './../_functions/add-class-names.js';
import { makeSaveAttributes } from './../_functions/attributes.js';
import { 
    linkUrlInput,
    // ignoreMailtoSpamProtectionToggle,
    targetToggle,
    relInput,
    // dataFnInput,
    // marginLeftSelect,
    // marginRightSelect,
    // marginBeforeSelect,
    // marginAfterSelect,
    scaleSelect,
    disableResponsiveDownsizingToggle,
} from './../_functions/controls.js';
import { 
    getUrlTruncAndExtension,
    fullImgIsScaled,
    getOriginalImgUrl,
    getSizesAndWithoutSizesTruncFromUrlTrunc,
    makeSizedImgs,
    getImgWithHeight,
    imgExists,
    getImgSizesData,
    makeBase64PreloadImgSrc,
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

const makeSourcesAttributesList = ( attributes ) => {

    const {
        imgSizes,
        imgSizeIndex,
        responsiveMediaIndexList,
        portraitImgSizes,
        portraitImgSizeIndex,
        responsivePortraitMediaIndexList,
        skipIndex,
        disableResponsiveDownsizing,
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
                srcset: makeBase64PreloadImgSrc( portraitImgSizes[ adaptedCurrentPortraitImgIndex ].width, portraitImgSizes[ adaptedCurrentPortraitImgIndex ].height ),
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
            ! disableResponsiveDownsizing
            && adaptedCurrentImgIndex < parseInt( imgSizeIndex ) 
            && adaptedCurrentImgIndex > skipIndex
            && typeof imgSizes[ adaptedCurrentImgIndex ] != 'undefined' 
            && typeof imgSizes[ adaptedCurrentImgIndex ].url != 'undefined' 
        ) {
            sourcesAttributesList.push( {
                media: item.media,
                srcset: makeBase64PreloadImgSrc( imgSizes[ adaptedCurrentImgIndex ].width, imgSizes[ adaptedCurrentImgIndex ].height ),
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
        imgThumbnail: {
            type: 'boolean',
        },
        borderState: {
            type: 'string',
        },
        zoomable: {
            type: 'boolean',
        },
        externalGalleryParent: {
            type: 'boolean',
        },
        zoomImgSizeIndex: {
            type: 'string',
        },
        disableResponsiveDownsizing: {
            type: 'boolean',
        },
        textAlign: {
            type: 'string',
            default: '',
        },
        marginAfter: {
            type: 'string',
        },
        aAdditionalClassName: {
            type: 'string',
        },
        pictureAdditionalClassName: {
            type: 'string',
        },
        imgAdditionalClassName: {
            type: 'string',
        },
        href: {
            type: 'string',
        },
        target: {
            type: 'string',
        },
        rel: {
            type: 'string',
        },
        scale: {
            type: 'number',
        },
        displayedWidth: {
            type: 'text',
        },
        displayedHeight: {
            type: 'text',
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
                imgThumbnail,
                borderState,
                zoomable,
                externalGalleryParent,
                zoomImgSizeIndex,
                disableResponsiveDownsizing,
                textAlign,
                marginAfter,
                aAdditionalClassName,
                pictureAdditionalClassName,
                imgAdditionalClassName,
                href,
                target,
                rel,
                scale,
                displayedWidth,
                displayedHeight,
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
                if ( parseInt( imgSizeIndex ) >= newImgSizes.length ) {
                    newImgSizeIndex = newImgSizes.length - 1;
                    // console.log( 'reduce initial imgSizeIndex to: ' + newImgSizeIndex );
                }

                // do not use thumbnail for srcset if has square format, start with img sizes index 1 then
                const newLowestSrcsetImgSizeIndex = img.sizes.thumbnail.width !== img.sizes.thumbnail.height ? 0 : 1;

                // check if current zoom img size index fits to new img (might be too large) or is unset
                let newZoomImgSizeIndex = zoomImgSizeIndex;
                if ( ! zoomImgSizeIndex || parseInt( zoomImgSizeIndex ) < parseInt( newImgSizeIndex ) || parseInt( zoomImgSizeIndex ) >= parseInt( newImgSizes.length ) ) {
                    newZoomImgSizeIndex = ( newImgSizes.length - 1 ).toString();
                }

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
                    zoomImgSizeIndex: newZoomImgSizeIndex,
                    // displayedWidth: !! scale ? scale * parseFloat( newImgSizes[ newImgSizeIndex ].width ) : parseFloat( newImgSizes[ newImgSizeIndex ].width ),
                    // displayedHeight: !! scale ? scale * parseInt( newImgSizes[ newImgSizeIndex ].height ) : parseInt( newImgSizes[ newImgSizeIndex ].height ),
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
                if ( parseInt( portraitImgSizeIndex ) >= newPortraitImgSizes.length ) {
                    newPortraitImgSizeIndex = newPortraitImgSizes.length - 1;
                }

                setAttributes( {
                    portraitImgId: portraitImg.id,
                    portraitImgSizes: newPortraitImgSizes,
                    portraitImgSizeIndex: newPortraitImgSizeIndex.toString(),
                } );
            }
        };

        const onDeletePortraitImage = () => {
            setAttributes( {
                portraitImgId: '',
                portraitImgSizes: [],
            } );
        };

        const onChangeMediaAlt = ( value ) => {
            setAttributes( { alt: value } );
        };
        const onChangeFigcaption = ( value ) => {
            setAttributes( { figcaption: value } );
        };

        const onChangeScale = ( value ) => {
            setAttributes( { 
                scale: parseFloat( value ),
                displayedWidth: !! value && value != width ? Math.round( width * parseFloat( value ) ) : '',
                displayedHeight: !! value && value != height ? Math.round( height * parseFloat( value ) ) : '',
            } );
        };
        const onChangeDisplayedWidth = ( value ) => {
            setAttributes( { 
                displayedWidth: value != width ? parseFloat( value ) : '',
                displayedHeight: value != height ? Math.round( value / width * height ) : '',
                scale: parseFloat( value / width ),
            } );
        };
        const onChangeDisplayedHeight = ( value ) => {
            setAttributes( { 
                displayedHeight: value != width ? parseFloat( value ) : width,
                displayedWidth: value != height ? Math.round( value / height * width ) : '',
                scale: parseFloat( value / height ),
            } );
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

        const onChangeZoomable = ( value ) => {
            if ( zoomImgSizeIndex == undefined ) {
                setAttributes( { 
                    zoomable: value,
                    zoomImgSizeIndex: ( imgSizes.length - 1 ).toString(),
                } );
            }
            else {
                setAttributes( { zoomable: value } );
            }
        };
        const onChangeExternalGalleryParent = ( value ) => {
            setAttributes( { externalGalleryParent: value } );
        };
        const onChangeZoomImgSizeIndex = ( value ) => {
            setAttributes( { zoomImgSizeIndex: value.toString() } );
        };

        const onChangeDisableResponsiveDownsizing = ( value ) => {
            setAttributes( { disableResponsiveDownsizing: value } );
        };

        const onChangeTextAlign = ( value ) => {
            setAttributes( { textAlign: value } );
        };
        const onChangeMarginAfter = ( value ) => {
            setAttributes( { marginAfter: value } );
        };

        const onChangeAAdditionalClassName = ( value ) => {
            setAttributes( { aAdditionalClassName: value } );
        };
        const onChangePictureAdditionalClassName = ( value ) => {
            setAttributes( { pictureAdditionalClassName: value } );
        };
        const onChangeImgAdditionalClassName = ( value ) => {
            setAttributes( { imgAdditionalClassName: value } );
        };

        const onChangeHref = ( value ) => {
            if ( href == '' ) {
                // reset aAdditionalClassName
                setAttributes( { 
                    href: value,
                    aAdditionalClassName: '',
                } );
            }
            else {
                setAttributes( { href: value } );
            }
        };
        const onChangeTarget = ( value ) => {
            setAttributes( { target: !! value ? '_blank' : '' } );
        };
        const onChangeRel = ( value ) => {
            setAttributes( { rel: value } );
        };
        // const onChangeDataFn = ( value ) => {
        //     setAttributes( { dataFn: value } );
        // };
        

        const alignmentControls = [
            {
                icon: 'editor-alignleft',
                title: __( 'Align left', 'bsx-blocks' ),
                align: 'left',
            },
            {
                icon: 'editor-aligncenter',
                title: __( 'Align center', 'bsx-blocks' ),
                align: 'center',
            },
            {
                icon: 'editor-alignright',
                title: __( 'Align right', 'bsx-blocks' ),
                align: 'right',
            },
        ];


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
                { value: index.toString(), label: imgSize.width + 'x' + imgSize.height + ( imgSizes[ imgSizes.length - 1 ].width !== imgSizes[ imgSizes.length - 1 ].height && imgSize.width === imgSize.height ? ' ' + __( '(Square format)', 'bsx-blocks' ) : '' ) } 
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
                { value: index.toString(), label: portraitImgSize.width + 'x' + portraitImgSize.height + ( portraitImgSizes[ portraitImgSizes.length - 1 ].width !== portraitImgSizes[ portraitImgSizes.length - 1 ].height && portraitImgSize.width === portraitImgSize.height ? ' ' + __( '(Square format)', 'bsx-blocks' ) : '' ) } 
            );
        } );

        const zoomImgSizeRadioControlOptions = [];
        imgSizes.forEach( ( imgSize, index ) => {
            if ( index >= imgSizeIndex ) {
                zoomImgSizeRadioControlOptions.push( 
                    { value: index.toString(), label: imgSize.width + 'x' + imgSize.height + ( imgSizes[ imgSizes.length - 1 ].width !== imgSizes[ imgSizes.length - 1 ].height && imgSize.width === imgSize.height ? ' ' + __( '(Square format)', 'bsx-blocks' ) : '' ) } 
                );
            }
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
            disableResponsiveDownsizing,
        } );

        // class names

        const classNames = addClassNames( {
            textAlign,
            marginAfter,
        } );

        const imgClassName = addClassNames( {
            rounded,
            imgThumbnail,
            borderState,
        }, 'img-fluid' + ( imgAdditionalClassName ? ' ' + imgAdditionalClassName : '' )  );

        // image

        const image = (
            <picture className={ pictureAdditionalClassName }>
                {
                    sourcesAttributesList.map( ( sourceAttributes, index ) => (
                        <source { ...sourceAttributes } />
                    ) )
                }
                <img className={ imgClassName } src={ url } alt={ alt } width={ !! displayedWidth ? displayedWidth : width } height={ !! displayedHeight ? displayedHeight : height } />
            </picture>
        );

        return [
            <BlockControls>
                <AlignmentToolbar
                    label={ __( 'Alignment', 'bsx-blocks' ) }
                    value={ textAlign }
                    onChange={ onChangeTextAlign }
                    alignmentControls={ alignmentControls }
                />
            </BlockControls>,
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
                            <div class="bsxui-config-panel-row">
                                <div class="bsxui-config-panel-text">
                                    <a class="bsxui-link" href={ imgSizes[ imgSizeIndex ].url } target="_blank">{ __( 'Preview selected image', 'bsx-blocks' ) }</a>
                                </div>
                            </div>
                        )
                    }
                     
                    <TextControl 
                        label={ __( 'Displayed width', 'bsx-blocks' ) }
                        value={ !! displayedWidth ? displayedWidth : width  } 
                        onChange={ onChangeDisplayedWidth }
                    />
                    <TextControl 
                        label={ __( 'Displayed height', 'bsx-blocks' ) }
                        value={ !! displayedHeight ? displayedHeight : height } 
                        onChange={ onChangeDisplayedHeight }
                    />
                    {
                        scaleSelect( scale, onChangeScale )
                    }
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

                <PanelBody title={ __( 'Portrait image (optional)', 'bsx-blocks' ) }>
                    {
                        !! zoomable ? (
                            <div class="bsxui-config-panel-row">
                                <div class="bsxui-alert">
                                    Portrait image is deactivated since zoomable image is set. 
                                </div>
                            </div>
                        )
                        :
                        (
                            <>
                                {
                                    portraitImgId && typeof portraitImgSizes[ portraitImgSizeIndex ] != 'undefined' && typeof portraitImgSizes[ portraitImgSizeIndex ].url != 'undefined' ? (
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
                                {
                                    portraitImgId && typeof portraitImgSizes[ portraitImgSizeIndex ] != 'undefined' && typeof portraitImgSizes[ portraitImgSizeIndex ].url != 'undefined' && (
                                        <div class="bsxui-config-panel-row">
                                            <Button 
                                                onClick={ onDeletePortraitImage }
                                                isDestructive={ true }
                                            >
                                                { __( 'Remove portrait image', 'bsx-blocks' ) }
                                            </Button>
                                        </div>
                                    )
                                }
                                <RadioControl
                                    label={ __( 'Image size and format', 'bsx-blocks' ) }
                                    selected={ portraitImgSizeIndex.toString() }
                                    options={ portraitImgSizeRadioControlOptions }
                                    onChange={ onChangePortraitImgSizeIndex }
                                />
                                {
                                    typeof portraitImgSizes[ portraitImgSizeIndex ] != 'undefined' && typeof portraitImgSizes[ portraitImgSizeIndex ].url != 'undefined' && (
                                        <div class="bsxui-config-panel-text">
                                            <a class="bsxui-link" href={ portraitImgSizes[ portraitImgSizeIndex ].url } target="_blank">{ __( 'Preview selected portrait image', 'bsx-blocks' ) }</a>
                                        </div>
                                    )
                                }
                            </>
                        )
                    }
                </PanelBody>

                <PanelBody title={ __( 'Zoomable (optional)', 'bsx-blocks' ) }>
                    {
                        portraitImgSizes.length > 0 || !! href ? (
                            <div class="bsxui-config-panel-row">
                                <div class="bsxui-alert">
                                    { 
                                        !! href ? 
                                            __( 'Zoomable image is deactivated since href is set.', 'bsx-blocks' ) 
                                        :
                                            __( 'Zoomable image is deactivated since portrait link is set.', 'bsx-blocks' ) 
                                    }
                                </div>
                            </div>
                        )
                        :
                        (
                            <>
                                <ToggleControl
                                    className={ portraitImgSizes.length > 0 ? 'bsxui-disabled' : '' }
                                    label={ __( 'Zoomable image', 'bsx-blocks' ) }
                                    checked={ !! zoomable }
                                    onChange={ onChangeZoomable }
                                    help={ __( 'If enabled click on image will open shadowbox gallery with large image.', 'bsx-blocks' ) }
                                />
                                {
                                    zoomable && (
                                        <>
                                            <RadioControl
                                                label={ __( 'Zoom image size', 'bsx-blocks' ) }
                                                selected={ zoomImgSizeIndex }
                                                options={ zoomImgSizeRadioControlOptions }
                                                onChange={ onChangeZoomImgSizeIndex }
                                            />
                                            {
                                                imgSizeIndex == zoomImgSizeIndex && (
                                                    <div class="bsxui-config-panel-text">
                                                        { __( 'Currently your zoom image is not larger than your original image.', 'bsx-blocks' ) }
                                                    </div>
                                                )
                                            }
                                            <ToggleControl
                                                label={ __( 'External gallery parent', 'bsx-blocks' ) }
                                                checked={ !! externalGalleryParent }
                                                onChange={ onChangeExternalGalleryParent }
                                                help={ __( 'Enabled if using custom external shadowbox gallery element (e.g. configured BSX Wrapper) wrapping this image.', 'bsx-blocks' ) }
                                            />
                                        </>
                                    )
                                }
                            </>
                        )
                    }
                </PanelBody>

                <PanelBody title={ __( 'Link (optional)', 'bsx-blocks' ) }>
                    {
                        !! zoomable ? (
                            <div class="bsxui-config-panel-row">
                                <div class="bsxui-alert">
                                    Link is deactivated since zoomable image is set. 
                                </div>
                            </div>
                        )
                        :
                        (
                            <>
                                {
                                    linkUrlInput( href, onChangeHref )
                                }
                                {
                                    targetToggle( target, onChangeTarget )
                                }
                                {
                                    relInput( rel, onChangeRel )
                                }
                                {
                                    // dataFnInput( dataFn, onChangeDataFn )
                                }
                            </>
                        )
                    }
                </PanelBody>

                <PanelBody title={ __( 'Margin (optional)', 'bsx-blocks' ) }>
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
            <InspectorAdvancedControls>
                {
                    disableResponsiveDownsizingToggle( disableResponsiveDownsizing, onChangeDisableResponsiveDownsizing )
                }
                {
                    !! href && (
                        <TextControl 
                            label={ __( 'A element additional class(es)', 'bsx-blocks' ) }
                            value={ aAdditionalClassName } 
                            onChange={ onChangeAAdditionalClassName }
                        />
                    )
                }
                <TextControl 
                    label={ __( 'Picture element additional class(es)', 'bsx-blocks' ) }
                    value={ pictureAdditionalClassName } 
                    onChange={ onChangePictureAdditionalClassName }
                />
                <TextControl 
                    label={ __( 'Image element additional class(es)', 'bsx-blocks' ) }
                    value={ imgAdditionalClassName } 
                    onChange={ onChangeImgAdditionalClassName }
                />
            </InspectorAdvancedControls>,
            (
                <figure className={ classNames }>
                    {
                        imgId ? (
                            <>
                                { 
                                    ! zoomable ? (
                                        <>
                                            { image }
                                        </>
                                    )
                                    :
                                    (
                                        <a className={ 'zoomable-img' }>
                                            { image }
                                        </a>
                                    ) 
                                }
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
                imgThumbnail,
                borderState,
                zoomable,
                externalGalleryParent,
                zoomImgSizeIndex,
                disableResponsiveDownsizing,
                textAlign,
                marginAfter,
                aAdditionalClassName,
                pictureAdditionalClassName,
                imgAdditionalClassName,
                href,
                target,
                rel,
                scale,
                displayedWidth,
                displayedHeight,
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
            disableResponsiveDownsizing,
        } );

        // class names

        const classNames = addClassNames( {
            textAlign,
            marginAfter,
        } );

        const aClassName = zoomable ? 'zoomable-img' : ( !! href && !! aAdditionalClassName ? aAdditionalClassName : '' );
        // let aClassName = '';
        // if ( zoomable ) {
        //     aClassName += 'zoomable-img';
        // }
        // if ( !! href && !! aAdditionalClassName ) {
        //     aClassName += ' ' + aAdditionalClassName.trim();
        // }

        const imgClassName = addClassNames( {
            rounded,
            imgThumbnail,
            borderState,
        }, 'img-fluid' + ( imgAdditionalClassName ? ' ' + imgAdditionalClassName : '' ) );

        // attributes

        // allow zoomable img
        const saveAttributes = ( zoomable && ! externalGalleryParent ) ? 
            makeSaveAttributes( {
                'data-fn': 'photoswipe',
            } )
            :
            {}
        ;

        // manage zoomImgSizeIndex & href, target, rel
        const aSaveAttributes = ( zoomable && typeof imgSizes[ zoomImgSizeIndex ] != 'undefined' ) ? 
            makeSaveAttributes( {
                'href': imgSizes[ zoomImgSizeIndex ].url,
                'data-size': imgSizes[ zoomImgSizeIndex ].width + 'x' + imgSizes[ zoomImgSizeIndex ].height,
            } )
            : 
            (
                !! href ? 
                {
                    'href': href,
                    'target': target,
                    rel: href ? ( rel ? rel + ' noopener noreferrer' : 'noopener noreferrer' ) : '',
                } 
                : 
                {}
            )
        ;

        const image = (
            <>
                <script>document.write( '
                    <picture className={ pictureAdditionalClassName }>
                        {
                            sourcesAttributesList.map( ( sourceAttributes, index ) => (
                                <source { ...sourceAttributes } />
                            ) )
                        }
                        <img className={ imgClassName } src={ makeBase64PreloadImgSrc( width, height ) } alt={ alt } data-src={ url } width={ !! displayedWidth ? displayedWidth : width } height={ !! displayedHeight ? displayedHeight : height } data-fn="lazyload" />
                    </picture>
                ' );</script>
                <noscript><img className={ imgClassName } src={ url } alt={ alt } width={ !! displayedWidth ? displayedWidth : width } height={ !! displayedHeight ? displayedHeight : height } /></noscript>
            </>
        );

        return (
            <figure className={ classNames } { ...saveAttributes }>

                {
                    url && (
                        <>
                            { 
                                zoomable || href ? (
                                    <a className={ aClassName } { ...aSaveAttributes }>
                                        { image }
                                    </a>
                                )
                                :
                                (
                                    <>
                                        { image }
                                    </>
                                ) 
                            }
                            {
                                figcaption && ! RichText.isEmpty( figcaption ) && (
                                    <RichText.Content tagName="figcaption" className="font-italic" value={ figcaption } />
                                )
                            }
                        </>
                    )
                }
                
            </figure>
        );
    },
} );
