const { __, setLocaleData } = wp.i18n;
const {
    registerBlockType,
} = wp.blocks;
const {
    InspectorControls,
    RichText,
} = wp.blockEditor;
const { 
    PanelBody,
    SVG, 
    Path,
    SelectControl,
} = wp.components;


// functions imports

import { svgIcon } from './../../_functions/wp-icons.js';
import { addClassNames } from './../../_functions/add-class-names.js';
import { makeSaveAttributes } from './../../_functions/attributes.js';
import { 
    stateSelect,
    linkUrlInput,
    targetToggle,
    relInput,
    marginLeftSelect,
    marginRightSelect,
    marginBeforeSelect,
    marginAfterSelect,
    textColorSelect,
    bgColorSelect,
    iconFamilySelect,
    iconKeyInput,
} from './../../_functions/controls.js';


// functions

const makeBadgeClassNames = ( attributes, className ) => {

    const {
        state,
        badgeType,
    } = attributes;

    const classNames = [ 'badge' ];

    if ( !! state ) {
        classNames.push( 'badge-' + state );
    }

    if ( !! badgeType ) {
        classNames.push( 'badge-' + badgeType );
    }

    if ( !! className ) {
        classNames.push( className );
    }

    return classNames.join( ' ' );
}

registerBlockType( 'bsx-blocks/badge', {
    title: __( 'BSX Badge', 'bsx-blocks' ),
    icon: svgIcon( 'badge' ),
    category: 'layout',
    attributes: {
        href: {
            type: 'string',
            default: '',
        },
        content: {
            type: 'array',
            source: 'children',
            selector: '.badge-content',
        },
        state: {
            type: 'string',
            default: 'primary',
        },
        badgeType: {
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
        textColor: {
            type: 'string',
        },
        bgColor: {
            type: 'string',
        },
        iconKey: {
            type: 'string',
        },
        iconFamily: {
            type: 'string',
        },
    },

    edit: ( props ) => {

        const {
            // className,
            attributes: {
                className,
                href,
                content,
                state,
                badgeType,
                marginLeft,
                marginRight,
                marginBefore,
                marginAfter,
                textColor,
                bgColor,
                iconKey,
                iconFamily,
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
        // const onChangeTarget = ( value ) => {
        //     setAttributes( { target: !! value ? '_blank' : '' } );
        // };
        // const onChangeRel = ( value ) => {
        //     setAttributes( { rel: value } );
        // };
        const onChangeState = ( value ) => {
            setAttributes( { state: value } );
        };
        const onChangeBadgeType = ( value ) => {
            setAttributes( { badgeType: value } );
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

        const onChangeTextColor = ( value ) => {
            setAttributes( { textColor: value } );
        };
        const onChangeBgColor = ( value ) => {
            setAttributes( { bgColor: value } );
        };

        const onChangeIconKey = ( value ) => {
            setAttributes( { iconKey: value } );
        };
        const onChangeIconFamily = ( value ) => {
            setAttributes( { iconFamily: value } );
        };

        let badgeClassNames = makeBadgeClassNames( { 
            state, 
            badgeType,
        }, className );
        badgeClassNames = addClassNames( {
            marginLeft, 
            marginRight, 
            marginBefore,
            marginAfter,
            textColor,
            bgColor,
        }, badgeClassNames );

        if ( ! iconKey ) {
            badgeClassNames += ' badge-content';
        }

        const TagName = href ? 'a' : 'span';
        const iconFamilyClassName = ( !! iconFamily ) ? 'fa' + iconFamily : 'fa';
        const iconClassNames = iconFamilyClassName + ' ' + ( iconKey ? 'fa-' + iconKey : '' ) + ' pr-1';

        return [
            <InspectorControls>
                <PanelBody title={ __( 'Settings', 'bsx-blocks' ) }>
                    {
                        linkUrlInput( href, onChangeHref )
                    }
                    {
                        // targetToggle( target, onChangeTarget )
                    }
                    {
                        // relInput( rel, onChangeRel )
                    }
                </PanelBody>

                <PanelBody title={ __( 'Appearance', 'bsx-blocks' ) }>
                    {
                        stateSelect( state, onChangeState )
                    }
                    <SelectControl label={ __( 'Type', 'bsx-blocks' ) }
                        value={ badgeType }
                        onChange={ onChangeBadgeType }
                        options={ [
                            { value: '', label: __( '– unset –', 'bsx-blocks' ) },
                            { value: 'pill', label: __( 'Pill', 'bsx-blocks' ) },
                        ] }
                    />
                    {
                        textColorSelect( textColor, onChangeTextColor )
                    }
                    {
                        bgColorSelect( bgColor, onChangeBgColor )
                    }
                </PanelBody>

                <PanelBody title={ __( 'Icon', 'bsx-blocks' ) }>
                    {
                        iconKeyInput( iconKey, onChangeIconKey )
                    }
                    {
                        iconFamilySelect( iconFamily, onChangeIconFamily )
                    }
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
            </InspectorControls>,
            (
                <>
                    {
                        iconKey ? (
                            <TagName className={ badgeClassNames }>
                                <span className={ iconClassNames } aria-hidden="true"></span>
                                <RichText
                                    tagName={ 'span' }
                                    multiline={ false }
                                    placeholder={ __( 'Add Text...', 'bsx-blocks' ) }
                                    value={ content }
                                    onChange={ onChangeContent }
                                    allowedFormats={ [] }
                                    keepPlaceholderOnFocus
                                    href={ 'javascript:void( 0 );' }
                                />
                            </TagName>
                        )
                        :
                        (
                            <>
                                <RichText
                                    tagName={ TagName }
                                    className={ badgeClassNames }
                                    multiline={ false }
                                    placeholder={ __( 'Add Text...', 'bsx-blocks' ) }
                                    value={ content }
                                    onChange={ onChangeContent }
                                    allowedFormats={ [] }
                                    keepPlaceholderOnFocus
                                    href={ 'javascript:void( 0 );' }
                                />
                            </>
                        )
                    }
                </>
            )
        ];
    },
    save: ( props ) => {
        const {
            // className,
            attributes: {
                className,
                href,
                content,
                state,
                badgeType,
                marginLeft,
                marginRight,
                marginBefore,
                marginAfter,
                textColor,
                bgColor,
                iconKey,
                iconFamily,
            },
        } = props;
        
        let badgeClassNames = makeBadgeClassNames( { 
            state, 
            badgeType,
        }, className );
        badgeClassNames = addClassNames( {
            marginLeft, 
            marginRight, 
            marginBefore,
            marginAfter,
            textColor,
            bgColor,
        }, badgeClassNames );

        if ( ! iconKey ) {
            badgeClassNames += ' badge-content';
        }

        const saveAttributes = makeSaveAttributes( {
            href: href, 
            // target: target, 
            // rel: href ? ( rel ? rel + ' noopener noreferrer' : 'noopener noreferrer' ) : '',
        } );

        const TagName = href ? 'a' : 'span';
        const iconFamilyClassName = ( !! iconFamily ) ? 'fa' + iconFamily : 'fa';
        const iconClassNames = iconFamilyClassName + ' ' + ( iconKey ? 'fa-' + iconKey : '' ) + ' pr-1';

        return (
            <>
                {
                    iconKey ? (
                        <TagName className={ badgeClassNames }{ ...saveAttributes }>
                            <span className={ iconClassNames } aria-hidden="true"></span>
                            {
                                ( content && ! RichText.isEmpty( content ) ) && (
                                    <RichText.Content 
                                        tagName={ 'span' } 
                                        value={ content } 
                                        className={ 'badge-content' }
                                    />
                                )
                            }
                        </TagName>
                    )
                    :
                    (
                        <>
                            {
                                ( content && ! RichText.isEmpty( content ) ) && (
                                    <RichText.Content 
                                        tagName={ TagName } 
                                        value={ content } 
                                        className={ badgeClassNames }
                                        { ...saveAttributes }
                                    />
                                )
                            }
                        </>
                    )
                }
            </>
        );
    },
} );
