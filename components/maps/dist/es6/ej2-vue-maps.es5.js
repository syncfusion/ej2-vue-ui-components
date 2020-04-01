import { Maps } from '@syncfusion/ej2-maps';
import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { isUndefined } from '@syncfusion/ej2-base';

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
var InitialShapeSelectionsDirective = /** @__PURE__ @class */ (function (_super) {
    __extends(InitialShapeSelectionsDirective, _super);
    function InitialShapeSelectionsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InitialShapeSelectionsDirective.prototype.render = function () {
        return;
    };
    InitialShapeSelectionsDirective = __decorate([
        EJComponentDecorator({})
    ], InitialShapeSelectionsDirective);
    return InitialShapeSelectionsDirective;
}(Vue));
var InitialShapeSelectionsPlugin = {
    name: 'e-initialShapeSelections',
    install: function (Vue$$1) {
        Vue$$1.component(InitialShapeSelectionsPlugin.name, InitialShapeSelectionsDirective);
    }
};
/**
 * `InitialShapeSelectionsDirective` directive represent a selection settings of the Vuejs maps.
 * ```vue
 * <ejs-maps>
 * <e-layers>
 * <e-layer>
 * <e-initialShapeSelections>
 * <e-initialShapeSelection>
 * </e-initialShapeSelection>
 * </e-initialShapeSelections>
 * </e-layer>
 * </e-layers>
 * </ejs-maps>
 * ```
 */
var InitialShapeSelectionDirective = /** @__PURE__ @class */ (function (_super) {
    __extends(InitialShapeSelectionDirective, _super);
    function InitialShapeSelectionDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InitialShapeSelectionDirective.prototype.render = function () {
        return;
    };
    InitialShapeSelectionDirective = __decorate([
        EJComponentDecorator({})
    ], InitialShapeSelectionDirective);
    return InitialShapeSelectionDirective;
}(Vue));
var InitialShapeSelectionPlugin = {
    name: 'e-initialShapeSelection',
    install: function (Vue$$1) {
        Vue$$1.component(InitialShapeSelectionPlugin.name, InitialShapeSelectionDirective);
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
var MarkersDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$1(MarkersDirective, _super);
    function MarkersDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MarkersDirective.prototype.render = function () {
        return;
    };
    MarkersDirective = __decorate$1([
        EJComponentDecorator({})
    ], MarkersDirective);
    return MarkersDirective;
}(Vue));
var MarkersPlugin = {
    name: 'e-markerSettings',
    install: function (Vue$$1) {
        Vue$$1.component(MarkersPlugin.name, MarkersDirective);
    }
};
/**
 * `MarkerSettingsDirective` directive represent a marker settings of the Vuejs maps.
 * ```vue
 * <ejs-maps>
 * <e-layers>
 * <e-layer>
 * <e-markerSettings>
 * <e-markerSetting>
 * </e-markerSetting>
 * </e-markerSettings>
 * </e-layer>
 * </e-layers>
 * </ejs-maps>
 * ```
 */
var MarkerDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$1(MarkerDirective, _super);
    function MarkerDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MarkerDirective.prototype.render = function () {
        return;
    };
    MarkerDirective = __decorate$1([
        EJComponentDecorator({})
    ], MarkerDirective);
    return MarkerDirective;
}(Vue));
var MarkerPlugin = {
    name: 'e-markerSetting',
    install: function (Vue$$1) {
        Vue$$1.component(MarkerPlugin.name, MarkerDirective);
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
var ColorMappingsDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$2(ColorMappingsDirective, _super);
    function ColorMappingsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColorMappingsDirective.prototype.render = function () {
        return;
    };
    ColorMappingsDirective = __decorate$2([
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
/**
 * `BubblesDirective` directive represent a bubble settings of the Vuejs maps.
 * ```vue
 * <ejs-maps>
 * <e-layers>
 * <e-layer>
 * <e-bubbleSettings>
 * <e-bubbleSetting>
 * </e-bubbleSetting>
 * </e-bubbleSettings>
 * </e-layer>
 * </e-layers>
 * </ejs-maps>
 * ```
 */
var ColorMappingDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$2(ColorMappingDirective, _super);
    function ColorMappingDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColorMappingDirective.prototype.render = function () {
        return;
    };
    ColorMappingDirective = __decorate$2([
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
var BubblesDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$3(BubblesDirective, _super);
    function BubblesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BubblesDirective.prototype.render = function () {
        return;
    };
    BubblesDirective = __decorate$3([
        EJComponentDecorator({})
    ], BubblesDirective);
    return BubblesDirective;
}(Vue));
var BubblesPlugin = {
    name: 'e-bubbleSettings',
    install: function (Vue$$1) {
        Vue$$1.component(BubblesPlugin.name, BubblesDirective);
    }
};
/**
 * `BubblesDirective` directive represent a bubble settings of the Vuejs maps.
 * ```vue
 * <ejs-maps>
 * <e-layers>
 * <e-layer>
 * <e-bubbleSettings>
 * <e-bubbleSetting>
 * </e-bubbleSetting>
 * </e-bubbleSettings>
 * </e-layer>
 * </e-layers>
 * </ejs-maps>
 * ```
 */
var BubbleDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$3(BubbleDirective, _super);
    function BubbleDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BubbleDirective.prototype.render = function () {
        return;
    };
    BubbleDirective = __decorate$3([
        EJComponentDecorator({})
    ], BubbleDirective);
    return BubbleDirective;
}(Vue));
var BubblePlugin = {
    name: 'e-bubbleSetting',
    install: function (Vue$$1) {
        Vue$$1.component(BubblePlugin.name, BubbleDirective);
    }
};

var __extends$4 = (undefined && undefined.__extends) || (function () {
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
var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NavigationLinesDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$4(NavigationLinesDirective, _super);
    function NavigationLinesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavigationLinesDirective.prototype.render = function () {
        return;
    };
    NavigationLinesDirective = __decorate$4([
        EJComponentDecorator({})
    ], NavigationLinesDirective);
    return NavigationLinesDirective;
}(Vue));
var NavigationLinesPlugin = {
    name: 'e-navigationLineSettings',
    install: function (Vue$$1) {
        Vue$$1.component(NavigationLinesPlugin.name, NavigationLinesDirective);
    }
};
/**
 * `NavigationLinesDirective` directive represent a bubble settings of the Vuejs maps.
 * ```vue
 * <ejs-maps>
 * <e-layers>
 * <e-layer>
 * <e-navigationLineSettings>
 * <e-navigationLineSetting>
 * </e-navigationLineSetting>
 * </e-navigationLineSettings>
 * </e-layer>
 * </e-layers>
 * </ejs-maps>
 * ```
 */
var NavigationLineDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$4(NavigationLineDirective, _super);
    function NavigationLineDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavigationLineDirective.prototype.render = function () {
        return;
    };
    NavigationLineDirective = __decorate$4([
        EJComponentDecorator({})
    ], NavigationLineDirective);
    return NavigationLineDirective;
}(Vue));
var NavigationLinePlugin = {
    name: 'e-navigationLineSetting',
    install: function (Vue$$1) {
        Vue$$1.component(NavigationLinePlugin.name, NavigationLineDirective);
    }
};

var __extends$5 = (undefined && undefined.__extends) || (function () {
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
var __decorate$5 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var LayersDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$5(LayersDirective, _super);
    function LayersDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LayersDirective.prototype.render = function () {
        return;
    };
    LayersDirective = __decorate$5([
        EJComponentDecorator({})
    ], LayersDirective);
    return LayersDirective;
}(Vue));
var LayersPlugin = {
    name: 'e-layers',
    install: function (Vue$$1) {
        Vue$$1.component(LayersPlugin.name, LayersDirective);
    }
};
/**
 * `LayersDirective` directive represent a layers of the react maps.
 * ```vue
 * <ejs-maps>
 * <e-layers>
 * <e-layer></e-layer>
 * </e-layers>
 * </ejs-maps>
 * ```
 */
var LayerDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$5(LayerDirective, _super);
    function LayerDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LayerDirective.prototype.render = function () {
        return;
    };
    LayerDirective = __decorate$5([
        EJComponentDecorator({})
    ], LayerDirective);
    return LayerDirective;
}(Vue));
var LayerPlugin = {
    name: 'e-layer',
    install: function (Vue$$1) {
        Vue$$1.component(LayerPlugin.name, LayerDirective);
    }
};

var __extends$6 = (undefined && undefined.__extends) || (function () {
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
var __decorate$6 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AnnotationsDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$6(AnnotationsDirective, _super);
    function AnnotationsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnnotationsDirective.prototype.render = function () {
        return;
    };
    AnnotationsDirective = __decorate$6([
        EJComponentDecorator({})
    ], AnnotationsDirective);
    return AnnotationsDirective;
}(Vue));
var AnnotationsPlugin = {
    name: 'e-maps-annotations',
    install: function (Vue$$1) {
        Vue$$1.component(AnnotationsPlugin.name, AnnotationsDirective);
    }
};
/**
 * `AnnotationsDirective` directive represent a annotation of the Vuejs maps.
 * ```vue
 * <ejs-maps>
 * <e-maps-annotations>
 * <e-maps-annotation></e-maps-annotation>
 * </e-maps-annotations>
 * </ejs-maps>
 * ```
 */
var AnnotationDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$6(AnnotationDirective, _super);
    function AnnotationDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnnotationDirective.prototype.render = function () {
        return;
    };
    AnnotationDirective = __decorate$6([
        EJComponentDecorator({})
    ], AnnotationDirective);
    return AnnotationDirective;
}(Vue));
var AnnotationPlugin = {
    name: 'e-maps-annotation',
    install: function (Vue$$1) {
        Vue$$1.component(AnnotationPlugin.name, AnnotationDirective);
    }
};

var __extends$7 = (undefined && undefined.__extends) || (function () {
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
var __decorate$7 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var properties = ['annotations', 'background', 'baseLayerIndex', 'border', 'centerPosition', 'description', 'enablePersistence', 'enableRtl', 'format', 'height', 'layers', 'legendSettings', 'locale', 'mapsArea', 'margin', 'projectionType', 'tabIndex', 'theme', 'titleSettings', 'tooltipDisplayMode', 'useGroupingSeparator', 'width', 'zoomSettings', 'animationComplete', 'annotationRendering', 'beforePrint', 'bubbleClick', 'bubbleMouseMove', 'bubbleRendering', 'click', 'dataLabelRendering', 'doubleClick', 'itemHighlight', 'itemSelection', 'layerRendering', 'legendRendering', 'load', 'loaded', 'markerClick', 'markerClusterClick', 'markerClusterMouseMove', 'markerClusterRendering', 'markerMouseMove', 'markerRendering', 'pan', 'resize', 'rightClick', 'shapeHighlight', 'shapeRendering', 'shapeSelected', 'tooltipRender', 'tooltipRenderComplete', 'zoom'];
var modelProps = ['dataSource'];
/**
 * Represents Vuejs Maps Component
 * ```vue
 * <ejs-maps></ejs-maps>
 * ```
 */
var MapsComponent = /** @__PURE__ @class */ (function (_super) {
    __extends$7(MapsComponent, _super);
    function MapsComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = true;
        _this.tagMapper = { "e-layers": { "e-layer": { "e-initialShapeSelections": "e-initialShapeSelection", "e-markerSettings": "e-markerSetting", "e-bubbleSettings": { "e-bubbleSetting": { "e-colorMappings": "e-colorMapping" } }, "e-navigationLineSettings": "e-navigationLineSetting" } }, "e-maps-annotations": "e-maps-annotation" };
        _this.tagNameMapper = { "e-initialShapeSelections": "e-initialShapeSelection", "e-colorMappings": "e-colorMapping", "e-maps-annotations": "e-annotations" };
        _this.ej2Instances = new Maps({});
        _this.ej2Instances._trigger = _this.ej2Instances.trigger;
        _this.ej2Instances.trigger = _this.trigger;
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    MapsComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    MapsComponent.prototype.trigger = function (eventName, eventProp, successHandler) {
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/checked|value/) || [];
            var propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                this.$emit('update:' + propKey, eventProp[propKey]);
                this.$emit('modelchanged', eventProp[propKey]);
            }
        }
        else if ((eventName === 'actionBegin' && eventProp.requestType === 'dateNavigate') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/currentView|selectedDate/) || [];
            var propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                this.$emit('update:' + propKey, eventProp[propKey]);
                this.$emit('modelchanged', eventProp[propKey]);
            }
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp, successHandler);
        }
    };
    MapsComponent.prototype.render = function (createElement) {
        return createElement('div', this.$slots.default);
    };
    MapsComponent.prototype.addLayer = function (layer) {
        return this.ej2Instances.addLayer(layer);
    };
    MapsComponent.prototype.addMarker = function (layerIndex, markerCollection) {
        return this.ej2Instances.addMarker(layerIndex, markerCollection);
    };
    MapsComponent.prototype.export = function (type, fileName, orientation, isDownload) {
        return this.ej2Instances.export(type, fileName, orientation, isDownload);
    };
    MapsComponent.prototype.getGeoLocation = function (layerIndex, location) {
        return this.ej2Instances.getGeoLocation(layerIndex, location);
    };
    MapsComponent.prototype.getLocalizedLabel = function (key) {
        return this.ej2Instances.getLocalizedLabel(key);
    };
    MapsComponent.prototype.getTileGeoLocation = function (location) {
        return this.ej2Instances.getTileGeoLocation(location);
    };
    MapsComponent.prototype.mapsOnClick = function (e) {
        return this.ej2Instances.mapsOnClick(e);
    };
    MapsComponent.prototype.mapsOnDoubleClick = function (e) {
        return this.ej2Instances.mapsOnDoubleClick(e);
    };
    MapsComponent.prototype.mapsOnResize = function (e) {
        return this.ej2Instances.mapsOnResize(e);
    };
    MapsComponent.prototype.mouseDownOnMap = function (e) {
        return this.ej2Instances.mouseDownOnMap(e);
    };
    MapsComponent.prototype.mouseEndOnMap = function (e) {
        return this.ej2Instances.mouseEndOnMap(e);
    };
    MapsComponent.prototype.mouseLeaveOnMap = function (e) {
        return this.ej2Instances.mouseLeaveOnMap(e);
    };
    MapsComponent.prototype.mouseMoveOnMap = function (e) {
        return this.ej2Instances.mouseMoveOnMap(e);
    };
    MapsComponent.prototype.onMouseMove = function (e) {
        return this.ej2Instances.onMouseMove(e);
    };
    MapsComponent.prototype.panByDirection = function (direction, mouseLocation) {
        return this.ej2Instances.panByDirection(direction, mouseLocation);
    };
    MapsComponent.prototype.pointToLatLong = function (pageX, pageY) {
        return this.ej2Instances.pointToLatLong(pageX, pageY);
    };
    MapsComponent.prototype.print = function (id) {
        return this.ej2Instances.print(id);
    };
    MapsComponent.prototype.processResponseJsonData = function (processType, data, layer, dataType) {
        return this.ej2Instances.processResponseJsonData(processType, data, layer, dataType);
    };
    MapsComponent.prototype.removeLayer = function (index) {
        return this.ej2Instances.removeLayer(index);
    };
    MapsComponent.prototype.shapeSelection = function (layerIndex, propertyName, name, enable) {
        return this.ej2Instances.shapeSelection(layerIndex, propertyName, name, enable);
    };
    MapsComponent.prototype.zoomByPosition = function (centerPosition, zoomFactor) {
        return this.ej2Instances.zoomByPosition(centerPosition, zoomFactor);
    };
    MapsComponent.prototype.zoomToCoordinates = function (minLatitude, minLongitude, maxLatitude, maxLongitude) {
        return this.ej2Instances.zoomToCoordinates(minLatitude, minLongitude, maxLatitude, maxLongitude);
    };
    MapsComponent = __decorate$7([
        EJComponentDecorator({
            props: properties,
            model: {
                event: 'modelchanged'
            }
        })
    ], MapsComponent);
    return MapsComponent;
}(ComponentBase));
var MapsPlugin = {
    name: 'ejs-maps',
    install: function (Vue$$1) {
        Vue$$1.component(MapsPlugin.name, MapsComponent);
        Vue$$1.component(LayerPlugin.name, LayerDirective);
        Vue$$1.component(LayersPlugin.name, LayersDirective);
        Vue$$1.component(InitialShapeSelectionPlugin.name, InitialShapeSelectionDirective);
        Vue$$1.component(InitialShapeSelectionsPlugin.name, InitialShapeSelectionsDirective);
        Vue$$1.component(MarkerPlugin.name, MarkerDirective);
        Vue$$1.component(MarkersPlugin.name, MarkersDirective);
        Vue$$1.component(BubblePlugin.name, BubbleDirective);
        Vue$$1.component(BubblesPlugin.name, BubblesDirective);
        Vue$$1.component(ColorMappingPlugin.name, ColorMappingDirective);
        Vue$$1.component(ColorMappingsPlugin.name, ColorMappingsDirective);
        Vue$$1.component(NavigationLinePlugin.name, NavigationLineDirective);
        Vue$$1.component(NavigationLinesPlugin.name, NavigationLinesDirective);
        Vue$$1.component(AnnotationPlugin.name, AnnotationDirective);
        Vue$$1.component(AnnotationsPlugin.name, AnnotationsDirective);
    }
};

export { InitialShapeSelectionsDirective, InitialShapeSelectionDirective, InitialShapeSelectionsPlugin, InitialShapeSelectionPlugin, MarkersDirective, MarkerDirective, MarkersPlugin, MarkerPlugin, ColorMappingsDirective, ColorMappingDirective, ColorMappingsPlugin, ColorMappingPlugin, BubblesDirective, BubbleDirective, BubblesPlugin, BubblePlugin, NavigationLinesDirective, NavigationLineDirective, NavigationLinesPlugin, NavigationLinePlugin, LayersDirective, LayerDirective, LayersPlugin, LayerPlugin, AnnotationsDirective, AnnotationDirective, AnnotationsPlugin, AnnotationPlugin, MapsComponent, MapsPlugin };
export * from '@syncfusion/ej2-maps';
//# sourceMappingURL=ej2-vue-maps.es5.js.map
