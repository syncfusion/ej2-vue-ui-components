import { PdfViewer } from '@syncfusion/ej2-pdfviewer';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var properties = ['ajaxRequestSettings', 'annotationSelectorSettings', 'annotationSettings', 'annotations', 'areaSettings', 'arrowSettings', 'circleSettings', 'contextMenuOption', 'contextMenuSettings', 'currentPageNumber', 'customStamp', 'customStampSettings', 'disableContextMenuItems', 'distanceSettings', 'documentPath', 'downloadFileName', 'drawingObject', 'enableAnnotation', 'enableAnnotationToolbar', 'enableAutoComplete', 'enableBookmark', 'enableBookmarkStyles', 'enableCommentPanel', 'enableDownload', 'enableFormFields', 'enableFormFieldsValidation', 'enableFreeText', 'enableHandwrittenSignature', 'enableHyperlink', 'enableImportAnnotationMeasurement', 'enableInkAnnotation', 'enableMagnification', 'enableMeasureAnnotation', 'enableMultiLineOverlap', 'enableMultiPageAnnotation', 'enableNavigation', 'enableNavigationToolbar', 'enablePersistence', 'enablePinchZoom', 'enablePrint', 'enableRtl', 'enableShapeAnnotation', 'enableShapeLabel', 'enableStampAnnotations', 'enableStickyNotesAnnotation', 'enableTextMarkupAnnotation', 'enableTextMarkupResizer', 'enableTextSearch', 'enableTextSelection', 'enableThumbnail', 'enableToolbar', 'enableZoomOptimization', 'formFieldCollections', 'freeTextSettings', 'handWrittenSignatureSettings', 'height', 'highlightSettings', 'hyperlinkOpenState', 'inkAnnotationSettings', 'interactionMode', 'isAnnotationToolbarOpen', 'isCommandPanelOpen', 'isDocumentEdited', 'isExtractText', 'isFormFieldDocument', 'isMaintainSelection', 'isSignatureEditable', 'isThumbnailViewOpen', 'lineSettings', 'locale', 'measurementSettings', 'pageCount', 'perimeterSettings', 'polygonSettings', 'printMode', 'radiusSettings', 'rectangleSettings', 'restrictZoomRequest', 'retryCount', 'scrollSettings', 'selectedItems', 'serverActionSettings', 'serviceUrl', 'shapeLabelSettings', 'showNotificationDialog', 'signatureFitMode', 'stampSettings', 'stickyNotesSettings', 'strikethroughSettings', 'textSearchColorSettings', 'tileRenderingSettings', 'toolbarSettings', 'underlineSettings', 'volumeSettings', 'width', 'zoomMode', 'zoomValue', 'addSignature', 'ajaxRequestFailed', 'ajaxRequestInitiate', 'annotationAdd', 'annotationDoubleClick', 'annotationMouseLeave', 'annotationMouseover', 'annotationMove', 'annotationPropertiesChange', 'annotationRemove', 'annotationResize', 'annotationSelect', 'annotationUnSelect', 'bookmarkClick', 'buttonFieldClick', 'documentLoad', 'documentLoadFailed', 'documentUnload', 'downloadEnd', 'downloadStart', 'exportFailed', 'exportStart', 'exportSuccess', 'extractTextCompleted', 'hyperlinkClick', 'hyperlinkMouseOver', 'importFailed', 'importStart', 'importSuccess', 'moveSignature', 'pageChange', 'pageClick', 'pageMouseover', 'printEnd', 'printStart', 'removeSignature', 'resizeSignature', 'signaturePropertiesChange', 'signatureSelect', 'textSearchComplete', 'textSearchHighlight', 'textSearchStart', 'textSelectionEnd', 'textSelectionStart', 'thumbnailClick', 'validateFormFields', 'zoomChange'];
var modelProps = [];
/**
 * `ejs-pdfviewer` represents the VueJS PdfViewer Component.
 * ```vue
 * <ejs-pdfviewer></ejs-pdfviewer>
 * ```
 */
