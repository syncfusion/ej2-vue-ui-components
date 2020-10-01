import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { LinearGauge } from '@syncfusion/ej2-lineargauge';
import { RangesDirective, RangeDirective, RangesPlugin, RangePlugin } from './ranges.directive'
import { PointersDirective, PointerDirective, PointersPlugin, PointerPlugin } from './pointers.directive'
import { AxesDirective, AxisDirective, AxesPlugin, AxisPlugin } from './axes.directive'
import { AnnotationsDirective, AnnotationDirective, AnnotationsPlugin, AnnotationPlugin } from './annotations.directive'


export const properties: string[] = ['allowImageExport', 'allowMargin', 'allowPdfExport', 'allowPrint', 'annotations', 'axes', 'background', 'border', 'container', 'description', 'enablePersistence', 'enableRtl', 'format', 'height', 'locale', 'margin', 'orientation', 'rangePalettes', 'tabIndex', 'theme', 'title', 'titleStyle', 'tooltip', 'useGroupingSeparator', 'width', 'animationComplete', 'annotationRender', 'axisLabelRender', 'beforePrint', 'dragEnd', 'dragMove', 'dragStart', 'gaugeMouseDown', 'gaugeMouseLeave', 'gaugeMouseMove', 'gaugeMouseUp', 'load', 'loaded', 'resized', 'tooltipRender', 'valueChange'];
export const modelProps: string[] = [];

/**
 * Represents Vuejs Linear Gauge Component
 * ```vue
 * <ejs-lineargauge></ejs-lineargauge>
 * ```
 */
@EJComponentDecorator({
    props: properties
})
export class LinearGaugeComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = true;
    protected hasInjectedModules: boolean = true;
    public tagMapper: { [key: string]: Object } = {"e-axes":{"e-axis":{"e-ranges":"e-range","e-pointers":"e-pointer"}},"e-annotations":"e-annotation"};
    public tagNameMapper: Object = {};
    
    constructor() {
        super();
        this.ej2Instances = new LinearGauge({});
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
    
    public export(type: Object, fileName: string, orientation?: Object, allowDownload?: boolean): Object {
        return this.ej2Instances.export(type, fileName, orientation, allowDownload);
    }

    public print(id?: string[] | string | Object): void {
        return this.ej2Instances.print(id);
    }

    public setAnnotationValue(annotationIndex: number, content: string, axisValue?: number): void {
        return this.ej2Instances.setAnnotationValue(annotationIndex, content, axisValue);
    }

    public setPointerValue(axisIndex: number, pointerIndex: number, value: number): void {
        return this.ej2Instances.setPointerValue(axisIndex, pointerIndex, value);
    }
}

export const LinearGaugePlugin = {
    name: 'ejs-lineargauge',
    install(Vue: any) {
        Vue.component(LinearGaugePlugin.name, LinearGaugeComponent);
        Vue.component(AxisPlugin.name, AxisDirective);
        Vue.component(AxesPlugin.name, AxesDirective);
        Vue.component(RangePlugin.name, RangeDirective);
        Vue.component(RangesPlugin.name, RangesDirective);
        Vue.component(PointerPlugin.name, PointerDirective);
        Vue.component(PointersPlugin.name, PointersDirective);
        Vue.component(AnnotationPlugin.name, AnnotationDirective);
        Vue.component(AnnotationsPlugin.name, AnnotationsDirective);

    }
}
