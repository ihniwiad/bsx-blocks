export const filterByAllowedValueKeys = ( mapArray, allowedValues ) => {
    let filteredValues = [];
    if ( typeof allowedValues !== 'undefined' && allowedValues.length > 0 ) {
        mapArray.forEach( ( item ) => {
            if ( typeof allowedValues.find( key => key === item.value ) !== 'undefined' ) {
                filteredValues.push( item );
            }
        } );
    }
    else {
        filteredValues = mapArray;
    }
    return filteredValues;
}

export const getTemplate = ( templates, currentTemplateName ) => {
    const currentTemplate = templates.find( ( item ) => item.name === currentTemplateName );
    return currentTemplate ? currentTemplate : {};
}; 