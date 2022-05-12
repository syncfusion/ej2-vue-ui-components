import { Options } from 'vue-class-component';
import { isUndefined } from '@syncfusion/ej2-base';
import { ComponentBase, EJComponentDecorator, getProps, allVue, gh } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined, getValue } from '@syncfusion/ej2-base';

import { DatePicker } from '@syncfusion/ej2-calendars';


// {{VueImport}}
export const properties: string[] = ['isLazyUpdate', 'allowEdit', 'calendarMode', 'cssClass', 'dayHeaderFormat', 'depth', 'enableMask', 'enablePersistence', 'enableRtl', 'enabled', 'firstDayOfWeek', 'floatLabelType', 'format', 'htmlAttributes', 'isMultiSelection', 'keyConfigs', 'locale', 'maskPlaceholder', 'max', 'min', 'openOnFocus', 'placeholder', 'readonly', 'serverTimezoneOffset', 'showClearButton', 'showTodayButton', 'start', 'strictMode', 'value', 'values', 'weekNumber', 'weekRule', 'width', 'zIndex', 'blur', 'change', 'cleared', 'close', 'created', 'destroyed', 'focus', 'navigated', 'open', 'renderDayCell'];
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
 * Represents the Essential JS 2 VueJS DatePicker Component.
 * ```html
 * <ejs-datepicker v-bind:value='date'></ejs-datepicker>
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

export class DatePickerComponent extends ComponentBase {
    
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
        this.ej2Instances = new DatePicker({});        this.ej2Instances._trigger = this.ej2Instances.trigger;
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
    
    public addDate(dates: Object | Object[]): void {
        return this.ej2Instances.addDate(dates);
    }

    public createContent(): void {
        return this.ej2Instances.createContent();
    }

    public currentView(): string {
        return this.ej2Instances.currentView();
    }

    public focusIn(triggerEvent?: boolean): void {
        return this.ej2Instances.focusIn(triggerEvent);
    }

    public focusOut(): void {
        return this.ej2Instances.focusOut();
    }

    public hide(event?: Object | Object | Object): void {
        return this.ej2Instances.hide(event);
    }

    public navigateTo(view: Object, date: Object): void {
        return this.ej2Instances.navigateTo(view, date);
    }

    public removeDate(dates: Object | Object[]): void {
        return this.ej2Instances.removeDate(dates);
    }

    public requiredModules(): Object[] {
        return this.ej2Instances.requiredModules();
    }

    public show(type?: null | string, e?: Object | Object | Object): void {
        return this.ej2Instances.show(type, e);
    }
}

export const DatePickerPlugin = {
    name: 'ejs-datepicker',
    install(Vue: any) {
        Vue.component(DatePickerPlugin.name, DatePickerComponent);

    }
}