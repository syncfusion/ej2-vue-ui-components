import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { ListView } from '@syncfusion/ej2-lists';


export const properties: string[] = ['animation', 'checkBoxPosition', 'cssClass', 'dataSource', 'enable', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'enableVirtualization', 'fields', 'groupTemplate', 'headerTemplate', 'headerTitle', 'height', 'htmlAttributes', 'locale', 'query', 'showCheckBox', 'showHeader', 'showIcon', 'sortOrder', 'template', 'width', 'actionBegin', 'actionComplete', 'actionFailure', 'select'];
export const modelProps: string[] = [];

/**
 * Represents VueJS ListView Component
 * ```
 * <ejs-listview :dataSource='data'></ejs-listview>
 * ```
 */
@EJComponentDecorator({
    props: properties
})
export class ListViewComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = false;
    protected hasInjectedModules: boolean = true;
    public tagMapper: { [key: string]: Object } = {};
    public tagNameMapper: Object = {};
    
    constructor() {
        super();
        this.ej2Instances = new ListView({});
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
        return createElement('div', (this as any).$slots.default);
    }
    
    public addItem(data: undefined[], fields: Object): void {
        return this.ej2Instances.addItem(data, fields);
    }

    public back(): void {
        return this.ej2Instances.back();
    }

    public checkAllItems(): void {
        return this.ej2Instances.checkAllItems();
    }

    public checkItem(item: Object | Object | Object): void {
        return this.ej2Instances.checkItem(item);
    }

    public disableItem(item: Object | Object | Object): void {
        return this.ej2Instances.disableItem(item);
    }

    public enableItem(item: Object | Object | Object): void {
        return this.ej2Instances.enableItem(item);
    }

    public findItem(item: Object | Object | Object): Object {
        return this.ej2Instances.findItem(item);
    }

    public getSelectedItems(): Object | Object | Object | Object {
        return this.ej2Instances.getSelectedItems();
    }

    public hideItem(item: Object | Object | Object): void {
        return this.ej2Instances.hideItem(item);
    }

    public refreshItemHeight(): void {
        return this.ej2Instances.refreshItemHeight();
    }

    public removeItem(item: Object | Object | Object): void {
        return this.ej2Instances.removeItem(item);
    }

    public removeMultipleItems(item: Object[] | Object[] | Object[]): void {
        return this.ej2Instances.removeMultipleItems(item);
    }

    public requiredModules(): Object[] {
        return this.ej2Instances.requiredModules();
    }

    public selectItem(item: Object | Object | Object): void {
        return this.ej2Instances.selectItem(item);
    }

    public selectMultipleItems(item: Object[] | Object[] | Object[]): void {
        return this.ej2Instances.selectMultipleItems(item);
    }

    public showItem(item: Object | Object | Object): void {
        return this.ej2Instances.showItem(item);
    }

    public uncheckAllItems(): void {
        return this.ej2Instances.uncheckAllItems();
    }

    public uncheckItem(item: Object | Object | Object): void {
        return this.ej2Instances.uncheckItem(item);
    }
}

export const ListViewPlugin = {
    name: 'ejs-listview',
    install(Vue: any) {
        Vue.component(ListViewPlugin.name, ListViewComponent);

    }
}
