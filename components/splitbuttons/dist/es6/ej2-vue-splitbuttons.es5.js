import { DropDownButton, ProgressButton, SplitButton } from '@syncfusion/ej2-splitbuttons';
import Vue from 'vue';
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
var DropDownButtonItemsDirective = /** @__PURE__ @class */ (function (_super) {
    __extends(DropDownButtonItemsDirective, _super);
    function DropDownButtonItemsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DropDownButtonItemsDirective.prototype.render = function () {
        return;
    };
    DropDownButtonItemsDirective = __decorate([
        EJComponentDecorator({})
    ], DropDownButtonItemsDirective);
    return DropDownButtonItemsDirective;
}(Vue));
var DropDownButtonItemsPlugin = {
    name: 'e-dropdownbuttonitems',
    install: function (Vue$$1) {
        Vue$$1.component(DropDownButtonItemsPlugin.name, DropDownButtonItemsDirective);
    }
};
var DropDownButtonItemDirective = /** @__PURE__ @class */ (function (_super) {
    __extends(DropDownButtonItemDirective, _super);
    function DropDownButtonItemDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DropDownButtonItemDirective.prototype.render = function () {
        return;
    };
    DropDownButtonItemDirective = __decorate([
        EJComponentDecorator({})
    ], DropDownButtonItemDirective);
    return DropDownButtonItemDirective;
}(Vue));
var DropDownButtonItemPlugin = {
    name: 'e-dropdownbuttonitem',
    install: function (Vue$$1) {
        Vue$$1.component(DropDownButtonItemPlugin.name, DropDownButtonItemDirective);
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
var properties = ['content', 'cssClass', 'disabled', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'iconCss', 'iconPosition', 'items', 'locale', 'target', 'beforeClose', 'beforeItemRender', 'beforeOpen', 'close', 'created', 'open', 'select'];
var modelProps = [];
/**
 * Represents the Essential JS 2 VueJS DropDownButton Component
 * ```html
 * <ejs-dropdownbutton>DropDownButton</ejs-dropdownbutton>
 * ```
 */
var DropDownButtonComponent = /** @__PURE__ @class */ (function (_super) {
    __extends$1(DropDownButtonComponent, _super);
    function DropDownButtonComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = false;
        _this.tagMapper = { "e-dropdownbuttonitems": "e-dropdownbuttonitem" };
        _this.tagNameMapper = { "e-dropdownbuttonitems": "e-items" };
        _this.ej2Instances = new DropDownButton({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    DropDownButtonComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    DropDownButtonComponent.prototype.render = function (createElement) {
        return createElement('button', this.$slots.default);
    };
    DropDownButtonComponent.prototype.addItems = function (items, text) {
        return this.ej2Instances.addItems(items, text);
    };
    DropDownButtonComponent.prototype.focusIn = function () {
        return this.ej2Instances.focusIn();
    };
    DropDownButtonComponent.prototype.removeItems = function (items) {
        return this.ej2Instances.removeItems(items);
    };
    DropDownButtonComponent.prototype.toggle = function () {
        return this.ej2Instances.toggle();
    };
    DropDownButtonComponent = __decorate$1([
        EJComponentDecorator({
            props: properties
        })
    ], DropDownButtonComponent);
    return DropDownButtonComponent;
}(ComponentBase));
var DropDownButtonPlugin = {
    name: 'ejs-dropdownbutton',
    install: function (Vue$$1) {
        Vue$$1.component(DropDownButtonPlugin.name, DropDownButtonComponent);
        Vue$$1.component(DropDownButtonItemPlugin.name, DropDownButtonItemDirective);
        Vue$$1.component(DropDownButtonItemsPlugin.name, DropDownButtonItemsDirective);
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
var SplitButtonItemsDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$2(SplitButtonItemsDirective, _super);
    function SplitButtonItemsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SplitButtonItemsDirective.prototype.render = function () {
        return;
    };
    SplitButtonItemsDirective = __decorate$2([
        EJComponentDecorator({})
    ], SplitButtonItemsDirective);
    return SplitButtonItemsDirective;
}(Vue));
var SplitButtonItemsPlugin = {
    name: 'e-splitbuttonitems',
    install: function (Vue$$1) {
        Vue$$1.component(SplitButtonItemsPlugin.name, SplitButtonItemsDirective);
    }
};
var SplitButtonItemDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$2(SplitButtonItemDirective, _super);
    function SplitButtonItemDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SplitButtonItemDirective.prototype.render = function () {
        return;
    };
    SplitButtonItemDirective = __decorate$2([
        EJComponentDecorator({})
    ], SplitButtonItemDirective);
    return SplitButtonItemDirective;
}(Vue));
var SplitButtonItemPlugin = {
    name: 'e-splitbuttonitem',
    install: function (Vue$$1) {
        Vue$$1.component(SplitButtonItemPlugin.name, SplitButtonItemDirective);
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
var properties$1 = ['content', 'cssClass', 'disabled', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'iconCss', 'iconPosition', 'items', 'locale', 'target', 'beforeClose', 'beforeItemRender', 'beforeOpen', 'click', 'close', 'created', 'open', 'select'];
var modelProps$1 = [];
/**
 * Represents the Essential JS 2 VueJS SplitButton Component
 * ```html
 * <ejs-splitbutton content='Split Button'></ejs-splitbutton>
 * ```
 */
var SplitButtonComponent = /** @__PURE__ @class */ (function (_super) {
    __extends$3(SplitButtonComponent, _super);
    function SplitButtonComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties$1;
        _this.models = modelProps$1;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = false;
        _this.tagMapper = { "e-splitbuttonitems": "e-splitbuttonitem" };
        _this.tagNameMapper = { "e-splitbuttonitems": "e-items" };
        _this.ej2Instances = new SplitButton({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    SplitButtonComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    SplitButtonComponent.prototype.render = function (createElement) {
        return createElement('button', this.$slots.default);
    };
    SplitButtonComponent.prototype.addItems = function (items, text) {
        return this.ej2Instances.addItems(items, text);
    };
    SplitButtonComponent.prototype.focusIn = function () {
        return this.ej2Instances.focusIn();
    };
    SplitButtonComponent.prototype.removeItems = function (items) {
        return this.ej2Instances.removeItems(items);
    };
    SplitButtonComponent.prototype.toggle = function () {
        return this.ej2Instances.toggle();
    };
    SplitButtonComponent = __decorate$3([
        EJComponentDecorator({
            props: properties$1
        })
    ], SplitButtonComponent);
    return SplitButtonComponent;
}(ComponentBase));
var SplitButtonPlugin = {
    name: 'ejs-splitbutton',
    install: function (Vue$$1) {
        Vue$$1.component(SplitButtonPlugin.name, SplitButtonComponent);
        Vue$$1.component(SplitButtonItemPlugin.name, SplitButtonItemDirective);
        Vue$$1.component(SplitButtonItemsPlugin.name, SplitButtonItemsDirective);
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
var properties$2 = ['animationSettings', 'content', 'cssClass', 'disabled', 'duration', 'enableHtmlSanitizer', 'enableProgress', 'iconCss', 'iconPosition', 'isPrimary', 'isToggle', 'spinSettings', 'begin', 'created', 'end', 'fail', 'progress'];
var modelProps$2 = [];
/**
 * Represents the Essential JS 2 VueJS ProgressButton Component
 * ```html
 * <ejs-progressbutton content='Progress Button'></ejs-progressbutton>
 * ```
 */
var ProgressButtonComponent = /** @__PURE__ @class */ (function (_super) {
    __extends$4(ProgressButtonComponent, _super);
    function ProgressButtonComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties$2;
        _this.models = modelProps$2;
        _this.hasChildDirective = false;
        _this.hasInjectedModules = false;
        _this.tagMapper = {};
        _this.tagNameMapper = {};
        _this.ej2Instances = new ProgressButton({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    ProgressButtonComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    ProgressButtonComponent.prototype.render = function (createElement) {
        return createElement('button', this.$slots.default);
    };
    ProgressButtonComponent.prototype.click = function () {
        return this.ej2Instances.click();
    };
    ProgressButtonComponent.prototype.focusIn = function () {
        return this.ej2Instances.focusIn();
    };
    ProgressButtonComponent.prototype.progressComplete = function () {
        return this.ej2Instances.progressComplete();
    };
    ProgressButtonComponent.prototype.start = function (percent) {
        return this.ej2Instances.start(percent);
    };
    ProgressButtonComponent.prototype.stop = function () {
        return this.ej2Instances.stop();
    };
    ProgressButtonComponent = __decorate$4([
        EJComponentDecorator({
            props: properties$2
        })
    ], ProgressButtonComponent);
    return ProgressButtonComponent;
}(ComponentBase));
var ProgressButtonPlugin = {
    name: 'ejs-progressbutton',
    install: function (Vue$$1) {
        Vue$$1.component(ProgressButtonPlugin.name, ProgressButtonComponent);
    }
};

export { DropDownButtonItemsDirective, DropDownButtonItemDirective, DropDownButtonItemsPlugin, DropDownButtonItemPlugin, DropDownButtonComponent, DropDownButtonPlugin, SplitButtonItemsDirective, SplitButtonItemDirective, SplitButtonItemsPlugin, SplitButtonItemPlugin, SplitButtonComponent, SplitButtonPlugin, ProgressButtonComponent, ProgressButtonPlugin };
export * from '@syncfusion/ej2-splitbuttons';
//# sourceMappingURL=ej2-vue-splitbuttons.es5.js.map
