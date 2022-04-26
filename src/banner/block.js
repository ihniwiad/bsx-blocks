// wp import
const { __, setLocaleData } = wp.i18n;
const {
    registerBlockType,
} = wp.blocks;
const {
    InnerBlocks,
    InspectorControls,
    InspectorAdvancedControls,
    MediaUpload,
} = wp.blockEditor;
const { 
    PanelBody,
    TextControl,
    ToggleControl,
    SelectControl,
    Button,
    SVG, 
    Path,
    RadioControl,
} = wp.components;
const { 
    Fragment 
} = wp.element;

const { 
    withSelect, 
} = wp.data;

// functions
import { svgIcon } from './../_functions/wp-icons.js';
import { addClassNames } from './../_functions/add-class-names.js';
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
import { 
    alignItemsSelect,
    marginBeforeSelect,
    marginAfterSelect,
    paddingBeforeSelect,
    paddingAfterSelect,
    belowNavbarToggle,
    touchFooterToggle,
    nodeNameSelect,
    bgPositionSelect,
    bgSizeSelect,
    bannerTypeSelect,
    bannerSizeSelect,
    bgAttachmentSelect,
    bgAttachmentFixedLimitedToggle,
    inlineTemplateSelect,
    uiTemplateSelect,
    imgUploadClickableImg,
    imgUploadButton,
    bgColorSelect,
    roundedToggle,
    linkUrlInput,
    // ignoreMailtoSpamProtectionToggle,
    targetToggle,
    relInput,
    dataFnInput,
    disableResponsiveDownsizingToggle,
} from './../_functions/controls.js';
import { makeSaveAttributes } from './../_functions/attributes.js';
import { getTemplate } from './../_functions/utilities.js';

// data
import templates from './templates';


// functions

const makeBannerClassNames = ( attributes ) => {

    const { 
        bannerType, 
        bannerSize, 
        bgAttachment, 
        bgAttachmentFixedLimited,
        bgSize, 
        bgPosition, 
        alignItems, 
        smAlignItems,
        mdAlignItems,
        templateName,
        rounded,
        href,
    } = attributes;

    const classNames = [];

    if ( !! bannerType ) {
        // always set bannerType and bannerSize to keep debugging easy
        classNames.push( 'banner-' + bannerType + '-' + bannerSize );
    }
    else {
        classNames.push( 'banner-' + bannerSize );
    }

    if ( !! bgAttachment ) {
        classNames.push( 'bg-' + bgAttachment );
    }
    if ( !! bgAttachmentFixedLimited ) {
        classNames.push( 'bg-w2000-static' );
    }

    if ( !! bgSize ) {
        classNames.push( 'bg-' + bgSize );
    }

    if ( !! bgPosition ) {
        classNames.push( 'bg-' + bgPosition );
    }
    
    if ( !! templateName == 'column-row-banner' && classNames.indexOf( 'd-flex' ) == -1 ) {
        classNames.push( 'd-flex' );
    }
    
    if ( !! alignItems ) {
        if ( classNames.indexOf( 'd-flex' ) == -1 ) {
            classNames.push( 'd-flex' );
        }
        if ( templateName !== 'column-row-banner' ) {
            classNames.push( 'align-items-' + alignItems );
        }
    }
    if ( !! smAlignItems ) {
        if ( classNames.indexOf( 'd-flex' ) == -1 ) {
            classNames.push( 'd-flex' );
        }
        if ( templateName !== 'column-row-banner' ) {
            classNames.push( 'align-items-sm-' + smAlignItems );
        }
    }
    if ( !! mdAlignItems ) {
        if ( classNames.indexOf( 'd-flex' ) == -1 ) {
            classNames.push( 'd-flex' );
        }
        if ( templateName !== 'column-row-banner' ) {
            classNames.push( 'align-items-md-' + mdAlignItems );
        }
    }

    if ( rounded === true ) {
        classNames.push( 'of-hidden' );
    }

    if ( !! href ) {
        classNames.push( 'd-block' );
        classNames.push( 'no-underline' );
    }

    return classNames.join( ' ' );
}

