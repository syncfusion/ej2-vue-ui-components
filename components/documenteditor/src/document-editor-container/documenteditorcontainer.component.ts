import { Options } from 'vue-class-component';
import { ComponentBase, EJComponentDecorator, getProps, allVue, gh } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined, getValue } from '@syncfusion/ej2-base';

import { DocumentEditorContainer } from '@syncfusion/ej2-documenteditor';


// {{VueImport}}
export const properties: string[] = ['isLazyUpdate', 'currentUser', 'documentEditorSettings', 'documentSettings', 'enableComment', 'enableCsp', 'enableLocalPaste', 'enableLockAndEdit', 'enablePersistence', 'enableRtl', 'enableSpellCheck', 'enableToolbar', 'enableTrackChanges', 'headers', 'height', 'layoutType', 'locale', 'restrictEditing', 'serverActionSettings', 'serviceUrl', 'showPropertiesPane', 'toolbarItems', 'userColor', 'width', 'zIndex', 'beforeCommentAction', 'beforePaneSwitch', 'commentDelete', 'contentChange', 'contentControl', 'created', 'customContextMenuBeforeOpen', 'customContextMenuSelect', 'destroyed', 'documentChange', 'selectionChange', 'serviceFailure', 'toolbarClick', 'trackChange', 'beforeXmlHttpRequestSend'];
export const modelProps: string[] = [];

export const testProp: any = getProps({props: properties});
export const props = testProp[0];
export const watch = testProp[1];

export const emitProbs: any = Object.keys(watch);
emitProbs.push('modelchanged');
for (let props of modelProps) {
    emitProbs.push(
        'update:'+props
    );
}

export const isExecute: any = gh ? false : true;

/**
 * Represents the Essential JS 2 VueJS Document Editor Container
 * ```html
 * <ejs-documenteditor-container id='container'></ejs-documenteditor-container>
 * ```
 */
@EJComponentDecorator({
    props: properties
},isExecute)

/* Start Options({
    props: props,
    watch: watch,
    emits: emitProbs,
    provide: function provide() {
        return {
            custom: this.custom
        };
    }
}) End */

export class DocumentEditorContainerComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = false;
    protected hasInjectedModules: boolean = true;
    public tagMapper: { [key: string]: Object } = {};
    public tagNameMapper: Object = {};
    public isVue3: boolean;
    public templateCollection: any;
    constructor() {
        super(arguments);
        this.isVue3 = !isExecute;
        this.ej2Instances = new DocumentEditorContainer({});
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
        if(this.isVue3) {
            this.models = !this.models ? this.ej2Instances.referModels : this.models;
        }
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map((key: string): void => {
                this.models.map((model: string): void => {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        if (this.isVue3) {
                            this.ej2Instances.vueInstance.$emit('update:' + key, prop[key]);
                        } else {
                            (this as any).$emit('update:' + key, prop[key]);
                            (this as any).$emit('modelchanged', prop[key]);
                        }
                    }
                });
            });
        }
    }

    public render(createElement: any) {
        let h: any = gh || createElement;
        let slots: any = null;
        if(!isNullOrUndefined((this as any).$slots.default)) {
            slots = gh ? (this as any).$slots.default() : (this as any).$slots.default;
        }
        return h('div', slots);
    }
    public custom(): void {
        this.updated();
    }
    
    public resize(width?: number, height?: number): void {
        return this.ej2Instances.resize(width, height);
    }

    public setDefaultCharacterFormat(characterFormat: Object): void {
        return this.ej2Instances.setDefaultCharacterFormat(characterFormat);
    }

    public setDefaultParagraphFormat(paragraphFormat: Object): void {
        return this.ej2Instances.setDefaultParagraphFormat(paragraphFormat);
    }

    public setDefaultSectionFormat(sectionFormat: Object): void {
        return this.ej2Instances.setDefaultSectionFormat(sectionFormat);
    }
}

export const DocumentEditorContainerPlugin = {
    name: 'ejs-documenteditorcontainer',
    install(Vue: any) {
        Vue.component(DocumentEditorContainerPlugin.name, DocumentEditorContainerComponent);

    }
}