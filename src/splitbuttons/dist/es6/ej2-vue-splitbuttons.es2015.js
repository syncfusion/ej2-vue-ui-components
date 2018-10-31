import { DropDownButton, ProgressButton, SplitButton } from '@syncfusion/ej2-splitbuttons';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties = ['content', 'cssClass', 'disabled', 'enablePersistence', 'enableRtl', 'iconCss', 'iconPosition', 'items', 'locale', 'target', 'beforeClose', 'beforeItemRender', 'beforeOpen', 'close', 'created', 'open', 'select'];
const modelProps = [];
/**
 * Represents the Essential JS 2 VueJS DropDownButton Component
 * ```html
 * <ejs-dropdownbutton>DropDownButton</ejs-dropdownbutton>
 * ```
 */
let DropDownButtonComponent = class DropDownButtonComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties;
        this.models = modelProps;
        this.hasChildDirective = false;
        this.hasInjectedModules = false;
        this.tagMapper = {};
        this.tagNameMapper = {};
        this.ej2Instances = new DropDownButton({});
        this.bindProperties();
    }
    render(createElement) {
        return createElement('button', this.$slots.default);
    }
    toggle() {
        return this.ej2Instances.toggle();
    }
};
DropDownButtonComponent = __decorate([
    EJComponentDecorator({
        props: properties
    })
], DropDownButtonComponent);
const DropDownButtonPlugin = {
    name: 'ejs-dropdownbutton',
    install(Vue) {
        Vue.component(DropDownButtonPlugin.name, DropDownButtonComponent);
    }
};

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties$1 = ['content', 'cssClass', 'disabled', 'enablePersistence', 'enableRtl', 'iconCss', 'iconPosition', 'items', 'locale', 'target', 'beforeClose', 'beforeItemRender', 'beforeOpen', 'click', 'close', 'created', 'open', 'select'];
const modelProps$1 = [];
/**
 * Represents the Essential JS 2 VueJS SplitButton Component
 * ```html
 * <ejs-splitbutton content='Split Button'></ejs-splitbutton>
 * ```
 */
let SplitButtonComponent = class SplitButtonComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties$1;
        this.models = modelProps$1;
        this.hasChildDirective = false;
        this.hasInjectedModules = false;
        this.tagMapper = {};
        this.tagNameMapper = {};
        this.ej2Instances = new SplitButton({});
        this.bindProperties();
    }
    render(createElement) {
        return createElement('button', this.$slots.default);
    }
    toggle() {
        return this.ej2Instances.toggle();
    }
};
SplitButtonComponent = __decorate$1([
    EJComponentDecorator({
        props: properties$1
    })
], SplitButtonComponent);
const SplitButtonPlugin = {
    name: 'ejs-splitbutton',
    install(Vue) {
        Vue.component(SplitButtonPlugin.name, SplitButtonComponent);
    }
};

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties$2 = ['animationSettings', 'content', 'cssClass', 'disabled', 'duration', 'enableProgress', 'iconCss', 'iconPosition', 'isPrimary', 'isToggle', 'spinSettings', 'begin', 'created', 'end', 'fail', 'progress'];
const modelProps$2 = [];
/**
 * Represents the Essential JS 2 VueJS ProgressButton Component
 * ```html
 * <ejs-progressbutton content='Progress Button'></ejs-progressbutton>
 * ```
 */
let ProgressButtonComponent = class ProgressButtonComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties$2;
        this.models = modelProps$2;
        this.hasChildDirective = false;
        this.hasInjectedModules = false;
        this.tagMapper = {};
        this.tagNameMapper = {};
        this.ej2Instances = new ProgressButton({});
        this.bindProperties();
    }
    render(createElement) {
        return createElement('button', this.$slots.default);
    }
    start(percent) {
        return this.ej2Instances.start(percent);
    }
    stop() {
        return this.ej2Instances.stop();
    }
};
ProgressButtonComponent = __decorate$2([
    EJComponentDecorator({
        props: properties$2
    })
], ProgressButtonComponent);
const ProgressButtonPlugin = {
    name: 'ejs-progressbutton',
    install(Vue) {
        Vue.component(ProgressButtonPlugin.name, ProgressButtonComponent);
    }
};

export { DropDownButtonComponent, DropDownButtonPlugin, SplitButtonComponent, SplitButtonPlugin, ProgressButtonComponent, ProgressButtonPlugin };
export * from '@syncfusion/ej2-splitbuttons';
//# sourceMappingURL=ej2-vue-splitbuttons.es2015.js.map
