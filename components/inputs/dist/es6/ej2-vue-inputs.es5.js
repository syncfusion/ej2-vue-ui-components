import { ColorPicker, MaskedTextBox, NumericTextBox, Slider, TextBox, Uploader } from '@syncfusion/ej2-inputs';
import { isUndefined } from '@syncfusion/ej2-base';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import Vue from 'vue';

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
var properties = ['cssClass', 'enablePersistence', 'enableRtl', 'enabled', 'floatLabelType', 'htmlAttributes', 'locale', 'multiline', 'placeholder', 'readonly', 'showClearButton', 'type', 'value', 'blur', 'change', 'created', 'destroyed', 'focus', 'input'];
var modelProps = ['value'];
/**
 * Represents the Essential JS 2 VueJS TextBox Component
 * ```html
 * <ejs-textbox v-bind:value='value'></ejs-textbox>
 * ```
 */
var TextBoxComponent = /** @__PURE__ @class */ (function (_super) {
    __extends(TextBoxComponent, _super);
    function TextBoxComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = false;
        _this.hasInjectedModules = false;
        _this.tagMapper = {};
        _this.tagNameMapper = {};
        _this.ej2Instances = new TextBox({});
        _this.ej2Instances._trigger = _this.ej2Instances.trigger;
        _this.ej2Instances.trigger = _this.trigger;
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    TextBoxComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    TextBoxComponent.prototype.trigger = function (eventName, eventProp, successHandler) {
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/checked|value/) || [];
            var propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                this.$emit('update:' + propKey, eventProp[propKey]);
                this.$emit('modelchanged', eventProp[propKey]);
            }
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp, successHandler);
        }
    };
    TextBoxComponent.prototype.render = function (createElement) {
        return createElement('input', this.$slots.default);
    };
    TextBoxComponent.prototype.addAttributes = function (attributes) {
        return this.ej2Instances.addAttributes(attributes);
    };
    TextBoxComponent.prototype.focusIn = function () {
        return this.ej2Instances.focusIn();
    };
    TextBoxComponent.prototype.focusOut = function () {
        return this.ej2Instances.focusOut();
    };
    TextBoxComponent.prototype.removeAttributes = function (attributes) {
        return this.ej2Instances.removeAttributes(attributes);
    };
    TextBoxComponent = __decorate([
        EJComponentDecorator({
            props: properties,
            model: {
                event: 'modelchanged'
            }
        })
    ], TextBoxComponent);
    return TextBoxComponent;
}(ComponentBase));
var TextBoxPlugin = {
    name: 'ejs-textbox',
    install: function (Vue$$1) {
        Vue$$1.component(TextBoxPlugin.name, TextBoxComponent);
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
var properties$1 = ['cssClass', 'currency', 'currencyCode', 'decimals', 'enablePersistence', 'enableRtl', 'enabled', 'floatLabelType', 'format', 'htmlAttributes', 'locale', 'max', 'min', 'placeholder', 'readonly', 'showClearButton', 'showSpinButton', 'step', 'strictMode', 'validateDecimalOnType', 'value', 'width', 'blur', 'change', 'created', 'destroyed', 'focus'];
var modelProps$1 = ['value'];
/**
 * Represents the Essential JS 2 VueJS NumericTextBox Component
 * ```html
 * <ejs-numerictextbox v-bind:value='value'></ejs-numerictextbox>
 * ```
 */
var NumericTextBoxComponent = /** @__PURE__ @class */ (function (_super) {
    __extends$1(NumericTextBoxComponent, _super);
    function NumericTextBoxComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties$1;
        _this.models = modelProps$1;
        _this.hasChildDirective = false;
        _this.hasInjectedModules = false;
        _this.tagMapper = {};
        _this.tagNameMapper = {};
        _this.ej2Instances = new NumericTextBox({});
        _this.ej2Instances._trigger = _this.ej2Instances.trigger;
        _this.ej2Instances.trigger = _this.trigger;
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    NumericTextBoxComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    NumericTextBoxComponent.prototype.trigger = function (eventName, eventProp, successHandler) {
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/checked|value/) || [];
            var propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                this.$emit('update:' + propKey, eventProp[propKey]);
                this.$emit('modelchanged', eventProp[propKey]);
            }
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp, successHandler);
        }
    };
    NumericTextBoxComponent.prototype.render = function (createElement) {
        return createElement('input', this.$slots.default);
    };
    NumericTextBoxComponent.prototype.decrement = function (step) {
        return this.ej2Instances.decrement(step);
    };
    NumericTextBoxComponent.prototype.focusIn = function () {
        return this.ej2Instances.focusIn();
    };
    NumericTextBoxComponent.prototype.focusOut = function () {
        return this.ej2Instances.focusOut();
    };
    NumericTextBoxComponent.prototype.getText = function () {
        return this.ej2Instances.getText();
    };
    NumericTextBoxComponent.prototype.increment = function (step) {
        return this.ej2Instances.increment(step);
    };
    NumericTextBoxComponent = __decorate$1([
        EJComponentDecorator({
            props: properties$1,
            model: {
                event: 'modelchanged'
            }
        })
    ], NumericTextBoxComponent);
    return NumericTextBoxComponent;
}(ComponentBase));
var NumericTextBoxPlugin = {
    name: 'ejs-numerictextbox',
    install: function (Vue$$1) {
        Vue$$1.component(NumericTextBoxPlugin.name, NumericTextBoxComponent);
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
var properties$2 = ['cssClass', 'customCharacters', 'enablePersistence', 'enableRtl', 'enabled', 'floatLabelType', 'htmlAttributes', 'locale', 'mask', 'placeholder', 'promptChar', 'showClearButton', 'value', 'width', 'blur', 'change', 'created', 'destroyed', 'focus'];
var modelProps$2 = ['value'];
/**
 * Represents the Essential JS 2 VueJS MaskedTextBox Component
 * ```html
 * <ejs-maskedtextbox v-bind:value='value'></ejs-maskedtextbox>
 * ```
 */
var MaskedTextBoxComponent = /** @__PURE__ @class */ (function (_super) {
    __extends$2(MaskedTextBoxComponent, _super);
    function MaskedTextBoxComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties$2;
        _this.models = modelProps$2;
        _this.hasChildDirective = false;
        _this.hasInjectedModules = false;
        _this.tagMapper = {};
        _this.tagNameMapper = {};
        _this.ej2Instances = new MaskedTextBox({});
        _this.ej2Instances._trigger = _this.ej2Instances.trigger;
        _this.ej2Instances.trigger = _this.trigger;
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    MaskedTextBoxComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    MaskedTextBoxComponent.prototype.trigger = function (eventName, eventProp, successHandler) {
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/checked|value/) || [];
            var propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                this.$emit('update:' + propKey, eventProp[propKey]);
                this.$emit('modelchanged', eventProp[propKey]);
            }
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp, successHandler);
        }
    };
    MaskedTextBoxComponent.prototype.render = function (createElement) {
        return createElement('input', this.$slots.default);
    };
    MaskedTextBoxComponent.prototype.focusIn = function () {
        return this.ej2Instances.focusIn();
    };
    MaskedTextBoxComponent.prototype.focusOut = function () {
        return this.ej2Instances.focusOut();
    };
    MaskedTextBoxComponent.prototype.getMaskedValue = function () {
        return this.ej2Instances.getMaskedValue();
    };
    MaskedTextBoxComponent = __decorate$2([
        EJComponentDecorator({
            props: properties$2,
            model: {
                event: 'modelchanged'
            }
        })
    ], MaskedTextBoxComponent);
    return MaskedTextBoxComponent;
}(ComponentBase));
var MaskedTextBoxPlugin = {
    name: 'ejs-maskedtextbox',
    install: function (Vue$$1) {
        Vue$$1.component(MaskedTextBoxPlugin.name, MaskedTextBoxComponent);
    }
};

