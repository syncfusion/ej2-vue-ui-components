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
 * `e-column` directive represent a column of the VueJS Grid. 
 * It must be contained in a Grid component(`ejs-grid`). 
 * ```vue
 * <ejs-grid :dataSource='data' allowPaging='true' allowSorting='true'> 
 *   <e-columns>
 *    <e-column field='ID' width='100'/>
 *    <e-column field='name' headerText='Name' width='100'/>
 *   </e-columns>
 * </ejs-grid>
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
