import { ComponentBase, gh, getProps, isExecute, vueDefineComponent, DefineVueComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined, getValue } from '@syncfusion/ej2-base';
import { isUndefined } from '@syncfusion/ej2-base';

import { DatePicker, DatePickerModel } from '@syncfusion/ej2-calendars';


export const properties: string[] = ['isLazyUpdate', 'plugins', 'allowEdit', 'calendarMode', 'cssClass', 'dayHeaderFormat', 'depth', 'enableMask', 'enablePersistence', 'enableRtl', 'enabled', 'firstDayOfWeek', 'floatLabelType', 'format', 'fullScreenMode', 'htmlAttributes', 'inputFormats', 'isMultiSelection', 'keyConfigs', 'locale', 'maskPlaceholder', 'max', 'min', 'openOnFocus', 'placeholder', 'readonly', 'serverTimezoneOffset', 'showClearButton', 'showTodayButton', 'start', 'strictMode', 'value', 'values', 'weekNumber', 'weekRule', 'width', 'zIndex', 'blur', 'change', 'cleared', 'close', 'created', 'destroyed', 'focus', 'navigated', 'open', 'renderDayCell'];
export const modelProps: string[] = ['value'];

export const testProp: any = getProps({props: properties});
export const props = testProp[0], watch = testProp[1], emitProbs: any = Object.keys(watch);
emitProbs.push('modelchanged', 'update:modelValue');
for (let props of modelProps) { emitProbs.push('update:'+props) }

/**
 * Represents the Essential JS 2 VueJS DatePicker Component.
 * ```html
 * <ejs-datepicker v-bind:value='date'></ejs-datepicker>
 * ```
 */
export let DatePickerComponent: DefineVueComponent<DatePickerModel> =  vueDefineComponent({
    name: 'DatePickerComponent',
    mixins: [ComponentBase],
    props: props,
    watch: watch,
    emits: emitProbs,
    model: { event: 'modelchanged' },
    provide() { return { custom: this.custom } },
    data() {
        return {
            ej2Instances: new DatePicker({}) as any,
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
        createContent(): void {
            return this.ej2Instances.createContent();
        },
        currentView(): string {
            return this.ej2Instances.currentView();
        },
        destroy(): void {
            return this.ej2Instances.destroy();
        },
        focusIn(triggerEvent?: boolean): void {
            return this.ej2Instances.focusIn(triggerEvent);
        },
        focusOut(): void {
            return this.ej2Instances.focusOut();
        },
        hide(event?: Object | Object | Object): void {
            return this.ej2Instances.hide(event);
        },
        navigateTo(view: Object, date: Object): void {
            return this.ej2Instances.navigateTo(view, date);
        },
        removeDate(dates: Object | Object[]): void {
            return this.ej2Instances.removeDate(dates);
        },
        requiredModules(): Object[] {
            return this.ej2Instances.requiredModules();
        },
        show(type?: null | string, e?: Object | Object | Object): void {
            return this.ej2Instances.show(type, e);
        },
    }
});

export type DatePickerComponent = typeof ComponentBase & {
    ej2Instances: DatePicker;
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
    createContent(): void;
    currentView(): string;
    destroy(): void;
    focusIn(triggerEvent?: boolean): void;
    focusOut(): void;
    hide(event?: Object | Object | Object): void;
    navigateTo(view: Object, date: Object): void;
    removeDate(dates: Object | Object[]): void;
    requiredModules(): Object[];
    show(type?: null | string, e?: Object | Object | Object): void
};

export const DatePickerPlugin = {
    name: 'ejs-datepicker',
    install(Vue: any) {
        Vue.component(DatePickerPlugin.name, DatePickerComponent);

    }
}