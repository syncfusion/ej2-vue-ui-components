import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { StockChart } from '@syncfusion/ej2-charts';
import { StockChartTrendlinesDirective, StockChartTrendlineDirective, StockChartTrendlinesPlugin, StockChartTrendlinePlugin } from './trendlines.directive'
import { StockChartSeriesCollectionDirective, StockChartSeriesDirective, StockChartSeriesCollectionPlugin, StockChartSeriesPlugin } from './series.directive'
import { StockChartStripLinesDirective, StockChartStripLineDirective, StockChartStripLinesPlugin, StockChartStripLinePlugin } from './striplines.directive'
import { StockChartAxesDirective, StockChartAxisDirective, StockChartAxesPlugin, StockChartAxisPlugin } from './axes.directive'
import { StockChartRowsDirective, StockChartRowDirective, StockChartRowsPlugin, StockChartRowPlugin } from './rows.directive'
import { StockChartAnnotationsDirective, StockChartAnnotationDirective, StockChartAnnotationsPlugin, StockChartAnnotationPlugin } from './annotations.directive'
import { StockChartSelectedDataIndexesDirective, StockChartSelectedDataIndexDirective, StockChartSelectedDataIndexesPlugin, StockChartSelectedDataIndexPlugin } from './selecteddataindexes.directive'
import { StockChartPeriodsDirective, StockChartPeriodDirective, StockChartPeriodsPlugin, StockChartPeriodPlugin } from './periods.directive'
import { StockChartIndicatorsDirective, StockChartIndicatorDirective, StockChartIndicatorsPlugin, StockChartIndicatorPlugin } from './indicators.directive'


export const properties: string[] = ['annotations', 'axes', 'background', 'border', 'chartArea', 'crosshair', 'dataSource', 'enableCustomRange', 'enablePeriodSelector', 'enablePersistence', 'enableRtl', 'enableSelector', 'exportType', 'height', 'indicatorType', 'indicators', 'isMultiSelect', 'isSelect', 'isTransposed', 'locale', 'margin', 'periods', 'primaryXAxis', 'primaryYAxis', 'rows', 'selectedDataIndexes', 'selectionMode', 'series', 'seriesType', 'theme', 'title', 'titleStyle', 'tooltip', 'trendlineType', 'width', 'zoomSettings', 'axisLabelRender', 'load', 'loaded', 'selectorRender', 'seriesRender', 'tooltipRender'];
export const modelProps: string[] = [];

/**
 * Represents Vuejs chart Component
 * ```vue
 * <ejs-stockchart></ejs-stockchart>
 * ```
 */
@EJComponentDecorator({
    props: properties
})
export class StockChartComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = true;
    protected hasInjectedModules: boolean = true;
    public tagMapper: { [key: string]: Object } = {"e-stockchart-series-collection":{"e-stockchart-series":{"e-trendlines":"e-trendline"}},"e-stockchart-axes":{"e-stockchart-axis":{"e-stockchart-striplines":"e-stockchart-stripline"}},"e-stockchart-rows":"e-stockchart-row","e-stockchart-annotations":"e-stockchart-annotation","e-stockchart-selectedDataIndexes":"e-stockchart-selectedDataIndex","e-stockchart-periods":"e-stockchart-period","e-stockchart-indicators":"e-stockchart-indicator"};
    public tagNameMapper: Object = {"e-stockchart-series-collection":"e-series","e-stockchart-striplines":"e-stripLines","e-stockchart-axes":"e-axes","e-stockchart-rows":"e-rows","e-stockchart-annotations":"e-annotations","e-stockchart-selectedDataIndexes":"e-selectedDataIndexes","e-stockchart-periods":"e-periods","e-stockchart-indicators":"e-indicators"};
    
    constructor() {
        super();
        this.ej2Instances = new StockChart({});
        this.bindProperties();
    }

    public render(createElement: any) {
        return createElement('div', (this as any).$slots.default);
    }
    
    public chartModuleInjection(): void {
        return this.ej2Instances.chartModuleInjection();
    }

    public rangeChanged(updatedStart: number, updatedEnd: number): void {
        return this.ej2Instances.rangeChanged(updatedStart, updatedEnd);
    }

    public renderPeriodSelector(): void {
        return this.ej2Instances.renderPeriodSelector();
    }
}

export const StockChartPlugin = {
    name: 'ejs-stockchart',
    install(Vue: any) {
        Vue.component(StockChartPlugin.name, StockChartComponent);
        Vue.component(StockChartSeriesPlugin.name, StockChartSeriesDirective);
        Vue.component(StockChartSeriesCollectionPlugin.name, StockChartSeriesCollectionDirective);
        Vue.component(StockChartTrendlinePlugin.name, StockChartTrendlineDirective);
        Vue.component(StockChartTrendlinesPlugin.name, StockChartTrendlinesDirective);
        Vue.component(StockChartAxisPlugin.name, StockChartAxisDirective);
        Vue.component(StockChartAxesPlugin.name, StockChartAxesDirective);
        Vue.component(StockChartStripLinePlugin.name, StockChartStripLineDirective);
        Vue.component(StockChartStripLinesPlugin.name, StockChartStripLinesDirective);
        Vue.component(StockChartRowPlugin.name, StockChartRowDirective);
        Vue.component(StockChartRowsPlugin.name, StockChartRowsDirective);
        Vue.component(StockChartAnnotationPlugin.name, StockChartAnnotationDirective);
        Vue.component(StockChartAnnotationsPlugin.name, StockChartAnnotationsDirective);
        Vue.component(StockChartSelectedDataIndexPlugin.name, StockChartSelectedDataIndexDirective);
        Vue.component(StockChartSelectedDataIndexesPlugin.name, StockChartSelectedDataIndexesDirective);
        Vue.component(StockChartPeriodPlugin.name, StockChartPeriodDirective);
        Vue.component(StockChartPeriodsPlugin.name, StockChartPeriodsDirective);
        Vue.component(StockChartIndicatorPlugin.name, StockChartIndicatorDirective);
        Vue.component(StockChartIndicatorsPlugin.name, StockChartIndicatorsDirective);

    }
}
