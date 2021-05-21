// TODO: get caption or more data from html? (thumb data will not be available from noscript)


const { __, setLocaleData } = wp.i18n;
const {
    registerBlockType,
} = wp.blocks;
const {
    RichText,
    MediaUpload,
    InspectorControls,
    InspectorAdvancedControls,
} = wp.blockEditor;
const { 
    Button,
    TextControl,
    SelectControl,
    PanelBody,
    ToggleControl,
    SVG, 
    Path,
} = wp.components;


// functions imports

import { 
    makeBase64PreloadImgSrc,
} from './../_functions/img.js';
import { svgIcon } from './../_functions/wp-icons.js';
import { addClassNames } from './../_functions/add-class-names.js';
import { 
    borderStateSelect,
    marginBeforeSelect,
    marginAfterSelect,
} from './../_functions/controls.js';


const makeClassName = ( attributes ) => {

    const {
        sliderType,
    } = attributes;

    const classNames = [ 'bsx-slider-wrapper' ];

    if ( !! sliderType ) {
        if ( sliderType == 'citation' ) {
            classNames.push( 'bsx-citation-slider' );
        }
    }

    return classNames.join( ' ' );
}


registerBlockType( 'bsx-blocks/slider', {
    title: __( 'BSX Slider', 'bsx-blocks' ),
    icon: svgIcon( 'slider' ),
    category: 'layout',
    attributes: {
        sliderType: {
            type: 'string',
            default: 'citation',
        },
        // imgList: { // TODO: maybe do later?
        //     type: 'array',
        //     default: [],
        // },
        itemData: {
            type: 'array',
            source: 'query',
            selector: '.item',
            query: {
                imgId: {
                    type: 'number',
                    source: 'attribute',
                    selector: 'figure',
                    attribute: 'data-id',
                },
                imgUrl: {
                    type: 'string',
                    source: 'attribute',
                    selector: 'figure',
                    attribute: 'data-url',
                },
                imgWidth: {
                    type: 'string',
                    source: 'attribute',
                    selector: 'figure',
                    attribute: 'data-width',
                },
                imgHeight: {
                    type: 'string',
                    source: 'attribute',
                    selector: 'figure',
                    attribute: 'data-height',
                },
                imgAlt: {
                    type: 'string',
                    source: 'attribute',
                    selector: 'figure',
                    attribute: 'data-alt',
                },
                heading: {
                    type: 'array',
                    source: 'children',
                    selector: '[data-slide-heading]',
                },
                subline: {
                    type: 'array',
                    source: 'children',
                    selector: '[data-slide-subline]',
                },
                text: {
                    type: 'array',
                    source: 'children',
                    selector: '[data-slide-text]',
                },
                footerText_1: {
                    type: 'array',
                    source: 'children',
                    selector: '[data-slide-footer-1]',
                },
                footerText_2: {
                    type: 'array',
                    source: 'children',
                    selector: '[data-slide-footer-2]',
                },
                url: {
                    type: 'string',
                    selector: 'a',
                    source: 'attribute',
                    attribute: 'href',
                },
                target: {
                    type: 'string',
                    selector: 'a',
                    source: 'attribute',
                    attribute: 'target',
                },
                rel: {
                    type: 'string',
                    selector: 'a',
                    source: 'attribute',
                    attribute: 'rel',
                },
                // size: {
                //     type: 'string',
                //     selector: 'a',
                //     source: 'attribute',
                //     attribute: 'data-size',
                // },
            },
            default: [],
        },
        prevText: {
            type: 'string',
        },
        nextText: {
            type: 'string',
        },
        rounded: {
            type: 'string',
            default: 'circle',
        },
        imgThumbnail: {
            type: 'boolean',
        },
        borderState: {
            type: 'string',
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
    edit: ( props ) => {
        const {
            className,
            attributes: {
                sliderType,
                itemData,
                prevText,
                nextText,
                rounded,
                imgThumbnail,
                borderState,
                marginBefore,
                marginAfter,
            },
            setAttributes,
            isSelected,
        } = props;

        // TEST – TODO: remove
        // console.log( 'typeof itemData: ' + typeof itemData );
        // itemData.forEach( ( item, index ) => {
        //     console.log( index + ' : ' + item );
        //     for ( let [ key, value ] of Object.entries( item ) ) {
        //         // const printValue = ( value ) => {
        //         //     let returnString = '';
        //         //     if ( Array.isArray( value ) ) {
        //         //         value.forEach( ( item, index ) => {
        //         //             returnString += index + ': ' + item + ', ';
        //         //         } );
        //         //     }
        //         //     else {
        //         //         returnString = value;
        //         //     }
        //         //     return returnString;
        //         // }
        //         console.log( '----- key: "' + key + '", val: "' + value + '"' );
        //     }
        // } );

        // update itemData all `item` at position `index`
        const updateItemDataItem = ( index, newItem ) => {
            const newItemData = [
                ...itemData.slice( 0, index ),
                newItem,
                ...itemData.slice( index + 1 )
            ];
            setAttributes( { itemData: newItemData } );
        }

        // update itemData single `value` for `key` at position `index`
        const updateItemDataValue = ( index, key, value ) => {
            let newItem = itemData[ index ];
            newItem[ key ] = value;
            updateItemDataItem( index, newItem );
        }

        // // update imgList all `item` at position `index`
        // const updateImgListItem = ( index, newItem ) => {
        //     const newImgList = [
        //         ...imgList.slice( 0, index ),
        //         newItem,
        //         ...imgList.slice( index + 1 )
        //     ];
        //     setAttributes( { imgList: newImgList } );
        // }

        // // update imgList single `value` for `key` at position `index`
        // const updateImgListValue = ( index, key, value ) => {
        //     let newItem = imgList[ index ];
        //     newItem[ key ] = value;
        //     updateImgListItem( index, newItem );
        // }

        const onChangeSliderType = ( value ) => {
            setAttributes( { sliderType: value } );
            if ( value === 'product-gallery' ) {
                setAttributes( { rounded: '' } );
            }
        }

        const onChangeImg = ( index, img ) => {
            const newImg = {};
            if ( sliderType === 'product-gallery' ) {
                newImg.url = img.sizes.medium.url;
                newImg.width = img.sizes.medium.width;
                newImg.height = img.sizes.medium.height;
            }
            else {
                newImg.url = img.sizes.thumbnail.url;
                newImg.width = img.sizes.thumbnail.width;
                newImg.height = img.sizes.thumbnail.height;
            }
            updateItemDataItem( index, { 
                imgId: img.id,
                imgUrl: newImg.url,
                imgWidth: newImg.width,
                imgHeight: newImg.height,
                imgAlt: img.alt,
                text: itemData[ index ].text,
                footerText_1: itemData[ index ].footerText_1,
                footerText_2: itemData[ index ].footerText_2,
            } );
            // updateImgListItem( index, { 
            //     imgId: img.id,
            //     imgUrl: img.sizes.thumbnail.url,
            //     imgWidth: img.sizes.thumbnail.width,
            //     imgHeight: img.sizes.thumbnail.height,
            //     imgAlt: img.alt,
            // } );
        };

        const onChangeAlt = ( index, value ) => {
            updateItemDataValue( index, 'imgAlt', value );
            // updateImgListValue( index, 'imgAlt', value );
        }

        const onChangeText = ( index, value ) => {
            updateItemDataValue( index, 'text', value );
        }
        const onChangeHeading = ( index, value ) => {
            updateItemDataValue( index, 'heading', value );
        }
        const onChangeSubline = ( index, value ) => {
            updateItemDataValue( index, 'subline', value );
        }
        const onChangeFooterText_1 = ( index, value ) => {
            updateItemDataValue( index, 'footerText_1', value );
        }
        const onChangeFooterText_2 = ( index, value ) => {
            updateItemDataValue( index, 'footerText_2', value );
        }
        const onChangeUrl = ( index, value ) => {
            updateItemDataValue( index, 'url', value );
        }
        const onChangeTarget = ( index, value ) => {
            updateItemDataValue( index, 'target', value );
        }
        const onChangeRel = ( index, value ) => {
            updateItemDataValue( index, 'rel', value );
        }

        const onAddItem = () => { 
            setAttributes( { itemData: [ ...itemData, {} ] } );
        }

        const deleteItemDataItem = ( index ) => {
            const newMediaList = [
                ...itemData.slice( 0, index ),
                ...itemData.slice( index + 1 )
            ];
            setAttributes( { itemData: newMediaList } );
        }

        const itemDataItemMoveTo = ( index, newIndex ) => {
            const newMediaList = [
                ...itemData.slice( 0, index ),
                ...itemData.slice( index + 1 )
            ];
            const newMediaList2 = [
                ...newMediaList.slice( 0, newIndex ),
                itemData[ index ],
                ...newMediaList.slice( newIndex )
            ];
            setAttributes( { itemData: newMediaList2 } );
        }

        const onClickDelete = ( index ) => {
            const response = confirm( __( 'Delete item' ) + ' ' + ( index + 1) + '?' );
            if ( response == true ) {
                deleteItemDataItem( index );
            }
            else {
                // do nothing
            }
        };
        const onClickMoveUp = ( index ) => {
            const newIndex = index > 0 ? index - 1 : itemData.length - 1;
            itemDataItemMoveTo( index, newIndex );
        };
        const onClickMoveDown = ( index ) => {
            const newIndex = index < itemData.length - 1 ? index + 1 : 0;
            itemDataItemMoveTo( index, newIndex );
        };

        const onChangePrevText = ( value ) => {
            setAttributes( { prevText: value } );
        };
        const onChangeNextText = ( value ) => {
            setAttributes( { nextText: value } );
        };

        const onChangeRounded = ( value ) => {
            setAttributes( { rounded: value } );
        };
        const onChangeImgThumbnail = ( value ) => {
            setAttributes( { imgThumbnail: value } );
        };
        const onChangeBorderState = ( value ) => {
            setAttributes( { borderState: value } );
        };

        const onChangeMarginBefore = ( value ) => {
            setAttributes( { marginBefore: value } );
        };
        const onChangeMarginAfter = ( value ) => {
            setAttributes( { marginAfter: value } );
        };

        // class names

        let sliderWrapperClassName = makeClassName( { 
            sliderType 
        } );
        sliderWrapperClassName = addClassNames( {
            marginBefore, 
            marginAfter, 
        }, sliderWrapperClassName );

        const sliderClassName = 'owl-carousel owl-theme';

        let imgClassName = 'owl-lazy img-fluid';
        imgClassName = addClassNames( {
            rounded,
            imgThumbnail,
            borderState,
        }, imgClassName );

        const itemClassName = sliderType === 'citation'
            ? 'item d-block text-center'
            : 'item row'
        ;

        const textClassName = 'h4 font-weight-normal font-italic mb-4';
        const headingClassName = 'test-1';
        const sublineClassName = 'test-2';
        const footer1ClassName = 'font-weight-bold text-uppercase';
        const footer2ClassName = '';

        const TagName = 'div';

        
        return [
            <InspectorControls>
                <PanelBody title={ __( 'Slider settings', 'bsx-blocks' ) }>
                    <SelectControl 
                        label={ __( 'Slider type', 'bsx-blocks' ) }
                        value={ sliderType }
                        onChange={ onChangeSliderType }
                        options={ [
                            { value: 'citation', label: __( 'Citation', 'bsx-blocks' ) },
                            { value: 'product-gallery', label: __( 'Product Gallery', 'bsx-blocks' ) },
                        ] }
                    />
                    <TextControl 
                        label={ __( 'Prev button text', 'bsx-blocks' ) }
                        value={ prevText } 
                        onChange={ onChangePrevText }
                    />
                    <TextControl 
                        label={ __( 'Next button text', 'bsx-blocks' ) }
                        value={ nextText } 
                        onChange={ onChangeNextText }
                    />
                </PanelBody>

                <PanelBody title={ __( 'Image appearance', 'bsx-blocks' ) }>
                    <ToggleControl
                        label={ __( 'Rounded', 'bsx-blocks' ) }
                        checked={ !! rounded ? 'circle' : '' }
                        onChange={ onChangeRounded }
                    />
                    <ToggleControl
                        label={ __( 'Border', 'bsx-blocks' ) }
                        checked={ !! imgThumbnail }
                        onChange={ onChangeImgThumbnail }
                    />
                    {
                        borderStateSelect( borderState, onChangeBorderState )
                    }
                </PanelBody>

                <PanelBody title={ __( 'Margin', 'bsx-blocks' ) }>
                    {
                        marginBeforeSelect( marginBefore, onChangeMarginBefore )
                    }
                    {
                        marginAfterSelect( marginAfter, onChangeMarginAfter )
                    }
                </PanelBody>
            </InspectorControls>,
            (
                <TagName className={ sliderWrapperClassName }>
                    <div class="">

                        {
                            itemData.map( ( item, index ) => 
                                <div class={ itemClassName }>

                                    {
                                        sliderType === 'citation' && (
                                            <>
                                                <div class="row">
                                                    <div class="col-4 col-sm-3 col-lg-2 mx-auto">
                                                        <figure>
                                                            <MediaUpload
                                                                key={ index }
                                                                onSelect={ ( value ) => onChangeImg( index, value ) }
                                                                allowedTypes="image"
                                                                value={ item.imgId }
                                                                render={ ( { open } ) => (
                                                                    <>
                                                                        {
                                                                            item.imgUrl ? (
                                                                                <Button className="bsxui-h-auto bsxui-w-100 bsxui-p-0 bsxui-va-middle" onClick={ open }>
                                                                                    <img className={ imgClassName } src={ item.imgUrl } alt={ __( 'Change/upload Image', 'bsx-blocks' ) } />
                                                                                </Button>
                                                                            )
                                                                            :
                                                                            (
                                                                                <Button className="button button-large bsxui-w-100" onClick={ open }>
                                                                                    { __( 'Add Image', 'bsx-blocks' ) }
                                                                                </Button>
                                                                            )
                                                                        }
                                                                    </>
                                                                ) }
                                                            />
                                                        </figure>
                                                        <div class="bsxui-inline-control">
                                                            <TextControl 
                                                                label={ __( 'Alt text', 'bsx-blocks' ) }
                                                                value={ item.imgAlt } 
                                                                onChange={ ( value ) => { onChangeAlt( index, value ) } }
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="px-3 px-md-5">
                                                    <RichText
                                                        tagName="div"
                                                        className={ textClassName }
                                                        multiline={ false }
                                                        placeholder={ __( 'Insert text here...', 'bsx-blocks' ) }
                                                        value={ item.text }
                                                        onChange={ ( value ) => { onChangeText( index, value ) } }
                                                    />
                                                    <RichText
                                                        tagName="div"
                                                        className={ footer1ClassName }
                                                        multiline={ false }
                                                        placeholder={ __( 'Insert footer text 1 here...', 'bsx-blocks' ) }
                                                        value={ item.footerText_1 }
                                                        onChange={ ( value ) => { onChangeFooterText_1( index, value ) } }
                                                    />
                                                    <RichText
                                                        tagName="div"
                                                        className={ footer2ClassName }
                                                        multiline={ false }
                                                        placeholder={ __( 'Insert footer text 2 here...', 'bsx-blocks' ) }
                                                        value={ item.footerText_2 }
                                                        onChange={ ( value ) => { onChangeFooterText_2( index, value ) } }
                                                    />
                                                </div>
                                            </>
                                        )
                                    }
                                    {
                                        sliderType === 'product-gallery' && (
                                            <div class="col-12 col-sm-6 col-md-4 col-lg-4">
                                                <div class="">
                                                    <figure>
                                                        <MediaUpload
                                                            key={ index }
                                                            onSelect={ ( value ) => onChangeImg( index, value ) }
                                                            allowedTypes="image"
                                                            value={ item.imgId }
                                                            render={ ( { open } ) => (
                                                                <>
                                                                    {
                                                                        item.imgUrl ? (
                                                                            <Button className="bsxui-h-auto bsxui-w-100 bsxui-p-0 bsxui-va-middle" onClick={ open }>
                                                                                <img className={ imgClassName } src={ item.imgUrl } alt={ __( 'Change/upload Image', 'bsx-blocks' ) } />
                                                                            </Button>
                                                                        )
                                                                        :
                                                                        (
                                                                            <Button className="button button-large bsxui-w-100" onClick={ open }>
                                                                                { __( 'Add Image', 'bsx-blocks' ) }
                                                                            </Button>
                                                                        )
                                                                    }
                                                                </>
                                                            ) }
                                                        />
                                                    </figure>
                                                    <div class="bsxui-inline-control">
                                                        <TextControl 
                                                            label={ __( 'Alt text', 'bsx-blocks' ) }
                                                            value={ item.imgAlt } 
                                                            onChange={ ( value ) => { onChangeAlt( index, value ) } }
                                                        />
                                                    </div>
                                                </div>

                                                <div class="px-3 px-md-5">
                                                    <RichText
                                                        tagName="div"
                                                        className={ headingClassName }
                                                        multiline={ false }
                                                        placeholder={ __( 'Add heading here...', 'bsx-blocks' ) }
                                                        value={ item.heading }
                                                        onChange={ ( value ) => { onChangeHeading( index, value ) } }
                                                    />
                                                    <RichText
                                                        tagName="div"
                                                        className={ sublineClassName }
                                                        multiline={ false }
                                                        placeholder={ __( 'Add subline here...', 'bsx-blocks' ) }
                                                        value={ item.subline }
                                                        onChange={ ( value ) => { onChangeSubline( index, value ) } }
                                                    />

                                                    <div class="row">
                                                        <div class="col">
                                                            <RichText
                                                                tagName="div"
                                                                className={ footer1ClassName }
                                                                multiline={ false }
                                                                placeholder={ __( 'Footer left...', 'bsx-blocks' ) }
                                                                value={ item.footerText_1 }
                                                                onChange={ ( value ) => { onChangeFooterText_1( index, value ) } }
                                                            />
                                                        </div>
                                                        <div class="col">
                                                            <RichText
                                                                tagName="div"
                                                                className={ footer2ClassName }
                                                                multiline={ false }
                                                                placeholder={ __( 'Footer right...', 'bsx-blocks' ) }
                                                                value={ item.footerText_2 }
                                                                onChange={ ( value ) => { onChangeFooterText_2( index, value ) } }
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }

                                    <div class="bsxui-inline-control bsxui-mb-3">
                                        <div className="bsxui-d-flex">
                                            <Button 
                                                className="button bsxui-icon-button" 
                                                onClick={ () => { onClickMoveUp( index ) } }
                                                label={ __( 'Move backward', 'bsx-blocks' ) }
                                            >
                                                { svgIcon( 'carret-left' ) }
                                            </Button>
                                            <Button 
                                                className="button bsxui-icon-button" 
                                                onClick={ () => { onClickMoveDown( index ) } }
                                                label={ __( 'Move forward', 'bsx-blocks' ) }
                                            >
                                                { svgIcon( 'carret-right' ) }
                                            </Button>
                                            <Button 
                                                className="button bsxui-icon-button bsxui-text-danger bsxui-border-danger bsxui-ml-auto"
                                                onClick={ () => { onClickDelete( index ) } }
                                                label={ __( 'Remove Item', 'bsx-blocks' ) }
                                            >
                                                { svgIcon( 'trash' ) }
                                            </Button>
                                        </div>
                                    </div>

                                </div>
                            )
                        }

                    </div>

                    <div className="bsxui-inline-control">
                        <Button className="button button-large bsxui-w-100" onClick={ onAddItem }>
                            { __( 'Add item', 'bsx-blocks' ) }
                        </Button>
                    </div>
                </TagName>
            )
        ];
    },
    save: ( props ) => {
        const {
            className,
            attributes: {
                sliderType,
                itemData,
                prevText,
                nextText,
                rounded,
                imgThumbnail,
                borderState,
                marginBefore,
                marginAfter,
            },
        } = props;

        // class names

        let sliderWrapperClassName = makeClassName( { 
            sliderType 
        } );
        sliderWrapperClassName = addClassNames( {
            marginBefore, 
            marginAfter, 
        }, sliderWrapperClassName );

        const sliderClassName = 'owl-carousel owl-theme outer-nav nav-lg bsx-slider-fadeout';

        let imgClassName = 'img-fluid' + ( sliderType === 'product-gallery' ? ' owl-lazy' : '' );
        imgClassName = addClassNames( {
            rounded,
            imgThumbnail,
            borderState,
        }, imgClassName );

        const itemClassName = 'item d-block text-center';

        const textClassName = 'h4 font-weight-normal font-italic mb-4';
        const headingClassName = 'test-1';
        const sublineClassName = 'test-2';
        const footer1ClassName = 'font-weight-bold text-uppercase';
        const footer2ClassName = '';

        const TagName = 'div';

        const prevLabel = !! prevText ? prevText : __( 'Prev', 'bsx-blocks' );
        const nextLabel = !! nextText ? nextText : __( 'Next', 'bsx-blocks' );
        const prevHtml = '<i class="fa fa-chevron-left" aria-label="' + prevLabel + '"></i>';
        const nextHtml = '<i class="fa fa-chevron-right" aria-label="' + nextLabel + '"></i>';

        // if lazyLoad: true use data-src="..." data-g-fn="lazyload"
        // if lazyLoad: false, multiLazyload: true use class="... owl-lazy" data-g-src="..." loading="lazy"
        const options = sliderType === 'citation' 
            ? "{ lazyLoad: false, multiLazyload: true, responsive: { 0: { items: 1 } }, margin: 0, encodeUriNavText: [ '" + encodeURI( prevHtml ) + "', '" + encodeURI( nextHtml ) + "' ], navClass: [ 'btn btn-link is-prev', 'btn btn-link is-next' ] }"
            : "{ lazyLoad: true, responsive: { 0: { items: 1 }, 480: { items: 2 }, 768: { items: 3 }, 992: { items: 4 } }, encodeUriNavText: [ '" + encodeURI( prevHtml ) + "', '" + encodeURI( nextHtml ) + "' ], navClass: [ 'btn btn-primary is-prev', 'btn btn-primary is-next' ] }"
        ;
        // makeBase64PreloadImgSrc( item.imgWidth, item.imgHeight )

        return (

            <TagName className={ sliderWrapperClassName }>
                <div class={ sliderClassName } data-fn="owl-carousel" data-fn-options={ options }>
                    {
                        itemData.map( ( item, index ) => 

                            <div class={ itemClassName }>
                                {
                                    sliderType === 'citation' && (
                                        <>
                                            <div class="row">
                                                <div class="col-4 col-sm-3 col-lg-2 mx-auto">
                                                    <figure 
                                                        data-id={ item.imgId } 
                                                        data-url={ item.imgUrl } 
                                                        data-width={ item.imgWidth } 
                                                        data-height={ item.imgHeight } 
                                                        data-alt={ item.imgAlt }
                                                    >
                                                        <script>document.write( '<img className={ imgClassName } src={ makeBase64PreloadImgSrc( item.imgWidth, item.imgHeight ) } alt={ item.imgAlt } width={ item.imgWidth } height={ item.imgHeight } data-g-src={ item.imgUrl } data-g-fn="lazyload"/>' );</script>
                                                        <noscript><img className={ imgClassName } src={ item.imgUrl } alt={ item.imgAlt } width={ item.imgWidth } height={ item.imgHeight } /></noscript>
                                                    </figure>
                                                </div>
                                            </div>

                                            <div class="px-3 px-md-5">

                                                <RichText.Content tagName="div" className={ textClassName } data-slide-text value={ item.text } />

                                                <RichText.Content tagName="div" className={ footer1ClassName } data-slide-footer-1 value={ item.footerText_1 } />

                                                <RichText.Content tagName="div" className={ footer2ClassName } data-slide-footer-2 value={ item.footerText_2 } />

                                            </div>
                                        </>
                                    )
                                }
                                {
                                    sliderType === 'product-gallery' && (
                                        <>
                                            <div class="">
                                                <figure 
                                                    data-id={ item.imgId } 
                                                    data-url={ item.imgUrl } 
                                                    data-width={ item.imgWidth } 
                                                    data-height={ item.imgHeight } 
                                                    data-alt={ item.imgAlt }
                                                >
                                                    <script>document.write( '<img className={ imgClassName } src={ makeBase64PreloadImgSrc( item.imgWidth, item.imgHeight ) } alt={ item.imgAlt } width={ item.imgWidth } height={ item.imgHeight } data-src={ item.imgUrl } loading="lazy"/>' );</script>
                                                    <noscript><img className={ imgClassName } src={ item.imgUrl } alt={ item.imgAlt } width={ item.imgWidth } height={ item.imgHeight } /></noscript>
                                                </figure>
                                            </div>

                                            <div class="">

                                                <RichText.Content tagName="div" className={ headingClassName } data-slide-heading value={ item.heading } />
                                                
                                                <RichText.Content tagName="div" className={ sublineClassName } data-slide-subline value={ item.subline } />

                                                <div class="row">
                                                    <div class="col">
                                                        <RichText.Content tagName="div" className={ footer1ClassName } data-slide-footer-1 value={ item.footerText_1 } />
                                                    </div>
                                                    <div class="col">
                                                        <RichText.Content tagName="div" className={ footer2ClassName } data-slide-footer-2 value={ item.footerText_2 } />
                                                    </div>
                                                </div>

                                            </div>
                                        </>
                                    )
                                }


                            </div>
                        )
                    }
                </div>
            </TagName>
        );
    },
} );
