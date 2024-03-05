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
    marginLeftSelect,
    marginRightSelect,
    marginBeforeSelect,
    marginAfterSelect,
    scaleSelect,
    disableResponsiveDownsizingToggle,
    textAlignToolbar,
    portraitImgMaxWidthBreakpointInput,
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
    makeImgSizesFromImgData,
    makeImgData,
} from './../_functions/img.js';


import deprecated from './deprecated';


const makeSourcesAttributesList = ( attributes ) => {

    const {
        calcImgSizes,
        imgSizeIndex,
        calcPortraitImgSizes,
        portraitImgSizeIndex,
        portraitImgMaxWidthBreakpoint,
        disableResponsiveDownsizing,
    } = attributes;

    const responsivePortraitMediaIndexList = [
        {
            breakpoint: 460,
            imgSizeIndexShift: '-1',
            minImgSizeIndex: '1',
        },
        {
            breakpoint: 576,
            imgSizeIndexShift: '0',
            minImgSizeIndex: '2',
        },
    ];
    const responsiveMediaIndexList = [
        {
            breakpoint: 460,
            imgSizeIndexShift: '-2',
            minImgSizeIndex: '1',
        },
        {
            breakpoint: 768,
            imgSizeIndexShift: '-1',
            minImgSizeIndex: '2',
        },
    ];
    const skipIndex = 0;

    const sourcesAttributesList = [];

    // portrait img

    if ( ! disableResponsiveDownsizing ) {
        // downsize, iterate list

        responsivePortraitMediaIndexList.forEach( ( item, index ) => {

            const currentPortraitImgIndex = parseInt( portraitImgSizeIndex ) + parseInt( item.imgSizeIndexShift );

            const adaptedCurrentPortraitImgIndex = currentPortraitImgIndex < parseInt( item.minImgSizeIndex ) ? parseInt( item.minImgSizeIndex ) : currentPortraitImgIndex;

            if ( 
                adaptedCurrentPortraitImgIndex <= parseInt( portraitImgSizeIndex ) 
                && adaptedCurrentPortraitImgIndex > skipIndex
                && typeof calcPortraitImgSizes !== 'undefined'
                && typeof calcPortraitImgSizes[ adaptedCurrentPortraitImgIndex ] != 'undefined' 
                && typeof calcPortraitImgSizes[ adaptedCurrentPortraitImgIndex ].url != 'undefined' 
            ) {
                sourcesAttributesList.push( {
                    media: '(orientation: portrait) and (max-width: ' + ( parseInt( ( index == responsivePortraitMediaIndexList.length - 1 && !! portraitImgMaxWidthBreakpoint ) ? portraitImgMaxWidthBreakpoint : item.breakpoint ) - 0.02 ) + 'px)',
                    srcset: makeBase64PreloadImgSrc( calcPortraitImgSizes[ adaptedCurrentPortraitImgIndex ].width, calcPortraitImgSizes[ adaptedCurrentPortraitImgIndex ].height ),
                    'data-srcset': calcPortraitImgSizes[ adaptedCurrentPortraitImgIndex ].url,
                    'data-width': calcPortraitImgSizes[ adaptedCurrentPortraitImgIndex ].width,
                    'data-height': calcPortraitImgSizes[ adaptedCurrentPortraitImgIndex ].height,
                } );
            }
        } );
    }
    else {
        // use largest portrait img size
        if ( 
            !! portraitImgSizeIndex
            && typeof calcPortraitImgSizes !== 'undefined'
            && typeof calcPortraitImgSizes[ portraitImgSizeIndex ] != 'undefined' 
            && typeof calcPortraitImgSizes[ portraitImgSizeIndex ].url != 'undefined' 
        ) {
            sourcesAttributesList.push( {
                media: '(orientation: portrait) and (max-width: ' + ( parseInt( ( !! portraitImgMaxWidthBreakpoint ) ? portraitImgMaxWidthBreakpoint : responsivePortraitMediaIndexList[ responsivePortraitMediaIndexList.length - 1 ].breakpoint ) - 0.02 ) + 'px)',
                srcset: makeBase64PreloadImgSrc( calcPortraitImgSizes[ portraitImgSizeIndex ].width, calcPortraitImgSizes[ portraitImgSizeIndex ].height ),
                'data-srcset': calcPortraitImgSizes[ portraitImgSizeIndex ].url,
                'data-width': calcPortraitImgSizes[ portraitImgSizeIndex ].width,
                'data-height': calcPortraitImgSizes[ portraitImgSizeIndex ].height,
            } );
        }
    }

    // default img
    responsiveMediaIndexList.forEach( ( item, index ) => {

        const currentImgIndex = parseInt( imgSizeIndex ) + parseInt( item.imgSizeIndexShift );

        const adaptedCurrentImgIndex = currentImgIndex < parseInt( item.minImgSizeIndex ) ? parseInt( item.minImgSizeIndex ) : currentImgIndex;

        if ( 
            ! disableResponsiveDownsizing
            && adaptedCurrentImgIndex < parseInt( imgSizeIndex ) 
            && adaptedCurrentImgIndex > skipIndex
            && typeof calcImgSizes != 'undefined' 
            && typeof calcImgSizes[ adaptedCurrentImgIndex ] != 'undefined' 
            && typeof calcImgSizes[ adaptedCurrentImgIndex ].url != 'undefined' 
        ) {
            sourcesAttributesList.push( {
                media: '(max-width: ' + ( parseInt( item.breakpoint ) - 0.02 ) + 'px)',
                srcset: makeBase64PreloadImgSrc( calcImgSizes[ adaptedCurrentImgIndex ].width, calcImgSizes[ adaptedCurrentImgIndex ].height ),
                'data-srcset': calcImgSizes[ adaptedCurrentImgIndex ].url,
                'data-width': calcImgSizes[ adaptedCurrentImgIndex ].width,
                'data-height': calcImgSizes[ adaptedCurrentImgIndex ].height,
            } );
        }
    } );

    return sourcesAttributesList;

}


