import Vue from 'vue';
import { isUndefined } from '@syncfusion/ej2-base';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { ListBox } from '@syncfusion/ej2-dropdowns';


export const properties: string[] = ['actionFailureTemplate', 'allowDragAndDrop', 'cssClass', 'dataSource', 'enablePersistence', 'enableRtl', 'enabled', 'fields', 'groupTemplate', 'height', 'ignoreAccent', 'itemTemplate', 'locale', 'noRecordsTemplate', 'query', 'scope', 'selectionSettings', 'sortOrder', 'toolbarSettings', 'value', 'zIndex', 'actionBegin', 'actionComplete', 'actionFailure', 'beforeItemRender', 'change', 'created', 'dataBound', 'destroyed', 'drag', 'dragStart', 'drop', 'select'];
export const modelProps: string[] = ['value'];

/**
 * ListBox component allows the user to select values from the predefined list of values.
 * ```html
 * <ejs-listbox :dataSource='data'></ejs-listbox>
 * ```
 */
@EJComponentDecorator({
    props: properties,
    model: {
        event: 'modelchanged'
    }
})
export class ListBoxComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = false;
    protected hasInjectedModules: boolean = true;
    public tagMapper: { [key: string]: Object } = {};
    public tagNameMapper: Object = {};
    
    constructor() {
        super();
        this.ej2Instances = new ListBox({});        this.ej2Instances._trigger = this.ej2Instances.trigger;
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
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
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

    public addItems(items: undefined[] | undefined, itemIndex?: number): void {
        return this.ej2Instances.addItems(items, itemIndex);
    }

    public enableItems(items: string[], enable: boolean): void {
        return this.ej2Instances.enableItems(items, enable);
    }

    public getDataByValue(value: string | number | boolean): Object | string | number | boolean {
        return this.ej2Instances.getDataByValue(value);
    }

    public getItems(): Object[] {
        return this.ej2Instances.getItems();
    }

    public requiredModules(): Object[] {
        return this.ej2Instances.requiredModules();
    }

    public selectAll(state: boolean): void {
        return this.ej2Instances.selectAll(state);
    }

    public selectItems(items: string[], state: boolean): void {
        return this.ej2Instances.selectItems(items, state);
    }
}

export const ListBoxPlugin = {
    name: 'ejs-listbox',
    install(Vue: any) {
        Vue.component(ListBoxPlugin.name, ListBoxComponent);

    }
}
