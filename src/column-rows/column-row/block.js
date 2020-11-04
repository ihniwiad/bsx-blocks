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

const makeColumnRowClassNames = ( config ) => {

    const classNames = [];

    if ( !! config.columnRowType ) {
        classNames.push( 'column-row-' + config.columnRowType );
    }
    else {
        // default class name
        classNames.push( 'column-row' );
    }

    if ( !! config.alignItems ) {
        classNames.push( 'align-items-' + config.alignItems );
    }

    if ( !! config.display ) {
        classNames.push( 'd-' + config.display );
    }

    //console.log( 'classNames.join( \' \' ): "' + classNames.join( ' ' ) + '"' );

    return classNames.join( ' ' );
}


registerBlockType( 'bsx-blocks/column-row', {
    title: __( 'BSX Column Row', 'bsx-blocks' ),
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" role="img" aria-hidden="true" focusable="false">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M39,12H9c-1.1,0-2,0.9-2,2v20c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V14C41,12.9,40.1,12,39,12z M39,34H9v-5h30V34z M39,27H9 V14h30V27z"/>
        </svg>
    ),
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

        const config = {
            columnRowType: columnRowType,
            alignItems: alignItems,
            display: display,
        };
        const columnRowClassNames = makeColumnRowClassNames( config );

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

        const config = {
            columnRowType: columnRowType,
            alignItems: alignItems,
            display: display,
        };

        const columnRowClassNames = makeColumnRowClassNames( config );

        return (
            <div className={ columnRowClassNames }>
                <InnerBlocks.Content />
            </div>
        );
    },
} );
