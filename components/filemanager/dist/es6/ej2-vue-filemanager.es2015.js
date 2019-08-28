import { FileManager } from '@syncfusion/ej2-filemanager';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties = ['ajaxSettings', 'allowDragAndDrop', 'allowMultiSelection', 'contextMenuSettings', 'cssClass', 'detailsViewSettings', 'enablePersistence', 'enableRtl', 'height', 'locale', 'navigationPaneSettings', 'path', 'searchSettings', 'selectedItems', 'showFileExtension', 'showHiddenItems', 'showThumbnail', 'toolbarSettings', 'uploadSettings', 'view', 'width', 'beforeSend', 'created', 'destroyed', 'failure', 'fileDragStart', 'fileDragStop', 'fileDragging', 'fileDropped', 'fileLoad', 'fileOpen', 'fileSelect', 'menuClick', 'menuOpen', 'success', 'toolbarClick', 'toolbarCreate', 'uploadListCreate'];
const modelProps = [];
/**
 * Represents the Essential JS 2 VueJS FileManager Component.
 * ```vue
 * <ejs-filemanager showThumbnail='false'></ejs-filemanager>
 * ```
 */
let FileManagerComponent = class FileManagerComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties;
        this.models = modelProps;
        this.hasChildDirective = false;
        this.hasInjectedModules = true;
        this.tagMapper = {};
        this.tagNameMapper = {};
        this.ej2Instances = new FileManager({});
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
    deleteFiles(ids) {
        return this.ej2Instances.deleteFiles(ids);
    }
    disableToolbarItems(items) {
        return this.ej2Instances.disableToolbarItems(items);
    }
    downloadFiles(ids) {
        return this.ej2Instances.downloadFiles(ids);
    }
    enableToolbarItems(items) {
        return this.ej2Instances.enableToolbarItems(items);
    }
    filterFiles(filterData) {
        return this.ej2Instances.filterFiles(filterData);
    }
    getSelectedFiles() {
        return this.ej2Instances.getSelectedFiles();
    }
    openFile(id) {
        return this.ej2Instances.openFile(id);
    }
    refreshFiles() {
        return this.ej2Instances.refreshFiles();
    }
    refreshLayout() {
        return this.ej2Instances.refreshLayout();
    }
    renameFile(id, name) {
        return this.ej2Instances.renameFile(id, name);
    }
};
FileManagerComponent = __decorate([
    EJComponentDecorator({
        props: properties
    })
], FileManagerComponent);
const FileManagerPlugin = {
    name: 'ejs-filemanager',
    install(Vue) {
        Vue.component(FileManagerPlugin.name, FileManagerComponent);
    }
};

export { FileManagerComponent, FileManagerPlugin };
export * from '@syncfusion/ej2-filemanager';
//# sourceMappingURL=ej2-vue-filemanager.es2015.js.map
