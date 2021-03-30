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

    public render(createElement: any) {
        return createElement('div', (this as any).$slots.default);
    }
    
    public getRecurrenceDates(startDate: Object, rule: string, excludeDate?: string, maximumCount?: number, viewDate?: Object): number[] {
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

    public updateRuleUntilDate(startDate: Object): void {
        return this.ej2Instances.updateRuleUntilDate(startDate);
    }
}

export const RecurrenceEditorPlugin = {
    name: 'ejs-recurrenceeditor',
    install(Vue: any) {
        Vue.component(RecurrenceEditorPlugin.name, RecurrenceEditorComponent);

    }
}
