import { AccumulationChart, BulletChart, Chart, RangeNavigator, Smithchart, Sparkline, StockChart } from '@syncfusion/ej2-charts';
import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { isUndefined } from '@syncfusion/ej2-base';

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let TrendlinesDirective = class TrendlinesDirective extends Vue {
    render() {
        return;
    }
};
TrendlinesDirective = __decorate([
    EJComponentDecorator({})
], TrendlinesDirective);
const TrendlinesPlugin = {
    name: 'e-trendlines',
    install(Vue$$1) {
        Vue$$1.component(TrendlinesPlugin.name, TrendlinesDirective);
    }
};
let TrendlineDirective = class TrendlineDirective extends Vue {
    render() {
        return;
    }
};
TrendlineDirective = __decorate([
    EJComponentDecorator({})
], TrendlineDirective);
const TrendlinePlugin = {
    name: 'e-trendline',
    install(Vue$$1) {
        Vue$$1.component(TrendlinePlugin.name, TrendlineDirective);
    }
};

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let SegmentsDirective = class SegmentsDirective extends Vue {
    render() {
        return;
    }
};
SegmentsDirective = __decorate$1([
    EJComponentDecorator({})
], SegmentsDirective);
const SegmentsPlugin = {
    name: 'e-segments',
    install(Vue$$1) {
        Vue$$1.component(SegmentsPlugin.name, SegmentsDirective);
    }
};
let SegmentDirective = class SegmentDirective extends Vue {
    render() {
        return;
    }
};
SegmentDirective = __decorate$1([
    EJComponentDecorator({})
], SegmentDirective);
const SegmentPlugin = {
    name: 'e-segment',
    install(Vue$$1) {
        Vue$$1.component(SegmentPlugin.name, SegmentDirective);
    }
};

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let SeriesCollectionDirective = class SeriesCollectionDirective extends Vue {
    render() {
        return;
    }
};
SeriesCollectionDirective = __decorate$2([
    EJComponentDecorator({})
], SeriesCollectionDirective);
const SeriesCollectionPlugin = {
    name: 'e-series-collection',
    install(Vue$$1) {
        Vue$$1.component(SeriesCollectionPlugin.name, SeriesCollectionDirective);
    }
};
let SeriesDirective = class SeriesDirective extends Vue {
    render() {
        return;
    }
};
SeriesDirective = __decorate$2([
    EJComponentDecorator({})
], SeriesDirective);
const SeriesPlugin = {
    name: 'e-series',
    install(Vue$$1) {
        Vue$$1.component(SeriesPlugin.name, SeriesDirective);
    }
};

var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let StripLinesDirective = class StripLinesDirective extends Vue {
    render() {
        return;
    }
};
StripLinesDirective = __decorate$3([
    EJComponentDecorator({})
], StripLinesDirective);
const StripLinesPlugin = {
    name: 'e-striplines',
    install(Vue$$1) {
        Vue$$1.component(StripLinesPlugin.name, StripLinesDirective);
    }
};
let StripLineDirective = class StripLineDirective extends Vue {
    render() {
        return;
    }
};
StripLineDirective = __decorate$3([
    EJComponentDecorator({})
], StripLineDirective);
const StripLinePlugin = {
    name: 'e-stripline',
    install(Vue$$1) {
        Vue$$1.component(StripLinePlugin.name, StripLineDirective);
    }
};

var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let CategoriesDirective = class CategoriesDirective extends Vue {
    render() {
        return;
    }
};
CategoriesDirective = __decorate$4([
    EJComponentDecorator({})
], CategoriesDirective);
const CategoriesPlugin = {
    name: 'e-categories',
    install(Vue$$1) {
        Vue$$1.component(CategoriesPlugin.name, CategoriesDirective);
    }
};
let CategoryDirective = class CategoryDirective extends Vue {
    render() {
        return;
    }
};
CategoryDirective = __decorate$4([
    EJComponentDecorator({})
], CategoryDirective);
const CategoryPlugin = {
    name: 'e-category',
    install(Vue$$1) {
        Vue$$1.component(CategoryPlugin.name, CategoryDirective);
    }
};

var __decorate$5 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let MultiLevelLabelsDirective = class MultiLevelLabelsDirective extends Vue {
    render() {
        return;
    }
};
MultiLevelLabelsDirective = __decorate$5([
    EJComponentDecorator({})
], MultiLevelLabelsDirective);
const MultiLevelLabelsPlugin = {
    name: 'e-multilevellabels',
    install(Vue$$1) {
        Vue$$1.component(MultiLevelLabelsPlugin.name, MultiLevelLabelsDirective);
    }
};
let MultiLevelLabelDirective = class MultiLevelLabelDirective extends Vue {
    render() {
        return;
    }
};
MultiLevelLabelDirective = __decorate$5([
    EJComponentDecorator({})
], MultiLevelLabelDirective);
const MultiLevelLabelPlugin = {
    name: 'e-multilevellabel',
    install(Vue$$1) {
        Vue$$1.component(MultiLevelLabelPlugin.name, MultiLevelLabelDirective);
    }
};

var __decorate$6 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let AxesDirective = class AxesDirective extends Vue {
    render() {
        return;
    }
};
AxesDirective = __decorate$6([
    EJComponentDecorator({})
], AxesDirective);
const AxesPlugin = {
    name: 'e-axes',
    install(Vue$$1) {
        Vue$$1.component(AxesPlugin.name, AxesDirective);
    }
};
let AxisDirective = class AxisDirective extends Vue {
    render() {
        return;
    }
};
AxisDirective = __decorate$6([
    EJComponentDecorator({})
], AxisDirective);
const AxisPlugin = {
    name: 'e-axis',
    install(Vue$$1) {
        Vue$$1.component(AxisPlugin.name, AxisDirective);
    }
};

var __decorate$7 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let RowsDirective = class RowsDirective extends Vue {
    render() {
        return;
    }
};
RowsDirective = __decorate$7([
    EJComponentDecorator({})
], RowsDirective);
const RowsPlugin = {
    name: 'e-rows',
    install(Vue$$1) {
        Vue$$1.component(RowsPlugin.name, RowsDirective);
    }
};
let RowDirective = class RowDirective extends Vue {
    render() {
        return;
    }
};
RowDirective = __decorate$7([
    EJComponentDecorator({})
], RowDirective);
const RowPlugin = {
    name: 'e-row',
    install(Vue$$1) {
        Vue$$1.component(RowPlugin.name, RowDirective);
    }
};

var __decorate$8 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ColumnsDirective = class ColumnsDirective extends Vue {
    render() {
        return;
    }
};
ColumnsDirective = __decorate$8([
    EJComponentDecorator({})
], ColumnsDirective);
const ColumnsPlugin = {
    name: 'e-columns',
    install(Vue$$1) {
        Vue$$1.component(ColumnsPlugin.name, ColumnsDirective);
    }
};
let ColumnDirective = class ColumnDirective extends Vue {
    render() {
        return;
    }
};
ColumnDirective = __decorate$8([
    EJComponentDecorator({})
], ColumnDirective);
const ColumnPlugin = {
    name: 'e-column',
    install(Vue$$1) {
        Vue$$1.component(ColumnPlugin.name, ColumnDirective);
    }
};

