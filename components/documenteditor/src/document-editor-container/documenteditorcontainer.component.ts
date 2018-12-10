import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { DocumentEditorContainer } from '@syncfusion/ej2-documenteditor';


export const properties: string[] = ['enableLocalPaste', 'enablePersistence', 'enableRtl', 'enableToolbar', 'locale', 'restrictEditing', 'serviceUrl', 'showPropertiesPane', 'created', 'destroyed'];
export const modelProps: string[] = [];

/**
 * Represents the Essential JS 2 VueJS Document Editor Container
 * ```html
 * <ejs-documenteditor-container id='container'></ejs-documenteditor-container>
 * ```
 */
@EJComponentDecorator({
    props: properties
})
export class DocumentEditorContainerComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = false;
    protected hasInjectedModules: boolean = true;
    public tagMapper: { [key: string]: Object } = {};
    public tagNameMapper: Object = {};
    
    constructor() {
        super();
        this.ej2Instances = new DocumentEditorContainer({});
        this.bindProperties();
    }

    public render(createElement: any) {
        return createElement('div', (this as any).$slots.default);
    }
    
}

export const DocumentEditorContainerPlugin = {
    name: 'ejs-documenteditorcontainer',
    install(Vue: any) {
        Vue.component(DocumentEditorContainerPlugin.name, DocumentEditorContainerComponent);

    }
}
