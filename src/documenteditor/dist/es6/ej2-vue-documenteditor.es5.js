import { DocumentEditor } from '@syncfusion/ej2-documenteditor';
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
var properties = ['enableBookmarkDialog', 'enableBordersAndShadingDialog', 'enableContextMenu', 'enableEditor', 'enableEditorHistory', 'enableFontDialog', 'enableHyperlinkDialog', 'enableImageResizer', 'enableListDialog', 'enableOptionsPane', 'enablePageSetupDialog', 'enableParagraphDialog', 'enablePersistence', 'enablePrint', 'enableRtl', 'enableSearch', 'enableSelection', 'enableSfdtExport', 'enableStyleDialog', 'enableTableDialog', 'enableTableOfContentsDialog', 'enableTableOptionsDialog', 'enableTablePropertiesDialog', 'enableTextExport', 'enableWordExport', 'isReadOnly', 'locale', 'zoomFactor', 'contentChange', 'created', 'destroyed', 'documentChange', 'keyDown', 'requestNavigate', 'searchResultsChange', 'selectionChange', 'viewChange', 'zoomFactorChange'];
var modelProps = [];
/**
 * Represents the Essential JS 2 VueJS Document Editor Component
 * ```html
 * <ejs-documenteditor id='container'></ejs-documenteditor>
 * ```
 */
var DocumentEditorComponent = /** @__PURE__ @class */ (function (_super) {
    __extends(DocumentEditorComponent, _super);
    function DocumentEditorComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = false;
        _this.hasInjectedModules = true;
        _this.tagMapper = {};
        _this.tagNameMapper = {};
        _this.ej2Instances = new DocumentEditor({});
        _this.bindProperties();
        return _this;
    }
    DocumentEditorComponent.prototype.render = function (createElement) {
        return createElement('div', this.$slots.default);
    };
    DocumentEditorComponent.prototype.enableAllModules = function () {
        return this.ej2Instances.enableAllModules();
    };
    DocumentEditorComponent.prototype.fitPage = function (pageFitType) {
        return this.ej2Instances.fitPage(pageFitType);
    };
    DocumentEditorComponent.prototype.focusIn = function () {
        return this.ej2Instances.focusIn();
    };
    DocumentEditorComponent.prototype.getStyleNames = function (styleType) {
        return this.ej2Instances.getStyleNames(styleType);
    };
    DocumentEditorComponent.prototype.getStyles = function (styleType) {
        return this.ej2Instances.getStyles(styleType);
    };
    DocumentEditorComponent.prototype.open = function (sfdtText) {
        return this.ej2Instances.open(sfdtText);
    };
    DocumentEditorComponent.prototype.openBlank = function () {
        return this.ej2Instances.openBlank();
    };
    DocumentEditorComponent.prototype.print = function (printWindow) {
        return this.ej2Instances.print(printWindow);
    };
    DocumentEditorComponent.prototype.resize = function (width, height) {
        return this.ej2Instances.resize(width, height);
    };
    DocumentEditorComponent.prototype.save = function (fileName, formatType) {
        return this.ej2Instances.save(fileName, formatType);
    };
    DocumentEditorComponent.prototype.saveAsBlob = function (formatType) {
        return this.ej2Instances.saveAsBlob(formatType);
    };
    DocumentEditorComponent.prototype.scrollToPage = function (pageNumber) {
        return this.ej2Instances.scrollToPage(pageNumber);
    };
    DocumentEditorComponent.prototype.serialize = function () {
        return this.ej2Instances.serialize();
    };
    DocumentEditorComponent.prototype.showDialog = function (dialogType) {
        return this.ej2Instances.showDialog(dialogType);
    };
    DocumentEditorComponent.prototype.showOptionsPane = function () {
        return this.ej2Instances.showOptionsPane();
    };
    DocumentEditorComponent = __decorate([
        EJComponentDecorator({
            props: properties
        })
    ], DocumentEditorComponent);
    return DocumentEditorComponent;
}(ComponentBase));
var DocumentEditorPlugin = {
    name: 'ejs-documenteditor',
    install: function (Vue) {
        Vue.component(DocumentEditorPlugin.name, DocumentEditorComponent);
    }
};

export { DocumentEditorComponent, DocumentEditorPlugin };
export * from '@syncfusion/ej2-documenteditor';
//# sourceMappingURL=ej2-vue-documenteditor.es5.js.map
