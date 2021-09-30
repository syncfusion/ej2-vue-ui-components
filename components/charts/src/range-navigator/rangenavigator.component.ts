import { Options } from 'vue-class-component';
import { isUndefined } from '@syncfusion/ej2-base';
import { ComponentBase, EJComponentDecorator, getProps, allVue, gh } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined, getValue } from '@syncfusion/ej2-base';

import { RangeNavigator } from '@syncfusion/ej2-charts';
import { RangenavigatorSeriesCollectionDirective, RangenavigatorSeriesDirective, RangenavigatorSeriesCollectionPlugin, RangenavigatorSeriesPlugin } from './series.directive'


// {{VueImport}}
export const properties: string[] = ['allowIntervalData', 'allowSnapping', 'animationDuration', 'background', 'dataSource', 'disableRangeSelector', 'enableDeferredUpdate', 'enableGrouping', 'enablePersistence', 'enableRtl', 'groupBy', 'height', 'interval', 'intervalType', 'labelFormat', 'labelIntersectAction', 'labelPosition', 'labelStyle', 'locale', 'logBase', 'majorGridLines', 'majorTickLines', 'margin', 'maximum', 'minimum', 'navigatorBorder', 'navigatorStyleSettings', 'periodSelectorSettings', 'query', 'secondaryLabelAlignment', 'series', 'skeleton', 'skeletonType', 'theme', 'tickPosition', 'tooltip', 'useGroupingSeparator', 'value', 'valueType', 'width', 'xName', 'yName', 'beforePrint', 'changed', 'labelRender', 'load', 'loaded', 'resized', 'selectorRender', 'tooltipRender'];
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
 * Represents Vuejs RangeNavigator Component
 * ```vue
 * <ejs-rangenavigator></ejs-rangenavigator>
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
    emits: emitProbs
}) End */

export class RangeNavigatorComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = true;
    protected hasInjectedModules: boolean = true;
    public tagMapper: { [key: string]: Object } = {"e-rangenavigator-series-collection":"e-rangenavigator-series"};
    public tagNameMapper: Object = {"e-rangenavigator-series-collection":"e-series"};
    public isVue3: boolean;
    public templateCollection: any;
    constructor() {
        super(arguments);
        this.isVue3 = !isExecute;
        this.ej2Instances = new RangeNavigator({});        this.ej2Instances._trigger = this.ej2Instances.trigger;
        this.ej2Instances.trigger = this.trigger;

        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
        this.ej2Instances.clearTemplate = this.clearTemplate;
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
                } else {
                    (this as any).$emit('update:'+ propKey, eventProp[propKey]);
                    (this as any).$emit('modelchanged', eventProp[propKey]);
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
    
    public createSecondaryElement(): void {
        return this.ej2Instances.createSecondaryElement();
    }

    public export(type: Object, fileName: string, orientation?: Object, controls?: undefined[], width?: number, height?: number, isVertical?: boolean): void {
        return this.ej2Instances.export(type, fileName, orientation, controls, width, height, isVertical);
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
