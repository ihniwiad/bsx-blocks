const { __, setLocaleData } = wp.i18n;
const {
    registerBlockType,
} = wp.blocks;
const {
    InnerBlocks,
    InspectorControls,
} = wp.blockEditor;
const { 
    PanelBody,
    TextControl,
    ToggleControl,
    SelectControl,
    Button,
    SVG, 
    Path,
} = wp.components;

const { 
    withSelect, 
} = wp.data;

const makeClassNames = ( belowNavbar, marginBefore, marginAfter ) => {

    const classNames = [];

    if ( belowNavbar ) {
    	classNames.push( 'below-navbar-content' );
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

    return classNames.join( ' ' );
}

const makeSaveAttributes = ( attributes ) => {
    const nonEmptyAttributes = {};
    for ( let [ key, value ] of Object.entries( attributes ) ) {
        //console.log( 'key: "' + key + '", val: "' + value + '"' );
        if ( value ) {
            nonEmptyAttributes[ key ] = value;
        }
    }
    return nonEmptyAttributes;
}


registerBlockType( 'bsx-blocks/section', {
    title: __( 'BSX Section', 'bsx-blocks' ),
    icon: 'category',
    category: 'layout',
    attributes: {
        templateName: {
            type: 'string',
            default: 'empty',
        },
        belowNavbar: {
            type: 'boolean',
            default: false,
        },
        id: {
            type: 'string',
            default: '',
        },
        marginBefore: {
            type: 'string',
            default: '',
        },
        marginAfter: {
            type: 'string',
            default: '',
        },
    },

    edit: withSelect( ( select, { clientId } ) => {
        const { 
            getBlocksByClientId,
            getBlockAttributes, 
        } = select( 'core/block-editor' );

        const children = getBlocksByClientId( clientId )[ 0 ]
            ? getBlocksByClientId( clientId )[ 0 ].innerBlocks
            : [];

        return {
            children,
        };
    } )( ( props ) => {

        const {
            className,
            attributes: {
                templateName,
	            belowNavbar,
	            id,
	            marginBefore,
	            marginAfter,
            },
            setAttributes,
            children,
        } = props;

        const hasInnerBlocks = ( children ) => {
            return children.length > 0;
        }

        const templates = [
            {
                name: 'empty',
                title: __( 'Empty', 'bsx-blocks' ),
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
                template: [],
                templateLock: false,
            },
            {
                name: 'container-with-heading',
                title: __( 'Container with Heading', 'bsx-blocks' ),
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
                        'bsx-blocks/container', 
                        {},
                        [
                            [
                                'core/heading',
                                { placeholder: 'Add heading, configure heading level...' }
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

        let template = getTemplate( templateName );

        const onTemplateChange = ( value ) => {
            template = getTemplate( value );
            setAttributes( { templateName: value } );
        };

        const onChangeBelowNavbar = ( value ) => {
            setAttributes( { belowNavbar: value } );
        };

        const onChangeId = ( value ) => {
            setAttributes( { id: value } );
        };

        const onChangeMarginBefore = ( value ) => {
            setAttributes( { marginBefore: value } );
        };

        const onChangeMarginAfter = ( value ) => {
            setAttributes( { marginAfter: value } );
        };

        const containerClassName = makeClassNames( belowNavbar, marginBefore, marginAfter );

        return [
            <InspectorControls>
                <PanelBody title={ __( 'Section Settings', 'bsx-blocks' ) }>
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
                    <ToggleControl
                        label={ __( 'Move below navbar', 'bsx-blocks' ) }
                        checked={ !! belowNavbar }
                        onChange={ onChangeBelowNavbar }
                        help={ __( 'If enabled section has spacer top to avoid overlapping its contents by navbar.', 'bsx-blocks' ) }
                    />
                    <TextControl 
                        label={ __( 'ID', 'bsx-blocks' ) }
                        value={ id } 
                        onChange={ onChangeId }
                    />
                </PanelBody>

                <PanelBody title={ __( 'Margin', 'bsx-blocks' ) }>
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
                        help={ __( 'Spacer before Container', 'bsx-blocks' ) }
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
                        help={ __( 'Spacer after Container', 'bsx-blocks' ) }
                    />
                </PanelBody>
            </InspectorControls>,
            (
            	<section className={ containerClassName } id={ id }>
                    <InnerBlocks 
                        template={ template }
                        renderAppender={
                            hasInnerBlocks
                            ? undefined
                            : () => <InnerBlocks.ButtonBlockAppender />
                        }
                    />
                </section>
            )
        ];
    } ),
    save: ( props ) => {
        const {
            className,
            attributes: {
                templateName,
	            belowNavbar,
	            id,
	            marginBefore,
	            marginAfter,
            },
        } = props;

        const containerClassName = makeClassNames( belowNavbar, marginBefore, marginAfter );

        const saveAttributes = makeSaveAttributes( {
            id: id,
        } );

        return (
            <section 
                className={ containerClassName } 
                { ...saveAttributes }
            >
                <InnerBlocks.Content />
            </section>
        );
    },
} );
