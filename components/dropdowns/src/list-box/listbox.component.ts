import { Options } from 'vue-class-component';
import { isUndefined } from '@syncfusion/ej2-base';
import { ComponentBase, EJComponentDecorator, getProps, allVue, gh } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined, getValue } from '@syncfusion/ej2-base';

import { ListBox } from '@syncfusion/ej2-dropdowns';


// {{VueImport}}
export const properties: string[] = ['isLazyUpdate', 'plugins', 'actionFailureTemplate', 'allowDragAndDrop', 'allowFiltering', 'cssClass', 'dataSource', 'enablePersistence', 'enableRtl', 'enabled', 'fields', 'filterBarPlaceholder', 'filterType', 'groupTemplate', 'height', 'ignoreAccent', 'ignoreCase', 'itemTemplate', 'locale', 'maximumSelectionLength', 'noRecordsTemplate', 'query', 'scope', 'selectionSettings', 'sortOrder', 'toolbarSettings', 'value', 'zIndex', 'actionBegin', 'actionComplete', 'actionFailure', 'beforeDrop', 'beforeItemRender', 'change', 'created', 'dataBound', 'destroyed', 'drag', 'dragStart', 'drop', 'filtering', 'select'];
export const modelProps: string[] = ['value'];

export const testProp: any = getProps({props: properties});
export const props = testProp[0];
export const watch = testProp[1];

export const emitProbs: any = Object.keys(watch);
emitProbs.push('modelchanged');
for (let props of modelProps) {
    emitProbs.push(
        'update:'+props
    );
}

export const isExecute: any = gh ? false : true;

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
},isExecute)

/* Start Options({
    props: props,
    watch: watch,
    emits: emitProbs,
    provide: function provide() {
        return {
            custom: this.custom
        };
    }
}) End */

