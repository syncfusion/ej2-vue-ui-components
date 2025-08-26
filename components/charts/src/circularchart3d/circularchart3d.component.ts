import { ComponentBase, gh, getProps, isExecute, vueDefineComponent, DefineVueComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined, getValue } from '@syncfusion/ej2-base';
import { isUndefined } from '@syncfusion/ej2-base';

import { CircularChart3D, CircularChart3DModel } from '@syncfusion/ej2-charts';
import { CircularChart3DSeriesCollectionDirective, CircularChart3DSeriesDirective, CircularChart3DSeriesCollectionPlugin, CircularChart3DSeriesPlugin } from './series.directive'
import { CircularChart3DSelectedDataIndexesDirective, CircularChart3DSelectedDataIndexDirective, CircularChart3DSelectedDataIndexesPlugin, CircularChart3DSelectedDataIndexPlugin } from './selecteddataindexes.directive'


export const properties: string[] = ['isLazyUpdate', 'plugins', 'background', 'backgroundImage', 'border', 'dataSource', 'depth', 'enableAnimation', 'enableExport', 'enablePersistence', 'enableRotation', 'enableRtl', 'height', 'highlightColor', 'highlightMode', 'highlightPattern', 'isMultiSelect', 'legendSettings', 'locale', 'margin', 'rotation', 'selectedDataIndexes', 'selectionMode', 'selectionPattern', 'series', 'subTitle', 'subTitleStyle', 'theme', 'tilt', 'title', 'titleStyle', 'tooltip', 'useGroupingSeparator', 'width', 'afterExport', 'beforeExport', 'beforePrint', 'beforeResize', 'circularChart3DMouseClick', 'circularChart3DMouseDown', 'circularChart3DMouseLeave', 'circularChart3DMouseMove', 'circularChart3DMouseUp', 'legendClick', 'legendRender', 'load', 'loaded', 'pointClick', 'pointMove', 'pointRender', 'resized', 'selectionComplete', 'seriesRender', 'textRender', 'tooltipRender'];
export const modelProps: string[] = ['dataSource'];

export const testProp: any = getProps({props: properties});
export const props = testProp[0], watch = testProp[1], emitProbs: any = Object.keys(watch);
emitProbs.push('modelchanged', 'update:modelValue');
for (let props of modelProps) { emitProbs.push('update:'+props) }

/**
 * Represents Vuejs Circular 3D Chart Component
 * ```vue
 * <ejs-circularchart3d></ejs-circularchart3d>
 * ```
 */
export let CircularChart3DComponent: DefineVueComponent<CircularChart3DModel> =  vueDefineComponent({
    name: 'CircularChart3DComponent',
    mixins: [ComponentBase],
    props: props,
    watch: watch,
    emits: emitProbs,
    model: { event: 'modelchanged' },
    provide() { return { custom: this.custom } },
    data() {
        return {
            ej2Instances: new CircularChart3D({}) as any,
            propKeys: properties as string[],
            models: modelProps as string[],
            hasChildDirective: true as boolean,
            hasInjectedModules: true as boolean,
            tagMapper: {"e-circularchart3d-series-collection":"e-circularchart3d-series","e-circularchart3d-selecteddataindexes":"e-circularchart3d-selecteddataindex"} as { [key: string]: Object },
            tagNameMapper: {"e-circularchart3d-series-collection":"e-series","e-circularchart3d-selecteddataindexes":"e-selectedDataIndexes"} as Object,
            isVue3: !isExecute as boolean,
            templateCollection: {} as any,
        }
    },
    created() {
        this.ej2Instances._trigger = this.ej2Instances.trigger;
        this.ej2Instances.trigger = this.trigger;
        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
        this.ej2Instances.clearTemplate = this.clearTemplate;
        this.updated = this.updated;
    },
    render(createElement: any) {
        let h: any = !isExecute ? gh : createElement;
        let slots: any = null;
        if(!isNullOrUndefined((this as any).$slots.default)) {
            slots = !isExecute ? (this as any).$slots.default() : (this as any).$slots.default;
        }
        return h('div', slots);
    },
    methods: {
        clearTemplate(templateNames?: string[]): any {
            if (!templateNames){ templateNames = Object.keys(this.templateCollection || {}) }
            if (templateNames.length &&  this.templateCollection) {
                for (let tempName of templateNames){
                    let elementCollection: any = this.templateCollection[tempName];
                    if(elementCollection && elementCollection.length) {
                        for(let ele of elementCollection) {
                            this.destroyPortals(ele);
                        }
                        delete this.templateCollection[tempName];
                    }
                }
            }
        },
        setProperties(prop: any, muteOnChange: boolean): void {
            if(this.isVue3) { this.models = !this.models ? this.ej2Instances.referModels : this.models }
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
        },        
        trigger(eventName: string, eventProp: {[key:string]:Object}, successHandler?: Function): void {
            if(!isExecute) { this.models = !this.models ? this.ej2Instances.referModels : this.models }
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
        },

        custom(): void {
            this.updated();
        },
        export(type: Object, fileName: string): void {
            return this.ej2Instances.export(type, fileName);
        },
        pdfExport(fileName: string, orientation?: Object, controls?: Object[], width?: number, height?: number, isVertical?: boolean, header?: Object, footer?: Object, exportToMultiplePage?: boolean): void {
            return this.ej2Instances.pdfExport(fileName, orientation, controls, width, height, isVertical, header, footer, exportToMultiplePage);
        },
        print(id?: string[] | string | Object): void {
            return this.ej2Instances.print(id);
        },
    }
});

export type CircularChart3DComponent = typeof ComponentBase & {
    ej2Instances: CircularChart3D;
    isVue3: boolean;
    isLazyUpdate: Boolean;
    plugins: any[];
    propKeys: string[];
    models: string[];
    hasChildDirective: boolean;
    tagMapper: {
        [key: string]: Object;
    };
    tagNameMapper: Object;
    setProperties(prop: any, muteOnChange: boolean): void;
    trigger(eventName: string, eventProp: {
        [key: string]: Object;
    }, successHandler?: Function): void;
    export(type: Object, fileName: string): void;
    pdfExport(fileName: string, orientation?: Object, controls?: Object[], width?: number, height?: number, isVertical?: boolean, header?: Object, footer?: Object, exportToMultiplePage?: boolean): void;
    print(id?: string[] | string | Object): void
};

export const CircularChart3DPlugin = {
    name: 'ejs-circularchart3d',
    install(Vue: any) {
        Vue.component(CircularChart3DPlugin.name, CircularChart3DComponent);
        Vue.component(CircularChart3DSeriesPlugin.name, CircularChart3DSeriesDirective);
        Vue.component(CircularChart3DSeriesCollectionPlugin.name, CircularChart3DSeriesCollectionDirective);
        Vue.component(CircularChart3DSelectedDataIndexPlugin.name, CircularChart3DSelectedDataIndexDirective);
        Vue.component(CircularChart3DSelectedDataIndexesPlugin.name, CircularChart3DSelectedDataIndexesDirective);

    }
}