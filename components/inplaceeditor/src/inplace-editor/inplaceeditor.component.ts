import Vue from 'vue';
import { isUndefined } from '@syncfusion/ej2-base';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { InPlaceEditor } from '@syncfusion/ej2-inplace-editor';


export const properties: string[] = ['actionOnBlur', 'adaptor', 'cancelButton', 'cssClass', 'disabled', 'editableOn', 'emptyText', 'enableEditMode', 'enableHtmlParse', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'locale', 'mode', 'model', 'name', 'popupSettings', 'primaryKey', 'saveButton', 'showButtons', 'submitOnEnter', 'template', 'textOption', 'type', 'url', 'validationRules', 'value', 'actionBegin', 'actionFailure', 'actionSuccess', 'beforeSanitizeHtml', 'beginEdit', 'cancelClick', 'change', 'created', 'destroyed', 'submitClick', 'validating'];
export const modelProps: string[] = ['value'];

/**
 * `ejs-inplace-editor` represents the VueJS InPlaceEditor Component.
 * ```vue
 * <ejs-inplaceeditor></ejs-inplaceeditor>
 * ```
 */
@EJComponentDecorator({
    props: properties,
    model: {
        event: 'modelchanged'
    }
})
export class InPlaceEditorComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = false;
    protected hasInjectedModules: boolean = true;
    public tagMapper: { [key: string]: Object } = {};
    public tagNameMapper: Object = {};
    
    constructor() {
        super();
        this.ej2Instances = new InPlaceEditor({});        this.ej2Instances._trigger = this.ej2Instances.trigger;
        this.ej2Instances.trigger = this.trigger;

        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
    }
    public setProperties(prop: any, muteOnChange: boolean): void {
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map((key: string): void => {
                this.models.map((model: string): void => {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    }
    public trigger(eventName: string, eventProp: {[key:string]:Object}, successHandler?: Function): void {
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            let key: string[] = this.models.toString().match(/checked|value/) || [];
            let propKey: string = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                (this as any).$emit('update:'+ propKey, eventProp[propKey]);
                (this as any).$emit('modelchanged', eventProp[propKey]);
            }
        } else if ((eventName === 'actionBegin' && eventProp.requestType === 'dateNavigate') && this.models && (this.models.length !== 0)) {
            let key: string[] = this.models.toString().match(/currentView|selectedDate/) || [];
            let propKey: string = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                (this as any).$emit('update:'+ propKey, eventProp[propKey]);
                (this as any).$emit('modelchanged', eventProp[propKey]);
            }
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp, successHandler);
        }            
    }

    public render(createElement: any) {
        return createElement('div', (this as any).$slots.default);
    }
    
    public extendModelValue(val: string | number | boolean | Object | Object | string[] | Object[] | number[] | boolean[]): void {
        return this.ej2Instances.extendModelValue(val);
    }

    public save(): void {
        return this.ej2Instances.save();
    }

    public setValue(): void {
        return this.ej2Instances.setValue();
    }

    public validate(): void {
        return this.ej2Instances.validate();
    }
}

export const InPlaceEditorPlugin = {
    name: 'ejs-inplaceeditor',
    install(Vue: any) {
        Vue.component(InPlaceEditorPlugin.name, InPlaceEditorComponent);

    }
}
