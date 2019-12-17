import { Dialog, Tooltip } from '@syncfusion/ej2-popups';
import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { isUndefined } from '@syncfusion/ej2-base';

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
var ButtonsDirective = /** @__PURE__ @class */ (function (_super) {
    __extends(ButtonsDirective, _super);
    function ButtonsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonsDirective.prototype.render = function () {
        return;
    };
    ButtonsDirective = __decorate([
        EJComponentDecorator({})
    ], ButtonsDirective);
    return ButtonsDirective;
}(Vue));
var ButtonsPlugin = {
    name: 'e-buttons',
    install: function (Vue$$1) {
        Vue$$1.component(ButtonsPlugin.name, ButtonsDirective);
    }
};
/**
 * 'e-button' directive represent a button of Vue Dialog
 * It must be contained in a Dialog component(`ejs-dialog`).
 * ```html
 * <ejs-Dialog id='dialog' :showCloseIcon=true>
 *   <e-buttons>
 *    <e-dialogbutton :buttonModal='okButton'></e-dialogbutton>
 *    <e-dialogbutton :buttonModal='cancelButton'></e-dialogbutton>
 *   </e-buttons>
 * </ejs-Dialog>
 * ```
 */
var DialogButtonDirective = /** @__PURE__ @class */ (function (_super) {
    __extends(DialogButtonDirective, _super);
    function DialogButtonDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DialogButtonDirective.prototype.render = function () {
        return;
    };
    DialogButtonDirective = __decorate([
        EJComponentDecorator({})
    ], DialogButtonDirective);
    return DialogButtonDirective;
}(Vue));
var DialogButtonPlugin = {
    name: 'e-dialogbutton',
    install: function (Vue$$1) {
        Vue$$1.component(DialogButtonPlugin.name, DialogButtonDirective);
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
var properties = ['allowDragging', 'animationSettings', 'buttons', 'closeOnEscape', 'content', 'cssClass', 'enableHtmlSanitizer', 'enablePersistence', 'enableResize', 'enableRtl', 'footerTemplate', 'header', 'height', 'isModal', 'locale', 'minHeight', 'position', 'showCloseIcon', 'target', 'visible', 'width', 'zIndex', 'beforeClose', 'beforeOpen', 'beforeSanitizeHtml', 'close', 'created', 'drag', 'dragStart', 'dragStop', 'open', 'overlayClick', 'resizeStart', 'resizeStop', 'resizing'];
var modelProps = ['visible'];
/**
 * Represents the VueJS Dialog component
 * ```html
 * <ejs-dialog></ejs-dialog>
 * ```
 */
var DialogComponent = /** @__PURE__ @class */ (function (_super) {
    __extends$1(DialogComponent, _super);
    function DialogComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = false;
        _this.tagMapper = { "e-buttons": "e-dialogbutton" };
        _this.tagNameMapper = {};
        _this.ej2Instances = new Dialog({});
        _this.ej2Instances._trigger = _this.ej2Instances.trigger;
        _this.ej2Instances.trigger = _this.trigger;
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    DialogComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    DialogComponent.prototype.trigger = function (eventName, eventProp, successHandler) {
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
    DialogComponent.prototype.render = function (createElement) {
        return createElement('div', this.$slots.default);
    };
    DialogComponent.prototype.getButtons = function (index) {
        return this.ej2Instances.getButtons(index);
    };
    DialogComponent.prototype.hide = function (event) {
        return this.ej2Instances.hide(event);
    };
    DialogComponent.prototype.refreshPosition = function () {
        return this.ej2Instances.refreshPosition();
    };
    DialogComponent.prototype.show = function (isFullScreen) {
        return this.ej2Instances.show(isFullScreen);
    };
    DialogComponent = __decorate$1([
        EJComponentDecorator({
            props: properties,
            model: {
                event: 'modelchanged'
            }
        })
    ], DialogComponent);
    return DialogComponent;
}(ComponentBase));
var DialogPlugin = {
    name: 'ejs-dialog',
    install: function (Vue$$1) {
        Vue$$1.component(DialogPlugin.name, DialogComponent);
        Vue$$1.component(DialogButtonPlugin.name, DialogButtonDirective);
        Vue$$1.component(ButtonsPlugin.name, ButtonsDirective);
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
var properties$1 = ['animation', 'closeDelay', 'content', 'cssClass', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'height', 'isSticky', 'locale', 'mouseTrail', 'offsetX', 'offsetY', 'openDelay', 'opensOn', 'position', 'showTipPointer', 'target', 'tipPointerPosition', 'width', 'afterClose', 'afterOpen', 'beforeClose', 'beforeCollision', 'beforeOpen', 'beforeRender', 'created', 'destroyed'];
var modelProps$1 = [];
/**
 * Represents the VueJS Tooltip component that displays a piece of information about the target element on mouse hover.
 * ```html
 * <ejs-tooltip content='Tooltip content'>Show Tooltip</ejs-tooltip>
 * ```
 */
var TooltipComponent = /** @__PURE__ @class */ (function (_super) {
    __extends$2(TooltipComponent, _super);
    function TooltipComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties$1;
        _this.models = modelProps$1;
        _this.hasChildDirective = false;
        _this.hasInjectedModules = false;
        _this.tagMapper = {};
        _this.tagNameMapper = {};
        _this.ej2Instances = new Tooltip({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    TooltipComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    TooltipComponent.prototype.render = function (createElement) {
        return createElement('div', this.$slots.default);
    };
    TooltipComponent.prototype.close = function (animation) {
        return this.ej2Instances.close(animation);
    };
    TooltipComponent.prototype.open = function (element, animation) {
        return this.ej2Instances.open(element, animation);
    };
    TooltipComponent.prototype.refresh = function (target) {
        return this.ej2Instances.refresh(target);
    };
    TooltipComponent = __decorate$2([
        EJComponentDecorator({
            props: properties$1
        })
    ], TooltipComponent);
    return TooltipComponent;
}(ComponentBase));
var TooltipPlugin = {
    name: 'ejs-tooltip',
    install: function (Vue$$1) {
        Vue$$1.component(TooltipPlugin.name, TooltipComponent);
    }
};

export { ButtonsDirective, DialogButtonDirective, ButtonsPlugin, DialogButtonPlugin, DialogComponent, DialogPlugin, TooltipComponent, TooltipPlugin };
export * from '@syncfusion/ej2-popups';
//# sourceMappingURL=ej2-vue-popups.es5.js.map
