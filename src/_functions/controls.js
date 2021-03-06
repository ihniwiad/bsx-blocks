// wp import
const { __, setLocaleData } = wp.i18n;
const {
    URLInput,
    RichText,
    MediaUpload,
} = wp.blockEditor;
const { 
    TextControl,
    PanelBody,
    ToggleControl,
    SelectControl,
    SVG, 
    Path,
    Button,
} = wp.components;

// functions
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

const states = [
    { value: '', label: __( '– unset –', 'bsx-blocks' ) },
    { value: 'white', label: __( 'White', 'bsx-blocks' ) },
    { value: 'primary', label: __( 'Primary', 'bsx-blocks' ) },
    { value: 'secondary', label: __( 'Secondary', 'bsx-blocks' ) },
    { value: 'success', label: __( 'Success', 'bsx-blocks' ) },
    { value: 'danger', label: __( 'Danger', 'bsx-blocks' ) },
    { value: 'warning', label: __( 'Warning', 'bsx-blocks' ) },
    { value: 'info', label: __( 'Info', 'bsx-blocks' ) },
    { value: 'light', label: __( 'Light', 'bsx-blocks' ) },
    { value: 'dark', label: __( 'Dark', 'bsx-blocks' ) },
];

// doesn’t have '', has additional 'text-link'
const btnStates = [
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
];

const bgStates = [
    { value: '', label: __( '– unset –', 'bsx-blocks' ) },
    { value: 'white', label: __( 'White', 'bsx-blocks' ) },
    { value: 'white-opaque', label: __( 'White opaque', 'bsx-blocks' ) },
    { value: 'white-transparent', label: __( 'White transparent', 'bsx-blocks' ) },
    { value: 'black', label: __( 'Black', 'bsx-blocks' ) },
    { value: 'black-opaque', label: __( 'Black opaque', 'bsx-blocks' ) },
    { value: 'black-transparent', label: __( 'Black transparent', 'bsx-blocks' ) },
    { value: 'primary', label: __( 'Primary', 'bsx-blocks' ) },
    { value: 'primary-opaque', label: __( 'Primary opaque', 'bsx-blocks' ) },
    { value: 'primary-transparent', label: __( 'Primary transparent', 'bsx-blocks' ) },
    { value: 'secondary', label: __( 'Secondary', 'bsx-blocks' ) },
    { value: 'secondary-opaque', label: __( 'Secondary opaque', 'bsx-blocks' ) },
    { value: 'secondary-transparent', label: __( 'Secondary transparent', 'bsx-blocks' ) },
    { value: 'success', label: __( 'Success', 'bsx-blocks' ) },
    { value: 'success-opaque', label: __( 'Success opaque', 'bsx-blocks' ) },
    { value: 'success-transparent', label: __( 'Success transparent', 'bsx-blocks' ) },
    { value: 'danger', label: __( 'Danger', 'bsx-blocks' ) },
    { value: 'danger-opaque', label: __( 'Danger opaque', 'bsx-blocks' ) },
    { value: 'danger-transparent', label: __( 'Danger transparent', 'bsx-blocks' ) },
    { value: 'warning', label: __( 'Warning', 'bsx-blocks' ) },
    { value: 'warning-opaque', label: __( 'Warning opaque', 'bsx-blocks' ) },
    { value: 'warning-transparent', label: __( 'Warning transparent', 'bsx-blocks' ) },
    { value: 'info', label: __( 'Info', 'bsx-blocks' ) },
    { value: 'info-opaque', label: __( 'Info opaque', 'bsx-blocks' ) },
    { value: 'info-transparent', label: __( 'Info transparent', 'bsx-blocks' ) },
    { value: 'light', label: __( 'Light', 'bsx-blocks' ) },
    { value: 'light-opaque', label: __( 'Light opaque', 'bsx-blocks' ) },
    { value: 'light-transparent', label: __( 'Light transparent', 'bsx-blocks' ) },
    { value: 'dark', label: __( 'Dark', 'bsx-blocks' ) },
    { value: 'dark-opaque', label: __( 'Dark opaque', 'bsx-blocks' ) },
    { value: 'dark-transparent', label: __( 'Dark transparent', 'bsx-blocks' ) },
    { value: 'transparent', label: __( 'Transparent', 'bsx-blocks' ) },
];


