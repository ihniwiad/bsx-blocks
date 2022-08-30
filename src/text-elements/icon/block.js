// TODO: add title (to be used if link)

const { __, setLocaleData } = wp.i18n;
const {
    registerBlockType,
} = wp.blocks;
const {
    InspectorControls,
    InspectorAdvancedControls,
    RichText,
} = wp.blockEditor;
const { 
    PanelBody,
    SVG, 
    Path,
    SelectControl,
    TextControl,
} = wp.components;


// functions imports

import { svgIcon } from './../../_functions/wp-icons.js';
import { addClassNames } from './../../_functions/add-class-names.js';
import { makeSaveAttributes } from './../../_functions/attributes.js';
import { 
    textColorSelect,
    linkUrlInput,
    targetToggle,
    relInput,
    marginLeftSelect,
    marginRightSelect,
    marginBeforeSelect,
    marginAfterSelect,
    iconFamilySelect,
    iconKeyInput,
    verticalAlignSelect,
} from './../../_functions/controls.js';


// functions

const makeIconClassNames = ( attributes ) => {

    const {
        state,
        hoverState,
        // iconType,
        iconSize,
    } = attributes;

    const classNames = [];

    if ( !! hoverState ) {
        classNames.push( 'hover-text-' + hoverState );
    }

    if ( !! state ) {
        classNames.push( 'text-' + state );
    }

    // if ( !! iconType ) {
    //     classNames.push( 'fa-' + iconType );
    // }

    if ( !! iconSize ) {
        classNames.push( 'fa-' + iconSize );
    }

    return classNames.join( ' ' );
}

