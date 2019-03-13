import { DashboardLayout, Splitter } from '@syncfusion/ej2-layouts';
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
var properties = ['cssClass', 'enablePersistence', 'enableRtl', 'enabled', 'height', 'locale', 'orientation', 'paneSettings', 'separatorSize', 'width', 'beforeCollapse', 'beforeExpand', 'collapsed', 'created', 'expanded', 'resizeStart', 'resizeStop', 'resizing'];
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
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    SplitterComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    SplitterComponent.prototype.render = function (createElement) {
        return createElement('div', this.$slots.default);
    };
    SplitterComponent.prototype.addPane = function (paneProperties, index) {
        return this.ej2Instances.addPane(paneProperties, index);
    };
    SplitterComponent.prototype.collapse = function (index) {
        return this.ej2Instances.collapse(index);
    };
    SplitterComponent.prototype.expand = function (index) {
        return this.ej2Instances.expand(index);
    };
    SplitterComponent.prototype.removePane = function (index) {
        return this.ej2Instances.removePane(index);
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
var PanelsDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$2(PanelsDirective, _super);
    function PanelsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PanelsDirective.prototype.render = function () {
        return;
    };
    PanelsDirective = __decorate$2([
        EJComponentDecorator({})
    ], PanelsDirective);
    return PanelsDirective;
}(Vue));
var PanelsPlugin = {
    name: 'e-panels',
    install: function (Vue$$1) {
        Vue$$1.component(PanelsPlugin.name, PanelsDirective);
    }
};
/**
 * 'e-panels' directive represent a presets of VueJS dashboardlayout component
 * It must be contained in a dashboardlayout component(`ejs-dashboardlayout`).
 * ```html
 * <ejs-dashboardlayout>
 *   <e-panels>
 *   <e-panel></e-panel>
 *   <e-panel></e-panel>
 *   </e-panels>
 * </ejs-dashboardlayout>
 * ```
 */
var PanelDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$2(PanelDirective, _super);
    function PanelDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PanelDirective.prototype.render = function () {
        return;
    };
    PanelDirective = __decorate$2([
        EJComponentDecorator({})
    ], PanelDirective);
    return PanelDirective;
}(Vue));
var PanelPlugin = {
    name: 'e-panel',
    install: function (Vue$$1) {
        Vue$$1.component(PanelPlugin.name, PanelDirective);
    }
};

var __extends$3 = (undefined && undefined.__extends) || (function () {
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
var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var properties$1 = ['allowDragging', 'allowFloating', 'allowPushing', 'allowResizing', 'cellAspectRatio', 'cellSpacing', 'columns', 'draggableHandle', 'enablePersistence', 'enableRtl', 'locale', 'mediaQuery', 'panels', 'resizableHandles', 'showGridLines', 'change', 'created', 'destroyed', 'drag', 'dragStart', 'dragStop', 'resize', 'resizeStart', 'resizeStop'];
var modelProps$1 = [];
/**
 * Represents the Essential JS 2 VueJS DashboardLayout Component.
 * ```html
 * <ejs-dashboardlayout></ejs-dashboardlayout>
 * ```
 */
var DashboardLayoutComponent = /** @__PURE__ @class */ (function (_super) {
    __extends$3(DashboardLayoutComponent, _super);
    function DashboardLayoutComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties$1;
        _this.models = modelProps$1;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = false;
        _this.tagMapper = { "e-panels": "e-panel" };
        _this.tagNameMapper = {};
        _this.ej2Instances = new DashboardLayout({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    DashboardLayoutComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    DashboardLayoutComponent.prototype.render = function (createElement) {
        return createElement('div', this.$slots.default);
    };
    DashboardLayoutComponent.prototype.addPanel = function (panel) {
        return this.ej2Instances.addPanel(panel);
    };
    DashboardLayoutComponent.prototype.movePanel = function (id, row, col) {
        return this.ej2Instances.movePanel(id, row, col);
    };
    DashboardLayoutComponent.prototype.removeAll = function () {
        return this.ej2Instances.removeAll();
    };
    DashboardLayoutComponent.prototype.removePanel = function (id) {
        return this.ej2Instances.removePanel(id);
    };
    DashboardLayoutComponent.prototype.resizePanel = function (id, sizeX, sizeY) {
        return this.ej2Instances.resizePanel(id, sizeX, sizeY);
    };
    DashboardLayoutComponent.prototype.serialize = function () {
        return this.ej2Instances.serialize();
    };
    DashboardLayoutComponent = __decorate$3([
        EJComponentDecorator({
            props: properties$1
        })
    ], DashboardLayoutComponent);
    return DashboardLayoutComponent;
}(ComponentBase));
var DashboardLayoutPlugin = {
    name: 'ejs-dashboardlayout',
    install: function (Vue$$1) {
        Vue$$1.component(DashboardLayoutPlugin.name, DashboardLayoutComponent);
        Vue$$1.component(PanelPlugin.name, PanelDirective);
        Vue$$1.component(PanelsPlugin.name, PanelsDirective);
    }
};

export { PanesDirective, PaneDirective, PanesPlugin, PanePlugin, SplitterComponent, SplitterPlugin, PanelsDirective, PanelDirective, PanelsPlugin, PanelPlugin, DashboardLayoutComponent, DashboardLayoutPlugin };
export * from '@syncfusion/ej2-layouts';
//# sourceMappingURL=ej2-vue-layouts.es5.js.map
