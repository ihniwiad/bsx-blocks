const { __, setLocaleData } = wp.i18n;

import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';
import { withSelect } from '@wordpress/data';
import ServerSideRender from '@wordpress/server-side-render';
import { SelectControl } from '@wordpress/components';
import { withState } from '@wordpress/compose';


// TODO: add button size `libnSize` `{ 'sm', 'lg' }`

registerBlockType( 'bsx-blocks/bsx-03-button', {
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
            posts,
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
            setAttributes( { linkTarget: value } );
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
        return (
            <div className={ className }>
                <ServerSideRender
                    block="bsx-blocks/bsx-03-button"
                    attributes={ props.attributes }
                />
                <div class="border rounded bg-light my-3 px-1">
                    <div class="row form-row">
                        <div class="col-3">
                            <TextControl 
                                label={ __( 'Button text', 'bsx-blocks' ) }
                                value={ linkText } 
                                onChange={ onChangeLinkText }
                            />
                        </div>
                        <div class="col-3">
                            <TextControl 
                                label={ __( 'Href (Post ID)', 'bsx-blocks' ) }
                                value={ linkHref } 
                                onChange={ onChangeLinkHref }
                            />
                        </div>
                        <div class="col-3">
                            <TextControl 
                                label={ __( 'Hash (optional)', 'bsx-blocks' ) }
                                value={ linkHash } 
                                onChange={ onChangeLinkHash }
                            />
                        </div>
                        <div class="col-3">
                            <SelectControl label={ __( 'State', 'bsx-blocks' ) }
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
                            ] }/>
                        </div>
                    </div>
                    <div class="row form-row">
                        <div class="col-3">
                            <SelectControl label={ __( 'State', 'bsx-blocks' ) }
                                value={ linkStateType }
                                onChange={ onChangeLinkStateType }
                                options={ [
                                    { value: 'outline', label: __( 'Outline', 'bsx-blocks' ) },
                                    { value: '', label: __( 'Filled', 'bsx-blocks' ) },
                            ] }/>
                        </div>
                        <div class="col-3">
                            <TextControl 
                                label={ __( 'Target (optional)', 'bsx-blocks' ) }
                                value={ linkTarget } 
                                onChange={ onChangeLinkTarget }
                            />
                        </div>
                        <div class="col-3">
                            <TextControl 
                                label={ __( 'Rel (optional)', 'bsx-blocks' ) }
                                value={ linkRel } 
                                onChange={ onChangeLinkRel }
                            />
                        </div>
                        <div class="col-3">
                            <TextControl 
                                label={ __( 'Attributes (optional)', 'bsx-blocks' ) }
                                value={ linkAttributes } 
                                placeholder={ __( 'data-1="foo" data-2="bar"', 'bsx-blocks' ) }
                                onChange={ onChangeLinkAttributes }
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    },
    save: ( attributes ) => {
        return null;
    },
} );
