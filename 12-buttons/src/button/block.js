const { __, setLocaleData } = wp.i18n;
const {
    registerBlockType,
} = wp.blocks;
const {
    InnerBlocks,
    InspectorControls,
    URLInput,
    RichText,
} = wp.blockEditor;
const { 
    TextControl,
    PanelBody,
    RangeControl,
    ToggleControl,
    SelectControl,
} = wp.components;

const { 
    withSelect, 
} = wp.data;

const makeButtonClassNames = ( state, stateType, marginLeft, marginRight ) => {

    const classNames = [ 'btn' ];

    const prefix = 'btn-';

    let buildClassName = prefix;

    if ( state ) {
        if ( stateType ) {
            buildClassName += stateType + '-';
        }
        buildClassName += state;
        classNames.push( buildClassName );
    }

    if ( marginLeft && marginLeft === marginRight ) {
        classNames.push( 'mx-' + marginLeft );
    }
    else {
        if ( marginLeft ) {
            classNames.push( 'ml-' + marginLeft );
        }
        if ( marginRight ) {
            classNames.push( 'mr-' + marginRight );
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

registerBlockType( 'bsx-blocks/button', {
    title: __( 'BSX Button', 'bsx-blocks' ),
    icon: 'admin-links',
    category: 'layout',
    parent: [ 'bsx-blocks/buttons' ],
    attributes: {
        href: {
            type: 'string',
            default: '',
        },
        hash: {
            type: 'string',
            default: '',
        },
        content: {
            type: 'array',
            source: 'children',
            selector: '.btn',
        },
        target: {
            type: 'string',
            default: '',
        },
        rel: {
            type: 'string',
            default: '',
        },
        state: {
            type: 'string',
            default: 'primary',
        },
        stateType: {
            type: 'string',
            default: 'outline',
        },
        dataFn: {
            type: 'string',
            default: '',
        },
        marginLeft: {
            type: 'string',
            default: '',
        },
        marginRight: {
            type: 'string',
            default: '',
        },
    },

    edit: ( props ) => {

        const {
            className,
            attributes: {
                href,
                hash,
                content,
                target,
                rel,
                state,
                stateType,
                dataFn,
                marginLeft,
                marginRight,
            },
            setAttributes,
            isSelected,
        } = props;

        const onChangeContent = ( value ) => {
            setAttributes( { content: value } );
        };
        const onChangeHref = ( value ) => {
            setAttributes( { href: value } );
        };
        const onChangeHash = ( value ) => {
            setAttributes( { hash: value } );
        };
        const onChangeTarget = ( value ) => {
            setAttributes( { target: !! value ? '_blank' : '' } );
        };
        const onChangeRel = ( value ) => {
            setAttributes( { rel: value } );
        };
        const onChangeState = ( value ) => {
            setAttributes( { state: value } );
        };
        const onChangeStateType = ( value ) => {
            setAttributes( { stateType: value } );
        };
        const onChangeDataFn = ( value ) => {
            setAttributes( { dataFn: value } );
        };

        const onChangeMarginLeft = ( value ) => {
            setAttributes( { marginLeft: value } );
        };

        const onChangeMarginRight = ( value ) => {
            setAttributes( { marginRight: value } );
        };

        const buttonClassNames = makeButtonClassNames( state, stateType, marginLeft, marginRight );

        return [
            <InspectorControls>
                <PanelBody title={ __( 'Button Settings', 'bsx-blocks' ) }>
                    <SelectControl 
                        label={ __( 'State', 'bsx-blocks' ) }
                        value={ state }
                        onChange={ onChangeState }
                        options={ [
                            { value: 'primary', label: __( 'Primary', 'bsx-blocks' ) },
                            { value: 'secondary', label: __( 'Secondary', 'bsx-blocks' ) },
                            { value: 'success', label: __( 'Success', 'bsx-blocks' ) },
                            { value: 'danger', label: __( 'Danger', 'bsx-blocks' ) },
                            { value: 'warning', label: __( 'Warning', 'bsx-blocks' ) },
                            { value: 'info', label: __( 'Info', 'bsx-blocks' ) },
                            { value: 'light', label: __( 'Light', 'bsx-blocks' ) },
                            { value: 'dark', label: __( 'Dark', 'bsx-blocks' ) },
                            { value: 'link', label: __( 'Link', 'bsx-blocks' ) },
                        ] }
                    />
                    <SelectControl label={ __( 'State Type', 'bsx-blocks' ) }
                        value={ stateType }
                        onChange={ onChangeStateType }
                        options={ [
                            { value: 'outline', label: __( 'Outline', 'bsx-blocks' ) },
                            { value: '', label: __( 'Filled', 'bsx-blocks' ) },
                        ] }
                    />
                    <TextControl 
                        label={ __( 'Rel (optional)', 'bsx-blocks' ) }
                        value={ rel } 
                        onChange={ onChangeRel }
                    />
                    <TextControl 
                        label={ __( 'data-fn (optional)', 'bsx-blocks' ) }
                        value={ dataFn } 
                        onChange={ onChangeDataFn }
                    />
                </PanelBody>

                <PanelBody title={ __( 'Margin', 'bsx-blocks' ) }>
                    <SelectControl 
                        label={ __( 'Margin left', 'bsx-blocks' ) }
                        value={ marginLeft }
                        onChange={ onChangeMarginLeft }
                        options={ [
                            { value: '', label: __( '– none –', 'bsx-blocks' ) },
                            { value: '1', label: __( 'extra small', 'bsx-blocks' ) },
                            { value: '2', label: __( 'small', 'bsx-blocks' ) },
                            { value: '3', label: __( 'medium', 'bsx-blocks' ) },
                        ] }
                    />
                    <SelectControl 
                        label={ __( 'Margin right', 'bsx-blocks' ) }
                        value={ marginRight }
                        onChange={ onChangeMarginRight }
                        options={ [
                            { value: '', label: __( '– none –', 'bsx-blocks' ) },
                            { value: '1', label: __( 'extra small', 'bsx-blocks' ) },
                            { value: '2', label: __( 'small', 'bsx-blocks' ) },
                            { value: '3', label: __( 'medium', 'bsx-blocks' ) },
                        ] }
                    />
                </PanelBody>
            </InspectorControls>,
            (
                <>
                    <span className={ buttonClassNames }>
                        <RichText
                            tagName="a"
                            multiline={ false }
                            placeholder={ __( 'Title', 'bsx-blocks' ) }
                            value={ content }
                            onChange={ onChangeContent }
                        />
                    </span>
                    { isSelected && (
                        <div class="border bg-light mt-2 px-1">
                            <div>
                                <URLInput
                                    value={ href }
                                    onChange={ onChangeHref }
                                />
                            </div>
                            <div>
                                <ToggleControl
                                    label={ __( 'Open in new tab' ) }
                                    checked={ target == '_blank' }
                                    onChange={ onChangeTarget }
                                />
                            </div>
                            <div>
                                <TextControl 
                                    label={ __( 'Hash (optional)', 'bsx-blocks' ) }
                                    value={ hash } 
                                    onChange={ onChangeHash }
                                />
                            </div>
                        </div>
                    ) }
                </>
            )
        ];
    },
    save: ( props ) => {
        const {
            className,
            attributes: {
                href,
                hash,
                content,
                target,
                rel,
                state,
                stateType,
                dataFn,
                marginLeft,
                marginRight,
            },
        } = props;

        const buttonClassNames = makeButtonClassNames( state, stateType, marginLeft, marginRight );

        const saveAttributes = makeSaveAttributes( {
            href: hash ? href + '#' + hash : href, 
            target: target, 
            rel: rel ? rel + ' noopener noreferrer' : 'noopener noreferrer',
            'data-fn': dataFn,
        } );

        return (
            <>
                {
                    content && ! RichText.isEmpty( content ) && (
                        <RichText.Content 
                            tagName={ href ? 'a' : 'button' } 
                            value={ content } 
                            className={ buttonClassNames }
                            { ...saveAttributes }
                        />
                    )
                }
            </>
        );
    },
} );
