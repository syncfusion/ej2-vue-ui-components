import { ComponentBase, gh, getProps, isExecute, vueDefineComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined, getValue } from '@syncfusion/ej2-base';

import { QueryBuilder } from '@syncfusion/ej2-querybuilder';
import { ColumnsDirective, ColumnDirective, ColumnsPlugin, ColumnPlugin } from './columns.directive'


export const properties: string[] = ['isLazyUpdate', 'plugins', 'allowValidation', 'columns', 'cssClass', 'dataSource', 'displayMode', 'enableNotCondition', 'enablePersistence', 'enableRtl', 'fieldMode', 'fieldModel', 'headerTemplate', 'height', 'immediateModeDelay', 'locale', 'matchCase', 'maxGroupCount', 'operatorModel', 'readonly', 'rule', 'separator', 'showButtons', 'sortDirection', 'summaryView', 'valueModel', 'width', 'actionBegin', 'beforeChange', 'change', 'created', 'dataBound', 'ruleChange'];
export const modelProps: string[] = [];

export const testProp: any = getProps({props: properties});
export const props = testProp[0], watch = testProp[1], emitProbs: any = Object.keys(watch);
emitProbs.push('modelchanged', 'update:modelValue');
for (let props of modelProps) { emitProbs.push('update:'+props) }

/**
 * Represents the VueJS QueryBuilder Component.
 * ```html
 * <ejs-querybuilder></ejs-querybuilder>
 * ```
 */
export let QueryBuilderComponent =  vueDefineComponent({
    name: 'QueryBuilderComponent',
    mixins: [ComponentBase],
    props: props,
    watch: watch,
    emits: emitProbs,
    provide() { return { custom: this.custom } },
    data() {
        return {
            ej2Instances: new QueryBuilder({}) as any,
            propKeys: properties as string[],
            models: modelProps as string[],
            hasChildDirective: true as boolean,
            hasInjectedModules: false as boolean,
            tagMapper: {"e-columns":"e-column"} as { [key: string]: Object },
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
                            let destroy: any = getValue('__vue__.$destroy', ele);
                            if (destroy) { ele.__vue__.$destroy() }
                            if (ele.innerHTML) { ele.innerHTML = '' }
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
        addGroups(groups: Object[], groupID: string): void {
            return this.ej2Instances.addGroups(groups, groupID);
        },
        addRules(rule: Object[], groupID: string): void {
            return this.ej2Instances.addRules(rule, groupID);
        },
        deleteGroup(target: Object | string): void {
            return this.ej2Instances.deleteGroup(target);
        },
        deleteGroups(groupIdColl: string[]): void {
            return this.ej2Instances.deleteGroups(groupIdColl);
        },
        deleteRules(ruleIdColl: string[]): void {
            return this.ej2Instances.deleteRules(ruleIdColl);
        },
        getDataManagerQuery(rule: Object): Object {
            return this.ej2Instances.getDataManagerQuery(rule);
        },
        getFilteredRecords(): Object | any {
            return this.ej2Instances.getFilteredRecords();
        },
        getGroup(target: Object | string): Object {
            return this.ej2Instances.getGroup(target);
        },
        getOperators(field: string): undefined[] {
            return this.ej2Instances.getOperators(field);
        },
        getPredicate(rule: Object): Object {
            return this.ej2Instances.getPredicate(rule);
        },
        getRule(elem: string | Object): Object {
            return this.ej2Instances.getRule(elem);
        },
        getRules(): Object {
            return this.ej2Instances.getRules();
        },
        getRulesFromSql(sqlString: string, sqlLocale?: boolean): Object {
            return this.ej2Instances.getRulesFromSql(sqlString, sqlLocale);
        },
        getSqlFromRules(rule?: Object, allowEscape?: boolean, sqlLocale?: boolean): string {
            return this.ej2Instances.getSqlFromRules(rule, allowEscape, sqlLocale);
        },
        getValidRules(currentRule?: Object): Object {
            return this.ej2Instances.getValidRules(currentRule);
        },
        getValues(field: string): any[] {
            return this.ej2Instances.getValues(field);
        },
        notifyChange(value: string | number | boolean | Object | string[] | number[] | Object[], element: Object, type?: string): void {
            return this.ej2Instances.notifyChange(value, element, type);
        },
        reset(): void {
            return this.ej2Instances.reset();
        },
        setRules(rule: Object): void {
            return this.ej2Instances.setRules(rule);
        },
        setRulesFromSql(sqlString: string, sqlLocale?: boolean): void {
            return this.ej2Instances.setRulesFromSql(sqlString, sqlLocale);
        },
        validateFields(): boolean {
            return this.ej2Instances.validateFields();
        },
    }
});

export type QueryBuilderComponent = InstanceType<typeof QueryBuilderComponent>;

export const QueryBuilderPlugin = {
    name: 'ejs-querybuilder',
    install(Vue: any) {
        Vue.component(QueryBuilderPlugin.name, QueryBuilderComponent);
        Vue.component(ColumnPlugin.name, ColumnDirective);
        Vue.component(ColumnsPlugin.name, ColumnsDirective);

    }
}