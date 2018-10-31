import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { HeatMap } from '@syncfusion/ej2-heatmap';


export const properties: string[] = ['cellSettings', 'dataSource', 'enablePersistence', 'enableRtl', 'height', 'legendSettings', 'locale', 'margin', 'paletteSettings', 'renderingMode', 'showTooltip', 'theme', 'titleSettings', 'width', 'xAxis', 'yAxis', 'cellClick', 'created', 'load', 'tooltipRender'];
export const modelProps: string[] = [];

/**
 * Represents Vuejs HeatMap Component
 * ```vue
 * <ejs-heatmap></ejs-heatmap>
 * ```
 */
@EJComponentDecorator({
    props: properties
})
export class HeatMapComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = true;
    protected hasInjectedModules: boolean = true;
    public tagMapper: { [key: string]: Object } = {};
    public tagNameMapper: Object = {};
    
    constructor() {
        super();
        this.ej2Instances = new HeatMap({});
        this.bindProperties();
    }

    public render(createElement: any) {
        return createElement('div', (this as any).$slots.default);
    }
    
    public heatMapMouseClick(e: Object): boolean {
        return this.ej2Instances.heatMapMouseClick(e);
    }

    public refresh(): void {
        return this.ej2Instances.refresh();
    }
}

export const HeatMapPlugin = {
    name: 'ejs-heatmap',
    install(Vue: any) {
        Vue.component(HeatMapPlugin.name, HeatMapComponent);

    }
}
