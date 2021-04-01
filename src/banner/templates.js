// wp import
const { __, setLocaleData } = wp.i18n;

// functions
import { svgIcon } from './../_functions/wp-icons.js';


const templates = [
    {
        name: 'empty',
        title: __( 'Empty', 'bsx-blocks' ),
        icon: svgIcon( 'banner-empty' ),
        attributes: {
            marginAfter: '5',
        },
        template: [
            [
                'core/paragraph',
                { 
                    placeholder: 'Change paragraph text or delete...',
                }
            ]
        ],
        templateLock: false,
    },
    {
        name: 'container-with-heading',
        title: __( 'Container with Heading', 'bsx-blocks' ),
        icon: svgIcon( 'banner-container-with-heading' ),
        attributes: {
            marginAfter: '5',
        },
        template: [ 
            [ 
                'bsx-blocks/container', 
                {
                },
                [
                    [
                        'core/heading',
                        { 
                            placeholder: 'Add heading text, configure heading level...',
                            textSize: 'display-1',
                            textColor: 'white',
                            textShadow: 'darker',
                            marginAfter: '0',
                        }
                    ]
                ],
            ], 
        ],
        templateLock: false,
    },
    {
        name: 'static-container-with-heading',
        title: __( 'Static with Container & Heading', 'bsx-blocks' ),
        icon: svgIcon( 'banner-static-container-with-heading' ),
        attributes: {
            bannerType: 'st',
            bannerSize: '3',
            marginAfter: '5',
        },
        template: [ 
            [ 
                'bsx-blocks/container', 
                {
                },
                [
                    [
                        'core/heading',
                        { 
                            placeholder: 'Add heading text, configure heading level...',
                            textSize: 'display-1',
                            textColor: 'white',
                            textShadow: 'darker',
                            marginAfter: '0',
                        }
                    ]
                ],
            ], 
        ],
        templateLock: false,
    },
    {
        name: 'column-row-banner',
        title: __( 'Bottom bar Banner', 'bsx-blocks' ),
        icon: svgIcon( 'banner-column-row' ),
        attributes: {
            marginAfter: '5',
        },
        template: [  
            [ 
                'bsx-blocks/column-rows', 
                {
                    templateName: 'default-auto',
                    display: 'flex',
                    flexDirection: 'column',
                    className: 'banner-inner',
                },
                [
                    [ 
                        'bsx-blocks/column-row', 
                        {
                            columnRowType: '',
                            display: 'flex',
                            alignItems: 'center',
                        },
                        [ 
                            [ 
                                'bsx-blocks/wrapper', 
                                {
                                    width: '100',
                                },
                                [
                                    [ 
                                        'bsx-blocks/container', 
                                        {},
                                        [
                                            [
                                                'core/heading',
                                                { 
                                                    placeholder: 'Add heading text, configure heading level...',
                                                    textSize: 'display-1',
                                                    textColor: 'white',
                                                    textShadow: 'darker', 
                                                    marginAfter: '0',
                                                }
                                            ]
                                        ],
                                    ], 
                                ],
                            ], 
                        ],
                    ], 
                    [ 
                        'bsx-blocks/column-row', 
                        {
                            columnRowType: 'auto',
                        },
                        [
                            [ 
                                'bsx-blocks/wrapper', 
                                {
                                    bgColor: 'primary-transparent',
                                    paddingBefore: '3',
                                    paddingAfter: '3'
                                },
                                [
                                    [ 
                                        'bsx-blocks/container', 
                                        {},
                                        [
                                            [
                                                'core/paragraph',
                                                { 
                                                    placeholder: 'Add text...',
                                                    textSize: 'lead',
                                                    textColor: 'white',
                                                    marginAfter: '0',
                                                }
                                            ]
                                        ],
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

