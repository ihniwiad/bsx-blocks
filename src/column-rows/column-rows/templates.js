// wp import
const { __, setLocaleData } = wp.i18n;

// functions
import { svgIcon } from './../../_functions/wp-icons.js';


const templates = [
    {
        name: 'default-auto',
        title: __( 'Flex, static', 'bsx-blocks' ),
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" role="img" aria-hidden="true" focusable="false">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M39,12H9c-1.1,0-2,0.9-2,2v20c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V14C41,12.9,40.1,12,39,12z M39,34H9v-5h30V34z M39,27H9 V14h30V27z"/>
            </svg>
        ),
        template: [ 
            [ 
                'bsx-blocks/column-row', 
                {},
                [
                    [
                        'core/paragraph',
                        { 
                            placeholder: 'Edit or insert other content and delete paragraph...',
                        }
                    ]
                ],
            ], 
            [ 
                'bsx-blocks/column-row', 
                {
                    columnRowType: 'auto',
                },
                [
                    [
                        'core/paragraph',
                        { 
                            placeholder: 'Edit or insert other content and delete paragraph...',
                        }
                    ]
                ],
            ], 
        ],
        templateLock: false,
    },
    {
        name: 'auto-default',
        title: __( 'Static, flex', 'bsx-blocks' ),
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" role="img" aria-hidden="true" focusable="false">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M39,36H9c-1.1,0-2-0.9-2-2V14c0-1.1,0.9-2,2-2h30c1.1,0,2,0.9,2,2v20C41,35.1,40.1,36,39,36z M39,14H9v5h30V14z M39,21H9v13 h30V21z"/>
            </svg>
        ),
        template: [ 
            [ 
                'bsx-blocks/column-row', 
                {
                    columnRowType: 'auto',
                },
                [
                    [
                        'core/paragraph',
                        { 
                            placeholder: 'Edit or insert other content and delete paragraph...',
                        }
                    ]
                ],
            ], 
            [ 
                'bsx-blocks/column-row', 
                {},
                [
                    [
                        'core/paragraph',
                        { 
                            placeholder: 'Edit or insert other content and delete paragraph...',
                        }
                    ]
                ],
            ], 
        ],
        templateLock: false,
    },
];

export default templates;