var PdfViewerComponent = /** @__PURE__ @class */ (function (_super) {
    __extends(PdfViewerComponent, _super);
    function PdfViewerComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = false;
        _this.hasInjectedModules = true;
        _this.tagMapper = {};
        _this.tagNameMapper = {};
        _this.ej2Instances = new PdfViewer({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    PdfViewerComponent.prototype.setProperties = function (prop, muteOnChange) {
        var _this = this;
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map(function (key) {
                _this.models.map(function (model) {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        _this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    };
    PdfViewerComponent.prototype.render = function (createElement) {
        return createElement('div', this.$slots.default);
    };
    PdfViewerComponent.prototype.addAnnotation = function (annotation) {
        return this.ej2Instances.addAnnotation(annotation);
    };
    PdfViewerComponent.prototype.deleteAnnotations = function () {
        return this.ej2Instances.deleteAnnotations();
    };
    PdfViewerComponent.prototype.download = function () {
        return this.ej2Instances.download();
    };
    PdfViewerComponent.prototype.exportAnnotations = function () {
        return this.ej2Instances.exportAnnotations();
    };
    PdfViewerComponent.prototype.exportAnnotationsAsObject = function () {
        return this.ej2Instances.exportAnnotationsAsObject();
    };
    PdfViewerComponent.prototype.exportFormFields = function (path) {
        return this.ej2Instances.exportFormFields(path);
    };
    PdfViewerComponent.prototype.exportFormFieldsAsObject = function () {
        return this.ej2Instances.exportFormFieldsAsObject();
    };
    PdfViewerComponent.prototype.fireAnnotationUnSelect = function (id, pageNumber, annotation) {
        return this.ej2Instances.fireAnnotationUnSelect(id, pageNumber, annotation);
    };
    PdfViewerComponent.prototype.importAnnotations = function (importData) {
        return this.ej2Instances.importAnnotations(importData);
    };
    PdfViewerComponent.prototype.importFormFields = function (formFields) {
        return this.ej2Instances.importFormFields(formFields);
    };
    PdfViewerComponent.prototype.load = function (document, password) {
        return this.ej2Instances.load(document, password);
    };
    PdfViewerComponent.prototype.redo = function () {
        return this.ej2Instances.redo();
    };
    PdfViewerComponent.prototype.requiredModules = function () {
        return this.ej2Instances.requiredModules();
    };
    PdfViewerComponent.prototype.retrieveFormFields = function () {
        return this.ej2Instances.retrieveFormFields();
    };
    PdfViewerComponent.prototype.saveAsBlob = function () {
        return this.ej2Instances.saveAsBlob();
    };
    PdfViewerComponent.prototype.setJsonData = function (jsonData) {
        return this.ej2Instances.setJsonData(jsonData);
    };
    PdfViewerComponent.prototype.undo = function () {
        return this.ej2Instances.undo();
    };
    PdfViewerComponent.prototype.unload = function () {
        return this.ej2Instances.unload();
    };
    PdfViewerComponent.prototype.updateFormFields = function (formFields) {
        return this.ej2Instances.updateFormFields(formFields);
    };
    PdfViewerComponent.prototype.updateViewerContainer = function () {
        return this.ej2Instances.updateViewerContainer();
    };
    PdfViewerComponent = __decorate([
        EJComponentDecorator({
            props: properties
        })
    ], PdfViewerComponent);
    return PdfViewerComponent;
}(ComponentBase));
var PdfViewerPlugin = {
    name: 'ejs-pdfviewer',
    install: function (Vue) {
        Vue.component(PdfViewerPlugin.name, PdfViewerComponent);
    }
};

export { PdfViewerComponent, PdfViewerPlugin };
export * from '@syncfusion/ej2-pdfviewer';
//# sourceMappingURL=ej2-vue-pdfviewer.es5.js.map
