import { ComponentBase, gh, getProps, isExecute, vueDefineComponent, DefineVueComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined, getValue } from '@syncfusion/ej2-base';
import { isUndefined } from '@syncfusion/ej2-base';

import { AutoComplete, AutoCompleteModel } from '@syncfusion/ej2-dropdowns';


export const properties: string[] = ['isLazyUpdate', 'plugins', 'actionFailureTemplate', 'allowCustom', 'allowFiltering', 'allowObjectBinding', 'allowResize', 'autofill', 'cssClass', 'dataSource', 'debounceDelay', 'enablePersistence', 'enableRtl', 'enableVirtualization', 'enabled', 'fields', 'filterBarPlaceholder', 'filterType', 'floatLabelType', 'footerTemplate', 'groupTemplate', 'headerTemplate', 'highlight', 'htmlAttributes', 'ignoreAccent', 'ignoreCase', 'index', 'isDeviceFullScreen', 'itemTemplate', 'locale', 'minLength', 'noRecordsTemplate', 'placeholder', 'popupHeight', 'popupWidth', 'query', 'readonly', 'showClearButton', 'showPopupButton', 'sortOrder', 'suggestionCount', 'text', 'value', 'valueTemplate', 'width', 'zIndex', 'actionBegin', 'actionComplete', 'actionFailure', 'beforeOpen', 'blur', 'change', 'close', 'created', 'customValueSpecifier', 'dataBound', 'destroyed', 'filtering', 'focus', 'open', 'resizeStart', 'resizeStop', 'resizing', 'select'];
export const modelProps: string[] = ['value'];

export const testProp: any = getProps({props: properties});
export const props = testProp[0], watch = testProp[1], emitProbs: any = Object.keys(watch);
emitProbs.push('modelchanged', 'update:modelValue');
for (let props of modelProps) { emitProbs.push('update:'+props) }

/**
 * The AutoComplete component provides all the matched suggestion list on typing the input from which the user can select one.
 * ```html
 * <ejs-autocomplete :dataSource='data'></ejs-autocomplete>
 * ```
 */
export let AutoCompleteComponent: DefineVueComponent<AutoCompleteModel> =  vueDefineComponent({
    name: 'AutoCompleteComponent',
    mixins: [ComponentBase],
    props: props,
    watch: watch,
    emits: emitProbs,
    model: { event: 'modelchanged' },
    provide() { return { custom: this.custom } },
    data() {
        return {
            ej2Instances: new AutoComplete({}) as any,
            propKeys: properties as string[],
            models: modelProps as string[],
            hasChildDirective: false as boolean,
            hasInjectedModules: true as boolean,
            tagMapper: {} as { [key: string]: Object },
            tagNameMapper: {} as Object,
            isVue3: !isExecute as boolean,
            templateCollection: {} as any,
        }
    },
    created() {
        this.ej2Instances._trigger = this.ej2Instances.trigger;
        this.ej2Instances.trigger = this.trigger;
        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
        this.ej2Instances.clearTemplate = this.clearTemplate;
        this.updated = this.updated;
    },
    render(createElement: any) {
        let h: any = !isExecute ? gh : createElement;
        let slots: any = null;
        if(!isNullOrUndefined((this as any).$slots.default)) {
            slots = !isExecute ? (this as any).$slots.default() : (this as any).$slots.default;
        }
        return h('input', slots);
    },
    methods: {
        clearTemplate(templateNames?: string[]): any {
            if (!templateNames){ templateNames = Object.keys(this.templateCollection || {}) }
            if (templateNames.length &&  this.templateCollection) {
                for (let tempName of templateNames){
                    let elementCollection: any = this.templateCollection[tempName];
                    if(elementCollection && elementCollection.length) {
                        for(let ele of elementCollection) {
                            this.destroyPortals(ele);
                        }
                        delete this.templateCollection[tempName];
                    }
                }
            }
        },
        setProperties(prop: any, muteOnChange: boolean): void {
            if(this.isVue3) { this.models = !this.models ? this.ej2Instances.referModels : this.models }
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
        },        
        trigger(eventName: string, eventProp: {[key:string]:Object}, successHandler?: Function): void {
            if(!isExecute) { this.models = !this.models ? this.ej2Instances.referModels : this.models }
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
        },

        custom(): void {
            this.updated();
        },
        addItem(items: undefined[] | undefined | string | boolean | number | string[] | boolean[] | number[], itemIndex?: number): void {
            return this.ej2Instances.addItem(items, itemIndex);
        },
        clear(): void {
            return this.ej2Instances.clear();
        },
        destroy(): void {
            return this.ej2Instances.destroy();
        },
        disableItem(item: string | number | object | Object): void {
            return this.ej2Instances.disableItem(item);
        },
        filter(dataSource: undefined[] | Object | string[] | number[] | boolean[], query?: Object, fields?: Object): void {
            return this.ej2Instances.filter(dataSource, query, fields);
        },
        focusIn(): void {
            return this.ej2Instances.focusIn();
        },
        focusOut(e?: Object | Object): void {
            return this.ej2Instances.focusOut(e);
        },
        getDataByValue(value: string | number | boolean): Object | string | number | boolean {
            return this.ej2Instances.getDataByValue(value);
        },
        getItems(): Object[] {
            return this.ej2Instances.getItems();
        },
        hidePopup(e?: Object | Object | Object): void {
            return this.ej2Instances.hidePopup(e);
        },
        hideSpinner(): void {
            return this.ej2Instances.hideSpinner();
        },
        requiredModules(): Object[] {
            return this.ej2Instances.requiredModules();
        },
        showPopup(e?: Object | Object | Object): void {
            return this.ej2Instances.showPopup(e);
        },
        showSpinner(): void {
            return this.ej2Instances.showSpinner();
        },
    }
});

export type AutoCompleteComponent = typeof ComponentBase & {
    ej2Instances: AutoComplete;
    isVue3: boolean;
    isLazyUpdate: Boolean;
    plugins: any[];
    propKeys: string[];
    models: string[];
    hasChildDirective: boolean;
    tagMapper: {
        [key: string]: Object;
    };
    tagNameMapper: Object;
    setProperties(prop: any, muteOnChange: boolean): void;
    trigger(eventName: string, eventProp: {
        [key: string]: Object;
    }, successHandler?: Function): void;
    addItem(items: undefined[] | undefined | string | boolean | number | string[] | boolean[] | number[], itemIndex?: number): void;
    clear(): void;
    destroy(): void;
    disableItem(item: string | number | object | Object): void;
    filter(dataSource: undefined[] | Object | string[] | number[] | boolean[], query?: Object, fields?: Object): void;
    focusIn(): void;
    focusOut(e?: Object | Object): void;
    getDataByValue(value: string | number | boolean): Object | string | number | boolean;
    getItems(): Object[];
    hidePopup(e?: Object | Object | Object): void;
    hideSpinner(): void;
    requiredModules(): Object[];
    showPopup(e?: Object | Object | Object): void;
    showSpinner(): void
};

export const AutoCompletePlugin = {
    name: 'ejs-autocomplete',
    install(Vue: any) {
        Vue.component(AutoCompletePlugin.name, AutoCompleteComponent);

    }
}