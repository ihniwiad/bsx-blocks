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
    Button,
    SVG, 
    Path,
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
        templateName: {
            type: 'string',
            default: '1-1-1',
        },
        enableInheritanceToCols: {
            type: 'boolean',
            default: false,
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
            alignItems,
            justifyContent,
            noGutters,
            formRow,
        } = attributes;

        return {
            'data-align-items': alignItems,
            'data-justify-content': justifyContent,
            'data-no-gutters': noGutters,
            'data-form-row': formRow,
        };
    },

    edit: withSelect( ( select, { clientId } ) => {
        const { 
            getBlocksByClientId,
            getBlockAttributes, 
        } = select( 'core/block-editor' );

        const children = getBlocksByClientId( clientId )[ 0 ]
            ? getBlocksByClientId( clientId )[ 0 ].innerBlocks
            : [];

        const childrenAttributes = [];


        children.forEach( ( column, index ) => {
            childrenAttributes.push( getBlockAttributes( column.clientId ) );
        } );

        return {
            children,
            childrenAttributes,
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
                templateName,
                enableInheritanceToCols,
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
            childrenAttributes,
            updateBlockAttributes,
        } = props;

        const colsTemplates = [
            {
                name: '1-1-1',
                title: __( '3 Columns (1:1:1)', 'bsx-blocks' ),
                icon: (
                    <svg 
                        width="48" 
                        height="48" 
                        viewBox="0 0 48 48" 
                        xmlns="http://www.w3.org/2000/svg" 
                        role="img" 
                        aria-hidden="true" 
                        focusable="false"
                    >
                        <path 
                            fill-rule="evenodd" 
                            clip-rule="evenodd" 
                            d="M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z"
                        />
                    </svg>
                ),
                template: [ 
                    [ 
                        'bsx-blocks/col', 
                        {
                            colType: 'default',
                            sizeXs: '',
                            sizeSm: '',
                            sizeMd: '4',
                            sizeLg: '',
                            sizeXl: '',
                        },
                    ], 
                    [ 
                        'bsx-blocks/col', 
                        {
                            colType: 'default',
                            sizeXs: '',
                            sizeSm: '',
                            sizeMd: '4',
                            sizeLg: '',
                            sizeXl: '',
                        },
                    ], 
                    [ 
                        'bsx-blocks/col', 
                        {
                            colType: 'default',
                            sizeXs: '',
                            sizeSm: '',
                            sizeMd: '4',
                            sizeLg: '',
                            sizeXl: '',
                        },
                    ],
                ],
                templateLock: false,
            },
            {
                name: '1-1',
                title: __( '2 Columns (1:1)', 'bsx-blocks' ),
                icon: (
                    <svg 
                        width="48" 
                        height="48" 
                        viewBox="0 0 48 48" 
                        xmlns="http://www.w3.org/2000/svg" 
                        role="img" 
                        aria-hidden="true" 
                        focusable="false"
                    >
                        <path 
                            fill-rule="evenodd" 
                            clip-rule="evenodd" 
                            d="M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H25V34H39ZM23 34H9V14H23V34Z"
                        />
                    </svg>
                ),
                template: [ 
                    [ 
                        'bsx-blocks/col', 
                        {
                            colType: 'default',
                            sizeXs: '',
                            sizeSm: '',
                            sizeMd: '6',
                            sizeLg: '',
                            sizeXl: '',
                        },
                    ], 
                    [ 
                        'bsx-blocks/col', 
                        {
                            colType: 'default',
                            sizeXs: '',
                            sizeSm: '',
                            sizeMd: '6',
                            sizeLg: '',
                            sizeXl: '',
                        },
                    ], 
                ],
                templateLock: false,
            },
            {
                name: '1-2',
                title: __( '2 Columns (1:2)', 'bsx-blocks' ),
                icon: (
                    <svg 
                        width="48" 
                        height="48" 
                        viewBox="0 0 48 48" 
                        xmlns="http://www.w3.org/2000/svg" 
                        role="img" 
                        aria-hidden="true" 
                        focusable="false"
                    >
                        <path 
                            fill-rule="evenodd" 
                            clip-rule="evenodd" 
                            d="M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H20V34H39ZM18 34H9V14H18V34Z"
                        />
                    </svg>
                ),
                template: [ 
                    [ 
                        'bsx-blocks/col', 
                        {
                            colType: 'default',
                            sizeXs: '',
                            sizeSm: '',
                            sizeMd: '4',
                            sizeLg: '',
                            sizeXl: '',
                        },
                    ], 
                    [ 
                        'bsx-blocks/col', 
                        {
                            colType: 'default',
                            sizeXs: '',
                            sizeSm: '',
                            sizeMd: '8',
                            sizeLg: '',
                            sizeXl: '',
                        },
                    ], 
                ],
                templateLock: false,
            },
            {
                name: '2-1',
                title: __( '2 Columns (2:1)', 'bsx-blocks' ),
                icon: (
                    <svg 
                        width="48" 
                        height="48" 
                        viewBox="0 0 48 48" 
                        xmlns="http://www.w3.org/2000/svg" 
                        role="img" 
                        aria-hidden="true" 
                        focusable="false"
                    >
                        <path 
                            fill-rule="evenodd" 
                            clip-rule="evenodd" 
                            d="M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H30V34H39ZM28 34H9V14H28V34Z"
                        />
                    </svg>
                ),
                template: [ 
                    [ 
                        'bsx-blocks/col', 
                        {
                            colType: 'default',
                            sizeXs: '',
                            sizeSm: '',
                            sizeMd: '8',
                            sizeLg: '',
                            sizeXl: '',
                        },
                    ], 
                    [ 
                        'bsx-blocks/col', 
                        {
                            colType: 'default',
                            sizeXs: '',
                            sizeSm: '',
                            sizeMd: '4',
                            sizeLg: '',
                            sizeXl: '',
                        },
                    ], 
                ],
                templateLock: false,
            },
            {
                name: '1-2-1',
                title: __( '3 Columns (1:2:1)', 'bsx-blocks' ),
                icon: (
                    <svg 
                        width="48" 
                        height="48" 
                        viewBox="0 0 48 48" 
                        xmlns="http://www.w3.org/2000/svg" 
                        role="img" 
                        aria-hidden="true" 
                        focusable="false"
                    >
                        <path 
                            fill-rule="evenodd" 
                            clip-rule="evenodd" 
                            d="M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM31 34H17V14h14v20zm2 0V14h6v20h-6zm-18 0H9V14h6v20z"
                        />
                    </svg>
                ),
                template: [ 
                    [ 
                        'bsx-blocks/col', 
                        {
                            colType: 'default',
                            sizeXs: '',
                            sizeSm: '',
                            sizeMd: '3',
                            sizeLg: '',
                            sizeXl: '',
                        },
                    ], 
                    [ 
                        'bsx-blocks/col', 
                        {
                            colType: 'default',
                            sizeXs: '',
                            sizeSm: '',
                            sizeMd: '6',
                            sizeLg: '',
                            sizeXl: '',
                        },
                    ], 
                    [ 
                        'bsx-blocks/col', 
                        {
                            colType: 'default',
                            sizeXs: '',
                            sizeSm: '',
                            sizeMd: '3',
                            sizeLg: '',
                            sizeXl: '',
                        },
                    ],
                ],
                templateLock: false,
            },
            {
                name: 'custom',
                title: __( 'Custom', 'bsx-blocks' ),
                icon: (
                    <svg 
                        width="48" 
                        height="48" 
                        viewBox="0 0 48 48" 
                        xmlns="http://www.w3.org/2000/svg" 
                        role="img" 
                        aria-hidden="true" 
                        focusable="false"
                    >
                        <path 
                            fill-rule="evenodd" 
                            clip-rule="evenodd" 
                            d="M23.58 26.28c0-.600003.1499985-1.099998.45-1.5.3000015-.400002.7433304-.8399976 1.33-1.32.5600028-.4533356.9833319-.8699981 1.27-1.25s.43-.8433306.43-1.39c0-.5466694-.1733316-1.0566643-.52-1.53s-.986662-.71-1.92-.71c-1.1066722 0-1.8533314.2766639-2.24.83-.3866686.5533361-.58 1.1766632-.58 1.87 0 .1466674.0033333.2666662.01.36.0066667.0933338.01.1533332.01.18h-1.78c-.0133334-.0533336-.0266666-.146666-.04-.28-.0133334-.133334-.02-.2733326-.02-.42 0-.7733372.1766649-1.4666636.53-2.08.3533351-.6133364.8899964-1.0999982 1.61-1.46.7200036-.3600018 1.5999948-.54 2.64-.54 1.2133394 0 2.2033295.3233301 2.97.97s1.15 1.5099946 1.15 2.59c0 .7066702-.1033323 1.3033309-.31 1.79-.2066677.4866691-.4533319.8799985-.74 1.18-.2866681.3000015-.6566644.6233316-1.11.97-.4800024.3866686-.8333322.7166653-1.06.99-.2266678.2733347-.34.6233312-.34 1.05v.82h-1.74zm-.14 2.56h2V31h-2zM39 12c1.1046 0 2 .8954 2 2v20c0 1.1046-.8954 2-2 2H9c-1.10457 0-2-.8954-2-2V14c0-1.1046.89543-2 2-2h30zm0 22V14H9v20h30z"
                        />
                    </svg>
                ),
                template: [ 
                    [ 
                        'bsx-blocks/col', 
                        {
                            colType: 'custom',
                            sizeXs: '',
                            sizeSm: '',
                            sizeMd: '4',
                            sizeLg: '',
                            sizeXl: '',
                        },
                    ],
                ],
                templateLock: false,
            },
        ];

        const getColsTemplate = ( currentTemplateName ) => {
            const currentTemplate = colsTemplates.find( ( item ) => item.name === currentTemplateName );
            return currentTemplate ? currentTemplate.template : [];
        };

        const getColsTemplateLock = ( currentTemplateName ) => {
            const currentTemplate = colsTemplates.find( ( item ) => item.name === currentTemplateName );
            return currentTemplate ? currentTemplate.templateLock : false;
        };

        let colsTemplate = getColsTemplate( templateName );
        let colsTemplateLock = getColsTemplateLock( templateName );

        const allowedBlocks = [ 'bsx-blocks/col' ];

        //setAttributes( { template: colTemplates[ 0 ].name } );

        const onChangeRowConfig = ( value ) => {

            children.forEach( ( column, index ) => {
                const newAttributes = { 
                    rowConfig: value 
                };
                updateBlockAttributes( column.clientId, newAttributes );
            } );

            setAttributes( { rowConfig: value } );
        };

        const onChangeFromRowConfig = ( value ) => {
            setAttributes( { fromRowConfig: value } );
        };

        const onColsTemplateChange = ( value ) => {

            colsTemplate = getColsTemplate( value );

            const colType = value == 'custom' ? 'custom' : 'default';

            console.log( 'onColsTemplateChange: "' + value + '"' );
            console.log( 'colType: "' + colType + '"' );

            /*
            console.log( 'value: "' + value + '"' );
            console.log( 'colsTemplate: "' + colsTemplate + '"' );
            console.log( 'colsTemplate.length: "' + colsTemplate.length + '"' );

            colsTemplate.forEach( ( item, index ) => {
                console.log( 'item[ ' + index + ' ]: "' + item + '"' );

                if ( !! item ) {
                    for ( let [ key, value ] of Object.entries( item ) ) {
                        console.log( 'key: "' + key + '", value: "' + value + '"' );
                    }
                }
            } ); 
            */

            if ( value != 'custom' ) {
                // resize columns
                children.forEach( ( column, index ) => {
                    if ( colsTemplate.length > index ) {
                        const newAttributes = colsTemplate[ index ][ 1 ];
                        updateBlockAttributes( column.clientId, { colType: colType, ...newAttributes } );
                    }
                } );
            }
            else {
                // change col type
                children.forEach( ( column, index ) => {
                    const newAttributes = { 
                        colType: colType, 
                    };
                    updateBlockAttributes( column.clientId, newAttributes );
                } );
            }

            setAttributes( { templateName: value } );
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

        const onChangeEnableInheritanceToCols = ( value ) => {
            setAttributes( { enableInheritanceToCols: value } );
        };

        // value = { sizeXX: 'newValue' }
        const inheritToCols = ( value ) => {
            console.log( 'inheritToCols' );

            children.forEach( ( column, index ) => {

                //console.log( 'childrenAttributes[' + index + ' ]: "' + childrenAttributes[ index ] + '"' );

                if ( childrenAttributes[ index ].enableInheritanceFromRow ) {

                    const newAttributes = { 
                        sizeXs: value.sizeXs != undefined ? value.sizeXs : sizeXs,
                        sizeSm: value.sizeSm != undefined ? value.sizeSm : sizeSm,
                        sizeMd: value.sizeMd != undefined ? value.sizeMd : sizeMd,
                        sizeLg: value.sizeLg != undefined ? value.sizeLg : sizeLg,
                        sizeXl: value.sizeXl != undefined ? value.sizeXl : sizeXl,
                    };
                    updateBlockAttributes( column.clientId, newAttributes );

                }
            } );

        }


        // xs
        const onChangeXsColSize = ( value ) => {
            const attr = { sizeXs: !! value ? value.toString() : '' };
            setAttributes( attr );
            inheritToCols( attr );
        };
        const onChangeXsEqualSize = ( value ) => {
            if ( enableInheritanceToCols ) {
                if ( value ) {
                    const attr = { sizeXs: 'null' };
                    setAttributes( attr );
                    inheritToCols( attr );
                }
                else if ( sizeXs == 'null' ) {
                    const attr = { sizeXs: '' };
                    setAttributes( attr );
                    inheritToCols( attr );
                }
            }
        };
        const onChangeXsAutoSize = ( value ) => {
            if ( enableInheritanceToCols ) {
                if ( value ) {
                    const attr = { sizeXs: 'auto' };
                    setAttributes( attr );
                    inheritToCols( attr );
                }
                else if ( sizeXs == 'auto' ) {
                    const attr = { sizeXs: '' };
                    setAttributes( attr );
                    inheritToCols( attr );
                }
            }
        };

        // sm
        const onChangeSmColSize = ( value ) => {
            const attr = { sizeSm: !! value ? value.toString() : '' };
            setAttributes( attr );
            inheritToCols( attr );
        };
        const onChangeSmEqualSize = ( value ) => {
            if ( enableInheritanceToCols ) {
                if ( value ) {
                    const attr = { sizeSm: 'null' };
                    setAttributes( attr );
                    inheritToCols( attr );
                }
                else if ( sizeSm == 'null' ) {
                    const attr = { sizeSm: '' };
                    setAttributes( attr );
                    inheritToCols( attr );
                }
            }
        };
        const onChangeSmAutoSize = ( value ) => {
            if ( enableInheritanceToCols ) {
                if ( value ) {
                    const attr = { sizeSm: 'auto' };
                    setAttributes( attr );
                    inheritToCols( attr );
                }
                else if ( sizeSm == 'auto' ) {
                    const attr = { sizeSm: '' };
                    setAttributes( attr );
                    inheritToCols( attr );
                }
            }
        };

        // md
        const onChangeMdColSize = ( value ) => {
            const attr = { sizeMd: !! value ? value.toString() : '' };
            setAttributes( attr );
            inheritToCols( attr );
        };
        const onChangeMdEqualSize = ( value ) => {
            if ( enableInheritanceToCols ) {
                if ( value ) {
                    const attr = { sizeMd: 'null' };
                    setAttributes( attr );
                    inheritToCols( attr );
                }
                else if ( sizeMd == 'null' ) {
                    const attr = { sizeMd: '' };
                    setAttributes( attr );
                    inheritToCols( attr );
                }
            }
        };
        const onChangeMdAutoSize = ( value ) => {
            if ( enableInheritanceToCols ) {
                if ( value ) {
                    const attr = { sizeMd: 'auto' };
                    setAttributes( attr );
                    inheritToCols( attr );
                }
                else if ( sizeMd == 'auto' ) {
                    const attr = { sizeMd: '' };
                    setAttributes( attr );
                    inheritToCols( attr );
                }
            }
        };

        // lg
        const onChangeLgColSize = ( value ) => {
            const attr = { sizeLg: !! value ? value.toString() : '' };
            setAttributes( attr );
            inheritToCols( attr );
        };
        const onChangeLgEqualSize = ( value ) => {
            if ( enableInheritanceToCols ) {
                if ( value ) {
                    const attr = { sizeLg: 'null' };
                    setAttributes( attr );
                    inheritToCols( attr );
                }
                else if ( sizeLg == 'null' ) {
                    const attr = { sizeLg: '' };
                    setAttributes( attr );
                    inheritToCols( attr );
                }
            }
        };
        const onChangeLgAutoSize = ( value ) => {
            if ( enableInheritanceToCols ) {
                if ( value ) {
                    const attr = { sizeLg: 'auto' };
                    setAttributes( attr );
                    inheritToCols( attr );
                }
                else if ( sizeLg == 'auto' ) {
                    const attr = { sizeLg: '' };
                    setAttributes( attr );
                    inheritToCols( attr );
                }
            }
        };

        // xl
        const onChangeXlColSize = ( value ) => {
            const attr = { sizeXl: !! value ? value.toString() : '' };
            setAttributes( attr );
            inheritToCols( attr );
        };
        const onChangeXlEqualSize = ( value ) => {
            if ( enableInheritanceToCols ) {
                if ( value ) {
                    const attr = { sizeXl: 'null' };
                    setAttributes( attr );
                    inheritToCols( attr );
                }
                else if ( sizeXl == 'null' ) {
                    const attr = { sizeXl: '' };
                    setAttributes( attr );
                    inheritToCols( attr );
                }
            }
        };
        const onChangeXlAutoSize = ( value ) => {
            if ( enableInheritanceToCols ) {
                if ( value ) {
                    const attr = { sizeXl: 'auto' };
                    setAttributes( attr );
                    inheritToCols( attr );
                }
                else if ( sizeXl == 'auto' ) {
                    const attr = { sizeXl: '' };
                    setAttributes( attr );
                    inheritToCols( attr );
                }
            }
        };

        const rowClassNames = makeRowClassNames( alignItems, justifyContent, noGutters, formRow );

        return [
            <InspectorControls>
                <PanelBody
                    title={ __( 'Columns Layout', 'bsx-blocks' ) }
                >
                    <div className="block-editor-block-styles">
                        { colsTemplates.map( (
                            template,
                            index // eslint-disable-line no-shadow
                        ) => (
                            <Button
                                label={ template.title }
                                onClick={ () => {
                                    onColsTemplateChange( template.name );
                                } }
                                className={ 'block-editor-block-styles__item d-flex flex-column ' + ( templateName === template.name ? 'is-active' : '' ) }
                            >
                                <div class="block-editor-block-styles__item-preview border-0 p-0">
                                    { template.icon }
                                </div>
                                <div class="block-editor-block-styles__item-label">
                                    { template.title }
                                </div>
                            </Button>
                        ) ) }
                    </div>
                </PanelBody>
                <PanelBody title={ __( 'Row Settings', 'bsx-blocks' ) }>
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

                { templateName === 'custom' && (
                    <PanelBody title={ __( 'Inherit Columns Settings', 'bsx-blocks' ) }>
                        <ToggleControl
                            label={ __( 'Enable inheritance to Columns', 'bsx-blocks' ) }
                            checked={ !! enableInheritanceToCols }
                            onChange={ onChangeEnableInheritanceToCols }
                            help={ __( 'If enabled all Columns settings can be overwritten here. To protect selected Columns from beeing overwritten, disable inheritance option in respective Column settings.', 'bsx-blocks' ) }
                        />

                        <RangeControl 
                            label={ __( 'XS Column Width', 'bsx-blocks' ) }
                            value={ parseInt( sizeXs ) } 
                            onChange={ onChangeXsColSize }
                            min={ 0 }
                            max={ 12 }
                            help={ __( '1 ... 12 or empty', 'bsx-blocks' ) }
                            disabled={ ! enableInheritanceToCols }
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
                            disabled={ ! enableInheritanceToCols }
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
                            disabled={ ! enableInheritanceToCols }
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
                            disabled={ ! enableInheritanceToCols }
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
                            disabled={ ! enableInheritanceToCols }
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
                            label={ __( 'From row config (test)', 'bsx-blocks' ) }
                            value={ fromRowConfig } 
                            onChange={ onChangeFromRowConfig }
                        />
                    </PanelBody>
                ) }
            </InspectorControls>,
            (
                <div className={ rowClassNames } data-row-config={ rowConfig } data-from-row-config={ fromRowConfig } data-template-name={ templateName }>
                    <InnerBlocks 
                        template={ colsTemplate }
                        templateLock={ colsTemplateLock }
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
                templateName,
                enableInheritanceToCols,
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
            <div className={ rowClassNames } data-row-config={ rowConfig } data-from-row-config={ fromRowConfig } data-template-name={ templateName }>
                <InnerBlocks.Content />
            </div>
        );
    },
} );

