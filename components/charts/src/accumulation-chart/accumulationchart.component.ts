import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { AccumulationChart } from '@syncfusion/ej2-charts';
import { AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationSeriesCollectionPlugin, AccumulationSeriesPlugin } from './series.directive'
import { AccumulationAnnotationsDirective, AccumulationAnnotationDirective, AccumulationAnnotationsPlugin, AccumulationAnnotationPlugin } from './annotations.directive'


export const properties: string[] = ['annotations', 'background', 'border', 'currencyCode', 'dataSource', 'enableAnimation', 'enablePersistence', 'enableRtl', 'enableSmartLabels', 'height', 'isMultiSelect', 'legendSettings', 'locale', 'margin', 'selectedDataIndexes', 'selectionMode', 'series', 'subTitle', 'subTitleStyle', 'theme', 'title', 'titleStyle', 'tooltip', 'width', 'animationComplete', 'annotationRender', 'beforePrint', 'chartMouseClick', 'chartMouseDown', 'chartMouseLeave', 'chartMouseMove', 'chartMouseUp', 'legendRender', 'load', 'loaded', 'pointClick', 'pointMove', 'pointRender', 'resized', 'seriesRender', 'textRender', 'tooltipRender'];
export const modelProps: string[] = [];


@EJComponentDecorator({
    props: properties
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
        this.ej2Instances = new AccumulationChart({});
        this.bindProperties();
    }

    public render(createElement: any) {
        return createElement('div', (this as any).$slots.default);
    }
    
    public export(type: Object, fileName: string, orientation?: Object, controls?: undefined[], width?: number, height?: number): void {
        return this.ej2Instances.export(type, fileName, orientation, controls, width, height);
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
