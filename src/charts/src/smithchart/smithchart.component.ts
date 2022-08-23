import { Options } from 'vue-class-component';
import { ComponentBase, EJComponentDecorator, getProps, allVue, gh } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined, getValue } from '@syncfusion/ej2-base';

import { Smithchart } from '@syncfusion/ej2-charts';
import { SmithchartSeriesCollectionDirective, SmithchartSeriesDirective, SmithchartSeriesCollectionPlugin, SmithchartSeriesPlugin } from './series.directive'


// {{VueImport}}
export const properties: string[] = ['isLazyUpdate', 'plugins', 'background', 'border', 'elementSpacing', 'enablePersistence', 'enableRtl', 'font', 'height', 'horizontalAxis', 'legendSettings', 'locale', 'margin', 'radialAxis', 'radius', 'renderType', 'series', 'theme', 'title', 'width', 'animationComplete', 'axisLabelRender', 'beforePrint', 'legendRender', 'load', 'loaded', 'seriesRender', 'subtitleRender', 'textRender', 'titleRender', 'tooltipRender'];
export const modelProps: string[] = [];

export const testProp: any = getProps({props: properties});
export const props = testProp[0];
export const watch = testProp[1];

export const emitProbs: any = Object.keys(watch);
emitProbs.push('modelchanged', 'update:modelValue');
for (let props of modelProps) {
    emitProbs.push(
        'update:'+props
    );
}

export const isExecute: any = gh ? false : true;

/**
 * Represents Vuejs Smithchart Component
 * ```vue
 * <ejs-smithchart></ejs-smithchart>
 * ```
 */
@EJComponentDecorator({
    props: properties
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

export class SmithchartComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = true;
    protected hasInjectedModules: boolean = true;
    public tagMapper: { [key: string]: Object } = {"e-seriesCollection":"e-series"};
    public tagNameMapper: Object = {"e-seriesCollection":"e-series"};
    public isVue3: boolean;
    public templateCollection: any;
    constructor() {
        super(arguments);
        this.isVue3 = !isExecute;
        this.ej2Instances = new Smithchart({});
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

    public smithchartOnResize(): boolean {
        return this.ej2Instances.smithchartOnResize();
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