var __decorate$9 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let AnnotationsDirective = class AnnotationsDirective extends Vue {
    render() {
        return;
    }
};
AnnotationsDirective = __decorate$9([
    EJComponentDecorator({})
], AnnotationsDirective);
const AnnotationsPlugin = {
    name: 'e-annotations',
    install(Vue$$1) {
        Vue$$1.component(AnnotationsPlugin.name, AnnotationsDirective);
    }
};
/**
 * `e-annotation` directive represent a annotation of the VueJS Chart.
 * It must be contained in a Chart component(`ejs-chart`).
 * ```vue
 * <ejs-chart>
 *   <e-annotations>
 *    <e-annotation content='ID' />
 *    <e-annotation content='ID' />
 *   </e-annotations>
 * </ejs-chart>
 * ```
 */
let AnnotationDirective = class AnnotationDirective extends Vue {
    render() {
        return;
    }
};
AnnotationDirective = __decorate$9([
    EJComponentDecorator({})
], AnnotationDirective);
const AnnotationPlugin = {
    name: 'e-annotation',
    install(Vue$$1) {
        Vue$$1.component(AnnotationPlugin.name, AnnotationDirective);
    }
};

var __decorate$10 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let SelectedDataIndexesDirective = class SelectedDataIndexesDirective extends Vue {
    render() {
        return;
    }
};
SelectedDataIndexesDirective = __decorate$10([
    EJComponentDecorator({})
], SelectedDataIndexesDirective);
const SelectedDataIndexesPlugin = {
    name: 'e-selecteddataindexes',
    install(Vue$$1) {
        Vue$$1.component(SelectedDataIndexesPlugin.name, SelectedDataIndexesDirective);
    }
};
let SelectedDataIndexDirective = class SelectedDataIndexDirective extends Vue {
    render() {
        return;
    }
};
SelectedDataIndexDirective = __decorate$10([
    EJComponentDecorator({})
], SelectedDataIndexDirective);
const SelectedDataIndexPlugin = {
    name: 'e-selecteddataindex',
    install(Vue$$1) {
        Vue$$1.component(SelectedDataIndexPlugin.name, SelectedDataIndexDirective);
    }
};

var __decorate$11 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let IndicatorsDirective = class IndicatorsDirective extends Vue {
    render() {
        return;
    }
};
IndicatorsDirective = __decorate$11([
    EJComponentDecorator({})
], IndicatorsDirective);
const IndicatorsPlugin = {
    name: 'e-indicators',
    install(Vue$$1) {
        Vue$$1.component(IndicatorsPlugin.name, IndicatorsDirective);
    }
};
let IndicatorDirective = class IndicatorDirective extends Vue {
    render() {
        return;
    }
};
IndicatorDirective = __decorate$11([
    EJComponentDecorator({})
], IndicatorDirective);
const IndicatorPlugin = {
    name: 'e-indicator',
    install(Vue$$1) {
        Vue$$1.component(IndicatorPlugin.name, IndicatorDirective);
    }
};

var __decorate$12 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties = ['allowMultiSelection', 'annotations', 'axes', 'background', 'backgroundImage', 'border', 'chartArea', 'columns', 'crosshair', 'currencyCode', 'dataSource', 'description', 'enableAnimation', 'enableCanvas', 'enableExport', 'enablePersistence', 'enableRtl', 'enableSideBySidePlacement', 'height', 'highlightMode', 'highlightPattern', 'indicators', 'isMultiSelect', 'isTransposed', 'legendSettings', 'locale', 'margin', 'palettes', 'primaryXAxis', 'primaryYAxis', 'rows', 'selectedDataIndexes', 'selectionMode', 'selectionPattern', 'series', 'subTitle', 'subTitleStyle', 'tabIndex', 'theme', 'title', 'titleStyle', 'tooltip', 'useGroupingSeparator', 'width', 'zoomSettings', 'afterExport', 'animationComplete', 'annotationRender', 'axisLabelRender', 'axisMultiLabelRender', 'axisRangeCalculated', 'beforeExport', 'beforePrint', 'chartMouseClick', 'chartMouseDown', 'chartMouseLeave', 'chartMouseMove', 'chartMouseUp', 'drag', 'dragComplete', 'dragEnd', 'dragStart', 'legendClick', 'legendRender', 'load', 'loaded', 'multiLevelLabelClick', 'pointClick', 'pointMove', 'pointRender', 'resized', 'scrollChanged', 'scrollEnd', 'scrollStart', 'selectionComplete', 'seriesRender', 'textRender', 'tooltipRender', 'zoomComplete'];
const modelProps = ['dataSource'];
/**
 * Represents Vuejs chart Component
 * ```vue
 * <ejs-chart></ejs-chart>
 * ```
 */
