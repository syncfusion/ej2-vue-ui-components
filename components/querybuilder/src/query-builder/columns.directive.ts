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
 * `e-column` directive represent a column of the VueJS QueryBuilder. 
 * It must be contained in a QueryBuilder component(`ejs-querybuilder`). 
 * ```vue
 * <ejs-querybuilder :dataSource='data'> 
 *   <e-columns>
 *    <e-column field='ID' label='ID' type='number'/>
 *    <e-column field='Date' label='Date' type='date' format='dd/MM/yyyy'/>
 *   </e-columns>
 * </ejs-querybuilder>
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
