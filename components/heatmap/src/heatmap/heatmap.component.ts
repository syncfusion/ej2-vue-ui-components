import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { getValue } from '@syncfusion/ej2-base';

import { HeatMap } from '@syncfusion/ej2-heatmap';


export const properties: string[] = ['isLazyUpdate', 'plugins', 'allowSelection', 'backgroundColor', 'cellSettings', 'dataSource', 'dataSourceSettings', 'enablePersistence', 'enableRtl', 'height', 'legendSettings', 'locale', 'margin', 'paletteSettings', 'renderingMode', 'showTooltip', 'theme', 'titleSettings', 'tooltipSettings', 'width', 'xAxis', 'yAxis', 'cellClick', 'cellRender', 'cellSelected', 'created', 'legendRender', 'load', 'loaded', 'resized', 'tooltipRender'];
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
    public templateCollection: any;
    constructor() {
        super(arguments);
        this.ej2Instances = new HeatMap({});
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
    public custom(): void {
        this.updated();
    }
    
    public clearSelection(): void {
        return this.ej2Instances.clearSelection();
    }

    public export(type: Object, fileName: string, orientation?: Object): void {
        return this.ej2Instances.export(type, fileName, orientation);
    }

    public heatMapMouseClick(e: Object): boolean {
        return this.ej2Instances.heatMapMouseClick(e);
    }

    public print(): void {
        return this.ej2Instances.print();
    }

    public refresh(): void {
        return this.ej2Instances.refresh();
    }

    public refreshBound(): void {
        return this.ej2Instances.refreshBound();
    }
}

export const HeatMapPlugin = {
    name: 'ejs-heatmap',
    install(Vue: any) {
        Vue.component(HeatMapPlugin.name, HeatMapComponent);

    }
}
