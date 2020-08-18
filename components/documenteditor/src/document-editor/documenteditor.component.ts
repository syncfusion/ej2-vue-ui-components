import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { DocumentEditor } from '@syncfusion/ej2-documenteditor';


export const properties: string[] = ['acceptTab', 'currentUser', 'defaultPasteOption', 'documentEditorSettings', 'documentName', 'enableBookmarkDialog', 'enableBordersAndShadingDialog', 'enableComment', 'enableContextMenu', 'enableCursorOnReadOnly', 'enableEditor', 'enableEditorHistory', 'enableFontDialog', 'enableFormField', 'enableHyperlinkDialog', 'enableImageResizer', 'enableListDialog', 'enableLocalPaste', 'enableOptionsPane', 'enablePageSetupDialog', 'enableParagraphDialog', 'enablePersistence', 'enablePrint', 'enableRtl', 'enableSearch', 'enableSelection', 'enableSfdtExport', 'enableSpellCheck', 'enableStyleDialog', 'enableTableDialog', 'enableTableOfContentsDialog', 'enableTableOptionsDialog', 'enableTablePropertiesDialog', 'enableTextExport', 'enableTrackChanges', 'enableWordExport', 'headers', 'height', 'isReadOnly', 'layoutType', 'locale', 'pageGap', 'pageOutline', 'serverActionSettings', 'serviceUrl', 'showComments', 'showRevisions', 'useCtrlClickToFollowHyperlink', 'userColor', 'width', 'zIndex', 'zoomFactor', 'afterFormFieldFill', 'beforeFileOpen', 'beforeFormFieldFill', 'beforePaneSwitch', 'commentBegin', 'commentDelete', 'commentEnd', 'contentChange', 'created', 'customContextMenuBeforeOpen', 'customContextMenuSelect', 'destroyed', 'documentChange', 'keyDown', 'requestNavigate', 'searchResultsChange', 'selectionChange', 'serviceFailure', 'trackChange', 'viewChange', 'zoomFactorChange'];
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
    
    public enableAllModules(): void {
        return this.ej2Instances.enableAllModules();
    }

    public exportFormData(): Object[] {
        return this.ej2Instances.exportFormData();
    }

    public fitPage(pageFitType?: Object): void {
        return this.ej2Instances.fitPage(pageFitType);
    }

    public focusIn(): void {
        return this.ej2Instances.focusIn();
    }

    public getBookmarks(): string[] {
        return this.ej2Instances.getBookmarks();
    }

    public getFormFieldInfo(name: string): Object | Object | Object {
        return this.ej2Instances.getFormFieldInfo(name);
    }

    public getFormFieldNames(): string[] {
        return this.ej2Instances.getFormFieldNames();
    }

    public getStyleNames(styleType?: Object): string[] {
        return this.ej2Instances.getStyleNames(styleType);
    }

    public getStyles(styleType?: Object): Object[] {
        return this.ej2Instances.getStyles(styleType);
    }

    public importFormData(formData: Object[]): void {
        return this.ej2Instances.importFormData(formData);
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

    public resetFormFields(name?: string): void {
        return this.ej2Instances.resetFormFields(name);
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

    public setDefaultCharacterFormat(characterFormat: Object): void {
        return this.ej2Instances.setDefaultCharacterFormat(characterFormat);
    }

    public setDefaultParagraphFormat(paragraphFormat: Object): void {
        return this.ej2Instances.setDefaultParagraphFormat(paragraphFormat);
    }

    public setDefaultSectionFormat(sectionFormat: Object): void {
        return this.ej2Instances.setDefaultSectionFormat(sectionFormat);
    }

    public setFormFieldInfo(name: string, formFieldInfo: Object | Object | Object): void {
        return this.ej2Instances.setFormFieldInfo(name, formFieldInfo);
    }

    public showDialog(dialogType: Object): void {
        return this.ej2Instances.showDialog(dialogType);
    }

    public showOptionsPane(): void {
        return this.ej2Instances.showOptionsPane();
    }

    public showRestrictEditingPane(): void {
        return this.ej2Instances.showRestrictEditingPane();
    }

    public updateFields(): void {
        return this.ej2Instances.updateFields();
    }
}

export const DocumentEditorPlugin = {
    name: 'ejs-documenteditor',
    install(Vue: any) {
        Vue.component(DocumentEditorPlugin.name, DocumentEditorComponent);

    }
}
