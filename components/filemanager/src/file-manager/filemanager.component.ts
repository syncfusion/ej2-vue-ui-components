import { ComponentBase, gh, getProps, isExecute, vueDefineComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined, getValue } from '@syncfusion/ej2-base';

import { FileManager } from '@syncfusion/ej2-filemanager';


export const properties: string[] = ['isLazyUpdate', 'plugins', 'ajaxSettings', 'allowDragAndDrop', 'allowMultiSelection', 'contextMenuSettings', 'cssClass', 'detailsViewSettings', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'enableVirtualization', 'height', 'locale', 'navigationPaneSettings', 'path', 'popupTarget', 'rootAliasName', 'searchSettings', 'selectedItems', 'showFileExtension', 'showHiddenItems', 'showThumbnail', 'sortBy', 'sortOrder', 'toolbarSettings', 'uploadSettings', 'view', 'width', 'beforeDownload', 'beforeImageLoad', 'beforePopupClose', 'beforePopupOpen', 'beforeSend', 'created', 'destroyed', 'failure', 'fileDragStart', 'fileDragStop', 'fileDragging', 'fileDropped', 'fileLoad', 'fileOpen', 'fileSelect', 'fileSelection', 'menuClick', 'menuOpen', 'popupClose', 'popupOpen', 'success', 'toolbarClick', 'toolbarCreate', 'uploadListCreate'];
export const modelProps: string[] = [];

export const testProp: any = getProps({props: properties});
export const props = testProp[0], watch = testProp[1], emitProbs: any = Object.keys(watch);
emitProbs.push('modelchanged', 'update:modelValue');
for (let props of modelProps) { emitProbs.push('update:'+props) }

/**
 * Represents the Essential JS 2 VueJS FileManager Component.
 * ```vue
 * <ejs-filemanager showThumbnail='false'></ejs-filemanager>
 * ```
 */
export let FileManagerComponent =  vueDefineComponent({
    name: 'FileManagerComponent',
    mixins: [ComponentBase],
    props: props,
    watch: watch,
    emits: emitProbs,
    provide() { return { custom: this.custom } },
    data() {
        return {
            ej2Instances: new FileManager({}) as any,
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
        clearSelection(): void {
            return this.ej2Instances.clearSelection();
        },
        createFolder(name?: string): void {
            return this.ej2Instances.createFolder(name);
        },
        deleteFiles(ids?: string[]): void {
            return this.ej2Instances.deleteFiles(ids);
        },
        disableMenuItems(items: string[]): void {
            return this.ej2Instances.disableMenuItems(items);
        },
        disableToolbarItems(items: string[]): void {
            return this.ej2Instances.disableToolbarItems(items);
        },
        downloadFiles(ids?: string[]): void {
            return this.ej2Instances.downloadFiles(ids);
        },
        enableToolbarItems(items: string[]): void {
            return this.ej2Instances.enableToolbarItems(items);
        },
        filterFiles(filterData?: Object): void {
            return this.ej2Instances.filterFiles(filterData);
        },
        getMenuItemIndex(item: string): number {
            return this.ej2Instances.getMenuItemIndex(item);
        },
        getSelectedFiles(): Object[] {
            return this.ej2Instances.getSelectedFiles();
        },
        getToolbarItemIndex(item: string): number {
            return this.ej2Instances.getToolbarItemIndex(item);
        },
        openFile(id: string): void {
            return this.ej2Instances.openFile(id);
        },
        refreshFiles(): void {
            return this.ej2Instances.refreshFiles();
        },
        refreshLayout(): void {
            return this.ej2Instances.refreshLayout();
        },
        renameFile(id?: string, name?: string): void {
            return this.ej2Instances.renameFile(id, name);
        },
        selectAll(): void {
            return this.ej2Instances.selectAll();
        },
        uploadFiles(): void {
            return this.ej2Instances.uploadFiles();
        },
    }
});

export type FileManagerComponent = InstanceType<typeof FileManagerComponent>;

export const FileManagerPlugin = {
    name: 'ejs-filemanager',
    install(Vue: any) {
        Vue.component(FileManagerPlugin.name, FileManagerComponent);

    }
}