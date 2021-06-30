import { ComponentBase, EJComponentDecorator, allVue, gh } from '@syncfusion/ej2-vue-base';
import * as Vue3 from 'vue-class-component';
import Vue from 'vue';

export const isExecute: any = gh ? false : true;

let vueImport: any;
if (!isExecute || parseInt(allVue.version) < 3) {
    vueImport = (Vue3 as any).Vue;
} else {
    vueImport = Vue;
}

@EJComponentDecorator({}, isExecute)
export class EditDialogFieldsDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-edit-dialog-fields';
    }
}
export const EditDialogFieldsPlugin = {
    name: 'e-edit-dialog-fields',
    install(Vue: any) {
        Vue.component(EditDialogFieldsPlugin.name, EditDialogFieldsDirective);
    }
}

/**
 * `e-edit-dialog-fields` directive represent a add dialog fields in VueJS Gantt. 
 * It must be contained in a Gantt component(`ejs-gantt`). 
 * ```vue
 * <ejs-gantt :dataSource]='data' allowSelection='true' allowSorting='true'>
 *   <e-edit-dialog-fields>
 *     <e-edit-dialog-field type='General' headerText='General'/>
 *     <e-edit-dialog-field type='Dependency' headerText='Dependency'/>
 *   </e-edit-dialog-fields>
 * </ejs-gantt>
 * ```
 */
@EJComponentDecorator({}, isExecute)
export class EditDialogFieldDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-edit-dialog-field';
    }
}
export const EditDialogFieldPlugin = {
    name: 'e-edit-dialog-field',
    install(Vue: any) {
        Vue.component(EditDialogFieldPlugin.name, EditDialogFieldDirective);
    }
}