var __extends$3 = (undefined && undefined.__extends) || (function () {
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
var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var properties$3 = ['cssClass', 'customValues', 'enableAnimation', 'enablePersistence', 'enableRtl', 'enabled', 'limits', 'locale', 'max', 'min', 'orientation', 'readonly', 'showButtons', 'step', 'ticks', 'tooltip', 'type', 'value', 'change', 'changed', 'created', 'renderedTicks', 'renderingTicks', 'tooltipChange'];
var modelProps$3 = ['value'];
/**
 * Represents the VueJS Slider Component.
 * ```html
 * <ejs-slider :value='value'></ejs-slider>
 * ```
 */
var SliderComponent = /** @__PURE__ @class */ (function (_super) {
    __extends$3(SliderComponent, _super);
    function SliderComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties$3;
        _this.models = modelProps$3;
        _this.hasChildDirective = false;
        _this.hasInjectedModules = false;
        _this.tagMapper = {};
        _this.tagNameMapper = {};
        _this.ej2Instances = new Slider({});
        _this.ej2Instances._trigger = _this.ej2Instances.trigger;
        _this.ej2Instances.trigger = _this.trigger;
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    SliderComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    SliderComponent.prototype.trigger = function (eventName, eventProp, successHandler) {
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/checked|value/) || [];
            var propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                this.$emit('update:' + propKey, eventProp[propKey]);
                this.$emit('modelchanged', eventProp[propKey]);
            }
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp, successHandler);
        }
    };
    SliderComponent.prototype.render = function (createElement) {
        return createElement('div', this.$slots.default);
    };
    SliderComponent.prototype.reposition = function () {
        return this.ej2Instances.reposition();
    };
    SliderComponent.prototype.setTooltip = function () {
        return this.ej2Instances.setTooltip();
    };
    SliderComponent = __decorate$3([
        EJComponentDecorator({
            props: properties$3,
            model: {
                event: 'modelchanged'
            }
        })
    ], SliderComponent);
    return SliderComponent;
}(ComponentBase));
var SliderPlugin = {
    name: 'ejs-slider',
    install: function (Vue$$1) {
        Vue$$1.component(SliderPlugin.name, SliderComponent);
    }
};

