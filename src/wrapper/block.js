const { __, setLocaleData } = wp.i18n;
const {
    registerBlockType,
} = wp.blocks;
const {
    InnerBlocks,
    InspectorControls,
    InspectorAdvancedControls,
    BlockControls,
    AlignmentToolbar,
} = wp.blockEditor;
const { 
    PanelBody,
    SelectControl,
    ToggleControl,
} = wp.components;
const { 
    Fragment 
} = wp.element;


import { svgIcon } from './../_functions/wp-icons.js';
import { addClassNames } from './../_functions/add-class-names.js';
import { makeSaveAttributes } from './../_functions/attributes.js';
import { 
    belowNavbarToggle,
    touchFooterToggle,
    textShadowSelect,
    fontWeightSelect,
    inverseTextColorToggle,
    headingInheritTextColorToggle,
    headingInheritFontWeightToggle,
    marginLeftSelect,
    marginRightSelect,
    marginBeforeSelect,
    marginAfterSelect,
    resMarginBreakpointsSelect,
    resMarginPositionSelect,
    resMarginSizeSelect,
    paddingBeforeSelect,
    paddingAfterSelect,
    paddingLeftSelect,
    paddingRightSelect,
    stateSelect,
    textColorSelect,
    bgColorSelect,
    roundedToggle,
    borderSelect,
    borderStateSelect,
    displaySelect,
    verticalAlignSelect,
    dataFnInput,
    dataTgInput,
    dataFnOptionsInput,
    dataFnTargetInput,
    alertToggle,
    widthSelect,
    nodeNameSelect,
    isGalleryParentToggle,
    // linkUrlInput,
    // targetToggle,
    // relInput,
} from './../_functions/controls.js';


