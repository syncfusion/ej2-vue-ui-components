import { Options } from 'vue-class-component';
import { ComponentBase, EJComponentDecorator, getProps, allVue, gh } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined, getValue } from '@syncfusion/ej2-base';

import { CircularGauge } from '@syncfusion/ej2-circulargauge';
import { AnnotationsDirective, AnnotationDirective, AnnotationsPlugin, AnnotationPlugin } from './annotations.directive'
import { RangesDirective, RangeDirective, RangesPlugin, RangePlugin } from './ranges.directive'
import { PointersDirective, PointerDirective, PointersPlugin, PointerPlugin } from './pointers.directive'
import { AxesDirective, AxisDirective, AxesPlugin, AxisPlugin } from './axes.directive'


// {{VueImport}}
export const properties: string[] = ['isLazyUpdate', 'plugins', 'allowImageExport', 'allowMargin', 'allowPdfExport', 'allowPrint', 'axes', 'background', 'border', 'centerX', 'centerY', 'description', 'enablePersistence', 'enablePointerDrag', 'enableRangeDrag', 'enableRtl', 'height', 'legendSettings', 'locale', 'margin', 'moveToCenter', 'tabIndex', 'theme', 'title', 'titleStyle', 'tooltip', 'useGroupingSeparator', 'width', 'animationComplete', 'annotationRender', 'axisLabelRender', 'beforePrint', 'dragEnd', 'dragMove', 'dragStart', 'gaugeMouseDown', 'gaugeMouseLeave', 'gaugeMouseMove', 'gaugeMouseUp', 'legendRender', 'load', 'loaded', 'radiusCalculate', 'resized', 'tooltipRender'];
export const modelProps: string[] = [];

export const testProp: any = getProps({props: properties});
export const props = testProp[0];
export const watch = testProp[1];

export const emitProbs: any = Object.keys(watch);
emitProbs.push('modelchanged');
for (let props of modelProps) {
    emitProbs.push(
        'update:'+props
    );
}

export const isExecute: any = gh ? false : true;

/**
 * Represents Vuejs Circular Gauge Component
 * ```vue
 * <ejs-circulargauge></ejs-circulargauge>
 * ```
 */
@EJComponentDecorator({
    props: properties
},isExecute)

/* Start Options({
    props: props,
    watch: watch,
    emits: emitProbs,
    provide: function provide() {
        return {
            custom: this.custom
        };
    }
}) End */

export class CircularGaugeComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = true;
    protected hasInjectedModules: boolean = true;
    public tagMapper: { [key: string]: Object } = {"e-axes":{"e-axis":{"e-annotations":"e-annotation","e-ranges":"e-range","e-pointers":"e-pointer"}}};
    public tagNameMapper: Object = {};
    public isVue3: boolean;
    public templateCollection: any;
    constructor() {
        super(arguments);
        this.isVue3 = !isExecute;
        this.ej2Instances = new CircularGauge({});
        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
        this.ej2Instances.clearTemplate = this.clearTemplate;
        this.updated = this.updated;
    }

 public clearTemplate(templateNames?: string[]): any {
    if (!templateNames){
       templateNames = Object.keys(this.templateCollection || {});
    }
    if (templateNames.length &&  this.templateCollection) {
    for (let tempName of templateNames){
       let elementCollection: any = this.templateCollection[tempName];
       if(elementCollection && elementCollection.length) {
       for(let ele of elementCollection) {
           let destroy: any = getValue('__vue__.$destroy', ele);
           if (destroy) {
               ele.__vue__.$destroy();
           }
           if (ele.innerHTML){
               ele.innerHTML = '';
           }
       }
       delete this.templateCollection[tempName];
       }
    }
}
 }



    public setProperties(prop: any, muteOnChange: boolean): void {
        if(this.isVue3) {
            this.models = !this.models ? this.ej2Instances.referModels : this.models;
        }
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map((key: string): void => {
                this.models.map((model: string): void => {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        if (this.isVue3) {
                            this.ej2Instances.vueInstance.$emit('update:' + key, prop[key]);
                        } else {
                            (this as any).$emit('update:' + key, prop[key]);
                            (this as any).$emit('modelchanged', prop[key]);
                        }
                    }
                });
            });
        }
    }

    public render(createElement: any) {
        let h: any = gh || createElement;
        let slots: any = null;
        if(!isNullOrUndefined((this as any).$slots.default)) {
            slots = gh ? (this as any).$slots.default() : (this as any).$slots.default;
        }
        return h('div', slots);
    }
    public custom(): void {
        this.updated();
    }
    
    public export(type: Object, fileName: string, orientation?: Object, allowDownload?: boolean): Object {
        return this.ej2Instances.export(type, fileName, orientation, allowDownload);
    }

    public print(id?: string[] | string | Object): void {
        return this.ej2Instances.print(id);
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