let ChartComponent = class ChartComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties;
        this.models = modelProps;
        this.hasChildDirective = true;
        this.hasInjectedModules = true;
        this.tagMapper = { "e-series-collection": { "e-series": { "e-trendlines": "e-trendline", "e-segments": "e-segment" } }, "e-axes": { "e-axis": { "e-striplines": "e-stripline", "e-multilevellabels": { "e-multilevellabel": { "e-categories": "e-category" } } } }, "e-rows": "e-row", "e-columns": "e-column", "e-annotations": "e-annotation", "e-selecteddataindexes": "e-selecteddataindex", "e-indicators": "e-indicator" };
        this.tagNameMapper = { "e-series-collection": "e-series", "e-striplines": "e-stripLines", "e-multilevellabels": "e-multiLevelLabels", "e-selecteddataindexes": "e-selectedDataIndexes" };
        this.ej2Instances = new Chart({});
        this.ej2Instances._trigger = this.ej2Instances.trigger;
        this.ej2Instances.trigger = this.trigger;
        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
    }
    setProperties(prop, muteOnChange) {
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map((key) => {
                this.models.map((model) => {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    }
    trigger(eventName, eventProp, successHandler) {
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            let key = this.models.toString().match(/checked|value/) || [];
            let propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                this.$emit('update:' + propKey, eventProp[propKey]);
                this.$emit('modelchanged', eventProp[propKey]);
            }
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp, successHandler);
        }
    }
    render(createElement) {
        return createElement('div', this.$slots.default);
    }
    addSeries(seriesCollection) {
        return this.ej2Instances.addSeries(seriesCollection);
    }
    clearSeries() {
        return this.ej2Instances.clearSeries();
    }
    createChartSvg() {
        return this.ej2Instances.createChartSvg();
    }
    export(type, fileName) {
        return this.ej2Instances.export(type, fileName);
    }
    getLocalizedLabel(key) {
        return this.ej2Instances.getLocalizedLabel(key);
    }
    print(id) {
        return this.ej2Instances.print(id);
    }
    refreshLiveData() {
        return this.ej2Instances.refreshLiveData();
    }
    removeSeries(index) {
        return this.ej2Instances.removeSeries(index);
    }
    setAnnotationValue(annotationIndex, content) {
        return this.ej2Instances.setAnnotationValue(annotationIndex, content);
    }
};
ChartComponent = __decorate$12([
    EJComponentDecorator({
        props: properties,
        model: {
            event: 'modelchanged'
        }
    })
], ChartComponent);
const ChartPlugin = {
    name: 'ejs-chart',
    install(Vue$$1) {
        Vue$$1.component(ChartPlugin.name, ChartComponent);
        Vue$$1.component(SeriesPlugin.name, SeriesDirective);
        Vue$$1.component(SeriesCollectionPlugin.name, SeriesCollectionDirective);
        Vue$$1.component(TrendlinePlugin.name, TrendlineDirective);
        Vue$$1.component(TrendlinesPlugin.name, TrendlinesDirective);
        Vue$$1.component(SegmentPlugin.name, SegmentDirective);
        Vue$$1.component(SegmentsPlugin.name, SegmentsDirective);
        Vue$$1.component(AxisPlugin.name, AxisDirective);
        Vue$$1.component(AxesPlugin.name, AxesDirective);
        Vue$$1.component(StripLinePlugin.name, StripLineDirective);
        Vue$$1.component(StripLinesPlugin.name, StripLinesDirective);
        Vue$$1.component(MultiLevelLabelPlugin.name, MultiLevelLabelDirective);
        Vue$$1.component(MultiLevelLabelsPlugin.name, MultiLevelLabelsDirective);
        Vue$$1.component(CategoryPlugin.name, CategoryDirective);
        Vue$$1.component(CategoriesPlugin.name, CategoriesDirective);
        Vue$$1.component(RowPlugin.name, RowDirective);
        Vue$$1.component(RowsPlugin.name, RowsDirective);
        Vue$$1.component(ColumnPlugin.name, ColumnDirective);
        Vue$$1.component(ColumnsPlugin.name, ColumnsDirective);
        Vue$$1.component(AnnotationPlugin.name, AnnotationDirective);
        Vue$$1.component(AnnotationsPlugin.name, AnnotationsDirective);
        Vue$$1.component(SelectedDataIndexPlugin.name, SelectedDataIndexDirective);
        Vue$$1.component(SelectedDataIndexesPlugin.name, SelectedDataIndexesDirective);
        Vue$$1.component(IndicatorPlugin.name, IndicatorDirective);
        Vue$$1.component(IndicatorsPlugin.name, IndicatorsDirective);
    }
};

var __decorate$13 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let AccumulationSeriesCollectionDirective = class AccumulationSeriesCollectionDirective extends Vue {
    render() {
        return;
    }
};
AccumulationSeriesCollectionDirective = __decorate$13([
    EJComponentDecorator({})
], AccumulationSeriesCollectionDirective);
const AccumulationSeriesCollectionPlugin = {
    name: 'e-accumulation-series-collection',
    install(Vue$$1) {
        Vue$$1.component(AccumulationSeriesCollectionPlugin.name, AccumulationSeriesCollectionDirective);
    }
};
let AccumulationSeriesDirective = class AccumulationSeriesDirective extends Vue {
    render() {
        return;
    }
};
AccumulationSeriesDirective = __decorate$13([
    EJComponentDecorator({})
], AccumulationSeriesDirective);
const AccumulationSeriesPlugin = {
    name: 'e-accumulation-series',
    install(Vue$$1) {
        Vue$$1.component(AccumulationSeriesPlugin.name, AccumulationSeriesDirective);
    }
};

var __decorate$14 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let AccumulationAnnotationsDirective = class AccumulationAnnotationsDirective extends Vue {
    render() {
        return;
    }
};
AccumulationAnnotationsDirective = __decorate$14([
    EJComponentDecorator({})
], AccumulationAnnotationsDirective);
const AccumulationAnnotationsPlugin = {
    name: 'e-accumulation-annotations',
    install(Vue$$1) {
        Vue$$1.component(AccumulationAnnotationsPlugin.name, AccumulationAnnotationsDirective);
    }
};
let AccumulationAnnotationDirective = class AccumulationAnnotationDirective extends Vue {
    render() {
        return;
    }
};
AccumulationAnnotationDirective = __decorate$14([
    EJComponentDecorator({})
], AccumulationAnnotationDirective);
const AccumulationAnnotationPlugin = {
    name: 'e-accumulation-annotation',
    install(Vue$$1) {
        Vue$$1.component(AccumulationAnnotationPlugin.name, AccumulationAnnotationDirective);
    }
};

var __decorate$15 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties$1 = ['annotations', 'background', 'backgroundImage', 'border', 'center', 'currencyCode', 'dataSource', 'enableAnimation', 'enableBorderOnMouseMove', 'enableExport', 'enablePersistence', 'enableRtl', 'enableSmartLabels', 'height', 'highLightMode', 'highlightPattern', 'isMultiSelect', 'legendSettings', 'locale', 'margin', 'selectedDataIndexes', 'selectionMode', 'selectionPattern', 'series', 'subTitle', 'subTitleStyle', 'theme', 'title', 'titleStyle', 'tooltip', 'useGroupingSeparator', 'width', 'animationComplete', 'annotationRender', 'beforePrint', 'chartMouseClick', 'chartMouseDown', 'chartMouseLeave', 'chartMouseMove', 'chartMouseUp', 'legendRender', 'load', 'loaded', 'pointClick', 'pointMove', 'pointRender', 'resized', 'seriesRender', 'textRender', 'tooltipRender'];
const modelProps$1 = ['dataSource'];
/**
 * Represents Vuejs AccumulationChart Component
 * ```vue
 * <ejs-accumulationchart></ejs-accumulationchart>
 * ```
 */
