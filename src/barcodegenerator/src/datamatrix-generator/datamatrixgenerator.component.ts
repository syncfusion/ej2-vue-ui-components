import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { DataMatrixGenerator } from '@syncfusion/ej2-barcode-generator';


export const properties: string[] = ['backgroundColor', 'displayText', 'enablePersistence', 'enableRtl', 'encoding', 'foreColor', 'height', 'locale', 'margin', 'mode', 'size', 'value', 'width', 'xDimension', 'invalid'];
export const modelProps: string[] = [];

/**
 * Represents vue DataMatrix Component
 * ```html
 * <ejs-datamatrix-generator></ejs-datamatrix-generator>
 * ```
 */
@EJComponentDecorator({
    props: properties
})
export class DataMatrixGeneratorComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = false;
    protected hasInjectedModules: boolean = false;
    public tagMapper: { [key: string]: Object } = {};
    public tagNameMapper: Object = {};
    
    constructor() {
        super();
        this.ej2Instances = new DataMatrixGenerator({});
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
    
}

export const DataMatrixGeneratorPlugin = {
    name: 'ejs-datamatrixgenerator',
    install(Vue: any) {
        Vue.component(DataMatrixGeneratorPlugin.name, DataMatrixGeneratorComponent);

    }
}
