import { QueryBuilder } from '@syncfusion/ej2-querybuilder';
import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ColumnsDirective = /** @__PURE__ @class */ (function (_super) {
    __extends(ColumnsDirective, _super);
    function ColumnsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColumnsDirective.prototype.render = function () {
        return;
    };
    ColumnsDirective = __decorate([
        EJComponentDecorator({})
    ], ColumnsDirective);
    return ColumnsDirective;
}(Vue));
var ColumnsPlugin = {
    name: 'e-columns',
    install: function (Vue$$1) {
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
var ColumnDirective = /** @__PURE__ @class */ (function (_super) {
    __extends(ColumnDirective, _super);
    function ColumnDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColumnDirective.prototype.render = function () {
        return;
    };
    ColumnDirective = __decorate([
        EJComponentDecorator({})
    ], ColumnDirective);
    return ColumnDirective;
}(Vue));
var ColumnPlugin = {
    name: 'e-column',
    install: function (Vue$$1) {
        Vue$$1.component(ColumnPlugin.name, ColumnDirective);
    }
};

var __extends$1 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var properties = ['allowValidation', 'columns', 'cssClass', 'dataSource', 'displayMode', 'enableNotCondition', 'enablePersistence', 'enableRtl', 'height', 'immediateModeDelay', 'locale', 'matchCase', 'maxGroupCount', 'readonly', 'rule', 'showButtons', 'sortDirection', 'summaryView', 'width', 'actionBegin', 'beforeChange', 'change', 'created', 'ruleChange'];
var modelProps = [];
/**
 * Represents the VueJS QueryBuilder Component.
 * ```html
 * <ejs-querybuilder></ejs-querybuilder>
 * ```
 */
var QueryBuilderComponent = /** @__PURE__ @class */ (function (_super) {
    __extends$1(QueryBuilderComponent, _super);
    function QueryBuilderComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = false;
        _this.tagMapper = { "e-columns": "e-column" };
        _this.tagNameMapper = {};
        _this.ej2Instances = new QueryBuilder({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    QueryBuilderComponent.prototype.setProperties = function (prop, muteOnChange) {
        var _this = this;
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map(function (key) {
                _this.models.map(function (model) {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        _this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    };
    QueryBuilderComponent.prototype.render = function (createElement) {
        return createElement('div', this.$slots.default);
    };
    QueryBuilderComponent.prototype.addGroups = function (groups, groupID) {
        return this.ej2Instances.addGroups(groups, groupID);
    };
    QueryBuilderComponent.prototype.addRules = function (rule, groupID) {
        return this.ej2Instances.addRules(rule, groupID);
    };
    QueryBuilderComponent.prototype.deleteGroups = function (groupIdColl) {
        return this.ej2Instances.deleteGroups(groupIdColl);
    };
    QueryBuilderComponent.prototype.deleteRules = function (ruleIdColl) {
        return this.ej2Instances.deleteRules(ruleIdColl);
    };
    QueryBuilderComponent.prototype.getDataManagerQuery = function (rule) {
        return this.ej2Instances.getDataManagerQuery(rule);
    };
    QueryBuilderComponent.prototype.getFilteredRecords = function () {
        return this.ej2Instances.getFilteredRecords();
    };
    QueryBuilderComponent.prototype.getGroup = function (target) {
        return this.ej2Instances.getGroup(target);
    };
    QueryBuilderComponent.prototype.getOperators = function (field) {
        return this.ej2Instances.getOperators(field);
    };
    QueryBuilderComponent.prototype.getPredicate = function (rule) {
        return this.ej2Instances.getPredicate(rule);
    };
    QueryBuilderComponent.prototype.getRule = function (elem) {
        return this.ej2Instances.getRule(elem);
    };
    QueryBuilderComponent.prototype.getRules = function () {
        return this.ej2Instances.getRules();
    };
    QueryBuilderComponent.prototype.getRulesFromSql = function (sqlString) {
        return this.ej2Instances.getRulesFromSql(sqlString);
    };
    QueryBuilderComponent.prototype.getSqlFromRules = function (rule, allowEscape) {
        return this.ej2Instances.getSqlFromRules(rule, allowEscape);
    };
    QueryBuilderComponent.prototype.getValidRules = function (currentRule) {
        return this.ej2Instances.getValidRules(currentRule);
    };
    QueryBuilderComponent.prototype.getValues = function (field) {
        return this.ej2Instances.getValues(field);
    };
    QueryBuilderComponent.prototype.notifyChange = function (value, element, type) {
        return this.ej2Instances.notifyChange(value, element, type);
    };
    QueryBuilderComponent.prototype.reset = function () {
        return this.ej2Instances.reset();
    };
    QueryBuilderComponent.prototype.setRules = function (rule) {
        return this.ej2Instances.setRules(rule);
    };
    QueryBuilderComponent.prototype.setRulesFromSql = function (sqlString) {
        return this.ej2Instances.setRulesFromSql(sqlString);
    };
    QueryBuilderComponent.prototype.validateFields = function () {
        return this.ej2Instances.validateFields();
    };
    QueryBuilderComponent = __decorate$1([
        EJComponentDecorator({
            props: properties
        })
    ], QueryBuilderComponent);
    return QueryBuilderComponent;
}(ComponentBase));
var QueryBuilderPlugin = {
    name: 'ejs-querybuilder',
    install: function (Vue$$1) {
        Vue$$1.component(QueryBuilderPlugin.name, QueryBuilderComponent);
        Vue$$1.component(ColumnPlugin.name, ColumnDirective);
        Vue$$1.component(ColumnsPlugin.name, ColumnsDirective);
    }
};

export { ColumnsDirective, ColumnDirective, ColumnsPlugin, ColumnPlugin, QueryBuilderComponent, QueryBuilderPlugin };
export * from '@syncfusion/ej2-querybuilder';
//# sourceMappingURL=ej2-vue-querybuilder.es5.js.map
