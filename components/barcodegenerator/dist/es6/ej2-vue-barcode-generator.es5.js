import { BarcodeGenerator, DataMatrixGenerator, QRCodeGenerator } from '@syncfusion/ej2-barcode-generator';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var properties = ['backgroundColor', 'displayText', 'enableCheckSum', 'enablePersistence', 'enableRtl', 'foreColor', 'height', 'locale', 'margin', 'mode', 'type', 'value', 'width', 'invalid'];
var modelProps = [];
/**
 * Represents vue Barcode Component
 * ```html
 * <ejs-barcode-generator></ejs-barcode-generator>
 * ```
 */
var BarcodeGeneratorComponent = /** @__PURE__ @class */ (function (_super) {
    __extends(BarcodeGeneratorComponent, _super);
    function BarcodeGeneratorComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = false;
        _this.hasInjectedModules = false;
        _this.tagMapper = {};
        _this.tagNameMapper = {};
        _this.ej2Instances = new BarcodeGenerator({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    BarcodeGeneratorComponent.prototype.setProperties = function (prop, muteOnChange) {
        var _this = this;
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map(function (key) {
                _this.models.map(function (model) {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        _this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    };
    BarcodeGeneratorComponent.prototype.render = function (createElement) {
        return createElement('div', this.$slots.default);
    };
    BarcodeGeneratorComponent.prototype.exportAsBase64Image = function (exportType) {
        return this.ej2Instances.exportAsBase64Image(exportType);
    };
    BarcodeGeneratorComponent.prototype.exportImage = function (filename, exportType) {
        return this.ej2Instances.exportImage(filename, exportType);
    };
    BarcodeGeneratorComponent = __decorate([
        EJComponentDecorator({
            props: properties
        })
    ], BarcodeGeneratorComponent);
    return BarcodeGeneratorComponent;
}(ComponentBase));
var BarcodeGeneratorPlugin = {
    name: 'ejs-barcodegenerator',
    install: function (Vue) {
        Vue.component(BarcodeGeneratorPlugin.name, BarcodeGeneratorComponent);
    }
};

var __extends$1 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var properties$1 = ['backgroundColor', 'displayText', 'enablePersistence', 'enableRtl', 'errorCorrectionLevel', 'foreColor', 'height', 'locale', 'margin', 'mode', 'value', 'version', 'width', 'xDimension', 'invalid'];
var modelProps$1 = [];
/**
 * Represents vue QRCode Component
 * ```html
 * <ejs-qrcode-generator></ejs-qrcode-generator>
 * ```
 */
var QRCodeGeneratorComponent = /** @__PURE__ @class */ (function (_super) {
    __extends$1(QRCodeGeneratorComponent, _super);
    function QRCodeGeneratorComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties$1;
        _this.models = modelProps$1;
        _this.hasChildDirective = false;
        _this.hasInjectedModules = false;
        _this.tagMapper = {};
        _this.tagNameMapper = {};
        _this.ej2Instances = new QRCodeGenerator({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    QRCodeGeneratorComponent.prototype.setProperties = function (prop, muteOnChange) {
        var _this = this;
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map(function (key) {
                _this.models.map(function (model) {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        _this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    };
    QRCodeGeneratorComponent.prototype.render = function (createElement) {
        return createElement('div', this.$slots.default);
    };
    QRCodeGeneratorComponent.prototype.exportAsBase64Image = function (barcodeExportType) {
        return this.ej2Instances.exportAsBase64Image(barcodeExportType);
    };
    QRCodeGeneratorComponent.prototype.exportImage = function (filename, barcodeExportType) {
        return this.ej2Instances.exportImage(filename, barcodeExportType);
    };
    QRCodeGeneratorComponent = __decorate$1([
        EJComponentDecorator({
            props: properties$1
        })
    ], QRCodeGeneratorComponent);
    return QRCodeGeneratorComponent;
}(ComponentBase));
var QRCodeGeneratorPlugin = {
    name: 'ejs-qrcodegenerator',
    install: function (Vue) {
        Vue.component(QRCodeGeneratorPlugin.name, QRCodeGeneratorComponent);
    }
};

var __extends$2 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var properties$2 = ['backgroundColor', 'displayText', 'enablePersistence', 'enableRtl', 'encoding', 'foreColor', 'height', 'locale', 'margin', 'mode', 'size', 'value', 'width', 'xDimension', 'invalid'];
var modelProps$2 = [];
/**
 * Represents vue DataMatrix Component
 * ```html
 * <ejs-datamatrix-generator></ejs-datamatrix-generator>
 * ```
 */
var DataMatrixGeneratorComponent = /** @__PURE__ @class */ (function (_super) {
    __extends$2(DataMatrixGeneratorComponent, _super);
    function DataMatrixGeneratorComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties$2;
        _this.models = modelProps$2;
        _this.hasChildDirective = false;
        _this.hasInjectedModules = false;
        _this.tagMapper = {};
        _this.tagNameMapper = {};
        _this.ej2Instances = new DataMatrixGenerator({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    DataMatrixGeneratorComponent.prototype.setProperties = function (prop, muteOnChange) {
        var _this = this;
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map(function (key) {
                _this.models.map(function (model) {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        _this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    };
    DataMatrixGeneratorComponent.prototype.render = function (createElement) {
        return createElement('div', this.$slots.default);
    };
    DataMatrixGeneratorComponent.prototype.exportAsBase64Image = function (barcodeExportType) {
        return this.ej2Instances.exportAsBase64Image(barcodeExportType);
    };
    DataMatrixGeneratorComponent.prototype.exportImage = function (fileName, exportType) {
        return this.ej2Instances.exportImage(fileName, exportType);
    };
    DataMatrixGeneratorComponent = __decorate$2([
        EJComponentDecorator({
            props: properties$2
        })
    ], DataMatrixGeneratorComponent);
    return DataMatrixGeneratorComponent;
}(ComponentBase));
var DataMatrixGeneratorPlugin = {
    name: 'ejs-datamatrixgenerator',
    install: function (Vue) {
        Vue.component(DataMatrixGeneratorPlugin.name, DataMatrixGeneratorComponent);
    }
};

export { BarcodeGeneratorComponent, BarcodeGeneratorPlugin, QRCodeGeneratorComponent, QRCodeGeneratorPlugin, DataMatrixGeneratorComponent, DataMatrixGeneratorPlugin };
export * from '@syncfusion/ej2-barcode-generator';
//# sourceMappingURL=ej2-vue-barcode-generator.es5.js.map