const makeBannerInnerClassNames = ( attributes ) => {

    const {
        templateName,
    } = attributes;

    const classNames = [ 'banner-inner' ];
    
    if ( !! templateName && templateName == 'column-row-banner' ) {
        classNames.push( 'w-100' );
        classNames.push( 'd-flex' );
        classNames.push( 'flex-column' );
    }

    return classNames.join( ' ' );
}

// responsive sizes
const responsivePortraitMediaIndexList = [
    {
        media: '(orientation: portrait) and (max-width: 499.98px)',
        imgSizeIndexShift: '-1',
    },
    {
        media: '(orientation: portrait)',
        imgSizeIndexShift: '0',
    },
];
const responsiveMediaIndexList = [
    {
        media: '(max-width: 999.98px)',
        imgSizeIndexShift: '-3',
    },
    {
        media: '(max-width: 1399.98px)',
        imgSizeIndexShift: '-2',
    },
];
const skipIndex = 0;
const makeSrcsetJson = ( attributes ) => {

    const { 
        imgSizes, 
        imgSizeIndex, 
        portraitImgSizes, 
        portraitImgSizeIndex, 
        disableResponsiveDownsizing,
    } = attributes;

    // srcsetJson = "[ { media: '" + mobileMediaQuery + "', src: '" + url + "' }, { media: '" + smallMobileMediaQuery + "', src: '" + imgSizes[ ( imgSizeIndex - mobileSizeStep > 0 ? imgSizeIndex - mobileSizeStep : 0 ) ].url + "' }, { media: '', src: '" + imgSizes[ ( imgSizeIndex - smallMobileSizeStep > 0 ? imgSizeIndex - smallMobileSizeStep : 0 ) ].url + "' } ]";
    let srcsetJson = '[ ';
    responsivePortraitMediaIndexList.forEach( ( item, index ) => {
        // add item if img resulting indes > skipIndex (no square format)
        if ( ! disableResponsiveDownsizing || index == 0 ) {
            // always add 1st item, others only if downsizing is enabled
            const currentPortraitImgSizeIndex = ( parseInt( portraitImgSizeIndex ) + parseInt( item.imgSizeIndexShift ) );
            if ( currentPortraitImgSizeIndex > skipIndex && currentPortraitImgSizeIndex < portraitImgSizes.length ) {
                srcsetJson += '{ media: \'' + item.media + '\', src: \'' + portraitImgSizes[ currentPortraitImgSizeIndex ].url + '\' }, ';
            }
        }
    } );
    if ( ! disableResponsiveDownsizing ) {
        responsiveMediaIndexList.forEach( ( item, index ) => {
            // add item if img resulting indes > skipIndex (no square format)
            const currentImgSizeIndex = ( parseInt( imgSizeIndex ) + parseInt( item.imgSizeIndexShift ) );
            if ( currentImgSizeIndex > skipIndex && currentImgSizeIndex < imgSizes.length ) {
                srcsetJson += '{ media: \'' + item.media + '\', src: \'' + imgSizes[ currentImgSizeIndex ].url + '\' }, ';
            }
        } );
    }
    if ( srcsetJson.lastIndexOf( ', ' ) == srcsetJson.length - 2 ) {
        srcsetJson = srcsetJson.substring( 0, srcsetJson.length - 2 );
    }
    srcsetJson += ' ]';
    return srcsetJson;
}


// insert directly into banner element without `.banner-inner`
const noBannerInnerTemplateNames = [
    'column-row-banner',
];


