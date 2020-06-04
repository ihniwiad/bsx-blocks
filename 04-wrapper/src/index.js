/*
    TODO:
        - what about empty `<p>` element at end?
        - which HTML attributes to add?
*/


const { __, setLocaleData } = wp.i18n;

import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

/*

                <div class="border rounded bg-light my-3 px-1">
                    <div class="row form-row">
                        <div class="col-6">
                            <TextControl 
                                label={ __( 'Classes (optional)', 'bsx-blocks' ) }
                                value={ additionalClasses } 
                                onChange={ onChangeAdditionalClasses }
                            />
                        </div>
                        <div class="col-6">
                            <TextControl 
                                label={ __( 'Attributes (optional)', 'bsx-blocks' ) }
                                value={ additionalAttributes } 
                                onChange={ onChangeAdditionalAttributes }
                            />
                        </div>
                    </div>
                </div>
*/

// icon: editor-table
registerBlockType( 'bsx-blocks/wrapper', {
    title: __( 'BSX Wrapper', 'bsx-blocks' ),
    icon: 'marker',
    category: 'layout',
    attributes: {
        additionalClasses: {
            type: 'string',
        },
        id: {
            type: 'string',
        },
        dataFn: {
            type: 'string',
        },
        dataTg: {
            type: 'string',
        },
    },
    edit: ( props ) => {
        const {
            className,
            attributes: {
                additionalClasses,
                id,
                dataFn,
                dataTg,
            },
            setAttributes,
        } = props;
        return (
            <div className={ className }>
                <InnerBlocks />
            </div>
        );
    },
    save: ( props ) => {
        const {
            className,
            attributes: {
                additionalClasses,
                id,
                dataFn,
                dataTg,
            },
            setAttributes,
        } = props;

        return (
            <div className={ className }>
                <InnerBlocks.Content />
            </div>
        );
    },
} );
