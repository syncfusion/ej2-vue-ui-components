import { TreeMap } from '@syncfusion/ej2-treemap';
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
var ColorMappingsDirective = /** @__PURE__ @class */ (function (_super) {
    __extends(ColorMappingsDirective, _super);
    function ColorMappingsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColorMappingsDirective.prototype.render = function () {
        return;
    };
    ColorMappingsDirective = __decorate([
        EJComponentDecorator({})
    ], ColorMappingsDirective);
    return ColorMappingsDirective;
}(Vue));
var ColorMappingsPlugin = {
    name: 'e-colorMappings',
    install: function (Vue$$1) {
        Vue$$1.component(ColorMappingsPlugin.name, ColorMappingsDirective);
    }
};
var ColorMappingDirective = /** @__PURE__ @class */ (function (_super) {
    __extends(ColorMappingDirective, _super);
    function ColorMappingDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColorMappingDirective.prototype.render = function () {
        return;
    };
    ColorMappingDirective = __decorate([
        EJComponentDecorator({})
    ], ColorMappingDirective);
    return ColorMappingDirective;
}(Vue));
var ColorMappingPlugin = {
    name: 'e-colorMapping',
    install: function (Vue$$1) {
        Vue$$1.component(ColorMappingPlugin.name, ColorMappingDirective);
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
var LevelsDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$1(LevelsDirective, _super);
    function LevelsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LevelsDirective.prototype.render = function () {
        return;
    };
    LevelsDirective = __decorate$1([
        EJComponentDecorator({})
    ], LevelsDirective);
    return LevelsDirective;
}(Vue));
var LevelsPlugin = {
    name: 'e-levels',
    install: function (Vue$$1) {
        Vue$$1.component(LevelsPlugin.name, LevelsDirective);
    }
};
/**
 * `LevelsDirective` directive represent a levels of the react treemap.
 * ```vue
 * <ejs-treemap>
 * <e-levels>
 * <e-level></e-level>
 * </e-levels>
 * </ejs-treemap>
 * ```
 */
var LevelDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$1(LevelDirective, _super);
    function LevelDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LevelDirective.prototype.render = function () {
        return;
    };
    LevelDirective = __decorate$1([
        EJComponentDecorator({})
    ], LevelDirective);
    return LevelDirective;
}(Vue));
var LevelPlugin = {
    name: 'e-level',
    install: function (Vue$$1) {
        Vue$$1.component(LevelPlugin.name, LevelDirective);
    }
};

