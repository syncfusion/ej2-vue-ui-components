import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { SplitButton } from '@syncfusion/ej2-splitbuttons';


export const properties: string[] = ['content', 'cssClass', 'disabled', 'enablePersistence', 'enableRtl', 'iconCss', 'iconPosition', 'items', 'locale', 'target', 'beforeClose', 'beforeItemRender', 'beforeOpen', 'click', 'close', 'created', 'open', 'select'];
export const modelProps: string[] = [];

/**
 * Represents the Essential JS 2 VueJS SplitButton Component
 * ```html
 * <ejs-splitbutton content='Split Button'></ejs-splitbutton>
 * ```
 */
@EJComponentDecorator({
    props: properties
})
export class SplitButtonComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = false;
    protected hasInjectedModules: boolean = false;
    public tagMapper: { [key: string]: Object } = {};
    public tagNameMapper: Object = {};
    
    constructor() {
        super();
        this.ej2Instances = new SplitButton({});
        this.bindProperties();
    }

    public render(createElement: any) {
        return createElement('button', (this as any).$slots.default);
    }
    
    public toggle(): void {
        return this.ej2Instances.toggle();
    }
}

export const SplitButtonPlugin = {
    name: 'ejs-splitbutton',
    install(Vue: any) {
        Vue.component(SplitButtonPlugin.name, SplitButtonComponent);

    }
}
