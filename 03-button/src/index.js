const { __, setLocaleData } = wp.i18n;

import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';
import { TextControl, ToggleControl } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';
import { SelectControl } from '@wordpress/components';
import { withState } from '@wordpress/compose';

const { InspectorControls } = wp.blockEditor;
const { PanelBody } = wp.components;

//const { Fragment } = wp.element;


// TODO: add button size `libnSize` `{ 'sm', 'lg' }`

// TODO: add additional css classes

registerBlockType( 'bsx-blocks/button', {
    title: __( 'BSX Button', 'bsx-blocks' ),
    icon: 'admin-links',
    category: 'layout',
    attributes: {
        linkHref: {
            type: 'string',
        },
        linkHash: {
            type: 'string',
            default: '',
        },
        linkText: {
            type: 'string',
        },
        linkTarget: {
            type: 'string',
            default: '',
        },
        linkRel: {
            type: 'string',
            default: '',
        },
        linkState: {
            type: 'string',
            default: 'primary',
        },
        linkStateType: {
            type: 'string',
            default: 'outline',
        },
        linkAttributes: {
            type: 'string',
            default: '',
        },
    },
    edit: ( props ) => {
        const {
            className,
            attributes: {
                linkHref,
                linkHash,
                linkText,
                linkTarget,
                linkRel,
                linkState,
                linkStateType,
                linkAttributes,
            },
            setAttributes,
            isSelected,
        } = props;

        const onChangeLinkHref = ( value ) => {
            setAttributes( { linkHref: value } );
        };
        const onChangeLinkText = ( value ) => {
            setAttributes( { linkText: value } );
        };
        const onChangeLinkHash = ( value ) => {
            setAttributes( { linkHash: value } );
        };
        const onChangeLinkTarget = ( value ) => {
            setAttributes( { linkTarget: !! value ? '_blank' : '' } );
        };
        const onChangeLinkRel = ( value ) => {
            setAttributes( { linkRel: value } );
        };
        const onChangeLinkState = ( value ) => {
            setAttributes( { linkState: value } );
        };
        const onChangeLinkStateType = ( value ) => {
            setAttributes( { linkStateType: value } );
        };
        const onChangeLinkAttributes = ( value ) => {
            setAttributes( { linkAttributes: value } );
        };
        return [
            <InspectorControls>
                <PanelBody title={ __( 'BSX Block Settings', 'bsx-blocks' ) }>
                    <SelectControl 
                        label={ __( 'State', 'bsx-blocks' ) }
                        value={ linkState }
                        onChange={ onChangeLinkState }
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
                        value={ linkStateType }
                        onChange={ onChangeLinkStateType }
                        options={ [
                            { value: 'outline', label: __( 'Outline', 'bsx-blocks' ) },
                            { value: '', label: __( 'Filled', 'bsx-blocks' ) },
                        ] }
                    />
                    <TextControl 
                        label={ __( 'Rel (optional)', 'bsx-blocks' ) }
                        value={ linkRel } 
                        onChange={ onChangeLinkRel }
                    />
                    <TextControl 
                        label={ __( 'Attributes (optional)', 'bsx-blocks' ) }
                        value={ linkAttributes } 
                        placeholder={ __( 'data-1="foo" data-2="bar"', 'bsx-blocks' ) }
                        onChange={ onChangeLinkAttributes }
                    />
                </PanelBody>
            </InspectorControls>,
            (
                <div className={ className }>
                    <ServerSideRender
                        block="bsx-blocks/button"
                        attributes={ props.attributes }
                    />
                    { isSelected && (
                    <div class="border bg-light mt-2 px-1">
                            <div>
                                <TextControl 
                                    label={ __( 'Button text', 'bsx-blocks' ) }
                                    value={ linkText } 
                                    onChange={ onChangeLinkText }
                                />
                            </div>
                            <div>
                                <TextControl 
                                    label={ __( 'Href (Post ID)', 'bsx-blocks' ) }
                                    value={ linkHref } 
                                    onChange={ onChangeLinkHref }
                                />
                            </div>
                            <div>
                                <ToggleControl
                                    label={ __( 'Open in new tab' ) }
                                    checked={ linkTarget == '_blank' }
                                    onChange={ onChangeLinkTarget }
                                />
                            </div>
                            <div>
                                <TextControl 
                                    label={ __( 'Hash (optional)', 'bsx-blocks' ) }
                                    value={ linkHash } 
                                    onChange={ onChangeLinkHash }
                                />
                            </div>
                        </div>
                    ) }
                </div>
            )
        ];
    },
    save: ( attributes ) => {
        return null;
    },
} );
