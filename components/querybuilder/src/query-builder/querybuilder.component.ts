import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { QueryBuilder } from '@syncfusion/ej2-querybuilder';
import { ColumnsDirective, ColumnDirective, ColumnsPlugin, ColumnPlugin } from './columns.directive'


export const properties: string[] = ['allowValidation', 'columns', 'cssClass', 'dataSource', 'displayMode', 'enablePersistence', 'enableRtl', 'height', 'locale', 'maxGroupCount', 'rule', 'showButtons', 'sortDirection', 'summaryView', 'width', 'beforeConditionChange', 'beforeFieldChange', 'beforeOperatorChange', 'beforeValueChange', 'conditionChanged', 'created', 'fieldChanged', 'groupDelete', 'groupInsert', 'operatorChanged', 'ruleDelete', 'ruleInsert', 'valueChanged'];
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

    public deleteGroups(groupID: string[]): void {
        return this.ej2Instances.deleteGroups(groupID);
    }

    public deleteRules(ruleID: string[]): void {
        return this.ej2Instances.deleteRules(ruleID);
    }

    public getDataManagerQuery(rule: Object): Object {
        return this.ej2Instances.getDataManagerQuery(rule);
    }

    public getFilteredRecords(): undefined {
        return this.ej2Instances.getFilteredRecords();
    }

    public getPredicate(rule: Object): Object {
        return this.ej2Instances.getPredicate(rule);
    }

    public getRules(): Object {
        return this.ej2Instances.getRules();
    }

    public getRulesFromSql(sqlString: string): Object {
        return this.ej2Instances.getRulesFromSql(sqlString);
    }

    public getSqlFromRules(rule: Object): string {
        return this.ej2Instances.getSqlFromRules(rule);
    }

    public notifyChange(value: string | number | boolean | Object | string[] | number[] | Object[], element: Object): void {
        return this.ej2Instances.notifyChange(value, element);
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

    public validateFields(): void {
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
