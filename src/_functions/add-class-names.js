// add class names

// let config = { 
//     belowNavbar, 
//     marginBefore, 
//     marginAfter, 
//     paddingBefore, 
//     paddingAfter, 
//     paddingLeft, 
//     paddingRight,
//     bgColor, 
//     textColor, 
//     rounded, 
// }

export function addClassNames( config, classNamesString ) {

    const classNames = ( typeof classNamesString != 'undefined' ) ? classNamesString.split( ' ' ) : [];

    if ( config.belowNavbar ) {
        classNames.push( 'below-navbar-content' );
    }

    if ( config.marginBefore && config.marginBefore === config.marginAfter ) {
        classNames.push( 'my-' + config.marginBefore );
    }
    else {
        if ( config.marginBefore ) {
            classNames.push( 'mt-' + config.marginBefore );
        }
        if ( config.marginAfter ) {
            classNames.push( 'mb-' + config.marginAfter );
        }
    }

    if ( !! config.paddingBefore && config.paddingBefore === config.paddingAfter && config.paddingBefore === config.paddingLeft && config.paddingBefore === config.paddingRight ) {
        // all
        classNames.push( 'p-' + config.paddingBefore );
    }
    else {

        // top & bottom
        if ( !! config.paddingBefore && config.paddingBefore === config.paddingAfter ) {
            classNames.push( 'py-' + config.paddingBefore );
        }
        else {
            // top
            if ( !! config.paddingBefore ) {
                classNames.push( 'pt-' + config.paddingBefore );
            }
            // bottom
            if ( !! config.paddingAfter ) {
                classNames.push( 'pb-' + config.paddingAfter );
            }
        }

        // left & right
        if ( !! config.paddingLeft && config.paddingLeft === config.paddingRight ) {
            classNames.push( 'px-' + config.paddingLeft );
        }
        else {
            // left
            if ( !! config.paddingLeft ) {
                classNames.push( 'pt-' + config.paddingLeft );
            }
            // right
            if ( !! config.paddingRight ) {
                classNames.push( 'pb-' + config.paddingRight );
            }
        }

    }

    if ( !! config.bgColor ) {
        classNames.push( 'bg-' + config.bgColor );
    }

    if ( !! config.textColor ) {
        classNames.push( 'text-' + config.textColor );
    }

    if ( !! config.rounded ) {
        classNames.push( 'rounded' );
    }

    return classNames.join( ' ' );
}