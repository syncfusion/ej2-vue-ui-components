import { Dialog, Tooltip } from '@syncfusion/ej2-popups';
import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { isUndefined } from '@syncfusion/ej2-base';

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ButtonsDirective = class ButtonsDirective extends Vue {
    render() {
        return;
    }
};
ButtonsDirective = __decorate([
    EJComponentDecorator({})
], ButtonsDirective);
const ButtonsPlugin = {
    name: 'e-buttons',
    install(Vue$$1) {
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
let DialogButtonDirective = class DialogButtonDirective extends Vue {
    render() {
        return;
    }
};
DialogButtonDirective = __decorate([
    EJComponentDecorator({})
], DialogButtonDirective);
const DialogButtonPlugin = {
    name: 'e-dialogbutton',
    install(Vue$$1) {
        Vue$$1.component(DialogButtonPlugin.name, DialogButtonDirective);
    }
};

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties = ['allowDragging', 'animationSettings', 'buttons', 'closeOnEscape', 'content', 'cssClass', 'enablePersistence', 'enableResize', 'enableRtl', 'footerTemplate', 'header', 'height', 'isModal', 'locale', 'position', 'showCloseIcon', 'target', 'visible', 'width', 'zIndex', 'beforeClose', 'beforeOpen', 'close', 'created', 'drag', 'dragStart', 'dragStop', 'open', 'overlayClick', 'resizeStart', 'resizeStop', 'resizing'];
const modelProps = ['visible'];
/**
 * Represents the VueJS Dialog component
 * ```html
 * <ejs-dialog></ejs-dialog>
 * ```
 */
let DialogComponent = class DialogComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties;
        this.models = modelProps;
        this.hasChildDirective = true;
        this.hasInjectedModules = false;
        this.tagMapper = { "e-buttons": "e-dialogbutton" };
        this.tagNameMapper = {};
        this.ej2Instances = new Dialog({});
        this.ej2Instances._trigger = this.ej2Instances.trigger;
        this.ej2Instances.trigger = this.trigger;
        //this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        //this.ej2Instances.setProperties = this.setProperties;
        this.bindProperties();
    }
    trigger(eventName, eventProp) {
        if (eventName === 'change' && this.models && (this.models.length !== 0)) {
            let key = this.models.toString().match(/checked|value/) || [];
            let propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                this.$emit('modelchanged', eventProp[propKey]);
            }
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp);
        }
    }
    setProperties(prop, muteOnChange) {
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && (this.models.length !== 0)) {
            let keys = Object.keys(prop);
            let emitKeys = [];
            let emitFlag = false;
            keys.map((key) => {
                this.models.map((model) => {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        emitKeys.push(key);
                        emitFlag = true;
                    }
                });
            });
            if (emitFlag) {
                emitKeys.map((propKey) => {
                    this.$emit('update:' + propKey, prop[propKey]);
                });
            }
        }
    }
    render(createElement) {
        return createElement('div', this.$slots.default);
    }
    getButtons(index) {
        return this.ej2Instances.getButtons(index);
    }
    hide(event) {
        return this.ej2Instances.hide(event);
    }
    refreshPosition() {
        return this.ej2Instances.refreshPosition();
    }
    show(isFullScreen) {
        return this.ej2Instances.show(isFullScreen);
    }
};
DialogComponent = __decorate$1([
    EJComponentDecorator({
        props: properties,
        model: {
            event: 'modelchanged'
        }
    })
], DialogComponent);
const DialogPlugin = {
    name: 'ejs-dialog',
    install(Vue$$1) {
        Vue$$1.component(DialogPlugin.name, DialogComponent);
        Vue$$1.component(DialogButtonPlugin.name, DialogButtonDirective);
        Vue$$1.component(ButtonsPlugin.name, ButtonsDirective);
    }
};

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties$1 = ['animation', 'closeDelay', 'content', 'cssClass', 'enablePersistence', 'enableRtl', 'height', 'isSticky', 'locale', 'mouseTrail', 'offsetX', 'offsetY', 'openDelay', 'opensOn', 'position', 'showTipPointer', 'target', 'tipPointerPosition', 'width', 'afterClose', 'afterOpen', 'beforeClose', 'beforeCollision', 'beforeOpen', 'beforeRender', 'created', 'destroyed'];
const modelProps$1 = [];
/**
 * Represents the VueJS Tooltip component that displays a piece of information about the target element on mouse hover.
 * ```html
 * <ejs-tooltip content='Tooltip content'>Show Tooltip</ejs-tooltip>
 * ```
 */
let TooltipComponent = class TooltipComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties$1;
        this.models = modelProps$1;
        this.hasChildDirective = false;
        this.hasInjectedModules = false;
        this.tagMapper = {};
        this.tagNameMapper = {};
        this.ej2Instances = new Tooltip({});
        this.bindProperties();
    }
    render(createElement) {
        return createElement('div', this.$slots.default);
    }
    close(animation) {
        return this.ej2Instances.close(animation);
    }
    open(element, animation) {
        return this.ej2Instances.open(element, animation);
    }
    refresh(target) {
        return this.ej2Instances.refresh(target);
    }
};
TooltipComponent = __decorate$2([
    EJComponentDecorator({
        props: properties$1
    })
], TooltipComponent);
const TooltipPlugin = {
    name: 'ejs-tooltip',
    install(Vue$$1) {
        Vue$$1.component(TooltipPlugin.name, TooltipComponent);
    }
};

export { ButtonsDirective, DialogButtonDirective, ButtonsPlugin, DialogButtonPlugin, DialogComponent, DialogPlugin, TooltipComponent, TooltipPlugin };
export * from '@syncfusion/ej2-popups';
//# sourceMappingURL=ej2-vue-popups.es2015.js.map
