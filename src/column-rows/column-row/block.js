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


import { svgIcon } from './../../_functions/wp-icons.js';


const makeColumnRowClassNames = ( attributes ) => {

    const {
        columnRowType,
        alignItems,
        display,
    } = attributes;

    const classNames = [];

    if ( !! columnRowType ) {
        classNames.push( 'column-row-' + columnRowType );
    }
    else {
        // default class name
        classNames.push( 'column-row' );
    }

    if ( !! alignItems ) {
        classNames.push( 'align-items-' + alignItems );
    }

    if ( !! display ) {
        classNames.push( 'd-' + display );
    }

    //console.log( 'classNames.join( \' \' ): "' + classNames.join( ' ' ) + '"' );

    return classNames.join( ' ' );
}


registerBlockType( 'bsx-blocks/column-row', {
    title: __( 'BSX Column Row', 'bsx-blocks' ),
    icon: svgIcon( 'column-rows' ),
    category: 'layout',
    parent: [ 'bsx-blocks/column-rows' ],
    attributes: {
        columnRowType: {
            type: 'string',
            default: '',
        },
        alignItems: {
            type: 'string',
        },
        display: {
            type: 'string',
        },
    },

    getEditWrapperProps( attributes ) {
        const {
            columnRowType,
            alignItems,
            display,
        } = attributes;

        return {
            'data-column-row-type': columnRowType,
            'data-align-items': alignItems,
            'data-display': display,
        };
    },

    edit: ( props ) => {

        const {
            className,
            attributes: {
                columnRowType,
                alignItems,
                display,
            },
            setAttributes,
        } = props;

        const hasInnerBlocks = ( children ) => {
            return children.length > 0;
        }

        const onChangeColumnRowType = ( value ) => {
            setAttributes( { columnRowType: value } );
        };
        const onChangeAlignItems = ( value ) => {
            setAttributes( { alignItems: value } );
        };
        const onChangeDisplay = ( value ) => {
            setAttributes( { display: value } );
        };

        const columnRowClassNames = makeColumnRowClassNames( {
            columnRowType,
            alignItems,
            display,
        } );

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
                <PanelBody title={ __( 'Column Row', 'bsx-blocks' ) }>
                    <SelectControl 
                        label={ __( 'Columns Row height', 'bsx-blocks' ) }
                        value={ columnRowType }
                        onChange={ onChangeColumnRowType }
                        options={ [
                            { value: '', label: __( '– Default – (flexible height)', 'bsx-blocks' ) },
                            { value: 'auto', label: __( 'Auto (static height)', 'bsx-blocks' ) },
                        ] }
                        help={ __( 'Column Rows will share their patent’s height dividing it into flexible and/or static height segments.', 'bsx-blocks' ) }
                    />
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
                        label={ __( 'Display', 'bsx-blocks' ) }
                        value={ display }
                        onChange={ onChangeDisplay }
                        options={ [
                            { value: '', label: __( '– unset –', 'bsx-blocks' ) },
                            { value: 'flex', label: __( 'Flex', 'bsx-blocks' ) },
                        ] }
                    />
                </PanelBody>
            </InspectorControls>,
            (
                <div className={ columnRowClassNames } data-block="column-row" data-column-row-type={ columnRowType }>
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
    },
    save: ( props ) => {
        const {
            className,
            attributes: {
                columnRowType,
                alignItems,
                display,
            },
        } = props;

        const columnRowClassNames = makeColumnRowClassNames( {
            columnRowType,
            alignItems,
            display,
        } );

        return (
            <div className={ columnRowClassNames }>
                <InnerBlocks.Content />
            </div>
        );
    },
} );
