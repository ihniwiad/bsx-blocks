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


// functions

import { svgIcon } from './../../_functions/wp-icons.js';
import { addClassNames } from './../../_functions/add-class-names.js';
import { 
    marginAfterSelect,
    displaySelect,
} from './../../_functions/controls.js';


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
    icon: svgIcon( 'row-with-cols-col' ),
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
        nodeName: {
            type: 'string',
            default: 'div',
        },
        marginAfter: {
            type: 'string',
            default: '3',
        },
        display: {
            type: 'string',
        },
    },

    getEditWrapperProps( attributes ) {
        const {
            sizeXs,
            sizeSm,
            sizeMd,
            sizeLg,
            sizeXl,
            display,
        } = attributes;

        return {
            'data-size': sizeXs,
            'data-size-sm': sizeSm,
            'data-size-md': sizeMd,
            'data-size-lg': sizeLg,
            'data-size-xl': sizeXl,
            'data-display': display,
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

        // console.log( 'parentClientId: "' + parentClientId + '"' );

        const ancestorClientIds = getBlockParentsByBlockName( clientId, 'bsx-blocks/row-with-cols' );

        // console.log( 'ancestorClientIds: "' + ancestorClientIds + '"' );
        // ancestorClientIds.forEach( ( ancestorClientId, index ) => {
        //     console.log( 'ancestorClientId[ ' + index + ' ]: "' + ancestorClientId + '"' );
        // } ); 

        // get last item which is parent
        const parentClientId = ancestorClientIds[ ancestorClientIds.length - 1 ];

        const parentAttributes = getBlockAttributes( parentClientId );

        // console.log( 'parentAttributes: "' + parentAttributes + '"' );
        // if ( !! parentAttributes ) {
        //     for ( let [ key, value ] of Object.entries( parentAttributes ) ) {
        //         console.log( 'key: "' + key + '", value: "' + value + '"' );
        //     }
        // }
        // console.log( 'parentAttributes.fromRowConfig: "' + parentAttributes.fromRowConfig + '"' );

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
                nodeName,
                marginAfter,
                display,
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
                nodeName: parentAttributes.colsNodeName,
                marginAfter: parentAttributes.colsMarginAfter,
            } );
        };

        const onChangeNodeName = ( value ) => {
            setAttributes( { nodeName: value } );
        };

        const onChangeMarginAfter = ( value ) => {
            setAttributes( { marginAfter: value } );
        };

        const onChangeDisplay = ( value ) => {
            setAttributes( { display: value } );
        };

        let colClassName = makeColClassNames( [ sizeXs, sizeSm, sizeMd, sizeLg, sizeXl ] );
        colClassName = addClassNames( {
            marginAfter,
            display,
        }, colClassName );

        setAttributes( { fromRowConfig: parentAttributes.fromRowConfig } );

        const TagName = nodeName;

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

                    {
                        marginAfterSelect( marginAfter, onChangeMarginAfter )
                    }

                    <hr/>

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

                    <hr/>

                    {
                        displaySelect( display, onChangeDisplay, [ '', 'flex' ] )
                    }

                </PanelBody>
            </InspectorControls>,
            (
                <TagName className={ colClassName } data-col-type={ colType }>
                    <InnerBlocks 
                        renderAppender={
                            hasInnerBlocks
                            ? undefined
                            : () => <InnerBlocks.ButtonBlockAppender />
                        }
                    />
                </TagName>
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
                nodeName,
                marginAfter,
                display,
            },
        } = props;

        let colClassName = makeColClassNames( [ sizeXs, sizeSm, sizeMd, sizeLg, sizeXl ] );
        colClassName = addClassNames( {
            marginAfter,
            display,
        }, colClassName );

        const TagName = nodeName;

        return (
            <TagName className={ colClassName }>
                <InnerBlocks.Content />
            </TagName>
        );
    },
} );
