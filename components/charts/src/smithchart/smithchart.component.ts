import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { Smithchart } from '@syncfusion/ej2-charts';
import { SmithchartSeriesCollectionDirective, SmithchartSeriesDirective, SmithchartSeriesCollectionPlugin, SmithchartSeriesPlugin } from './series.directive'


export const properties: string[] = ['background', 'border', 'elementSpacing', 'enablePersistence', 'enableRtl', 'font', 'height', 'horizontalAxis', 'legendSettings', 'locale', 'margin', 'radialAxis', 'radius', 'renderType', 'series', 'theme', 'title', 'width', 'animationComplete', 'axisLabelRender', 'beforePrint', 'legendRender', 'load', 'loaded', 'seriesRender', 'subtitleRender', 'textRender', 'titleRender', 'tooltipRender'];
export const modelProps: string[] = [];

/**
 * Represents Vuejs Smithchart Component
 * ```vue
 * <ejs-smithchart></ejs-smithchart>
 * ```
 */
@EJComponentDecorator({
    props: properties
})
export class SmithchartComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = true;
    protected hasInjectedModules: boolean = true;
    public tagMapper: { [key: string]: Object } = {"e-seriesCollection":"e-series"};
    public tagNameMapper: Object = {"e-seriesCollection":"e-series"};
    
    constructor() {
        super();
        this.ej2Instances = new Smithchart({});
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

    public render(createElement: any) {
        return createElement('div', (this as any).$slots.default);
    }
    
    public export(type: Object, fileName: string, orientation?: Object): void {
        return this.ej2Instances.export(type, fileName, orientation);
    }

    public mouseEnd(e: Object): void {
        return this.ej2Instances.mouseEnd(e);
    }

    public mouseMove(e: Object): void {
        return this.ej2Instances.mouseMove(e);
    }

    public print(id?: string[] | string | Object): void {
        return this.ej2Instances.print(id);
    }

    public smithchartOnClick(e: Object): void {
        return this.ej2Instances.smithchartOnClick(e);
    }

    public smithchartOnResize(e: Object): boolean {
        return this.ej2Instances.smithchartOnResize(e);
    }
}

export const SmithchartPlugin = {
    name: 'ejs-smithchart',
    install(Vue: any) {
        Vue.component(SmithchartPlugin.name, SmithchartComponent);
        Vue.component(SmithchartSeriesPlugin.name, SmithchartSeriesDirective);
        Vue.component(SmithchartSeriesCollectionPlugin.name, SmithchartSeriesCollectionDirective);

    }
}
