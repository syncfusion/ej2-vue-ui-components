import { Options } from 'vue-class-component';
import { isUndefined } from '@syncfusion/ej2-base';
import { ComponentBase, EJComponentDecorator, getProps, allVue, gh } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined, getValue } from '@syncfusion/ej2-base';

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
import { RangeColorSettingsDirective, RangeColorSettingDirective, RangeColorSettingsPlugin, RangeColorSettingPlugin } from './rangecolorsettings.directive'
import { AnnotationsDirective, AnnotationDirective, AnnotationsPlugin, AnnotationPlugin } from './annotations.directive'
import { SelectedDataIndexesDirective, SelectedDataIndexDirective, SelectedDataIndexesPlugin, SelectedDataIndexPlugin } from './selecteddataindexes.directive'
import { IndicatorsDirective, IndicatorDirective, IndicatorsPlugin, IndicatorPlugin } from './indicators.directive'


// {{VueImport}}
export const properties: string[] = ['isLazyUpdate', 'allowExport', 'allowMultiSelection', 'annotations', 'axes', 'background', 'backgroundImage', 'border', 'chartArea', 'columns', 'crosshair', 'currencyCode', 'dataSource', 'description', 'enableAnimation', 'enableAutoIntervalOnBothAxis', 'enableCanvas', 'enableExport', 'enablePersistence', 'enableRtl', 'enableSideBySidePlacement', 'height', 'highlightColor', 'highlightMode', 'highlightPattern', 'indicators', 'isMultiSelect', 'isTransposed', 'legendSettings', 'locale', 'margin', 'palettes', 'primaryXAxis', 'primaryYAxis', 'rangeColorSettings', 'rows', 'selectedDataIndexes', 'selectionMode', 'selectionPattern', 'series', 'subTitle', 'subTitleStyle', 'tabIndex', 'theme', 'title', 'titleStyle', 'tooltip', 'useGroupingSeparator', 'width', 'zoomSettings', 'afterExport', 'animationComplete', 'annotationRender', 'axisLabelClick', 'axisLabelRender', 'axisMultiLabelRender', 'axisRangeCalculated', 'beforeExport', 'beforePrint', 'beforeResize', 'chartDoubleClick', 'chartMouseClick', 'chartMouseDown', 'chartMouseLeave', 'chartMouseMove', 'chartMouseUp', 'drag', 'dragComplete', 'dragEnd', 'dragStart', 'legendClick', 'legendRender', 'load', 'loaded', 'multiLevelLabelClick', 'onZooming', 'pointClick', 'pointDoubleClick', 'pointMove', 'pointRender', 'resized', 'scrollChanged', 'scrollEnd', 'scrollStart', 'selectionComplete', 'seriesRender', 'sharedTooltipRender', 'textRender', 'tooltipRender', 'zoomComplete'];
export const modelProps: string[] = ['dataSource'];

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

export class ChartComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = true;
    protected hasInjectedModules: boolean = true;
    public tagMapper: { [key: string]: Object } = {"e-series-collection":{"e-series":{"e-trendlines":"e-trendline","e-segments":"e-segment"}},"e-axes":{"e-axis":{"e-striplines":"e-stripline","e-multilevellabels":{"e-multilevellabel":{"e-categories":"e-category"}}}},"e-rows":"e-row","e-columns":"e-column","e-rangecolorsettings":"e-rangecolorsetting","e-annotations":"e-annotation","e-selecteddataindexes":"e-selecteddataindex","e-indicators":"e-indicator"};
    public tagNameMapper: Object = {"e-series-collection":"e-series","e-striplines":"e-stripLines","e-multilevellabels":"e-multiLevelLabels","e-rangecolorsettings":"e-rangeColorSettings","e-selecteddataindexes":"e-selectedDataIndexes"};
    public isVue3: boolean;
    public templateCollection: any;
    constructor() {
        super(arguments);
        this.isVue3 = !isExecute;
        this.ej2Instances = new Chart({});        this.ej2Instances._trigger = this.ej2Instances.trigger;
        this.ej2Instances.trigger = this.trigger;

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
    public trigger(eventName: string, eventProp: {[key:string]:Object}, successHandler?: Function): void {
        if(!isExecute) {
            this.models = !this.models ? this.ej2Instances.referModels : this.models;
        }
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            let key: string[] = this.models.toString().match(/checked|value/) || [];
            let propKey: string = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                if (!isExecute) {
                    this.ej2Instances.vueInstance.$emit('update:' + propKey, eventProp[propKey]);
                    this.ej2Instances.vueInstance.$emit('modelchanged', eventProp[propKey]);
                    this.ej2Instances.vueInstance.$emit('update:modelValue', eventProp[propKey]);
                } else {
                    if (eventName === 'change' || ((this as any).$props && !(this as any).$props.isLazyUpdate)) {
                        (this as any).$emit('update:'+ propKey, eventProp[propKey]);
                        (this as any).$emit('modelchanged', eventProp[propKey]);
                    }
                }
            }
        } else if ((eventName === 'actionBegin' && eventProp.requestType === 'dateNavigate') && this.models && (this.models.length !== 0)) {
            let key: string[] = this.models.toString().match(/currentView|selectedDate/) || [];
            let propKey: string = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                if (!isExecute) {
                    this.ej2Instances.vueInstance.$emit('update:' + propKey, eventProp[propKey]);
                    this.ej2Instances.vueInstance.$emit('modelchanged', eventProp[propKey]);
                } else {
                    (this as any).$emit('update:'+ propKey, eventProp[propKey]);
                    (this as any).$emit('modelchanged', eventProp[propKey]);
                }
            }
        }
        if ((this.ej2Instances && this.ej2Instances._trigger)) {
            this.ej2Instances._trigger(eventName, eventProp, successHandler); 
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
    
    public addAxes(axisCollection: Object[]): void {
        return this.ej2Instances.addAxes(axisCollection);
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

    public removeAxis(index: number): void {
        return this.ej2Instances.removeAxis(index);
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
        Vue.component(RangeColorSettingPlugin.name, RangeColorSettingDirective);
        Vue.component(RangeColorSettingsPlugin.name, RangeColorSettingsDirective);
        Vue.component(AnnotationPlugin.name, AnnotationDirective);
        Vue.component(AnnotationsPlugin.name, AnnotationsDirective);
        Vue.component(SelectedDataIndexPlugin.name, SelectedDataIndexDirective);
        Vue.component(SelectedDataIndexesPlugin.name, SelectedDataIndexesDirective);
        Vue.component(IndicatorPlugin.name, IndicatorDirective);
        Vue.component(IndicatorsPlugin.name, IndicatorsDirective);

    }
}