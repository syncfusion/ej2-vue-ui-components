import { QueryBuilder } from '@syncfusion/ej2-querybuilder';
import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ColumnsDirective = class ColumnsDirective extends Vue {
    render() {
        return;
    }
};
ColumnsDirective = __decorate([
    EJComponentDecorator({})
], ColumnsDirective);
const ColumnsPlugin = {
    name: 'e-columns',
    install(Vue$$1) {
        Vue$$1.component(ColumnsPlugin.name, ColumnsDirective);
    }
};
/**
 * `e-column` directive represent a column of the VueJS QueryBuilder.
 * It must be contained in a QueryBuilder component(`ejs-querybuilder`).
 * ```vue
 * <ejs-querybuilder :dataSource='data'>
 *   <e-columns>
 *    <e-column field='ID' label='ID' type='number'/>
 *    <e-column field='Date' label='Date' type='date' format='dd/MM/yyyy'/>
 *   </e-columns>
 * </ejs-querybuilder>
 * ```
 */
let ColumnDirective = class ColumnDirective extends Vue {
    render() {
        return;
    }
};
ColumnDirective = __decorate([
    EJComponentDecorator({})
], ColumnDirective);
const ColumnPlugin = {
    name: 'e-column',
    install(Vue$$1) {
        Vue$$1.component(ColumnPlugin.name, ColumnDirective);
    }
};

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties = ['allowValidation', 'columns', 'cssClass', 'dataSource', 'displayMode', 'enablePersistence', 'enableRtl', 'height', 'immediateModeDelay', 'locale', 'matchCase', 'maxGroupCount', 'rule', 'showButtons', 'sortDirection', 'summaryView', 'width', 'beforeChange', 'change', 'created', 'ruleChange'];
const modelProps = [];
/**
 * Represents the VueJS QueryBuilder Component.
 * ```html
 * <ejs-querybuilder></ejs-querybuilder>
 * ```
 */
let QueryBuilderComponent = class QueryBuilderComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties;
        this.models = modelProps;
        this.hasChildDirective = true;
        this.hasInjectedModules = false;
        this.tagMapper = { "e-columns": "e-column" };
        this.tagNameMapper = {};
        this.ej2Instances = new QueryBuilder({});
        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
    }
    setProperties(prop, muteOnChange) {
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map((key) => {
                this.models.map((model) => {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    }
    render(createElement) {
        return createElement('div', this.$slots.default);
    }
    addGroups(groups, groupID) {
        return this.ej2Instances.addGroups(groups, groupID);
    }
    addRules(rule, groupID) {
        return this.ej2Instances.addRules(rule, groupID);
    }
    deleteGroups(groupIdColl) {
        return this.ej2Instances.deleteGroups(groupIdColl);
    }
    deleteRules(ruleIdColl) {
        return this.ej2Instances.deleteRules(ruleIdColl);
    }
    getDataManagerQuery(rule) {
        return this.ej2Instances.getDataManagerQuery(rule);
    }
    getFilteredRecords() {
        return this.ej2Instances.getFilteredRecords();
    }
    getGroup(target) {
        return this.ej2Instances.getGroup(target);
    }
    getPredicate(rule) {
        return this.ej2Instances.getPredicate(rule);
    }
    getRule(elem) {
        return this.ej2Instances.getRule(elem);
    }
    getRules() {
        return this.ej2Instances.getRules();
    }
    getRulesFromSql(sqlString) {
        return this.ej2Instances.getRulesFromSql(sqlString);
    }
    getSqlFromRules(rule, allowEscape) {
        return this.ej2Instances.getSqlFromRules(rule, allowEscape);
    }
    getValidRules(currentRule) {
        return this.ej2Instances.getValidRules(currentRule);
    }
    notifyChange(value, element) {
        return this.ej2Instances.notifyChange(value, element);
    }
    reset() {
        return this.ej2Instances.reset();
    }
    setRules(rule) {
        return this.ej2Instances.setRules(rule);
    }
    setRulesFromSql(sqlString) {
        return this.ej2Instances.setRulesFromSql(sqlString);
    }
    validateFields() {
        return this.ej2Instances.validateFields();
    }
};
QueryBuilderComponent = __decorate$1([
    EJComponentDecorator({
        props: properties
    })
], QueryBuilderComponent);
const QueryBuilderPlugin = {
    name: 'ejs-querybuilder',
    install(Vue$$1) {
        Vue$$1.component(QueryBuilderPlugin.name, QueryBuilderComponent);
        Vue$$1.component(ColumnPlugin.name, ColumnDirective);
        Vue$$1.component(ColumnsPlugin.name, ColumnsDirective);
    }
};

export { ColumnsDirective, ColumnDirective, ColumnsPlugin, ColumnPlugin, QueryBuilderComponent, QueryBuilderPlugin };
export * from '@syncfusion/ej2-querybuilder';
//# sourceMappingURL=ej2-vue-querybuilder.es2015.js.map
