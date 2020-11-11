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
    SelectControl,
} = wp.components;

const { 
    withSelect, 
} = wp.data;

const makeColClassNames = ( sizesArray, marginAfter ) => {

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

    if ( marginAfter ) {
        colClassNames.push( 'mb-' + marginAfter );
    }

    //console.log( 'colClassNames.join( \' \' ): "' + colClassNames.join( ' ' ) + '"' );

    return colClassNames.join( ' ' );
}


registerBlockType( 'bsx-blocks/col', {
    title: __( 'BSX Column', 'bsx-blocks' ),
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" role="img" focusable="false">
            <path d="M18.71,1.29C18.52,1.11,18.26,1,18,1H2C1.74,1,1.48,1.11,1.29,1.29C1.11,1.48,1,1.74,1,2v16c0,0.26,0.11,0.52,0.29,0.71 C1.48,18.89,1.74,19,2,19h16c0.26,0,0.52-0.11,0.71-0.29C18.89,18.52,19,18.26,19,18V2C19,1.74,18.89,1.48,18.71,1.29z M12,3v14H8V3 H12z M3,3h3v14H3V3z M14,17V3h3l0,14H14z"/>
        </svg>
    ),
    category: 'layout',
    parent: [ 'bsx-blocks/row-with-cols' ],
    attributes: {
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
        marginAfter: {
            type: 'string',
            default: '3',
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
            getBlocksByClientId,
            getBlockAttributes, 
        } = select( 'core/block-editor' );

        const children = getBlocksByClientId( clientId )[ 0 ]
            ? getBlocksByClientId( clientId )[ 0 ].innerBlocks
            : [];

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
            children,
        };
    } )( ( props ) => {

        const {
            className,
            attributes: {
                colType,
                enableInheritanceFromRow,
                sizeXs,
                sizeSm,
                sizeMd,
                sizeLg,
                sizeXl,
                marginAfter,
            },
            setAttributes,
            parentAttributes,
            children,
        } = props;

        const hasInnerBlocks = ( children ) => {
            return children.length > 0;
        }

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

        const onChangeMarginAfter = ( value ) => {
            setAttributes( { marginAfter: value } );
        };

        const colClassName = makeColClassNames( [ sizeXs, sizeSm, sizeMd, sizeLg, sizeXl ], marginAfter );

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

                    <hr/>

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

                    <hr/>

                    <SelectControl 
                        label={ __( 'Margin after', 'bsx-blocks' ) }
                        value={ marginAfter }
                        onChange={ onChangeMarginAfter }
                        options={ [
                            { value: '', label: __( '– none –', 'bsx-blocks' ) },
                            { value: '1', label: __( 'extra small', 'bsx-blocks' ) },
                            { value: '2', label: __( 'small', 'bsx-blocks' ) },
                            { value: '3', label: __( 'medium', 'bsx-blocks' ) },
                            { value: '4', label: __( 'large', 'bsx-blocks' ) },
                            { value: '5', label: __( 'extra large', 'bsx-blocks' ) },
                        ] }
                        help={ __( 'Spacer after Column', 'bsx-blocks' ) }
                    />

                </PanelBody>
            </InspectorControls>,
            (
                <div className={ colClassName } data-col-type={ colType }>
                    <InnerBlocks 
                        renderAppender={
                            hasInnerBlocks
                            ? undefined
                            : () => <InnerBlocks.ButtonBlockAppender />
                        }
                    />
                </div>
            )
        ];
    } ),
    save: ( props ) => {
        const {
            className,
            attributes: {
                colType,
                enableInheritanceFromRow,
                sizeXs,
                sizeSm,
                sizeMd,
                sizeLg,
                sizeXl,
                marginAfter,
            },
        } = props;

        const colClassName = makeColClassNames( [ sizeXs, sizeSm, sizeMd, sizeLg, sizeXl ], marginAfter );

        return (
            <div className={ colClassName }>
                <InnerBlocks.Content />
            </div>
        );
    },
} );
