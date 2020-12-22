import { PdfViewer } from '@syncfusion/ej2-pdfviewer';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties = ['ajaxRequestSettings', 'annotationSelectorSettings', 'annotationSettings', 'annotations', 'areaSettings', 'arrowSettings', 'circleSettings', 'contextMenuOption', 'contextMenuSettings', 'currentPageNumber', 'customStamp', 'customStampSettings', 'dateTimeFormat', 'disableContextMenuItems', 'distanceSettings', 'documentPath', 'downloadFileName', 'drawingObject', 'enableAnnotation', 'enableAnnotationToolbar', 'enableAutoComplete', 'enableBookmark', 'enableBookmarkStyles', 'enableCommentPanel', 'enableDesktopMode', 'enableDownload', 'enableFormFields', 'enableFormFieldsValidation', 'enableFreeText', 'enableHandwrittenSignature', 'enableHyperlink', 'enableImportAnnotationMeasurement', 'enableInkAnnotation', 'enableMagnification', 'enableMeasureAnnotation', 'enableMultiLineOverlap', 'enableMultiPageAnnotation', 'enableNavigation', 'enableNavigationToolbar', 'enablePersistence', 'enablePinchZoom', 'enablePrint', 'enableRtl', 'enableShapeAnnotation', 'enableShapeLabel', 'enableStampAnnotations', 'enableStickyNotesAnnotation', 'enableTextMarkupAnnotation', 'enableTextMarkupResizer', 'enableTextSearch', 'enableTextSelection', 'enableThumbnail', 'enableToolbar', 'enableZoomOptimization', 'formFieldCollections', 'freeTextSettings', 'handWrittenSignatureSettings', 'height', 'hideSaveSignature', 'highlightSettings', 'hyperlinkOpenState', 'inkAnnotationSettings', 'interactionMode', 'isAnnotationToolbarOpen', 'isBookmarkPanelOpen', 'isCommandPanelOpen', 'isDocumentEdited', 'isExtractText', 'isFormFieldDocument', 'isMaintainSelection', 'isSignatureEditable', 'isThumbnailViewOpen', 'isValidFreeText', 'lineSettings', 'locale', 'measurementSettings', 'pageCount', 'perimeterSettings', 'polygonSettings', 'printMode', 'radiusSettings', 'rectangleSettings', 'restrictZoomRequest', 'retryCount', 'scrollSettings', 'selectedItems', 'serverActionSettings', 'serviceUrl', 'shapeLabelSettings', 'showNotificationDialog', 'signatureFieldSettings', 'signatureFitMode', 'stampSettings', 'stickyNotesSettings', 'strikethroughSettings', 'textSearchColorSettings', 'tileRenderingSettings', 'toolbarSettings', 'underlineSettings', 'volumeSettings', 'width', 'zoomMode', 'zoomValue', 'addSignature', 'ajaxRequestFailed', 'ajaxRequestInitiate', 'annotationAdd', 'annotationDoubleClick', 'annotationMouseLeave', 'annotationMouseover', 'annotationMove', 'annotationPropertiesChange', 'annotationRemove', 'annotationResize', 'annotationSelect', 'annotationUnSelect', 'beforeAddFreeText', 'bookmarkClick', 'buttonFieldClick', 'commentAdd', 'commentDelete', 'commentEdit', 'commentSelect', 'commentStatusChanged', 'created', 'documentLoad', 'documentLoadFailed', 'documentUnload', 'downloadEnd', 'downloadStart', 'exportFailed', 'exportStart', 'exportSuccess', 'extractTextCompleted', 'formFieldFocusOut', 'hyperlinkClick', 'hyperlinkMouseOver', 'importFailed', 'importStart', 'importSuccess', 'moveSignature', 'pageChange', 'pageClick', 'pageMouseover', 'printEnd', 'printStart', 'removeSignature', 'resizeSignature', 'signaturePropertiesChange', 'signatureSelect', 'textSearchComplete', 'textSearchHighlight', 'textSearchStart', 'textSelectionEnd', 'textSelectionStart', 'thumbnailClick', 'validateFormFields', 'zoomChange'];
const modelProps = [];
/**
 * `ejs-pdfviewer` represents the VueJS PdfViewer Component.
 * ```vue
 * <ejs-pdfviewer></ejs-pdfviewer>
 * ```
 */
let PdfViewerComponent = class PdfViewerComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties;
        this.models = modelProps;
        this.hasChildDirective = false;
        this.hasInjectedModules = true;
        this.tagMapper = {};
        this.tagNameMapper = {};
        this.ej2Instances = new PdfViewer({});
        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
    }
    setProperties(prop, muteOnChange) {
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map((key) => {
                this.models.map((model) => {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    }
    render(createElement) {
        return createElement('div', this.$slots.default);
    }
    addAnnotation(annotation) {
        return this.ej2Instances.addAnnotation(annotation);
    }
    clearFormFields() {
        return this.ej2Instances.clearFormFields();
    }
    deleteAnnotations() {
        return this.ej2Instances.deleteAnnotations();
    }
    download() {
        return this.ej2Instances.download();
    }
    exportAnnotation(annotationDataFormat) {
        return this.ej2Instances.exportAnnotation(annotationDataFormat);
    }
    exportAnnotationsAsObject() {
        return this.ej2Instances.exportAnnotationsAsObject();
    }
    exportFormFields(path) {
        return this.ej2Instances.exportFormFields(path);
    }
    exportFormFieldsAsObject() {
        return this.ej2Instances.exportFormFieldsAsObject();
    }
    fireAnnotationUnSelect(id, pageNumber, annotation) {
        return this.ej2Instances.fireAnnotationUnSelect(id, pageNumber, annotation);
    }
    importAnnotation(importData, annotationDataFormat) {
        return this.ej2Instances.importAnnotation(importData, annotationDataFormat);
    }
    importFormFields(formFields) {
        return this.ej2Instances.importFormFields(formFields);
    }
    load(document, password) {
        return this.ej2Instances.load(document, password);
    }
    redo() {
        return this.ej2Instances.redo();
    }
    requiredModules() {
        return this.ej2Instances.requiredModules();
    }
    resetFormFields() {
        return this.ej2Instances.resetFormFields();
    }
    retrieveFormFields() {
        return this.ej2Instances.retrieveFormFields();
    }
    saveAsBlob() {
        return this.ej2Instances.saveAsBlob();
    }
    setJsonData(jsonData) {
        return this.ej2Instances.setJsonData(jsonData);
    }
    showNotificationPopup(errorString) {
        return this.ej2Instances.showNotificationPopup(errorString);
    }
    undo() {
        return this.ej2Instances.undo();
    }
    unload() {
        return this.ej2Instances.unload();
    }
    updateFormFields(formFields) {
        return this.ej2Instances.updateFormFields(formFields);
    }
    updateFormFieldsValue(fieldValue) {
        return this.ej2Instances.updateFormFieldsValue(fieldValue);
    }
    updateViewerContainer() {
        return this.ej2Instances.updateViewerContainer();
    }
};
PdfViewerComponent = __decorate([
    EJComponentDecorator({
        props: properties
    })
], PdfViewerComponent);
const PdfViewerPlugin = {
    name: 'ejs-pdfviewer',
    install(Vue) {
        Vue.component(PdfViewerPlugin.name, PdfViewerComponent);
    }
};

export { PdfViewerComponent, PdfViewerPlugin };
export * from '@syncfusion/ej2-pdfviewer';
//# sourceMappingURL=ej2-vue-pdfviewer.es2015.js.map
