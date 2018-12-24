import Vue from 'vue';
import { isUndefined } from '@syncfusion/ej2-base';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { RadioButton } from '@syncfusion/ej2-buttons';


export const properties: string[] = ['checked', 'cssClass', 'disabled', 'enablePersistence', 'enableRtl', 'label', 'labelPosition', 'locale', 'name', 'value', 'change', 'created'];
export const modelProps: string[] = ['checked'];

/**
 * Represents the Essential JS 2 VueJS RadioButton Component
 * ```html
 * <ejs-radiobutton label='Default'></ejs-radiobutton>
 * ```
 */
@EJComponentDecorator({
    props: properties,
    model: {
        event: 'modelchanged'
    }
})
export class RadioButtonComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = false;
    protected hasInjectedModules: boolean = false;
    public tagMapper: { [key: string]: Object } = {};
    public tagNameMapper: Object = {};
    
    constructor() {
        super();
        this.ej2Instances = new RadioButton({});        this.ej2Instances._trigger = this.ej2Instances.trigger;
        this.ej2Instances.trigger = this.trigger;
        //this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        //this.ej2Instances.setProperties = this.setProperties;

        this.bindProperties();
    }
    public trigger(eventName: string, eventProp: {[key:string]:Object}): void {
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            let key: string[] = this.models.toString().match(/checked|value/) || [];
            let propKey: string = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                (this as any).$emit('modelchanged', eventProp[propKey]);
            }
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp);
        }            
    }

    public setProperties(prop: any, muteOnChange: boolean): void {
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && (this.models.length !== 0)) {
            let keys: string[] = Object.keys(prop);
            let emitKeys: string[] = [];
            let emitFlag: boolean = false;
            keys.map((key: string): void => {
                this.models.map((model: string): void => {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        emitKeys.push(key);
                        emitFlag = true;
                    }
                });
            });
            if (emitFlag) {
                emitKeys.map((propKey: string): void => {
                    this.$emit('update:' + propKey, prop[propKey]);
                })
            }
        }
    }

    public render(createElement: any) {
        return createElement('input', (this as any).$slots.default);
    }
    
}

export const RadioButtonPlugin = {
    name: 'ejs-radiobutton',
    install(Vue: any) {
        Vue.component(RadioButtonPlugin.name, RadioButtonComponent);

    }
}
