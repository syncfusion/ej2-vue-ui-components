import Vue from 'vue';
import { isUndefined } from '@syncfusion/ej2-base';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { DatePicker } from '@syncfusion/ej2-calendars';


export const properties: string[] = ['allowEdit', 'calendarMode', 'cssClass', 'dayHeaderFormat', 'depth', 'enablePersistence', 'enableRtl', 'enabled', 'firstDayOfWeek', 'floatLabelType', 'format', 'htmlAttributes', 'isMultiSelection', 'keyConfigs', 'locale', 'max', 'min', 'placeholder', 'readonly', 'serverTimezoneOffset', 'showClearButton', 'showTodayButton', 'start', 'strictMode', 'value', 'values', 'weekNumber', 'width', 'zIndex', 'blur', 'change', 'cleared', 'close', 'created', 'destroyed', 'focus', 'navigated', 'open', 'renderDayCell'];
export const modelProps: string[] = ['value'];

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
})
export class DatePickerComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = false;
    protected hasInjectedModules: boolean = true;
    public tagMapper: { [key: string]: Object } = {};
    public tagNameMapper: Object = {};
    
    constructor() {
        super();
        this.ej2Instances = new DatePicker({});        this.ej2Instances._trigger = this.ej2Instances.trigger;
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
        return createElement('input', (this as any).$slots.default);
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
