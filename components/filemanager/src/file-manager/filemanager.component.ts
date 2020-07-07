import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { FileManager } from '@syncfusion/ej2-filemanager';


export const properties: string[] = ['ajaxSettings', 'allowDragAndDrop', 'allowMultiSelection', 'contextMenuSettings', 'cssClass', 'detailsViewSettings', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'height', 'locale', 'navigationPaneSettings', 'path', 'popupTarget', 'rootAliasName', 'searchSettings', 'selectedItems', 'showFileExtension', 'showHiddenItems', 'showThumbnail', 'sortOrder', 'toolbarSettings', 'uploadSettings', 'view', 'width', 'beforeDownload', 'beforeImageLoad', 'beforePopupClose', 'beforePopupOpen', 'beforeSend', 'created', 'destroyed', 'failure', 'fileDragStart', 'fileDragStop', 'fileDragging', 'fileDropped', 'fileLoad', 'fileOpen', 'fileSelect', 'fileSelection', 'menuClick', 'menuOpen', 'popupClose', 'popupOpen', 'success', 'toolbarClick', 'toolbarCreate', 'uploadListCreate'];
export const modelProps: string[] = [];

/**
 * Represents the Essential JS 2 VueJS FileManager Component.
 * ```vue
 * <ejs-filemanager showThumbnail='false'></ejs-filemanager>
 * ```
 */
@EJComponentDecorator({
    props: properties
})
export class FileManagerComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = false;
    protected hasInjectedModules: boolean = true;
    public tagMapper: { [key: string]: Object } = {};
    public tagNameMapper: Object = {};
    
    constructor() {
        super();
        this.ej2Instances = new FileManager({});
        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
    }
    public setProperties(prop: any, muteOnChange: boolean): void {
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map((key: string): void => {
                this.models.map((model: string): void => {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    }

    public render(createElement: any) {
        return createElement('div', (this as any).$slots.default);
    }
    
    public clearSelection(): void {
        return this.ej2Instances.clearSelection();
    }

    public createFolder(name?: string): void {
        return this.ej2Instances.createFolder(name);
    }

    public deleteFiles(ids?: string[]): void {
        return this.ej2Instances.deleteFiles(ids);
    }

    public disableMenuItems(items: string[]): void {
        return this.ej2Instances.disableMenuItems(items);
    }

    public disableToolbarItems(items: string[]): void {
        return this.ej2Instances.disableToolbarItems(items);
    }

    public downloadFiles(ids?: string[]): void {
        return this.ej2Instances.downloadFiles(ids);
    }

    public enableToolbarItems(items: string[]): void {
        return this.ej2Instances.enableToolbarItems(items);
    }

    public filterFiles(filterData?: Object): void {
        return this.ej2Instances.filterFiles(filterData);
    }

    public getMenuItemIndex(item: string): number {
        return this.ej2Instances.getMenuItemIndex(item);
    }

    public getSelectedFiles(): Object[] {
        return this.ej2Instances.getSelectedFiles();
    }

    public getToolbarItemIndex(item: string): number {
        return this.ej2Instances.getToolbarItemIndex(item);
    }

    public openFile(id: string): void {
        return this.ej2Instances.openFile(id);
    }

    public refreshFiles(): void {
        return this.ej2Instances.refreshFiles();
    }

    public refreshLayout(): void {
        return this.ej2Instances.refreshLayout();
    }

    public renameFile(id?: string, name?: string): void {
        return this.ej2Instances.renameFile(id, name);
    }

    public selectAll(): void {
        return this.ej2Instances.selectAll();
    }

    public uploadFiles(): void {
        return this.ej2Instances.uploadFiles();
    }
}

export const FileManagerPlugin = {
    name: 'ejs-filemanager',
    install(Vue: any) {
        Vue.component(FileManagerPlugin.name, FileManagerComponent);

    }
}
