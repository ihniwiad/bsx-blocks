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

import { makeSaveAttributes } from './../_functions/attributes.js';


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
        templateName,
    } = attributes;

    const classNames = [];

    if ( true ) {
        // always set bannerType and bannerSize to keep debugging easy
        classNames.push( 'banner-' + bannerType + '-' + bannerSize );
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
    
    if ( !! alignItems ) {
        classNames.push( 'd-flex' );
        if ( templateName !== 'column-row-banner' ) {
            classNames.push( 'align-items-' + alignItems );
        }
    }
    
    if ( !! templateName == 'column-row-banner' && classNames.indexOf( 'd-flex' ) == -1 ) {
        classNames.push( 'd-flex' );
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
    } = attributes;

    // srcsetJson = "[ { media: '" + mobileMediaQuery + "', src: '" + url + "' }, { media: '" + smallMobileMediaQuery + "', src: '" + imgSizes[ ( imgSizeIndex - mobileSizeStep > 0 ? imgSizeIndex - mobileSizeStep : 0 ) ].url + "' }, { media: '', src: '" + imgSizes[ ( imgSizeIndex - smallMobileSizeStep > 0 ? imgSizeIndex - smallMobileSizeStep : 0 ) ].url + "' } ]";
    let srcsetJson = '[ ';
    responsivePortraitMediaIndexList.forEach( ( item, index ) => {
        // add item if img resulting indes > skipIndex (no square format)
        const currentPortraitImgSizeIndex = ( parseInt( portraitImgSizeIndex ) + parseInt( item.imgSizeIndexShift ) );
        if ( currentPortraitImgSizeIndex > skipIndex && currentPortraitImgSizeIndex < portraitImgSizes.length ) {
            srcsetJson += '{ media: \'' + item.media + '\', src: \'' + portraitImgSizes[ currentPortraitImgSizeIndex ].url + '\' }, ';
        }
    } );
    responsiveMediaIndexList.forEach( ( item, index ) => {
        // add item if img resulting indes > skipIndex (no square format)
        const currentImgSizeIndex = ( parseInt( imgSizeIndex ) + parseInt( item.imgSizeIndexShift ) );
        if ( currentImgSizeIndex > skipIndex && currentImgSizeIndex < imgSizes.length ) {
            srcsetJson += '{ media: \'' + item.media + '\', src: \'' + imgSizes[ currentImgSizeIndex ].url + '\' }, ';
        }
    } );
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
                marginBefore,
                marginAfter,
                paddingBefore,
                paddingAfter,
            },
            setAttributes,
            isSelected,
            children,
        } = props;

        const hasInnerBlocks = ( children ) => {
            return children.length > 0;
        }

        const templates = [
            {
                name: 'empty',
                title: __( 'Empty', 'bsx-blocks' ),
                icon: svgIcon( 'banner-empty' ),
                attributes: {
                    marginAfter: '5',
                },
                template: [
                    [
                        'core/paragraph',
                        { 
                            placeholder: 'Change paragraph text or delete...',
                        }
                    ]
                ],
                templateLock: false,
            },
            {
                name: 'container-with-heading',
                title: __( 'Container with Heading', 'bsx-blocks' ),
                icon: svgIcon( 'banner-container-with-heading' ),
                attributes: {
                    marginAfter: '5',
                },
                template: [ 
                    [ 
                        'bsx-blocks/container', 
                        {
                        },
                        [
                            [
                                'core/heading',
                                { 
                                    placeholder: 'Add heading text, configure heading level...',
                                    textSize: 'display-1',
                                    textColor: 'white',
                                    textShadow: 'darker',
                                    marginAfter: '0',
                                }
                            ]
                        ],
                    ], 
                ],
                templateLock: false,
            },
            {
                name: 'static-container-with-heading',
                title: __( 'Static with Container & Heading', 'bsx-blocks' ),
                icon: svgIcon( 'banner-static-container-with-heading' ),
                attributes: {
                    bannerType: 'st',
                    bannerSize: '3',
                    marginAfter: '5',
                },
                template: [ 
                    [ 
                        'bsx-blocks/container', 
                        {
                        },
                        [
                            [
                                'core/heading',
                                { 
                                    placeholder: 'Add heading text, configure heading level...',
                                    textSize: 'display-1',
                                    textColor: 'white',
                                    textShadow: 'darker',
                                    marginAfter: '0',
                                }
                            ]
                        ],
                    ], 
                ],
                templateLock: false,
            },
            {
                name: 'column-row-banner',
                title: __( 'Bottom bar Banner', 'bsx-blocks' ),
                icon: svgIcon( 'banner-column-row' ),
                attributes: {
                    marginAfter: '5',
                },
                template: [  
                    [ 
                        'bsx-blocks/column-rows', 
                        {
                            templateName: 'default-auto',
                            display: 'flex',
                            flexDirection: 'column',
                            className: 'banner-inner',
                        },
                        [
                            [ 
                                'bsx-blocks/column-row', 
                                {
                                    columnRowType: '',
                                    display: 'flex',
                                    alignItems: 'center',
                                },
                                [ 
                                    [ 
                                        'bsx-blocks/wrapper', 
                                        {
                                            width: '100',
                                        },
                                        [
                                            [ 
                                                'bsx-blocks/container', 
                                                {},
                                                [
                                                    [
                                                        'core/heading',
                                                        { 
                                                            placeholder: 'Add heading text, configure heading level...',
                                                            textSize: 'display-1',
                                                            textColor: 'white',
                                                            textShadow: 'darker', 
                                                            marginAfter: '0',
                                                        }
                                                    ]
                                                ],
                                            ], 
                                        ],
                                    ], 
                                ],
                            ], 
                            [ 
                                'bsx-blocks/column-row', 
                                {
                                    columnRowType: 'auto',
                                },
                                [
                                    [ 
                                        'bsx-blocks/wrapper', 
                                        {
                                            bgColor: 'primary-transparent',
                                            paddingBefore: '3',
                                            paddingAfter: '3'
                                        },
                                        [
                                            [ 
                                                'bsx-blocks/container', 
                                                {},
                                                [
                                                    [
                                                        'core/paragraph',
                                                        { 
                                                            placeholder: 'Add text...',
                                                            textSize: 'lead',
                                                            textColor: 'white',
                                                            marginAfter: '0',
                                                        }
                                                    ]
                                                ],
                                            ], 
                                        ],
                                    ], 
                                ],
                            ], 
                        ],
                    ],
                ],
                templateLock: false,
            },
        ];

        const getTemplateMap = ( currentTemplateName ) => {
            const currentTemplate = templates.find( ( item ) => item.name === currentTemplateName );
            return currentTemplate ? currentTemplate : {};
        };

        let template = getTemplateMap( templateName ).template;

        const onChangeTemplate = ( value ) => {
            const currentTemplateMap = getTemplateMap( value );
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
            templateName,
        } );
        bannerClassName = addClassNames( {
            belowNavbar,
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
                    <div className="bsxui-icon-text-button-list">
                        { templates.map( ( template, index ) => (
                            <Button
                                label={ template.title }
                                onClick={ () => {
                                    onChangeTemplate( template.name );
                                } }
                                className={ 'bsxui-icon-text-button-list-item ' + ( templateName === template.name ? 'active' : '' ) }
                            >
                                <div class="bsxui-icon-text-button-list-item-icon">
                                    { template.icon }
                                </div>
                                <div class="bsxui-icon-text-button-list-item-label">
                                    { template.title }
                                </div>
                            </Button>
                        ) ) }
                    </div>
                </PanelBody>

                <PanelBody title={ __( 'Banner image', 'bsx-blocks' ) }>
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
                            <div class="bsxui-config-panel-text">
                                <a class="bsxui-link" href={ imgSizes[ imgSizeIndex ].url } target="_blank">{ __( 'Preview selected image', 'bsx-blocks' ) }</a>
                            </div>
                        )
                    }
                </PanelBody>

                <PanelBody title={ __( 'Banner portrait image (optional)', 'bsx-blocks' ) }>
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
                    <SelectControl 
                        label={ __( 'Banner height type', 'bsx-blocks' ) }
                        value={ bannerType }
                        onChange={ onChangeBannerType }
                        options={ [
                            { value: 'vh', label: __( 'Viewport dependent height', 'bsx-blocks' ) },
                            { value: 'st', label: __( 'Static height', 'bsx-blocks' ) },
                        ] }
                        help={ __( 'Viewport dependent height will be e.g. all viewport height or viewport height - X pixels. Static height instead depends only on the banners contents.', 'bsx-blocks' ) }
                    />
                    <SelectControl 
                        label={ __( 'Banner height size', 'bsx-blocks' ) }
                        value={ bannerSize }
                        onChange={ onChangeBannerSize }
                        options={ [
                            { value: '1', label: __( '1 (biggest)', 'bsx-blocks' ) },
                            { value: '2', label: __( '2', 'bsx-blocks' ) },
                            { value: '3', label: __( '3 (smallest)', 'bsx-blocks' ) },
                        ] }
                        help={ __( 'Choose from 1 (maximum) to 3 (minimum)', 'bsx-blocks' ) }
                    />
                    <SelectControl 
                        label={ __( 'Background attachement', 'bsx-blocks' ) }
                        value={ bgAttachment }
                        onChange={ onChangeBgAttachment }
                        options={ [
                            { value: 'static', label: __( 'static', 'bsx-blocks' ) },
                            { value: 'fixed', label: __( 'fixed', 'bsx-blocks' ) },
                        ] }
                    />
                    { bgAttachment === 'fixed' && (
                        <ToggleControl
                            label={ __( 'Limit fixed background', 'bsx-blocks' ) }
                            checked={ !! bgAttachmentFixedLimited }
                            onChange={ onChangeBgAttachmentFixedLimited }
                            help={ __( 'If enabled large displays (>=2.000px) will have static background attachement.', 'bsx-blocks' ) }
                        />
                    ) }
                    <SelectControl 
                        label={ __( 'Align items', 'bsx-blocks' ) }
                        value={ alignItems }
                        onChange={ onChangeAlignItems }
                        options={ [
                            { value: 'center', label: __( 'center', 'bsx-blocks' ) },
                            { value: 'end', label: __( 'end', 'bsx-blocks' ) },
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
                        help={ __( 'Spacer before Banner', 'bsx-blocks' ) }
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
                        help={ __( 'Spacer after Banner', 'bsx-blocks' ) }
                    />
                </PanelBody>
            </InspectorControls>,

            <InspectorAdvancedControls>
                <ToggleControl
                    label={ __( 'Below navbar', 'bsx-blocks' ) }
                    checked={ !! belowNavbar }
                    onChange={ onChangeBelowNavbar }
                    help={ __( 'Enable if container starts below navbar. If enabled container has spacer top to avoid overlapping its contents by navbar.', 'bsx-blocks' ) }
                />
                <SelectControl 
                    label={ __( 'Node name', 'bsx-blocks' ) }
                    value={ nodeName }
                    onChange={ onChangeNodeName }
                    options={ [
                        { value: 'div', label: __( 'div', 'bsx-blocks' ) },
                        { value: 'section', label: __( 'section', 'bsx-blocks' ) },
                    ] }
                    help={ __( 'Node name (please edit only if you know what you’re doing)', 'bsx-blocks' ) }
                />
                <SelectControl 
                    label={ __( 'Background advanced position', 'bsx-blocks' ) }
                    value={ bgPosition }
                    onChange={ onChangeBgPosition }
                    options={ [
                        { value: 'c', label: __( 'Center center', 'bsx-blocks' ) },
                        { value: 'c25', label: __( 'Center 25%', 'bsx-blocks' ) },
                        { value: 'c66', label: __( 'Center 66%', 'bsx-blocks' ) },
                        { value: 'c75', label: __( 'Center 75%', 'bsx-blocks' ) },
                        { value: 'ct', label: __( 'Center top', 'bsx-blocks' ) },
                        { value: 'rc', label: __( 'Right center', 'bsx-blocks' ) },
                        { value: '33c', label: __( '33% center', 'bsx-blocks' ) },
                        { value: '80c', label: __( '80% center', 'bsx-blocks' ) },
                        { value: '66t', label: __( '66% top', 'bsx-blocks' ) },
                        { value: '66c', label: __( '66% center', 'bsx-blocks' ) },
                    ] }
                />
                <SelectControl 
                    label={ __( 'Background advanced size', 'bsx-blocks' ) }
                    value={ bgSize }
                    onChange={ onChangeBgSize }
                    options={ [
                        { value: 'cover', label: __( 'Cover', 'bsx-blocks' ) },
                        { value: 'contain', label: __( 'Contain', 'bsx-blocks' ) },
                        { value: '100a', label: __( '100% auto', 'bsx-blocks' ) },
                    ] }
                />

                <SelectControl 
                    label={ __( 'Padding before', 'bsx-blocks' ) }
                    value={ paddingBefore }
                    onChange={ onChangePaddingBefore }
                    options={ [
                        { value: '', label: __( '– none –', 'bsx-blocks' ) },
                        { value: '1', label: __( 'extra small', 'bsx-blocks' ) },
                        { value: '2', label: __( 'small', 'bsx-blocks' ) },
                        { value: '3', label: __( 'medium', 'bsx-blocks' ) },
                        { value: '4', label: __( 'large', 'bsx-blocks' ) },
                        { value: '5', label: __( 'extra large', 'bsx-blocks' ) },
                    ] }
                    help={ __( 'Inner spacer before', 'bsx-blocks' ) }
                />
                <SelectControl 
                    label={ __( 'Padding after', 'bsx-blocks' ) }
                    value={ paddingAfter }
                    onChange={ onChangePaddingAfter }
                    options={ [
                        { value: '', label: __( '– none –', 'bsx-blocks' ) },
                        { value: '1', label: __( 'extra small', 'bsx-blocks' ) },
                        { value: '2', label: __( 'small', 'bsx-blocks' ) },
                        { value: '3', label: __( 'medium', 'bsx-blocks' ) },
                        { value: '4', label: __( 'large', 'bsx-blocks' ) },
                        { value: '5', label: __( 'extra large', 'bsx-blocks' ) },
                    ] }
                    help={ __( 'Inner spacer after', 'bsx-blocks' ) }
                />
            </InspectorAdvancedControls>,

            (
                <>
                    {
                        ! templateName ? (
                            <div class="bsxui-initial-inline-control">
                                <div class="bsxui-initial-inline-control-heading">
                                    { __( 'Please select Banner template', 'bsx-blocks' ) }
                                </div>
                                <div className="bsxui-icon-text-button-list">
                                    { templates.map( ( template, index ) => (
                                        <Button
                                            label={ template.title }
                                            onClick={ () => {
                                                onChangeTemplate( template.name );
                                            } }
                                            className={ 'bsxui-icon-text-button-list-item ' + ( templateName === template.name ? 'active' : '' ) }
                                        >
                                            <div class="bsxui-icon-text-button-list-item-icon">
                                                { template.icon }
                                            </div>
                                            <div class="bsxui-icon-text-button-list-item-label">
                                                { template.title }
                                            </div>
                                        </Button>
                                    ) ) }
                                </div>
                            </div>
                        )
                        : 
                        (
                            <TagName className={ bannerClassName } style={ bannerStyle }>
                                {
                                    ! imgId && (
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
                marginBefore,
                marginAfter,
                paddingBefore,
                paddingAfter,
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
            templateName,
        } );
        bannerClassName = addClassNames( {
            belowNavbar,
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
        } );

        const saveAttributes = makeSaveAttributes( {
            'data-srcset': srcsetJson,
        } );

        const TagName = nodeName;

        return (
            <TagName className={ bannerClassName } data-fn="lazyload" data-src={ url } { ...saveAttributes }>
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
