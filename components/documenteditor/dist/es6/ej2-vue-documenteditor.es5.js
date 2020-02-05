import { DocumentEditor, DocumentEditorContainer } from '@syncfusion/ej2-documenteditor';
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
var properties = ['acceptTab', 'currentUser', 'defaultPasteOption', 'documentName', 'enableBookmarkDialog', 'enableBordersAndShadingDialog', 'enableComment', 'enableContextMenu', 'enableCursorOnReadOnly', 'enableEditor', 'enableEditorHistory', 'enableFontDialog', 'enableHyperlinkDialog', 'enableImageResizer', 'enableListDialog', 'enableLocalPaste', 'enableOptionsPane', 'enablePageSetupDialog', 'enableParagraphDialog', 'enablePersistence', 'enablePrint', 'enableRtl', 'enableSearch', 'enableSelection', 'enableSfdtExport', 'enableSpellCheck', 'enableStyleDialog', 'enableTableDialog', 'enableTableOfContentsDialog', 'enableTableOptionsDialog', 'enableTablePropertiesDialog', 'enableTextExport', 'enableWordExport', 'headers', 'isReadOnly', 'locale', 'pageGap', 'pageOutline', 'serverActionSettings', 'serviceUrl', 'showComments', 'useCtrlClickToFollowHyperlink', 'userColor', 'zIndex', 'zoomFactor', 'beforePaneSwitch', 'commentBegin', 'commentEnd', 'contentChange', 'created', 'customContextMenuBeforeOpen', 'customContextMenuSelect', 'destroyed', 'documentChange', 'keyDown', 'requestNavigate', 'searchResultsChange', 'selectionChange', 'viewChange', 'zoomFactorChange'];
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
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    DocumentEditorComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    DocumentEditorComponent.prototype.getBookmarks = function () {
        return this.ej2Instances.getBookmarks();
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
    DocumentEditorComponent.prototype.setDefaultCharacterFormat = function (characterFormat) {
        return this.ej2Instances.setDefaultCharacterFormat(characterFormat);
    };
    DocumentEditorComponent.prototype.setDefaultParagraphFormat = function (paragraphFormat) {
        return this.ej2Instances.setDefaultParagraphFormat(paragraphFormat);
    };
    DocumentEditorComponent.prototype.setDefaultSectionFormat = function (sectionFormat) {
        return this.ej2Instances.setDefaultSectionFormat(sectionFormat);
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

var __extends$1 = (undefined && undefined.__extends) || (function () {
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
var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var properties$1 = ['enableComment', 'enableCsp', 'enableLocalPaste', 'enablePersistence', 'enableRtl', 'enableSpellCheck', 'enableToolbar', 'headers', 'locale', 'restrictEditing', 'serverActionSettings', 'serviceUrl', 'showPropertiesPane', 'zIndex', 'beforePaneSwitch', 'contentChange', 'created', 'customContextMenuBeforeOpen', 'customContextMenuSelect', 'destroyed', 'documentChange', 'selectionChange'];
var modelProps$1 = [];
/**
 * Represents the Essential JS 2 VueJS Document Editor Container
 * ```html
 * <ejs-documenteditor-container id='container'></ejs-documenteditor-container>
 * ```
 */
var DocumentEditorContainerComponent = /** @__PURE__ @class */ (function (_super) {
    __extends$1(DocumentEditorContainerComponent, _super);
    function DocumentEditorContainerComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties$1;
        _this.models = modelProps$1;
        _this.hasChildDirective = false;
        _this.hasInjectedModules = true;
        _this.tagMapper = {};
        _this.tagNameMapper = {};
        _this.ej2Instances = new DocumentEditorContainer({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    DocumentEditorContainerComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    DocumentEditorContainerComponent.prototype.render = function (createElement) {
        return createElement('div', this.$slots.default);
    };
    DocumentEditorContainerComponent.prototype.setDefaultCharacterFormat = function (characterFormat) {
        return this.ej2Instances.setDefaultCharacterFormat(characterFormat);
    };
    DocumentEditorContainerComponent.prototype.setDefaultParagraphFormat = function (paragraphFormat) {
        return this.ej2Instances.setDefaultParagraphFormat(paragraphFormat);
    };
    DocumentEditorContainerComponent.prototype.setDefaultSectionFormat = function (sectionFormat) {
        return this.ej2Instances.setDefaultSectionFormat(sectionFormat);
    };
    DocumentEditorContainerComponent = __decorate$1([
        EJComponentDecorator({
            props: properties$1
        })
    ], DocumentEditorContainerComponent);
    return DocumentEditorContainerComponent;
}(ComponentBase));
var DocumentEditorContainerPlugin = {
    name: 'ejs-documenteditorcontainer',
    install: function (Vue) {
        Vue.component(DocumentEditorContainerPlugin.name, DocumentEditorContainerComponent);
    }
};

export { DocumentEditorComponent, DocumentEditorPlugin, DocumentEditorContainerComponent, DocumentEditorContainerPlugin };
export * from '@syncfusion/ej2-documenteditor';
//# sourceMappingURL=ej2-vue-documenteditor.es5.js.map
