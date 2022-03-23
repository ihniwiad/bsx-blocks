// add class names

export function addClassNames( attributes, classNamesString ) {

    const {
        belowNavbar, 
        touchFooter,
        display,
        marginBefore, 
        marginAfter, 
        marginLeft,
        marginRight,
        paddingBefore, 
        paddingAfter, 
        paddingLeft, 
        paddingRight,
        bgColor, 
        textColor,
        textSize, 
        rounded, 
        textAlign,
        textShadow,
        fontWeight,
        inverseTextColor,
        headingInheritTextColor,
        headingInheritFontWeight,
        width,
        imgThumbnail,
        borderState,
        border,
        hoverShadow,
        hoverMove,
        disabled,
        verticalAlign,
        speechBubble,
    } = attributes;

    const classNames = ( typeof classNamesString != 'undefined' ) ? classNamesString.split( ' ' ) : [];

    if ( !! belowNavbar ) {
        classNames.push( 'below-navbar-content' );
    }
    if ( !! touchFooter ) {
        classNames.push( 'mb-n-footer-space' );
    }

    if ( !! display ) {
        classNames.push( 'd-' + display );
    }

    if ( !! marginBefore && marginBefore === marginAfter && marginBefore === marginLeft && marginBefore === marginRight ) {
        // all
        classNames.push( 'm-' + marginBefore );
    }
    else {

        // top & bottom
        if ( !! marginBefore && marginBefore === marginAfter ) {
            classNames.push( 'my-' + marginBefore );
        }
        else {
            if ( !! marginBefore ) {
                classNames.push( 'mt-' + marginBefore );
            }
            if ( !! marginAfter ) {
                classNames.push( 'mb-' + marginAfter );
            }
        }

        // left & right
        if ( !! marginLeft && marginLeft === marginRight ) {
            classNames.push( 'mx-' + marginLeft );
        }
        else {
            if ( !! marginLeft ) {
                classNames.push( 'ml-' + marginLeft );
            }
            if ( !! marginRight ) {
                classNames.push( 'mr-' + marginRight );
            }
        }

    }

    if ( !! paddingBefore && paddingBefore === paddingAfter && paddingBefore === paddingLeft && paddingBefore === paddingRight ) {
        // all
        classNames.push( 'p-' + paddingBefore );
    }
    else {

        // top & bottom
        if ( !! paddingBefore && paddingBefore === paddingAfter ) {
            classNames.push( 'py-' + paddingBefore );
        }
        else {
            // top
            if ( !! paddingBefore ) {
                classNames.push( 'pt-' + paddingBefore );
            }
            // bottom
            if ( !! paddingAfter ) {
                classNames.push( 'pb-' + paddingAfter );
            }
        }

        // left & right
        if ( !! paddingLeft && paddingLeft === paddingRight ) {
            classNames.push( 'px-' + paddingLeft );
        }
        else {
            // left
            if ( !! paddingLeft ) {
                classNames.push( 'pl-' + paddingLeft );
            }
            // right
            if ( !! paddingRight ) {
                classNames.push( 'pr-' + paddingRight );
            }
        }

    }

    if ( !! bgColor ) {
        classNames.push( 'bg-' + bgColor );
    }

    if ( !! textColor ) {
        classNames.push( 'text-' + textColor );
    }

    if ( !! textSize ) {
        classNames.push( textSize );
    }

    if ( !! textShadow ) {
        classNames.push( 'text-shadow-' + textShadow );
    }

    if ( !! fontWeight ) {
        classNames.push( 'font-weight-' + fontWeight );
    }

    if ( !! inverseTextColor ) {
        classNames.push( 'text-inverse' );
    }

    if ( !! headingInheritTextColor ) {
        classNames.push( 'heading-inherit-text' );
    }

    if ( !! headingInheritFontWeight ) {
        classNames.push( 'heading-inherit-font-weight' );
    }
    
    if ( !! rounded ) {
        if ( rounded == true || rounded == 'rounded' ) {
            classNames.push( 'rounded' );
        }
        else {
            classNames.push( 'rounded-' + rounded );
        }
    }

    if ( !! textAlign ) {
        classNames.push( 'text-' + textAlign );
    }

    if ( !! width ) {
        classNames.push( 'w-' + width );
    }

    if ( !! imgThumbnail ) {
        classNames.push( 'img-thumbnail' );
    }

    if ( !! border ) {
        if ( border == 'true' ) {
            classNames.push( 'border' );
        }
        else {
            // TODO: what about multipla values, e.g. top and bottom?
            classNames.push( 'border-' + border );
        }
    }

    if ( !! borderState ) {
        classNames.push( 'border-' + borderState );
    }

    if ( !! hoverShadow ) {
        classNames.push( 'hover-shadow' );
    }

    if ( !! hoverMove ) {
        classNames.push( 'hover-move' );
    }

    if ( !! disabled ) {
        classNames.push( 'disabled' );
    }

    if ( !! verticalAlign ) {
        classNames.push( 'align-' + verticalAlign );
    }

    if ( !! speechBubble ) {
        classNames.push( 'speech-bubble' );
        if ( speechBubble != 'md' ) {
            classNames.push( 'speech-bubble-' + speechBubble );
        }
    }


    return classNames.join( ' ' );
}