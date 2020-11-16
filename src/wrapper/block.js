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


import { addClassNames } from './../_functions/add-class-names.js';


// TODO: add text align, border, border-color (add to `add-class-names.js`, too)


registerBlockType( 'bsx-blocks/wrapper', {
    title: __( 'BSX Wrapper', 'bsx-blocks' ),
    icon: 'marker',
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
        bgColor: {
            type: 'string',
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
                bgColor,
                textColor,
                textAlign,
                rounded,
                marginBefore,
                marginAfter,
                paddingBefore,
                paddingAfter,
                paddingLeft,
                paddingRight,
            },
            setAttributes,
        } = props;

        const onChangeNodeName = ( value ) => {
            setAttributes( { nodeName: value } );
        };

        const onChangeBgColor = ( value ) => {
            setAttributes( { bgColor: value } );
        };
        const onChangeTextColor = ( value ) => {
            setAttributes( { textColor: value } );
        };
        const onChangeTextAlign = ( value ) => {
            setAttributes( { textAlign: value } );
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
            bgColor: bgColor, 
            textColor: textColor, 
            rounded: rounded, 
            textAlign: textAlign,
            marginBefore: marginBefore, 
            marginAfter: marginAfter, 
            paddingBefore: paddingBefore, 
            paddingAfter: paddingAfter, 
            paddingLeft: paddingLeft, 
            paddingRight: paddingRight,
        } );

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
                        <SelectControl 
                            label={ __( 'Background color', 'bsx-blocks' ) }
                            value={ bgColor }
                            onChange={ onChangeBgColor }
                            options={ [
                                { value: '', label: __( '– unset –', 'bsx-blocks' ) },
                                { value: 'white', label: __( 'White', 'bsx-blocks' ) },
                                { value: 'white-opaque', label: __( 'White opaque', 'bsx-blocks' ) },
                                { value: 'white-transparent', label: __( 'White transparent', 'bsx-blocks' ) },
                                { value: 'black', label: __( 'Black', 'bsx-blocks' ) },
                                { value: 'black-opaque', label: __( 'Black opaque', 'bsx-blocks' ) },
                                { value: 'black-transparent', label: __( 'Black transparent', 'bsx-blocks' ) },
                                { value: 'primary', label: __( 'Primary', 'bsx-blocks' ) },
                                { value: 'primary-opaque', label: __( 'Primary opaque', 'bsx-blocks' ) },
                                { value: 'primary-transparent', label: __( 'Primary transparent', 'bsx-blocks' ) },
                                { value: 'secondary', label: __( 'Secondary', 'bsx-blocks' ) },
                                { value: 'secondary-opaque', label: __( 'Secondary opaque', 'bsx-blocks' ) },
                                { value: 'secondary-transparent', label: __( 'Secondary transparent', 'bsx-blocks' ) },
                                { value: 'success', label: __( 'Success', 'bsx-blocks' ) },
                                { value: 'success-opaque', label: __( 'Success opaque', 'bsx-blocks' ) },
                                { value: 'success-transparent', label: __( 'Success transparent', 'bsx-blocks' ) },
                                { value: 'danger', label: __( 'Danger', 'bsx-blocks' ) },
                                { value: 'danger-opaque', label: __( 'Danger opaque', 'bsx-blocks' ) },
                                { value: 'danger-transparent', label: __( 'Danger transparent', 'bsx-blocks' ) },
                                { value: 'warning', label: __( 'Warning', 'bsx-blocks' ) },
                                { value: 'warning-opaque', label: __( 'Warning opaque', 'bsx-blocks' ) },
                                { value: 'warning-transparent', label: __( 'Warning transparent', 'bsx-blocks' ) },
                                { value: 'info', label: __( 'Info', 'bsx-blocks' ) },
                                { value: 'info-opaque', label: __( 'Info opaque', 'bsx-blocks' ) },
                                { value: 'info-transparent', label: __( 'Info transparent', 'bsx-blocks' ) },
                                { value: 'light', label: __( 'Light', 'bsx-blocks' ) },
                                { value: 'light-opaque', label: __( 'Light opaque', 'bsx-blocks' ) },
                                { value: 'light-transparent', label: __( 'Light transparent', 'bsx-blocks' ) },
                                { value: 'dark', label: __( 'Dark', 'bsx-blocks' ) },
                                { value: 'dark-opaque', label: __( 'Dark opaque', 'bsx-blocks' ) },
                                { value: 'dark-transparent', label: __( 'Dark transparent', 'bsx-blocks' ) },
                                { value: 'transparent', label: __( 'Transparent', 'bsx-blocks' ) },
                            ] }
                            help={ __( 'Spacer before Container', 'bsx-blocks' ) }
                        />
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
                        <ToggleControl
                            label={ __( 'Rounded', 'bsx-blocks' ) }
                            checked={ !! rounded }
                            onChange={ onChangeRounded }
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
                            help={ __( 'Spacer before Container', 'bsx-blocks' ) }
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
                            help={ __( 'Spacer after Container', 'bsx-blocks' ) }
                        />
                    </PanelBody>

                    <PanelBody title={ __( 'Padding', 'bsx-blocks' ) }>
                        <SelectControl 
                            label={ __( 'Padding before', 'bsx-blocks' ) }
                            value={ paddingBefore }
                            onChange={ onChangePaddingBefore }
                            options={ [
                                { value: '', label: __( '– unset –', 'bsx-blocks' ) },
                                { value: '0', label: __( 'none (0)', 'bsx-blocks' ) },
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
                                { value: '', label: __( '– unset –', 'bsx-blocks' ) },
                                { value: '0', label: __( 'none (0)', 'bsx-blocks' ) },
                                { value: '1', label: __( 'extra small', 'bsx-blocks' ) },
                                { value: '2', label: __( 'small', 'bsx-blocks' ) },
                                { value: '3', label: __( 'medium', 'bsx-blocks' ) },
                                { value: '4', label: __( 'large', 'bsx-blocks' ) },
                                { value: '5', label: __( 'extra large', 'bsx-blocks' ) },
                            ] }
                            help={ __( 'Inner spacer after', 'bsx-blocks' ) }
                        />
                        <SelectControl 
                            label={ __( 'Padding left', 'bsx-blocks' ) }
                            value={ paddingLeft }
                            onChange={ onChangePaddingLeft }
                            options={ [
                                { value: '', label: __( '– none –', 'bsx-blocks' ) },
                                { value: '1', label: __( 'extra small', 'bsx-blocks' ) },
                                { value: '2', label: __( 'small', 'bsx-blocks' ) },
                                { value: '3', label: __( 'medium', 'bsx-blocks' ) },
                                { value: '4', label: __( 'large', 'bsx-blocks' ) },
                                { value: '5', label: __( 'extra large', 'bsx-blocks' ) },
                            ] }
                            help={ __( 'Inner spacer left', 'bsx-blocks' ) }
                        />
                        <SelectControl 
                            label={ __( 'Padding right', 'bsx-blocks' ) }
                            value={ paddingRight }
                            onChange={ onChangePaddingRight }
                            options={ [
                                { value: '', label: __( '– none –', 'bsx-blocks' ) },
                                { value: '1', label: __( 'extra small', 'bsx-blocks' ) },
                                { value: '2', label: __( 'small', 'bsx-blocks' ) },
                                { value: '3', label: __( 'medium', 'bsx-blocks' ) },
                                { value: '4', label: __( 'large', 'bsx-blocks' ) },
                                { value: '5', label: __( 'extra large', 'bsx-blocks' ) },
                            ] }
                            help={ __( 'Inner spacer right', 'bsx-blocks' ) }
                        />
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
                </InspectorAdvancedControls>
            </Fragment>,
            (
                <Fragment>
                    {
                        nodeName == 'section' ? (
                            <section className={ wrapperClassName }>
                                <InnerBlocks />
                            </section>
                        )
                        :
                        (
                            <div className={ wrapperClassName }>
                                <InnerBlocks />
                            </div>
                        )
                    }
                </Fragment>
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
                bgColor,
                textColor,
                textAlign,
                rounded,
                marginBefore,
                marginAfter,
                paddingBefore,
                paddingAfter,
                paddingLeft,
                paddingRight,
            },
            setAttributes,
        } = props;

        const wrapperClassName = addClassNames( { 
            bgColor: bgColor, 
            textColor: textColor, 
            rounded: rounded, 
            textAlign: textAlign,
            marginBefore: marginBefore, 
            marginAfter: marginAfter, 
            paddingBefore: paddingBefore, 
            paddingAfter: paddingAfter, 
            paddingLeft: paddingLeft, 
            paddingRight: paddingRight,
        } );

        return (
            <Fragment>
                {
                    nodeName == 'section' ? (
                        <section className={ wrapperClassName }>
                            <InnerBlocks.Content />
                        </section>
                    )
                    :
                    (
                        <div className={ wrapperClassName }>
                            <InnerBlocks.Content />
                        </div>
                    )
                }
            </Fragment>
        );
    },
} );
