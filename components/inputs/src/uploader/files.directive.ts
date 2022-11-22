import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class FilesDirective extends Vue {
    public render(): void {
        return;
    }
}
export const FilesPlugin = {
    name: 'e-files',
    install(Vue: any) {
        Vue.component(FilesPlugin.name, FilesDirective);
    }
}

/**
 * 'files' directive represent a file of vue uploader 
 * It must be contained in a Uploader component(`ejs-uploader`). 
 * ```html
 * <ejs-uploader id='fileupload' v-bind:multiple='true'> 
 *   <e-files>
 *    <e-file name='Java' size=23000 type='pdf'></e-file>
 *    <e-file name='C++' size=30000 type='.docx'></e-file>
 *   </e-files>
 * </ejs-uploader>
 * ```
 */
@EJComponentDecorator({})
export class UploadedFilesDirective extends Vue {
    public render(): void {
        return;
    }
}
export const UploadedFilesPlugin = {
    name: 'e-uploadedfiles',
    install(Vue: any) {
        Vue.component(UploadedFilesPlugin.name, UploadedFilesDirective);
    }
}
