import { ComponentBase, gh, getProps, isExecute, vueDefineComponent, DefineVueComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined, getValue } from '@syncfusion/ej2-base';

import { PdfViewer, PdfViewerModel } from '@syncfusion/ej2-pdfviewer';


export const properties: string[] = ['isLazyUpdate', 'plugins', 'DropdownFieldSettings', 'ajaxRequestSettings', 'annotationSelectorSettings', 'annotationSettings', 'annotations', 'areaSettings', 'arrowSettings', 'checkBoxFieldSettings', 'circleSettings', 'contextMenuOption', 'contextMenuSettings', 'currentPageNumber', 'customStamp', 'customStampSettings', 'dateTimeFormat', 'designerMode', 'disableContextMenuItems', 'distanceSettings', 'documentPath', 'downloadFileName', 'drawingObject', 'enableAccessibilityTags', 'enableAnnotation', 'enableAnnotationToolbar', 'enableAutoComplete', 'enableBookmark', 'enableBookmarkStyles', 'enableCommentPanel', 'enableDesktopMode', 'enableDownload', 'enableFormDesigner', 'enableFormDesignerToolbar', 'enableFormFields', 'enableFormFieldsValidation', 'enableFreeText', 'enableHandwrittenSignature', 'enableHyperlink', 'enableImportAnnotationMeasurement', 'enableInkAnnotation', 'enableMagnification', 'enableMeasureAnnotation', 'enableMultiLineOverlap', 'enableMultiPageAnnotation', 'enableNavigation', 'enableNavigationToolbar', 'enablePersistence', 'enablePinchZoom', 'enablePrint', 'enablePrintRotation', 'enableRtl', 'enableShapeAnnotation', 'enableShapeLabel', 'enableStampAnnotations', 'enableStickyNotesAnnotation', 'enableTextMarkupAnnotation', 'enableTextMarkupResizer', 'enableTextSearch', 'enableTextSelection', 'enableThumbnail', 'enableToolbar', 'enableZoomOptimization', 'exportAnnotationFileName', 'formFieldCollections', 'formFields', 'freeTextSettings', 'handWrittenSignatureSettings', 'height', 'hideEmptyDigitalSignatureFields', 'hideSaveSignature', 'highlightSettings', 'hyperlinkOpenState', 'initialDialogSettings', 'initialFieldSettings', 'initialRenderPages', 'inkAnnotationSettings', 'interactionMode', 'isAnnotationToolbarOpen', 'isAnnotationToolbarVisible', 'isBookmarkPanelOpen', 'isCommandPanelOpen', 'isDocumentEdited', 'isExtractText', 'isFormDesignerToolbarVisible', 'isFormFieldDocument', 'isInitialFieldToolbarSelection', 'isMaintainSelection', 'isSignatureEditable', 'isThumbnailViewOpen', 'isValidFreeText', 'lineSettings', 'listBoxFieldSettings', 'locale', 'measurementSettings', 'pageCount', 'passwordFieldSettings', 'perimeterSettings', 'polygonSettings', 'printMode', 'printScaleRatio', 'radioButtonFieldSettings', 'radiusSettings', 'rectangleSettings', 'restrictZoomRequest', 'retryCount', 'retryStatusCodes', 'retryTimeout', 'scrollSettings', 'selectedItems', 'serverActionSettings', 'serviceUrl', 'shapeLabelSettings', 'showDigitalSignatureAppearance', 'showNotificationDialog', 'signatureDialogSettings', 'signatureFieldSettings', 'signatureFitMode', 'stampSettings', 'stickyNotesSettings', 'strikethroughSettings', 'textFieldSettings', 'textSearchColorSettings', 'tileRenderingSettings', 'toolbarSettings', 'underlineSettings', 'volumeSettings', 'width', 'zoomMode', 'zoomValue', 'addSignature', 'ajaxRequestFailed', 'ajaxRequestInitiate', 'ajaxRequestSuccess', 'annotationAdd', 'annotationDoubleClick', 'annotationMouseLeave', 'annotationMouseover', 'annotationMove', 'annotationMoving', 'annotationPropertiesChange', 'annotationRemove', 'annotationResize', 'annotationSelect', 'annotationUnSelect', 'beforeAddFreeText', 'bookmarkClick', 'buttonFieldClick', 'commentAdd', 'commentDelete', 'commentEdit', 'commentSelect', 'commentStatusChanged', 'created', 'documentLoad', 'documentLoadFailed', 'documentUnload', 'downloadEnd', 'downloadStart', 'exportFailed', 'exportStart', 'exportSuccess', 'extractTextCompleted', 'formFieldAdd', 'formFieldClick', 'formFieldDoubleClick', 'formFieldFocusOut', 'formFieldMouseLeave', 'formFieldMouseover', 'formFieldMove', 'formFieldPropertiesChange', 'formFieldRemove', 'formFieldResize', 'formFieldSelect', 'formFieldUnselect', 'hyperlinkClick', 'hyperlinkMouseOver', 'importFailed', 'importStart', 'importSuccess', 'moveSignature', 'pageChange', 'pageClick', 'pageMouseover', 'printEnd', 'printStart', 'removeSignature', 'resizeSignature', 'signaturePropertiesChange', 'signatureSelect', 'textSearchComplete', 'textSearchHighlight', 'textSearchStart', 'textSelectionEnd', 'textSelectionStart', 'thumbnailClick', 'validateFormFields', 'zoomChange'];
export const modelProps: string[] = [];

