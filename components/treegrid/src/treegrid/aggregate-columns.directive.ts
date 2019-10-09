import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class AggregateColumnsDirective extends Vue {
    public render(): void {
        return;
    }
}
export const AggregateColumnsPlugin = {
    name: 'e-columns',
    install(Vue: any) {
        Vue.component(AggregateColumnsPlugin.name, AggregateColumnsDirective);
    }
}

/**
 * `e-aggregate->e-column` directive represent a aggregate column of the VueJS TreeGrid. 
 * ```vue
 * <ejs-treegrid :dataSource='data' allowPaging='true' allowSorting='true'> 
 *   <e-columns>
 *     <e-column field='ID' width='100'/>
 *     <e-column field='name' headerText='Name' width='100'/>
 *   </e-columns>
 *   <e-aggregates>
 *     <e-aggregate>
 *       <e-columns>
 *         <e-column field='ID' type='Min'/>
 *       </e-columns>
 *      </e-aggregate>
 *    </e-aggregates>
 * </ejs-treegrid>
 * ```
 */
@EJComponentDecorator({})
export class AggregateColumnDirective extends Vue {
    public render(): void {
        return;
    }
}
export const AggregateColumnPlugin = {
    name: 'e-column',
    install(Vue: any) {
        Vue.component(AggregateColumnPlugin.name, AggregateColumnDirective);
    }
}
