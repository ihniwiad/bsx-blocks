// add class names

export function addClassNames( attributes, classNamesString ) {

    const {
        belowNavbar, 
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
        width,
        imgThumbnail,
        borderState,
    } = attributes;

    const classNames = ( typeof classNamesString != 'undefined' ) ? classNamesString.split( ' ' ) : [];

    if ( !! belowNavbar ) {
        classNames.push( 'below-navbar-content' );
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
                classNames.push( 'pt-' + paddingLeft );
            }
            // right
            if ( !! paddingRight ) {
                classNames.push( 'pb-' + paddingRight );
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

    if ( !! borderState ) {
        classNames.push( 'border-' + borderState );
    }

    return classNames.join( ' ' );
}