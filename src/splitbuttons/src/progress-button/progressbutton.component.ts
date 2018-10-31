import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { ProgressButton } from '@syncfusion/ej2-splitbuttons';


export const properties: string[] = ['animationSettings', 'content', 'cssClass', 'disabled', 'duration', 'enableProgress', 'iconCss', 'iconPosition', 'isPrimary', 'isToggle', 'spinSettings', 'begin', 'created', 'end', 'fail', 'progress'];
export const modelProps: string[] = [];

/**
 * Represents the Essential JS 2 VueJS ProgressButton Component
 * ```html
 * <ejs-progressbutton content='Progress Button'></ejs-progressbutton>
 * ```
 */
@EJComponentDecorator({
    props: properties
})
export class ProgressButtonComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = false;
    protected hasInjectedModules: boolean = false;
    public tagMapper: { [key: string]: Object } = {};
    public tagNameMapper: Object = {};
    
    constructor() {
        super();
        this.ej2Instances = new ProgressButton({});
        this.bindProperties();
    }

    public render(createElement: any) {
        return createElement('button', (this as any).$slots.default);
    }
    
    public start(percent?: number): void {
        return this.ej2Instances.start(percent);
    }

    public stop(): void {
        return this.ej2Instances.stop();
    }
}

export const ProgressButtonPlugin = {
    name: 'ejs-progressbutton',
    install(Vue: any) {
        Vue.component(ProgressButtonPlugin.name, ProgressButtonComponent);

    }
}
