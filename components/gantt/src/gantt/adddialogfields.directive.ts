import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class AddDialogFieldsDirective extends Vue {
    public render(): void {
        return;
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
@EJComponentDecorator({})
export class AddDialogFieldDirective extends Vue {
    public render(): void {
        return;
    }
}
export const AddDialogFieldPlugin = {
    name: 'e-add-dialog-field',
    install(Vue: any) {
        Vue.component(AddDialogFieldPlugin.name, AddDialogFieldDirective);
    }
}
