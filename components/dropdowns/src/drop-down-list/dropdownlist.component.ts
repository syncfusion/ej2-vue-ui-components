import Vue from 'vue';
import { isUndefined } from '@syncfusion/ej2-base';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { DropDownList } from '@syncfusion/ej2-dropdowns';


export const properties: string[] = ['actionFailureTemplate', 'allowFiltering', 'cssClass', 'dataSource', 'enablePersistence', 'enableRtl', 'enabled', 'fields', 'filterBarPlaceholder', 'floatLabelType', 'footerTemplate', 'groupTemplate', 'headerTemplate', 'htmlAttributes', 'ignoreAccent', 'index', 'itemTemplate', 'locale', 'noRecordsTemplate', 'placeholder', 'popupHeight', 'popupWidth', 'query', 'readonly', 'showClearButton', 'sortOrder', 'text', 'value', 'valueTemplate', 'width', 'zIndex', 'actionBegin', 'actionComplete', 'actionFailure', 'beforeOpen', 'blur', 'change', 'close', 'created', 'dataBound', 'destroyed', 'filtering', 'focus', 'open', 'select'];
export const modelProps: string[] = ['value'];

/**
 * DropDownList contains a list of predefined values from which the user can choose
 * ```html
 * <ejs-dropdownlist :dataSource='data'></ejs-dropdownlist>
 * ```
 */
@EJComponentDecorator({
    props: properties,
    model: {
        event: 'modelchanged'
    }
})
export class DropDownListComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = false;
    protected hasInjectedModules: boolean = false;
    public tagMapper: { [key: string]: Object } = {};
    public tagNameMapper: Object = {};
    
    constructor() {
        super();
        this.ej2Instances = new DropDownList({});        this.ej2Instances._trigger = this.ej2Instances.trigger;
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
    public trigger(eventName: string, eventProp: {[key:string]:Object}): void {
        if (eventName === 'change' && this.models && (this.models.length !== 0)) {
            let key: string[] = this.models.toString().match(/checked|value/) || [];
            let propKey: string = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                (this as any).$emit('update:'+ propKey, eventProp[propKey]);
                (this as any).$emit('modelchanged', eventProp[propKey]);
            }
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp);
        }            
    }

    public render(createElement: any) {
        return createElement('input', (this as any).$slots.default);
    }
    
    public addItem(items: undefined[] | undefined | string | boolean | number | string[] | boolean[] | number[], itemIndex?: number): void {
        return this.ej2Instances.addItem(items, itemIndex);
    }

    public focusIn(e?: Object | Object | Object | Object): void {
        return this.ej2Instances.focusIn(e);
    }

    public focusOut(): void {
        return this.ej2Instances.focusOut();
    }

    public getDataByValue(value: string | number | boolean): undefined {
        return this.ej2Instances.getDataByValue(value);
    }

    public getItems(): undefined {
        return this.ej2Instances.getItems();
    }

    public hidePopup(): void {
        return this.ej2Instances.hidePopup();
    }

    public hideSpinner(): void {
        return this.ej2Instances.hideSpinner();
    }

    public showPopup(): void {
        return this.ej2Instances.showPopup();
    }

    public showSpinner(): void {
        return this.ej2Instances.showSpinner();
    }
}

export const DropDownListPlugin = {
    name: 'ejs-dropdownlist',
    install(Vue: any) {
        Vue.component(DropDownListPlugin.name, DropDownListComponent);

    }
}
