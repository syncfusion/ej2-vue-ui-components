import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { Button } from '@syncfusion/ej2-buttons';


export const properties: string[] = ['content', 'cssClass', 'disabled', 'enablePersistence', 'enableRtl', 'iconCss', 'iconPosition', 'isPrimary', 'isToggle', 'locale', 'created'];
export const modelProps: string[] = [];

/**
 * Represents the Essential JS 2 VueJS Button Component
 * ```html
 * <ejs-button>Button</ejs-button>
 * ```
 */
@EJComponentDecorator({
    props: properties
})
export class ButtonComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = false;
    protected hasInjectedModules: boolean = false;
    public tagMapper: { [key: string]: Object } = {};
    public tagNameMapper: Object = {};
    
    constructor() {
        super();
        this.ej2Instances = new Button({});
        this.bindProperties();
    }

    public render(createElement: any) {
        return createElement('button', (this as any).$slots.default);
    }
    
}

export const ButtonPlugin = {
    name: 'ejs-button',
    install(Vue: any) {
        Vue.component(ButtonPlugin.name, ButtonComponent);

    }
}
