// wp import
const { __, setLocaleData } = wp.i18n;

// functions
import { svgIcon } from './../../_functions/wp-icons.js';


const templates = [
    {
        name: 'one-button',
        title: __( 'One Button', 'bsx-blocks' ),
        icon: svgIcon( 'buttons-one-button' ),
        attributes: {},
        template: [
            [ 
                'bsx-blocks/button', 
                {
                },
            ],
        ],
        templateLock: false,
    },
    {
        name: 'two-buttons',
        title: __( 'Two Buttons', 'bsx-blocks' ),
        icon: svgIcon( 'buttons-two-buttons' ),
        attributes: {},
        template: [
            [ 
                'bsx-blocks/button', 
                {
                },
            ],
            [ 
                'bsx-blocks/button', 
                {
                },
            ],
        ],
        templateLock: false,
    },
    {
        name: 'text-link',
        title: __( 'Text Link', 'bsx-blocks' ),
        icon: svgIcon( 'buttons-text-link' ),
        attributes: {},
        template: [ 
            [ 
                'bsx-blocks/button', 
                {
                    state: 'text-link',
                },
            ],
        ],
        templateLock: false,
    },
    {
        name: 'label-text-link',
        title: __( 'Label with Text Link', 'bsx-blocks' ),
        icon: svgIcon( 'buttons-label-text-link' ),
        attributes: {},
        template: [  
            [ 
                'bsx-blocks/button-label', 
                {
                },
            ],
            [ 
                'bsx-blocks/button', 
                {
                    state: 'text-link',
                },
            ],
        ],
        templateLock: false,
    },
];

export default templates;

