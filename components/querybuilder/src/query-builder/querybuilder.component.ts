import { Options } from 'vue-class-component';
import { ComponentBase, EJComponentDecorator, getProps, allVue, gh } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined, getValue } from '@syncfusion/ej2-base';

import { QueryBuilder } from '@syncfusion/ej2-querybuilder';
import { ColumnsDirective, ColumnDirective, ColumnsPlugin, ColumnPlugin } from './columns.directive'


// {{VueImport}}
export const properties: string[] = ['isLazyUpdate', 'plugins', 'allowValidation', 'columns', 'cssClass', 'dataSource', 'displayMode', 'enableNotCondition', 'enablePersistence', 'enableRtl', 'fieldMode', 'fieldModel', 'headerTemplate', 'height', 'immediateModeDelay', 'locale', 'matchCase', 'maxGroupCount', 'operatorModel', 'readonly', 'rule', 'separator', 'showButtons', 'sortDirection', 'summaryView', 'valueModel', 'width', 'actionBegin', 'beforeChange', 'change', 'created', 'dataBound', 'ruleChange'];
export const modelProps: string[] = [];

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
 * Represents the VueJS QueryBuilder Component.
 * ```html
 * <ejs-querybuilder></ejs-querybuilder>
 * ```
 */
@EJComponentDecorator({
    props: properties
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

export class QueryBuilderComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = true;
    protected hasInjectedModules: boolean = false;
    public tagMapper: { [key: string]: Object } = {"e-columns":"e-column"};
    public tagNameMapper: Object = {};
    public isVue3: boolean;
    public templateCollection: any;
    constructor() {
        super(arguments);
        this.isVue3 = !isExecute;
        this.ej2Instances = new QueryBuilder({});
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

    public render(createElement: any) {
        let h: any = gh || createElement;
        let slots: any = null;
        if(!isNullOrUndefined((this as any).$slots.default)) {
            slots = gh ? (this as any).$slots.default() : (this as any).$slots.default;
        }
        return h('div', slots);
    }
    public custom(): void {
        this.updated();
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