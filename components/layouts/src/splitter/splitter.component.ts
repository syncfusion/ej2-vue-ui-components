import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { Splitter } from '@syncfusion/ej2-layouts';
import { PanesDirective, PaneDirective, PanesPlugin, PanePlugin } from './panesettings.directive'


export const properties: string[] = ['cssClass', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'enabled', 'height', 'locale', 'orientation', 'paneSettings', 'separatorSize', 'width', 'beforeCollapse', 'beforeExpand', 'beforeSanitizeHtml', 'collapsed', 'created', 'expanded', 'resizeStart', 'resizeStop', 'resizing'];
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
    
    public addPane(paneProperties: Object, index: number): void {
        return this.ej2Instances.addPane(paneProperties, index);
    }

    public collapse(index: number): void {
        return this.ej2Instances.collapse(index);
    }

    public expand(index: number): void {
        return this.ej2Instances.expand(index);
    }

    public removePane(index: number): void {
        return this.ej2Instances.removePane(index);
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
