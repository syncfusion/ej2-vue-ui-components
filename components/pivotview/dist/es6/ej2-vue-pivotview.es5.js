import { PivotFieldList, PivotView } from '@syncfusion/ej2-pivotview';
import { isUndefined } from '@syncfusion/ej2-base';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
var properties = ['allowCalculatedField', 'allowConditionalFormatting', 'allowExcelExport', 'allowPdfExport', 'currencyCode', 'dataSource', 'enablePersistence', 'enableRtl', 'enableValueSorting', 'enableVirtualization', 'gridSettings', 'groupingBarSettings', 'height', 'locale', 'pivotValues', 'showFieldList', 'showGroupingBar', 'showValuesButton', 'width', 'beforeExport', 'cellClick', 'created', 'dataBound', 'destroyed', 'enginePopulated', 'enginePopulating', 'load', 'onFieldDropped'];
var modelProps = ['datasource'];
/**
 * `ejs-pivotview` represents the VueJS PivotView Component.
 * ```vue
 * <ejs-pivotview></ejs-pivotview>
 * ```
 */
var PivotViewComponent = /** @__PURE__ @class */ (function (_super) {
    __extends(PivotViewComponent, _super);
    function PivotViewComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = false;
        _this.hasInjectedModules = true;
        _this.tagMapper = {};
        _this.tagNameMapper = {};
        _this.ej2Instances = new PivotView({});
        _this.ej2Instances._trigger = _this.ej2Instances.trigger;
        _this.ej2Instances.trigger = _this.trigger;
        //this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        //this.ej2Instances.setProperties = this.setProperties;
        _this.bindProperties();
        return _this;
    }
    PivotViewComponent.prototype.trigger = function (eventName, eventProp) {
        if (eventName === 'change' && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/checked|value/) || [];
            var propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                this.$emit('modelchanged', eventProp[propKey]);
            }
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp);
        }
    };
    PivotViewComponent.prototype.setProperties = function (prop, muteOnChange) {
        var _this = this;
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && (this.models.length !== 0)) {
            var keys = Object.keys(prop);
            var emitKeys_1 = [];
            var emitFlag_1 = false;
            keys.map(function (key) {
                _this.models.map(function (model) {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        emitKeys_1.push(key);
                        emitFlag_1 = true;
                    }
                });
            });
            if (emitFlag_1) {
                emitKeys_1.map(function (propKey) {
                    _this.$emit('update:' + propKey, prop[propKey]);
                });
            }
        }
    };
    PivotViewComponent.prototype.render = function (createElement) {
        return createElement('div', this.$slots.default);
    };
    PivotViewComponent.prototype.csvExport = function (excelExportProperties, isMultipleExport, workbook, isBlob) {
        return this.ej2Instances.csvExport(excelExportProperties, isMultipleExport, workbook, isBlob);
    };
    PivotViewComponent.prototype.excelExport = function (excelExportProperties, isMultipleExport, workbook, isBlob) {
        return this.ej2Instances.excelExport(excelExportProperties, isMultipleExport, workbook, isBlob);
    };
    PivotViewComponent.prototype.pdfExport = function (pdfExportProperties, isMultipleExport, pdfDoc, isBlob) {
        return this.ej2Instances.pdfExport(pdfExportProperties, isMultipleExport, pdfDoc, isBlob);
    };
    PivotViewComponent = __decorate([
        EJComponentDecorator({
            props: properties,
            model: {
                event: 'modelchanged'
            }
        })
    ], PivotViewComponent);
    return PivotViewComponent;
}(ComponentBase));
var PivotViewPlugin = {
    name: 'ejs-pivotview',
    install: function (Vue) {
        Vue.component(PivotViewPlugin.name, PivotViewComponent);
    }
};

var __extends$1 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
var properties$1 = ['allowCalculatedField', 'cssClass', 'dataSource', 'enablePersistence', 'enableRtl', 'locale', 'renderMode', 'showValuesButton', 'target', 'created', 'dataBound', 'destroyed', 'enginePopulated', 'enginePopulating', 'load', 'onFieldDropped'];
var modelProps$1 = [];
/**
 * `ejs-pivotfieldlist` represents the VueJS PivotFieldList Component.
 * ```vue
 * <ejs-pivotfieldlist></ejs-pivotfieldlist>
 * ```
 */
var PivotFieldListComponent = /** @__PURE__ @class */ (function (_super) {
    __extends$1(PivotFieldListComponent, _super);
    function PivotFieldListComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties$1;
        _this.models = modelProps$1;
        _this.hasChildDirective = false;
        _this.hasInjectedModules = false;
        _this.tagMapper = {};
        _this.tagNameMapper = {};
        _this.ej2Instances = new PivotFieldList({});
        _this.bindProperties();
        return _this;
    }
    PivotFieldListComponent.prototype.render = function (createElement) {
        return createElement('div', this.$slots.default);
    };
    PivotFieldListComponent = __decorate$1([
        EJComponentDecorator({
            props: properties$1
        })
    ], PivotFieldListComponent);
    return PivotFieldListComponent;
}(ComponentBase));
var PivotFieldListPlugin = {
    name: 'ejs-pivotfieldlist',
    install: function (Vue) {
        Vue.component(PivotFieldListPlugin.name, PivotFieldListComponent);
    }
};

export { PivotViewComponent, PivotViewPlugin, PivotFieldListComponent, PivotFieldListPlugin };
export * from '@syncfusion/ej2-pivotview';
//# sourceMappingURL=ej2-vue-pivotview.es5.js.map
