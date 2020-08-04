import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { QRCodeGenerator } from '@syncfusion/ej2-barcode-generator';


export const properties: string[] = ['backgroundColor', 'displayText', 'enablePersistence', 'enableRtl', 'errorCorrectionLevel', 'foreColor', 'height', 'locale', 'margin', 'mode', 'value', 'version', 'width', 'xDimension', 'invalid'];
export const modelProps: string[] = [];

/**
 * Represents vue QRCode Component
 * ```html
 * <ejs-qrcode-generator></ejs-qrcode-generator>
 * ```
 */
@EJComponentDecorator({
    props: properties
})
export class QRCodeGeneratorComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = false;
    protected hasInjectedModules: boolean = false;
    public tagMapper: { [key: string]: Object } = {};
    public tagNameMapper: Object = {};
    
    constructor() {
        super();
        this.ej2Instances = new QRCodeGenerator({});
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
    
    public exportAsBase64Image(barcodeExportType: Object): Object {
        return this.ej2Instances.exportAsBase64Image(barcodeExportType);
    }

    public exportImage(filename: string, barcodeExportType: Object): void {
        return this.ej2Instances.exportImage(filename, barcodeExportType);
    }
}

export const QRCodeGeneratorPlugin = {
    name: 'ejs-qrcodegenerator',
    install(Vue: any) {
        Vue.component(QRCodeGeneratorPlugin.name, QRCodeGeneratorComponent);

    }
}