const makeSrcset = ( attributes ) => {

    const {
        calcImgSizes,
        imgSizeIndex,
    } = attributes;

    // console.log( 'calcImgSizes: ' + calcImgSizes );
    // console.log( 'imgSizeIndex: ' + imgSizeIndex );

    const srcsetList = [];
    calcImgSizes.forEach( ( imgSize, index ) => {
        if ( 
            ( ( imgSizeIndex == 0 && index == 0 ) || ( imgSize.width == imgSize.height ) )
            || ( imgSizeIndex > 0 && index > 0 )
        ) {
            // add square thumb img if is selected size (imgSizeIndex == 0) or original img has square format too, else skip
            srcsetList.push( imgSize.url + ' ' + imgSize.width + 'w' );
            if ( imgSizeIndex == 0 ) {
                // skip other sizes but square
                return; // do not use `break` since will cause error “Unsyntactic break.”
            }
        }
    } );

    return srcsetList.join( ', ' );
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
        // deprecated, do not set anymore, keep alive for existing blocks (replaced by imgData)
        imgSizes: {
            type: 'array',
            default: [],
        },
        imgData: {
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
        // deprecated, do not set anymore, keep alive for existing blocks (replaced by imgData)
        url: {
            type: 'string',
        },
        // deprecated, do not set anymore, keep alive for existing blocks (replaced by imgData)
        width: {
            type: 'number',
        },
        // deprecated, do not set anymore, keep alive for existing blocks (replaced by imgData)
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
        // deprecated, do not set anymore, keep alive for existing blocks (replaced by portraitImgData)
        portraitImgSizes: {
            type: 'array',
            default: [],
        },
        portraitImgData: {
            type: 'array',
            default: [],
        },
        portraitImgSizeIndex: {
            type: 'string',
            default: '3',
        },
        portraitImgMaxWidthBreakpoint: {
            type: 'string',
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
        },
        marginBefore: {
            type: 'string',
        },
        marginAfter: {
            type: 'string',
        },
        marginLeft: {
            type: 'string',
        },
        marginRight: {
            type: 'string',
        },
        aAdditionalClassName: {
            type: 'string',
        },
        pictureAdditionalClassName: { // deprecated
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
        noFigureTag: {
            type: 'boolean',
        }
    },
    edit: ( props ) => {
        const {
            className,
            attributes: {
                imgId,
                imgSizes,
                imgData,
                imgSizeIndex,
                url,
                // width,
                // height,
                origWidth,
                origHeight,
                portraitImgId,
                portraitImgSizes,
                portraitImgData,
                portraitImgSizeIndex,
                portraitImgMaxWidthBreakpoint,
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
                marginBefore,
                marginAfter,
                marginLeft,
                marginRight,
                aAdditionalClassName,
                pictureAdditionalClassName,
                imgAdditionalClassName,
                href,
                target,
                rel,
                scale,
                displayedWidth,
                displayedHeight,
                noFigureTag,
            },
            setAttributes,
            isSelected,
            setState,
        } = props;

        // TEST
        // console.log( 'imgId: ' + imgId );
        // console.log( 'imgData: ' + JSON.stringify( imgData, null, 2 ) );
        // console.log( 'imgSizes (deprecated): ' + JSON.stringify( imgSizes, null, 2 ) + '\n' );
        // console.log( 'portraitImgId: ' + portraitImgId );
        // console.log( 'portraitImgData: ' + JSON.stringify( portraitImgData, null, 2 ) );
        // console.log( 'portraitImgSizes (deprecated): ' + JSON.stringify( portraitImgSizes, null, 2 ) + '\n' );

        // initial set, replaces old attr 'imgSizes'
        const hasOldAttrImgSizes = typeof imgSizes !== 'undefined' && Array.isArray( imgSizes ) && imgSizes.length > 0;
        const hasOldAttrPortraitImgSizes = typeof portraitImgSizes !== 'undefined' && Array.isArray( portraitImgSizes ) && portraitImgSizes.length > 0;

        const calcImgSizes = hasOldAttrImgSizes ? imgSizes : makeImgSizesFromImgData( imgData );
        const calcPortraitImgSizes = hasOldAttrPortraitImgSizes ? portraitImgSizes : makeImgSizesFromImgData( portraitImgData );

        // remove deprecated attribute if set
        if ( pictureAdditionalClassName ) {
            setAttributes( { pictureAdditionalClassName: '' } );
        }

        // TEST
        // console.log( 'props.attributes: ' + JSON.stringify( props.attributes, null, 2 ) );
        // console.log( 'calcImgSizes: ' + JSON.stringify( calcImgSizes, null, 2 ) );
        // console.log( 'calcPortraitImgSizes: ' + JSON.stringify( calcPortraitImgSizes, null, 2 ) + '\n\n' );

        // if ( typeof imgData !== 'undefined' ) {
        //     console.log( '-----> INITIAL SET (create calcImgSizes from imgData):\n' );
        // }
        // else {
        //     console.log( 'NO INITIAL SET (keep imgSizes):\n' );
        // }
        // console.log( 'calcImgSizes: ' + JSON.stringify( calcImgSizes, null, 2 ) );
        // /TEST

        async function onSelectImage( img ) {

            // console.log( 'onSelectImage()' );

            if ( typeof img.url !== 'undefined' ) {

                // TEST

                // const imgSizeKeys = [
                //     'thumbnail',
                //     'medium',
                //     'medium_large', // not found
                //     'large',
                //     '1536x1536', // not found
                //     '2048x2048', // not found
                //     'full',
                // ]; // does not contain original size imige since has no key

                // imgSizeKeys.forEach( ( key, index ) => {
                //     if ( typeof img.sizes[ key ] !== 'undefined' && typeof img.sizes[ key ].url !== 'undefined' && img.sizes[ key ].url ) {
                //         console.log( key + ': ' + img.sizes[ key ].url );
                //     }
                //     else {
                //         console.log( key + ': NOT FOUND' );
                //     }
                // } );

                // /TEST

                // get all data of new image
                const newImgAllData = await getImgSizesData( img );
                const originalWidth = newImgAllData.originalWidth;
                const originalHeight = newImgAllData.originalHeight;

                // TEST
                // console.log( 'TEST:\n' );
                // console.log( 'newImgAllData: ' + JSON.stringify( newImgAllData, null, 2 ) );
                // /TEST

                // TODO: replace by 'newImgAllData'
                // const newImgSizes = newImgAllData.imgs;


                // const sizes = [];
                // newImgAllData.imgs.forEach( ( img, index ) => {
                //     sizes.push( {
                //         s: img.sizeSlug,
                //         w: img.width,
                //         h: img.height,
                //     } );
                // } );
                // const newImgData = [ {
                //     sizes: sizes,
                //     trunc: newImgAllData.truncWithoutSizeSlug,
                //     ext: newImgAllData.fileExt,
                // } ];

                // prepare attr 'imgData' to save in block (replacing old attr 'imgSizes')
                const newImgData = makeImgData( newImgAllData.imgs, newImgAllData.truncWithoutSizeSlug, newImgAllData.fileExt );

                // TEST
                // console.log( 'TEST 2:\n' );
                // console.log( 'newImgData: ' + JSON.stringify( newImgData, null, 2 ) );
                // /TEST

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
                if ( parseInt( imgSizeIndex ) >= newImgAllData.imgs.length ) {
                    newImgSizeIndex = newImgAllData.imgs.length - 1;
                    // console.log( 'reduce initial imgSizeIndex to: ' + newImgSizeIndex );
                }

                // do not use thumbnail for srcset if has square format, start with img sizes index 1 then
                const newLowestSrcsetImgSizeIndex = img.sizes.thumbnail.width !== img.sizes.thumbnail.height ? 0 : 1;

                // check if current zoom img size index fits to new img (might be too large) or is unset
                let newZoomImgSizeIndex = zoomImgSizeIndex;
                if ( ( zoomable && ! zoomImgSizeIndex ) || parseInt( zoomImgSizeIndex ) < parseInt( newImgSizeIndex ) || parseInt( zoomImgSizeIndex ) >= parseInt( newImgAllData.imgs.length ) ) {
                    newZoomImgSizeIndex = ( newImgAllData.imgs.length - 1 ).toString();
                }

                // avoid creating deprecated (empty) attr 'imgSizes'
                if ( imgSizes && imgSizes.length > 0 ) {
                    // delete value of 'imgSizes'
                    setAttributes( {
                        imgId: img.id,
                        imgSizes: '', // save empty, replaced by imgData
                        imgData: newImgData,
                        imgSizeIndex: newImgSizeIndex.toString(),
                        url: '', // save empty, replaced by imgData
                        width: '', // save empty, replaced by imgDat
                        height: '', // save empty, replaced by imgDat
                        origWidth: originalWidth,
                        origHeight: originalHeight,
                        alt: img.alt,
                        zoomImgSizeIndex: newZoomImgSizeIndex,
                    } );
                }
                else {
                    // skip 'imgSizes'
                    setAttributes( {
                        imgId: img.id,
                        imgData: newImgData,
                        imgSizeIndex: newImgSizeIndex.toString(),
                        origWidth: originalWidth,
                        origHeight: originalHeight,
                        alt: img.alt,
                        zoomImgSizeIndex: newZoomImgSizeIndex,
                    } );
                }

                // TEST – TODO: remove
                // for ( let [ key, value ] of Object.entries( img.sizes ) ) {
                //     console.log( 'key: "' + key + '", val: "' + value + '"' );
                // }
                
            }
        };

        async function onSelectPortraitImage( portraitImg ) {

            if ( typeof portraitImg.url !== 'undefined' ) {

                const newPortraitImgAllData = await getImgSizesData( portraitImg );
                // const newPortraitImgSizes = newPortraitImgAllData.imgs;

                // prepare new attr 'imgData' (replacing old attr 'imgSizes')
                // const sizes = [];
                // newPortraitImgAllData.imgs.forEach( ( img, index ) => {
                //     sizes.push( {
                //         s: img.sizeSlug,
                //         w: img.width,
                //         h: img.height,
                //     } );
                // } );
                // const newPortraitImgData = [ {
                //     sizes: sizes,
                //     trunc: newPortraitImgAllData.truncWithoutSizeSlug,
                //     ext: newPortraitImgAllData.fileExt,
                // } ];

                // prepare attr 'imgData' to save in block (replacing old attr 'portraitImgSizes')
                const newPortraitImgData = makeImgData( newPortraitImgAllData.imgs, newPortraitImgAllData.truncWithoutSizeSlug, newPortraitImgAllData.fileExt );

                // check if current img size index fits to new img (might be too large)
                let newPortraitImgSizeIndex = parseInt( portraitImgSizeIndex );
                if ( parseInt( portraitImgSizeIndex ) >= newPortraitImgAllData.imgs.length ) {
                    newPortraitImgSizeIndex = newPortraitImgAllData.imgs.length - 1;
                }

                // avoid creating deprecated (empty) attr 'portraitImgSizes'
                if ( portraitImgSizes && portraitImgSizes.length > 0 ) {
                    // delete value of 'portraitImgSizes'
                    setAttributes( {
                        portraitImgId: portraitImg.id,
                        portraitImgSizes: '', // save empty, replaced by portraitImgData
                        portraitImgData: newPortraitImgData,
                        portraitImgSizeIndex: newPortraitImgSizeIndex.toString(),
                    } );
                }
                else {
                    // skip 'portraitImgSizes'
                    setAttributes( {
                        portraitImgId: portraitImg.id,
                        portraitImgData: newPortraitImgData,
                        portraitImgSizeIndex: newPortraitImgSizeIndex.toString(),
                    } );
                }

            }
        };

        const onDeletePortraitImage = () => {
            // avoid creating deprecated attr 'portraitImgSizes'
            if ( portraitImgSizes && portraitImgSizes.length > 0 ) {
                // delete value of 'portraitImgSizes'
                setAttributes( {
                    portraitImgId: '',
                    portraitImgSizes: '',
                    portraitImgData: '',
                } );
            }
            else {
                // skip 'portraitImgSizes'
                setAttributes( {
                    portraitImgId: '',
                    portraitImgData: '',
                } );
            }
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
                displayedWidth: !! value && value != origWidth ? Math.round( origWidth * parseFloat( value ) ) : '',
                displayedHeight: !! value && value != origHeight ? Math.round( origHight * parseFloat( value ) ) : '',
            } );
        };
        const onChangeDisplayedWidth = ( value ) => {
            setAttributes( { 
                displayedWidth: value != origWidth ? parseFloat( value ) : '',
                displayedHeight: value != origHeight ? Math.round( value / origWidth * origHeight ) : '',
                scale: parseFloat( value / origWidth ),
            } );
        };
        const onChangeDisplayedHeight = ( value ) => {
            setAttributes( { 
                displayedHeight: value != origWidth ? parseFloat( value ) : origWidth,
                displayedWidth: value != origHeight ? Math.round( value / origHeight * origWidth ) : '',
                scale: parseFloat( value / origHeight ),
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
                    zoomImgSizeIndex: ( calcImgSizes.length - 1 ).toString(),
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

        const onChangeMarginBefore = ( value ) => {
            setAttributes( { marginBefore: value } );
        };
        const onChangeMarginAfter = ( value ) => {
            setAttributes( { marginAfter: value } );
        };
        const onChangeMarginLeft = ( value ) => {
            setAttributes( { marginLeft: value } );
        };
        const onChangeMarginRight = ( value ) => {
            setAttributes( { marginRight: value } );
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

        const onChangeNoFigureTag = ( value ) => {
            setAttributes( { 
                noFigureTag: value,
                zoomable: false,
                figcaption: [],
            } );
        };


        const onChangeImgSizeIndex = ( value ) => {
            setAttributes( { 
                imgSizeIndex: value.toString(),
                // url: calcImgSizes[ value ].url,
                // width: parseInt( calcImgSizes[ value ].width ),
                // height: parseInt( calcImgSizes[ value ].height ),
            } );
        };
        const imgSizeRadioControlOptions = [];
        if ( typeof calcImgSizes !== 'undefined' ) {
            calcImgSizes.forEach( ( imgSize, index ) => {
                imgSizeRadioControlOptions.push( 
                    { value: index.toString(), label: imgSize.width + 'x' + imgSize.height + ( calcImgSizes[ calcImgSizes.length - 1 ].width !== calcImgSizes[ calcImgSizes.length - 1 ].height && imgSize.width === imgSize.height ? ' ' + __( '(Square format)', 'bsx-blocks' ) : '' ) } 
                );
            } );
        }

        const onChangePortraitImgSizeIndex = ( value ) => {
            setAttributes( { 
                portraitImgSizeIndex: value.toString(),
            } );
        };
        const portraitImgSizeRadioControlOptions = [];
        if ( typeof calcPortraitImgSizes !== 'undefined' ) {
            calcPortraitImgSizes.forEach( ( portraitImgSize, index ) => {
                portraitImgSizeRadioControlOptions.push( 
                    { value: index.toString(), label: portraitImgSize.width + 'x' + portraitImgSize.height + ( calcPortraitImgSizes[ calcPortraitImgSizes.length - 1 ].width !== calcPortraitImgSizes[ calcPortraitImgSizes.length - 1 ].height && portraitImgSize.width === portraitImgSize.height ? ' ' + __( '(Square format)', 'bsx-blocks' ) : '' ) } 
                );
            } );
        }

        const zoomImgSizeRadioControlOptions = [];
        if ( typeof calcImgSizes !== 'undefined' ) {
            calcImgSizes.forEach( ( imgSize, index ) => {
                if ( index >= imgSizeIndex ) {
                    zoomImgSizeRadioControlOptions.push( 
                        { value: index.toString(), label: imgSize.width + 'x' + imgSize.height + ( calcImgSizes[ calcImgSizes.length - 1 ].width !== calcImgSizes[ calcImgSizes.length - 1 ].height && imgSize.width === imgSize.height ? ' ' + __( '(Square format)', 'bsx-blocks' ) : '' ) } 
                    );
                }
            } );
        }

        const onChangePortraitImgMaxWidthBreakpoint = ( value ) => {
            setAttributes( { 
                portraitImgMaxWidthBreakpoint: value.toString(),
            } );
        };

        // prepare img sources attributes

        // const sourcesAttributesList = makeSourcesAttributesList( {
        //     calcImgSizes,
        //     imgSizeIndex,
        //     calcPortraitImgSizes,
        //     portraitImgSizeIndex,
        //     portraitImgMaxWidthBreakpoint,
        //     disableResponsiveDownsizing,
        // } );

        // class names

        const classNames = addClassNames( {
            textAlign,
            marginBefore,
            marginAfter,
            marginLeft,
            marginRight,
        } );

        const imgClassName = addClassNames( {
            rounded,
            imgThumbnail,
            borderState,
        }, 'img-fluid' + ( imgAdditionalClassName ? ' ' + imgAdditionalClassName : '' )  );

        // image

        const hasValidImg = ( imgId && typeof calcImgSizes !== 'undefined' && calcImgSizes.length > 0 && typeof calcImgSizes[ imgSizeIndex ] !== 'undefined' && imgSizeIndex < calcImgSizes.length );

        // const image = imgId && typeof calcImgSizes !== 'undefined' && typeof calcImgSizes[ imgSizeIndex ] !== 'undefined' ? (
        //     <picture className={ pictureAdditionalClassName }>
        //         {
        //             sourcesAttributesList.map( ( sourceAttributes, index ) => (
        //                 <source { ...sourceAttributes } />
        //             ) )
        //         }
        //         <img className={ imgClassName } src={ calcImgSizes[ imgSizeIndex ].url } alt={ alt } width={ !! displayedWidth ? displayedWidth : calcImgSizes[ imgSizeIndex ].width } height={ !! displayedHeight ? displayedHeight : calcImgSizes[ imgSizeIndex ].height } />
        //     </picture>
        // )
        // :
        // (
        //     <></>
        // );


        // const srcsetList = [];
        // calcImgSizes.forEach( ( imgSize, index ) => {
        //     if ( 
        //         ( imgSizeIndex == 0 && index == 0 )
        //         || ( imgSizeIndex > 0 && index > 0 )
        //     ) {
        //         // add square img if selected (imgSizeIndex == 0), else skip
        //         srcsetList.push( imgSize.url + ' ' + imgSize.width + 'w' );
        //         if ( imgSizeIndex == 0 ) {
        //             // skip other sizes but square
        //             return; // `break` will cause error “Unsyntactic break.”
        //         }
        //     }
        // } );

        const srcset = makeSrcset( {
            calcImgSizes,
            imgSizeIndex,
        } );

        const src = hasValidImg ? calcImgSizes[ imgSizeIndex ].url : '';
        const width = ( hasValidImg && !! displayedWidth ) ? displayedWidth : hasValidImg ? calcImgSizes[ imgSizeIndex ].width : '';
        const height = ( hasValidImg && !! displayedHeight ) ? displayedHeight : hasValidImg ? calcImgSizes[ imgSizeIndex ].height : '';
        const sizes = ( width && height ) ? '(max-width: ' + width + 'px) 100vw, ' + width + 'px' : '';


        const image = hasValidImg ? (
            <img className={ imgClassName } src={ src } srcset={ srcset } sizes={ sizes } alt={ alt } width={ width } height={ height } loading="lazy" />
        )
        :
        (
            <></>
        );


        return [
            <BlockControls>
                {
                    textAlignToolbar( textAlign, onChangeTextAlign )
                }
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
                                        <img class="bsxui-config-panel-img" src={ calcImgSizes[ imgSizeIndex ].url } alt={ __( 'Change / upload image', 'bsx-blocks' ) } />
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
                        calcImgSizes[ imgSizeIndex ] != undefined && calcImgSizes[ imgSizeIndex ].url != undefined && (
                            <div class="bsxui-config-panel-row">
                                <div class="bsxui-config-panel-text">
                                    <a class="bsxui-link" href={ calcImgSizes[ imgSizeIndex ].url } target="_blank">{ __( 'Preview selected image', 'bsx-blocks' ) }</a>
                                </div>
                            </div>
                        )
                    }
                    {
                        imgId && typeof calcImgSizes !== 'undefined' && typeof calcImgSizes[ imgSizeIndex ] !== 'undefined' && (
                            <>
                                <TextControl 
                                    label={ __( 'Displayed width', 'bsx-blocks' ) }
                                    value={ !! displayedWidth ? displayedWidth : calcImgSizes[ imgSizeIndex ].width  } 
                                    onChange={ onChangeDisplayedWidth }
                                />
                                <TextControl 
                                    label={ __( 'Displayed height', 'bsx-blocks' ) }
                                    value={ !! displayedHeight ? displayedHeight : calcImgSizes[ imgSizeIndex ].height } 
                                    onChange={ onChangeDisplayedHeight }
                                />
                                {
                                    scaleSelect( scale, onChangeScale )
                                }
                            </>
                        )
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
                                    { __( 'Portrait image is deactivated since Zoomable image is set.', 'bsx-blocks' ) }
                                </div>
                            </div>
                        )
                        :
                        (
                            <>
                                {
                                    portraitImgId && typeof calcPortraitImgSizes[ portraitImgSizeIndex ] != 'undefined' && typeof calcPortraitImgSizes[ portraitImgSizeIndex ].url != 'undefined' ? (
                                        <MediaUpload
                                            onSelect={ onSelectPortraitImage }
                                            allowedTypes="image"
                                            value={ portraitImgId }
                                            render={ ( { open } ) => (
                                                <Button
                                                    className="bsxui-config-panel-img-button has-margin-bottom"
                                                    onClick={ open }
                                                >
                                                    <img class="bsxui-config-panel-img" src={ calcPortraitImgSizes[ portraitImgSizeIndex ].url } alt={ __( 'Change / upload portrait image', 'bsx-blocks' ) } />
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
                                    portraitImgId && typeof calcPortraitImgSizes[ portraitImgSizeIndex ] != 'undefined' && typeof calcPortraitImgSizes[ portraitImgSizeIndex ].url != 'undefined' && (
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
                                    typeof calcPortraitImgSizes != 'undefined' && typeof calcPortraitImgSizes[ portraitImgSizeIndex ] != 'undefined' && typeof calcPortraitImgSizes[ portraitImgSizeIndex ].url != 'undefined' && (
                                        <div class="bsxui-config-panel-text">
                                            <a class="bsxui-link" href={ calcPortraitImgSizes[ portraitImgSizeIndex ].url } target="_blank">{ __( 'Preview selected portrait image', 'bsx-blocks' ) }</a>
                                        </div>
                                    )
                                }
                            </>
                        )
                    }
                </PanelBody>

                <PanelBody title={ __( 'Zoomable (optional)', 'bsx-blocks' ) }>
                    {
                        calcPortraitImgSizes.length > 0 || !! href ? (
                            <div class="bsxui-config-panel-row">
                                <div class="bsxui-alert">
                                    { 
                                        !! href ? 
                                            __( 'Zoomable image is deactivated since href is set.', 'bsx-blocks' ) 
                                        :
                                            __( 'Zoomable image is deactivated since Portrait image is set.', 'bsx-blocks' ) 
                                    }
                                </div>
                            </div>
                        )
                        :
                        (
                            <>
                                <ToggleControl
                                    className={ calcPortraitImgSizes.length > 0 || !! noFigureTag ? 'bsxui-disabled' : '' }
                                    label={ __( 'Zoomable image', 'bsx-blocks' ) }
                                    checked={ !! zoomable }
                                    onChange={ onChangeZoomable }
                                    help={ __( 'If enabled click on image will open shadowbox gallery with large image.', 'bsx-blocks' ) }
                                />
                                {
                                    zoomable ? (
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
                                    :
                                    (
                                        <div class="bsxui-config-panel-row">
                                            <div class="bsxui-alert">
                                                { __( 'Zoomable image is deactivated since No figure Tag is set.', 'bsx-blocks' ) }
                                            </div>
                                        </div>
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
                                    { __( 'Link is deactivated since <i>Zoomable image</i> is set.', 'bsx-blocks' ) }
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
                
                <PanelBody title={ __( 'Margin', 'bsx-blocks' ) }>
                    {
                        marginLeftSelect( marginLeft, onChangeMarginLeft )
                    }
                    {
                        marginRightSelect( marginRight, onChangeMarginRight )
                    }
                    {
                        marginBeforeSelect( marginBefore, onChangeMarginBefore )
                    }
                    {
                        marginAfterSelect( marginAfter, onChangeMarginAfter )
                    }
                </PanelBody>

            </InspectorControls>,
            <InspectorAdvancedControls>
                {
                    disableResponsiveDownsizingToggle( disableResponsiveDownsizing, onChangeDisableResponsiveDownsizing )
                }
                {
                    portraitImgMaxWidthBreakpointInput( portraitImgMaxWidthBreakpoint, onChangePortraitImgMaxWidthBreakpoint )
                }
                <ToggleControl
                    className={ !! zoomable ? 'bsxui-disabled' : '' }
                    label={ __( 'No figure tag', 'bsx-blocks' ) }
                    checked={ !! noFigureTag }
                    onChange={ onChangeNoFigureTag }
                />
                {
                    !! zoomable && (
                        <div class="bsxui-config-panel-row">
                            <div class="bsxui-alert">
                                { __( 'Figure tag must exist since Zoomable image is set.', 'bsx-blocks' ) }
                            </div>
                        </div>
                    )
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
                {
                    ! noFigureTag ? (
                        <TextControl 
                            label={ __( 'Picture element additional class(es) – DEPRECATED', 'bsx-blocks' ) }
                            value={ pictureAdditionalClassName } 
                            onChange={ onChangePictureAdditionalClassName }
                        />
                    )
                    :
                    (
                        <div class="bsxui-config-panel-row">
                            <div class="bsxui-alert">
                                { __( 'Picture element additional class(es) is deactivated since No figure tag is set. Use Additional class(es) instead.', 'bsx-blocks' ) }
                                . 
                            </div>
                        </div>
                    )
                }
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
            // className,
            attributes: {
                className,
                imgSizeIndex,
                imgSizes,
                imgData,
                url,
                // width,
                // height,
                origWidth,
                origHeight,
                portraitImgId,
                portraitImgSizes,
                portraitImgData,
                portraitImgSizeIndex,
                portraitImgMaxWidthBreakpoint,
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
                marginBefore,
                marginAfter,
                marginLeft,
                marginRight,
                aAdditionalClassName,
                pictureAdditionalClassName,
                imgAdditionalClassName,
                href,
                target,
                rel,
                scale,
                displayedWidth,
                displayedHeight,
                noFigureTag,
            },
        } = props;

        // TEST
        // console.log( 'imgData: ' + JSON.stringify( imgData, null, 2 ) );
        // console.log( 'imgSizes: ' + JSON.stringify( imgSizes, null, 2 ) + '\n' );



        // initial set, replaces old attr 'imgSizes'
        const hasOldAttrImgSizes = typeof imgSizes !== 'undefined' && Array.isArray( imgSizes ) && imgSizes.length > 0;
        const hasOldAttrPortraitImgSizes = typeof portraitImgSizes !== 'undefined' && Array.isArray( portraitImgSizes ) && portraitImgSizes.length > 0;

        const calcImgSizes = hasOldAttrImgSizes ? imgSizes : makeImgSizesFromImgData( imgData );
        const calcPortraitImgSizes = hasOldAttrPortraitImgSizes ? portraitImgSizes : makeImgSizesFromImgData( portraitImgData );


        // prepare img sources attributes

        // const sourcesAttributesList = makeSourcesAttributesList( {
        //     calcImgSizes,
        //     imgSizeIndex,
        //     calcPortraitImgSizes,
        //     portraitImgSizeIndex,
        //     portraitImgMaxWidthBreakpoint,
        //     disableResponsiveDownsizing,
        // } );

        // class names

        const classNames = addClassNames( {
            textAlign,
            marginBefore,
            marginAfter,
            marginLeft,
            marginRight,
        }, className );

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
        const aSaveAttributes = ( zoomable && typeof calcImgSizes[ zoomImgSizeIndex ] != 'undefined' ) ? 
            makeSaveAttributes( {
                'href': calcImgSizes[ zoomImgSizeIndex ].url,
                'data-size': calcImgSizes[ zoomImgSizeIndex ].width + 'x' + calcImgSizes[ zoomImgSizeIndex ].height,
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

        // check if valid image(s)
        const hasValidImg = ( typeof calcImgSizes !== 'undefined' && calcImgSizes.length > 0 && typeof calcImgSizes[ imgSizeIndex ] !== 'undefined' && imgSizeIndex < calcImgSizes.length );
        const hasValidPortraitImg = ( typeof calcPortraitImgSizes !== 'undefined' && typeof calcPortraitImgSizes[ portraitImgSizeIndex ] !== 'undefined' ) && !! portraitImgSizeIndex;

               // const image = typeof calcImgSizes !== 'undefined' && typeof calcImgSizes[ imgSizeIndex ] !== 'undefined' ? (
        //     <>
        //         <script>document.write( '
        //             <picture className={ ! noFigureTag ? pictureAdditionalClassName : classNames }>
        //                 {
        //                     sourcesAttributesList.map( ( sourceAttributes, index ) => (
        //                         <source { ...sourceAttributes } />
        //                     ) )
        //                 }
        //                 <img className={ imgClassName } src={ makeBase64PreloadImgSrc( calcImgSizes[ imgSizeIndex ].width, calcImgSizes[ imgSizeIndex ].height ) } alt={ alt } data-src={ calcImgSizes[ imgSizeIndex ].url } width={ !! displayedWidth ? displayedWidth : calcImgSizes[ imgSizeIndex ].width } height={ !! displayedHeight ? displayedHeight : calcImgSizes[ imgSizeIndex ].height } data-fn="lazyload" />
        //             </picture>
        //         ' );</script>
        //         <noscript><img className={ imgClassName } src={ calcImgSizes[ imgSizeIndex ].url } alt={ alt } width={ !! displayedWidth ? displayedWidth : calcImgSizes[ imgSizeIndex ].width } height={ !! displayedHeight ? displayedHeight : calcImgSizes[ imgSizeIndex ].height } /></noscript>
        //     </>
        // )
        // :
        // (
        //     <></>
        // );


        // const srcsetList = [];
        // calcImgSizes.forEach( ( imgSize, index ) => {
        //     if ( 
        //         ( ( imgSizeIndex == 0 && index == 0 ) || ( imgSize.width == imgSize.height ) )
        //         || ( imgSizeIndex > 0 && index > 0 )
        //     ) {
        //         // add square thumb img if selected (imgSizeIndex == 0) or original img is square format too, else skip
        //         srcsetList.push( imgSize.url + ' ' + imgSize.width + 'w' );
        //         if ( imgSizeIndex == 0 ) {
        //             // skip other sizes but square
        //             return; // `break` will cause error “Unsyntactic break.”
        //         }
        //     }
        // } );

        // const srcset = srcsetList.join( ', ' );

        const srcset = makeSrcset( {
            calcImgSizes,
            imgSizeIndex,
        } );
        const src = hasValidImg ? calcImgSizes[ imgSizeIndex ].url : '';
        const width = ( hasValidImg && !! displayedWidth ) ? displayedWidth : hasValidImg ? calcImgSizes[ imgSizeIndex ].width : '';
        const height = ( hasValidImg && !! displayedHeight ) ? displayedHeight : hasValidImg ? calcImgSizes[ imgSizeIndex ].height : '';
        const sizes = ( width && height ) ? '(max-width: ' + width + 'px) 100vw, ' + width + 'px' : '';
        const landscapeImgClassName = hasValidPortraitImg ? imgClassName + ' d-portrait-none' : imgClassName;

        // TODO: manage className (if is outer element)

        const image = hasValidImg ? (
            <>
                <script>document.write( '
                    <img className={ landscapeImgClassName } src={ makeBase64PreloadImgSrc( width, height ) } data-src={ src } data-srcset={ srcset } sizes={ sizes } alt={ alt } width={ width } height={ height } data-fn="lazyload" />
                ' );</script>
                <noscript><img className={ landscapeImgClassName } src={ src } srcset={ srcset } sizes={ sizes } alt={ alt } width={ width } height={ height } loading="lazy" /></noscript>
            </>
        )
        :
        (
            <></>
        );

        let portraitImage = (
            <></>
        );
        if ( hasValidPortraitImg ) {

            const portraitSrcset = makeSrcset( {
                calcImgSizes: calcPortraitImgSizes,
                imgSizeIndex: portraitImgSizeIndex,
            } );
            const portraitSrc = calcPortraitImgSizes[ portraitImgSizeIndex ].url;
            const portraitWidth = calcPortraitImgSizes[ portraitImgSizeIndex ].width;
            const portraitHeight = calcPortraitImgSizes[ portraitImgSizeIndex ].height;
            const portaitSizes = '(max-width: ' + portraitWidth + 'px) 100vw, ' + portraitWidth + 'px';
            const portraitImgClassName = imgClassName + ' d-landscape-none';

            portraitImage = (
                <>
                    <script>document.write( '
                        <img className={ portraitImgClassName } src={ makeBase64PreloadImgSrc( portraitWidth, portraitHeight ) } data-src={ portraitSrc } data-srcset={ portraitSrcset } sizes={ portaitSizes } alt={ alt } width={ portraitWidth } height={ portraitHeight } data-fn="lazyload" />
                    ' );</script>
                    <noscript><img className={ portraitImgClassName } src={ portraitSrc } srcset={ portraitSrcset } sizes={ portaitSizes } alt={ alt } width={ portraitWidth } height={ portraitHeight } loading="lazy" /></noscript>
                </>
            );

        }


        const aOrImage = (
            <>
                { 
                    zoomable || href ? (
                        <a className={ aClassName } { ...aSaveAttributes }>
                            { image }
                            { portraitImage }
                        </a>
                    )
                    :
                    (
                        <>
                            { image }
                            { portraitImage }
                        </>
                    ) 
                }
            </>
        );

        return (
            <>
                {
                    ! noFigureTag ?
                    (
                        <figure className={ classNames } { ...saveAttributes }>
                            {
                                typeof calcImgSizes !== 'undefined' && typeof calcImgSizes[ imgSizeIndex ] !== 'undefined' && typeof calcImgSizes[ imgSizeIndex ].url !== 'undefined' && calcImgSizes[ imgSizeIndex ].url && (
                                    <>
                                        { 
                                            aOrImage
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
                    )
                    :
                    (
                        <>
                            { 
                                typeof calcImgSizes !== 'undefined' && typeof calcImgSizes[ imgSizeIndex ] !== 'undefined' && typeof calcImgSizes[ imgSizeIndex ].url !== 'undefined' && calcImgSizes[ imgSizeIndex ].url && (
                                    <>
                                        {
                                            aOrImage
                                        }
                                    </>
                                )
                            }
                        </>
                    )
                }
            </>
        );
    },
    
    deprecated,
} );