var __extends$4 = (undefined && undefined.__extends) || (function () {
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
var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var FilesDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$4(FilesDirective, _super);
    function FilesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FilesDirective.prototype.render = function () {
        return;
    };
    FilesDirective = __decorate$4([
        EJComponentDecorator({})
    ], FilesDirective);
    return FilesDirective;
}(Vue));
var FilesPlugin = {
    name: 'e-files',
    install: function (Vue$$1) {
        Vue$$1.component(FilesPlugin.name, FilesDirective);
    }
};
/**
 * 'files' directive represent a file of vue uploader
 * It must be contained in a Uploader component(`ejs-uploader`).
 * ```html
 * <ejs-uploader id='fileupload' v-bind:multiple='true'>
 *   <e-files>
 *    <e-file name='Java' size=23000 type='pdf'></e-file>
 *    <e-file name='C++' size=30000 type='.docx'></e-file>
 *   </e-files>
 * </ejs-uploader>
 * ```
 */
var UploadedFilesDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$4(UploadedFilesDirective, _super);
    function UploadedFilesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UploadedFilesDirective.prototype.render = function () {
        return;
    };
    UploadedFilesDirective = __decorate$4([
        EJComponentDecorator({})
    ], UploadedFilesDirective);
    return UploadedFilesDirective;
}(Vue));
var UploadedFilesPlugin = {
    name: 'e-uploadedfiles',
    install: function (Vue$$1) {
        Vue$$1.component(UploadedFilesPlugin.name, UploadedFilesDirective);
    }
};

