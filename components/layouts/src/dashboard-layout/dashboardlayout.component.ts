import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { DashboardLayout } from '@syncfusion/ej2-layouts';
import { PanelsDirective, PanelDirective, PanelsPlugin, PanelPlugin } from './panels.directive'


export const properties: string[] = ['allowDragging', 'allowFloating', 'allowPushing', 'allowResizing', 'cellAspectRatio', 'cellSpacing', 'columns', 'draggableHandle', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'locale', 'mediaQuery', 'panels', 'resizableHandles', 'showGridLines', 'change', 'created', 'destroyed', 'drag', 'dragStart', 'dragStop', 'resize', 'resizeStart', 'resizeStop'];
export const modelProps: string[] = [];

/**
 * Represents the Essential JS 2 VueJS DashboardLayout Component.
 * ```html
 * <ejs-dashboardlayout></ejs-dashboardlayout>
 * ```
 */
@EJComponentDecorator({
    props: properties
})
export class DashboardLayoutComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = true;
    protected hasInjectedModules: boolean = false;
    public tagMapper: { [key: string]: Object } = {"e-panels":"e-panel"};
    public tagNameMapper: Object = {};
    
    constructor() {
        super();
        this.ej2Instances = new DashboardLayout({});
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
    
    public addPanel(panel: Object): void {
        return this.ej2Instances.addPanel(panel);
    }

    public movePanel(id: string, row: number, col: number): void {
        return this.ej2Instances.movePanel(id, row, col);
    }

    public refresh(): void {
        return this.ej2Instances.refresh();
    }

    public removeAll(): void {
        return this.ej2Instances.removeAll();
    }

    public removePanel(id: string): void {
        return this.ej2Instances.removePanel(id);
    }

    public resizePanel(id: string, sizeX: number, sizeY: number): void {
        return this.ej2Instances.resizePanel(id, sizeX, sizeY);
    }

    public serialize(): Object[] {
        return this.ej2Instances.serialize();
    }

    public updatePanel(panel: Object): void {
        return this.ej2Instances.updatePanel(panel);
    }
}

export const DashboardLayoutPlugin = {
    name: 'ejs-dashboardlayout',
    install(Vue: any) {
        Vue.component(DashboardLayoutPlugin.name, DashboardLayoutComponent);
        Vue.component(PanelPlugin.name, PanelDirective);
        Vue.component(PanelsPlugin.name, PanelsDirective);

    }
}
