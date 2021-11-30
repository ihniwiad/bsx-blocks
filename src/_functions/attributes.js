// attribute functions 

// returns list of non empty attributes to add to html element, use value null for attributes without value
export function makeSaveAttributes( attributes, additionalAttributesString ) {
    const nonEmptyAttributes = {};
    for ( let [ key, value ] of Object.entries( attributes ) ) {
        //console.log( 'key: "' + key + '", val: "' + value + '"' );
        if ( value === null ) {
            nonEmptyAttributes[ key ] = '';
        }
        else if ( value ) {
            nonEmptyAttributes[ key ] = value;
        }
    }

    // add additional attributes (need to be parsed from string to object, can have value or only attribute)
    if ( !! additionalAttributesString ) {
        // console.log( 'additionalAttributesString: ' + additionalAttributesString );
        let currentAttr = '';
        let currentVal = '';
        let collectingVal = false;
        for ( let char of additionalAttributesString ) {
            // console.log( char );
            if ( ( ! collectingVal && char == ' ' ) || char == '=' || char == '"' ) {
                // switch form attr to val or to next attr or skip

                if ( char == ' ' && currentVal === '' && currentAttr != '' ) {
                    // switch to next attr
                    // console.log( 'save attr: ' + currentAttr );
                    nonEmptyAttributes[ currentAttr ] = '';
                    currentAttr = '';
                }
                else if ( char == '=' && ! collectingVal ) {
                    // switch to collect val chars
                    collectingVal = true;
                }
                else if ( char == '"' && collectingVal && currentVal != '' ) {
                    // switch to collect attr chars
                    // console.log( 'save attr / val: ' + currentAttr + ' / ' + currentVal );
                    nonEmptyAttributes[ currentAttr ] = currentVal;
                    currentAttr = '';
                    currentVal = '';
                    collectingVal = false;
                }

            }
            else {
                if ( ! collectingVal ) {
                    // collect attr chars
                    currentAttr += char;
                }
                else {
                    // collect val chars
                    currentVal += char;
                }
            }
        }
        // console.log( 'save last attr: ' + currentAttr + ' / ' + currentVal );
        nonEmptyAttributes[ currentAttr ] = currentVal;

    }

    return nonEmptyAttributes;
}