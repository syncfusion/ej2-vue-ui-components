import { PdfViewer } from '@syncfusion/ej2-pdfviewer';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties = ['annotations', 'drawingObject', 'tool', 'ajaxRequestSettings', 'annotationToolbarSettings', 'areaSettings', 'arrowSettings', 'circleSettings', 'contextMenuOption', 'customStampItems', 'customStampSettings', 'distanceSettings', 'documentPath', 'enableAnnotation', 'enableAnnotationToolbar', 'enableBookmark', 'enableCommentPanel', 'enableDownload', 'enableFormFields', 'enableFreeText', 'enableHyperlink', 'enableMagnification', 'enableMeasureAnnotation', 'enableNavigation', 'enableNavigationToolbar', 'enablePersistence', 'enablePinchZoom', 'enablePrint', 'enableRtl', 'enableShapeAnnotation', 'enableShapeLabel', 'enableStampAnnotations', 'enableStickyNotesAnnotation', 'enableTextMarkupAnnotation', 'enableTextSearch', 'enableTextSelection', 'enableThumbnail', 'enableToolbar', 'freeTextSettings', 'height', 'highlightSettings', 'hyperlinkOpenState', 'interactionMode', 'lineSettings', 'locale', 'measurementSettings', 'perimeterSettings', 'polygonSettings', 'radiusSettings', 'rectangleSettings', 'selectedItems', 'serverActionSettings', 'serviceUrl', 'shapeLabelSettings', 'stampSettings', 'stickyNotesSettings', 'strikethroughSettings', 'toolbarSettings', 'underlineSettings', 'volumeSettings', 'width', 'ajaxRequestFailed', 'annotationAdd', 'annotationPropertiesChange', 'annotationRemove', 'annotationResize', 'annotationSelect', 'documentLoad', 'documentLoadFailed', 'documentUnload', 'exportFailed', 'exportStart', 'exportSuccess', 'hyperlinkClick', 'hyperlinkMouseOver', 'importFailed', 'importStart', 'importSuccess', 'pageChange', 'pageClick', 'textSelectionEnd', 'textSelectionStart', 'thumbnailClick', 'zoomChange'];
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
    download() {
        return this.ej2Instances.download();
    }
    exportAnnotations() {
        return this.ej2Instances.exportAnnotations();
    }
    exportAnnotationsAsObject() {
        return this.ej2Instances.exportAnnotationsAsObject();
    }
    exportFormFields() {
        return this.ej2Instances.exportFormFields();
    }
    exportFormFieldsAsObject() {
        return this.ej2Instances.exportFormFieldsAsObject();
    }
    importAnnotations(importData) {
        return this.ej2Instances.importAnnotations(importData);
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
    saveAsBlob() {
        return this.ej2Instances.saveAsBlob();
    }
    undo() {
        return this.ej2Instances.undo();
    }
    unload() {
        return this.ej2Instances.unload();
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
