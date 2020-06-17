const { __, setLocaleData } = wp.i18n;
const {
    registerBlockType,
} = wp.blocks;
const {
    InnerBlocks,
    InspectorControls,
} = wp.blockEditor;
const { 
    TextControl,
    PanelBody,
    RangeControl,
    ToggleControl,
    SelectControl,
} = wp.components;

const { 
    withSelect,
    withDispatch, 
} = wp.data;

const makeRowClassNames = ( alignItems, justifyContent, noGutters, formRow ) => {

    const prefix = 'col';

    const rowClassNames = [ 'row' ];

    if ( alignItems ) {
        rowClassNames.push( 'align-items-' + alignItems );
    }
    if ( justifyContent ) {
        rowClassNames.push( 'justify-content-' + justifyContent );
    }
    if ( noGutters ) {
        rowClassNames.push( 'no-gutters' );
    }
    if ( formRow ) {
        rowClassNames.push( 'form-row' );
    }

    //console.log( 'rowClassNames.join( \' \' ): "' + rowClassNames.join( ' ' ) + '"' );

    return rowClassNames.join( ' ' );
}


registerBlockType( 'bsx-blocks/row-with-cols', {
    title: __( 'BSX Columns', 'bsx-blocks' ),
    icon: 'grid-view',
    category: 'layout',
    attributes: {
        rowConfig: {
            type: 'string',
        },
        fromRowConfig: {
            type: 'string',
            default: 'Test hello! :D',
        },
        alignItems: {
            type: 'string',
        },
        justifyContent: {
            type: 'string',
        },
        noGutters: {
            type: 'boolean',
        },
        formRow: {
            type: 'boolean',
        },
        sizeXs: {
            type: 'string',
        },
        sizeSm: {
            type: 'string',
        },
        sizeMd: {
            type: 'string',
        },
        sizeLg: {
            type: 'string',
        },
        sizeXl: {
            type: 'string',
        },
    },
    edit: withSelect( ( select, { clientId } ) => {
        const { getBlocksByClientId } = select( 'core/block-editor' );

        const children = getBlocksByClientId( clientId )[ 0 ]
            ? getBlocksByClientId( clientId )[ 0 ].innerBlocks
            : [];

        return {
            children,
        };
    } )( withDispatch( ( dispatch ) => {

            const { updateBlockAttributes } = dispatch( 'core/block-editor' );

            return {
                updateBlockAttributes,
            };
    } )( ( props ) => {
        const {
            clientId,
            className,
            attributes: {
                rowConfig,
                fromRowConfig,
                alignItems,
                justifyContent,
                noGutters,
                formRow,
                sizeXs,
                sizeSm,
                sizeMd,
                sizeLg,
                sizeXl,
            },
            setAttributes,
            isSelected,
            children,
            updateBlockAttributes,
        } = props;

        const colsTemplate = [ 
            [ 
                'bsx-blocks/col', {
                    sizeMd: 4
                },
            ], 
            [ 
                'bsx-blocks/col', {
                    sizeMd: 4
                },
            ], 
            [ 
                'bsx-blocks/col', {
                    sizeMd: 4
                },
            ],
        ];

        const allowedBlocks = [ 'bsx-blocks/col' ];

        const onChangeRowConfig = ( value ) => {

            children.forEach( ( column, index ) => {
                const newAttributes = { rowConfig: value };
                updateBlockAttributes( column.clientId, newAttributes );
            } );

            setAttributes( { rowConfig: value } );

        };

        const onChangeFromRowConfig = ( value ) => {

            setAttributes( { fromRowConfig: value } );

        };

        const onChangeAlignItems = ( value ) => {
            setAttributes( { alignItems: value } );
        };

        const onChangeJustifyContent = ( value ) => {
            setAttributes( { justifyContent: value } );
        };

        const onChangeNoGutters = ( value ) => {
            setAttributes( { noGutters: value } );
            if ( value === true ) {
                setAttributes( { formRow: false } );
            }
        };
        const onChangeFormRow = ( value ) => {
            setAttributes( { formRow: value } );
            if ( value === true ) {
                setAttributes( { noGutters: false } );
            }
        };


        // xs
        const onChangeXsColSize = ( value ) => {
            setAttributes( { sizeXs: !! value ? value.toString() : '' } );
        };
        const onChangeXsEqualSize = ( value ) => {
            if ( value ) {
                setAttributes( { sizeXs: 'null' } );
            }
            else if ( sizeXs == 'null' ) {
                setAttributes( { sizeXs: '' } );
            }
        };
        const onChangeXsAutoSize = ( value ) => {
            if ( value ) {
                setAttributes( { sizeXs: 'auto' } );
            }
            else if ( sizeXs == 'auto' ) {
                setAttributes( { sizeXs: '' } );
            }
        };

        // sm
        const onChangeSmColSize = ( value ) => {
            setAttributes( { sizeSm: !! value ? value.toString() : '' } );
        };
        const onChangeSmEqualSize = ( value ) => {
            if ( value ) {
                setAttributes( { sizeSm: 'null' } );
            }
            else if ( sizeSm == 'null' ) {
                setAttributes( { sizeSm: '' } );
            }
        };
        const onChangeSmAutoSize = ( value ) => {
            if ( value ) {
                setAttributes( { sizeSm: 'auto' } );
            }
            else if ( sizeSm == 'auto' ) {
                setAttributes( { sizeSm: '' } );
            }
        };

        // md
        const onChangeMdColSize = ( value ) => {
            setAttributes( { sizeMd: !! value ? value.toString() : '' } );
        };
        const onChangeMdEqualSize = ( value ) => {
            if ( value ) {
                setAttributes( { sizeMd: 'null' } );
            }
            else if ( sizeMd == 'null' ) {
                setAttributes( { sizeMd: '' } );
            }
        };
        const onChangeMdAutoSize = ( value ) => {
            if ( value ) {
                setAttributes( { sizeMd: 'auto' } );
            }
            else if ( sizeMd == 'auto' ) {
                setAttributes( { sizeMd: '' } );
            }
        };

        // lg
        const onChangeLgColSize = ( value ) => {
            setAttributes( { sizeLg: !! value ? value.toString() : '' } );
        };
        const onChangeLgEqualSize = ( value ) => {
            if ( value ) {
                setAttributes( { sizeLg: 'null' } );
            }
            else if ( sizeLg == 'null' ) {
                setAttributes( { sizeLg: '' } );
            }
        };
        const onChangeLgAutoSize = ( value ) => {
            if ( value ) {
                setAttributes( { sizeLg: 'auto' } );
            }
            else if ( sizeLg == 'auto' ) {
                setAttributes( { sizeLg: '' } );
            }
        };

        // xl
        const onChangeXlColSize = ( value ) => {
            setAttributes( { sizeXl: !! value ? value.toString() : '' } );
        };
        const onChangeXlEqualSize = ( value ) => {
            if ( value ) {
                setAttributes( { sizeXl: 'null' } );
            }
            else if ( sizeXl == 'null' ) {
                setAttributes( { sizeXl: '' } );
            }
        };
        const onChangeXlAutoSize = ( value ) => {
            if ( value ) {
                setAttributes( { sizeXl: 'auto' } );
            }
            else if ( sizeXl == 'auto' ) {
                setAttributes( { sizeXl: '' } );
            }
        };

        const rowClassNames = makeRowClassNames( alignItems, justifyContent, noGutters, formRow );

        return [
            <InspectorControls>
                <PanelBody title={ __( 'Columns Options', 'bsx-blocks' ) }>
                    <SelectControl 
                        label={ __( 'Vertical Align', 'bsx-blocks' ) }
                        value={ alignItems }
                        onChange={ onChangeAlignItems }
                        options={ [
                            { value: '', label: __( '– unset –', 'bsx-blocks' ) },
                            { value: 'start', label: __( 'Start', 'bsx-blocks' ) },
                            { value: 'center', label: __( 'Center', 'bsx-blocks' ) },
                            { value: 'end', label: __( 'End', 'bsx-blocks' ) },
                        ] }
                    />
                    <SelectControl 
                        label={ __( 'Justify Content', 'bsx-blocks' ) }
                        value={ justifyContent }
                        onChange={ onChangeJustifyContent }
                        options={ [
                            { value: '', label: __( '– unset –', 'bsx-blocks' ) },
                            { value: 'start', label: __( 'Start', 'bsx-blocks' ) },
                            { value: 'center', label: __( 'Center', 'bsx-blocks' ) },
                            { value: 'end', label: __( 'End', 'bsx-blocks' ) },
                            { value: 'between', label: __( 'Between', 'bsx-blocks' ) },
                            { value: 'around', label: __( 'Around', 'bsx-blocks' ) },
                        ] }
                    />
                    <ToggleControl
                        label={ __( 'No Gutters', 'bsx-blocks' ) }
                        checked={ !! noGutters }
                        onChange={ onChangeNoGutters }
                    />
                    <ToggleControl
                        label={ __( 'Form Row', 'bsx-blocks' ) }
                        checked={ !! formRow }
                        onChange={ onChangeFormRow }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Group Column Settings (overwriting single column settings)', 'bsx-blocks' ) }>
                    <RangeControl 
                        label={ __( 'XS Column Width', 'bsx-blocks' ) }
                        value={ parseInt( sizeXs ) } 
                        onChange={ onChangeXsColSize }
                        min={ 0 }
                        max={ 12 }
                        help={ __( '1 ... 12 or empty', 'bsx-blocks' ) }
                        className="mb-0"
                    />
                    <ToggleControl
                        label={ __( 'XS Equal Width', 'bsx-blocks' ) }
                        checked={ sizeXs == 'null' }
                        onChange={ onChangeXsEqualSize }
                        className="mb-0"
                    />
                    <ToggleControl
                        label={ __( 'XS Auto Width', 'bsx-blocks' ) }
                        checked={ sizeXs == 'auto' }
                        onChange={ onChangeXsAutoSize }
                    />

                    <RangeControl 
                        label={ __( 'SM Column Width', 'bsx-blocks' ) }
                        value={ parseInt( sizeSm ) } 
                        onChange={ onChangeSmColSize }
                        min={ 0 }
                        max={ 12 }
                        help={ __( '1 ... 12 or empty', 'bsx-blocks' ) }
                        className="mb-0"
                    />
                    <ToggleControl
                        label={ __( 'SM Equal Width', 'bsx-blocks' ) }
                        checked={ sizeSm == 'null' }
                        onChange={ onChangeSmEqualSize }
                        className="mb-0"
                    />
                    <ToggleControl
                        label={ __( 'SM Auto Width', 'bsx-blocks' ) }
                        checked={ sizeSm == 'auto' }
                        onChange={ onChangeSmAutoSize }
                    />

                    <RangeControl 
                        label={ __( 'MD Column Width', 'bsx-blocks' ) }
                        value={ parseInt( sizeMd ) } 
                        onChange={ onChangeMdColSize }
                        min={ 0 }
                        max={ 12 }
                        help={ __( '1 ... 12 or empty', 'bsx-blocks' ) }
                        className="mb-0"
                    />
                    <ToggleControl
                        label={ __( 'MD Equal Width', 'bsx-blocks' ) }
                        checked={ sizeMd == 'null' }
                        onChange={ onChangeMdEqualSize }
                        className="mb-0"
                    />
                    <ToggleControl
                        label={ __( 'MD Auto Width', 'bsx-blocks' ) }
                        checked={ sizeMd == 'auto' }
                        onChange={ onChangeMdAutoSize }
                    />

                    <RangeControl 
                        label={ __( 'LG Column Width', 'bsx-blocks' ) }
                        value={ parseInt( sizeLg ) } 
                        onChange={ onChangeLgColSize }
                        min={ 0 }
                        max={ 12 }
                        help={ __( '1 ... 12 or empty', 'bsx-blocks' ) }
                        className="mb-0"
                    />
                    <ToggleControl
                        label={ __( 'LG Equal Width', 'bsx-blocks' ) }
                        checked={ sizeLg == 'null' }
                        onChange={ onChangeLgEqualSize }
                        className="mb-0"
                    />
                    <ToggleControl
                        label={ __( 'LG Auto Width', 'bsx-blocks' ) }
                        checked={ sizeLg == 'auto' }
                        onChange={ onChangeLgAutoSize }
                    />

                    <RangeControl 
                        label={ __( 'XL Column Width', 'bsx-blocks' ) }
                        value={ parseInt( sizeXl ) } 
                        onChange={ onChangeXlColSize }
                        min={ 0 }
                        max={ 12 }
                        help={ __( '1 ... 12 or empty', 'bsx-blocks' ) }
                        className="mb-0"
                    />
                    <ToggleControl
                        label={ __( 'XL Equal Width', 'bsx-blocks' ) }
                        checked={ sizeXl == 'null' }
                        onChange={ onChangeXlEqualSize }
                        className="mb-0"
                    />
                    <ToggleControl
                        label={ __( 'XL Auto Width', 'bsx-blocks' ) }
                        checked={ sizeXl == 'auto' }
                        onChange={ onChangeXlAutoSize }
                    />

                    <TextControl 
                        label={ __( 'Row config (test)', 'bsx-blocks' ) }
                        value={ rowConfig } 
                        onChange={ onChangeRowConfig }
                    />
                    <TextControl 
                        label={ __( 'Row config (test)', 'bsx-blocks' ) }
                        value={ fromRowConfig } 
                        onChange={ onChangeFromRowConfig }
                    />
                </PanelBody>
            </InspectorControls>,
            (
                <div className={ rowClassNames } data-row-config={ rowConfig } data-from-row-config={ fromRowConfig }>
                    <InnerBlocks 
                        template={ colsTemplate }
                        allowedBlocks={ allowedBlocks }
                    />
                </div>
            )
        ];
    } ) ),
    save: ( props ) => {
        const {
            className,
            attributes: {
                rowConfig,
                fromRowConfig,
                alignItems,
                justifyContent,
                noGutters,
                formRow,
                sizeXs,
                sizeSm,
                sizeMd,
                sizeLg,
                sizeXl,
            },
        } = props;

        const rowClassNames = makeRowClassNames( alignItems, justifyContent, noGutters, formRow );

        return (
            <div className={ rowClassNames } data-row-config={ rowConfig } data-from-row-config={ fromRowConfig }>
                <InnerBlocks.Content />
            </div>
        );
    },
} );

