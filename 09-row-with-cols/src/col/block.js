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
    Button,
} = wp.components;

const { 
    withSelect, 
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

    //console.log( 'colClassNames.join( \' \' ): "' + colClassNames.join( ' ' ) + '"' );

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
        fromRowConfig: {
            type: 'string'
        },
        colType: {
            type: 'string',
            default: 'custom',
        },
        enableInheritanceFromRow: {
            type: 'boolean',
            default: true,
        },
        sizeXs: {
            type: 'string',
            default: '',
        },
        sizeSm: {
            type: 'string',
            default: '',
        },
        sizeMd: {
            type: 'string',
            default: '4',
        },
        sizeLg: {
            type: 'string',
            default: '',
        },
        sizeXl: {
            type: 'string',
            default: '',
        },
    },

    getEditWrapperProps( attributes ) {
        const {
            sizeXs,
            sizeSm,
            sizeMd,
            sizeLg,
            sizeXl,
        } = attributes;

        return {
            'data-size': sizeXs,
            'data-size-sm': sizeSm,
            'data-size-md': sizeMd,
            'data-size-lg': sizeLg,
            'data-size-xl': sizeXl,
        };
    },

    edit: withSelect( ( select, { clientId } ) => {
        const { 
            getBlockParentsByBlockName, 
            getBlockAttributes, 
        } = select( 'core/block-editor' );

        //console.log( 'parentClientId: "' + parentClientId + '"' );

        const ancestorClientIds = getBlockParentsByBlockName( clientId, 'bsx-blocks/row-with-cols' );

        //console.log( 'ancestorClientIds: "' + ancestorClientIds + '"' );

        /*
        ancestorClientIds.forEach( ( ancestorClientId, index ) => {
            console.log( 'ancestorClientId[ ' + index + ' ]: "' + ancestorClientId + '"' );
        } ); 
        */

        // get last item which is parent
        const parentClientId = ancestorClientIds[ ancestorClientIds.length - 1 ];

        const parentAttributes = getBlockAttributes( parentClientId );

        //console.log( 'parentAttributes: "' + parentAttributes + '"' );
        /*
        if ( !! parentAttributes ) {
            for ( let [ key, value ] of Object.entries( parentAttributes ) ) {
                console.log( 'key: "' + key + '", value: "' + value + '"' );
            }
        }
        */

        //console.log( 'parentAttributes.fromRowConfig: "' + parentAttributes.fromRowConfig + '"' );

        return {
            parentAttributes,
        };
    } )( ( props ) => {

        const {
            className,
            attributes: {
                rowConfig,
                colConfig,
                fromRowConfig,
                colType,
                enableInheritanceFromRow,
                sizeXs,
                sizeSm,
                sizeMd,
                sizeLg,
                sizeXl,
            },
            setAttributes,
            parentAttributes,
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

        const onChangeEnableInheritanceFromRow = ( value ) => {
            setAttributes( { enableInheritanceFromRow: value } );
        };

        const onClickEnableInheritanceFromRow = ( value ) => {
            //console.log( 'onClickEnableInheritanceFromRow' );

            setAttributes( { 
                sizeXs: parentAttributes.sizeXs, 
                sizeSm: parentAttributes.sizeSm, 
                sizeMd: parentAttributes.sizeMd, 
                sizeLg: parentAttributes.sizeLg,
                sizeXl: parentAttributes.sizeXl,
            } );
        };

        const colClassName = makeColClassNames( [ sizeXs, sizeSm, sizeMd, sizeLg, sizeXl ] );

        setAttributes( { fromRowConfig: parentAttributes.fromRowConfig } );

        /*
        if ( !! props.attributes ) {
            console.log( 'build col: ' );
            for ( let [ key, value ] of Object.entries( props.attributes ) ) {
                console.log( 'key: "' + key + '", value: "' + value + '"' );
            }
        }
        */

        return [
            <InspectorControls>
                <PanelBody title={ __( 'Column Sizes (this Column)', 'bsx-blocks' ) }>

                    { colType === 'custom' && (
                        <>
                            <ToggleControl
                                label={ __( 'Enable inheritance from Row', 'bsx-blocks' ) }
                                checked={ !! enableInheritanceFromRow }
                                onChange={ onChangeEnableInheritanceFromRow }
                                help={ __( 'If enabled allows overwriting Column settings from Row', 'bsx-blocks' ) }
                            />

                            <div class="components-base-control">
                                <Button
                                    onClick={ onClickEnableInheritanceFromRow }
                                    isSecondary
                                    disabled={ ! enableInheritanceFromRow }
                                >
                                    { __( 'Inherit Settings for this Column', 'bsx-blocks' ) }
                                </Button>
                            </div>
                        </>
                    ) }

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
                        label={ __( 'Col config (test)', 'bsx-blocks' ) }
                        value={ colConfig } 
                        onChange={ onChangeColConfig }
                    />
                </PanelBody>
            </InspectorControls>,
            (
                <div className={ colClassName } data-col-config={ colConfig } data-row-config={ rowConfig } data-from-row-config={ fromRowConfig } data-col-type={ colType }>
                    <InnerBlocks 
                        renderAppender={ () => (
                            <InnerBlocks.ButtonBlockAppender />
                        ) }
                    />
                </div>
            )
        ];
    } ),
    save: ( props ) => {
        const {
            className,
            attributes: {
                colConfig,
                rowConfig,
                fromRowConfig,
                colType,
                enableInheritanceFromRow,
                sizeXs,
                sizeSm,
                sizeMd,
                sizeLg,
                sizeXl,
            },
        } = props;

        const colClassName = makeColClassNames( [ sizeXs, sizeSm, sizeMd, sizeLg, sizeXl ] );

        return (
            <div className={ colClassName } data-col-config={ colConfig } data-row-config={ rowConfig } data-from-row-config={ fromRowConfig } data-col-type={ colType }>
                <InnerBlocks.Content />
            </div>
        );
    },
} );
