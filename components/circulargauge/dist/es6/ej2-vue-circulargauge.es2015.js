import { CircularGauge } from '@syncfusion/ej2-circulargauge';
import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let AnnotationsDirective = class AnnotationsDirective extends Vue {
    render() {
        return;
    }
};
AnnotationsDirective = __decorate([
    EJComponentDecorator({})
], AnnotationsDirective);
const AnnotationsPlugin = {
    name: 'e-annotations',
    install(Vue$$1) {
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
let AnnotationDirective = class AnnotationDirective extends Vue {
    render() {
        return;
    }
};
AnnotationDirective = __decorate([
    EJComponentDecorator({})
], AnnotationDirective);
const AnnotationPlugin = {
    name: 'e-annotation',
    install(Vue$$1) {
        Vue$$1.component(AnnotationPlugin.name, AnnotationDirective);
    }
};

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let RangesDirective = class RangesDirective extends Vue {
    render() {
        return;
    }
};
RangesDirective = __decorate$1([
    EJComponentDecorator({})
], RangesDirective);
const RangesPlugin = {
    name: 'e-ranges',
    install(Vue$$1) {
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
let RangeDirective = class RangeDirective extends Vue {
    render() {
        return;
    }
};
RangeDirective = __decorate$1([
    EJComponentDecorator({})
], RangeDirective);
const RangePlugin = {
    name: 'e-range',
    install(Vue$$1) {
        Vue$$1.component(RangePlugin.name, RangeDirective);
    }
};

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let PointersDirective = class PointersDirective extends Vue {
    render() {
        return;
    }
};
PointersDirective = __decorate$2([
    EJComponentDecorator({})
], PointersDirective);
const PointersPlugin = {
    name: 'e-pointers',
    install(Vue$$1) {
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
let PointerDirective = class PointerDirective extends Vue {
    render() {
        return;
    }
};
PointerDirective = __decorate$2([
    EJComponentDecorator({})
], PointerDirective);
const PointerPlugin = {
    name: 'e-pointer',
    install(Vue$$1) {
        Vue$$1.component(PointerPlugin.name, PointerDirective);
    }
};

var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let AxesDirective = class AxesDirective extends Vue {
    render() {
        return;
    }
};
AxesDirective = __decorate$3([
    EJComponentDecorator({})
], AxesDirective);
const AxesPlugin = {
    name: 'e-axes',
    install(Vue$$1) {
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
let AxisDirective = class AxisDirective extends Vue {
    render() {
        return;
    }
};
AxisDirective = __decorate$3([
    EJComponentDecorator({})
], AxisDirective);
const AxisPlugin = {
    name: 'e-axis',
    install(Vue$$1) {
        Vue$$1.component(AxisPlugin.name, AxisDirective);
    }
};

var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties = ['axes', 'background', 'border', 'centerX', 'centerY', 'description', 'enablePersistence', 'enablePointerDrag', 'enableRtl', 'height', 'locale', 'margin', 'moveToCenter', 'tabIndex', 'theme', 'title', 'titleStyle', 'tooltip', 'useGroupingSeparator', 'width', 'animationComplete', 'annotationRender', 'axisLabelRender', 'dragEnd', 'dragMove', 'dragStart', 'gaugeMouseDown', 'gaugeMouseLeave', 'gaugeMouseMove', 'gaugeMouseUp', 'load', 'loaded', 'radiusCalculate', 'resized', 'tooltipRender'];
const modelProps = [];
/**
 * Represents Vuejs Circular Gauge Component
 * ```vue
 * <ejs-circulargauge></ejs-circulargauge>
 * ```
 */
let CircularGaugeComponent = class CircularGaugeComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties;
        this.models = modelProps;
        this.hasChildDirective = true;
        this.hasInjectedModules = true;
        this.tagMapper = { "e-axes": { "e-axis": { "e-annotations": "e-annotation", "e-ranges": "e-range", "e-pointers": "e-pointer" } } };
        this.tagNameMapper = {};
        this.ej2Instances = new CircularGauge({});
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
    setAnnotationValue(axisIndex, annotationIndex, content) {
        return this.ej2Instances.setAnnotationValue(axisIndex, annotationIndex, content);
    }
    setPointerValue(axisIndex, pointerIndex, value) {
        return this.ej2Instances.setPointerValue(axisIndex, pointerIndex, value);
    }
    setRangeValue(axisIndex, rangeIndex, start, end) {
        return this.ej2Instances.setRangeValue(axisIndex, rangeIndex, start, end);
    }
};
CircularGaugeComponent = __decorate$4([
    EJComponentDecorator({
        props: properties
    })
], CircularGaugeComponent);
const CircularGaugePlugin = {
    name: 'ejs-circulargauge',
    install(Vue$$1) {
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
//# sourceMappingURL=ej2-vue-circulargauge.es2015.js.map
