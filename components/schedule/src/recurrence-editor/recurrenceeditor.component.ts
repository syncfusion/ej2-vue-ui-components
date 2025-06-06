import { ComponentBase, gh, getProps, isExecute, vueDefineComponent, DefineVueComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined, getValue } from '@syncfusion/ej2-base';

import { RecurrenceEditor, RecurrenceEditorModel } from '@syncfusion/ej2-schedule';


export const properties: string[] = ['isLazyUpdate', 'plugins', 'calendarMode', 'cssClass', 'dateFormat', 'enablePersistence', 'enableRtl', 'endTypes', 'firstDayOfWeek', 'frequencies', 'locale', 'maxDate', 'minDate', 'selectedType', 'startDate', 'value', 'change', 'created', 'destroyed'];
export const modelProps: string[] = [];

export const testProp: any = getProps({props: properties});
export const props = testProp[0], watch = testProp[1], emitProbs: any = Object.keys(watch);
emitProbs.push('modelchanged', 'update:modelValue');
for (let props of modelProps) { emitProbs.push('update:'+props) }

/**
 * `ejs-recurrenceeditor` represents the VueJS RecurrenceEditor Component.
 * ```vue
 * <ejs-recurrenceeditor></ejs-recurrenceeditor>
 * ```
 */
export let RecurrenceEditorComponent: DefineVueComponent<RecurrenceEditorModel> =  vueDefineComponent({
    name: 'RecurrenceEditorComponent',
    mixins: [ComponentBase],
    props: props,
    watch: watch,
    emits: emitProbs,
    provide() { return { custom: this.custom } },
    data() {
        return {
            ej2Instances: new RecurrenceEditor({}) as any,
            propKeys: properties as string[],
            models: modelProps as string[],
            hasChildDirective: false as boolean,
            hasInjectedModules: false as boolean,
            tagMapper: {} as { [key: string]: Object },
            tagNameMapper: {} as Object,
            isVue3: !isExecute as boolean,
            templateCollection: {} as any,
        }
    },
    created() {

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
        return h('div', slots);
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
        custom(): void {
            this.updated();
        },
        destroy(): void {
            return this.ej2Instances.destroy();
        },
        getRecurrenceDates(startDate: Object, rule: string, excludeDate?: string, maximumCount?: number, viewDate?: Object): number[] {
            return this.ej2Instances.getRecurrenceDates(startDate, rule, excludeDate, maximumCount, viewDate);
        },
        getRecurrenceRule(): string {
            return this.ej2Instances.getRecurrenceRule();
        },
        getRuleSummary(rule: string): string {
            return this.ej2Instances.getRuleSummary(rule);
        },
        resetFields(): void {
            return this.ej2Instances.resetFields();
        },
        setRecurrenceRule(rule: string, startDate: Object): void {
            return this.ej2Instances.setRecurrenceRule(rule, startDate);
        },
        updateRuleUntilDate(startDate: Object): void {
            return this.ej2Instances.updateRuleUntilDate(startDate);
        },
    }
});

export type RecurrenceEditorComponent = typeof ComponentBase & {
    ej2Instances: RecurrenceEditor;
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
    destroy(): void;
    getRecurrenceDates(startDate: Object, rule: string, excludeDate?: string, maximumCount?: number, viewDate?: Object): number[];
    getRecurrenceRule(): string;
    getRuleSummary(rule: string): string;
    resetFields(): void;
    setRecurrenceRule(rule: string, startDate: Object): void;
    updateRuleUntilDate(startDate: Object): void
};

export const RecurrenceEditorPlugin = {
    name: 'ejs-recurrenceeditor',
    install(Vue: any) {
        Vue.component(RecurrenceEditorPlugin.name, RecurrenceEditorComponent);

    }
}