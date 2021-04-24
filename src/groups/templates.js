// wp import
const { __, setLocaleData } = wp.i18n;

// functions
import { svgIcon } from './../_functions/wp-icons.js';


const templates = [
    {
        name: 'lazy-img-paragraph-button',
        title: __( 'Lazy image, paragraph, button', 'bsx-blocks' ),
        icon: svgIcon( 'groups-lazy-img-paragraph-button' ),
        attributes: {},
        template: [ 
            [ 
                'bsx-blocks/lazy-img', 
                {},
            ], 
            [
                'core/paragraph',
                { 
                    placeholder: 'Add text...', 
                },
            ],
            [
                'bsx-blocks/buttons',
                {
                    templateName: 'one-button',
                },
            ],
        ],
        templateLock: false,
    },
    {
        name: 'lazy-img-heading-paragraph',
        title: __( 'Lazy image, heading, paragraph', 'bsx-blocks' ),
        icon: svgIcon( 'groups-lazy-img-heading-paragraph' ),
        attributes: {},
        template: [ 
            [ 
                'bsx-blocks/lazy-img', 
                {},
            ], 
            [
                'core/heading',
                { 
                    placeholder: 'Add heading, configure heading level...', 
                },
            ],
            [
                'core/paragraph',
                { 
                    placeholder: 'Add text...', 
                },
            ],
        ],
        templateLock: false,
    },
    {
        name: 'lazy-img-heading-paragraph-button',
        title: __( 'Lazy image, heading, paragraph, button', 'bsx-blocks' ),
        icon: svgIcon( 'groups-lazy-img-heading-paragraph-button' ),
        attributes: {},
        template: [ 
            [ 
                'bsx-blocks/lazy-img', 
                {},
            ], 
            [
                'core/heading',
                { 
                    placeholder: 'Add heading, configure heading level...', 
                },
            ],
            [
                'core/paragraph',
                { 
                    placeholder: 'Add text...', 
                },
            ],
            [
                'bsx-blocks/buttons',
                {
                    templateName: 'one-button',
                },
            ],
        ],
        templateLock: false,
    },
];

export default templates;

