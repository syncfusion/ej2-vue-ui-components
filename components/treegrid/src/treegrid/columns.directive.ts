import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class ColumnsDirective extends Vue {
    public render(): void {
        return;
    }
}
export const ColumnsPlugin = {
    name: 'e-columns',
    install(Vue: any) {
        Vue.component(ColumnsPlugin.name, ColumnsDirective);
    }
}

/**
 * `e-column` directive represent a column of the VueJS TreeGrid. 
 * It must be contained in a TreeGrid component(`ejs-treegrid`). 
 * ```vue
 * <ejs-treegrid :dataSource='data' allowPaging='true' allowSorting='true'> 
 *   <e-columns>
 *    <e-column field='ID' width='100'/>
 *    <e-column field='name' headerText='Name' width='100'/>
 *   </e-columns>
 * </ejs-treegrid>
 * ```
 */
@EJComponentDecorator({})
export class ColumnDirective extends Vue {
    public render(): void {
        return;
    }
}
export const ColumnPlugin = {
    name: 'e-column',
    install(Vue: any) {
        Vue.component(ColumnPlugin.name, ColumnDirective);
    }
}
