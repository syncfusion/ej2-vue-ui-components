import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { DocumentEditor } from '@syncfusion/ej2-documenteditor';


export const properties: string[] = ['enableBookmarkDialog', 'enableBordersAndShadingDialog', 'enableContextMenu', 'enableEditor', 'enableEditorHistory', 'enableFontDialog', 'enableHyperlinkDialog', 'enableImageResizer', 'enableListDialog', 'enableOptionsPane', 'enablePageSetupDialog', 'enableParagraphDialog', 'enablePersistence', 'enablePrint', 'enableRtl', 'enableSearch', 'enableSelection', 'enableSfdtExport', 'enableStyleDialog', 'enableTableDialog', 'enableTableOfContentsDialog', 'enableTableOptionsDialog', 'enableTablePropertiesDialog', 'enableTextExport', 'enableWordExport', 'isReadOnly', 'locale', 'zoomFactor', 'contentChange', 'created', 'destroyed', 'documentChange', 'keyDown', 'requestNavigate', 'searchResultsChange', 'selectionChange', 'viewChange', 'zoomFactorChange'];
export const modelProps: string[] = [];

/**
 * Represents the Essential JS 2 VueJS Document Editor Component
 * ```html
 * <ejs-documenteditor id='container'></ejs-documenteditor>
 * ```
 */
@EJComponentDecorator({
    props: properties
})
export class DocumentEditorComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = false;
    protected hasInjectedModules: boolean = true;
    public tagMapper: { [key: string]: Object } = {};
    public tagNameMapper: Object = {};
    
    constructor() {
        super();
        this.ej2Instances = new DocumentEditor({});
        this.bindProperties();
    }

    public render(createElement: any) {
        return createElement('div', (this as any).$slots.default);
    }
    
    public enableAllModules(): void {
        return this.ej2Instances.enableAllModules();
    }

    public fitPage(pageFitType?: Object): void {
        return this.ej2Instances.fitPage(pageFitType);
    }

    public focusIn(): void {
        return this.ej2Instances.focusIn();
    }

    public getStyleNames(styleType?: Object): undefined {
        return this.ej2Instances.getStyleNames(styleType);
    }

    public getStyles(styleType?: Object): undefined {
        return this.ej2Instances.getStyles(styleType);
    }

    public open(sfdtText: string): void {
        return this.ej2Instances.open(sfdtText);
    }

    public openBlank(): void {
        return this.ej2Instances.openBlank();
    }

    public print(printWindow?: Object): void {
        return this.ej2Instances.print(printWindow);
    }

    public resize(width?: number, height?: number): void {
        return this.ej2Instances.resize(width, height);
    }

    public save(fileName: string, formatType?: Object): void {
        return this.ej2Instances.save(fileName, formatType);
    }

    public saveAsBlob(formatType?: Object): Object {
        return this.ej2Instances.saveAsBlob(formatType);
    }

    public scrollToPage(pageNumber: number): boolean {
        return this.ej2Instances.scrollToPage(pageNumber);
    }

    public serialize(): string {
        return this.ej2Instances.serialize();
    }

    public showDialog(dialogType: Object): void {
        return this.ej2Instances.showDialog(dialogType);
    }

    public showOptionsPane(): void {
        return this.ej2Instances.showOptionsPane();
    }
}

export const DocumentEditorPlugin = {
    name: 'ejs-documenteditor',
    install(Vue: any) {
        Vue.component(DocumentEditorPlugin.name, DocumentEditorComponent);

    }
}
