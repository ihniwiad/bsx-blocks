
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


import { 
    marginAfterSelect,
    imgUploadButton,
    textAlignToolbar,
    // linkUrlInput,
    // targetToggle,
    // relInput,
    // dataFnInput,
    scaleSelect,
} from './../_functions/controls.js';

import { svgIcon } from './../_functions/wp-icons.js';

import { addClassNames } from './../_functions/add-class-names.js';

import { makeSaveAttributes } from './../_functions/attributes.js';

import {
    getFileSuffix,
    getFileName,
} from './../_functions/utilities.js';


/*

<video class="img-fluid align-middle" autoplay="" loop="" playsinline="" muted="" poster="https://linku.digital/wp-content/uploads/2021/10/linku-scan-card-animation-005-ae-poster.png" width="555" height="480">
    <source src="https://linku.digital/wp-content/uploads/2022/01/linku-scan-card-animation-006a.mov" type="video/mp4; codecs=hvc1">
    <source src="https://linku.digital/wp-content/uploads/2022/01/linku-scan-card-animation-006a.webm" type="video/webm">
    Your browser does not support HTML video.
</video>

*/


registerBlockType( 'bsx-blocks/video', {
    title: __( 'BSX Video', 'bsx-blocks' ),
    icon: svgIcon( 'video' ),
    category: 'layout',
    attributes: {
        notHasFigure: {
            boolean: 'string',
        },
        figcaption: {
            type: 'array',
            source: 'children',
            selector: 'figcaption',
        },
        videoId: {
            type: 'number',
        },
        videoUrl: {
            type: 'string',
            selector: "source:first-of-type",
            source: "attribute",
            attribute: "src",
        },
        videoIsHvc1: {
            type: 'boolean',
        },
        video2Id: {
            type: 'number',
        },
        video2Url: {
            type: 'string',
            selector: "source:last-of-type",
            source: "attribute",
            attribute: "src",
        },
        videoWidth: {
            type: 'number',
        },
        videoHeight: {
            type: 'number',
        },
        posterId: {
            type: 'number',
        },
        posterUrl: {
            type: 'string',
            selector: "video",
            source: "attribute",
            attribute: "poster",
        },
        scale: {
            type: 'number',
        },
        displayedWidth: {
            type: 'text',
            selector: "video",
            source: "attribute",
            attribute: "width",
        },
        displayedHeight: {
            type: 'text',
            selector: "video",
            source: "attribute",
            attribute: "height",
        },
        controls: {
            type: 'boolean',
            selector: "video",
            source: "attribute",
            attribute: "controls",
        },
        autoplay: {
            type: 'boolean',
            selector: "video",
            source: "attribute",
            attribute: "autoplay",
            default: true,
        },
        playsinline: {
            type: 'boolean',
            selector: "video",
            source: "attribute",
            attribute: "playsinline",
            default: true,
        },
        loop: {
            type: 'boolean',
            selector: "video",
            source: "attribute",
            attribute: "loop",
            default: true,
        },
        muted: {
            type: 'boolean',
            selector: "video",
            source: "attribute",
            attribute: "muted",
            default: true,
        },
        textAlign: {
            type: 'string',
        },
        marginAfter: {
            type: 'string',
        },
    },
    edit: ( props ) => {
        const {
            // className,
            attributes: {
                className,
                notHasFigure,
                figcaption,
                videoId,
                videoUrl,
                videoIsHvc1,
                video2Id,
                video2Url,
                videoWidth,
                videoHeight,
                posterId,
                posterUrl,
                scale,
                displayedWidth,
                displayedHeight,
                controls,
                autoplay,
                playsinline,
                loop,
                muted,
                textAlign,
                marginAfter,
            },
            setAttributes,
        } = props;

        const onChangeNotHasFigure = ( value ) => {
            if ( !! value ) {
                setAttributes( { 
                    notHasFigure: value,
                    textAlign: '',
                    figcaption: '',
                } );
            }
            else {
                setAttributes( { 
                    notHasFigure: value,
                } );
            }
        };
        const onChangeFigcaption = ( value ) => {
            setAttributes( { figcaption: value } );
        };

        const onSelectVideo = ( video ) => {

            if ( typeof video.url !== 'undefined' ) {

                setAttributes( { 
                    videoId: video.id,
                    videoUrl: video.url,
                    videoWidth: parseFloat( video.width ),
                    videoHeight: parseFloat( video.height ),
                    displayedWidth: !! scale ? scale * parseFloat( video.width ) : parseFloat( video.width ),
                    displayedHeight: !! scale ? scale * parseFloat( video.height ) : parseFloat( video.height ),
                } );

            }
        }

        const onChangeVideoIsHvc1 = ( value ) => {
            setAttributes( { videoIsHvc1: value } );
        };

        const onSelectVideo2 = ( video ) => {

            if ( typeof video.url !== 'undefined' ) {

                setAttributes( { 
                    video2Id: video.id,
                    video2Url: video.url,
                } );

            }
        }

        const onDeleteVideo2 = () => {
            setAttributes( { 
                video2Id: '',
                video2Url: '',
            } );
        }

        const onSelectPosterImage = ( img ) => {

            if ( typeof img.url !== 'undefined' ) {

                setAttributes( { 
                    posterId: img.id,
                    posterUrl: img.url,
                } );

            }
        }

        const onDeletePosterImage = () => {
            setAttributes( {
                posterId: '',
                posterUrl: '',
            } );
        };

        const onChangeScale = ( value ) => {
            setAttributes( { 
                scale: parseFloat( value ),
                displayedWidth: !! value ? Math.round( videoWidth * parseFloat( value ) ) : videoWidth,
                displayedHeight: !! value ? Math.round( videoHeight * parseFloat( value ) ) : videoHeight,
            } );
        };
        const onChangeDisplayedWidth = ( value ) => {
            setAttributes( { 
                displayedWidth: parseFloat( value ),
                displayedHeight: Math.round( value / videoWidth * videoHeight ),
                scale: parseFloat( value / videoWidth ),
            } );
        };
        const onChangeDisplayedHeight = ( value ) => {
            setAttributes( { 
                displayedHeight: parseFloat( value ),
                displayedWidth: Math.round( value / videoHeight * videoWidth ),
                scale: parseFloat( value / videoHeight ),
            } );
        };

        const onChangeControls = ( value ) => {
            setAttributes( { controls: value } );
        };
        const onChangeAutoplay = ( value ) => {
            setAttributes( { autoplay: value } );
        };
        const onChangePlaysinline = ( value ) => {
            setAttributes( { playsinline: value } );
        };
        const onChangeLoop = ( value ) => {
            setAttributes( { loop: value } );
        };
        const onChangeMuted = ( value ) => {
            setAttributes( { muted: value } );
        };

        const onChangeTextAlign = ( value ) => {
            setAttributes( { textAlign: value } );
        };

        const onChangeMarginAfter = ( value ) => {
            setAttributes( { marginAfter: value } );
        };


        // class names

        const outerClassNames = addClassNames( {
            textAlign,
            marginAfter,
        }, className );

        let videoClassNames = 'img-fluid align-middle';
        if ( !! notHasFigure ) {
            videoClassNames += !! outerClassNames ? ' ' + outerClassNames : '';
        }

        // video attributes

        // set controls always true within editor
        const videoSaveAttributes = makeSaveAttributes( {
            'controls': true,
            'autoplay': autoplay,
            'loop': loop,
            'playsinline': playsinline,
            'muted': muted,
            'poster': posterUrl,
            'width': !! displayedWidth ? displayedWidth : !! scale ? scale * videoWidth : videoWidth,
            'height': !! displayedHeight ? displayedHeight : !! scale ? scale * videoHeight : videoHeight,
        } );

        // video html

        const videoFileSuffix = getFileSuffix( videoUrl );
        const videoType = ( videoFileSuffix == 'mov' && videoIsHvc1 ) ? 'video/mp4; codecs=hvc1' : 'video/' + videoFileSuffix;
        const video2Type = 'video/' + getFileSuffix( video2Url );

        const video = (
            <video className={ videoClassNames } { ...videoSaveAttributes }>
                <source src={ videoUrl } type={ videoType }/>
                {
                    video2Url && (
                        <source src={ video2Url } type={ video2Type }/>
                    )
                }
                Your browser does not support HTML video.
            </video>
        );

        const video1Only = (
            <video className={ videoClassNames } { ...videoSaveAttributes }>
                <source src={ videoUrl } type={ videoType }/>
                Your browser does not support HTML video.
            </video>
        );
        const video2Only = (
            <video className={ videoClassNames } { ...videoSaveAttributes }>
                <source src={ video2Url } type={ video2Type }/>
                Your browser does not support HTML video.
            </video>
        );

        return [
            <BlockControls>
                { ! notHasFigure && textAlignToolbar( textAlign, onChangeTextAlign ) }
            </BlockControls>,
            <InspectorControls>
                <PanelBody title={ __( 'Video', 'bsx-blocks' ) }>
                    <div class="bsxui-config-panel-row">
                        <div class="bsxui-alert">
                            { __( 'If using transparency (alpha) put 1st mov file with HVC1 Codec active and 2nd webm file.', 'bsx-blocks' ) }
                        </div>
                    </div>
                    <div class="bsxui-config-panel-row">
                        {
                            videoId ? (
                                <>
                                    <MediaUpload
                                        onSelect={ onSelectVideo }
                                        allowedTypes="video"
                                        value={ videoId }
                                        render={ ( { open } ) => (
                                            <Button
                                                className="bsxui-config-panel-img-button has-margin-bottom"
                                                onClick={ open }
                                            >
                                                { video1Only }
                                            </Button>
                                        ) }
                                    />
                                    <div class="bsxui-config-panel-row">
                                        <div class="bsxui-config-panel-text">{ getFileName( videoUrl ) }</div>
                                    </div>
                                </>
                            )
                            : 
                            (
                                <div class="bsxui-config-panel-row">
                                    <div class="bsxui-config-panel-text">{ __( '– No video selected yet –', 'bsx-blocks' ) }</div>
                                </div>
                            )
                        }
                        <MediaUpload
                            onSelect={ onSelectVideo }
                            allowedTypes="video"
                            value={ videoId }
                            render={ ( { open } ) => (
                                <Button 
                                    onClick={ open }
                                    isSecondary
                                >
                                    { __( 'Change / upload video', 'bsx-blocks' ) }
                                </Button>
                            ) }
                        />
                    </div>
                    {
                        videoId && (
                            <ToggleControl
                                label={ __( 'Video is HVC1 Codec (mov file with alpha)', 'bsx-blocks' ) }
                                checked={ !! videoIsHvc1 }
                                onChange={ onChangeVideoIsHvc1 }
                            />
                        )
                    }
                    <div class="bsxui-config-panel-row">
                        {
                            video2Id ? (
                                <>
                                    <MediaUpload
                                        onSelect={ onSelectVideo2 }
                                        allowedTypes="video"
                                        value={ video2Id }
                                        render={ ( { open } ) => (
                                            <Button
                                                className="bsxui-config-panel-img-button has-margin-bottom"
                                                onClick={ open }
                                            >
                                                { video2Only }
                                            </Button>
                                        ) }
                                    />
                                    <div class="bsxui-config-panel-row">
                                        <div class="bsxui-config-panel-text">{ getFileName( video2Url ) }</div>
                                    </div>
                                </>
                            )
                            : 
                            (
                                <div class="bsxui-config-panel-row">
                                    <div class="bsxui-config-panel-text">{ __( '– No video 2 selected yet –', 'bsx-blocks' ) }</div>
                                </div>
                            )
                        }
                        {
                            videoId && (
                                <MediaUpload
                                    onSelect={ onSelectVideo2 }
                                    allowedTypes="video"
                                    value={ video2Id }
                                    render={ ( { open } ) => (
                                        <Button 
                                            onClick={ open }
                                            isSecondary
                                        >
                                            { __( 'Change / upload video 2', 'bsx-blocks' ) }
                                        </Button>
                                    ) }
                                />
                            )
                        }
                    </div>
                    {
                        video2Id && (
                            <div class="bsxui-config-panel-row">
                                <Button 
                                    onClick={ onDeleteVideo2 }
                                    isDestructive={ true }
                                >
                                    { __( 'Remove video 2', 'bsx-blocks' ) }
                                </Button>
                            </div>
                        )
                    }
                </PanelBody>
                     
                <PanelBody title={ __( 'Video settings', 'bsx-blocks' ) }>

                    <ToggleControl
                        label={ __( 'Controls', 'bsx-blocks' ) }
                        checked={ !! controls }
                        onChange={ onChangeControls }
                    />
                    <ToggleControl
                        label={ __( 'Autoplay', 'bsx-blocks' ) }
                        checked={ !! autoplay }
                        onChange={ onChangeAutoplay }
                    />
                    <ToggleControl
                        label={ __( 'Playsinline', 'bsx-blocks' ) }
                        checked={ !! playsinline }
                        onChange={ onChangePlaysinline }
                    />
                    <ToggleControl
                        label={ __( 'Loop', 'bsx-blocks' ) }
                        checked={ !! loop }
                        onChange={ onChangeLoop }
                    />
                    <ToggleControl
                        label={ __( 'Muted', 'bsx-blocks' ) }
                        checked={ !! muted }
                        onChange={ onChangeMuted }
                    />
                </PanelBody>

                <PanelBody title={ __( 'Poster image (recommended)', 'bsx-blocks' ) }>
                    {
                        posterId ? (
                            <MediaUpload
                                onSelect={ onSelectPosterImage }
                                allowedTypes="image"
                                value={ posterId }
                                render={ ( { open } ) => (
                                    <Button
                                        className="bsxui-config-panel-img-button has-margin-bottom"
                                        onClick={ open }
                                    >
                                        <img class="bsxui-config-panel-img" src={ posterUrl } alt={ __( 'Change / upload poster image', 'bsx-blocks' ) } />
                                    </Button>
                                ) }
                            />
                        )
                        : 
                        (
                            <div class="bsxui-config-panel-row">
                                <div class="bsxui-config-panel-text">{ __( '– No poster image selected yet –', 'bsx-blocks' ) }</div>
                            </div>
                        )
                    }
                    <div class="bsxui-config-panel-row">
                        <MediaUpload
                            onSelect={ onSelectPosterImage }
                            allowedTypes="image"
                            value={ posterId }
                            render={ ( { open } ) => (
                                <Button 
                                    onClick={ open }
                                    isSecondary
                                >
                                    { __( 'Change / upload poster image', 'bsx-blocks' ) }
                                </Button>
                            ) }
                        />
                    </div>
                    {
                        posterId && (
                            <div class="bsxui-config-panel-row">
                                <Button 
                                    onClick={ onDeletePosterImage }
                                    isDestructive={ true }
                                >
                                    { __( 'Remove poster image', 'bsx-blocks' ) }
                                </Button>
                            </div>
                        )
                    }
                </PanelBody>
                     
                <PanelBody title={ __( 'Dimensions', 'bsx-blocks' ) }>
                    <TextControl 
                        label={ __( 'Displayed width', 'bsx-blocks' ) }
                        value={ displayedWidth + '' } 
                        onChange={ onChangeDisplayedWidth }
                    />
                    <TextControl 
                        label={ __( 'Displayed height', 'bsx-blocks' ) }
                        value={ displayedHeight + '' } 
                        onChange={ onChangeDisplayedHeight }
                    />
                    {
                        scaleSelect( scale, onChangeScale )
                    }
                </PanelBody>

                <PanelBody title={ __( 'Margin (optional)', 'bsx-blocks' ) }>
                    {
                        marginAfterSelect( marginAfter, onChangeMarginAfter )
                    }
                </PanelBody>

            </InspectorControls>,
            <InspectorAdvancedControls>
                <ToggleControl
                    label={ __( 'Not wrapped by figure', 'bsx-blocks' ) }
                    checked={ !! notHasFigure }
                    onChange={ onChangeNotHasFigure }
                />
            </InspectorAdvancedControls>,
            (
                <figure className={ outerClassNames }>
                    {
                        videoId ? (
                            <>
                                { video }
                            </>
                        )
                        : 
                        (
                            <div className={ 'bsxui-img-upload-placeholder-empty' }>
                                <MediaUpload
                                    onSelect={ onSelectVideo }
                                    allowedTypes="video"
                                    value={ videoId }
                                    render={ ( { open } ) => (
                                        <Button 
                                            onClick={ open }
                                            isSecondary
                                            className={ 'bsxui-banner-button' }
                                            title={ __( 'Select / upload video', 'bsx-blocks' ) }
                                        >
                                            { svgIcon( 'video-placeholder' ) }
                                        </Button>
                                    ) }
                                />
                            </div>
                        )
                    }
                    {
                        ! notHasFigure && (
                            <RichText
                                tagName="figcaption"
                                multiline={ false }
                                placeholder={ __( 'Caption (optional)', 'bsx-blocks' ) }
                                value={ figcaption }
                                onChange={ onChangeFigcaption }
                            />
                        )
                    }
                </figure>
            )
        ];
    },

    save: ( props ) => {
        const {
            // className,
            attributes: {
                className,
                notHasFigure,
                figcaption,
                videoId,
                videoUrl,
                videoIsHvc1,
                video2Id,
                video2Url,
                videoWidth,
                videoHeight,
                posterId,
                posterUrl,
                scale,
                displayedWidth,
                displayedHeight,
                controls,
                autoplay,
                playsinline,
                loop,
                muted,
                textAlign,
                marginAfter,
            },
        } = props;


        // class names

        const outerClassNames = addClassNames( {
            textAlign,
            marginAfter,
        }, className );

        let videoClassNames = 'img-fluid align-middle';
        if ( !! notHasFigure ) {
            videoClassNames += !! outerClassNames ? ' ' + outerClassNames : '';
        }

        // video attributes

        const videoSaveAttributes = makeSaveAttributes( {
            'controls': controls,
            'autoplay': autoplay,
            'loop': loop,
            'playsinline': playsinline,
            'muted': muted,
            'poster': posterUrl,
            'width': !! displayedWidth ? displayedWidth : !! scale ? scale * videoWidth : videoWidth,
            'height': !! displayedHeight ? displayedHeight : !! scale ? scale * videoHeight : videoHeight,
        } );

        const videoFileSuffix = getFileSuffix( videoUrl );
        const videoType = ( videoFileSuffix == 'mov' && videoIsHvc1 ) ? 'video/mp4; codecs=hvc1' : 'video/' + videoFileSuffix;
        const video2Type = 'video/' + getFileSuffix( video2Url );

        // video html

        const video = (
            <video className={ videoClassNames } { ...videoSaveAttributes }>
                <source src={ videoUrl } type={ videoType }/>
                {
                    video2Url && (
                        <source src={ video2Url } type={ video2Type }/>
                    )
                }
                Your browser does not support HTML video.
            </video>
        );

        return (
            <>
                {
                    ! notHasFigure ? (
                        <figure className={ outerClassNames }>

                            {
                                !! videoUrl && (
                                    <>
                                        { video }
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
                    : (
                        <>
                            { video }
                        </>
                    )
                }
            </>
        );
    },
} );
