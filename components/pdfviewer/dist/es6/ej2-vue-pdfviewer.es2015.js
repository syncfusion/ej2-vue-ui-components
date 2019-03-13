import { PdfViewer } from '@syncfusion/ej2-pdfviewer';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties = ['annotationToolbarSettings', 'documentPath', 'enableAnnotation', 'enableBookmark', 'enableDownload', 'enableHyperlink', 'enableMagnification', 'enableNavigation', 'enablePersistence', 'enablePrint', 'enableRtl', 'enableTextMarkupAnnotation', 'enableTextSearch', 'enableTextSelection', 'enableThumbnail', 'enableToolbar', 'height', 'highlightSettings', 'hyperlinkOpenState', 'interactionMode', 'locale', 'serverActionSettings', 'serviceUrl', 'strikethroughSettings', 'toolbarSettings', 'underlineSettings', 'width', 'ajaxRequestFailed', 'annotationAdd', 'annotationPropertiesChange', 'annotationRemove', 'documentLoad', 'documentLoadFailed', 'documentUnload', 'hyperlinkClick', 'pageChange', 'pageClick', 'zoomChange'];
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
    load(document, password) {
        return this.ej2Instances.load(document, password);
    }
    redo() {
        return this.ej2Instances.redo();
    }
    requiredModules() {
        return this.ej2Instances.requiredModules();
    }
    undo() {
        return this.ej2Instances.undo();
    }
    unload() {
        return this.ej2Instances.unload();
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
