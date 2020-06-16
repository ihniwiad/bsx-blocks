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
} = wp.components;

const { 
    withSelect,
    withDispatch, 
} = wp.data;

const makeColClassNames = ( sizesArray ) => {

    const prefix = 'col';
    const sizeIntervals = [ 'xs', 'sm', 'md', 'lg', 'xl' ];

    const colClassNames = [];

    sizesArray.forEach( ( value, index ) => {

        const sizeInterval = sizeIntervals[ index ];

        let buildClassName = '';

        if ( value ) {

            buildClassName += 'col';

            if ( sizeInterval == 'xs' ) {
                // do nothing 
            }
            else {
                buildClassName += '-' + sizeInterval;
            }

            if ( value != 'null' ) {
                buildClassName += '-' + value;
            }

            colClassNames.push( buildClassName );
        }

    } );

    console.log( 'colClassNames.join( \' \' ): "' + colClassNames.join( ' ' ) + '"' );

    return colClassNames.join( ' ' );
}


registerBlockType( 'bsx-blocks/col', {
    title: __( 'BSX Column', 'bsx-blocks' ),
    icon: 'grid-view',
    category: 'layout',
    parent: [ 'bsx-blocks/row-with-cols' ],
    attributes: {
        colConfig: {
            type: 'string',
        },
        rowConfig: {
            type: 'string'
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
    edit: ( props ) => {

        const {
            className,
            attributes: {
                rowConfig,
                colConfig,
                sizeXs,
                sizeSm,
                sizeMd,
                sizeLg,
                sizeXl,
            },
            setAttributes,
        } = props;

        const onChangeColConfig = ( value ) => {
            setAttributes( { colConfig: value } );
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

        const colClassName = makeColClassNames( [ sizeXs, sizeSm, sizeMd, sizeLg, sizeXl ] );

        return [
            <InspectorControls>
                <PanelBody title={ __( 'BSX Block Settings', 'bsx-blocks' ) }>
                    <RangeControl 
                        label={ __( 'XS Column Width', 'bsx-blocks' ) }
                        value={ parseInt( sizeXs ) } 
                        onChange={ onChangeXsColSize }
                        min={ 0 }
                        max={ 12 }
                        disabled={ sizeXs == 'null' || sizeXs == 'auto' }
                        help={ __( 'If disabled deactivate options below', 'bsx-blocks' ) }
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
                        disabled={ sizeSm == 'null' || sizeSm == 'auto' }
                        help={ __( 'If disabled deactivate options below', 'bsx-blocks' ) }
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
                        disabled={ sizeMd == 'null' || sizeMd == 'auto' }
                        help={ __( 'If disabled deactivate options below', 'bsx-blocks' ) }
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
                        disabled={ sizeLg == 'null' || sizeLg == 'auto' }
                        help={ __( 'If disabled deactivate options below', 'bsx-blocks' ) }
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
                        disabled={ sizeXl == 'null' || sizeXl == 'auto' }
                        help={ __( 'If disabled deactivate options below', 'bsx-blocks' ) }
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
                        label={ __( 'Col config (test)', 'bsx-blocks' ) }
                        value={ colConfig } 
                        onChange={ onChangeColConfig }
                    />
                </PanelBody>
            </InspectorControls>,
            (
                <div className={ colClassName } data-col-config={ colConfig } data-row-config={ rowConfig }>
                    <InnerBlocks 
                        renderAppender={ () => (
                            <InnerBlocks.ButtonBlockAppender />
                        ) }
                    />
                </div>
            )
        ];
    },
    save: ( props ) => {
        const {
            //context,
            className,
            attributes: {
                colConfig,
                rowConfig,
                sizeXs,
                sizeSm,
                sizeMd,
                sizeLg,
                sizeXl,
            },
        } = props;

        const colClassName = makeColClassNames( [ sizeXs, sizeSm, sizeMd, sizeLg, sizeXl ] );

        return (
            <div className={ colClassName } data-col-config={ colConfig } data-row-config={ rowConfig }>
                <InnerBlocks.Content />
            </div>
        );
    },
} );


registerBlockType( 'bsx-blocks/row-with-cols', {
    title: __( 'BSX Columns', 'bsx-blocks' ),
    icon: 'grid-view',
    category: 'layout',
    attributes: {
        rowConfig: {
            type: 'string'
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

        const applyWithSelect = withSelect( ( select, { clientId } ) => {
            const { getBlocksByClientId } =
                select( 'core/block-editor' );

            const columns = getBlocksByClientId( clientId )[ 0 ]
                ? getBlocksByClientId( clientId )[ 0 ].innerBlocks : [];

            return {
                columns,
            };
        } );
        const applyWithDispatch = withDispatch( ( dispatch ) => {
            const { updateBlockAttributes } =
                dispatch( 'core/block-editor' );

            return {
                updateBlockAttributes,
            };
        } );

        return [
            <InspectorControls>
                <PanelBody title={ __( 'BSX Block Settings', 'bsx-blocks' ) }>
                    <TextControl 
                        label={ __( 'Row config (test)', 'bsx-blocks' ) }
                        value={ rowConfig } 
                        onChange={ onChangeRowConfig }
                    />
                </PanelBody>
            </InspectorControls>,
            (
                <div className="row" data-row-config={ rowConfig }>
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
            },
        } = props;

        return (
            <div className="row" data-row-config={ rowConfig }>
                <InnerBlocks.Content />
            </div>
        );
    },
} );

