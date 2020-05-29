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
        dataTest: {
            type: 'string',
        },
        visibleOnMobile: { 
            type: 'boolean',
            default: true,
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
                dataTest,
            },
            setAttributes,
        } = props;
        return (
            <div className={ className } id={ id }>
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
                dataTest,
            },
            setAttributes,
        } = props;

        // TODO: build object before, then add to div
        //const addAttr = { className: className };
        //if ( id ) addAttr = Object.assign( addAttr, { id: id } );

        return (
            <div className={ className }>
                <InnerBlocks.Content />
            </div>
        );
    },
} );
