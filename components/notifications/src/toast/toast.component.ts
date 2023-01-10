import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { getValue } from '@syncfusion/ej2-base';

import { Toast } from '@syncfusion/ej2-notifications';
import { ButtonModelPropsDirective, ButtonModelPropDirective, ButtonModelPropsPlugin, ButtonModelPropPlugin } from './buttons.directive'


export const properties: string[] = ['isLazyUpdate', 'plugins', 'animation', 'buttons', 'content', 'cssClass', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'extendedTimeout', 'height', 'icon', 'locale', 'newestOnTop', 'position', 'progressDirection', 'showCloseButton', 'showProgressBar', 'target', 'template', 'timeOut', 'title', 'width', 'beforeClose', 'beforeOpen', 'beforeSanitizeHtml', 'click', 'close', 'created', 'destroyed', 'open'];
export const modelProps: string[] = [];


/**
 * Represents the Vue Toast Component
 * ```html
 * <ejs-toast></ejs-toast>
 * ```
 */
@EJComponentDecorator({
    props: properties
})

export class ToastComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = true;
    protected hasInjectedModules: boolean = false;
    public tagMapper: { [key: string]: Object } = {"e-buttonmodelprops":"e-buttonmodelprop"};
    public tagNameMapper: Object = {"e-buttonmodelprops":"e-buttons"};
    public templateCollection: any;
    constructor() {
        super(arguments);
        this.ej2Instances = new Toast({});
        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
        this.ej2Instances.clearTemplate = this.clearTemplate;
        this.updated = this.updated;
    }

 public clearTemplate(templateNames?: string[]): any {
    if (!templateNames){
       templateNames = Object.keys(this.templateCollection || {});
    }
    if (templateNames.length &&  this.templateCollection) {
    for (let tempName of templateNames){
       let elementCollection: any = this.templateCollection[tempName];
       if(elementCollection && elementCollection.length) {
       for(let ele of elementCollection) {
           let destroy: any = getValue('__vue__.$destroy', ele);
           if (destroy) {
               ele.__vue__.$destroy();
           }
           if (ele.innerHTML){
               ele.innerHTML = '';
           }
       }
       delete this.templateCollection[tempName];
       }
    }
}
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

    public render(createElement: any) {
         return createElement('div', (this as any).$slots.default);
    }
    public custom(): void {
        this.updated();
    }
    
    public hide(element?: Object | Object | string): void {
        return this.ej2Instances.hide(element);
    }

    public show(toastObj?: Object): void {
        return this.ej2Instances.show(toastObj);
    }
}

export const ToastPlugin = {
    name: 'ejs-toast',
    install(Vue: any) {
        Vue.component(ToastPlugin.name, ToastComponent);
        Vue.component(ButtonModelPropPlugin.name, ButtonModelPropDirective);
        Vue.component(ButtonModelPropsPlugin.name, ButtonModelPropsDirective);

    }
}
