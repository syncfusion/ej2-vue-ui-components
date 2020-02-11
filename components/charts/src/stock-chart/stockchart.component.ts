import Vue from 'vue';
import { isUndefined } from '@syncfusion/ej2-base';
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
import { StockEventsDirective, StockEventDirective, StockEventsPlugin, StockEventPlugin } from './stockevents.directive'
import { StockChartIndicatorsDirective, StockChartIndicatorDirective, StockChartIndicatorsPlugin, StockChartIndicatorPlugin } from './indicators.directive'


export const properties: string[] = ['annotations', 'axes', 'background', 'border', 'chartArea', 'crosshair', 'dataSource', 'enableCustomRange', 'enablePeriodSelector', 'enablePersistence', 'enableRtl', 'enableSelector', 'exportType', 'height', 'indicatorType', 'indicators', 'isMultiSelect', 'isSelect', 'isTransposed', 'locale', 'margin', 'periods', 'primaryXAxis', 'primaryYAxis', 'rows', 'selectedDataIndexes', 'selectionMode', 'series', 'seriesType', 'stockEvents', 'theme', 'title', 'titleStyle', 'tooltip', 'trendlineType', 'width', 'zoomSettings', 'axisLabelRender', 'load', 'loaded', 'onZooming', 'pointClick', 'pointMove', 'rangeChange', 'selectorRender', 'seriesRender', 'stockChartMouseClick', 'stockChartMouseDown', 'stockChartMouseLeave', 'stockChartMouseMove', 'stockChartMouseUp', 'stockEventRender', 'tooltipRender'];
export const modelProps: string[] = ['dataSource'];

/**
 * Represents Vuejs chart Component
 * ```vue
 * <ejs-stockchart></ejs-stockchart>
 * ```
 */
@EJComponentDecorator({
    props: properties,
    model: {
        event: 'modelchanged'
    }
})
export class StockChartComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = true;
    protected hasInjectedModules: boolean = true;
    public tagMapper: { [key: string]: Object } = {"e-stockchart-series-collection":{"e-stockchart-series":{"e-trendlines":"e-trendline"}},"e-stockchart-axes":{"e-stockchart-axis":{"e-stockchart-striplines":"e-stockchart-stripline"}},"e-stockchart-rows":"e-stockchart-row","e-stockchart-annotations":"e-stockchart-annotation","e-stockchart-selectedDataIndexes":"e-stockchart-selectedDataIndex","e-stockchart-periods":"e-stockchart-period","e-stockchart-stockevents":"e-stockchart-stockevent","e-stockchart-indicators":"e-stockchart-indicator"};
    public tagNameMapper: Object = {"e-stockchart-series-collection":"e-series","e-stockchart-striplines":"e-stripLines","e-stockchart-axes":"e-axes","e-stockchart-rows":"e-rows","e-stockchart-annotations":"e-annotations","e-stockchart-selectedDataIndexes":"e-selectedDataIndexes","e-stockchart-periods":"e-periods","e-stockchart-stockevents":"e-stockEvents","e-stockchart-indicators":"e-indicators"};
    
    constructor() {
        super();
        this.ej2Instances = new StockChart({});        this.ej2Instances._trigger = this.ej2Instances.trigger;
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
    
    public chartModuleInjection(): void {
        return this.ej2Instances.chartModuleInjection();
    }

    public findCurrentData(totalData: Object, xName: string): Object {
        return this.ej2Instances.findCurrentData(totalData, xName);
    }

    public rangeChanged(updatedStart: number, updatedEnd: number): void {
        return this.ej2Instances.rangeChanged(updatedStart, updatedEnd);
    }

    public renderPeriodSelector(): void {
        return this.ej2Instances.renderPeriodSelector();
    }

    public stockChartDataManagerSuccess(): void {
        return this.ej2Instances.stockChartDataManagerSuccess();
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
        Vue.component(StockEventPlugin.name, StockEventDirective);
        Vue.component(StockEventsPlugin.name, StockEventsDirective);
        Vue.component(StockChartIndicatorPlugin.name, StockChartIndicatorDirective);
        Vue.component(StockChartIndicatorsPlugin.name, StockChartIndicatorsDirective);

    }
}
