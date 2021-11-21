
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


/*

<video class="img-fluid align-middle" autoplay="" loop="" playsinline="" muted="" poster="/wp-content/uploads/2021/10/linku-scan-card-animation-005-ae-poster.png" width="555" height="480">
    <source src="/wp-content/uploads/2021/10/linku-scan-card-animation-005-ae.webm" type="video/webm">
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
            selector: "video",
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

        // get file extension from url
        // const videoType = !! videoUrl ? 'video/' + videoUrl.slice( - ( videoUrl.length - videoUrl.lastIndexOf( "." ) - 1 ) ) : '';

        // editor semms not to like source tag, but accepts src attribute
        const video = (
            <video className={ videoClassNames } src={ videoUrl } { ...videoSaveAttributes }></video>
        );

        return [
            <BlockControls>
                { ! notHasFigure && textAlignToolbar( textAlign, onChangeTextAlign ) }
            </BlockControls>,
            <InspectorControls>
                <PanelBody title={ __( 'Video', 'bsx-blocks' ) }>
                    <div class="bsxui-config-panel-row">
                        {
                            videoId ? (
                                <MediaUpload
                                    onSelect={ onSelectVideo }
                                    allowedTypes="video"
                                    value={ videoId }
                                    render={ ( { open } ) => (
                                        <Button
                                            className="bsxui-config-panel-img-button has-margin-bottom"
                                            onClick={ open }
                                        >
                                            { video }
                                        </Button>
                                    ) }
                                />
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

        // video html

        // get file extension from url
        // const videoType = !! videoUrl ? 'video/' + videoUrl.slice( - ( videoUrl.length - videoUrl.lastIndexOf( "." ) - 1 ) ) : '';

        const video = (
            <video className={ videoClassNames } src={ videoUrl } { ...videoSaveAttributes }>
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
