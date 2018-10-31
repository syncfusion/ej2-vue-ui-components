import Vue from 'vue';
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


export const properties: string[] = ['annotations', 'axes', 'background', 'border', 'chartArea', 'columns', 'crosshair', 'currencyCode', 'dataSource', 'description', 'enableAnimation', 'enablePersistence', 'enableRtl', 'enableSideBySidePlacement', 'height', 'indicators', 'isMultiSelect', 'isTransposed', 'legendSettings', 'locale', 'margin', 'palettes', 'primaryXAxis', 'primaryYAxis', 'rows', 'selectedDataIndexes', 'selectionMode', 'series', 'subTitle', 'subTitleStyle', 'tabIndex', 'theme', 'title', 'titleStyle', 'tooltip', 'useGroupingSeparator', 'width', 'zoomSettings', 'animationComplete', 'annotationRender', 'axisLabelRender', 'axisMultiLabelRender', 'axisRangeCalculated', 'beforePrint', 'chartMouseClick', 'chartMouseDown', 'chartMouseLeave', 'chartMouseMove', 'chartMouseUp', 'dragComplete', 'legendRender', 'load', 'loaded', 'pointClick', 'pointMove', 'pointRender', 'resized', 'scrollChanged', 'scrollEnd', 'scrollStart', 'seriesRender', 'textRender', 'tooltipRender', 'zoomComplete'];
export const modelProps: string[] = [];


@EJComponentDecorator({
    props: properties
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
        this.ej2Instances = new Chart({});
        this.bindProperties();
    }

    public render(createElement: any) {
        return createElement('div', (this as any).$slots.default);
    }
    
    public addSeries(seriesCollection: Object[]): void {
        return this.ej2Instances.addSeries(seriesCollection);
    }

    public export(type: Object, fileName: string, orientation?: Object, controls?: undefined[], width?: number, height?: number): void {
        return this.ej2Instances.export(type, fileName, orientation, controls, width, height);
    }

    public getLocalizedLabel(key: string): string {
        return this.ej2Instances.getLocalizedLabel(key);
    }

    public print(id?: string[] | string | Object): void {
        return this.ej2Instances.print(id);
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
