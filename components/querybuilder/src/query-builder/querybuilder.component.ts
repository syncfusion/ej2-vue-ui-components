import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { QueryBuilder } from '@syncfusion/ej2-querybuilder';
import { ColumnsDirective, ColumnDirective, ColumnsPlugin, ColumnPlugin } from './columns.directive'


export const properties: string[] = ['allowValidation', 'columns', 'cssClass', 'dataSource', 'displayMode', 'enableNotCondition', 'enablePersistence', 'enableRtl', 'fieldModel', 'headerTemplate', 'height', 'immediateModeDelay', 'locale', 'matchCase', 'maxGroupCount', 'operatorModel', 'readonly', 'rule', 'separator', 'showButtons', 'sortDirection', 'summaryView', 'valueModel', 'width', 'actionBegin', 'beforeChange', 'change', 'created', 'dataBound', 'ruleChange'];
export const modelProps: string[] = [];

/**
 * Represents the VueJS QueryBuilder Component.
 * ```html
 * <ejs-querybuilder></ejs-querybuilder>
 * ```
 */
@EJComponentDecorator({
    props: properties
})
export class QueryBuilderComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = true;
    protected hasInjectedModules: boolean = false;
    public tagMapper: { [key: string]: Object } = {"e-columns":"e-column"};
    public tagNameMapper: Object = {};
    
    constructor() {
        super();
        this.ej2Instances = new QueryBuilder({});
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
    
    public addGroups(groups: Object[], groupID: string): void {
        return this.ej2Instances.addGroups(groups, groupID);
    }

    public addRules(rule: Object[], groupID: string): void {
        return this.ej2Instances.addRules(rule, groupID);
    }

    public deleteGroup(target: Object | string): void {
        return this.ej2Instances.deleteGroup(target);
    }

    public deleteGroups(groupIdColl: string[]): void {
        return this.ej2Instances.deleteGroups(groupIdColl);
    }

    public deleteRules(ruleIdColl: string[]): void {
        return this.ej2Instances.deleteRules(ruleIdColl);
    }

    public getDataManagerQuery(rule: Object): Object {
        return this.ej2Instances.getDataManagerQuery(rule);
    }

    public getFilteredRecords(): Object | any {
        return this.ej2Instances.getFilteredRecords();
    }

    public getGroup(target: Object | string): Object {
        return this.ej2Instances.getGroup(target);
    }

    public getOperators(field: string): undefined[] {
        return this.ej2Instances.getOperators(field);
    }

    public getPredicate(rule: Object): Object {
        return this.ej2Instances.getPredicate(rule);
    }

    public getRule(elem: string | Object): Object {
        return this.ej2Instances.getRule(elem);
    }

    public getRules(): Object {
        return this.ej2Instances.getRules();
    }

    public getRulesFromSql(sqlString: string): Object {
        return this.ej2Instances.getRulesFromSql(sqlString);
    }

    public getSqlFromRules(rule?: Object, allowEscape?: boolean): string {
        return this.ej2Instances.getSqlFromRules(rule, allowEscape);
    }

    public getValidRules(currentRule?: Object): Object {
        return this.ej2Instances.getValidRules(currentRule);
    }

    public getValues(field: string): any[] {
        return this.ej2Instances.getValues(field);
    }

    public notifyChange(value: string | number | boolean | Object | string[] | number[] | Object[], element: Object, type?: string): void {
        return this.ej2Instances.notifyChange(value, element, type);
    }

    public reset(): void {
        return this.ej2Instances.reset();
    }

    public setRules(rule: Object): void {
        return this.ej2Instances.setRules(rule);
    }

    public setRulesFromSql(sqlString: string): void {
        return this.ej2Instances.setRulesFromSql(sqlString);
    }

    public validateFields(): boolean {
        return this.ej2Instances.validateFields();
    }
}

export const QueryBuilderPlugin = {
    name: 'ejs-querybuilder',
    install(Vue: any) {
        Vue.component(QueryBuilderPlugin.name, QueryBuilderComponent);
        Vue.component(ColumnPlugin.name, ColumnDirective);
        Vue.component(ColumnsPlugin.name, ColumnsDirective);

    }
}
