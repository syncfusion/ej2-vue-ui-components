import { FileManager } from '@syncfusion/ej2-filemanager';
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
var properties = ['ajaxSettings', 'allowDragAndDrop', 'allowMultiSelection', 'contextMenuSettings', 'cssClass', 'detailsViewSettings', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'height', 'locale', 'navigationPaneSettings', 'path', 'rootAliasName', 'searchSettings', 'selectedItems', 'showFileExtension', 'showHiddenItems', 'showThumbnail', 'toolbarSettings', 'uploadSettings', 'view', 'width', 'beforeDownload', 'beforeImageLoad', 'beforePopupClose', 'beforePopupOpen', 'beforeSend', 'created', 'destroyed', 'failure', 'fileDragStart', 'fileDragStop', 'fileDragging', 'fileDropped', 'fileLoad', 'fileOpen', 'fileSelect', 'fileSelection', 'menuClick', 'menuOpen', 'popupClose', 'popupOpen', 'success', 'toolbarClick', 'toolbarCreate', 'uploadListCreate'];
var modelProps = [];
/**
 * Represents the Essential JS 2 VueJS FileManager Component.
 * ```vue
 * <ejs-filemanager showThumbnail='false'></ejs-filemanager>
 * ```
 */
var FileManagerComponent = /** @__PURE__ @class */ (function (_super) {
    __extends(FileManagerComponent, _super);
    function FileManagerComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = false;
        _this.hasInjectedModules = true;
        _this.tagMapper = {};
        _this.tagNameMapper = {};
        _this.ej2Instances = new FileManager({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    FileManagerComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    FileManagerComponent.prototype.render = function (createElement) {
        return createElement('div', this.$slots.default);
    };
    FileManagerComponent.prototype.clearSelection = function () {
        return this.ej2Instances.clearSelection();
    };
    FileManagerComponent.prototype.createFolder = function (name) {
        return this.ej2Instances.createFolder(name);
    };
    FileManagerComponent.prototype.deleteFiles = function (ids) {
        return this.ej2Instances.deleteFiles(ids);
    };
    FileManagerComponent.prototype.disableMenuItems = function (items) {
        return this.ej2Instances.disableMenuItems(items);
    };
    FileManagerComponent.prototype.disableToolbarItems = function (items) {
        return this.ej2Instances.disableToolbarItems(items);
    };
    FileManagerComponent.prototype.downloadFiles = function (ids) {
        return this.ej2Instances.downloadFiles(ids);
    };
    FileManagerComponent.prototype.enableToolbarItems = function (items) {
        return this.ej2Instances.enableToolbarItems(items);
    };
    FileManagerComponent.prototype.filterFiles = function (filterData) {
        return this.ej2Instances.filterFiles(filterData);
    };
    FileManagerComponent.prototype.getMenuItemIndex = function (item) {
        return this.ej2Instances.getMenuItemIndex(item);
    };
    FileManagerComponent.prototype.getSelectedFiles = function () {
        return this.ej2Instances.getSelectedFiles();
    };
    FileManagerComponent.prototype.getToolbarItemIndex = function (item) {
        return this.ej2Instances.getToolbarItemIndex(item);
    };
    FileManagerComponent.prototype.openFile = function (id) {
        return this.ej2Instances.openFile(id);
    };
    FileManagerComponent.prototype.refreshFiles = function () {
        return this.ej2Instances.refreshFiles();
    };
    FileManagerComponent.prototype.refreshLayout = function () {
        return this.ej2Instances.refreshLayout();
    };
    FileManagerComponent.prototype.renameFile = function (id, name) {
        return this.ej2Instances.renameFile(id, name);
    };
    FileManagerComponent.prototype.selectAll = function () {
        return this.ej2Instances.selectAll();
    };
    FileManagerComponent.prototype.uploadFiles = function () {
        return this.ej2Instances.uploadFiles();
    };
    FileManagerComponent = __decorate([
        EJComponentDecorator({
            props: properties
        })
    ], FileManagerComponent);
    return FileManagerComponent;
}(ComponentBase));
var FileManagerPlugin = {
    name: 'ejs-filemanager',
    install: function (Vue) {
        Vue.component(FileManagerPlugin.name, FileManagerComponent);
    }
};

export { FileManagerComponent, FileManagerPlugin };
export * from '@syncfusion/ej2-filemanager';
//# sourceMappingURL=ej2-vue-filemanager.es5.js.map