registerBlockType( 'bsx-blocks/wrapper', {
    title: __( 'BSX Wrapper', 'bsx-blocks' ),
    icon: svgIcon( 'wrapper' ),
    category: 'layout',
    attributes: {
        nodeName: {
            type: 'string',
            default: 'div',
        },
        id: {
            type: 'string',
        },
        dataFn: {
            type: 'string',
            // source: "attribute",
            // attribute: "data-fn",
        },
        dataFnOptions: {
            type: 'string',
            // source: "attribute",
            // attribute: "data-fn-options",
        },
        dataFnTarget: {
            type: 'string',
            // source: "attribute",
            // attribute: "data-fn-target",
        },
        dataTg: {
            type: 'string',
            // source: "attribute",
            // attribute: "data-tg",
        },
        belowNavbar: {
            type: 'boolean',
        },
        bgColor: {
            type: 'string',
        },
        textSize: {
            type: 'string',
        },
        textShadow: {
            type: 'string',
        },
        fontWeight: {
            type: 'string',
        },
        inverseTextColor: {
            type: 'boolean',
        },
        headingInheritTextColor: {
            type: 'boolean',
        },
        headingInheritFontWeight: {
            type: 'boolean',
        },
        rounded: {
            type: 'boolean',
            default: false,
        },
        textColor: {
            type: 'string',
        },
        textAlign: {
            type: 'string',
            default: '',
        },
        border: {
            type: 'string',
        },
        borderState: {
            type: 'string',
        },
        width: {
            type: 'string',
        },
        marginBefore: {
            type: 'string',
        },
        marginAfter: {
            type: 'string',
        },
        resMargin1Breakpoint: {
            type: 'string',
        },
        resMargin1Position: {
            type: 'string',
        },
        resMargin1Size: {
            type: 'string',
        },
        resMargin2Breakpoint: {
            type: 'string',
        },
        resMargin2Position: {
            type: 'string',
        },
        resMargin2Size: {
            type: 'string',
        },
        paddingBefore: {
            type: 'string',
        },
        paddingAfter: {
            type: 'string',
        },
        marginLeft: {
            type: 'string',
        },
        paddingRight: {
            type: 'string',
        },
        paddingLeft: {
            type: 'string',
        },
        paddingRight: {
            type: 'string',
        },
        touchFooter: {
            type: 'boolean',
        },
        display: {
            type: 'string',
        },
        verticalAlign: {
            type: 'string',
        },
        speechBubble: {
            type: 'string',
        },
        isAlert: {
            type: 'boolean',
        },
        state: {
            type: 'string',
        },
        isGalleryParent: {
            type: 'boolean',
        },
        // href: {
        //     type: 'string',
        //     source: "attribute",
        //     attribute: "href",
        // },
        // target: {
        //     type: 'string',
        //     source: "attribute",
        //     attribute: "target",
        // },
        // rel: {
        //     type: 'string',
        // },
    },

    getEditWrapperProps( attributes ) {
        const {
            textAlign,
            marginBefore,
            marginAfter,
            marginLeft,
            marginRight,
            resMargin1Breakpoint,
            resMargin1Position,
            resMargin1Size,
            resMargin2Breakpoint,
            resMargin2Position,
            resMargin2Size,
            paddingBefore,
            paddingAfter,
            paddingLeft,
            paddingRight,
            display,
            verticalAlign,
            isAlert,
            state,
        } = attributes;

        return {
            'data-text-align': textAlign,
            'data-margin-before': marginBefore,
            'data-margin-after': marginAfter,
            'data-margin-left': marginLeft,
            'data-margin-right': marginRight,
            'data-display': display,
            'data-vertical-align': verticalAlign,
            'data-is-alert': ( !! isAlert ? 'true' : 'false' ),
            'data-state': state,
        };
    },

    edit: ( props ) => {
        const {
            className,
            attributes: {
                nodeName,
                id,
                dataFn,
                dataFnOptions,
                dataFnTarget,
                dataTg,
                belowNavbar,
                bgColor,
                textColor,
                textSize,
                textAlign,
                textShadow,
                fontWeight,
                inverseTextColor,
                headingInheritTextColor,
                headingInheritFontWeight,
                width,
                rounded,
                border,
                borderState,
                marginBefore,
                marginAfter,
                marginLeft,
                marginRight,
                resMargin1Breakpoint,
                resMargin1Position,
                resMargin1Size,
                resMargin2Breakpoint,
                resMargin2Position,
                resMargin2Size,
                paddingBefore,
                paddingAfter,
                paddingLeft,
                paddingRight,
                touchFooter,
                display,
                verticalAlign,
                speechBubble,
                isAlert,
                state,
                isGalleryParent,
                // href,
                // target,
                // rel,
            },
            setAttributes,
        } = props;

        const onChangeNodeName = ( value ) => {
            setAttributes( { nodeName: value } );
        };

        const onChangeBelowNavbar = ( value ) => {
            setAttributes( { belowNavbar: value } );
        };

        const onChangeBgColor = ( value ) => {
            setAttributes( { bgColor: value } );
        };
        const onChangeTextColor = ( value ) => {
            setAttributes( { textColor: value } );
        };
        const onChangeState = ( value ) => {
            setAttributes( { state: value } );
        };
        const onChangeTextSize = ( value ) => {
            setAttributes( { textSize: value } );
        };
        const onChangeTextShadow = ( value ) => {
            setAttributes( { textShadow: value } );
        };
        const onChangeTextAlign = ( value ) => {
            setAttributes( { textAlign: value } );
        };
        const onChangeFontWeight = ( value ) => {
            setAttributes( { fontWeight: value } );
        };
        const onChangeInverseTextColor = ( value ) => {
            setAttributes( { inverseTextColor: value } );
        };

        const onChangeHeadingInheritTextColor = ( value ) => {
            setAttributes( { headingInheritTextColor: value } );
        };
        const onChangeHeadingInheritFontWeight = ( value ) => {
            setAttributes( { headingInheritFontWeight: value } );
        };

        const onChangeWidth = ( value ) => {
            setAttributes( { width: value } );
        };

        const onChangeRounded = ( value ) => {
            setAttributes( { rounded: value } );
        };
        const onChangeBorder = ( value ) => {
            setAttributes( { border: value } );
        };
        const onChangeBorderState = ( value ) => {
            setAttributes( { borderState: value } );
        };

        const onChangeIsAlert = ( value ) => {
            setAttributes( { isAlert: value } );
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

        const onChangeResMargin1Breakpoint = ( value ) => {
            setAttributes( { resMargin1Breakpoint: value } );
        };
        const onChangeResMargin1Position = ( value ) => {
            setAttributes( { resMargin1Position: value } );
        };
        const onChangeResMargin1Size = ( value ) => {
            setAttributes( { resMargin1Size: value } );
        };
        const onChangeResMargin2Breakpoint = ( value ) => {
            setAttributes( { resMargin2Breakpoint: value } );
        };
        const onChangeResMargin2Position = ( value ) => {
            setAttributes( { resMargin2Position: value } );
        };
        const onChangeResMargin2Size = ( value ) => {
            setAttributes( { resMargin2Size: value } );
        };

        const onChangePaddingBefore = ( value ) => {
            setAttributes( { paddingBefore: value } );
        };
        const onChangePaddingAfter = ( value ) => {
            setAttributes( { paddingAfter: value } );
        };
        const onChangePaddingLeft = ( value ) => {
            setAttributes( { paddingLeft: value } );
        };
        const onChangePaddingRight = ( value ) => {
            setAttributes( { paddingRight: value } );
        };
        const onChangeTouchFooter = ( value ) => {
            setAttributes( { touchFooter: value } );
        };
        const onChangeDisplay = ( value ) => {
            setAttributes( { display: value } );
        };
        const onChangeVerticalAlign = ( value ) => {
            setAttributes( { verticalAlign: value } );
        };
        const onChangeSpeechBubble = ( value ) => {
            setAttributes( { speechBubble: value } );
        };
        const onChangeDataFn = ( value ) => {
            setAttributes( { dataFn: value } );
        };
        const onChangeDataFnOptions = ( value ) => {
            setAttributes( { dataFnOptions: value } );
        };
        const onChangeDataFnTarget = ( value ) => {
            setAttributes( { dataFnTarget: value } );
        };
        const onChangeDataTg = ( value ) => {
            setAttributes( { dataTg: value } );
        };
        const onChangeIsGalleryParent = ( value ) => {
            setAttributes( { isGalleryParent: value } );
        };

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

        const wrapperClassName = addClassNames( { 
            belowNavbar,
            bgColor, 
            textColor, 
            textSize,
            rounded, 
            border,
            borderState,
            textAlign,
            textShadow,
            fontWeight,
            inverseTextColor,
            headingInheritTextColor,
            headingInheritFontWeight,
            width,
            marginBefore,
            marginAfter,
            marginLeft,
            marginRight,
            resMargin1Breakpoint,
            resMargin1Position,
            resMargin1Size,
            resMargin2Breakpoint,
            resMargin2Position,
            resMargin2Size,
            paddingBefore, 
            paddingAfter, 
            paddingLeft, 
            paddingRight,
            touchFooter,
            display,
            verticalAlign,
            speechBubble,
            isAlert,
            state,
        } );

        const TagName = nodeName;

        return [
            <Fragment>
                <BlockControls>
                    <AlignmentToolbar
                        label={ __( 'Alignment', 'bsx-blocks' ) }
                        value={ textAlign }
                        onChange={ onChangeTextAlign }
                        alignmentControls={ alignmentControls }
                    />
                </BlockControls>
                <InspectorControls>
                    <PanelBody title={ __( 'Texte', 'bsx-blocks' ) }>
                        {
                            textColorSelect( textColor, onChangeTextColor )
                        }
                        <SelectControl 
                            label={ __( 'Text size', 'bsx-blocks' ) }
                            value={ textSize }
                            onChange={ onChangeTextSize }
                            options={ [
                                { value: '', label: __( '– unset –', 'bsx-blocks' ) },
                                { value: 'lead', label: __( 'Larger', 'bsx-blocks' ) },
                                { value: 'small', label: __( 'Smaller', 'bsx-blocks' ) },
                                { value: 'h6', label: __( 'Heading 6 (smallest)', 'bsx-blocks' ) },
                                { value: 'h5', label: __( 'Heading 5', 'bsx-blocks' ) },
                                { value: 'h4', label: __( 'Heading 4', 'bsx-blocks' ) },
                                { value: 'h3', label: __( 'Heading 3', 'bsx-blocks' ) },
                                { value: 'h2', label: __( 'Heading 2', 'bsx-blocks' ) },
                                { value: 'h1', label: __( 'Heading 1 (biggest)', 'bsx-blocks' ) },
                                { value: 'display-4', label: __( 'Large 4 (smallest)', 'bsx-blocks' ) },
                                { value: 'display-3', label: __( 'Large 3', 'bsx-blocks' ) },
                                { value: 'display-2', label: __( 'Large 2', 'bsx-blocks' ) },
                                { value: 'display-1', label: __( 'Large 1 (biggest)', 'bsx-blocks' ) },
                            ] }
                        />
                        {
                            textShadowSelect( textShadow, onChangeTextShadow )
                        }
                        {
                            fontWeightSelect( fontWeight, onChangeFontWeight )
                        }
                        {
                            inverseTextColorToggle( inverseTextColor, onChangeInverseTextColor )
                        }
                        {
                            headingInheritTextColorToggle( headingInheritTextColor, onChangeHeadingInheritTextColor )
                        }
                        {
                            headingInheritFontWeightToggle( headingInheritFontWeight, onChangeHeadingInheritFontWeight )
                        }
                    </PanelBody>
                    <PanelBody title={ __( 'Appearance', 'bsx-blocks' ) }>
                        {
                            bgColorSelect( bgColor, onChangeBgColor )
                        }
                        {
                            roundedToggle( rounded, onChangeRounded )
                        }
                        {
                            borderSelect( border, onChangeBorder )
                        }
                        {
                            borderStateSelect( borderState, onChangeBorderState )
                        }
                        {
                            alertToggle( isAlert, onChangeIsAlert )
                        }
                        {
                            stateSelect( state, onChangeState )
                        }
                    </PanelBody>

                    <PanelBody title={ __( 'Margin', 'bsx-blocks' ) }>
                        {
                            marginBeforeSelect( marginBefore, onChangeMarginBefore )
                        }
                        {
                            marginAfterSelect( marginAfter, onChangeMarginAfter )
                        }
                        {
                            marginLeftSelect( marginLeft, onChangeMarginLeft )
                        }
                        {
                            marginRightSelect( marginRight, onChangeMarginRight )
                        }
                    </PanelBody>

                    <PanelBody title={ __( 'Padding', 'bsx-blocks' ) }>
                        {
                            paddingBeforeSelect( paddingBefore, onChangePaddingBefore )
                        }
                        {
                            paddingAfterSelect( paddingAfter, onChangePaddingAfter )
                        }
                        {
                            paddingLeftSelect( paddingLeft, onChangePaddingLeft )
                        }
                        {
                            paddingRightSelect( paddingRight, onChangePaddingRight )
                        }
                    </PanelBody>
                </InspectorControls>
                <InspectorAdvancedControls>
                    {
                        nodeNameSelect( nodeName, onChangeNodeName, [ 'div', 'section', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' ] )
                    }
                    {
                        displaySelect( display, onChangeDisplay )
                    }
                    {
                        verticalAlignSelect( verticalAlign, onChangeVerticalAlign )
                    }
                    {
                        widthSelect( width, onChangeWidth )
                    }
                    <SelectControl 
                        label={ __( 'Speech bubble', 'bsx-blocks' ) }
                        value={ speechBubble }
                        onChange={ onChangeSpeechBubble }
                        options={ [
                            { value: '', label: __( '– unset –', 'bsx-blocks' ) },
                            { value: 'sm', label: __( 'Small', 'bsx-blocks' ) },
                            { value: 'md', label: __( 'Medium', 'bsx-blocks' ) },
                            { value: 'lg', label: __( 'Large', 'bsx-blocks' ) },
                        ] }
                    />
                    {
                        belowNavbarToggle( belowNavbar, onChangeBelowNavbar )
                    }
                    {
                        touchFooterToggle( touchFooter, onChangeTouchFooter )
                    }
                    {
                        resMarginBreakpointsSelect( resMargin1Breakpoint, onChangeResMargin1Breakpoint, [], '1' )
                    }
                    {
                        resMarginPositionSelect( resMargin1Position, onChangeResMargin1Position, [], '1' )
                    }
                    {
                        resMarginSizeSelect( resMargin1Size, onChangeResMargin1Size, [], '1' )
                    }
                    {
                        resMarginBreakpointsSelect( resMargin2Breakpoint, onChangeResMargin2Breakpoint, [], '2' )
                    }
                    {
                        resMarginPositionSelect( resMargin2Position, onChangeResMargin2Position, [], '2' )
                    }
                    {
                        resMarginSizeSelect( resMargin2Size, onChangeResMargin2Size, [], '2' )
                    }
                    {
                        isGalleryParentToggle( isGalleryParent, onChangeIsGalleryParent )
                    }
                    {
                        ! isGalleryParent ? 
                        (
                            <>
                                {
                                    dataFnInput( dataFn, onChangeDataFn )
                                }
                            </>
                        )
                        :
                        (
                            <div class="bsxui-config-panel-row">
                                <div class="bsxui-alert">
                                    {
                                        __( 'dataFn is deactivated since element is image gallery parent.', 'bsx-blocks' ) 
                                    }
                                </div>
                            </div>
                        )
                    }
                    {
                        dataFnOptionsInput( dataFnOptions, onChangeDataFnOptions )
                    }
                    {
                        dataFnTargetInput( dataFnTarget, onChangeDataFnTarget )
                    }
                    {
                        dataTgInput( dataTg, onChangeDataTg )
                    }
                </InspectorAdvancedControls>
            </Fragment>,
            (
                <TagName className={ wrapperClassName }>
                    <InnerBlocks />
                </TagName>
            )
        ];
    },
    save: ( props ) => {
        const {
            className,
            attributes: {
                nodeName,
                id,
                dataFn,
                dataFnOptions,
                dataFnTarget,
                dataTg,
                belowNavbar,
                bgColor,
                textColor,
                textSize,
                textAlign,
                textShadow,
                fontWeight,
                inverseTextColor,
                headingInheritTextColor,
                headingInheritFontWeight,
                width,
                rounded,
                border,
                borderState,
                marginBefore,
                marginAfter,
                marginLeft,
                marginRight,
                resMargin1Breakpoint,
                resMargin1Position,
                resMargin1Size,
                resMargin2Breakpoint,
                resMargin2Position,
                resMargin2Size,
                paddingBefore,
                paddingAfter,
                paddingLeft,
                paddingRight,
                touchFooter,
                display,
                verticalAlign,
                speechBubble,
                isAlert,
                state,
                isGalleryParent,
                // href,
                // target,
                // rel,
            },
            setAttributes,
        } = props;

        const wrapperClassName = addClassNames( { 
            belowNavbar,
            bgColor, 
            textColor, 
            textSize,
            rounded, 
            border,
            borderState,
            textAlign,
            textShadow,
            fontWeight,
            inverseTextColor,
            headingInheritTextColor,
            headingInheritFontWeight,
            width,
            marginBefore,
            marginAfter,
            marginLeft,
            marginRight,
            resMargin1Breakpoint,
            resMargin1Position,
            resMargin1Size,
            resMargin2Breakpoint,
            resMargin2Position,
            resMargin2Size,
            paddingBefore, 
            paddingAfter, 
            paddingLeft, 
            paddingRight,
            touchFooter,
            display,
            verticalAlign,
            speechBubble,
            isAlert,
            state,
        } );

        const saveAttributes = makeSaveAttributes( {
            // href: href, 
            // target: ref ? target : '', 
            // rel: href ? ( rel ? rel + ' noopener noreferrer' : 'noopener noreferrer' ) : '',
            'data-fn': ( isGalleryParent ) ? 'photoswipe' : dataFn,
            'data-fn-options': dataFnOptions,
            'data-fn-target': dataFnTarget,
            'data-tg': dataTg,
        } );

        const TagName = nodeName;

        return (
            <TagName className={ wrapperClassName }{ ...saveAttributes }>
                <InnerBlocks.Content />
            </TagName>
        );
    },
} );