// toggles

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

export const belowNavbarToggle = ( value, onChangeFunction ) => {
    return (
        <ToggleControl
            label={ __( 'Below navbar', 'bsx-blocks' ) }
            checked={ !! value }
            onChange={ onChangeFunction }
            help={ __( 'Enable if element is overlayed by navbar and needs a spacer top.', 'bsx-blocks' ) }
        />
    )
}

export const touchFooterToggle = ( value, onChangeFunction ) => {
    return (
        <ToggleControl
            label={ __( 'Touch footer', 'bsx-blocks' ) }
            checked={ !! value }
            onChange={ onChangeFunction }
            help={ __( 'Enable if element touch footer without spacing.', 'bsx-blocks' ) }
        />
    )
}

export const inverseTextColorToggle = ( value, onChangeFunction ) => {
    return (
        <ToggleControl
            label={ __( 'Inverse text color', 'bsx-blocks' ) }
            checked={ !! value }
            onChange={ onChangeFunction }
        />
    )
}

export const headingInheritTextColorToggle = ( value, onChangeFunction ) => {
    return (
        <ToggleControl
            label={ __( 'Inherit text color to headings', 'bsx-blocks' ) }
            checked={ !! value }
            onChange={ onChangeFunction }
        />
    )
}

export const headingInheritFontWeightToggle = ( value, onChangeFunction ) => {
    return (
        <ToggleControl
            label={ __( 'Inherit font weight to headings', 'bsx-blocks' ) }
            checked={ !! value }
            onChange={ onChangeFunction }
        />
    )
}

export const roundedToggle = ( value, onChangeFunction ) => {
    return (
        <ToggleControl
            label={ __( 'Rounded', 'bsx-blocks' ) }
            checked={ !! value }
            onChange={ onChangeFunction }
        />
    )
}


// url inputs

