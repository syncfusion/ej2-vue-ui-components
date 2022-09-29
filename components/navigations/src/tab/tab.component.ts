import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { getValue } from '@syncfusion/ej2-base';

import { Tab } from '@syncfusion/ej2-navigations';
import { TabItemsDirective, TabItemDirective, TabItemsPlugin, TabItemPlugin } from './items.directive'


export const properties: string[] = ['isLazyUpdate', 'plugins', 'allowDragAndDrop', 'animation', 'cssClass', 'dragArea', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'headerPlacement', 'height', 'heightAdjustMode', 'items', 'loadOn', 'locale', 'overflowMode', 'reorderActiveTab', 'scrollStep', 'selectedItem', 'showCloseButton', 'width', 'added', 'adding', 'created', 'destroyed', 'dragged', 'dragging', 'onDragStart', 'removed', 'removing', 'selected', 'selecting'];
export const modelProps: string[] = [];


/**
 * Represents the VueJS Tab Component.
 * ```html
 * <ejs-tab></ejs-tab>
 * ```
 */
@EJComponentDecorator({
    props: properties
})

export class TabComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = true;
    protected hasInjectedModules: boolean = false;
    public tagMapper: { [key: string]: Object } = {"e-tabitems":"e-tabitem"};
    public tagNameMapper: Object = {"e-tabitems":"e-items"};
    public templateCollection: any;
    constructor() {
        super(arguments);
        this.ej2Instances = new Tab({});
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
    
    public addTab(items: Object[], index?: number): void {
        return this.ej2Instances.addTab(items, index);
    }

    public disable(value: boolean): void {
        return this.ej2Instances.disable(value);
    }

    public enableTab(index: number, value: boolean): void {
        return this.ej2Instances.enableTab(index, value);
    }

    public getItemIndex(tabItemId: string): number {
        return this.ej2Instances.getItemIndex(tabItemId);
    }

    public hideTab(index: number, value?: boolean): void {
        return this.ej2Instances.hideTab(index, value);
    }

    public refresh(): void {
        return this.ej2Instances.refresh();
    }

    public refreshActiveTab(): void {
        return this.ej2Instances.refreshActiveTab();
    }

    public refreshActiveTabBorder(): void {
        return this.ej2Instances.refreshActiveTabBorder();
    }

    public removeTab(index: number): void {
        return this.ej2Instances.removeTab(index);
    }

    public select(args: number | Object, event?: Object): void {
        return this.ej2Instances.select(args, event);
    }
}

export const TabPlugin = {
    name: 'ejs-tab',
    install(Vue: any) {
        Vue.component(TabPlugin.name, TabComponent);
        Vue.component(TabItemPlugin.name, TabItemDirective);
        Vue.component(TabItemsPlugin.name, TabItemsDirective);

    }
}
