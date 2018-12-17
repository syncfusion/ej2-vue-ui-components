import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { Splitter } from '@syncfusion/ej2-layouts';
import { PanesDirective, PaneDirective, PanesPlugin, PanePlugin } from './panesettings.directive'


export const properties: string[] = ['cssClass', 'enablePersistence', 'enableRtl', 'enabled', 'height', 'locale', 'orientation', 'paneSettings', 'separatorSize', 'width', 'created', 'resizeStart', 'resizeStop', 'resizing'];
export const modelProps: string[] = [];

/**
 * Represents the VueJS Splitter component
 * ```html
 * <ejs-splitter></ejs-splitter>
 * ```
 */
@EJComponentDecorator({
    props: properties
})
export class SplitterComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = true;
    protected hasInjectedModules: boolean = false;
    public tagMapper: { [key: string]: Object } = {"e-panes":"e-pane"};
    public tagNameMapper: Object = {"e-panes":"e-paneSettings"};
    
    constructor() {
        super();
        this.ej2Instances = new Splitter({});
        this.bindProperties();
    }

    public render(createElement: any) {
        return createElement('div', (this as any).$slots.default);
    }
    
    public addPane(paneProperties: Object, index: number): void {
        return this.ej2Instances.addPane(paneProperties, index);
    }

    public removePane(index: number): void {
        return this.ej2Instances.removePane(index);
    }

    public removeSeparator(): void {
        return this.ej2Instances.removeSeparator();
    }
}

export const SplitterPlugin = {
    name: 'ejs-splitter',
    install(Vue: any) {
        Vue.component(SplitterPlugin.name, SplitterComponent);
        Vue.component(PanePlugin.name, PaneDirective);
        Vue.component(PanesPlugin.name, PanesDirective);

    }
}
