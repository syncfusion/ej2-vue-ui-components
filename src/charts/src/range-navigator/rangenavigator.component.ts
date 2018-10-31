import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { RangeNavigator } from '@syncfusion/ej2-charts';
import { RangenavigatorSeriesCollectionDirective, RangenavigatorSeriesDirective, RangenavigatorSeriesCollectionPlugin, RangenavigatorSeriesPlugin } from './series.directive'


export const properties: string[] = ['allowSnapping', 'animationDuration', 'dataSource', 'disableRangeSelector', 'enableDeferredUpdate', 'enableGrouping', 'enablePersistence', 'enableRtl', 'groupBy', 'height', 'interval', 'intervalType', 'labelFormat', 'labelIntersectAction', 'labelPosition', 'labelStyle', 'locale', 'logBase', 'majorGridLines', 'majorTickLines', 'margin', 'maximum', 'minimum', 'navigatorBorder', 'navigatorStyleSettings', 'periodSelectorSettings', 'query', 'secondaryLabelAlignment', 'series', 'skeleton', 'skeletonType', 'theme', 'tickPosition', 'tooltip', 'useGroupingSeparator', 'value', 'valueType', 'width', 'xName', 'yName', 'beforePrint', 'changed', 'labelRender', 'load', 'loaded', 'resized', 'selectorRender', 'tooltipRender'];
export const modelProps: string[] = [];


@EJComponentDecorator({
    props: properties
})
export class RangeNavigatorComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = true;
    protected hasInjectedModules: boolean = true;
    public tagMapper: { [key: string]: Object } = {"e-rangenavigator-series-collection":"e-rangenavigator-series"};
    public tagNameMapper: Object = {"e-rangenavigator-series-collection":"e-series"};
    
    constructor() {
        super();
        this.ej2Instances = new RangeNavigator({});
        this.bindProperties();
    }

    public render(createElement: any) {
        return createElement('div', (this as any).$slots.default);
    }
    
    public createSecondaryElement(): void {
        return this.ej2Instances.createSecondaryElement();
    }

    public export(type: Object, fileName: string, orientation?: Object, controls?: undefined[], width?: number, height?: number): void {
        return this.ej2Instances.export(type, fileName, orientation, controls, width, height);
    }

    public print(id?: string[] | string | Object): void {
        return this.ej2Instances.print(id);
    }

    public renderChart(): void {
        return this.ej2Instances.renderChart();
    }
}

export const RangeNavigatorPlugin = {
    name: 'ejs-rangenavigator',
    install(Vue: any) {
        Vue.component(RangeNavigatorPlugin.name, RangeNavigatorComponent);
        Vue.component(RangenavigatorSeriesPlugin.name, RangenavigatorSeriesDirective);
        Vue.component(RangenavigatorSeriesCollectionPlugin.name, RangenavigatorSeriesCollectionDirective);

    }
}
