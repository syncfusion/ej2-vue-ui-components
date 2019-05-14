import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { DocumentEditorContainer } from '@syncfusion/ej2-documenteditor';


export const properties: string[] = ['enableLocalPaste', 'enablePersistence', 'enableRtl', 'enableToolbar', 'locale', 'restrictEditing', 'serviceUrl', 'showPropertiesPane', 'contentChange', 'created', 'destroyed', 'selectionChange'];
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
    
}

export const DocumentEditorContainerPlugin = {
    name: 'ejs-documenteditorcontainer',
    install(Vue: any) {
        Vue.component(DocumentEditorContainerPlugin.name, DocumentEditorContainerComponent);

    }
}