export const linkUrlInput = ( value, onChangeFunction ) => {
    return (
        <URLInput
            label={ __( 'Link URL', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
        />
    )
}

export const bgAttachmentFixedLimitedToggle = ( value, onChangeFunction ) => {
    return (
        <ToggleControl
            label={ __( 'Limit fixed background', 'bsx-blocks' ) }
            checked={ !! value }
            onChange={ onChangeFunction }
            help={ __( 'If enabled large displays (>=2.000px) will have static background attachement.', 'bsx-blocks' ) }
        />
    )
}


// text inputs

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


// selects

export const stateSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = states;
    return (
        <SelectControl 
            label={ __( 'Color', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const buttonStateSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = btnStates;
    return (
        <SelectControl 
            label={ __( 'Color / Appearance', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const bgColorSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = bgStates;
    return (
        <SelectControl 
            label={ __( 'Background Color', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const stateTypeSelect = ( value, onChangeFunction ) => {
    return (
        <SelectControl label={ __( 'Button Type', 'bsx-blocks' ) }
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
export const paddingLeftSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = marginPaddingSizes;
    return (
        <SelectControl 
            label={ __( 'Padding left', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
            help={ __( 'Inner spacer left', 'bsx-blocks' ) }
        />
    )
}
export const paddingRightSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = marginPaddingSizes;
    return (
        <SelectControl 
            label={ __( 'Padding right', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
            help={ __( 'Inner spacer right', 'bsx-blocks' ) }
        />
    )
}

export const nodeNameSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = [
        { value: 'div', label: __( 'div', 'bsx-blocks' ) },
        { value: 'section', label: __( 'section', 'bsx-blocks' ) },
        { value: 'ul', label: __( 'ul', 'bsx-blocks' ) },
        { value: 'ol', label: __( 'ol', 'bsx-blocks' ) },
        { value: 'li', label: __( 'li', 'bsx-blocks' ) },
    ];
    return (
        <SelectControl 
            label={ __( 'Node name', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
            help={ __( 'Node name (please edit only if you know what you’re doing)', 'bsx-blocks' ) }
        />
    )
}

export const bgPositionSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = [
        { value: 'c', label: __( 'Center center', 'bsx-blocks' ) },
        { value: 'c25', label: __( 'Center 25%', 'bsx-blocks' ) },
        { value: 'c66', label: __( 'Center 66%', 'bsx-blocks' ) },
        { value: 'c75', label: __( 'Center 75%', 'bsx-blocks' ) },
        { value: 'ct', label: __( 'Center top', 'bsx-blocks' ) },
        { value: 'rc', label: __( 'Right center', 'bsx-blocks' ) },
        { value: '33c', label: __( '33% center', 'bsx-blocks' ) },
        { value: '80c', label: __( '80% center', 'bsx-blocks' ) },
        { value: '66t', label: __( '66% top', 'bsx-blocks' ) },
        { value: '66c', label: __( '66% center', 'bsx-blocks' ) },
    ];
    return (
        <SelectControl 
            label={ __( 'Background position', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const bgSizeSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = [
        { value: 'cover', label: __( 'Cover', 'bsx-blocks' ) },
        { value: 'contain', label: __( 'Contain', 'bsx-blocks' ) },
        { value: '100a', label: __( '100% auto', 'bsx-blocks' ) },
    ];
    return (
        <SelectControl 
            label={ __( 'Background size', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const bannerTypeSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = [
        { value: '', label: __( 'Fix height', 'bsx-blocks' ) },
        { value: 'vh', label: __( 'Viewport dependent height', 'bsx-blocks' ) },
        { value: 'st', label: __( 'Static height', 'bsx-blocks' ) },
    ];
    return (
        <SelectControl 
            label={ __( 'Banner height type', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
            help={ __( 'Viewport dependant height will be e.g. all viewport height or viewport height - ? pixels. Static height instead depends only on the banners contents.', 'bsx-blocks' ) }
        />
    )
}

export const bannerSizeSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = [
        { value: '1', label: __( '1 (biggest)', 'bsx-blocks' ) },
        { value: '2', label: __( '2', 'bsx-blocks' ) },
        { value: '3', label: __( '3', 'bsx-blocks' ) },
        { value: '4', label: __( '4', 'bsx-blocks' ) },
        { value: '5', label: __( '5', 'bsx-blocks' ) },
        { value: '6', label: __( '6 (smallest)', 'bsx-blocks' ) },
    ];
    return (
        <SelectControl 
            label={ __( 'Banner height size', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
            help={ __( 'Choose from 1 (maximum) to 3 (minimum)', 'bsx-blocks' ) }
        />
    )
}

export const bgAttachmentSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = [
        { value: '', label: __( '– unset –', 'bsx-blocks' ) },
        { value: 'static', label: __( 'static', 'bsx-blocks' ) },
        { value: 'fixed', label: __( 'fixed', 'bsx-blocks' ) },
    ];
    return (
        <SelectControl 
            label={ __( 'Background attachement', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const textShadowSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = [
        { value: '', label: __( '– unset –', 'bsx-blocks' ) },
        { value: 'dark', label: __( 'Dark', 'bsx-blocks' ) },
        { value: 'darker', label: __( 'Darker', 'bsx-blocks' ) },
        { value: 'darkest', label: __( 'Darkest', 'bsx-blocks' ) },
    ];
    return (
        <SelectControl label={ __( 'Text shadow', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const fontWeightSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = [
        { value: '', label: __( '– unset –', 'bsx-blocks' ) },
        { value: 'light', label: __( 'Light', 'bsx-blocks' ) },
        { value: 'normal', label: __( 'Normal', 'bsx-blocks' ) },
        { value: 'bold', label: __( 'Bold', 'bsx-blocks' ) },
    ];
    return (
        <SelectControl label={ __( 'Font weight', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const borderSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = [
        { value: '', label: __( '– unset –', 'bsx-blocks' ) },
        { value: 'true', label: __( 'Around', 'bsx-blocks' ) },
        { value: 'bottom', label: __( 'Bottom', 'bsx-blocks' ) },
    ];
    return (
        <SelectControl label={ __( 'Border', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}

export const borderStateSelect = ( value, onChangeFunction, allowedValues ) => {
    const defaultValues = states;
    return (
        <SelectControl label={ __( 'Border color', 'bsx-blocks' ) }
            value={ value }
            onChange={ onChangeFunction }
            options={ filterByAllowedValueKeys( defaultValues, allowedValues ) }
        />
    )
}


// uploads

export const imgUploadClickableImg = ( imgId, url, onChangeFunction, type ) => {
    const alt = ( typeof type !== 'undefined' && type === 'p' ) 
        ? __( 'Change / upload portrait image', 'bsx-blocks' ) 
        : __( 'Change / upload image', 'bsx-blocks' )
    ;
    return (
        <MediaUpload
            onSelect={ onChangeFunction }
            allowedTypes="image"
            value={ imgId }
            render={ ( { open } ) => (
                <Button
                    className="bsxui-config-panel-img-button has-margin-bottom"
                    onClick={ open }
                >
                    <img class="bsxui-config-panel-img" src={ url } alt={ alt } />
                </Button>
            ) }
        />
    )
}

export const imgUploadButton = ( imgId, onChangeFunction, type ) => {
    const label = ( typeof type !== 'undefined' && type === 'p' ) 
        ? __( 'Change / upload portrait image', 'bsx-blocks' ) 
        : __( 'Change / upload image', 'bsx-blocks' )
    ;
    return (
        <MediaUpload
            onSelect={ onChangeFunction }
            allowedTypes="image"
            value={ imgId }
            render={ ( { open } ) => (
                <Button 
                    onClick={ open }
                    isSecondary
                >
                    { label }
                </Button>
            ) }
        />
    )
}


// template selects

export const inlineTemplateSelect = ( templates, onChangeFunction ) => {
    // has no templateName since non selected yet
    return (
        <div class="bsxui-initial-inline-control">
            <div class="bsxui-initial-inline-control-heading">
                { __( 'Please select template', 'bsx-blocks' ) }
            </div>
            <div className="bsxui-icon-text-button-list">
                { templates.map( ( template, index ) => (
                    <Button
                        label={ template.title }
                        onClick={ () => {
                            onChangeFunction( template.name );
                        } }
                        className={ 'bsxui-icon-text-button-list-item ' }
                    >
                        <div class="bsxui-icon-text-button-list-item-icon">
                            { template.icon }
                        </div>
                        <div class="bsxui-icon-text-button-list-item-label">
                            { template.title }
                        </div>
                    </Button>
                ) ) }
            </div>
        </div>
    )
}

export const uiTemplateSelect = ( templates, templateName, onChangeFunction ) => {
    return (
        <div className="bsxui-icon-text-button-list">
            { templates.map( ( template, index ) => (
                <Button
                    label={ template.title }
                    onClick={ () => {
                        onChangeFunction( template.name );
                    } }
                    className={ 'bsxui-icon-text-button-list-item ' + ( templateName === template.name ? 'active' : '' ) }
                >
                    <div class="bsxui-icon-text-button-list-item-icon">
                        { template.icon }
                    </div>
                    <div class="bsxui-icon-text-button-list-item-label">
                        { template.title }
                    </div>
                </Button>
            ) ) }
        </div>
    )
}






