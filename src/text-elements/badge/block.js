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
} from './../../_functions/controls.js';


// functions

const makeBadgeClassNames = ( attributes ) => {

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
            selector: '.badge',
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
    },

    edit: ( props ) => {

        const {
            className,
            attributes: {
                href,
                content,
                state,
                badgeType,
                marginLeft,
                marginRight,
                marginBefore,
                marginAfter,
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

        let badgeClassNames = makeBadgeClassNames( { 
            state, 
            badgeType,
        } );
        badgeClassNames = addClassNames( {
            marginLeft, 
            marginRight, 
            marginBefore,
            marginAfter,
        }, badgeClassNames );

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
                    <RichText
                        tagName={ href ? 'a' : 'span' }
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
        ];
    },
    save: ( props ) => {
        const {
            className,
            attributes: {
                href,
                content,
                state,
                badgeType,
                marginLeft,
                marginRight,
                marginBefore,
                marginAfter,
            },
        } = props;
        
        let badgeClassNames = makeBadgeClassNames( { 
            state, 
            badgeType,
        } );
        badgeClassNames = addClassNames( {
            marginLeft, 
            marginRight, 
            marginBefore,
            marginAfter,
        }, badgeClassNames );

        const saveAttributes = makeSaveAttributes( {
            href: href, 
            // target: target, 
            // rel: href ? ( rel ? rel + ' noopener noreferrer' : 'noopener noreferrer' ) : '',
        } );

        return (
            <>
                {
                    ( content && ! RichText.isEmpty( content ) ) && (
                        <RichText.Content 
                            tagName={ href ? 'a' : 'span' } 
                            value={ content } 
                            className={ badgeClassNames }
                            { ...saveAttributes }
                        />
                    )
                }
            </>
        );
    },
} );
