import { Splitter } from '@syncfusion/ej2-layouts';
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
var PanesDirective = /** @__PURE__ @class */ (function (_super) {
    __extends(PanesDirective, _super);
    function PanesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PanesDirective.prototype.render = function () {
        return;
    };
    PanesDirective = __decorate([
        EJComponentDecorator({})
    ], PanesDirective);
    return PanesDirective;
}(Vue));
var PanesPlugin = {
    name: 'e-panes',
    install: function (Vue$$1) {
        Vue$$1.component(PanesPlugin.name, PanesDirective);
    }
};
/**
 * 'e-pane' directive represent a pane of Vue Splitter
 * It must be contained in a Splitter component(`ejs-splitter`).
 * ```html
 * <ejs-splitter id='splitter'>
 *   <e-panes>
 *    <e-pane size='150px'></e-pane>
 *    <e-pane size='150px'></e-pane>
 *   </e-panes>
 * </ejs-splitter>
 * ```
 */
var PaneDirective = /** @__PURE__ @class */ (function (_super) {
    __extends(PaneDirective, _super);
    function PaneDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaneDirective.prototype.render = function () {
        return;
    };
    PaneDirective = __decorate([
        EJComponentDecorator({})
    ], PaneDirective);
    return PaneDirective;
}(Vue));
var PanePlugin = {
    name: 'e-pane',
    install: function (Vue$$1) {
        Vue$$1.component(PanePlugin.name, PaneDirective);
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
var properties = ['cssClass', 'enablePersistence', 'enableRtl', 'enabled', 'height', 'locale', 'orientation', 'paneSettings', 'separatorSize', 'width', 'created', 'resizeStart', 'resizeStop', 'resizing'];
var modelProps = [];
/**
 * Represents the VueJS Splitter component
 * ```html
 * <ejs-splitter></ejs-splitter>
 * ```
 */
var SplitterComponent = /** @__PURE__ @class */ (function (_super) {
    __extends$1(SplitterComponent, _super);
    function SplitterComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = false;
        _this.tagMapper = { "e-panes": "e-pane" };
        _this.tagNameMapper = { "e-panes": "e-paneSettings" };
        _this.ej2Instances = new Splitter({});
        _this.bindProperties();
        return _this;
    }
    SplitterComponent.prototype.render = function (createElement) {
        return createElement('div', this.$slots.default);
    };
    SplitterComponent = __decorate$1([
        EJComponentDecorator({
            props: properties
        })
    ], SplitterComponent);
    return SplitterComponent;
}(ComponentBase));
var SplitterPlugin = {
    name: 'ejs-splitter',
    install: function (Vue$$1) {
        Vue$$1.component(SplitterPlugin.name, SplitterComponent);
        Vue$$1.component(PanePlugin.name, PaneDirective);
        Vue$$1.component(PanesPlugin.name, PanesDirective);
    }
};

export { PanesDirective, PaneDirective, PanesPlugin, PanePlugin, SplitterComponent, SplitterPlugin };
export * from '@syncfusion/ej2-layouts';
//# sourceMappingURL=ej2-vue-layouts.es5.js.map
