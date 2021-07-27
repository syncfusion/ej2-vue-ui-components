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
export class AddDialogFieldsDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-add-dialog-fields';
    }
}
export const AddDialogFieldsPlugin = {
    name: 'e-add-dialog-fields',
    install(Vue: any) {
        Vue.component(AddDialogFieldsPlugin.name, AddDialogFieldsDirective);
    }
}

/**
 * `e-add-dialog-fields` directive represent a add dialog fields in VueJS Gantt. 
 * It must be contained in a Gantt component(`ejs-gantt`). 
 * ```vue
 * <ejs-gantt :dataSource]='data' allowSelection='true' allowSorting='true'>
 *   <e-add-dialog-fields>
 *     <e-add-dialog-field type='General' headerText='General'/>
 *     <e-add-dialog-field type='Dependency' headerText='Dependency'/>
 *   </e-add-dialog-fields>
 * </ejs-gantt>
 * ```
 */
@EJComponentDecorator({}, isExecute)
export class AddDialogFieldDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-add-dialog-field';
    }
}
export const AddDialogFieldPlugin = {
    name: 'e-add-dialog-field',
    install(Vue: any) {
        Vue.component(AddDialogFieldPlugin.name, AddDialogFieldDirective);
    }
}
