import { CircularGauge } from '@syncfusion/ej2-circulargauge';
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
var AnnotationsDirective = /** @__PURE__ @class */ (function (_super) {
    __extends(AnnotationsDirective, _super);
    function AnnotationsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnnotationsDirective.prototype.render = function () {
        return;
    };
    AnnotationsDirective = __decorate([
        EJComponentDecorator({})
    ], AnnotationsDirective);
    return AnnotationsDirective;
}(Vue));
var AnnotationsPlugin = {
    name: 'e-annotations',
    install: function (Vue$$1) {
        Vue$$1.component(AnnotationsPlugin.name, AnnotationsDirective);
    }
};
/**
 * `Annotations` directive represent a annotations of the Vuejs circular gauge.
 * ```vue
 * <ejs-circulargauge>
 * <e-axes>
 * <e-axis>
 * <e-annotations><e-annotation></e-annotation></e-annotations>
 * </e-axis>
 * </e-axes>
 * </ejs-circulargauge>
 * ```
 */
var AnnotationDirective = /** @__PURE__ @class */ (function (_super) {
    __extends(AnnotationDirective, _super);
    function AnnotationDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnnotationDirective.prototype.render = function () {
        return;
    };
    AnnotationDirective = __decorate([
        EJComponentDecorator({})
    ], AnnotationDirective);
    return AnnotationDirective;
}(Vue));
var AnnotationPlugin = {
    name: 'e-annotation',
    install: function (Vue$$1) {
        Vue$$1.component(AnnotationPlugin.name, AnnotationDirective);
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
var RangesDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$1(RangesDirective, _super);
    function RangesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RangesDirective.prototype.render = function () {
        return;
    };
    RangesDirective = __decorate$1([
        EJComponentDecorator({})
    ], RangesDirective);
    return RangesDirective;
}(Vue));
var RangesPlugin = {
    name: 'e-ranges',
    install: function (Vue$$1) {
        Vue$$1.component(RangesPlugin.name, RangesDirective);
    }
};
/**
 * `Ranges` directive represent a ranges of the Vuejs circular gauge.
 * ```vue
 * <ejs-circulargauge>
 * <e-axes>
 * <e-axis>
 * <e-ranges><e-range></e-range></e-ranges>
 * </e-axis>
 * </e-axes>
 * </ejs-circulargauge>
 * ```
 */
var RangeDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$1(RangeDirective, _super);
    function RangeDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RangeDirective.prototype.render = function () {
        return;
    };
    RangeDirective = __decorate$1([
        EJComponentDecorator({})
    ], RangeDirective);
    return RangeDirective;
}(Vue));
var RangePlugin = {
    name: 'e-range',
    install: function (Vue$$1) {
        Vue$$1.component(RangePlugin.name, RangeDirective);
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
var PointersDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$2(PointersDirective, _super);
    function PointersDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PointersDirective.prototype.render = function () {
        return;
    };
    PointersDirective = __decorate$2([
        EJComponentDecorator({})
    ], PointersDirective);
    return PointersDirective;
}(Vue));
var PointersPlugin = {
    name: 'e-pointers',
    install: function (Vue$$1) {
        Vue$$1.component(PointersPlugin.name, PointersDirective);
    }
};
/**
 * `Pointers` directive represent a pointers of the Vuejs circular gauge.
 * ```vue
 * <ejs-circulargauge>
 * <e-axes>
 * <e-axis>
 * <e-pointers><e-pointer></e-pointer></e-pointers>
 * </e-axis>
 * </e-axes>
 * </ejs-circulargauge>
 * ```
 */
var PointerDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$2(PointerDirective, _super);
    function PointerDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PointerDirective.prototype.render = function () {
        return;
    };
    PointerDirective = __decorate$2([
        EJComponentDecorator({})
    ], PointerDirective);
    return PointerDirective;
}(Vue));
var PointerPlugin = {
    name: 'e-pointer',
    install: function (Vue$$1) {
        Vue$$1.component(PointerPlugin.name, PointerDirective);
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
var AxesDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$3(AxesDirective, _super);
    function AxesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AxesDirective.prototype.render = function () {
        return;
    };
    AxesDirective = __decorate$3([
        EJComponentDecorator({})
    ], AxesDirective);
    return AxesDirective;
}(Vue));
var AxesPlugin = {
    name: 'e-axes',
    install: function (Vue$$1) {
        Vue$$1.component(AxesPlugin.name, AxesDirective);
    }
};
/**
 * `Axis` directive represent a axes of the Vuejs circular gauge.
 * ```vue
 * <ejs-circulargauge>
 * <e-axes><e-axis></e-axis></e-axes>
 * </ejs-circulargauge>
 * ```
 */
var AxisDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$3(AxisDirective, _super);
    function AxisDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AxisDirective.prototype.render = function () {
        return;
    };
    AxisDirective = __decorate$3([
        EJComponentDecorator({})
    ], AxisDirective);
    return AxisDirective;
}(Vue));
var AxisPlugin = {
    name: 'e-axis',
    install: function (Vue$$1) {
        Vue$$1.component(AxisPlugin.name, AxisDirective);
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
var properties = ['allowImageExport', 'allowMargin', 'allowPdfExport', 'allowPrint', 'axes', 'background', 'border', 'centerX', 'centerY', 'description', 'enablePersistence', 'enablePointerDrag', 'enableRangeDrag', 'enableRtl', 'height', 'legendSettings', 'locale', 'margin', 'moveToCenter', 'tabIndex', 'theme', 'title', 'titleStyle', 'tooltip', 'useGroupingSeparator', 'width', 'animationComplete', 'annotationRender', 'axisLabelRender', 'beforePrint', 'dragEnd', 'dragMove', 'dragStart', 'gaugeMouseDown', 'gaugeMouseLeave', 'gaugeMouseMove', 'gaugeMouseUp', 'legendRender', 'load', 'loaded', 'radiusCalculate', 'resized', 'tooltipRender'];
var modelProps = [];
/**
 * Represents Vuejs Circular Gauge Component
 * ```vue
 * <ejs-circulargauge></ejs-circulargauge>
 * ```
 */
var CircularGaugeComponent = /** @__PURE__ @class */ (function (_super) {
    __extends$4(CircularGaugeComponent, _super);
    function CircularGaugeComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = true;
        _this.tagMapper = { "e-axes": { "e-axis": { "e-annotations": "e-annotation", "e-ranges": "e-range", "e-pointers": "e-pointer" } } };
        _this.tagNameMapper = {};
        _this.ej2Instances = new CircularGauge({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    CircularGaugeComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    CircularGaugeComponent.prototype.render = function (createElement) {
        return createElement('div', this.$slots.default);
    };
    CircularGaugeComponent.prototype.export = function (type, fileName, orientation, allowDownload) {
        return this.ej2Instances.export(type, fileName, orientation, allowDownload);
    };
    CircularGaugeComponent.prototype.print = function (id) {
        return this.ej2Instances.print(id);
    };
    CircularGaugeComponent.prototype.setAnnotationValue = function (axisIndex, annotationIndex, content) {
        return this.ej2Instances.setAnnotationValue(axisIndex, annotationIndex, content);
    };
    CircularGaugeComponent.prototype.setPointerValue = function (axisIndex, pointerIndex, value) {
        return this.ej2Instances.setPointerValue(axisIndex, pointerIndex, value);
    };
    CircularGaugeComponent.prototype.setRangeValue = function (axisIndex, rangeIndex, start, end) {
        return this.ej2Instances.setRangeValue(axisIndex, rangeIndex, start, end);
    };
    CircularGaugeComponent = __decorate$4([
        EJComponentDecorator({
            props: properties
        })
    ], CircularGaugeComponent);
    return CircularGaugeComponent;
}(ComponentBase));
var CircularGaugePlugin = {
    name: 'ejs-circulargauge',
    install: function (Vue$$1) {
        Vue$$1.component(CircularGaugePlugin.name, CircularGaugeComponent);
        Vue$$1.component(AxisPlugin.name, AxisDirective);
        Vue$$1.component(AxesPlugin.name, AxesDirective);
        Vue$$1.component(AnnotationPlugin.name, AnnotationDirective);
        Vue$$1.component(AnnotationsPlugin.name, AnnotationsDirective);
        Vue$$1.component(RangePlugin.name, RangeDirective);
        Vue$$1.component(RangesPlugin.name, RangesDirective);
        Vue$$1.component(PointerPlugin.name, PointerDirective);
        Vue$$1.component(PointersPlugin.name, PointersDirective);
    }
};

export { AnnotationsDirective, AnnotationDirective, AnnotationsPlugin, AnnotationPlugin, RangesDirective, RangeDirective, RangesPlugin, RangePlugin, PointersDirective, PointerDirective, PointersPlugin, PointerPlugin, AxesDirective, AxisDirective, AxesPlugin, AxisPlugin, CircularGaugeComponent, CircularGaugePlugin };
export * from '@syncfusion/ej2-circulargauge';
//# sourceMappingURL=ej2-vue-circulargauge.es5.js.map
