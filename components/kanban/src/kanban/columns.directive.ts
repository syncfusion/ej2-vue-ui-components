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
export class ColumnsDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-columns';
    }
}
export const ColumnsPlugin = {
    name: 'e-columns',
    install(Vue: any) {
        Vue.component(ColumnsPlugin.name, ColumnsDirective);
    }
}

/**
 * `e-columns` directive represent a columns of the VueJS Kanban board. 
 * It must be contained in a Kanban component(`ejs-kanban`). 
 * ```vue
 * <ejs-kanban>
 *   <e-columns>
 *    <e-column keyField='Open' textField='To Do'></e-column>
 *    <e-column keyField='Close' textField='Completed'></e-column>
 *   </e-columns>
 * </ejs-kanban>
 * ```
 */
@EJComponentDecorator({}, isExecute)
export class ColumnDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-column';
    }
}
export const ColumnPlugin = {
    name: 'e-column',
    install(Vue: any) {
        Vue.component(ColumnPlugin.name, ColumnDirective);
    }
}
