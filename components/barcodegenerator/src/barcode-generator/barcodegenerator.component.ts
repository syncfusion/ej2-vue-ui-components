import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { BarcodeGenerator } from '@syncfusion/ej2-barcode-generator';


export const properties: string[] = ['backgroundColor', 'displayText', 'enableCheckSum', 'enablePersistence', 'enableRtl', 'foreColor', 'height', 'locale', 'margin', 'mode', 'type', 'value', 'width', 'invalid'];
export const modelProps: string[] = [];

/**
 * Represents vue Barcode Component
 * ```html
 * <ejs-barcode-generator></ejs-barcode-generator>
 * ```
 */
@EJComponentDecorator({
    props: properties
})
export class BarcodeGeneratorComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = false;
    protected hasInjectedModules: boolean = false;
    public tagMapper: { [key: string]: Object } = {};
    public tagNameMapper: Object = {};
    
    constructor() {
        super();
        this.ej2Instances = new BarcodeGenerator({});
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
    
    public exportAsBase64Image(exportType: Object): Object {
        return this.ej2Instances.exportAsBase64Image(exportType);
    }

    public exportImage(filename: string, exportType: Object): void {
        return this.ej2Instances.exportImage(filename, exportType);
    }
}

export const BarcodeGeneratorPlugin = {
    name: 'ejs-barcodegenerator',
    install(Vue: any) {
        Vue.component(BarcodeGeneratorPlugin.name, BarcodeGeneratorComponent);

    }
}
