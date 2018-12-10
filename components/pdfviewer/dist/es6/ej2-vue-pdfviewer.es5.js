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
var properties = ['documentPath', 'enableBookmark', 'enableDownload', 'enableHyperlink', 'enableMagnification', 'enableNavigation', 'enablePersistence', 'enablePrint', 'enableRtl', 'enableTextSearch', 'enableTextSelection', 'enableThumbnail', 'enableToolbar', 'height', 'hyperlinkOpenState', 'interactionMode', 'locale', 'serverActionSettings', 'serviceUrl', 'toolbarSettings', 'width', 'ajaxRequestFailed', 'documentLoad', 'documentLoadFailed', 'documentUnload', 'hyperlinkClick', 'pageChange', 'pageClick', 'zoomChange'];
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
        return _this;
    }
    PdfViewerComponent.prototype.render = function (createElement) {
        return createElement('div', this.$slots.default);
    };
    PdfViewerComponent.prototype.download = function () {
        return this.ej2Instances.download();
    };
    PdfViewerComponent.prototype.load = function (document, password) {
        return this.ej2Instances.load(document, password);
    };
    PdfViewerComponent.prototype.requiredModules = function () {
        return this.ej2Instances.requiredModules();
    };
    PdfViewerComponent.prototype.unload = function () {
        return this.ej2Instances.unload();
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
