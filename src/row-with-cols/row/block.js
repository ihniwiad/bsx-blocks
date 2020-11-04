const { __, setLocaleData } = wp.i18n;
const {
    registerBlockType,
} = wp.blocks;
const {
    InnerBlocks,
    InspectorControls,
    InspectorAdvancedControls,
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


const makeRowClassNames = ( alignItems, justifyContent, noGutters, formRow, marginBefore, marginAfter, paddingBefore, paddingAfter ) => {

    const prefix = 'col';

    const classNames = [ 'row' ];

    if ( alignItems ) {
        classNames.push( 'align-items-' + alignItems );
    }
    if ( justifyContent ) {
        classNames.push( 'justify-content-' + justifyContent );
    }
    if ( noGutters ) {
        classNames.push( 'no-gutters' );
    }
    if ( formRow ) {
        classNames.push( 'form-row' );
    }

    if ( marginBefore && marginBefore === marginAfter ) {
        classNames.push( 'my-' + marginBefore );
    }
    else {
        if ( marginBefore ) {
            classNames.push( 'mt-' + marginBefore );
        }
        if ( marginAfter ) {
            classNames.push( 'mb-' + marginAfter );
        }
    }

    if ( paddingBefore && paddingBefore === paddingAfter ) {
        classNames.push( 'py-' + paddingBefore );
    }
    else {
        if ( paddingBefore ) {
            classNames.push( 'pt-' + paddingBefore );
        }
        if ( paddingAfter ) {
            classNames.push( 'pb-' + paddingAfter );
        }
    }

    //console.log( 'classNames.join( \' \' ): "' + classNames.join( ' ' ) + '"' );

    return classNames.join( ' ' );
}


registerBlockType( 'bsx-blocks/row-with-cols', {
    title: __( 'BSX Columns', 'bsx-blocks' ),
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" role="img" aria-hidden="true" focusable="false"
><path fill-rule="evenodd" clip-rule="evenodd" d="M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z"/></svg>
    ),
    category: 'layout',
    attributes: {
        templateName: {
            type: 'string',
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
        colsMarginAfter: {
            type: 'string',
            default: '3',
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
            className,
            attributes: {
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
                colsMarginAfter,
                marginBefore,
                marginAfter,
                paddingBefore,
                paddingAfter,
            },
            setAttributes,
            isSelected,
            children,
            childrenAttributes,
            updateBlockAttributes,
        } = props;

        const templates = [
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
                            d="M39,12H9c-1.1,0-2,0.9-2,2v20c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V14C41,12.9,40.1,12,39,12z M39,34H9V14h30V34z M22.49,31.03h2.35v-2.21h-2.35V31.03z M22.51,19.38c0.36-0.28,0.81-0.42,1.35-0.42c0.63,0,1.1,0.17,1.43,0.5s0.49,0.81,0.49,1.44 c0,0.54-0.14,1.03-0.43,1.45s-0.68,0.89-1.18,1.38c-0.71,0.6-1.16,1.09-1.35,1.46s-0.3,1.02-0.3,1.94h2.3 c0-0.56,0.04-0.97,0.13-1.25s0.32-0.58,0.68-0.9c0.72-0.58,1.31-1.21,1.77-1.88c0.46-0.67,0.69-1.42,0.69-2.23 c0-1.22-0.37-2.16-1.09-2.83c-0.73-0.67-1.77-1-3.12-1c-1.25,0-2.26,0.31-3.02,0.94c-0.76,0.62-1.15,1.52-1.17,2.69h2.3 C21.97,20.09,22.15,19.66,22.51,19.38z"
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
            const currentTemplate = templates.find( ( item ) => item.name === currentTemplateName );
            return currentTemplate ? currentTemplate.template : [];
        };

        const getColsTemplateLock = ( currentTemplateName ) => {
            const currentTemplate = templates.find( ( item ) => item.name === currentTemplateName );
            return currentTemplate ? currentTemplate.templateLock : false;
        };

        let colsTemplate = getColsTemplate( templateName );
        let colsTemplateLock = getColsTemplateLock( templateName );

        const allowedBlocks = [ 'bsx-blocks/col' ];

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

        const onChangeEnableInheritanceToCols = ( value ) => {
            setAttributes( { enableInheritanceToCols: value } );
        };

        // value = { sizeXX: 'newValue' }
        const inheritToCols = ( value ) => {
            //console.log( 'inheritToCols: ' + typeof value );

            children.forEach( ( column, index ) => {

                //console.log( 'childrenAttributes[' + index + ' ]: "' + childrenAttributes[ index ] + '"' );

                if ( childrenAttributes[ index ].enableInheritanceFromRow ) {

                    const newAttributes = { 
                        sizeXs: value.sizeXs != undefined ? value.sizeXs : sizeXs,
                        sizeSm: value.sizeSm != undefined ? value.sizeSm : sizeSm,
                        sizeMd: value.sizeMd != undefined ? value.sizeMd : sizeMd,
                        sizeLg: value.sizeLg != undefined ? value.sizeLg : sizeLg,
                        sizeXl: value.sizeXl != undefined ? value.sizeXl : sizeXl,
                        marginAfter: value.colsMarginAfter != undefined ? value.colsMarginAfter : colsMarginAfter,
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

        // cols margin bottom
        const onChangeColsMarginAfter = ( value ) => {
            if ( enableInheritanceToCols ) {
                const attr = { colsMarginAfter: value };
                setAttributes( attr );
                inheritToCols( attr );
            }
        };

        const rowClassNames = makeRowClassNames( alignItems, justifyContent, noGutters, formRow, marginBefore, marginAfter, paddingBefore, paddingAfter );

        return [
            <InspectorControls>
                <PanelBody
                    title={ __( 'Columns Layout', 'bsx-blocks' ) }
                >
                    <div className="bsxui-icon-text-button-list">
                        { templates.map( ( template, index ) => (
                            <Button
                                label={ template.title }
                                onClick={ () => {
                                    onColsTemplateChange( template.name );
                                } }
                                className={ 'bsxui-icon-text-button-list-item ' + ( templateName === template.name ? 'active' : '' ) }
                            >
                                <div class="bsxui-icon-text-button-list-item-icon">
                                    { template.icon }
                                </div>
                                <div class="bsxui-icon-text-button-list-item-label">
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

                        <hr/>

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

                        <hr/>

                        <SelectControl 
                            label={ __( 'Margin after', 'bsx-blocks' ) }
                            value={ colsMarginAfter }
                            onChange={ onChangeColsMarginAfter }
                            options={ [
                                { value: '', label: __( '– none –', 'bsx-blocks' ) },
                                { value: '1', label: __( 'extra small', 'bsx-blocks' ) },
                                { value: '2', label: __( 'small', 'bsx-blocks' ) },
                                { value: '3', label: __( 'medium', 'bsx-blocks' ) },
                                { value: '4', label: __( 'large', 'bsx-blocks' ) },
                                { value: '5', label: __( 'extra large', 'bsx-blocks' ) },
                            ] }
                            help={ __( 'Spacer after Column (not Row)', 'bsx-blocks' ) }
                        />

                    </PanelBody>
                ) }

                <PanelBody title={ __( 'Row margin (not Columns)', 'bsx-blocks' ) }>
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
                        help={ __( 'Spacer before Row', 'bsx-blocks' ) }
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
                        help={ __( 'Spacer after Row', 'bsx-blocks' ) }
                    />
                </PanelBody>
            </InspectorControls>,
            <InspectorAdvancedControls>
                <SelectControl 
                    label={ __( 'Padding before', 'bsx-blocks' ) }
                    value={ paddingBefore }
                    onChange={ onChangePaddingBefore }
                    options={ [
                        { value: '', label: __( '– none –', 'bsx-blocks' ) },
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
                        { value: '', label: __( '– none –', 'bsx-blocks' ) },
                        { value: '1', label: __( 'extra small', 'bsx-blocks' ) },
                        { value: '2', label: __( 'small', 'bsx-blocks' ) },
                        { value: '3', label: __( 'medium', 'bsx-blocks' ) },
                        { value: '4', label: __( 'large', 'bsx-blocks' ) },
                        { value: '5', label: __( 'extra large', 'bsx-blocks' ) },
                    ] }
                    help={ __( 'Inner spacer after', 'bsx-blocks' ) }
                />
            </InspectorAdvancedControls>,


            <>
                {
                    ! templateName ? (
                        <div class="bsxui-initial-inline-control">
                            <div class="bsxui-initial-inline-control-heading">
                                { __( 'Please select Columns template', 'bsx-blocks' ) }
                            </div>
                            <div className="bsxui-icon-text-button-list">
                                { templates.map( ( template, index ) => (
                                    <Button
                                        label={ template.title }
                                        onClick={ () => {
                                            onColsTemplateChange( template.name );
                                        } }
                                        className={ 'bsxui-icon-text-button-list-item ' + ( templateName === template.name ? 'active' : '' ) }
                                    >
                                        <div class="bsxui-icon-text-button-list-item-icon">
                                            { template.icon }
                                        </div>
                                        <div class="bsxui-icon-text-button-list-item-label">
                                            { template.title }
                                        </div>
                                    </Button>
                                ) ) }
                            </div>
                        </div>
                    )
                    : 
                    (
                        <div className={ rowClassNames } data-template-name={ templateName }>
                            <InnerBlocks 
                                template={ colsTemplate }
                                templateLock={ colsTemplateLock }
                                allowedBlocks={ allowedBlocks }
                            />
                        </div>
                    )
                }
            </>
        ];
    } ) ),
    save: ( props ) => {
        const {
            className,
            attributes: {
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
                colsMarginAfter,
                marginBefore,
                marginAfter,
                paddingBefore,
                paddingAfter,
            },
        } = props;

        const rowClassNames = makeRowClassNames( alignItems, justifyContent, noGutters, formRow, marginBefore, marginAfter, paddingBefore, paddingAfter );

        return (
            <div className={ rowClassNames }>
                <InnerBlocks.Content />
            </div>
        );
    },
} );

