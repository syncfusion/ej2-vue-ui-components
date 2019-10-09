import Vue from 'vue';
import { isUndefined } from '@syncfusion/ej2-base';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { Dialog } from '@syncfusion/ej2-popups';
import { ButtonsDirective, DialogButtonDirective, ButtonsPlugin, DialogButtonPlugin } from './buttons.directive'


export const properties: string[] = ['allowDragging', 'animationSettings', 'buttons', 'closeOnEscape', 'content', 'cssClass', 'enablePersistence', 'enableResize', 'enableRtl', 'footerTemplate', 'header', 'height', 'isModal', 'locale', 'position', 'showCloseIcon', 'target', 'visible', 'width', 'zIndex', 'beforeClose', 'beforeOpen', 'close', 'created', 'drag', 'dragStart', 'dragStop', 'open', 'overlayClick', 'resizeStart', 'resizeStop', 'resizing'];
export const modelProps: string[] = ['visible'];

/**
 * Represents the VueJS Dialog component
 * ```html
 * <ejs-dialog></ejs-dialog>
 * ```
 */
@EJComponentDecorator({
    props: properties,
    model: {
        event: 'modelchanged'
    }
})
export class DialogComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = true;
    protected hasInjectedModules: boolean = false;
    public tagMapper: { [key: string]: Object } = {"e-buttons":"e-dialogbutton"};
    public tagNameMapper: Object = {};
    
    constructor() {
        super();
        this.ej2Instances = new Dialog({});        this.ej2Instances._trigger = this.ej2Instances.trigger;
        this.ej2Instances.trigger = this.trigger;

        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
    }
    public setProperties(prop: any, muteOnChange: boolean): void {
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map((key: string): void => {
                this.models.map((model: string): void => {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    }
    public trigger(eventName: string, eventProp: {[key:string]:Object}, successHandler?: Function): void {
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            let key: string[] = this.models.toString().match(/checked|value/) || [];
            let propKey: string = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                (this as any).$emit('update:'+ propKey, eventProp[propKey]);
                (this as any).$emit('modelchanged', eventProp[propKey]);
            }
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp, successHandler);
        }            
    }

    public render(createElement: any) {
        return createElement('div', (this as any).$slots.default);
    }
    
    public getButtons(index?: number): Object[] | Object {
        return this.ej2Instances.getButtons(index);
    }

    public hide(event?: Object): void {
        return this.ej2Instances.hide(event);
    }

    public refreshPosition(): void {
        return this.ej2Instances.refreshPosition();
    }

    public show(isFullScreen?: boolean): void {
        return this.ej2Instances.show(isFullScreen);
    }
}

export const DialogPlugin = {
    name: 'ejs-dialog',
    install(Vue: any) {
        Vue.component(DialogPlugin.name, DialogComponent);
        Vue.component(DialogButtonPlugin.name, DialogButtonDirective);
        Vue.component(ButtonsPlugin.name, ButtonsDirective);

    }
}
