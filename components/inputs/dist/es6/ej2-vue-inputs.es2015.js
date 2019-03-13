import { ColorPicker, MaskedTextBox, NumericTextBox, Slider, TextBox, Uploader } from '@syncfusion/ej2-inputs';
import { isUndefined } from '@syncfusion/ej2-base';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import Vue from 'vue';

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties = ['cssClass', 'enablePersistence', 'enableRtl', 'enabled', 'floatLabelType', 'locale', 'multiline', 'placeholder', 'readonly', 'showClearButton', 'type', 'value', 'blur', 'change', 'created', 'destroyed', 'focus', 'input'];
const modelProps = ['value'];
/**
 * Represents the Essential JS 2 VueJS TextBox Component
 * ```html
 * <ejs-textbox v-bind:value='value'></ejs-textbox>
 * ```
 */
let TextBoxComponent = class TextBoxComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties;
        this.models = modelProps;
        this.hasChildDirective = false;
        this.hasInjectedModules = false;
        this.tagMapper = {};
        this.tagNameMapper = {};
        this.ej2Instances = new TextBox({});
        this.ej2Instances._trigger = this.ej2Instances.trigger;
        this.ej2Instances.trigger = this.trigger;
        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
    }
    setProperties(prop, muteOnChange) {
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map((key) => {
                this.models.map((model) => {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    }
    trigger(eventName, eventProp) {
        if (eventName === 'change' && this.models && (this.models.length !== 0)) {
            let key = this.models.toString().match(/checked|value/) || [];
            let propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                this.$emit('update:' + propKey, eventProp[propKey]);
                this.$emit('modelchanged', eventProp[propKey]);
            }
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp);
        }
    }
    render(createElement) {
        return createElement('input', this.$slots.default);
    }
    addAttributes(attributes) {
        return this.ej2Instances.addAttributes(attributes);
    }
    removeAttributes(attributes) {
        return this.ej2Instances.removeAttributes(attributes);
    }
};
TextBoxComponent = __decorate([
    EJComponentDecorator({
        props: properties,
        model: {
            event: 'modelchanged'
        }
    })
], TextBoxComponent);
const TextBoxPlugin = {
    name: 'ejs-textbox',
    install(Vue$$1) {
        Vue$$1.component(TextBoxPlugin.name, TextBoxComponent);
    }
};

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties$1 = ['cssClass', 'currency', 'currencyCode', 'decimals', 'enablePersistence', 'enableRtl', 'enabled', 'floatLabelType', 'format', 'locale', 'max', 'min', 'placeholder', 'readonly', 'showClearButton', 'showSpinButton', 'step', 'strictMode', 'validateDecimalOnType', 'value', 'width', 'blur', 'change', 'created', 'destroyed', 'focus'];
const modelProps$1 = ['value'];
/**
 * Represents the Essential JS 2 VueJS NumericTextBox Component
 * ```html
 * <ejs-numerictextbox v-bind:value='value'></ejs-numerictextbox>
 * ```
 */
let NumericTextBoxComponent = class NumericTextBoxComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties$1;
        this.models = modelProps$1;
        this.hasChildDirective = false;
        this.hasInjectedModules = false;
        this.tagMapper = {};
        this.tagNameMapper = {};
        this.ej2Instances = new NumericTextBox({});
        this.ej2Instances._trigger = this.ej2Instances.trigger;
        this.ej2Instances.trigger = this.trigger;
        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
    }
    setProperties(prop, muteOnChange) {
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map((key) => {
                this.models.map((model) => {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    }
    trigger(eventName, eventProp) {
        if (eventName === 'change' && this.models && (this.models.length !== 0)) {
            let key = this.models.toString().match(/checked|value/) || [];
            let propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                this.$emit('update:' + propKey, eventProp[propKey]);
                this.$emit('modelchanged', eventProp[propKey]);
            }
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp);
        }
    }
    render(createElement) {
        return createElement('input', this.$slots.default);
    }
    decrement(step) {
        return this.ej2Instances.decrement(step);
    }
    getText() {
        return this.ej2Instances.getText();
    }
    increment(step) {
        return this.ej2Instances.increment(step);
    }
};
NumericTextBoxComponent = __decorate$1([
    EJComponentDecorator({
        props: properties$1,
        model: {
            event: 'modelchanged'
        }
    })
], NumericTextBoxComponent);
const NumericTextBoxPlugin = {
    name: 'ejs-numerictextbox',
    install(Vue$$1) {
        Vue$$1.component(NumericTextBoxPlugin.name, NumericTextBoxComponent);
    }
};

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties$2 = ['cssClass', 'customCharacters', 'enablePersistence', 'enableRtl', 'enabled', 'floatLabelType', 'locale', 'mask', 'placeholder', 'promptChar', 'showClearButton', 'value', 'width', 'blur', 'change', 'created', 'destroyed', 'focus'];
const modelProps$2 = ['value'];
/**
 * Represents the Essential JS 2 VueJS MaskedTextBox Component
 * ```html
 * <ejs-maskedtextbox v-bind:value='value'></ejs-maskedtextbox>
 * ```
 */
let MaskedTextBoxComponent = class MaskedTextBoxComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties$2;
        this.models = modelProps$2;
        this.hasChildDirective = false;
        this.hasInjectedModules = false;
        this.tagMapper = {};
        this.tagNameMapper = {};
        this.ej2Instances = new MaskedTextBox({});
        this.ej2Instances._trigger = this.ej2Instances.trigger;
        this.ej2Instances.trigger = this.trigger;
        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
    }
    setProperties(prop, muteOnChange) {
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map((key) => {
                this.models.map((model) => {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    }
    trigger(eventName, eventProp) {
        if (eventName === 'change' && this.models && (this.models.length !== 0)) {
            let key = this.models.toString().match(/checked|value/) || [];
            let propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                this.$emit('update:' + propKey, eventProp[propKey]);
                this.$emit('modelchanged', eventProp[propKey]);
            }
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp);
        }
    }
    render(createElement) {
        return createElement('input', this.$slots.default);
    }
    getMaskedValue() {
        return this.ej2Instances.getMaskedValue();
    }
};
MaskedTextBoxComponent = __decorate$2([
    EJComponentDecorator({
        props: properties$2,
        model: {
            event: 'modelchanged'
        }
    })
], MaskedTextBoxComponent);
const MaskedTextBoxPlugin = {
    name: 'ejs-maskedtextbox',
    install(Vue$$1) {
        Vue$$1.component(MaskedTextBoxPlugin.name, MaskedTextBoxComponent);
    }
};

var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties$3 = ['cssClass', 'customValues', 'enableAnimation', 'enablePersistence', 'enableRtl', 'enabled', 'limits', 'locale', 'max', 'min', 'orientation', 'readonly', 'showButtons', 'step', 'ticks', 'tooltip', 'type', 'value', 'change', 'changed', 'created', 'renderedTicks', 'renderingTicks', 'tooltipChange'];
const modelProps$3 = ['value'];
/**
 * Represents the VueJS Slider Component.
 * ```html
 * <ejs-slider :value='value'></ejs-slider>
 * ```
 */
let SliderComponent = class SliderComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties$3;
        this.models = modelProps$3;
        this.hasChildDirective = false;
        this.hasInjectedModules = false;
        this.tagMapper = {};
        this.tagNameMapper = {};
        this.ej2Instances = new Slider({});
        this.ej2Instances._trigger = this.ej2Instances.trigger;
        this.ej2Instances.trigger = this.trigger;
        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
    }
    setProperties(prop, muteOnChange) {
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map((key) => {
                this.models.map((model) => {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    }
    trigger(eventName, eventProp) {
        if (eventName === 'change' && this.models && (this.models.length !== 0)) {
            let key = this.models.toString().match(/checked|value/) || [];
            let propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                this.$emit('update:' + propKey, eventProp[propKey]);
                this.$emit('modelchanged', eventProp[propKey]);
            }
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp);
        }
    }
    render(createElement) {
        return createElement('div', this.$slots.default);
    }
    reposition() {
        return this.ej2Instances.reposition();
    }
    setTooltip() {
        return this.ej2Instances.setTooltip();
    }
};
SliderComponent = __decorate$3([
    EJComponentDecorator({
        props: properties$3,
        model: {
            event: 'modelchanged'
        }
    })
], SliderComponent);
const SliderPlugin = {
    name: 'ejs-slider',
    install(Vue$$1) {
        Vue$$1.component(SliderPlugin.name, SliderComponent);
    }
};

var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let FilesDirective = class FilesDirective extends Vue {
    render() {
        return;
    }
};
FilesDirective = __decorate$4([
    EJComponentDecorator({})
], FilesDirective);
const FilesPlugin = {
    name: 'e-files',
    install(Vue$$1) {
        Vue$$1.component(FilesPlugin.name, FilesDirective);
    }
};
/**
 * 'files' directive represent a file of vue uploader
 * It must be contained in a Uploader component(`ejs-uploader`).
 * ```html
 * <ejs-uploader id='fileupload' v-bind:multiple='true'>
 *   <e-files>
 *    <e-file name='Java' size=23000 type='pdf'></e-file>
 *    <e-file name='C++' size=30000 type='.docx'></e-file>
 *   </e-files>
 * </ejs-uploader>
 * ```
 */
let UploadedFilesDirective = class UploadedFilesDirective extends Vue {
    render() {
        return;
    }
};
UploadedFilesDirective = __decorate$4([
    EJComponentDecorator({})
], UploadedFilesDirective);
const UploadedFilesPlugin = {
    name: 'e-uploadedfiles',
    install(Vue$$1) {
        Vue$$1.component(UploadedFilesPlugin.name, UploadedFilesDirective);
    }
};

var __decorate$5 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties$4 = ['allowedExtensions', 'asyncSettings', 'autoUpload', 'buttons', 'cssClass', 'directoryUpload', 'dropArea', 'enablePersistence', 'enableRtl', 'enabled', 'files', 'locale', 'maxFileSize', 'minFileSize', 'multiple', 'sequentialUpload', 'showFileList', 'template', 'actionComplete', 'canceling', 'change', 'chunkFailure', 'chunkSuccess', 'chunkUploading', 'clearing', 'created', 'failure', 'fileListRendering', 'pausing', 'progress', 'removing', 'rendering', 'resuming', 'selected', 'success', 'uploading'];
const modelProps$4 = [];
/**
 * Represents the Essential JS 2 VueJS Uploader Component
 * ```html
 * <ejs-uploader id='fileUpload' v-bind:multiple='true'></ejs-uploader>
 * ```
 */
let UploaderComponent = class UploaderComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties$4;
        this.models = modelProps$4;
        this.hasChildDirective = true;
        this.hasInjectedModules = false;
        this.tagMapper = { "e-files": "e-uploadedfiles" };
        this.tagNameMapper = {};
        this.ej2Instances = new Uploader({});
        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
    }
    setProperties(prop, muteOnChange) {
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map((key) => {
                this.models.map((model) => {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    }
    render(createElement) {
        return createElement('input', this.$slots.default);
    }
    bytesToSize(bytes) {
        return this.ej2Instances.bytesToSize(bytes);
    }
    cancel(fileData) {
        return this.ej2Instances.cancel(fileData);
    }
    clearAll() {
        return this.ej2Instances.clearAll();
    }
    getFilesData() {
        return this.ej2Instances.getFilesData();
    }
    pause(fileData, custom) {
        return this.ej2Instances.pause(fileData, custom);
    }
    remove(fileData, customTemplate, removeDirectly, args) {
        return this.ej2Instances.remove(fileData, customTemplate, removeDirectly, args);
    }
    resume(fileData, custom) {
        return this.ej2Instances.resume(fileData, custom);
    }
    retry(fileData, fromcanceledStage, custom) {
        return this.ej2Instances.retry(fileData, fromcanceledStage, custom);
    }
    sortFileList(filesData) {
        return this.ej2Instances.sortFileList(filesData);
    }
    traverseFileTree(item, event) {
        return this.ej2Instances.traverseFileTree(item, event);
    }
    upload(files, custom) {
        return this.ej2Instances.upload(files, custom);
    }
};
UploaderComponent = __decorate$5([
    EJComponentDecorator({
        props: properties$4
    })
], UploaderComponent);
const UploaderPlugin = {
    name: 'ejs-uploader',
    install(Vue$$1) {
        Vue$$1.component(UploaderPlugin.name, UploaderComponent);
        Vue$$1.component(UploadedFilesPlugin.name, UploadedFilesDirective);
        Vue$$1.component(FilesPlugin.name, FilesDirective);
    }
};

var __decorate$6 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties$5 = ['columns', 'cssClass', 'disabled', 'enableOpacity', 'enablePersistence', 'enableRtl', 'inline', 'locale', 'mode', 'modeSwitcher', 'noColor', 'presetColors', 'showButtons', 'value', 'beforeClose', 'beforeModeSwitch', 'beforeOpen', 'beforeTileRender', 'change', 'created', 'open', 'select'];
const modelProps$5 = ['value'];
/**
 * Represents the Essential JS 2 VueJS ColorPicker Component
 * ```html
 * <ejs-colorpicker></ejs-colorpicker>
 * ```
 */
let ColorPickerComponent = class ColorPickerComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties$5;
        this.models = modelProps$5;
        this.hasChildDirective = false;
        this.hasInjectedModules = false;
        this.tagMapper = {};
        this.tagNameMapper = {};
        this.ej2Instances = new ColorPicker({});
        this.ej2Instances._trigger = this.ej2Instances.trigger;
        this.ej2Instances.trigger = this.trigger;
        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
    }
    setProperties(prop, muteOnChange) {
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map((key) => {
                this.models.map((model) => {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    }
    trigger(eventName, eventProp) {
        if (eventName === 'change' && this.models && (this.models.length !== 0)) {
            let key = this.models.toString().match(/checked|value/) || [];
            let propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                this.$emit('update:' + propKey, eventProp[propKey]);
                this.$emit('modelchanged', eventProp[propKey]);
            }
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp);
        }
    }
    render(createElement) {
        return createElement('input', this.$slots.default);
    }
    getValue(value, type) {
        return this.ej2Instances.getValue(value, type);
    }
    toggle() {
        return this.ej2Instances.toggle();
    }
};
ColorPickerComponent = __decorate$6([
    EJComponentDecorator({
        props: properties$5,
        model: {
            event: 'modelchanged'
        }
    })
], ColorPickerComponent);
const ColorPickerPlugin = {
    name: 'ejs-colorpicker',
    install(Vue$$1) {
        Vue$$1.component(ColorPickerPlugin.name, ColorPickerComponent);
    }
};

export { TextBoxComponent, TextBoxPlugin, NumericTextBoxComponent, NumericTextBoxPlugin, MaskedTextBoxComponent, MaskedTextBoxPlugin, SliderComponent, SliderPlugin, FilesDirective, UploadedFilesDirective, FilesPlugin, UploadedFilesPlugin, UploaderComponent, UploaderPlugin, ColorPickerComponent, ColorPickerPlugin };
export * from '@syncfusion/ej2-inputs';
//# sourceMappingURL=ej2-vue-inputs.es2015.js.map
