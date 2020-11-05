import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { DropDownButton } from '@syncfusion/ej2-splitbuttons';
import { DropDownButtonItemsDirective, DropDownButtonItemDirective, DropDownButtonItemsPlugin, DropDownButtonItemPlugin } from './items.directive'


export const properties: string[] = ['content', 'cssClass', 'disabled', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'iconCss', 'iconPosition', 'items', 'locale', 'target', 'beforeClose', 'beforeItemRender', 'beforeOpen', 'close', 'created', 'open', 'select'];
export const modelProps: string[] = [];

/**
 * Represents the Essential JS 2 VueJS DropDownButton Component
 * ```html
 * <ejs-dropdownbutton>DropDownButton</ejs-dropdownbutton>
 * ```
 */
@EJComponentDecorator({
    props: properties
})
export class DropDownButtonComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = true;
    protected hasInjectedModules: boolean = false;
    public tagMapper: { [key: string]: Object } = {"e-dropdownbuttonitems":"e-dropdownbuttonitem"};
    public tagNameMapper: Object = {"e-dropdownbuttonitems":"e-items"};
    
    constructor() {
        super();
        this.ej2Instances = new DropDownButton({});
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

    public render(createElement: any) {
        return createElement('button', (this as any).$slots.default);
    }
    
    public addItems(items: Object[], text?: string): void {
        return this.ej2Instances.addItems(items, text);
    }

    public focusIn(): void {
        return this.ej2Instances.focusIn();
    }

    public removeItems(items: string[], isUniqueId?: boolean): void {
        return this.ej2Instances.removeItems(items, isUniqueId);
    }

    public toggle(): void {
        return this.ej2Instances.toggle();
    }
}

export const DropDownButtonPlugin = {
    name: 'ejs-dropdownbutton',
    install(Vue: any) {
        Vue.component(DropDownButtonPlugin.name, DropDownButtonComponent);
        Vue.component(DropDownButtonItemPlugin.name, DropDownButtonItemDirective);
        Vue.component(DropDownButtonItemsPlugin.name, DropDownButtonItemsDirective);

    }
}
