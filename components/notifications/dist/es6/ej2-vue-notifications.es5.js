import { Toast } from '@syncfusion/ej2-notifications';
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
var ButtonModelPropDirective = /** @__PURE__ @class */ (function (_super) {
    __extends(ButtonModelPropDirective, _super);
    function ButtonModelPropDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonModelPropDirective.prototype.render = function () {
        return;
    };
    ButtonModelPropDirective = __decorate([
        EJComponentDecorator({})
    ], ButtonModelPropDirective);
    return ButtonModelPropDirective;
}(Vue));
var ButtonModelPropPlugin = {
    name: 'e-buttonmodelprop',
    install: function (Vue$$1) {
        Vue$$1.component(ButtonModelPropPlugin.name, ButtonModelPropDirective);
    }
};
/**
 * 'e-button' directive represent a button of Vue toast
 * It must be contained in a Toast component(`ejs-toast`).
 * ```html
 * <ejs-toast id='toast' :showCloseIcon=true>
 *   <e-buttons>
 *    <e-button :content='Ok' :isPrimary=true></e-button>
 *    <e-button :content='Cancel'></e-button>
 *   </e-buttons>
 * </ejs-toast>
 * ```
 */
var ButtonModelPropsDirective = /** @__PURE__ @class */ (function (_super) {
    __extends(ButtonModelPropsDirective, _super);
    function ButtonModelPropsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonModelPropsDirective.prototype.render = function () {
        return;
    };
    ButtonModelPropsDirective = __decorate([
        EJComponentDecorator({})
    ], ButtonModelPropsDirective);
    return ButtonModelPropsDirective;
}(Vue));
var ButtonModelPropsPlugin = {
    name: 'e-buttonmodelprops',
    install: function (Vue$$1) {
        Vue$$1.component(ButtonModelPropsPlugin.name, ButtonModelPropsDirective);
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
var properties = ['animation', 'buttons', 'content', 'cssClass', 'enablePersistence', 'enableRtl', 'extendedTimeout', 'height', 'icon', 'locale', 'newestOnTop', 'position', 'showCloseButton', 'showProgressBar', 'target', 'template', 'timeOut', 'title', 'width', 'beforeOpen', 'click', 'close', 'created', 'destroyed', 'open'];
var modelProps = [];
/**
 * Represents the Vue Toast Component
 * ```html
 * <ejs-toast></ejs-toast>
 * ```
 */
var ToastComponent = /** @__PURE__ @class */ (function (_super) {
    __extends$1(ToastComponent, _super);
    function ToastComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = false;
        _this.tagMapper = { "e-buttonmodelprop": "e-buttonmodelprops" };
        _this.tagNameMapper = { "e-buttonmodelprop": "e-buttons" };
        _this.ej2Instances = new Toast({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    ToastComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    ToastComponent.prototype.render = function (createElement) {
        return createElement('div', this.$slots.default);
    };
    ToastComponent.prototype.hide = function (element) {
        return this.ej2Instances.hide(element);
    };
    ToastComponent.prototype.show = function (toastObj) {
        return this.ej2Instances.show(toastObj);
    };
    ToastComponent = __decorate$1([
        EJComponentDecorator({
            props: properties
        })
    ], ToastComponent);
    return ToastComponent;
}(ComponentBase));
var ToastPlugin = {
    name: 'ejs-toast',
    install: function (Vue$$1) {
        Vue$$1.component(ToastPlugin.name, ToastComponent);
        Vue$$1.component(ButtonModelPropsPlugin.name, ButtonModelPropsDirective);
        Vue$$1.component(ButtonModelPropPlugin.name, ButtonModelPropDirective);
    }
};

export { ButtonModelPropDirective, ButtonModelPropsDirective, ButtonModelPropPlugin, ButtonModelPropsPlugin, ToastComponent, ToastPlugin };
export * from '@syncfusion/ej2-notifications';
//# sourceMappingURL=ej2-vue-notifications.es5.js.map
