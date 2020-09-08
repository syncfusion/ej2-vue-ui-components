import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { PdfViewer } from '@syncfusion/ej2-pdfviewer';


export const properties: string[] = ['ajaxRequestSettings', 'annotationSelectorSettings', 'annotationSettings', 'annotations', 'areaSettings', 'arrowSettings', 'circleSettings', 'contextMenuOption', 'contextMenuSettings', 'currentPageNumber', 'customStamp', 'customStampSettings', 'disableContextMenuItems', 'distanceSettings', 'documentPath', 'downloadFileName', 'drawingObject', 'enableAnnotation', 'enableAnnotationToolbar', 'enableAutoComplete', 'enableBookmark', 'enableCommentPanel', 'enableDownload', 'enableFormFields', 'enableFormFieldsValidation', 'enableFreeText', 'enableHandwrittenSignature', 'enableHyperlink', 'enableImportAnnotationMeasurement', 'enableInkAnnotation', 'enableMagnification', 'enableMeasureAnnotation', 'enableMultiLineOverlap', 'enableMultiPageAnnotation', 'enableNavigation', 'enableNavigationToolbar', 'enablePersistence', 'enablePinchZoom', 'enablePrint', 'enableRtl', 'enableShapeAnnotation', 'enableShapeLabel', 'enableStampAnnotations', 'enableStickyNotesAnnotation', 'enableTextMarkupAnnotation', 'enableTextMarkupResizer', 'enableTextSearch', 'enableTextSelection', 'enableThumbnail', 'enableToolbar', 'enableZoomOptimization', 'formFieldCollections', 'freeTextSettings', 'handWrittenSignatureSettings', 'height', 'highlightSettings', 'hyperlinkOpenState', 'inkAnnotationSettings', 'interactionMode', 'isCommandPanelOpen', 'isDocumentEdited', 'isExtractText', 'isFormFieldDocument', 'isSignatureEditable', 'isThumbnailViewOpen', 'lineSettings', 'locale', 'measurementSettings', 'pageCount', 'perimeterSettings', 'polygonSettings', 'printMode', 'radiusSettings', 'rectangleSettings', 'restrictZoomRequest', 'retryCount', 'scrollSettings', 'selectedItems', 'serverActionSettings', 'serviceUrl', 'shapeLabelSettings', 'showNotificationDialog', 'signatureMode', 'stampSettings', 'stickyNotesSettings', 'strikethroughSettings', 'textSearchColorSettings', 'tileRenderingSettings', 'toolbarSettings', 'underlineSettings', 'volumeSettings', 'width', 'zoomMode', 'zoomValue', 'addSignature', 'ajaxRequestFailed', 'ajaxRequestInitiate', 'annotationAdd', 'annotationDoubleClick', 'annotationMouseLeave', 'annotationMouseover', 'annotationMove', 'annotationPropertiesChange', 'annotationRemove', 'annotationResize', 'annotationSelect', 'bookmarkClick', 'documentLoad', 'documentLoadFailed', 'documentUnload', 'downloadEnd', 'downloadStart', 'exportFailed', 'exportStart', 'exportSuccess', 'extractTextCompleted', 'hyperlinkClick', 'hyperlinkMouseOver', 'importFailed', 'importStart', 'importSuccess', 'moveSignature', 'pageChange', 'pageClick', 'pageMouseover', 'printEnd', 'printStart', 'removeSignature', 'resizeSignature', 'signaturePropertiesChange', 'signatureSelect', 'textSearchComplete', 'textSearchHighlight', 'textSearchStart', 'textSelectionEnd', 'textSelectionStart', 'thumbnailClick', 'validateFormFields', 'zoomChange'];
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
    
    public addAnnotation(annotation: any): void {
        return this.ej2Instances.addAnnotation(annotation);
    }

    public deleteAnnotations(): void {
        return this.ej2Instances.deleteAnnotations();
    }

    public download(): void {
        return this.ej2Instances.download();
    }

    public exportAnnotations(): void {
        return this.ej2Instances.exportAnnotations();
    }

    public exportAnnotationsAsObject(): Object {
        return this.ej2Instances.exportAnnotationsAsObject();
    }

    public exportFormFields(path?: string): void {
        return this.ej2Instances.exportFormFields(path);
    }

    public exportFormFieldsAsObject(): Object {
        return this.ej2Instances.exportFormFieldsAsObject();
    }

    public importAnnotations(importData: any): void {
        return this.ej2Instances.importAnnotations(importData);
    }

    public importFormFields(formFields: any): void {
        return this.ej2Instances.importFormFields(formFields);
    }

    public load(document: string, password: string): void {
        return this.ej2Instances.load(document, password);
    }

    public redo(): void {
        return this.ej2Instances.redo();
    }

    public requiredModules(): Object[] {
        return this.ej2Instances.requiredModules();
    }

    public retrieveFormFields(): Object[] {
        return this.ej2Instances.retrieveFormFields();
    }

    public saveAsBlob(): Object {
        return this.ej2Instances.saveAsBlob();
    }

    public setJsonData(jsonData: any): void {
        return this.ej2Instances.setJsonData(jsonData);
    }

    public undo(): void {
        return this.ej2Instances.undo();
    }

    public unload(): void {
        return this.ej2Instances.unload();
    }

    public updateFormFields(formFields: any): void {
        return this.ej2Instances.updateFormFields(formFields);
    }

    public updateViewerContainer(): void {
        return this.ej2Instances.updateViewerContainer();
    }
}

export const PdfViewerPlugin = {
    name: 'ejs-pdfviewer',
    install(Vue: any) {
        Vue.component(PdfViewerPlugin.name, PdfViewerComponent);

    }
}