let AccumulationChartComponent = class AccumulationChartComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties$1;
        this.models = modelProps$1;
        this.hasChildDirective = true;
        this.hasInjectedModules = true;
        this.tagMapper = { "e-accumulation-series-collection": "e-accumulation-series", "e-accumulation-annotations": "e-accumulation-annotation" };
        this.tagNameMapper = { "e-accumulation-series-collection": "e-series", "e-accumulation-annotations": "e-annotations" };
        this.ej2Instances = new AccumulationChart({});
        this.ej2Instances._trigger = this.ej2Instances.trigger;
        this.ej2Instances.trigger = this.trigger;
        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
    }
    setProperties(prop, muteOnChange) {
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map((key) => {
                this.models.map((model) => {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    }
    trigger(eventName, eventProp, successHandler) {
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            let key = this.models.toString().match(/checked|value/) || [];
            let propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                this.$emit('update:' + propKey, eventProp[propKey]);
                this.$emit('modelchanged', eventProp[propKey]);
            }
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp, successHandler);
        }
    }
    render(createElement) {
        return createElement('div', this.$slots.default);
    }
    export(type, fileName) {
        return this.ej2Instances.export(type, fileName);
    }
    print(id) {
        return this.ej2Instances.print(id);
    }
    setAnnotationValue(annotationIndex, content) {
        return this.ej2Instances.setAnnotationValue(annotationIndex, content);
    }
    titleTooltip(event, x, y, isTouch) {
        return this.ej2Instances.titleTooltip(event, x, y, isTouch);
    }
};
AccumulationChartComponent = __decorate$15([
    EJComponentDecorator({
        props: properties$1,
        model: {
            event: 'modelchanged'
        }
    })
], AccumulationChartComponent);
const AccumulationChartPlugin = {
    name: 'ejs-accumulationchart',
    install(Vue$$1) {
        Vue$$1.component(AccumulationChartPlugin.name, AccumulationChartComponent);
        Vue$$1.component(AccumulationSeriesPlugin.name, AccumulationSeriesDirective);
        Vue$$1.component(AccumulationSeriesCollectionPlugin.name, AccumulationSeriesCollectionDirective);
        Vue$$1.component(AccumulationAnnotationPlugin.name, AccumulationAnnotationDirective);
        Vue$$1.component(AccumulationAnnotationsPlugin.name, AccumulationAnnotationsDirective);
    }
};

var __decorate$16 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let RangenavigatorSeriesCollectionDirective = class RangenavigatorSeriesCollectionDirective extends Vue {
    render() {
        return;
    }
};
RangenavigatorSeriesCollectionDirective = __decorate$16([
    EJComponentDecorator({})
], RangenavigatorSeriesCollectionDirective);
const RangenavigatorSeriesCollectionPlugin = {
    name: 'e-rangenavigator-series-collection',
    install(Vue$$1) {
        Vue$$1.component(RangenavigatorSeriesCollectionPlugin.name, RangenavigatorSeriesCollectionDirective);
    }
};
let RangenavigatorSeriesDirective = class RangenavigatorSeriesDirective extends Vue {
    render() {
        return;
    }
};
RangenavigatorSeriesDirective = __decorate$16([
    EJComponentDecorator({})
], RangenavigatorSeriesDirective);
const RangenavigatorSeriesPlugin = {
    name: 'e-rangenavigator-series',
    install(Vue$$1) {
        Vue$$1.component(RangenavigatorSeriesPlugin.name, RangenavigatorSeriesDirective);
    }
};

var __decorate$17 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties$2 = ['allowIntervalData', 'allowSnapping', 'animationDuration', 'dataSource', 'disableRangeSelector', 'enableDeferredUpdate', 'enableGrouping', 'enablePersistence', 'enableRtl', 'groupBy', 'height', 'interval', 'intervalType', 'labelFormat', 'labelIntersectAction', 'labelPosition', 'labelStyle', 'locale', 'logBase', 'majorGridLines', 'majorTickLines', 'margin', 'maximum', 'minimum', 'navigatorBorder', 'navigatorStyleSettings', 'periodSelectorSettings', 'query', 'secondaryLabelAlignment', 'series', 'skeleton', 'skeletonType', 'theme', 'tickPosition', 'tooltip', 'useGroupingSeparator', 'value', 'valueType', 'width', 'xName', 'yName', 'beforePrint', 'changed', 'labelRender', 'load', 'loaded', 'resized', 'selectorRender', 'tooltipRender'];
const modelProps$2 = ['dataSource'];
/**
 * Represents Vuejs RangeNavigator Component
 * ```vue
 * <ejs-rangenavigator></ejs-rangenavigator>
 * ```
 */
let RangeNavigatorComponent = class RangeNavigatorComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties$2;
        this.models = modelProps$2;
        this.hasChildDirective = true;
        this.hasInjectedModules = true;
        this.tagMapper = { "e-rangenavigator-series-collection": "e-rangenavigator-series" };
        this.tagNameMapper = { "e-rangenavigator-series-collection": "e-series" };
        this.ej2Instances = new RangeNavigator({});
        this.ej2Instances._trigger = this.ej2Instances.trigger;
        this.ej2Instances.trigger = this.trigger;
        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
    }
    setProperties(prop, muteOnChange) {
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map((key) => {
                this.models.map((model) => {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    }
    trigger(eventName, eventProp, successHandler) {
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            let key = this.models.toString().match(/checked|value/) || [];
            let propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                this.$emit('update:' + propKey, eventProp[propKey]);
                this.$emit('modelchanged', eventProp[propKey]);
            }
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp, successHandler);
        }
    }
    render(createElement) {
        return createElement('div', this.$slots.default);
    }
    createSecondaryElement() {
        return this.ej2Instances.createSecondaryElement();
    }
    export(type, fileName, orientation, controls, width, height, isVertical) {
        return this.ej2Instances.export(type, fileName, orientation, controls, width, height, isVertical);
    }
    print(id) {
        return this.ej2Instances.print(id);
    }
    renderChart() {
        return this.ej2Instances.renderChart();
    }
};
RangeNavigatorComponent = __decorate$17([
    EJComponentDecorator({
        props: properties$2,
        model: {
            event: 'modelchanged'
        }
    })
], RangeNavigatorComponent);
const RangeNavigatorPlugin = {
    name: 'ejs-rangenavigator',
    install(Vue$$1) {
        Vue$$1.component(RangeNavigatorPlugin.name, RangeNavigatorComponent);
        Vue$$1.component(RangenavigatorSeriesPlugin.name, RangenavigatorSeriesDirective);
        Vue$$1.component(RangenavigatorSeriesCollectionPlugin.name, RangenavigatorSeriesCollectionDirective);
    }
};

var __decorate$18 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let RangeBandSettingsDirective = class RangeBandSettingsDirective extends Vue {
    render() {
        return;
    }
};
RangeBandSettingsDirective = __decorate$18([
    EJComponentDecorator({})
], RangeBandSettingsDirective);
const RangeBandSettingsPlugin = {
    name: 'e-rangeBandSettings',
    install(Vue$$1) {
        Vue$$1.component(RangeBandSettingsPlugin.name, RangeBandSettingsDirective);
    }
};
let RangeBandSettingDirective = class RangeBandSettingDirective extends Vue {
    render() {
        return;
    }
};
RangeBandSettingDirective = __decorate$18([
    EJComponentDecorator({})
], RangeBandSettingDirective);
const RangeBandSettingPlugin = {
    name: 'e-rangeBandSetting',
    install(Vue$$1) {
        Vue$$1.component(RangeBandSettingPlugin.name, RangeBandSettingDirective);
    }
};

