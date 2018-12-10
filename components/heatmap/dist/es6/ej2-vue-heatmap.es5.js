import { HeatMap } from '@syncfusion/ej2-heatmap';
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
var properties = ['cellSelected', 'allowSelection', 'cellSettings', 'dataSource', 'enablePersistence', 'enableRtl', 'height', 'legendSettings', 'locale', 'margin', 'paletteSettings', 'renderingMode', 'showTooltip', 'theme', 'titleSettings', 'tooltipSettings', 'width', 'xAxis', 'yAxis', 'cellClick', 'cellRender', 'created', 'load', 'tooltipRender'];
var modelProps = [];
/**
 * Represents Vuejs HeatMap Component
 * ```vue
 * <ejs-heatmap></ejs-heatmap>
 * ```
 */
var HeatMapComponent = /** @__PURE__ @class */ (function (_super) {
    __extends(HeatMapComponent, _super);
    function HeatMapComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = true;
        _this.tagMapper = {};
        _this.tagNameMapper = {};
        _this.ej2Instances = new HeatMap({});
        _this.bindProperties();
        return _this;
    }
    HeatMapComponent.prototype.render = function (createElement) {
        return createElement('div', this.$slots.default);
    };
    HeatMapComponent.prototype.clearSelection = function () {
        return this.ej2Instances.clearSelection();
    };
    HeatMapComponent.prototype.heatMapMouseClick = function (e) {
        return this.ej2Instances.heatMapMouseClick(e);
    };
    HeatMapComponent.prototype.refresh = function () {
        return this.ej2Instances.refresh();
    };
    HeatMapComponent.prototype.refreshBound = function () {
        return this.ej2Instances.refreshBound();
    };
    HeatMapComponent = __decorate([
        EJComponentDecorator({
            props: properties
        })
    ], HeatMapComponent);
    return HeatMapComponent;
}(ComponentBase));
var HeatMapPlugin = {
    name: 'ejs-heatmap',
    install: function (Vue) {
        Vue.component(HeatMapPlugin.name, HeatMapComponent);
    }
};

export { HeatMapComponent, HeatMapPlugin };
export * from '@syncfusion/ej2-heatmap';
//# sourceMappingURL=ej2-vue-heatmap.es5.js.map
