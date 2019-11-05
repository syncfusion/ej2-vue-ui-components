import Vue from 'vue';
import { isUndefined } from '@syncfusion/ej2-base';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { DateRangePicker } from '@syncfusion/ej2-calendars';
import { PresetsDirective, PresetDirective, PresetsPlugin, PresetPlugin } from './presets.directive'


export const properties: string[] = ['allowEdit', 'calendarMode', 'cssClass', 'dayHeaderFormat', 'depth', 'enablePersistence', 'enableRtl', 'enabled', 'endDate', 'firstDayOfWeek', 'floatLabelType', 'format', 'htmlAttributes', 'keyConfigs', 'locale', 'max', 'maxDays', 'min', 'minDays', 'placeholder', 'presets', 'readonly', 'separator', 'serverTimezoneOffset', 'showClearButton', 'start', 'startDate', 'strictMode', 'value', 'weekNumber', 'width', 'zIndex', 'blur', 'change', 'close', 'created', 'destroyed', 'focus', 'navigated', 'open', 'renderDayCell', 'select'];
export const modelProps: string[] = ['startDate', 'endDate', 'value'];

/**
 * Represents the Essential JS 2 VueJS DateRangePicker Component.
 * ```html
 * <ejs-daterangepicker v-bind:startDate='date' v-bind:endDate='date'></ejs-daterangepicker>
 * ```
 */
@EJComponentDecorator({
    props: properties,
    model: {
        event: 'modelchanged'
    }
})
export class DateRangePickerComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = true;
    protected hasInjectedModules: boolean = false;
    public tagMapper: { [key: string]: Object } = {"e-presets":"e-preset"};
    public tagNameMapper: Object = {};
    
    constructor() {
        super();
        this.ej2Instances = new DateRangePicker({});        this.ej2Instances._trigger = this.ej2Instances.trigger;
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
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp, successHandler);
        }            
    }

    public render(createElement: any) {
        return createElement('input', (this as any).$slots.default);
    }
    
    public focusIn(): void {
        return this.ej2Instances.focusIn();
    }

    public focusOut(): void {
        return this.ej2Instances.focusOut();
    }

    public getSelectedRange(): Object {
        return this.ej2Instances.getSelectedRange();
    }

    public hide(event?: Object | Object | Object): void {
        return this.ej2Instances.hide(event);
    }

    public requiredModules(): Object[] {
        return this.ej2Instances.requiredModules();
    }

    public show(element?: Object, event?: Object | Object | Object): void {
        return this.ej2Instances.show(element, event);
    }
}

export const DateRangePickerPlugin = {
    name: 'ejs-daterangepicker',
    install(Vue: any) {
        Vue.component(DateRangePickerPlugin.name, DateRangePickerComponent);
        Vue.component(PresetPlugin.name, PresetDirective);
        Vue.component(PresetsPlugin.name, PresetsDirective);

    }
}
