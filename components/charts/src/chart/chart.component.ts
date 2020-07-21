import Vue from 'vue';
import { isUndefined } from '@syncfusion/ej2-base';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { Chart } from '@syncfusion/ej2-charts';
import { TrendlinesDirective, TrendlineDirective, TrendlinesPlugin, TrendlinePlugin } from './trendlines.directive'
import { SegmentsDirective, SegmentDirective, SegmentsPlugin, SegmentPlugin } from './segments.directive'
import { SeriesCollectionDirective, SeriesDirective, SeriesCollectionPlugin, SeriesPlugin } from './series.directive'
import { StripLinesDirective, StripLineDirective, StripLinesPlugin, StripLinePlugin } from './striplines.directive'
import { CategoriesDirective, CategoryDirective, CategoriesPlugin, CategoryPlugin } from './categories.directive'
import { MultiLevelLabelsDirective, MultiLevelLabelDirective, MultiLevelLabelsPlugin, MultiLevelLabelPlugin } from './multilevellabels.directive'
import { AxesDirective, AxisDirective, AxesPlugin, AxisPlugin } from './axes.directive'
import { RowsDirective, RowDirective, RowsPlugin, RowPlugin } from './rows.directive'
import { ColumnsDirective, ColumnDirective, ColumnsPlugin, ColumnPlugin } from './columns.directive'
import { AnnotationsDirective, AnnotationDirective, AnnotationsPlugin, AnnotationPlugin } from './annotations.directive'
import { SelectedDataIndexesDirective, SelectedDataIndexDirective, SelectedDataIndexesPlugin, SelectedDataIndexPlugin } from './selecteddataindexes.directive'
import { IndicatorsDirective, IndicatorDirective, IndicatorsPlugin, IndicatorPlugin } from './indicators.directive'


export const properties: string[] = ['allowExport', 'allowMultiSelection', 'annotations', 'axes', 'background', 'backgroundImage', 'border', 'chartArea', 'columns', 'crosshair', 'currencyCode', 'dataSource', 'description', 'enableAnimation', 'enableAutoIntervalOnBothAxis', 'enableCanvas', 'enableExport', 'enablePersistence', 'enableRtl', 'enableSideBySidePlacement', 'height', 'highlightMode', 'highlightPattern', 'indicators', 'isMultiSelect', 'isTransposed', 'legendSettings', 'locale', 'margin', 'palettes', 'primaryXAxis', 'primaryYAxis', 'rows', 'selectedDataIndexes', 'selectionMode', 'selectionPattern', 'series', 'subTitle', 'subTitleStyle', 'tabIndex', 'theme', 'title', 'titleStyle', 'tooltip', 'useGroupingSeparator', 'width', 'zoomSettings', 'afterExport', 'animationComplete', 'annotationRender', 'axisLabelRender', 'axisMultiLabelRender', 'axisRangeCalculated', 'beforeExport', 'beforePrint', 'chartMouseClick', 'chartMouseDown', 'chartMouseLeave', 'chartMouseMove', 'chartMouseUp', 'drag', 'dragComplete', 'dragEnd', 'dragStart', 'legendClick', 'legendRender', 'load', 'loaded', 'multiLevelLabelClick', 'onZooming', 'pointClick', 'pointDoubleClick', 'pointMove', 'pointRender', 'resized', 'scrollChanged', 'scrollEnd', 'scrollStart', 'selectionComplete', 'seriesRender', 'sharedTooltipRender', 'textRender', 'tooltipRender', 'zoomComplete'];
export const modelProps: string[] = ['dataSource'];

/**
 * Represents Vuejs chart Component
 * ```vue
 * <ejs-chart></ejs-chart>
 * ```
 */
