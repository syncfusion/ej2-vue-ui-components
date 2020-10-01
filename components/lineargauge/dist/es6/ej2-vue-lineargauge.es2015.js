import { LinearGauge } from '@syncfusion/ej2-lineargauge';
import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
RangesDirective = __decorate([
    EJComponentDecorator({})
], RangesDirective);
const RangesPlugin = {
    name: 'e-ranges',
    install(Vue$$1) {
        Vue$$1.component(RangesPlugin.name, RangesDirective);
    }
};
/**
 * `Ranges` directive represent a ranges of the VueJS linear gauge.
 * ```vue
 * <ejs-lineargauge>
 * <e-axes>
 * <e-axis>
 * <e-ranges><e-range></e-range></e-ranges>
 * </e-axis>
 * </e-axes>
 * </ejs-lineargauge>
 * ```
 */
let RangeDirective = class RangeDirective extends Vue {
    render() {
        return;
    }
};
RangeDirective = __decorate([
    EJComponentDecorator({})
], RangeDirective);
const RangePlugin = {
    name: 'e-range',
    install(Vue$$1) {
        Vue$$1.component(RangePlugin.name, RangeDirective);
    }
};

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
PointersDirective = __decorate$1([
    EJComponentDecorator({})
], PointersDirective);
const PointersPlugin = {
    name: 'e-pointers',
    install(Vue$$1) {
        Vue$$1.component(PointersPlugin.name, PointersDirective);
    }
};
/**
 * `Pointers` directive represent a pointers of the VueJS linear gauge.
 * ```vue
 * <ejs-lineargauge>
 * <e-axes>
 * <e-axis>
 * <e-pointers><e-pointer></e-pointer></e-pointers>
 * </e-axis>
 * </e-axes>
 * </ejs-lineargauge>
 * ```
 */
let PointerDirective = class PointerDirective extends Vue {
    render() {
        return;
    }
};
PointerDirective = __decorate$1([
    EJComponentDecorator({})
], PointerDirective);
const PointerPlugin = {
    name: 'e-pointer',
    install(Vue$$1) {
        Vue$$1.component(PointerPlugin.name, PointerDirective);
    }
};

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
AxesDirective = __decorate$2([
    EJComponentDecorator({})
], AxesDirective);
const AxesPlugin = {
    name: 'e-axes',
    install(Vue$$1) {
        Vue$$1.component(AxesPlugin.name, AxesDirective);
    }
};
/**
 * Axes directive represent a axes of the VueJS linear gauge.
 * ```vue
 * <ejs-lineargauge>
 * <e-axes><e-axis></e-axis></e-axes>
 * </ejs-lineargauge>
 * ```
 */
let AxisDirective = class AxisDirective extends Vue {
    render() {
        return;
    }
};
AxisDirective = __decorate$2([
    EJComponentDecorator({})
], AxisDirective);
const AxisPlugin = {
    name: 'e-axis',
    install(Vue$$1) {
        Vue$$1.component(AxisPlugin.name, AxisDirective);
    }
};

var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
AnnotationsDirective = __decorate$3([
    EJComponentDecorator({})
], AnnotationsDirective);
const AnnotationsPlugin = {
    name: 'e-annotations',
    install(Vue$$1) {
        Vue$$1.component(AnnotationsPlugin.name, AnnotationsDirective);
    }
};
/**
 * `Annotations` directive represent a annotations of the VueJS linear gauge.
 * ```vue
 * <ejs-lineargauge>
 * <e-annotations><e-annotation></e-annotation></e-annotations>
 * </ejs-lineargauge>
 * ```
 */
let AnnotationDirective = class AnnotationDirective extends Vue {
    render() {
        return;
    }
};
AnnotationDirective = __decorate$3([
    EJComponentDecorator({})
], AnnotationDirective);
const AnnotationPlugin = {
    name: 'e-annotation',
    install(Vue$$1) {
        Vue$$1.component(AnnotationPlugin.name, AnnotationDirective);
    }
};

var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties = ['allowImageExport', 'allowMargin', 'allowPdfExport', 'allowPrint', 'annotations', 'axes', 'background', 'border', 'container', 'description', 'enablePersistence', 'enableRtl', 'format', 'height', 'locale', 'margin', 'orientation', 'rangePalettes', 'tabIndex', 'theme', 'title', 'titleStyle', 'tooltip', 'useGroupingSeparator', 'width', 'animationComplete', 'annotationRender', 'axisLabelRender', 'beforePrint', 'dragEnd', 'dragMove', 'dragStart', 'gaugeMouseDown', 'gaugeMouseLeave', 'gaugeMouseMove', 'gaugeMouseUp', 'load', 'loaded', 'resized', 'tooltipRender', 'valueChange'];
const modelProps = [];
/**
 * Represents Vuejs Linear Gauge Component
 * ```vue
 * <ejs-lineargauge></ejs-lineargauge>
 * ```
 */
let LinearGaugeComponent = class LinearGaugeComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties;
        this.models = modelProps;
        this.hasChildDirective = true;
        this.hasInjectedModules = true;
        this.tagMapper = { "e-axes": { "e-axis": { "e-ranges": "e-range", "e-pointers": "e-pointer" } }, "e-annotations": "e-annotation" };
        this.tagNameMapper = {};
        this.ej2Instances = new LinearGauge({});
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
    export(type, fileName, orientation, allowDownload) {
        return this.ej2Instances.export(type, fileName, orientation, allowDownload);
    }
    print(id) {
        return this.ej2Instances.print(id);
    }
    setAnnotationValue(annotationIndex, content, axisValue) {
        return this.ej2Instances.setAnnotationValue(annotationIndex, content, axisValue);
    }
    setPointerValue(axisIndex, pointerIndex, value) {
        return this.ej2Instances.setPointerValue(axisIndex, pointerIndex, value);
    }
};
LinearGaugeComponent = __decorate$4([
    EJComponentDecorator({
        props: properties
    })
], LinearGaugeComponent);
const LinearGaugePlugin = {
    name: 'ejs-lineargauge',
    install(Vue$$1) {
        Vue$$1.component(LinearGaugePlugin.name, LinearGaugeComponent);
        Vue$$1.component(AxisPlugin.name, AxisDirective);
        Vue$$1.component(AxesPlugin.name, AxesDirective);
        Vue$$1.component(RangePlugin.name, RangeDirective);
        Vue$$1.component(RangesPlugin.name, RangesDirective);
        Vue$$1.component(PointerPlugin.name, PointerDirective);
        Vue$$1.component(PointersPlugin.name, PointersDirective);
        Vue$$1.component(AnnotationPlugin.name, AnnotationDirective);
        Vue$$1.component(AnnotationsPlugin.name, AnnotationsDirective);
    }
};

export { RangesDirective, RangeDirective, RangesPlugin, RangePlugin, PointersDirective, PointerDirective, PointersPlugin, PointerPlugin, AxesDirective, AxisDirective, AxesPlugin, AxisPlugin, AnnotationsDirective, AnnotationDirective, AnnotationsPlugin, AnnotationPlugin, LinearGaugeComponent, LinearGaugePlugin };
export * from '@syncfusion/ej2-lineargauge';
//# sourceMappingURL=ej2-vue-lineargauge.es2015.js.map