var __extends$2 = (undefined && undefined.__extends) || (function () {
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
var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var properties = ['background', 'border', 'breadcrumbConnector', 'colorValuePath', 'dataSource', 'description', 'drillDownView', 'enableBreadcrumb', 'enableDrillDown', 'enablePersistence', 'enableRtl', 'equalColorValuePath', 'format', 'height', 'highlightSettings', 'initialDrillDown', 'layoutType', 'leafItemSettings', 'legendSettings', 'levels', 'locale', 'margin', 'palette', 'query', 'rangeColorValuePath', 'renderDirection', 'selectionSettings', 'tabIndex', 'theme', 'titleSettings', 'tooltipSettings', 'useGroupingSeparator', 'weightValuePath', 'width', 'beforePrint', 'click', 'doubleClick', 'drillEnd', 'drillStart', 'itemClick', 'itemHighlight', 'itemMove', 'itemRendering', 'itemSelected', 'legendItemRendering', 'legendRendering', 'load', 'loaded', 'mouseMove', 'resize', 'rightClick', 'tooltipRendering'];
var modelProps = [];
/**
 * Represents Vuejs TreeMap Component
 * ```vue
 * <ejs-treemap></ejs-treemap>
 * ```
 */
var TreeMapComponent = /** @__PURE__ @class */ (function (_super) {
    __extends$2(TreeMapComponent, _super);
    function TreeMapComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = true;
        _this.tagMapper = { "e-levels": { "e-level": { "e-colorMappings": "e-colorMapping" } } };
        _this.tagNameMapper = { "e-colorMappings": "e-colorMapping" };
        _this.ej2Instances = new TreeMap({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    TreeMapComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    TreeMapComponent.prototype.render = function (createElement) {
        return createElement('div', this.$slots.default);
    };
    TreeMapComponent.prototype.calculatePreviousLevelChildItems = function (labelText, drillLevelValues, item, directLevel) {
        return this.ej2Instances.calculatePreviousLevelChildItems(labelText, drillLevelValues, item, directLevel);
    };
    TreeMapComponent.prototype.calculateSelectedTextLevels = function (labelText, item) {
        return this.ej2Instances.calculateSelectedTextLevels(labelText, item);
    };
    TreeMapComponent.prototype.clickOnTreeMap = function (e) {
        return this.ej2Instances.clickOnTreeMap(e);
    };
    TreeMapComponent.prototype.compareSelectedLabelWithDrillDownItems = function (drillLevelValues, item, i) {
        return this.ej2Instances.compareSelectedLabelWithDrillDownItems(drillLevelValues, item, i);
    };
    TreeMapComponent.prototype.doubleClickOnTreeMap = function (e) {
        return this.ej2Instances.doubleClickOnTreeMap(e);
    };
    TreeMapComponent.prototype.export = function (type, fileName, orientation) {
        return this.ej2Instances.export(type, fileName, orientation);
    };
    TreeMapComponent.prototype.findTotalWeight = function (processData, type) {
        return this.ej2Instances.findTotalWeight(processData, type);
    };
    TreeMapComponent.prototype.mouseDownOnTreeMap = function (e) {
        return this.ej2Instances.mouseDownOnTreeMap(e);
    };
    TreeMapComponent.prototype.mouseEndOnTreeMap = function (e) {
        return this.ej2Instances.mouseEndOnTreeMap(e);
    };
    TreeMapComponent.prototype.mouseLeaveOnTreeMap = function (e) {
        return this.ej2Instances.mouseLeaveOnTreeMap(e);
    };
    TreeMapComponent.prototype.mouseMoveOnTreeMap = function (e) {
        return this.ej2Instances.mouseMoveOnTreeMap(e);
    };
    TreeMapComponent.prototype.print = function (id) {
        return this.ej2Instances.print(id);
    };
    TreeMapComponent.prototype.reOrderLevelData = function (start) {
        return this.ej2Instances.reOrderLevelData(start);
    };
    TreeMapComponent.prototype.resizeOnTreeMap = function (e) {
        return this.ej2Instances.resizeOnTreeMap(e);
    };
    TreeMapComponent.prototype.rightClickOnTreeMap = function (e) {
        return this.ej2Instances.rightClickOnTreeMap(e);
    };
    TreeMapComponent.prototype.selectItem = function (levelOrder, isSelected) {
        return this.ej2Instances.selectItem(levelOrder, isSelected);
    };
    TreeMapComponent = __decorate$2([
        EJComponentDecorator({
            props: properties
        })
    ], TreeMapComponent);
    return TreeMapComponent;
}(ComponentBase));
var TreeMapPlugin = {
    name: 'ejs-treemap',
    install: function (Vue$$1) {
        Vue$$1.component(TreeMapPlugin.name, TreeMapComponent);
        Vue$$1.component(LevelPlugin.name, LevelDirective);
        Vue$$1.component(LevelsPlugin.name, LevelsDirective);
        Vue$$1.component(ColorMappingPlugin.name, ColorMappingDirective);
        Vue$$1.component(ColorMappingsPlugin.name, ColorMappingsDirective);
    }
};

export { ColorMappingsDirective, ColorMappingDirective, ColorMappingsPlugin, ColorMappingPlugin, LevelsDirective, LevelDirective, LevelsPlugin, LevelPlugin, TreeMapComponent, TreeMapPlugin };
export * from '@syncfusion/ej2-treemap';
//# sourceMappingURL=ej2-vue-treemap.es5.js.map