var __extends$5 = (undefined && undefined.__extends) || (function () {
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
var __decorate$5 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var properties$4 = ['allowedExtensions', 'asyncSettings', 'autoUpload', 'buttons', 'cssClass', 'directoryUpload', 'dropArea', 'enablePersistence', 'enableRtl', 'enabled', 'files', 'htmlAttributes', 'locale', 'maxFileSize', 'minFileSize', 'multiple', 'sequentialUpload', 'showFileList', 'template', 'actionComplete', 'canceling', 'change', 'chunkFailure', 'chunkSuccess', 'chunkUploading', 'clearing', 'created', 'failure', 'fileListRendering', 'pausing', 'progress', 'removing', 'rendering', 'resuming', 'selected', 'success', 'uploading'];
var modelProps$4 = [];
/**
 * Represents the Essential JS 2 VueJS Uploader Component
 * ```html
 * <ejs-uploader id='fileUpload' v-bind:multiple='true'></ejs-uploader>
 * ```
 */
var UploaderComponent = /** @__PURE__ @class */ (function (_super) {
    __extends$5(UploaderComponent, _super);
    function UploaderComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties$4;
        _this.models = modelProps$4;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = false;
        _this.tagMapper = { "e-files": "e-uploadedfiles" };
        _this.tagNameMapper = {};
        _this.ej2Instances = new Uploader({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    UploaderComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    UploaderComponent.prototype.render = function (createElement) {
        return createElement('input', this.$slots.default);
    };
    UploaderComponent.prototype.bytesToSize = function (bytes) {
        return this.ej2Instances.bytesToSize(bytes);
    };
    UploaderComponent.prototype.cancel = function (fileData) {
        return this.ej2Instances.cancel(fileData);
    };
    UploaderComponent.prototype.clearAll = function () {
        return this.ej2Instances.clearAll();
    };
    UploaderComponent.prototype.getFilesData = function () {
        return this.ej2Instances.getFilesData();
    };
    UploaderComponent.prototype.pause = function (fileData, custom) {
        return this.ej2Instances.pause(fileData, custom);
    };
    UploaderComponent.prototype.remove = function (fileData, customTemplate, removeDirectly, postRawFile, args) {
        return this.ej2Instances.remove(fileData, customTemplate, removeDirectly, postRawFile, args);
    };
    UploaderComponent.prototype.resume = function (fileData, custom) {
        return this.ej2Instances.resume(fileData, custom);
    };
    UploaderComponent.prototype.retry = function (fileData, fromcanceledStage, custom) {
        return this.ej2Instances.retry(fileData, fromcanceledStage, custom);
    };
    UploaderComponent.prototype.sortFileList = function (filesData) {
        return this.ej2Instances.sortFileList(filesData);
    };
    UploaderComponent.prototype.traverseFileTree = function (item, event) {
        return this.ej2Instances.traverseFileTree(item, event);
    };
    UploaderComponent.prototype.upload = function (files, custom) {
        return this.ej2Instances.upload(files, custom);
    };
    UploaderComponent = __decorate$5([
        EJComponentDecorator({
            props: properties$4
        })
    ], UploaderComponent);
    return UploaderComponent;
}(ComponentBase));
var UploaderPlugin = {
    name: 'ejs-uploader',
    install: function (Vue$$1) {
        Vue$$1.component(UploaderPlugin.name, UploaderComponent);
        Vue$$1.component(UploadedFilesPlugin.name, UploadedFilesDirective);
        Vue$$1.component(FilesPlugin.name, FilesDirective);
    }
};

var __extends$6 = (undefined && undefined.__extends) || (function () {
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
var __decorate$6 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var properties$5 = ['columns', 'cssClass', 'disabled', 'enableOpacity', 'enablePersistence', 'enableRtl', 'inline', 'locale', 'mode', 'modeSwitcher', 'noColor', 'presetColors', 'showButtons', 'value', 'beforeClose', 'beforeModeSwitch', 'beforeOpen', 'beforeTileRender', 'change', 'created', 'open', 'select'];
var modelProps$5 = ['value'];
/**
 * Represents the Essential JS 2 VueJS ColorPicker Component
 * ```html
 * <ejs-colorpicker></ejs-colorpicker>
 * ```
 */
var ColorPickerComponent = /** @__PURE__ @class */ (function (_super) {
    __extends$6(ColorPickerComponent, _super);
    function ColorPickerComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties$5;
        _this.models = modelProps$5;
        _this.hasChildDirective = false;
        _this.hasInjectedModules = false;
        _this.tagMapper = {};
        _this.tagNameMapper = {};
        _this.ej2Instances = new ColorPicker({});
        _this.ej2Instances._trigger = _this.ej2Instances.trigger;
        _this.ej2Instances.trigger = _this.trigger;
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    ColorPickerComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    ColorPickerComponent.prototype.trigger = function (eventName, eventProp, successHandler) {
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/checked|value/) || [];
            var propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                this.$emit('update:' + propKey, eventProp[propKey]);
                this.$emit('modelchanged', eventProp[propKey]);
            }
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp, successHandler);
        }
    };
    ColorPickerComponent.prototype.render = function (createElement) {
        return createElement('input', this.$slots.default);
    };
    ColorPickerComponent.prototype.focusIn = function () {
        return this.ej2Instances.focusIn();
    };
    ColorPickerComponent.prototype.getValue = function (value, type) {
        return this.ej2Instances.getValue(value, type);
    };
    ColorPickerComponent.prototype.toggle = function () {
        return this.ej2Instances.toggle();
    };
    ColorPickerComponent = __decorate$6([
        EJComponentDecorator({
            props: properties$5,
            model: {
                event: 'modelchanged'
            }
        })
    ], ColorPickerComponent);
    return ColorPickerComponent;
}(ComponentBase));
var ColorPickerPlugin = {
    name: 'ejs-colorpicker',
    install: function (Vue$$1) {
        Vue$$1.component(ColorPickerPlugin.name, ColorPickerComponent);
    }
};

export { TextBoxComponent, TextBoxPlugin, NumericTextBoxComponent, NumericTextBoxPlugin, MaskedTextBoxComponent, MaskedTextBoxPlugin, SliderComponent, SliderPlugin, FilesDirective, UploadedFilesDirective, FilesPlugin, UploadedFilesPlugin, UploaderComponent, UploaderPlugin, ColorPickerComponent, ColorPickerPlugin };
export * from '@syncfusion/ej2-inputs';
//# sourceMappingURL=ej2-vue-inputs.es5.js.map
