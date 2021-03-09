const { __, setLocaleData } = wp.i18n;
const {
    InspectorControls,
    URLInput,
    RichText,
} = wp.blockEditor;
const { 
    TextControl,
    PanelBody,
    ToggleControl,
    SelectControl,
    SVG, 
    Path,
} = wp.components;

import { 
    filterByAllowedValueKeys,
} from './utilities.js';


// internal vars
const marginPaddingSizes = [
    { value: '', label: __( '– unset –', 'bsx-blocks' ) },
    { value: '0', label: __( 'none (0)', 'bsx-blocks' ) },
    { value: '1', label: __( 'extra small', 'bsx-blocks' ) },
    { value: '2', label: __( 'small', 'bsx-blocks' ) },
    { value: '3', label: __( 'medium', 'bsx-blocks' ) },
    { value: '4', label: __( 'large', 'bsx-blocks' ) },
    { value: '5', label: __( 'extra large', 'bsx-blocks' ) },
];


export const stateSelect = ( value, onChangeFunction ) => {
    return (
        <SelectControl 
            label={ __( 'State', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ [
                { value: 'primary', label: __( 'Primary', 'bsx-blocks' ) },
                { value: 'secondary', label: __( 'Secondary', 'bsx-blocks' ) },
                { value: 'success', label: __( 'Success', 'bsx-blocks' ) },
                { value: 'danger', label: __( 'Danger', 'bsx-blocks' ) },
                { value: 'warning', label: __( 'Warning', 'bsx-blocks' ) },
                { value: 'info', label: __( 'Info', 'bsx-blocks' ) },
                { value: 'light', label: __( 'Light', 'bsx-blocks' ) },
                { value: 'dark', label: __( 'Dark', 'bsx-blocks' ) },
                { value: 'link', label: __( 'Link Button', 'bsx-blocks' ) },
                { value: 'text-link', label: __( 'Text link', 'bsx-blocks' ) },
            ] }
        />
    )
}

export const stateTypeSelect = ( value, onChangeFunction ) => {
    return (
        <SelectControl label={ __( 'State Type', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ [
                { value: 'outline', label: __( 'Outline', 'bsx-blocks' ) },
                { value: '', label: __( 'Filled', 'bsx-blocks' ) },
            ] }
        />
    )
}

export const sizeSelect = ( value, onChangeFunction ) => {
    return (
        <SelectControl label={ __( 'Size', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ [
                { value: '', label: __( '– unset –', 'bsx-blocks' ) },
                { value: 'sm', label: __( 'Small', 'bsx-blocks' ) },
                { value: 'lg', label: __( 'Large', 'bsx-blocks' ) },
            ] }
        />
    )
}

export const linkUrlInput = ( value, onChangeFunction ) => {
    return (
        <URLInput
            label={ __( 'Link URL', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
        />
    )
}

export const ignoreMailtoSpamProtectionToggle = ( value, onChangeFunction ) => {
    return (
        <ToggleControl
            label={ __( 'Spam protected email link (default activated)', 'bsx-blocks' ) }
            checked={ ! value }
            onChange={ onChangeFunction }
            help={ __( 'If activated email will not be easily readable for machines.', 'bsx-blocks' ) }
        />
    )
}

export const targetToggle = ( value, onChangeFunction ) => {
    return (
        <ToggleControl
            label={ __( 'Open in new tab', 'bsx-blocks' ) }
            checked={ value == '_blank' }
            onChange={ onChangeFunction }
        />
    )
}

export const relInput = ( value, onChangeFunction ) => {
    return (
        <TextControl 
            label={ __( 'Rel (optional)', 'bsx-blocks' ) }
            value={ value } 
            onChange={ onChangeFunction }
        />
    )
}

export const dataFnInput = ( value, onChangeFunction ) => {
    return (
        <TextControl 
            label={ __( 'data-fn (optional)', 'bsx-blocks' ) }
            value={ value } 
            onChange={ onChangeFunction }
        />
    )
}

export const marginLeftSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = marginPaddingSizes;
    return (
        <SelectControl 
            label={ __( 'Margin left', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}
export const marginRightSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = marginPaddingSizes;
    return (
        <SelectControl 
            label={ __( 'Margin right', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}
export const marginBeforeSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = marginPaddingSizes;
    return (
        <SelectControl 
            label={ __( 'Margin before', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
            help={ __( 'Spacer before element', 'bsx-blocks' ) }
        />
    )
}
export const marginAfterSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = marginPaddingSizes;
    return (
        <SelectControl 
            label={ __( 'Margin after', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
            help={ __( 'Spacer after element', 'bsx-blocks' ) }
        />
    )
}

export const displaySelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = [
        { value: '', label: __( '– unset –', 'bsx-blocks' ) },
        { value: 'block', label: __( 'Block', 'bsx-blocks' ) },
        { value: 'inline-block', label: __( 'Inline-block', 'bsx-blocks' ) },
        { value: 'inline', label: __( 'Inline', 'bsx-blocks' ) },
        { value: 'flex', label: __( 'Flex', 'bsx-blocks' ) },
    ];
    return (
        <SelectControl label={ __( 'Display', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const alignItemsSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = [
        { value: '', label: __( '– unset –', 'bsx-blocks' ) },
        { value: 'start', label: __( 'Start', 'bsx-blocks' ) },
        { value: 'center', label: __( 'Center', 'bsx-blocks' ) },
        { value: 'end', label: __( 'End', 'bsx-blocks' ) },
    ];
    return (
        <SelectControl 
            label={ __( 'Align items', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const paddingBeforeSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = marginPaddingSizes;
    return (
        <SelectControl 
            label={ __( 'Padding before', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
            help={ __( 'Inner spacer before', 'bsx-blocks' ) }
        />
    )
}
export const paddingAfterSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = marginPaddingSizes;
    return (
        <SelectControl 
            label={ __( 'Padding after', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
            help={ __( 'Inner spacer after', 'bsx-blocks' ) }
        />
    )
}


