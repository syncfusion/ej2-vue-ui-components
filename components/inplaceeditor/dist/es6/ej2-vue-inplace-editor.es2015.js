import { InPlaceEditor } from '@syncfusion/ej2-inplace-editor';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties = ['actionOnBlur', 'adaptor', 'cancelButton', 'cssClass', 'disabled', 'editableOn', 'emptyText', 'enableEditMode', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'locale', 'mode', 'model', 'name', 'popupSettings', 'primaryKey', 'saveButton', 'showButtons', 'submitOnEnter', 'template', 'textOption', 'type', 'url', 'validationRules', 'value', 'actionBegin', 'actionFailure', 'actionSuccess', 'beforeSanitizeHtml', 'beginEdit', 'cancelClick', 'change', 'created', 'destroyed', 'submitClick', 'validating'];
const modelProps = [];
/**
 * `ejs-inplace-editor` represents the VueJS InPlaceEditor Component.
 * ```vue
 * <ejs-inplaceeditor></ejs-inplaceeditor>
 * ```
 */
let InPlaceEditorComponent = class InPlaceEditorComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties;
        this.models = modelProps;
        this.hasChildDirective = false;
        this.hasInjectedModules = true;
        this.tagMapper = {};
        this.tagNameMapper = {};
        this.ej2Instances = new InPlaceEditor({});
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
        return createElement('div', this.$slots.default);
    }
    extendModelValue(val) {
        return this.ej2Instances.extendModelValue(val);
    }
    save() {
        return this.ej2Instances.save();
    }
    setValue() {
        return this.ej2Instances.setValue();
    }
    validate() {
        return this.ej2Instances.validate();
    }
};
InPlaceEditorComponent = __decorate([
    EJComponentDecorator({
        props: properties
    })
], InPlaceEditorComponent);
const InPlaceEditorPlugin = {
    name: 'ejs-inplaceeditor',
    install(Vue) {
        Vue.component(InPlaceEditorPlugin.name, InPlaceEditorComponent);
    }
};

export { InPlaceEditorComponent, InPlaceEditorPlugin };
export * from '@syncfusion/ej2-inplace-editor';
//# sourceMappingURL=ej2-vue-inplace-editor.es2015.js.map
