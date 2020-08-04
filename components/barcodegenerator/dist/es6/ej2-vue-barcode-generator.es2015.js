import { BarcodeGenerator, DataMatrixGenerator, QRCodeGenerator } from '@syncfusion/ej2-barcode-generator';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties = ['backgroundColor', 'displayText', 'enableCheckSum', 'enablePersistence', 'enableRtl', 'foreColor', 'height', 'locale', 'margin', 'mode', 'type', 'value', 'width', 'invalid'];
const modelProps = [];
/**
 * Represents vue Barcode Component
 * ```html
 * <ejs-barcode-generator></ejs-barcode-generator>
 * ```
 */
let BarcodeGeneratorComponent = class BarcodeGeneratorComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties;
        this.models = modelProps;
        this.hasChildDirective = false;
        this.hasInjectedModules = false;
        this.tagMapper = {};
        this.tagNameMapper = {};
        this.ej2Instances = new BarcodeGenerator({});
        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
    }
    setProperties(prop, muteOnChange) {
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map((key) => {
                this.models.map((model) => {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    }
    render(createElement) {
        return createElement('div', this.$slots.default);
    }
    exportAsBase64Image(exportType) {
        return this.ej2Instances.exportAsBase64Image(exportType);
    }
    exportImage(filename, exportType) {
        return this.ej2Instances.exportImage(filename, exportType);
    }
};
BarcodeGeneratorComponent = __decorate([
    EJComponentDecorator({
        props: properties
    })
], BarcodeGeneratorComponent);
const BarcodeGeneratorPlugin = {
    name: 'ejs-barcodegenerator',
    install(Vue) {
        Vue.component(BarcodeGeneratorPlugin.name, BarcodeGeneratorComponent);
    }
};

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties$1 = ['backgroundColor', 'displayText', 'enablePersistence', 'enableRtl', 'errorCorrectionLevel', 'foreColor', 'height', 'locale', 'margin', 'mode', 'value', 'version', 'width', 'xDimension', 'invalid'];
const modelProps$1 = [];
/**
 * Represents vue QRCode Component
 * ```html
 * <ejs-qrcode-generator></ejs-qrcode-generator>
 * ```
 */
let QRCodeGeneratorComponent = class QRCodeGeneratorComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties$1;
        this.models = modelProps$1;
        this.hasChildDirective = false;
        this.hasInjectedModules = false;
        this.tagMapper = {};
        this.tagNameMapper = {};
        this.ej2Instances = new QRCodeGenerator({});
        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
    }
    setProperties(prop, muteOnChange) {
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map((key) => {
                this.models.map((model) => {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    }
    render(createElement) {
        return createElement('div', this.$slots.default);
    }
    exportAsBase64Image(barcodeExportType) {
        return this.ej2Instances.exportAsBase64Image(barcodeExportType);
    }
    exportImage(filename, barcodeExportType) {
        return this.ej2Instances.exportImage(filename, barcodeExportType);
    }
};
QRCodeGeneratorComponent = __decorate$1([
    EJComponentDecorator({
        props: properties$1
    })
], QRCodeGeneratorComponent);
const QRCodeGeneratorPlugin = {
    name: 'ejs-qrcodegenerator',
    install(Vue) {
        Vue.component(QRCodeGeneratorPlugin.name, QRCodeGeneratorComponent);
    }
};

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties$2 = ['backgroundColor', 'displayText', 'enablePersistence', 'enableRtl', 'encoding', 'foreColor', 'height', 'locale', 'margin', 'mode', 'size', 'value', 'width', 'xDimension', 'invalid'];
const modelProps$2 = [];
/**
 * Represents vue DataMatrix Component
 * ```html
 * <ejs-datamatrix-generator></ejs-datamatrix-generator>
 * ```
 */
let DataMatrixGeneratorComponent = class DataMatrixGeneratorComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties$2;
        this.models = modelProps$2;
        this.hasChildDirective = false;
        this.hasInjectedModules = false;
        this.tagMapper = {};
        this.tagNameMapper = {};
        this.ej2Instances = new DataMatrixGenerator({});
        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
    }
    setProperties(prop, muteOnChange) {
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map((key) => {
                this.models.map((model) => {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    }
    render(createElement) {
        return createElement('div', this.$slots.default);
    }
    exportAsBase64Image(barcodeExportType) {
        return this.ej2Instances.exportAsBase64Image(barcodeExportType);
    }
    exportImage(fileName, exportType) {
        return this.ej2Instances.exportImage(fileName, exportType);
    }
};
DataMatrixGeneratorComponent = __decorate$2([
    EJComponentDecorator({
        props: properties$2
    })
], DataMatrixGeneratorComponent);
const DataMatrixGeneratorPlugin = {
    name: 'ejs-datamatrixgenerator',
    install(Vue) {
        Vue.component(DataMatrixGeneratorPlugin.name, DataMatrixGeneratorComponent);
    }
};

export { BarcodeGeneratorComponent, BarcodeGeneratorPlugin, QRCodeGeneratorComponent, QRCodeGeneratorPlugin, DataMatrixGeneratorComponent, DataMatrixGeneratorPlugin };
export * from '@syncfusion/ej2-barcode-generator';
//# sourceMappingURL=ej2-vue-barcode-generator.es2015.js.map
