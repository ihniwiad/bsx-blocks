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


const makeColumnRowsClassNames = ( config ) => {

    const classNames = [];

    if ( !! config.display ) {
        classNames.push( 'd-' + config.display );
    }
    if ( !! config.flexDirection ) {
        classNames.push( 'flex-' + config.flexDirection );
    }
    if ( !! config.width ) {
        classNames.push( 'w-' + config.width );
    }

    // console.log( 'classNames.join( \' \' ): "' + classNames.join( ' ' ) + '"' );

    return classNames.join( ' ' );
}


registerBlockType( 'bsx-blocks/column-rows', {
    title: __( 'BSX Column Rows', 'bsx-blocks' ),
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" role="img" aria-hidden="true" focusable="false">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M39,12H9c-1.1,0-2,0.9-2,2v20c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V14C41,12.9,40.1,12,39,12z M39,34H9v-5h30V34z M39,27H9 v-6h30V27z M39,19H9v-5h30V19z"/>
        </svg>
    ),
    category: 'layout',
    attributes: {
        templateName: {
            type: 'string',
        },
        display: {
            type: 'string',
            default: 'flex',
        },
        flexDirection: {
            type: 'string',
            default: 'column',
        },
        width: {
            type: 'string',
            default: '100',
        }
    },

    getEditWrapperProps( attributes ) {
        const {
            display,
            flexDirection,
            width,
        } = attributes;

        return {
            'data-display': display,
            'data-flexDirection': flexDirection,
            'data-width': width,
        };
    },

    edit: ( props ) => {
        const {
            className,
            attributes: {
                templateName,
                display,
                flexDirection,
                width,
            },
            setAttributes,
            isSelected
        } = props;

        const templates = [
            {
                name: 'default-auto',
                title: __( 'Flex, static', 'bsx-blocks' ),
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" role="img" aria-hidden="true" focusable="false">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M39,12H9c-1.1,0-2,0.9-2,2v20c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V14C41,12.9,40.1,12,39,12z M39,34H9v-5h30V34z M39,27H9 V14h30V27z"/>
                    </svg>
                ),
                template: [ 
                    [ 
                        'bsx-blocks/column-row', 
                        {},
                        [
                            [
                                'core/paragraph',
                                { 
                                    placeholder: 'Edit or insert other content and delete paragraph...',
                                }
                            ]
                        ],
                    ], 
                    [ 
                        'bsx-blocks/column-row', 
                        {
                            columnRowType: 'auto',
                        },
                        [
                            [
                                'core/paragraph',
                                { 
                                    placeholder: 'Edit or insert other content and delete paragraph...',
                                }
                            ]
                        ],
                    ], 
                ],
                templateLock: false,
            },
            {
                name: 'auto-default',
                title: __( 'Static, flex', 'bsx-blocks' ),
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" role="img" aria-hidden="true" focusable="false">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M39,36H9c-1.1,0-2-0.9-2-2V14c0-1.1,0.9-2,2-2h30c1.1,0,2,0.9,2,2v20C41,35.1,40.1,36,39,36z M39,14H9v5h30V14z M39,21H9v13 h30V21z"/>
                    </svg>
                ),
                template: [ 
                    [ 
                        'bsx-blocks/column-row', 
                        {
                            columnRowType: 'auto',
                        },
                        [
                            [
                                'core/paragraph',
                                { 
                                    placeholder: 'Edit or insert other content and delete paragraph...',
                                }
                            ]
                        ],
                    ], 
                    [ 
                        'bsx-blocks/column-row', 
                        {},
                        [
                            [
                                'core/paragraph',
                                { 
                                    placeholder: 'Edit or insert other content and delete paragraph...',
                                }
                            ]
                        ],
                    ], 
                ],
                templateLock: false,
            },
        ];

        const getTemplate = ( currentTemplateName ) => {
            const currentTemplate = templates.find( ( item ) => item.name === currentTemplateName );
            return currentTemplate ? currentTemplate.template : [];
        };

        const getTemplateLock = ( currentTemplateName ) => {
            const currentTemplate = templates.find( ( item ) => item.name === currentTemplateName );
            return currentTemplate ? currentTemplate.templateLock : false;
        };

        let template = getTemplate( templateName );
        let templateLock = getTemplateLock( templateName );

        const allowedBlocks = [ 'bsx-blocks/column-row' ];

        const onTemplateChange = ( value ) => {
            template = getTemplate( value );
            setAttributes( { templateName: value } );

            // console.log( 'changed templateName: ' + value );
            // console.log( 'changed template: ' + template );
        };

        const onChangeDisplay = ( value ) => {
            setAttributes( { display: value } );
        };
        const onChangeFlexDirection = ( value ) => {
            setAttributes( { flexDirection: value } );
        };
        const onChangeWidth = ( value ) => {
            setAttributes( { width: value } );
        };

        const config = {
            display: display,
            flexDirection: flexDirection,
            width: width,
        };
        const columnsRowsClassNames = makeColumnRowsClassNames( config );

        return [
            <InspectorControls>
                <PanelBody
                    title={ __( 'Column Rows layout', 'bsx-blocks' ) }
                >
                    <div className="bsxui-icon-text-button-list">
                        { templates.map( ( template, index ) => (
                            <Button
                                label={ template.title }
                                onClick={ () => {
                                    onTemplateChange( template.name );
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
            </InspectorControls>,

            <InspectorAdvancedControls>
                <PanelBody title={ __( 'Column Rows settings', 'bsx-blocks' ) }>
                    <SelectControl 
                        label={ __( 'Display', 'bsx-blocks' ) }
                        value={ display }
                        onChange={ onChangeDisplay }
                        options={ [
                            { value: '', label: __( '– unset –', 'bsx-blocks' ) },
                            { value: 'flex', label: __( 'Flex', 'bsx-blocks' ) },
                        ] }
                    />
                    <SelectControl 
                        label={ __( 'Flex direction', 'bsx-blocks' ) }
                        value={ flexDirection }
                        onChange={ onChangeFlexDirection }
                        options={ [
                            { value: '', label: __( '– unset –', 'bsx-blocks' ) },
                            { value: 'column', label: __( 'Column', 'bsx-blocks' ) },
                        ] }
                    />
                    <SelectControl 
                        label={ __( 'Width', 'bsx-blocks' ) }
                        value={ width }
                        onChange={ onChangeWidth }
                        options={ [
                            { value: '', label: __( '– unset –', 'bsx-blocks' ) },
                            { value: '100', label: __( '100 %', 'bsx-blocks' ) },
                        ] }
                    />
                </PanelBody>
            </InspectorAdvancedControls>,

            <>
                {
                    ! templateName ? (
                        <div class="bsxui-initial-inline-control">
                            <div class="bsxui-initial-inline-control-heading">
                                { __( 'Please select Column Rows template', 'bsx-blocks' ) }
                            </div>
                            <div className="bsxui-icon-text-button-list">
                                { templates.map( ( template, index ) => (
                                    <Button
                                        label={ template.title }
                                        onClick={ () => {
                                            onTemplateChange( template.name );
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
                        <div className={ columnsRowsClassNames } data-block="column-rows" data-template-name={ templateName }>
                            <InnerBlocks 
                                template={ template }
                                templateLock={ templateLock }
                                allowedBlocks={ allowedBlocks }
                            />
                        </div>
                    )
                }
            </>
        ];
    },
    save: ( props ) => {
        const {
            className,
            attributes: {
                templateName,
                display,
                flexDirection,
                width,
            },
        } = props;

        const config = {
            display: display,
            flexDirection: flexDirection,
            width: width,
        };
        const columnsRowsClassNames = makeColumnRowsClassNames( config );

        return (
            <div className={ columnsRowsClassNames }>
                <InnerBlocks.Content />
            </div>
        );
    },
} );

