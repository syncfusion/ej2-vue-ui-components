import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { Uploader } from '@syncfusion/ej2-inputs';
import { FilesDirective, UploadedFilesDirective, FilesPlugin, UploadedFilesPlugin } from './files.directive'


export const properties: string[] = ['allowedExtensions', 'asyncSettings', 'autoUpload', 'buttons', 'cssClass', 'directoryUpload', 'dropArea', 'enablePersistence', 'enableRtl', 'enabled', 'files', 'htmlAttributes', 'locale', 'maxFileSize', 'minFileSize', 'multiple', 'sequentialUpload', 'showFileList', 'template', 'actionComplete', 'canceling', 'change', 'chunkFailure', 'chunkSuccess', 'chunkUploading', 'clearing', 'created', 'failure', 'fileListRendering', 'pausing', 'progress', 'removing', 'rendering', 'resuming', 'selected', 'success', 'uploading'];
export const modelProps: string[] = [];

/**
 * Represents the Essential JS 2 VueJS Uploader Component
 * ```html
 * <ejs-uploader id='fileUpload' v-bind:multiple='true'></ejs-uploader>
 * ```
 */
@EJComponentDecorator({
    props: properties
})
export class UploaderComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = true;
    protected hasInjectedModules: boolean = false;
    public tagMapper: { [key: string]: Object } = {"e-files":"e-uploadedfiles"};
    public tagNameMapper: Object = {};
    
    constructor() {
        super();
        this.ej2Instances = new Uploader({});
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
        return createElement('input', (this as any).$slots.default);
    }
    
    public bytesToSize(bytes: number): string {
        return this.ej2Instances.bytesToSize(bytes);
    }

    public cancel(fileData: Object[]): void {
        return this.ej2Instances.cancel(fileData);
    }

    public clearAll(): void {
        return this.ej2Instances.clearAll();
    }

    public getFilesData(): Object[] {
        return this.ej2Instances.getFilesData();
    }

    public pause(fileData: Object | Object[], custom?: boolean): void {
        return this.ej2Instances.pause(fileData, custom);
    }

    public remove(fileData?: Object | Object[], customTemplate?: boolean, removeDirectly?: boolean, args?: Object | Object | Object): void {
        return this.ej2Instances.remove(fileData, customTemplate, removeDirectly, args);
    }

    public resume(fileData: Object | Object[], custom?: boolean): void {
        return this.ej2Instances.resume(fileData, custom);
    }

    public retry(fileData: Object | Object[], fromcanceledStage?: boolean, custom?: boolean): void {
        return this.ej2Instances.retry(fileData, fromcanceledStage, custom);
    }

    public sortFileList(filesData: Object): Object[] {
        return this.ej2Instances.sortFileList(filesData);
    }

    public traverseFileTree(item: any, event?: Object | Object | Object | Object): void {
        return this.ej2Instances.traverseFileTree(item, event);
    }

    public upload(files: Object | Object[], custom?: boolean): void {
        return this.ej2Instances.upload(files, custom);
    }
}

export const UploaderPlugin = {
    name: 'ejs-uploader',
    install(Vue: any) {
        Vue.component(UploaderPlugin.name, UploaderComponent);
        Vue.component(UploadedFilesPlugin.name, UploadedFilesDirective);
        Vue.component(FilesPlugin.name, FilesDirective);

    }
}
