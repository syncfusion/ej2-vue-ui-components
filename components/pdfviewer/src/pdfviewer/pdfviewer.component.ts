import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { PdfViewer } from '@syncfusion/ej2-pdfviewer';


export const properties: string[] = ['documentPath', 'enableBookmark', 'enableDownload', 'enableHyperlink', 'enableMagnification', 'enableNavigation', 'enablePersistence', 'enablePrint', 'enableRtl', 'enableTextSearch', 'enableTextSelection', 'enableThumbnail', 'enableToolbar', 'height', 'hyperlinkOpenState', 'interactionMode', 'locale', 'serverActionSettings', 'serviceUrl', 'toolbarSettings', 'width', 'ajaxRequestFailed', 'documentLoad', 'documentLoadFailed', 'documentUnload', 'hyperlinkClick', 'pageChange', 'pageClick', 'zoomChange'];
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

    public requiredModules(): undefined {
        return this.ej2Instances.requiredModules();
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
