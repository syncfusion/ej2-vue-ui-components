import { DropDownButton, ProgressButton, SplitButton } from '@syncfusion/ej2-splitbuttons';
import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let DropDownButtonItemsDirective = class DropDownButtonItemsDirective extends Vue {
    render() {
        return;
    }
};
DropDownButtonItemsDirective = __decorate([
    EJComponentDecorator({})
], DropDownButtonItemsDirective);
const DropDownButtonItemsPlugin = {
    name: 'e-dropdownbuttonitems',
    install(Vue$$1) {
        Vue$$1.component(DropDownButtonItemsPlugin.name, DropDownButtonItemsDirective);
    }
};
let DropDownButtonItemDirective = class DropDownButtonItemDirective extends Vue {
    render() {
        return;
    }
};
DropDownButtonItemDirective = __decorate([
    EJComponentDecorator({})
], DropDownButtonItemDirective);
const DropDownButtonItemPlugin = {
    name: 'e-dropdownbuttonitem',
    install(Vue$$1) {
        Vue$$1.component(DropDownButtonItemPlugin.name, DropDownButtonItemDirective);
    }
};

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties = ['content', 'cssClass', 'disabled', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'iconCss', 'iconPosition', 'items', 'locale', 'target', 'beforeClose', 'beforeItemRender', 'beforeOpen', 'close', 'created', 'open', 'select'];
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
        this.hasChildDirective = true;
        this.hasInjectedModules = false;
        this.tagMapper = { "e-dropdownbuttonitems": "e-dropdownbuttonitem" };
        this.tagNameMapper = { "e-dropdownbuttonitems": "e-items" };
        this.ej2Instances = new DropDownButton({});
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
        return createElement('button', this.$slots.default);
    }
    addItems(items, text) {
        return this.ej2Instances.addItems(items, text);
    }
    focusIn() {
        return this.ej2Instances.focusIn();
    }
    removeItems(items, isUniqueId) {
        return this.ej2Instances.removeItems(items, isUniqueId);
    }
    toggle() {
        return this.ej2Instances.toggle();
    }
};
DropDownButtonComponent = __decorate$1([
    EJComponentDecorator({
        props: properties
    })
], DropDownButtonComponent);
const DropDownButtonPlugin = {
    name: 'ejs-dropdownbutton',
    install(Vue$$1) {
        Vue$$1.component(DropDownButtonPlugin.name, DropDownButtonComponent);
        Vue$$1.component(DropDownButtonItemPlugin.name, DropDownButtonItemDirective);
        Vue$$1.component(DropDownButtonItemsPlugin.name, DropDownButtonItemsDirective);
    }
};

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let SplitButtonItemsDirective = class SplitButtonItemsDirective extends Vue {
    render() {
        return;
    }
};
SplitButtonItemsDirective = __decorate$2([
    EJComponentDecorator({})
], SplitButtonItemsDirective);
const SplitButtonItemsPlugin = {
    name: 'e-splitbuttonitems',
    install(Vue$$1) {
        Vue$$1.component(SplitButtonItemsPlugin.name, SplitButtonItemsDirective);
    }
};
let SplitButtonItemDirective = class SplitButtonItemDirective extends Vue {
    render() {
        return;
    }
};
SplitButtonItemDirective = __decorate$2([
    EJComponentDecorator({})
], SplitButtonItemDirective);
const SplitButtonItemPlugin = {
    name: 'e-splitbuttonitem',
    install(Vue$$1) {
        Vue$$1.component(SplitButtonItemPlugin.name, SplitButtonItemDirective);
    }
};

var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties$1 = ['content', 'cssClass', 'disabled', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'iconCss', 'iconPosition', 'items', 'locale', 'target', 'beforeClose', 'beforeItemRender', 'beforeOpen', 'click', 'close', 'created', 'open', 'select'];
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
        this.hasChildDirective = true;
        this.hasInjectedModules = false;
        this.tagMapper = { "e-splitbuttonitems": "e-splitbuttonitem" };
        this.tagNameMapper = { "e-splitbuttonitems": "e-items" };
        this.ej2Instances = new SplitButton({});
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
        return createElement('button', this.$slots.default);
    }
    addItems(items, text) {
        return this.ej2Instances.addItems(items, text);
    }
    focusIn() {
        return this.ej2Instances.focusIn();
    }
    removeItems(items, isUniqueId) {
        return this.ej2Instances.removeItems(items, isUniqueId);
    }
    toggle() {
        return this.ej2Instances.toggle();
    }
};
SplitButtonComponent = __decorate$3([
    EJComponentDecorator({
        props: properties$1
    })
], SplitButtonComponent);
const SplitButtonPlugin = {
    name: 'ejs-splitbutton',
    install(Vue$$1) {
        Vue$$1.component(SplitButtonPlugin.name, SplitButtonComponent);
        Vue$$1.component(SplitButtonItemPlugin.name, SplitButtonItemDirective);
        Vue$$1.component(SplitButtonItemsPlugin.name, SplitButtonItemsDirective);
    }
};

var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties$2 = ['animationSettings', 'content', 'cssClass', 'disabled', 'duration', 'enableHtmlSanitizer', 'enableProgress', 'iconCss', 'iconPosition', 'isPrimary', 'isToggle', 'spinSettings', 'begin', 'created', 'end', 'fail', 'progress'];
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
        return createElement('button', this.$slots.default);
    }
    click() {
        return this.ej2Instances.click();
    }
    focusIn() {
        return this.ej2Instances.focusIn();
    }
    progressComplete() {
        return this.ej2Instances.progressComplete();
    }
    start(percent) {
        return this.ej2Instances.start(percent);
    }
    stop() {
        return this.ej2Instances.stop();
    }
};
ProgressButtonComponent = __decorate$4([
    EJComponentDecorator({
        props: properties$2
    })
], ProgressButtonComponent);
const ProgressButtonPlugin = {
    name: 'ejs-progressbutton',
    install(Vue$$1) {
        Vue$$1.component(ProgressButtonPlugin.name, ProgressButtonComponent);
    }
};

export { DropDownButtonItemsDirective, DropDownButtonItemDirective, DropDownButtonItemsPlugin, DropDownButtonItemPlugin, DropDownButtonComponent, DropDownButtonPlugin, SplitButtonItemsDirective, SplitButtonItemDirective, SplitButtonItemsPlugin, SplitButtonItemPlugin, SplitButtonComponent, SplitButtonPlugin, ProgressButtonComponent, ProgressButtonPlugin };
export * from '@syncfusion/ej2-splitbuttons';
//# sourceMappingURL=ej2-vue-splitbuttons.es2015.js.map
