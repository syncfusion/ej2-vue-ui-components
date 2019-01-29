import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { RecurrenceEditor } from '@syncfusion/ej2-schedule';


export const properties: string[] = ['calendarMode', 'cssClass', 'dateFormat', 'enablePersistence', 'enableRtl', 'firstDayOfWeek', 'frequencies', 'locale', 'maxDate', 'minDate', 'selectedType', 'startDate', 'value', 'change'];
export const modelProps: string[] = [];

/**
 * `ejs-recurrenceeditor` represents the VueJS RecurrenceEditor Component.
 * ```vue
 * <ejs-recurrenceeditor></ejs-recurrenceeditor>
 * ```
 */
@EJComponentDecorator({
    props: properties
})
export class RecurrenceEditorComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = false;
    protected hasInjectedModules: boolean = false;
    public tagMapper: { [key: string]: Object } = {};
    public tagNameMapper: Object = {};
    
    constructor() {
        super();
        this.ej2Instances = new RecurrenceEditor({});
        this.bindProperties();
    }

    public render(createElement: any) {
        return createElement('div', (this as any).$slots.default);
    }
    
    public getCalendarMode(): string {
        return this.ej2Instances.getCalendarMode();
    }

    public getRecurrenceDates(startDate: Object, rule: string, excludeDate?: string, maximumCount?: number, viewDate?: Object): undefined {
        return this.ej2Instances.getRecurrenceDates(startDate, rule, excludeDate, maximumCount, viewDate);
    }

    public getRecurrenceRule(): string {
        return this.ej2Instances.getRecurrenceRule();
    }

    public getRuleSummary(rule: string): string {
        return this.ej2Instances.getRuleSummary(rule);
    }

    public resetFields(): void {
        return this.ej2Instances.resetFields();
    }

    public setRecurrenceRule(rule: string, startDate: Object): void {
        return this.ej2Instances.setRecurrenceRule(rule, startDate);
    }
}

export const RecurrenceEditorPlugin = {
    name: 'ejs-recurrenceeditor',
    install(Vue: any) {
        Vue.component(RecurrenceEditorPlugin.name, RecurrenceEditorComponent);

    }
}