registerBlockType( 'bsx-blocks/banner', {
    title: __( 'BSX Banner', 'bsx-blocks' ),
    icon: svgIcon( 'banner' ),
    category: 'layout',
    attributes: {
        nodeName: {
            type: 'string',
            default: 'div',
        },
        templateName: {
            type: 'string',
        },
        belowNavbar: {
            type: 'boolean',
            default: false,
        },
        touchFooter: {
            type: 'boolean',
            default: false,
        },
        bgColor: {
            type: 'string',
        },
        imgId: {
            type: 'number',
        },
        imgSizes: {
            type: 'array',
            default: [],
        },
        imgSizeIndex: {
            type: 'string',
            default: '6',
        },
        url: {
            type: 'string',
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
        bannerType: {
            type: 'string',
            default: 'vh',
        },
        bannerSize: {
            type: 'string',
            default: '2',
        },
        bgAttachment: {
            type: 'string',
            default: 'fixed',
        },
        bgAttachmentFixedLimited: {
            type: 'boolean',
        },
        bgSize: {
            type: 'string',
            default: 'cover',
        },
        bgPosition: {
            type: 'string',
            default: 'c',
        },
        alignItems: {
            type: 'string',
            default: 'center',
        },
        rounded: {
            type: 'boolean',
        },
        marginBefore: {
            type: 'string',
            default: '',
        },
        marginAfter: {
            type: 'string',
            default: '',
        },
        paddingBefore: {
            type: 'string',
            default: '',
        },
        paddingAfter: {
            type: 'string',
            default: '',
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
        dataFn: {
            type: 'string',
        },
        disableResponsiveDownsizing: {
            type: 'boolean',
        },
    },

    edit: withSelect( ( select, { clientId } ) => {
        const { 
            getBlocksByClientId,
            getBlockAttributes, 
        } = select( 'core/block-editor' );

        const children = getBlocksByClientId( clientId )[ 0 ]
            ? getBlocksByClientId( clientId )[ 0 ].innerBlocks
            : [];

        return {
            children,
        };
    } )( ( props ) => {

        const {
            className,
            attributes: {
                nodeName,
                templateName,
                belowNavbar,
                touchFooter,
                bgColor,
                imgId,
                imgSizes,
                imgSizeIndex,
                url,
                portraitImgId,
                portraitImgSizes,
                portraitImgSizeIndex,
                bannerType,
                bannerSize,
                bgAttachment,
                bgAttachmentFixedLimited,
                bgSize,
                bgPosition,
                alignItems,
                smAlignItems,
                mdAlignItems,
                rounded,
                marginBefore,
                marginAfter,
                paddingBefore,
                paddingAfter,
                href,
                target,
                rel,
                dataFn,
                disableResponsiveDownsizing,
            },
            setAttributes,
            isSelected,
            children,
        } = props;

        const hasInnerBlocks = ( children ) => {
            return children.length > 0;
        }

        let template = getTemplate( templates, templateName ).template;

        const onChangeTemplate = ( value ) => {
            const currentTemplateMap = getTemplate( templates, value );
            if ( currentTemplateMap.template != undefined && currentTemplateMap.attributes != undefined ) {
                template = currentTemplateMap.template;
                setAttributes( { 
                    templateName: value,
                    ...currentTemplateMap.attributes,
                } );
            }
            else {
                console.log( 'Error: Template change failed.' );
            }

            // console.log( 'changed templateName: ' + value );
            // console.log( 'changed template: ' + template );
        };

        const onChangeNodeName = ( value ) => {
            setAttributes( { nodeName: value } );
        };

        const onChangeBelowNavbar = ( value ) => {
            setAttributes( { belowNavbar: value } );
        };
        const onChangeTouchFooter = ( value ) => {
            setAttributes( { touchFooter: value } );
        };

        const onChangeBgColor = ( value ) => {
            setAttributes( { bgColor: value } );
        };

        async function onSelectImage( img ) {

            if ( typeof img.url !== 'undefined' ) {

                const newImgSizesData = await getImgSizesData( img );
                const newImgSizes = newImgSizesData.imgs;

                // check if current img size index fits to new img (might be too large)
                let newImgSizeIndex = parseInt( imgSizeIndex );
                if ( parseInt( imgSizeIndex ) >= newImgSizes.length ) {
                    newImgSizeIndex = newImgSizes.length - 1;
                }

                setAttributes( {
                    imgId: img.id,
                    imgSizes: newImgSizes,
                    imgSizeIndex: newImgSizeIndex.toString(),
                    url: newImgSizes[ newImgSizeIndex ].url,
                } );

                // console.log( 'url: ' + newImgSizes[ newImgSizeIndex ].url );
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
                // console.log( 'newPortraitImgSizeIndex: ' + newPortraitImgSizeIndex );

                setAttributes( {
                    portraitImgId: portraitImg.id,
                    portraitImgSizes: newPortraitImgSizes,
                    portraitImgSizeIndex: newPortraitImgSizeIndex.toString(),
                } );

                // console.log( 'portraitImgSizes[ portraitImgSizeIndex ].url: ' + newPortraitImgSizes[ newPortraitImgSizeIndex ].url );
            }
        };

        const onDeleteImage = () => {
            setAttributes( {
                imgId: '',
                imgSizes: [],
                url: '',
            } );
        };

        const onDeletePortraitImage = () => {
            setAttributes( {
                portraitImgId: '',
                portraitImgSizes: [],
            } );
        };

        const onChangeBannerType = ( value ) => {
            setAttributes( { bannerType: value } );
        };
        const onChangeBannerSize = ( value ) => {
            setAttributes( { bannerSize: value } );
        };

        const onChangeBgAttachment = ( value ) => {
            setAttributes( { bgAttachment: value } );
        };
        const onChangeBgAttachmentFixedLimited = ( value ) => {
            setAttributes( { bgAttachmentFixedLimited: value } );
        };
        const onChangeBgSize = ( value ) => {
            setAttributes( { bgSize: value } );
        };
        const onChangeBgPosition = ( value ) => {
            setAttributes( { bgPosition: value } );
        };

        const onChangeAlignItems = ( value ) => {
            setAttributes( { alignItems: value } );
        };
        const onChangeSmAlignItems = ( value ) => {
            setAttributes( { smAlignItems: value } );
        };
        const onChangeMdAlignItems = ( value ) => {
            setAttributes( { mdAlignItems: value } );
        };

        const onChangeRounded = ( value ) => {
            setAttributes( { rounded: value } );
        };

        const onChangeMarginBefore = ( value ) => {
            setAttributes( { marginBefore: value } );
        };

        const onChangeMarginAfter = ( value ) => {
            setAttributes( { marginAfter: value } );
        };

        const onChangePaddingBefore = ( value ) => {
            setAttributes( { paddingBefore: value } );
        };

        const onChangePaddingAfter = ( value ) => {
            setAttributes( { paddingAfter: value } );
        };

        const onChangeHref = ( value ) => {
            setAttributes( { href: value } );
        };
        const onChangeTarget = ( value ) => {
            setAttributes( { target: !! value ? '_blank' : '' } );
        };
        const onChangeRel = ( value ) => {
            setAttributes( { rel: value } );
        };
        const onChangeDataFn = ( value ) => {
            setAttributes( { dataFn: value } );
        };

        const onChangeDisableResponsiveDownsizing = ( value ) => {
            setAttributes( { disableResponsiveDownsizing: value } );
        };

        const onChangeImgSizeIndex = ( value ) => {
            setAttributes( { 
                imgSizeIndex: value.toString(),
                url: imgSizes[ value ].url,
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

        let bannerClassName = makeBannerClassNames( { 
            bannerType, 
            bannerSize, 
            bgAttachment, 
            bgAttachmentFixedLimited,
            bgSize, 
            bgPosition, 
            alignItems, 
            smAlignItems,
            mdAlignItems,
            templateName,
            rounded,
            href,
        } );
        bannerClassName = addClassNames( {
            belowNavbar,
            touchFooter,
            bgColor,
            rounded,
            marginBefore, 
            marginAfter, 
            paddingBefore, 
            paddingAfter,
        }, bannerClassName );

        const bannerInnerClassName = makeBannerInnerClassNames( {
            templateName,
        } );

        const TagName = nodeName;

        const bannerStyle = { backgroundImage: `url(${ url })` };

        return [
            <InspectorControls>
                <PanelBody title={ __( 'Banner template', 'bsx-blocks' ) }>
                    {
                        uiTemplateSelect( templates, templateName, onChangeTemplate )
                    }
                </PanelBody>

                <PanelBody title={ __( 'Banner image', 'bsx-blocks' ) }>
                    {
                        imgId ? (
                            <>
                                {
                                    imgUploadClickableImg( imgId, url, onSelectImage )
                                }
                            </>
                        )
                        : 
                        (
                            <div class="bsxui-config-panel-row">
                                <div class="bsxui-config-panel-text">{ __( '– No image selected yet –', 'bsx-blocks' ) }</div>
                            </div>
                        )
                    }
                    <div class="bsxui-config-panel-row">
                        <>
                            {
                                imgUploadButton( imgId, onSelectImage )
                            }
                        </>
                    </div>
                    {
                        imgId && (
                            <div class="bsxui-config-panel-row">
                                <Button 
                                    onClick={ onDeleteImage }
                                    isDestructive={ true }
                                >
                                    { __( 'Remove image', 'bsx-blocks' ) }
                                </Button>
                            </div>
                        )
                    }
                    <RadioControl
                        label={ __( 'Image size and format', 'bsx-blocks' ) }
                        selected={ imgSizeIndex.toString() }
                        options={ imgSizeRadioControlOptions }
                        onChange={ onChangeImgSizeIndex }
                    />
                    {
                        imgSizes[ imgSizeIndex ] != undefined && imgSizes[ imgSizeIndex ].url != undefined && (
                            <div class="bsxui-config-panel-text">
                                <a class="bsxui-link" href={ imgSizes[ imgSizeIndex ].url } target="_blank">{ __( 'Preview selected image', 'bsx-blocks' ) }</a>
                            </div>
                        )
                    }
                </PanelBody>

                <PanelBody title={ __( 'Banner portrait image (optional)', 'bsx-blocks' ) }>
                    {
                        portraitImgId && typeof portraitImgSizes[ portraitImgSizeIndex ] != 'undefined' && typeof portraitImgSizes[ portraitImgSizeIndex ].url != 'undefined' ? (
                            <>
                                {
                                    imgUploadClickableImg( portraitImgId, portraitImgSizes[ portraitImgSizeIndex ].url, onSelectPortraitImage, 'p' )
                                }
                            </>
                        )
                        : 
                        (
                            <div class="bsxui-config-panel-row">
                                <div class="bsxui-config-panel-text">{ __( '– No portrait image selected yet –', 'bsx-blocks' ) }</div>
                            </div>
                        )
                    }
                    <div class="bsxui-config-panel-row">
                        <>
                            {
                                imgUploadButton( portraitImgId, onSelectPortraitImage, 'p' )
                            }
                        </>
                    </div>
                    {
                        portraitImgId && (
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
                </PanelBody>

                <PanelBody title={ __( 'Banner dimensions', 'bsx-blocks' ) }>
                    {
                        bannerTypeSelect( bannerType, onChangeBannerType )
                    }
                    {
                        bannerSizeSelect( bannerSize, onChangeBannerSize )
                    }
                    {
                        bgAttachmentSelect( bgAttachment, onChangeBgAttachment )
                    }
                    { bgAttachment === 'fixed' && (
                        <>
                            {
                                bgAttachmentFixedLimitedToggle( bgAttachmentFixedLimited, onChangeBgAttachmentFixedLimited )
                            }
                        </>
                    ) }
                    {
                        alignItemsSelect( alignItems, onChangeAlignItems, [ '', 'center', 'end' ], ( templateName == 'column-row-banner' ) )
                    }
                    {
                        alignItemsSelect( smAlignItems, onChangeSmAlignItems, [ '', 'center', 'end' ], ( templateName == 'column-row-banner' ), 'SM' )
                    }
                    {
                        alignItemsSelect( mdAlignItems, onChangeMdAlignItems, [ '', 'center', 'end' ], ( templateName == 'column-row-banner' ), 'MD' )
                    }
                    {
                        roundedToggle( rounded, onChangeRounded )
                    }
                </PanelBody>


                <PanelBody title={ __( 'Background', 'bsx-blocks' ) }>
                    {
                        bgColorSelect( bgColor, onChangeBgColor )
                    }
                </PanelBody>

                <PanelBody title={ __( 'Margin', 'bsx-blocks' ) }>
                    {
                        marginBeforeSelect( marginBefore, onChangeMarginBefore )
                    }
                    {
                        marginAfterSelect( marginAfter, onChangeMarginAfter )
                    }
                </PanelBody>

                <PanelBody title={ __( 'Link', 'bsx-blocks' ) }>
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
                        dataFnInput( dataFn, onChangeDataFn )
                    }
                </PanelBody>
            </InspectorControls>,

            <InspectorAdvancedControls>
                {
                    belowNavbarToggle( belowNavbar, onChangeBelowNavbar )
                }
                {
                    touchFooterToggle( touchFooter, onChangeTouchFooter )
                }
                {
                    nodeNameSelect( nodeName, onChangeNodeName, [ 'div', 'section' ] )
                }
                {
                    bgPositionSelect( bgPosition, onChangeBgPosition )
                }
                {
                    bgSizeSelect( bgSize, onChangeBgSize )
                }
                {
                    paddingBeforeSelect( paddingBefore, onChangePaddingBefore )
                }
                {
                    paddingAfterSelect( paddingAfter, onChangePaddingAfter )
                }
                {
                    disableResponsiveDownsizingToggle( disableResponsiveDownsizing, onChangeDisableResponsiveDownsizing )
                }
            </InspectorAdvancedControls>,

            (
                <>
                    {
                        ! templateName ? (
                            <div class="bsxui-initial-inline-control">
                                <div class="bsxui-initial-inline-control-heading">
                                    { __( 'Please select Banner template', 'bsx-blocks' ) }
                                </div>
                                {
                                    inlineTemplateSelect( templates, onChangeTemplate )
                                }
                            </div>
                        )
                        : 
                        (
                            <TagName className={ bannerClassName } style={ bannerStyle }>
                                {
                                    false && ! imgId && (
                                        <div className="bsxui-in-widget-overlay-panel bsxui-top">
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
                                    noBannerInnerTemplateNames.indexOf( templateName ) == -1 ? (
                                        <div className={ bannerInnerClassName }>
                                            <InnerBlocks 
                                                template={ template }
                                                renderAppender={
                                                    hasInnerBlocks ? undefined
                                                    : () => <InnerBlocks.ButtonBlockAppender />
                                                }
                                            />
                                        </div>
                                    )
                                    :
                                    (
                                        <InnerBlocks 
                                            template={ template }
                                            renderAppender={
                                                hasInnerBlocks ? undefined
                                                : () => <InnerBlocks.ButtonBlockAppender />
                                            }
                                        />
                                    )
                                }
                            </TagName>
                        )
                    }
                </>
            )
        ];
    } ),
    save: ( props ) => {
        const {
            className,
            attributes: {
                nodeName,
                templateName,
                belowNavbar,
                touchFooter,
                bgColor,
                imgId,
                imgSizes,
                imgSizeIndex,
                url,
                portraitImgId,
                portraitImgSizes,
                portraitImgSizeIndex,
                bannerType,
                bannerSize,
                bgAttachment,
                bgAttachmentFixedLimited,
                bgSize,
                bgPosition,
                alignItems,
                smAlignItems,
                mdAlignItems,
                rounded,
                marginBefore,
                marginAfter,
                paddingBefore,
                paddingAfter,
                href,
                target,
                rel,
                dataFn,
                disableResponsiveDownsizing,
            },
        } = props;

        // class names

        let bannerClassName = makeBannerClassNames( {
            bannerType, 
            bannerSize, 
            bgAttachment, 
            bgAttachmentFixedLimited,
            bgSize, 
            bgPosition, 
            alignItems, 
            smAlignItems,
            mdAlignItems,
            templateName,
            rounded,
            href,
        } );
        bannerClassName = addClassNames( {
            belowNavbar, 
            touchFooter,
            bgColor,
            rounded,
            marginBefore, 
            marginAfter, 
            paddingBefore, 
            paddingAfter,
        }, bannerClassName );

        const bannerInnerClassName = makeBannerInnerClassNames( {
            templateName,
        } );

        const srcsetJson = makeSrcsetJson( { 
            imgSizes, 
            imgSizeIndex, 
            portraitImgSizes, 
            portraitImgSizeIndex, 
            disableResponsiveDownsizing,
        } );

        // there might be no images at all, e.g. if background color banner
        const saveAttributes = makeSaveAttributes( {
            'data-fn': imgId ? 'lazyload' : dataFn,
            'data-src': imgId ? url : '',
            'data-srcset': imgId ? srcsetJson : '',
            href: href, 
            target: target, 
            rel: href ? ( rel ? rel + ' noopener noreferrer' : 'noopener noreferrer' ) : '',
        } );

        const TagName = href ? 'a' : nodeName;

        return (
            <TagName className={ bannerClassName } { ...saveAttributes }>
                {
                    noBannerInnerTemplateNames.indexOf( templateName ) == -1 ? (
                        <div className={ bannerInnerClassName }>
                            <InnerBlocks.Content />
                        </div>
                    )
                    :
                    (
                        <InnerBlocks.Content />
                    )
                }
            </TagName>
        );
    },
} );
