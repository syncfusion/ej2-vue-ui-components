import { Toast } from '@syncfusion/ej2-notifications';
import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ButtonModelPropDirective = class ButtonModelPropDirective extends Vue {
    render() {
        return;
    }
};
ButtonModelPropDirective = __decorate([
    EJComponentDecorator({})
], ButtonModelPropDirective);
const ButtonModelPropPlugin = {
    name: 'e-buttonmodelprop',
    install(Vue$$1) {
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
let ButtonModelPropsDirective = class ButtonModelPropsDirective extends Vue {
    render() {
        return;
    }
};
ButtonModelPropsDirective = __decorate([
    EJComponentDecorator({})
], ButtonModelPropsDirective);
const ButtonModelPropsPlugin = {
    name: 'e-buttonmodelprops',
    install(Vue$$1) {
        Vue$$1.component(ButtonModelPropsPlugin.name, ButtonModelPropsDirective);
    }
};

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties = ['animation', 'buttons', 'content', 'cssClass', 'enablePersistence', 'enableRtl', 'extendedTimeout', 'height', 'icon', 'locale', 'newestOnTop', 'position', 'showCloseButton', 'showProgressBar', 'target', 'template', 'timeOut', 'title', 'width', 'beforeOpen', 'click', 'close', 'created', 'destroyed', 'open'];
const modelProps = [];
/**
 * Represents the Vue Toast Component
 * ```html
 * <ejs-toast></ejs-toast>
 * ```
 */
let ToastComponent = class ToastComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties;
        this.models = modelProps;
        this.hasChildDirective = true;
        this.hasInjectedModules = false;
        this.tagMapper = { "e-buttonmodelprop": "e-buttonmodelprops" };
        this.tagNameMapper = { "e-buttonmodelprop": "e-buttons" };
        this.ej2Instances = new Toast({});
        this.bindProperties();
    }
    render(createElement) {
        return createElement('div', this.$slots.default);
    }
    hide(element) {
        return this.ej2Instances.hide(element);
    }
    show(toastObj) {
        return this.ej2Instances.show(toastObj);
    }
};
ToastComponent = __decorate$1([
    EJComponentDecorator({
        props: properties
    })
], ToastComponent);
const ToastPlugin = {
    name: 'ejs-toast',
    install(Vue$$1) {
        Vue$$1.component(ToastPlugin.name, ToastComponent);
        Vue$$1.component(ButtonModelPropsPlugin.name, ButtonModelPropsDirective);
        Vue$$1.component(ButtonModelPropPlugin.name, ButtonModelPropDirective);
    }
};

export { ButtonModelPropDirective, ButtonModelPropsDirective, ButtonModelPropPlugin, ButtonModelPropsPlugin, ToastComponent, ToastPlugin };
export * from '@syncfusion/ej2-notifications';
//# sourceMappingURL=ej2-vue-notifications.es2015.js.map
