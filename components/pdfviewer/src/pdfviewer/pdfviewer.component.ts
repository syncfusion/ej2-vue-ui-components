import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { PdfViewer } from '@syncfusion/ej2-pdfviewer';


export const properties: string[] = ['annotationToolbarSettings', 'documentPath', 'enableAnnotation', 'enableBookmark', 'enableDownload', 'enableHyperlink', 'enableMagnification', 'enableNavigation', 'enableNavigationToolbar', 'enablePersistence', 'enablePrint', 'enableRtl', 'enableTextMarkupAnnotation', 'enableTextSearch', 'enableTextSelection', 'enableThumbnail', 'enableToolbar', 'height', 'highlightSettings', 'hyperlinkOpenState', 'interactionMode', 'locale', 'serverActionSettings', 'serviceUrl', 'strikethroughSettings', 'toolbarSettings', 'underlineSettings', 'width', 'ajaxRequestFailed', 'annotationAdd', 'annotationPropertiesChange', 'annotationRemove', 'documentLoad', 'documentLoadFailed', 'documentUnload', 'hyperlinkClick', 'pageChange', 'pageClick', 'zoomChange'];
export const modelProps: string[] = [];

/**
 * `ejs-pdfviewer` represents the VueJS PdfViewer Component.
 * ```vue
 * <ejs-pdfviewer></ejs-pdfviewer>
 * ```
 */
@EJComponentDecorator({
    props: properties
})
export class PdfViewerComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = false;
    protected hasInjectedModules: boolean = true;
    public tagMapper: { [key: string]: Object } = {};
    public tagNameMapper: Object = {};
    
    constructor() {
        super();
        this.ej2Instances = new PdfViewer({});
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
    
    public download(): void {
        return this.ej2Instances.download();
    }

    public load(document: string, password: string): void {
        return this.ej2Instances.load(document, password);
    }

    public redo(): void {
        return this.ej2Instances.redo();
    }

    public requiredModules(): undefined {
        return this.ej2Instances.requiredModules();
    }

    public undo(): void {
        return this.ej2Instances.undo();
    }

    public unload(): void {
        return this.ej2Instances.unload();
    }
}

export const PdfViewerPlugin = {
    name: 'ejs-pdfviewer',
    install(Vue: any) {
        Vue.component(PdfViewerPlugin.name, PdfViewerComponent);

    }
}