var __decorate$19 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties$3 = ['axisSettings', 'border', 'containerArea', 'dataLabelSettings', 'dataSource', 'enablePersistence', 'enableRtl', 'endPointColor', 'fill', 'format', 'height', 'highPointColor', 'lineWidth', 'locale', 'lowPointColor', 'markerSettings', 'negativePointColor', 'opacity', 'padding', 'palette', 'query', 'rangeBandSettings', 'rangePadding', 'startPointColor', 'theme', 'tiePointColor', 'tooltipSettings', 'type', 'useGroupingSeparator', 'valueType', 'width', 'xName', 'yName', 'axisRendering', 'dataLabelRendering', 'load', 'loaded', 'markerRendering', 'pointRegionMouseClick', 'pointRegionMouseMove', 'pointRendering', 'resize', 'seriesRendering', 'sparklineMouseClick', 'sparklineMouseMove', 'tooltipInitialize'];
const modelProps$3 = [];
/**
 * Represents Vuejs Sparkline Component
 * ```vue
 * <ejs-sparkline></ejs-sparkline>
 * ```
 */
let SparklineComponent = class SparklineComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties$3;
        this.models = modelProps$3;
        this.hasChildDirective = true;
        this.hasInjectedModules = true;
        this.tagMapper = { "e-rangeBandSettings": "e-rangeBandSetting" };
        this.tagNameMapper = {};
        this.ej2Instances = new Sparkline({});
        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
    }
    setProperties(prop, muteOnChange) {
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map((key) => {
                this.models.map((model) => {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    }
    render(createElement) {
        return createElement('div', this.$slots.default);
    }
    renderSparkline() {
        return this.ej2Instances.renderSparkline();
    }
};
SparklineComponent = __decorate$19([
    EJComponentDecorator({
        props: properties$3
    })
], SparklineComponent);
const SparklinePlugin = {
    name: 'ejs-sparkline',
    install(Vue$$1) {
        Vue$$1.component(SparklinePlugin.name, SparklineComponent);
        Vue$$1.component(RangeBandSettingPlugin.name, RangeBandSettingDirective);
        Vue$$1.component(RangeBandSettingsPlugin.name, RangeBandSettingsDirective);
    }
};

var __decorate$20 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let SmithchartSeriesCollectionDirective = class SmithchartSeriesCollectionDirective extends Vue {
    render() {
        return;
    }
};
SmithchartSeriesCollectionDirective = __decorate$20([
    EJComponentDecorator({})
], SmithchartSeriesCollectionDirective);
const SmithchartSeriesCollectionPlugin = {
    name: 'e-seriesCollection',
    install(Vue$$1) {
        Vue$$1.component(SmithchartSeriesCollectionPlugin.name, SmithchartSeriesCollectionDirective);
    }
};
let SmithchartSeriesDirective = class SmithchartSeriesDirective extends Vue {
    render() {
        return;
    }
};
SmithchartSeriesDirective = __decorate$20([
    EJComponentDecorator({})
], SmithchartSeriesDirective);
const SmithchartSeriesPlugin = {
    name: 'e-series',
    install(Vue$$1) {
        Vue$$1.component(SmithchartSeriesPlugin.name, SmithchartSeriesDirective);
    }
};

var __decorate$21 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties$4 = ['background', 'border', 'elementSpacing', 'enablePersistence', 'enableRtl', 'font', 'height', 'horizontalAxis', 'legendSettings', 'locale', 'margin', 'radialAxis', 'radius', 'renderType', 'series', 'theme', 'title', 'width', 'animationComplete', 'axisLabelRender', 'beforePrint', 'legendRender', 'load', 'loaded', 'seriesRender', 'subtitleRender', 'textRender', 'titleRender'];
const modelProps$4 = [];
/**
 * Represents Vuejs Smithchart Component
 * ```vue
 * <ejs-smithchart></ejs-smithchart>
 * ```
 */
let SmithchartComponent = class SmithchartComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties$4;
        this.models = modelProps$4;
        this.hasChildDirective = true;
        this.hasInjectedModules = true;
        this.tagMapper = { "e-seriesCollection": "e-series" };
        this.tagNameMapper = { "e-seriesCollection": "e-series" };
        this.ej2Instances = new Smithchart({});
        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
    }
    setProperties(prop, muteOnChange) {
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map((key) => {
                this.models.map((model) => {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    }
    render(createElement) {
        return createElement('div', this.$slots.default);
    }
    export(type, fileName, orientation) {
        return this.ej2Instances.export(type, fileName, orientation);
    }
    mouseEnd(e) {
        return this.ej2Instances.mouseEnd(e);
    }
    mouseMove(e) {
        return this.ej2Instances.mouseMove(e);
    }
    print(id) {
        return this.ej2Instances.print(id);
    }
    smithchartOnClick(e) {
        return this.ej2Instances.smithchartOnClick(e);
    }
    smithchartOnResize(e) {
        return this.ej2Instances.smithchartOnResize(e);
    }
};
SmithchartComponent = __decorate$21([
    EJComponentDecorator({
        props: properties$4
    })
], SmithchartComponent);
const SmithchartPlugin = {
    name: 'ejs-smithchart',
    install(Vue$$1) {
        Vue$$1.component(SmithchartPlugin.name, SmithchartComponent);
        Vue$$1.component(SmithchartSeriesPlugin.name, SmithchartSeriesDirective);
        Vue$$1.component(SmithchartSeriesCollectionPlugin.name, SmithchartSeriesCollectionDirective);
    }
};

var __decorate$22 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let StockChartTrendlinesDirective = class StockChartTrendlinesDirective extends Vue {
    render() {
        return;
    }
};
StockChartTrendlinesDirective = __decorate$22([
    EJComponentDecorator({})
], StockChartTrendlinesDirective);
const StockChartTrendlinesPlugin = {
    name: 'e-trendlines',
    install(Vue$$1) {
        Vue$$1.component(StockChartTrendlinesPlugin.name, StockChartTrendlinesDirective);
    }
};
let StockChartTrendlineDirective = class StockChartTrendlineDirective extends Vue {
    render() {
        return;
    }
};
StockChartTrendlineDirective = __decorate$22([
    EJComponentDecorator({})
], StockChartTrendlineDirective);
const StockChartTrendlinePlugin = {
    name: 'e-trendline',
    install(Vue$$1) {
        Vue$$1.component(StockChartTrendlinePlugin.name, StockChartTrendlineDirective);
    }
};

var __decorate$23 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let StockChartSeriesCollectionDirective = class StockChartSeriesCollectionDirective extends Vue {
    render() {
        return;
    }
};
StockChartSeriesCollectionDirective = __decorate$23([
    EJComponentDecorator({})
], StockChartSeriesCollectionDirective);
const StockChartSeriesCollectionPlugin = {
    name: 'e-stockchart-series-collection',
    install(Vue$$1) {
        Vue$$1.component(StockChartSeriesCollectionPlugin.name, StockChartSeriesCollectionDirective);
    }
};
let StockChartSeriesDirective = class StockChartSeriesDirective extends Vue {
    render() {
        return;
    }
};
StockChartSeriesDirective = __decorate$23([
    EJComponentDecorator({})
], StockChartSeriesDirective);
const StockChartSeriesPlugin = {
    name: 'e-stockchart-series',
    install(Vue$$1) {
        Vue$$1.component(StockChartSeriesPlugin.name, StockChartSeriesDirective);
    }
};

var __decorate$24 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let StockChartAxesDirective = class StockChartAxesDirective extends Vue {
    render() {
        return;
    }
};
StockChartAxesDirective = __decorate$24([
    EJComponentDecorator({})
], StockChartAxesDirective);
const StockChartAxesPlugin = {
    name: 'e-stockchart-axes',
    install(Vue$$1) {
        Vue$$1.component(StockChartAxesPlugin.name, StockChartAxesDirective);
    }
};
let StockChartAxisDirective = class StockChartAxisDirective extends Vue {
    render() {
        return;
    }
};
StockChartAxisDirective = __decorate$24([
    EJComponentDecorator({})
], StockChartAxisDirective);
const StockChartAxisPlugin = {
    name: 'e-stockchart-axis',
    install(Vue$$1) {
        Vue$$1.component(StockChartAxisPlugin.name, StockChartAxisDirective);
    }
};

var __decorate$25 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let StockChartRowsDirective = class StockChartRowsDirective extends Vue {
    render() {
        return;
    }
};
StockChartRowsDirective = __decorate$25([
    EJComponentDecorator({})
], StockChartRowsDirective);
const StockChartRowsPlugin = {
    name: 'e-stockchart-rows',
    install(Vue$$1) {
        Vue$$1.component(StockChartRowsPlugin.name, StockChartRowsDirective);
    }
};
let StockChartRowDirective = class StockChartRowDirective extends Vue {
    render() {
        return;
    }
};
StockChartRowDirective = __decorate$25([
    EJComponentDecorator({})
], StockChartRowDirective);
const StockChartRowPlugin = {
    name: 'e-stockchart-row',
    install(Vue$$1) {
        Vue$$1.component(StockChartRowPlugin.name, StockChartRowDirective);
    }
};

var __decorate$26 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let StockChartAnnotationsDirective = class StockChartAnnotationsDirective extends Vue {
    render() {
        return;
    }
};
StockChartAnnotationsDirective = __decorate$26([
    EJComponentDecorator({})
], StockChartAnnotationsDirective);
const StockChartAnnotationsPlugin = {
    name: 'e-stockchart-annotations',
    install(Vue$$1) {
        Vue$$1.component(StockChartAnnotationsPlugin.name, StockChartAnnotationsDirective);
    }
};
/**
 * `e-annotation` directive represent a annotation of the VueJS Chart.
 * It must be contained in a Chart component(`ejs-chart`).
 * ```vue
 * <ejs-stockchart>
 *   <e-stockchart-annotations>
 *    <e-annotation content='ID' />
 *    <e-annotation content='ID' />
 *   </e-annotations>
 * </ejs-chart>
 * ```
 */
let StockChartAnnotationDirective = class StockChartAnnotationDirective extends Vue {
    render() {
        return;
    }
};
StockChartAnnotationDirective = __decorate$26([
    EJComponentDecorator({})
], StockChartAnnotationDirective);
const StockChartAnnotationPlugin = {
    name: 'e-stockchart-annotation',
    install(Vue$$1) {
        Vue$$1.component(StockChartAnnotationPlugin.name, StockChartAnnotationDirective);
    }
};

var __decorate$27 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let StockChartSelectedDataIndexesDirective = class StockChartSelectedDataIndexesDirective extends Vue {
    render() {
        return;
    }
};
StockChartSelectedDataIndexesDirective = __decorate$27([
    EJComponentDecorator({})
], StockChartSelectedDataIndexesDirective);
const StockChartSelectedDataIndexesPlugin = {
    name: 'e-stockchart-selectedDataIndexes',
    install(Vue$$1) {
        Vue$$1.component(StockChartSelectedDataIndexesPlugin.name, StockChartSelectedDataIndexesDirective);
    }
};
let StockChartSelectedDataIndexDirective = class StockChartSelectedDataIndexDirective extends Vue {
    render() {
        return;
    }
};
StockChartSelectedDataIndexDirective = __decorate$27([
    EJComponentDecorator({})
], StockChartSelectedDataIndexDirective);
const StockChartSelectedDataIndexPlugin = {
    name: 'e-stockchart-selectedDataIndex',
    install(Vue$$1) {
        Vue$$1.component(StockChartSelectedDataIndexPlugin.name, StockChartSelectedDataIndexDirective);
    }
};

var __decorate$28 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let StockChartPeriodsDirective = class StockChartPeriodsDirective extends Vue {
    render() {
        return;
    }
};
StockChartPeriodsDirective = __decorate$28([
    EJComponentDecorator({})
], StockChartPeriodsDirective);
const StockChartPeriodsPlugin = {
    name: 'e-stockchart-periods',
    install(Vue$$1) {
        Vue$$1.component(StockChartPeriodsPlugin.name, StockChartPeriodsDirective);
    }
};
let StockChartPeriodDirective = class StockChartPeriodDirective extends Vue {
    render() {
        return;
    }
};
StockChartPeriodDirective = __decorate$28([
    EJComponentDecorator({})
], StockChartPeriodDirective);
const StockChartPeriodPlugin = {
    name: 'e-stockchart-period',
    install(Vue$$1) {
        Vue$$1.component(StockChartPeriodPlugin.name, StockChartPeriodDirective);
    }
};

var __decorate$29 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let StockEventsDirective = class StockEventsDirective extends Vue {
    render() {
        return;
    }
};
StockEventsDirective = __decorate$29([
    EJComponentDecorator({})
], StockEventsDirective);
const StockEventsPlugin = {
    name: 'e-stockchart-stockevents',
    install(Vue$$1) {
        Vue$$1.component(StockEventsPlugin.name, StockEventsDirective);
    }
};
let StockEventDirective = class StockEventDirective extends Vue {
    render() {
        return;
    }
};
StockEventDirective = __decorate$29([
    EJComponentDecorator({})
], StockEventDirective);
const StockEventPlugin = {
    name: 'e-stockchart-stockevent',
    install(Vue$$1) {
        Vue$$1.component(StockEventPlugin.name, StockEventDirective);
    }
};

var __decorate$30 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let StockChartIndicatorsDirective = class StockChartIndicatorsDirective extends Vue {
    render() {
        return;
    }
};
StockChartIndicatorsDirective = __decorate$30([
    EJComponentDecorator({})
], StockChartIndicatorsDirective);
const StockChartIndicatorsPlugin = {
    name: 'e-stockchart-indicators',
    install(Vue$$1) {
        Vue$$1.component(StockChartIndicatorsPlugin.name, StockChartIndicatorsDirective);
    }
};
let StockChartIndicatorDirective = class StockChartIndicatorDirective extends Vue {
    render() {
        return;
    }
};
StockChartIndicatorDirective = __decorate$30([
    EJComponentDecorator({})
], StockChartIndicatorDirective);
const StockChartIndicatorPlugin = {
    name: 'e-stockchart-indicator',
    install(Vue$$1) {
        Vue$$1.component(StockChartIndicatorPlugin.name, StockChartIndicatorDirective);
    }
};

var __decorate$31 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties$5 = ['annotations', 'axes', 'background', 'border', 'chartArea', 'crosshair', 'dataSource', 'enableCustomRange', 'enablePeriodSelector', 'enablePersistence', 'enableRtl', 'enableSelector', 'exportType', 'height', 'indicatorType', 'indicators', 'isMultiSelect', 'isSelect', 'isTransposed', 'locale', 'margin', 'periods', 'primaryXAxis', 'primaryYAxis', 'rows', 'selectedDataIndexes', 'selectionMode', 'series', 'seriesType', 'stockEvents', 'theme', 'title', 'titleStyle', 'tooltip', 'trendlineType', 'width', 'zoomSettings', 'axisLabelRender', 'load', 'loaded', 'pointClick', 'pointMove', 'rangeChange', 'selectorRender', 'seriesRender', 'stockChartMouseClick', 'stockChartMouseDown', 'stockChartMouseLeave', 'stockChartMouseMove', 'stockChartMouseUp', 'stockEventRender', 'tooltipRender'];
const modelProps$5 = ['dataSource'];
/**
 * Represents Vuejs chart Component
 * ```vue
 * <ejs-stockchart></ejs-stockchart>
 * ```
 */
let StockChartComponent = class StockChartComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties$5;
        this.models = modelProps$5;
        this.hasChildDirective = true;
        this.hasInjectedModules = true;
        this.tagMapper = { "e-stockchart-series-collection": { "e-stockchart-series": { "e-trendlines": "e-trendline" } }, "e-stockchart-axes": "e-stockchart-axis", "e-stockchart-rows": "e-stockchart-row", "e-stockchart-annotations": "e-stockchart-annotation", "e-stockchart-selectedDataIndexes": "e-stockchart-selectedDataIndex", "e-stockchart-periods": "e-stockchart-period", "e-stockchart-stockevents": "e-stockchart-stockevent", "e-stockchart-indicators": "e-stockchart-indicator" };
        this.tagNameMapper = { "e-stockchart-series-collection": "e-series", "e-stockchart-axes": "e-axes", "e-stockchart-rows": "e-rows", "e-stockchart-annotations": "e-annotations", "e-stockchart-selectedDataIndexes": "e-selectedDataIndexes", "e-stockchart-periods": "e-periods", "e-stockchart-stockevents": "e-stockEvents", "e-stockchart-indicators": "e-indicators" };
        this.ej2Instances = new StockChart({});
        this.ej2Instances._trigger = this.ej2Instances.trigger;
        this.ej2Instances.trigger = this.trigger;
        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
    }
    setProperties(prop, muteOnChange) {
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map((key) => {
                this.models.map((model) => {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    }
    trigger(eventName, eventProp, successHandler) {
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            let key = this.models.toString().match(/checked|value/) || [];
            let propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                this.$emit('update:' + propKey, eventProp[propKey]);
                this.$emit('modelchanged', eventProp[propKey]);
            }
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp, successHandler);
        }
    }
    render(createElement) {
        return createElement('div', this.$slots.default);
    }
    chartModuleInjection() {
        return this.ej2Instances.chartModuleInjection();
    }
    findCurrentData(totalData, xName) {
        return this.ej2Instances.findCurrentData(totalData, xName);
    }
    rangeChanged(updatedStart, updatedEnd) {
        return this.ej2Instances.rangeChanged(updatedStart, updatedEnd);
    }
    renderPeriodSelector() {
        return this.ej2Instances.renderPeriodSelector();
    }
    stockChartDataManagerSuccess() {
        return this.ej2Instances.stockChartDataManagerSuccess();
    }
};
StockChartComponent = __decorate$31([
    EJComponentDecorator({
        props: properties$5,
        model: {
            event: 'modelchanged'
        }
    })
], StockChartComponent);
const StockChartPlugin = {
    name: 'ejs-stockchart',
    install(Vue$$1) {
        Vue$$1.component(StockChartPlugin.name, StockChartComponent);
        Vue$$1.component(StockChartSeriesPlugin.name, StockChartSeriesDirective);
        Vue$$1.component(StockChartSeriesCollectionPlugin.name, StockChartSeriesCollectionDirective);
        Vue$$1.component(StockChartTrendlinePlugin.name, StockChartTrendlineDirective);
        Vue$$1.component(StockChartTrendlinesPlugin.name, StockChartTrendlinesDirective);
        Vue$$1.component(StockChartAxisPlugin.name, StockChartAxisDirective);
        Vue$$1.component(StockChartAxesPlugin.name, StockChartAxesDirective);
        Vue$$1.component(StockChartRowPlugin.name, StockChartRowDirective);
        Vue$$1.component(StockChartRowsPlugin.name, StockChartRowsDirective);
        Vue$$1.component(StockChartAnnotationPlugin.name, StockChartAnnotationDirective);
        Vue$$1.component(StockChartAnnotationsPlugin.name, StockChartAnnotationsDirective);
        Vue$$1.component(StockChartSelectedDataIndexPlugin.name, StockChartSelectedDataIndexDirective);
        Vue$$1.component(StockChartSelectedDataIndexesPlugin.name, StockChartSelectedDataIndexesDirective);
        Vue$$1.component(StockChartPeriodPlugin.name, StockChartPeriodDirective);
        Vue$$1.component(StockChartPeriodsPlugin.name, StockChartPeriodsDirective);
        Vue$$1.component(StockEventPlugin.name, StockEventDirective);
        Vue$$1.component(StockEventsPlugin.name, StockEventsDirective);
        Vue$$1.component(StockChartIndicatorPlugin.name, StockChartIndicatorDirective);
        Vue$$1.component(StockChartIndicatorsPlugin.name, StockChartIndicatorsDirective);
    }
};

var __decorate$32 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let BulletRangeCollectionDirective = class BulletRangeCollectionDirective extends Vue {
    render() {
        return;
    }
};
BulletRangeCollectionDirective = __decorate$32([
    EJComponentDecorator({})
], BulletRangeCollectionDirective);
const BulletRangeCollectionPlugin = {
    name: 'e-bullet-range-collection',
    install(Vue$$1) {
        Vue$$1.component(BulletRangeCollectionPlugin.name, BulletRangeCollectionDirective);
    }
};
let BulletRangeDirective = class BulletRangeDirective extends Vue {
    render() {
        return;
    }
};
BulletRangeDirective = __decorate$32([
    EJComponentDecorator({})
], BulletRangeDirective);
const BulletRangePlugin = {
    name: 'e-bullet-range',
    install(Vue$$1) {
        Vue$$1.component(BulletRangePlugin.name, BulletRangeDirective);
    }
};

var __decorate$33 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties$6 = ['animation', 'border', 'categoryField', 'categoryLabelStyle', 'dataLabel', 'dataSource', 'enableGroupSeparator', 'enablePersistence', 'enableRtl', 'height', 'interval', 'labelFormat', 'labelPosition', 'labelStyle', 'legendSettings', 'locale', 'majorTickLines', 'margin', 'maximum', 'minimum', 'minorTickLines', 'minorTicksPerInterval', 'opposedPosition', 'orientation', 'query', 'ranges', 'subtitle', 'subtitleStyle', 'tabIndex', 'targetColor', 'targetField', 'targetTypes', 'targetWidth', 'theme', 'tickPosition', 'title', 'titlePosition', 'titleStyle', 'tooltip', 'type', 'valueBorder', 'valueField', 'valueFill', 'valueHeight', 'width', 'beforePrint', 'bulletChartMouseClick', 'legendRender', 'load', 'loaded', 'tooltipRender'];
const modelProps$6 = ['dataSource'];
/**
 * Represents Vuejs BulletChart Component
 * ```vue
 * <ejs-bulletchart></ejs-bulletchart>
 * ```
 */
let BulletChartComponent = class BulletChartComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties$6;
        this.models = modelProps$6;
        this.hasChildDirective = true;
        this.hasInjectedModules = true;
        this.tagMapper = { "e-bullet-range-collection": "e-bullet-range" };
        this.tagNameMapper = { "e-bullet-range-collection": "e-ranges" };
        this.ej2Instances = new BulletChart({});
        this.ej2Instances._trigger = this.ej2Instances.trigger;
        this.ej2Instances.trigger = this.trigger;
        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
    }
    setProperties(prop, muteOnChange) {
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map((key) => {
                this.models.map((model) => {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    }
    trigger(eventName, eventProp, successHandler) {
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            let key = this.models.toString().match(/checked|value/) || [];
            let propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                this.$emit('update:' + propKey, eventProp[propKey]);
                this.$emit('modelchanged', eventProp[propKey]);
            }
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp, successHandler);
        }
    }
    render(createElement) {
        return createElement('div', this.$slots.default);
    }
    createSvg(chart) {
        return this.ej2Instances.createSvg(chart);
    }
    export(type, fileName, orientation, controls, width, height, isVertical) {
        return this.ej2Instances.export(type, fileName, orientation, controls, width, height, isVertical);
    }
    print(id) {
        return this.ej2Instances.print(id);
    }
    removeSvg() {
        return this.ej2Instances.removeSvg();
    }
};
BulletChartComponent = __decorate$33([
    EJComponentDecorator({
        props: properties$6,
        model: {
            event: 'modelchanged'
        }
    })
], BulletChartComponent);
const BulletChartPlugin = {
    name: 'ejs-bulletchart',
    install(Vue$$1) {
        Vue$$1.component(BulletChartPlugin.name, BulletChartComponent);
        Vue$$1.component(BulletRangePlugin.name, BulletRangeDirective);
        Vue$$1.component(BulletRangeCollectionPlugin.name, BulletRangeCollectionDirective);
    }
};

export { TrendlinesDirective, TrendlineDirective, TrendlinesPlugin, TrendlinePlugin, SegmentsDirective, SegmentDirective, SegmentsPlugin, SegmentPlugin, SeriesCollectionDirective, SeriesDirective, SeriesCollectionPlugin, SeriesPlugin, StripLinesDirective, StripLineDirective, StripLinesPlugin, StripLinePlugin, CategoriesDirective, CategoryDirective, CategoriesPlugin, CategoryPlugin, MultiLevelLabelsDirective, MultiLevelLabelDirective, MultiLevelLabelsPlugin, MultiLevelLabelPlugin, AxesDirective, AxisDirective, AxesPlugin, AxisPlugin, RowsDirective, RowDirective, RowsPlugin, RowPlugin, ColumnsDirective, ColumnDirective, ColumnsPlugin, ColumnPlugin, AnnotationsDirective, AnnotationDirective, AnnotationsPlugin, AnnotationPlugin, SelectedDataIndexesDirective, SelectedDataIndexDirective, SelectedDataIndexesPlugin, SelectedDataIndexPlugin, IndicatorsDirective, IndicatorDirective, IndicatorsPlugin, IndicatorPlugin, ChartComponent, ChartPlugin, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationSeriesCollectionPlugin, AccumulationSeriesPlugin, AccumulationAnnotationsDirective, AccumulationAnnotationDirective, AccumulationAnnotationsPlugin, AccumulationAnnotationPlugin, AccumulationChartComponent, AccumulationChartPlugin, RangenavigatorSeriesCollectionDirective, RangenavigatorSeriesDirective, RangenavigatorSeriesCollectionPlugin, RangenavigatorSeriesPlugin, RangeNavigatorComponent, RangeNavigatorPlugin, RangeBandSettingsDirective, RangeBandSettingDirective, RangeBandSettingsPlugin, RangeBandSettingPlugin, SparklineComponent, SparklinePlugin, SmithchartSeriesCollectionDirective, SmithchartSeriesDirective, SmithchartSeriesCollectionPlugin, SmithchartSeriesPlugin, SmithchartComponent, SmithchartPlugin, StockChartTrendlinesDirective, StockChartTrendlineDirective, StockChartTrendlinesPlugin, StockChartTrendlinePlugin, StockChartSeriesCollectionDirective, StockChartSeriesDirective, StockChartSeriesCollectionPlugin, StockChartSeriesPlugin, StockChartAxesDirective, StockChartAxisDirective, StockChartAxesPlugin, StockChartAxisPlugin, StockChartRowsDirective, StockChartRowDirective, StockChartRowsPlugin, StockChartRowPlugin, StockChartAnnotationsDirective, StockChartAnnotationDirective, StockChartAnnotationsPlugin, StockChartAnnotationPlugin, StockChartSelectedDataIndexesDirective, StockChartSelectedDataIndexDirective, StockChartSelectedDataIndexesPlugin, StockChartSelectedDataIndexPlugin, StockChartPeriodsDirective, StockChartPeriodDirective, StockChartPeriodsPlugin, StockChartPeriodPlugin, StockEventsDirective, StockEventDirective, StockEventsPlugin, StockEventPlugin, StockChartIndicatorsDirective, StockChartIndicatorDirective, StockChartIndicatorsPlugin, StockChartIndicatorPlugin, StockChartComponent, StockChartPlugin, BulletRangeCollectionDirective, BulletRangeDirective, BulletRangeCollectionPlugin, BulletRangePlugin, BulletChartComponent, BulletChartPlugin };
export * from '@syncfusion/ej2-charts';
//# sourceMappingURL=ej2-vue-charts.es2015.js.map
