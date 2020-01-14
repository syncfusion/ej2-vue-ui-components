import Vue from 'vue';
import { isUndefined } from '@syncfusion/ej2-base';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { AccumulationChart } from '@syncfusion/ej2-charts';
import { AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationSeriesCollectionPlugin, AccumulationSeriesPlugin } from './series.directive'
import { AccumulationAnnotationsDirective, AccumulationAnnotationDirective, AccumulationAnnotationsPlugin, AccumulationAnnotationPlugin } from './annotations.directive'


export const properties: string[] = ['annotations', 'background', 'backgroundImage', 'border', 'center', 'currencyCode', 'dataSource', 'enableAnimation', 'enableBorderOnMouseMove', 'enableExport', 'enablePersistence', 'enableRtl', 'enableSmartLabels', 'height', 'isMultiSelect', 'legendSettings', 'locale', 'margin', 'selectedDataIndexes', 'selectionMode', 'series', 'subTitle', 'subTitleStyle', 'theme', 'title', 'titleStyle', 'tooltip', 'useGroupingSeparator', 'width', 'animationComplete', 'annotationRender', 'beforePrint', 'chartMouseClick', 'chartMouseDown', 'chartMouseLeave', 'chartMouseMove', 'chartMouseUp', 'legendRender', 'load', 'loaded', 'pointClick', 'pointMove', 'pointRender', 'resized', 'seriesRender', 'textRender', 'tooltipRender'];
export const modelProps: string[] = ['dataSource'];

/**
 * Represents Vuejs AccumulationChart Component
 * ```vue
 * <ejs-accumulationchart></ejs-accumulationchart>
 * ```
 */
@EJComponentDecorator({
    props: properties,
    model: {
        event: 'modelchanged'
    }
})
export class AccumulationChartComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = true;
    protected hasInjectedModules: boolean = true;
    public tagMapper: { [key: string]: Object } = {"e-accumulation-series-collection":"e-accumulation-series","e-accumulation-annotations":"e-accumulation-annotation"};
    public tagNameMapper: Object = {"e-accumulation-series-collection":"e-series","e-accumulation-annotations":"e-annotations"};
    
    constructor() {
        super();
        this.ej2Instances = new AccumulationChart({});        this.ej2Instances._trigger = this.ej2Instances.trigger;
        this.ej2Instances.trigger = this.trigger;

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
    public trigger(eventName: string, eventProp: {[key:string]:Object}, successHandler?: Function): void {
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            let key: string[] = this.models.toString().match(/checked|value/) || [];
            let propKey: string = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                (this as any).$emit('update:'+ propKey, eventProp[propKey]);
                (this as any).$emit('modelchanged', eventProp[propKey]);
            }
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp, successHandler);
        }            
    }

    public render(createElement: any) {
        return createElement('div', (this as any).$slots.default);
    }
    
    public export(type: Object, fileName: string): void {
        return this.ej2Instances.export(type, fileName);
    }

    public print(id?: string[] | string | Object): void {
        return this.ej2Instances.print(id);
    }

    public setAnnotationValue(annotationIndex: number, content: string): void {
        return this.ej2Instances.setAnnotationValue(annotationIndex, content);
    }

    public titleTooltip(event: Object, x: number, y: number, isTouch?: boolean): void {
        return this.ej2Instances.titleTooltip(event, x, y, isTouch);
    }
}

export const AccumulationChartPlugin = {
    name: 'ejs-accumulationchart',
    install(Vue: any) {
        Vue.component(AccumulationChartPlugin.name, AccumulationChartComponent);
        Vue.component(AccumulationSeriesPlugin.name, AccumulationSeriesDirective);
        Vue.component(AccumulationSeriesCollectionPlugin.name, AccumulationSeriesCollectionDirective);
        Vue.component(AccumulationAnnotationPlugin.name, AccumulationAnnotationDirective);
        Vue.component(AccumulationAnnotationsPlugin.name, AccumulationAnnotationsDirective);

    }
}
