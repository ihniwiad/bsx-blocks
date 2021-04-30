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
    paddingBeforeSelect,
    paddingAfterSelect,
    paddingLeftSelect,
    paddingRightSelect,
    bgColorSelect,
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
        },
        dataTg: {
            type: 'string',
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
        width: {
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
        paddingBefore: {
            type: 'string',
            default: '',
        },
        paddingAfter: {
            type: 'string',
            default: '',
        },
        paddingLeft: {
            type: 'string',
            default: '',
        },
        paddingRight: {
            type: 'string',
            default: '',
        },
        touchFooter: {
            type: 'boolean',
        },
    },

    getEditWrapperProps( attributes ) {
        const {
            textAlign,
            marginBefore,
            marginAfter,
        } = attributes;

        return {
            'data-text-align': textAlign,
            'data-margin-before': marginBefore,
            'data-margin-after': marginAfter,
        };
    },

    edit: ( props ) => {
        const {
            className,
            attributes: {
                nodeName,
                id,
                dataFn,
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
                marginBefore,
                marginAfter,
                paddingBefore,
                paddingAfter,
                paddingLeft,
                paddingRight,
                touchFooter,
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
        const onChangePaddingLeft = ( value ) => {
            setAttributes( { paddingLeft: value } );
        };
        const onChangePaddingRight = ( value ) => {
            setAttributes( { paddingRight: value } );
        };
        const onChangeTouchFooter = ( value ) => {
            setAttributes( { touchFooter: value } );
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
            textAlign,
            textShadow,
            fontWeight,
            inverseTextColor,
            headingInheritTextColor,
            headingInheritFontWeight,
            width,
            marginBefore, 
            marginAfter, 
            paddingBefore, 
            paddingAfter, 
            paddingLeft, 
            paddingRight,
            touchFooter,
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
                    <PanelBody title={ __( 'Color & appearance', 'bsx-blocks' ) }>
                        {
                            bgColorSelect( bgColor, onChangeBgColor )
                        }
                        <SelectControl 
                            label={ __( 'Text color (optional)', 'bsx-blocks' ) }
                            value={ textColor }
                            onChange={ onChangeTextColor }
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
                                { value: 'white-50', label: __( 'White transparent', 'bsx-blocks' ) },
                                { value: 'black-50', label: __( 'Black transparent', 'bsx-blocks' ) },
                            ] }
                        />
                        <SelectControl 
                            label={ __( 'Text size (optional)', 'bsx-blocks' ) }
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
                        <ToggleControl
                            label={ __( 'Rounded', 'bsx-blocks' ) }
                            checked={ !! rounded }
                            onChange={ onChangeRounded }
                        />
                    </PanelBody>

                    <PanelBody title={ __( 'Margin', 'bsx-blocks' ) }>
                        {
                            marginBeforeSelect( marginBefore, onChangeMarginBefore )
                        }
                        {
                            marginAfterSelect( marginAfter, onChangeMarginAfter )
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
                    <SelectControl 
                        label={ __( 'Node name', 'bsx-blocks' ) }
                        value={ nodeName }
                        onChange={ onChangeNodeName }
                        options={ [
                            { value: 'div', label: __( 'div', 'bsx-blocks' ) },
                            { value: 'section', label: __( 'section', 'bsx-blocks' ) },
                        ] }
                    />
                    <SelectControl 
                        label={ __( 'Width', 'bsx-blocks' ) }
                        value={ width }
                        onChange={ onChangeWidth }
                        options={ [
                            { value: '', label: __( '– unset –', 'bsx-blocks' ) },
                            { value: '100', label: __( '100 %', 'bsx-blocks' ) },
                        ] }
                    />
                    {
                        belowNavbarToggle( belowNavbar, onChangeBelowNavbar )
                    }
                    {
                        touchFooterToggle( touchFooter, onChangeTouchFooter )
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
                marginBefore,
                marginAfter,
                paddingBefore,
                paddingAfter,
                paddingLeft,
                paddingRight,
                touchFooter,
            },
            setAttributes,
        } = props;

        const wrapperClassName = addClassNames( { 
            belowNavbar,
            bgColor, 
            textColor, 
            textSize,
            rounded, 
            textAlign,
            textShadow,
            fontWeight,
            inverseTextColor,
            headingInheritTextColor,
            headingInheritFontWeight,
            width,
            marginBefore, 
            marginAfter, 
            paddingBefore, 
            paddingAfter, 
            paddingLeft, 
            paddingRight,
            touchFooter,
        } );

        const TagName = nodeName;

        return (
            <TagName className={ wrapperClassName }>
                <InnerBlocks.Content />
            </TagName>
        );
    },
} );
