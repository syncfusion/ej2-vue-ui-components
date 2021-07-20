import { Options } from 'vue-class-component';
import { ComponentBase, EJComponentDecorator, getProps, allVue, gh } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';

import { FileManager } from '@syncfusion/ej2-filemanager';


// {{VueImport}}
export const properties: string[] = ['ajaxSettings', 'allowDragAndDrop', 'allowMultiSelection', 'contextMenuSettings', 'cssClass', 'detailsViewSettings', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'height', 'locale', 'navigationPaneSettings', 'path', 'popupTarget', 'rootAliasName', 'searchSettings', 'selectedItems', 'showFileExtension', 'showHiddenItems', 'showThumbnail', 'sortOrder', 'toolbarSettings', 'uploadSettings', 'view', 'width', 'beforeDownload', 'beforeImageLoad', 'beforePopupClose', 'beforePopupOpen', 'beforeSend', 'created', 'destroyed', 'failure', 'fileDragStart', 'fileDragStop', 'fileDragging', 'fileDropped', 'fileLoad', 'fileOpen', 'fileSelect', 'fileSelection', 'menuClick', 'menuOpen', 'popupClose', 'popupOpen', 'success', 'toolbarClick', 'toolbarCreate', 'uploadListCreate'];
export const modelProps: string[] = [];

export const testProp: any = getProps({props: properties});
export const props = testProp[0];
export const watch = testProp[1];

export const emitProbs: any = Object.keys(watch);
emitProbs.push('modelchanged');
for (let props of modelProps) {
    emitProbs.push(
        'update:'+props
    );
}

export const isExecute: any = gh ? false : true;

export let tempProxy: any;

/**
 * Represents the Essential JS 2 VueJS FileManager Component.
 * ```vue
 * <ejs-filemanager showThumbnail='false'></ejs-filemanager>
 * ```
 */
@EJComponentDecorator({
    props: properties
},isExecute)

/* Start Options({
    props: props,
    watch: watch,
    emits: emitProbs
}) End */

export class FileManagerComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = false;
    protected hasInjectedModules: boolean = true;
    public tagMapper: { [key: string]: Object } = {};
    public tagNameMapper: Object = {};
    public isVue3: boolean;
    
    constructor() {
        super(arguments);
        this.isVue3 = !isExecute;
        this.ej2Instances = new FileManager({});
        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
        tempProxy = this;
    }
    public setProperties(prop: any, muteOnChange: boolean): void {
        if(this.isVue3) {
            this.models = !this.models ? this.ej2Instances.referModels : this.models;
        }
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
                        }
                    }
                });
            });
        }
    }

    public render(createElement: any) {
        let h: any = gh || createElement;
        let slots: any = null;
        if(!isNullOrUndefined((this as any).$slots.default)) {
            slots = gh ? (this as any).$slots.default() : (this as any).$slots.default;
        }
        return h('div', slots);
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
