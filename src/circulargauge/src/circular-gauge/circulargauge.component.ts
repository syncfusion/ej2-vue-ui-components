import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { CircularGauge } from '@syncfusion/ej2-circulargauge';
import { AnnotationsDirective, AnnotationDirective, AnnotationsPlugin, AnnotationPlugin } from './annotations.directive'
import { RangesDirective, RangeDirective, RangesPlugin, RangePlugin } from './ranges.directive'
import { PointersDirective, PointerDirective, PointersPlugin, PointerPlugin } from './pointers.directive'
import { AxesDirective, AxisDirective, AxesPlugin, AxisPlugin } from './axes.directive'


export const properties: string[] = ['axes', 'background', 'border', 'centerX', 'centerY', 'description', 'enablePersistence', 'enablePointerDrag', 'enableRtl', 'height', 'locale', 'margin', 'moveToCenter', 'tabIndex', 'theme', 'title', 'titleStyle', 'tooltip', 'useGroupingSeparator', 'width', 'animationComplete', 'annotationRender', 'axisLabelRender', 'dragEnd', 'dragMove', 'dragStart', 'gaugeMouseDown', 'gaugeMouseLeave', 'gaugeMouseMove', 'gaugeMouseUp', 'load', 'loaded', 'radiusCalculate', 'resized', 'tooltipRender'];
export const modelProps: string[] = [];

/**
 * Represents Vuejs Circular Gauge Component
 * ```vue
 * <ejs-circulargauge></ejs-circulargauge>
 * ```
 */
@EJComponentDecorator({
    props: properties
})
export class CircularGaugeComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = true;
    protected hasInjectedModules: boolean = true;
    public tagMapper: { [key: string]: Object } = {"e-axes":{"e-axis":{"e-annotations":"e-annotation","e-ranges":"e-range","e-pointers":"e-pointer"}}};
    public tagNameMapper: Object = {};
    
    constructor() {
        super();
        this.ej2Instances = new CircularGauge({});
        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
    }
    public setProperties(prop: any, muteOnChange: boolean): void {
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map((key: string): void => {
                this.models.map((model: string): void => {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    }

    public render(createElement: any) {
        return createElement('div', (this as any).$slots.default);
    }
    
    public setAnnotationValue(axisIndex: number, annotationIndex: number, content: string): void {
        return this.ej2Instances.setAnnotationValue(axisIndex, annotationIndex, content);
    }

    public setPointerValue(axisIndex: number, pointerIndex: number, value: number): void {
        return this.ej2Instances.setPointerValue(axisIndex, pointerIndex, value);
    }

    public setRangeValue(axisIndex: number, rangeIndex: number, start: number, end: number): void {
        return this.ej2Instances.setRangeValue(axisIndex, rangeIndex, start, end);
    }
}

export const CircularGaugePlugin = {
    name: 'ejs-circulargauge',
    install(Vue: any) {
        Vue.component(CircularGaugePlugin.name, CircularGaugeComponent);
        Vue.component(AxisPlugin.name, AxisDirective);
        Vue.component(AxesPlugin.name, AxesDirective);
        Vue.component(AnnotationPlugin.name, AnnotationDirective);
        Vue.component(AnnotationsPlugin.name, AnnotationsDirective);
        Vue.component(RangePlugin.name, RangeDirective);
        Vue.component(RangesPlugin.name, RangesDirective);
        Vue.component(PointerPlugin.name, PointerDirective);
        Vue.component(PointersPlugin.name, PointersDirective);

    }
}
