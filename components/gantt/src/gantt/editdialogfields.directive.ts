import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class EditDialogFieldsDirective extends Vue {
    public render(): void {
        return;
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
@EJComponentDecorator({})
export class EditDialogFieldDirective extends Vue {
    public render(): void {
        return;
    }
}
export const EditDialogFieldPlugin = {
    name: 'e-edit-dialog-field',
    install(Vue: any) {
        Vue.component(EditDialogFieldPlugin.name, EditDialogFieldDirective);
    }
}
