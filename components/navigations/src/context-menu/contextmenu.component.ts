import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { ContextMenu } from '@syncfusion/ej2-navigations';


export const properties: string[] = ['animationSettings', 'cssClass', 'enablePersistence', 'enableRtl', 'enableScrolling', 'fields', 'filter', 'items', 'locale', 'showItemOnClick', 'target', 'template', 'beforeClose', 'beforeItemRender', 'beforeOpen', 'created', 'onClose', 'onOpen', 'select'];
export const modelProps: string[] = [];

/**
 * Represents the Essential JS 2 VueJS ContextMenu Component.
 * ```html
 * <div id='target'>Right click / Touch hold to open the ContextMenu</div>
 * <ejs-contextmenu target='#target' :items='menuItems'></ejs-contextmenu>
 * ```
 */
@EJComponentDecorator({
    props: properties
})
export class ContextMenuComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = false;
    protected hasInjectedModules: boolean = false;
    public tagMapper: { [key: string]: Object } = {};
    public tagNameMapper: Object = {};
    
    constructor() {
        super();
        this.ej2Instances = new ContextMenu({});
        this.bindProperties();
    }

    public render(createElement: any) {
        return createElement('ul', (this as any).$slots.default);
    }
    
    public close(): void {
        return this.ej2Instances.close();
    }

    public enableItems(items: string[], enable: boolean, isUniqueId?: boolean): void {
        return this.ej2Instances.enableItems(items, enable, isUniqueId);
    }

    public hideItems(items: string[], isUniqueId?: boolean): void {
        return this.ej2Instances.hideItems(items, isUniqueId);
    }

    public insertAfter(items: Object[], text: string, isUniqueId?: boolean): void {
        return this.ej2Instances.insertAfter(items, text, isUniqueId);
    }

    public insertBefore(items: Object[], text: string, isUniqueId?: boolean): void {
        return this.ej2Instances.insertBefore(items, text, isUniqueId);
    }

    public open(top: number, left: number, target?: Object): void {
        return this.ej2Instances.open(top, left, target);
    }

    public removeItems(items: string[], isUniqueId?: boolean): void {
        return this.ej2Instances.removeItems(items, isUniqueId);
    }

    public showItems(items: string[], isUniqueId?: boolean): void {
        return this.ej2Instances.showItems(items, isUniqueId);
    }
}

export const ContextMenuPlugin = {
    name: 'ejs-contextmenu',
    install(Vue: any) {
        Vue.component(ContextMenuPlugin.name, ContextMenuComponent);

    }
}