@EJComponentDecorator({
    props: properties,
    model: {
        event: 'modelchanged'
    }
})
export class ChartComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = true;
    protected hasInjectedModules: boolean = true;
    public tagMapper: { [key: string]: Object } = {"e-series-collection":{"e-series":{"e-trendlines":"e-trendline","e-segments":"e-segment"}},"e-axes":{"e-axis":{"e-striplines":"e-stripline","e-multilevellabels":{"e-multilevellabel":{"e-categories":"e-category"}}}},"e-rows":"e-row","e-columns":"e-column","e-annotations":"e-annotation","e-selecteddataindexes":"e-selecteddataindex","e-indicators":"e-indicator"};
    public tagNameMapper: Object = {"e-series-collection":"e-series","e-striplines":"e-stripLines","e-multilevellabels":"e-multiLevelLabels","e-selecteddataindexes":"e-selectedDataIndexes"};
    
    constructor() {
        super();
        this.ej2Instances = new Chart({});        this.ej2Instances._trigger = this.ej2Instances.trigger;
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
        } else if ((eventName === 'actionBegin' && eventProp.requestType === 'dateNavigate') && this.models && (this.models.length !== 0)) {
            let key: string[] = this.models.toString().match(/currentView|selectedDate/) || [];
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
    
    public addSeries(seriesCollection: Object[]): void {
        return this.ej2Instances.addSeries(seriesCollection);
    }

    public clearSeries(): void {
        return this.ej2Instances.clearSeries();
    }

    public createChartSvg(): void {
        return this.ej2Instances.createChartSvg();
    }

    public export(type: Object, fileName: string): void {
        return this.ej2Instances.export(type, fileName);
    }

    public getLocalizedLabel(key: string): string {
        return this.ej2Instances.getLocalizedLabel(key);
    }

    public print(id?: string[] | string | Object): void {
        return this.ej2Instances.print(id);
    }

    public processData(render: boolean): void {
        return this.ej2Instances.processData(render);
    }

    public refreshLiveData(): void {
        return this.ej2Instances.refreshLiveData();
    }

    public removeSeries(index: number): void {
        return this.ej2Instances.removeSeries(index);
    }

    public setAnnotationValue(annotationIndex: number, content: string): void {
        return this.ej2Instances.setAnnotationValue(annotationIndex, content);
    }
}

export const ChartPlugin = {
    name: 'ejs-chart',
    install(Vue: any) {
        Vue.component(ChartPlugin.name, ChartComponent);
        Vue.component(SeriesPlugin.name, SeriesDirective);
        Vue.component(SeriesCollectionPlugin.name, SeriesCollectionDirective);
        Vue.component(TrendlinePlugin.name, TrendlineDirective);
        Vue.component(TrendlinesPlugin.name, TrendlinesDirective);
        Vue.component(SegmentPlugin.name, SegmentDirective);
        Vue.component(SegmentsPlugin.name, SegmentsDirective);
        Vue.component(AxisPlugin.name, AxisDirective);
        Vue.component(AxesPlugin.name, AxesDirective);
        Vue.component(StripLinePlugin.name, StripLineDirective);
        Vue.component(StripLinesPlugin.name, StripLinesDirective);
        Vue.component(MultiLevelLabelPlugin.name, MultiLevelLabelDirective);
        Vue.component(MultiLevelLabelsPlugin.name, MultiLevelLabelsDirective);
        Vue.component(CategoryPlugin.name, CategoryDirective);
        Vue.component(CategoriesPlugin.name, CategoriesDirective);
        Vue.component(RowPlugin.name, RowDirective);
        Vue.component(RowsPlugin.name, RowsDirective);
        Vue.component(ColumnPlugin.name, ColumnDirective);
        Vue.component(ColumnsPlugin.name, ColumnsDirective);
        Vue.component(AnnotationPlugin.name, AnnotationDirective);
        Vue.component(AnnotationsPlugin.name, AnnotationsDirective);
        Vue.component(SelectedDataIndexPlugin.name, SelectedDataIndexDirective);
        Vue.component(SelectedDataIndexesPlugin.name, SelectedDataIndexesDirective);
        Vue.component(IndicatorPlugin.name, IndicatorDirective);
        Vue.component(IndicatorsPlugin.name, IndicatorsDirective);

    }
}
