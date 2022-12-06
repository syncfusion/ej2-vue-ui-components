import { ComponentBase, EJComponentDecorator, allVue, gh, isExecute } from '@syncfusion/ej2-vue-base';
import * as Vue3 from 'vue-class-component';
import { Options } from 'vue-class-component';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import Vue from 'vue';
// {{VueImport}}

let vueImport: any;
if (!isExecute || parseInt(allVue.version) < 3) {
    vueImport = (Vue3 as any).Vue;
} else {
    vueImport = Vue;
}

@EJComponentDecorator({}, isExecute)
/* Start Options({
    inject: {
        custom: {
            default: null
        }
    }
}) End */

export class FilesDirective extends vueImport {
    constructor() {
        super(arguments);
    }
    public render(createElement: any): void {
        if (!isExecute) {
            let h: any = !isExecute ? gh : createElement;
            let slots: any = null;
            if(!isNullOrUndefined((this as any).$slots.default)) {
                slots = !isExecute ? (this as any).$slots.default() : (this as any).$slots.default;
            }
            return h('div', { class: 'e-directive' }, slots);
        }
        return;
    }
    public updated(): void {
        if (!isExecute && this.custom) {
            this.custom();
        }
    }
    public getTag(): string {
        return 'e-files';
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
@EJComponentDecorator({}, isExecute)
export class UploadedFilesDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-uploadedfiles';
    }
}
export const UploadedFilesPlugin = {
    name: 'e-uploadedfiles',
    install(Vue: any) {
        Vue.component(UploadedFilesPlugin.name, UploadedFilesDirective);
    }
}