export const testProp: any = getProps({props: properties});
export const props = testProp[0], watch = testProp[1], emitProbs: any = Object.keys(watch);
emitProbs.push('modelchanged', 'update:modelValue');
for (let props of modelProps) { emitProbs.push('update:'+props) }

/**
 * `ejs-pdfviewer` represents the VueJS PdfViewer Component.
 * ```vue
 * <ejs-pdfviewer></ejs-pdfviewer>
 * ```
 */
export let PdfViewerComponent: DefineVueComponent<PdfViewerModel> =  vueDefineComponent({
    name: 'PdfViewerComponent',
    mixins: [ComponentBase],
    props: props,
    watch: watch,
    emits: emitProbs,
    provide() { return { custom: this.custom } },
    data() {
        return {
            ej2Instance: new PdfViewer({}) as any,
            propKeys: properties as string[],
            models: modelProps as string[],
            hasChildDirective: false as boolean,
            hasInjectedModules: true as boolean,
            tagMapper: {} as { [key: string]: Object },
            tagNameMapper: {} as Object,
            isVue3: !isExecute as boolean,
            templateCollection: {} as any,
        }
    },
    created() {

        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
        this.ej2Instances.clearTemplate = this.clearTemplate;
        this.updated = this.updated;
    },
    render(createElement: any) {
        let h: any = !isExecute ? gh : createElement;
        let slots: any = null;
        if(!isNullOrUndefined((this as any).$slots.default)) {
            slots = !isExecute ? (this as any).$slots.default() : (this as any).$slots.default;
        }
        return h('div', slots);
    },
    methods: {
        clearTemplate(templateNames?: string[]): any {
            if (!templateNames){ templateNames = Object.keys(this.templateCollection || {}) }
            if (templateNames.length &&  this.templateCollection) {
                for (let tempName of templateNames){
                    let elementCollection: any = this.templateCollection[tempName];
                    if(elementCollection && elementCollection.length) {
                        for(let ele of elementCollection) {
                            let destroy: any = getValue('__vue__.$destroy', ele);
                            if (destroy) { ele.__vue__.$destroy() }
                            if (ele.innerHTML) { ele.innerHTML = '' }
                        }
                        delete this.templateCollection[tempName];
                    }
                }
            }
        },
        setProperties(prop: any, muteOnChange: boolean): void {
            if(this.isVue3) { this.models = !this.models ? this.ej2Instances.referModels : this.models }
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
        },
        custom(): void {
            this.updated();
        },
        addAnnotation(annotation: any): void {
            return this.ej2Instances.addAnnotation(annotation);
        },
        clearFormFields(formField?: any): void {
            return this.ej2Instances.clearFormFields(formField);
        },
        convertClientPointToPagePoint(clientPoint: Object, pageNumber: number): Object {
            return this.ej2Instances.convertClientPointToPagePoint(clientPoint, pageNumber);
        },
        convertPagePointToClientPoint(pagePoint: Object, pageNumber: number): Object {
            return this.ej2Instances.convertPagePointToClientPoint(pagePoint, pageNumber);
        },
        convertPagePointToScrollingPoint(pagePoint: Object, pageNumber: number): Object {
            return this.ej2Instances.convertPagePointToScrollingPoint(pagePoint, pageNumber);
        },
        deleteAnnotations(): void {
            return this.ej2Instances.deleteAnnotations();
        },
        download(): void {
            return this.ej2Instances.download();
        },
        exportAnnotation(annotationDataFormat?: Object): void {
            return this.ej2Instances.exportAnnotation(annotationDataFormat);
        },
        exportAnnotationsAsBase64String(annotationDataFormat: Object): Object {
            return this.ej2Instances.exportAnnotationsAsBase64String(annotationDataFormat);
        },
        exportAnnotationsAsObject(annotationDataFormat: Object): Object {
            return this.ej2Instances.exportAnnotationsAsObject(annotationDataFormat);
        },
        exportFormFields(data?: string, formFieldDataFormat?: Object): void {
            return this.ej2Instances.exportFormFields(data, formFieldDataFormat);
        },
        exportFormFieldsAsObject(formFieldDataFormat: Object): Object {
            return this.ej2Instances.exportFormFieldsAsObject(formFieldDataFormat);
        },
        focusFormField(field: any): void {
            return this.ej2Instances.focusFormField(field);
        },
        getPageNumberFromClientPoint(clientPoint: Object): number {
            return this.ej2Instances.getPageNumberFromClientPoint(clientPoint);
        },
        importAnnotation(importData: any, annotationDataFormat?: Object): void {
            return this.ej2Instances.importAnnotation(importData, annotationDataFormat);
        },
        importFormFields(data?: string, formFieldDataFormat?: Object): void {
            return this.ej2Instances.importFormFields(data, formFieldDataFormat);
        },
        load(document: string, password: string): void {
            return this.ej2Instances.load(document, password);
        },
        redo(): void {
            return this.ej2Instances.redo();
        },
        requiredModules(): Object[] {
            return this.ej2Instances.requiredModules();
        },
        resetFormFields(): void {
            return this.ej2Instances.resetFormFields();
        },
        retrieveFormFields(): Object[] {
            return this.ej2Instances.retrieveFormFields();
        },
        saveAsBlob(): Object {
            return this.ej2Instances.saveAsBlob();
        },
        setJsonData(jsonData: any): void {
            return this.ej2Instances.setJsonData(jsonData);
        },
        showNotificationPopup(errorString: string): void {
            return this.ej2Instances.showNotificationPopup(errorString);
        },
        undo(): void {
            return this.ej2Instances.undo();
        },
        unload(): void {
            return this.ej2Instances.unload();
        },
        updateFormFields(formFields: any): void {
            return this.ej2Instances.updateFormFields(formFields);
        },
        updateFormFieldsValue(fieldValue: any): void {
            return this.ej2Instances.updateFormFieldsValue(fieldValue);
        },
        updateViewerContainer(): void {
            return this.ej2Instances.updateViewerContainer();
        },
        zoomToRect(rectangle: Object): void {
            return this.ej2Instances.zoomToRect(rectangle);
        },
    }
});

export type PdfViewerComponent = InstanceType<typeof PdfViewerComponent>;

export const PdfViewerPlugin = {
    name: 'ejs-pdfviewer',
    install(Vue: any) {
        Vue.component(PdfViewerPlugin.name, PdfViewerComponent);

    }
}