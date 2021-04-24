// wp import
const { __, setLocaleData } = wp.i18n;

// functions
import { svgIcon } from './../_functions/wp-icons.js';


const templates = [
    {
        name: 'empty',
        title: __( 'Empty', 'bsx-blocks' ),
        icon: svgIcon( 'section-empty' ),
        attributes: {
            marginAfter: '5',
        },
        template: [],
        templateLock: false,
    },
    {
        name: 'container-with-heading',
        title: __( 'Container with Heading', 'bsx-blocks' ),
        icon: svgIcon( 'section-container-heading' ),
        attributes: {
            marginAfter: '5',
        },
        template: [ 
            [ 
                'bsx-blocks/container', 
                {},
                [
                    [
                        'core/heading',
                        { 
                            placeholder: 'Add heading, configure heading level...', 
                        },
                    ],
                ],
            ], 
        ],
        templateLock: false,
    },
    {
        name: 'container-heading-text-gallery',
        title: __( 'Container, Heading, Text & Gallery', 'bsx-blocks' ),
        icon: svgIcon( 'section-container-heading-text-gallery' ),
        attributes: {
            marginAfter: '5',
        },
        template: [ 
            [ 
                'bsx-blocks/container', 
                {},
                [
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
                        'bsx-blocks/img-gallery',
                        { 
                            galleryType: 'floating', 
                            rounded: true,
                            imgThumbnail: true,
                            borderState: 'info',
                        },
                    ],
                ],
            ], 
        ],
        templateLock: false,
    },
    {
        name: 'rounded-color-banner',
        title: __( 'Rounded colored Banner (primary dark)', 'bsx-blocks' ),
        icon: svgIcon( 'section-container-rounded-colored-banner' ),
        attributes: {
            marginAfter: '5',
        },
        template: [ 
            [ 
                'bsx-blocks/container', 
                {},
                [
                    [  
                        'bsx-blocks/wrapper', 
                        {
                            bgColor: 'primary',
                            textColor: 'dark',
                            textAlign: 'center',
                            rounded: true,
                            paddingBefore: '4',
                            paddingAfter: '4',
                            paddingLeft: '3',
                            paddingRight: '3',
                        },
                        [
                            [
                                'core/heading',
                                { 
                                    placeholder: 'Add heading, configure heading level...',
                                    textColor: 'dark',
                                    marginAfter: '3',
                                },
                            ],
                            [
                                'core/paragraph',
                                { 
                                    placeholder: 'Add text...', 
                                    textSize: 'lead',
                                },
                            ],
                            [
                                'bsx-blocks/buttons',
                                {
                                    templateName: 'one-button',
                                },
                                [
                                    [
                                        'bsx-blocks/button',
                                        {
                                            state: 'dark',
                                            marginBefore: '1',
                                            marginAfter: '1',
                                            marginLeft: '1',
                                            marginRight: '1',
                                        },
                                    ],
                                ],
                            ],
                        ],
                    ], 
                ],
            ], 
        ],
        templateLock: false,
    },
];

export default templates;