export class ListBoxComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = false;
    protected hasInjectedModules: boolean = true;
    public tagMapper: { [key: string]: Object } = {};
    public tagNameMapper: Object = {};
    public isVue3: boolean;
    public templateCollection: any;
    constructor() {
        super(arguments);
        this.isVue3 = !isExecute;
        this.ej2Instances = new ListBox({});        this.ej2Instances._trigger = this.ej2Instances.trigger;
        this.ej2Instances.trigger = this.trigger;

        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
        this.ej2Instances.clearTemplate = this.clearTemplate;
        this.updated = this.updated;
    }

 public clearTemplate(templateNames?: string[]): any {
    if (!templateNames){
       templateNames = Object.keys(this.templateCollection || {});
    }
    if (templateNames.length &&  this.templateCollection) {
    for (let tempName of templateNames){
       let elementCollection: any = this.templateCollection[tempName];
       if(elementCollection && elementCollection.length) {
       for(let ele of elementCollection) {
           let destroy: any = getValue('__vue__.$destroy', ele);
           if (destroy) {
               ele.__vue__.$destroy();
           }
           if (ele.innerHTML){
               ele.innerHTML = '';
           }
       }
       delete this.templateCollection[tempName];
       }
    }
}
 }



    public setProperties(prop: any, muteOnChange: boolean): void {
        if(this.isVue3) {
            this.models = !this.models ? this.ej2Instances.referModels : this.models;
        }
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map((key: string): void => {
                this.models.map((model: string): void => {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        if (this.isVue3) {
                            this.ej2Instances.vueInstance.$emit('update:' + key, prop[key]);
                        } else {
                            (this as any).$emit('update:' + key, prop[key]);
                            (this as any).$emit('modelchanged', prop[key]);
                        }
                    }
                });
            });
        }
    }
    public trigger(eventName: string, eventProp: {[key:string]:Object}, successHandler?: Function): void {
        if(!isExecute) {
            this.models = !this.models ? this.ej2Instances.referModels : this.models;
        }
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            let key: string[] = this.models.toString().match(/checked|value/) || [];
            let propKey: string = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                if (!isExecute) {
                    this.ej2Instances.vueInstance.$emit('update:' + propKey, eventProp[propKey]);
                    this.ej2Instances.vueInstance.$emit('modelchanged', eventProp[propKey]);
                    this.ej2Instances.vueInstance.$emit('update:modelValue', eventProp[propKey]);
                } else {
                    if (eventName === 'change' || ((this as any).$props && !(this as any).$props.isLazyUpdate)) {
                        (this as any).$emit('update:'+ propKey, eventProp[propKey]);
                        (this as any).$emit('modelchanged', eventProp[propKey]);
                    }
                }
            }
        } else if ((eventName === 'actionBegin' && eventProp.requestType === 'dateNavigate') && this.models && (this.models.length !== 0)) {
            let key: string[] = this.models.toString().match(/currentView|selectedDate/) || [];
            let propKey: string = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                if (!isExecute) {
                    this.ej2Instances.vueInstance.$emit('update:' + propKey, eventProp[propKey]);
                    this.ej2Instances.vueInstance.$emit('modelchanged', eventProp[propKey]);
                } else {
                    (this as any).$emit('update:'+ propKey, eventProp[propKey]);
                    (this as any).$emit('modelchanged', eventProp[propKey]);
                }
            }
        }
        if ((this.ej2Instances && this.ej2Instances._trigger)) {
            this.ej2Instances._trigger(eventName, eventProp, successHandler); 
        }
    }

    public render(createElement: any) {
        let h: any = gh || createElement;
        let slots: any = null;
        if(!isNullOrUndefined((this as any).$slots.default)) {
            slots = gh ? (this as any).$slots.default() : (this as any).$slots.default;
        }
        return h('input', slots);
    }
    public custom(): void {
        this.updated();
    }
    
    public addItems(items: Object[] | Object, itemIndex?: number): void {
        return this.ej2Instances.addItems(items, itemIndex);
    }

    public enableItems(items: string[], enable: boolean, isValue?: boolean): void {
        return this.ej2Instances.enableItems(items, enable, isValue);
    }

    public filter(dataSource: undefined[] | Object | string[] | number[] | boolean[], query?: Object, fields?: Object): void {
        return this.ej2Instances.filter(dataSource, query, fields);
    }

    public getDataByValue(value: string | number | boolean): Object | string | number | boolean {
        return this.ej2Instances.getDataByValue(value);
    }

    public getDataByValues(value: string[] | number[] | boolean[]): undefined[] {
        return this.ej2Instances.getDataByValues(value);
    }

    public getDataList(): undefined[] | string[] | boolean[] | number[] {
        return this.ej2Instances.getDataList();
    }

    public getItems(): Object[] {
        return this.ej2Instances.getItems();
    }

    public getSortedList(): undefined[] | string[] | boolean[] | number[] {
        return this.ej2Instances.getSortedList();
    }

    public hideSpinner(): void {
        return this.ej2Instances.hideSpinner();
    }

    public moveAllTo(targetId?: string, index?: number): void {
        return this.ej2Instances.moveAllTo(targetId, index);
    }

    public moveDown(value?: string[] | number[] | boolean[]): void {
        return this.ej2Instances.moveDown(value);
    }

    public moveTo(value?: string[] | number[] | boolean[], index?: number, targetId?: string): void {
        return this.ej2Instances.moveTo(value, index, targetId);
    }

    public moveUp(value?: string[] | number[] | boolean[]): void {
        return this.ej2Instances.moveUp(value);
    }

    public removeItem(items?: undefined[] | undefined | string | boolean | number | string[] | boolean[] | number[], itemIndex?: number): void {
        return this.ej2Instances.removeItem(items, itemIndex);
    }

    public removeItems(items?: Object[] | Object, itemIndex?: number): void {
        return this.ej2Instances.removeItems(items, itemIndex);
    }

    public requiredModules(): Object[] {
        return this.ej2Instances.requiredModules();
    }

    public selectAll(state: boolean): void {
        return this.ej2Instances.selectAll(state);
    }

    public selectItems(items: string[], state: boolean, isValue?: boolean): void {
        return this.ej2Instances.selectItems(items, state, isValue);
    }

    public showSpinner(): void {
        return this.ej2Instances.showSpinner();
    }
}

export const ListBoxPlugin = {
    name: 'ejs-listbox',
    install(Vue: any) {
        Vue.component(ListBoxPlugin.name, ListBoxComponent);

    }
}