registerBlockType( 'bsx-blocks/icon', {
    title: __( 'BSX Icon', 'bsx-blocks' ),
    icon: svgIcon( 'icon' ),
    category: 'layout',
    attributes: {
        iconKey: {
            type: 'string',
            default: 'heart',
        },
        iconFamily: {
            type: 'string',
        },
        href: {
            type: 'string',
        },
        target: {
            type: 'string',
        },
        rel: {
            type: 'string',
        },
        state: {
            type: 'string',
            default: 'primary',
        },
        hoverState: {
            type: 'string',
        },
        iconType: {
            type: 'string',
        },
        iconSize: {
            type: 'string',
        },
        marginLeft: {
            type: 'string',
        },
        marginRight: {
            type: 'string',
        },
        marginBefore: {
            type: 'string',
        },
        marginAfter: {
            type: 'string',
        },
        verticalAlign: {
            type: 'string',
        },
    },

    edit: ( props ) => {

        const {
            className,
            attributes: {
                iconKey,
                iconFamily,
                href,
                target,
                rel,
                state,
                hoverState,
                iconType,
                iconSize,
                marginLeft,
                marginRight,
                marginBefore,
                marginAfter,
                verticalAlign,
            },
            setAttributes,
            isSelected,
        } = props;

        const onChangeIconKey = ( value ) => {
            setAttributes( { iconKey: value } );
        };
        const onChangeIconFamily = ( value ) => {
            setAttributes( { iconFamily: value } );
        };
        const onChangeHref = ( value ) => {
            setAttributes( { href: value } );
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
        const onChangeHoverState = ( value ) => {
            setAttributes( { hoverState: value } );
        };
        const onChangeIconType = ( value ) => {
            setAttributes( { iconType: value } );
        };
        const onChangeIconSize = ( value ) => {
            setAttributes( { iconSize: value } );
        };

        const onChangeMarginLeft = ( value ) => {
            setAttributes( { marginLeft: value } );
        };

        const onChangeMarginRight = ( value ) => {
            setAttributes( { marginRight: value } );
        };

        const onChangeMarginBefore = ( value ) => {
            setAttributes( { marginBefore: value } );
        };

        const onChangeMarginAfter = ( value ) => {
            setAttributes( { marginAfter: value } );
        };

        const onChangeVerticalAlign = ( value ) => {
            setAttributes( { verticalAlign: value } );
        };

        let iconClassNames = makeIconClassNames( { 
            state, 
            hoverState,
            iconType,
            iconSize,
        } );
        iconClassNames = addClassNames( {
            marginLeft, 
            marginRight, 
            marginBefore,
            marginAfter,
            verticalAlign,
        }, iconClassNames );

        const saveAttributes = makeSaveAttributes( {
            href: 'javascript:void( 0 );',
            // target: target, 
            // rel: href ? ( rel ? rel + ' noopener noreferrer' : 'noopener noreferrer' ) : '',
        } );

        const familyClassName = ( !! iconFamily ) ? 'fa' + iconFamily : 'fa';

        const mergedIconClassName = iconType == 'circle'
            ? 'fa-stack ' + iconClassNames
            : familyClassName + ' fa-' + iconKey + ' ' + iconClassNames
        ;
        const iconInnerClassName = iconType == 'circle'
            ? familyClassName + ' fa-' + iconKey + ' fa-stack-1x fa-inverse'
            : ''
        ; 
        const TagName = !! href
            ? 'a'
            : 'span'
        ; 

        return [
            <InspectorControls>
                <PanelBody title={ __( 'Appearance', 'bsx-blocks' ) }>
                    {
                        iconKeyInput( iconKey, onChangeIconKey )
                    }
                    {
                        iconFamilySelect( iconFamily, onChangeIconFamily )
                    }
                    {
                        textColorSelect( state, onChangeState )
                    }
                    <TextControl 
                        label={ __( 'Hover color', 'bsx-blocks' ) }
                        value={ hoverState } 
                        onChange={ onChangeHoverState }
                    />
                    <SelectControl label={ __( 'Icon type', 'bsx-blocks' ) }
                        value={ iconType }
                        onChange={ onChangeIconType }
                        options={ [
                            { value: '', label: __( '– unset –', 'bsx-blocks' ) },
                            { value: 'circle', label: __( 'Circle', 'bsx-blocks' ) },
                            { value: 'border', label: __( 'Border', 'bsx-blocks' ) },
                        ] }
                    />
                    <SelectControl label={ __( 'Icon size', 'bsx-blocks' ) }
                        value={ iconSize }
                        onChange={ onChangeIconSize }
                        options={ [
                            { value: '', label: __( '– unset –', 'bsx-blocks' ) },
                            { value: 'lg', label: __( 'Lg', 'bsx-blocks' ) },
                            { value: '2x', label: __( '2x', 'bsx-blocks' ) },
                            { value: '3x', label: __( '3x', 'bsx-blocks' ) },
                            { value: '4x', label: __( '4x', 'bsx-blocks' ) },
                            { value: '5x', label: __( '5x', 'bsx-blocks' ) },
                            { value: '6x', label: __( '6x', 'bsx-blocks' ) },
                            { value: '7x', label: __( '7x', 'bsx-blocks' ) },
                            { value: '8x', label: __( '8x', 'bsx-blocks' ) },
                            { value: '9x', label: __( '9x', 'bsx-blocks' ) },
                            { value: '10x', label: __( '10x', 'bsx-blocks' ) },
                        ] }
                    />
                </PanelBody>

                <PanelBody title={ __( 'Margin', 'bsx-blocks' ) }>
                    {
                        marginLeftSelect( marginLeft, onChangeMarginLeft, [ '', '0', '1', '2', '3' ] )
                    }
                    {
                        marginRightSelect( marginRight, onChangeMarginRight, [ '', '0', '1', '2', '3' ] )
                    }
                    {
                        marginBeforeSelect( marginBefore, onChangeMarginBefore )
                    }
                    {
                        marginAfterSelect( marginAfter, onChangeMarginAfter )
                    }
                </PanelBody>
                <PanelBody title={ __( 'Link', 'bsx-blocks' ) }>
                    {
                        linkUrlInput( href, onChangeHref )
                    }
                    {
                        targetToggle( target, onChangeTarget )
                    }
                    {
                        relInput( rel, onChangeRel )
                    }
                </PanelBody>
            </InspectorControls>,
            <InspectorAdvancedControls>
                {
                    verticalAlignSelect( verticalAlign, onChangeVerticalAlign )
                }
            </InspectorAdvancedControls>,
            (
                <>
                    {
                        iconType == 'circle' ? (
                            <TagName class={ mergedIconClassName } aria-hidden="true" { ...saveAttributes }>
                                <i class="fa fa-circle fa-stack-2x"></i>
                                <i class={ iconInnerClassName }></i>
                            </TagName>
                        )
                        :
                        (
                            <TagName class={ mergedIconClassName } aria-hidden="true" { ...saveAttributes }></TagName>
                        )
                    }
                </>
            )
        ];
    },
    save: ( props ) => {
        const {
            className,
            attributes: {
                iconKey,
                iconFamily,
                href,
                target,
                rel,
                state,
                hoverState,
                iconType,
                iconSize,
                marginLeft,
                marginRight,
                marginBefore,
                marginAfter,
                verticalAlign,
            },
        } = props;
        
        let iconClassNames = makeIconClassNames( { 
            state, 
            hoverState, 
            iconType,
            iconSize,
        } );
        iconClassNames = addClassNames( {
            marginLeft, 
            marginRight, 
            marginBefore,
            marginAfter,
            verticalAlign,
        }, iconClassNames );

        const saveAttributes = makeSaveAttributes( {
            href: href, 
            target: target, 
            rel: href ? ( rel ? rel + ' noopener noreferrer' : 'noopener noreferrer' ) : '',
        } );

        const familyClassName = ( !! iconFamily ) ? 'fa' + iconFamily : 'fa';

        const mergedIconClassName = iconType == 'circle'
            ? 'fa-stack ' + iconClassNames
            : familyClassName + ' fa-' + iconKey + ' ' + iconClassNames
        ;
        const iconInnerClassName = iconType == 'circle'
            ? familyClassName + ' fa-' + iconKey + ' fa-stack-1x fa-inverse'
            : ''
        ; 
        const TagName = !! href
            ? 'a'
            : 'span'
        ; 

        return (
            <>
                {
                    iconType == 'circle' ? (
                        <TagName className={ mergedIconClassName } aria-hidden="true" { ...saveAttributes }>
                            <i class="fa fa-circle fa-stack-2x"></i>
                            <i class={ iconInnerClassName }></i>
                        </TagName>
                    )
                    :
                    (
                        <TagName className={ mergedIconClassName } aria-hidden="true" { ...saveAttributes }></TagName>
                    )
                }
            </>
        );
    },
} );
