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
} = wp.components;

const { 
    withSelect,
    withDispatch, 
} = wp.data;


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
    },
    edit: ( props ) => {

        const {
            className,
            attributes: {
                rowConfig,
                colConfig,
            },
            setAttributes,
        } = props;
        const onChangeColConfig = ( value ) => {
            setAttributes( { colConfig: value } );
        };

        return [
            <InspectorControls>
                <PanelBody title={ __( 'BSX Block Settings', 'bsx-blocks' ) }>
                    <TextControl 
                        label={ __( 'Col config (test)', 'bsx-blocks' ) }
                        value={ colConfig } 
                        onChange={ onChangeColConfig }
                    />
                </PanelBody>
            </InspectorControls>,
            (
                <div className="col-md-4" data-col-config={ colConfig } data-row-config={ rowConfig }>
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
            },
        } = props;

        return (
            <div className="col-md-4" data-col-config={ colConfig } data-row-config={ rowConfig }>
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
            [ 'bsx-blocks/col', {}, [
            ] ],
            [ 'bsx-blocks/col', {}, [
            ] ],
            [ 'bsx-blocks/col', {}, [
            ] ],
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

