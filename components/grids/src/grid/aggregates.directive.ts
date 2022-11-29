import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class AggregatesDirective extends Vue {
    public render(): void {
        return;
    }
}
export const AggregatesPlugin = {
    name: 'e-aggregates',
    install(Vue: any) {
        Vue.component(AggregatesPlugin.name, AggregatesDirective);
    }
}

/**
 * `e-aggregate` directive represent a aggregate row of the VueJS Grid. 
 * It must be contained in a Grid component(`ejs-grid`). 
 * ```vue
 * <ejs-grid :dataSource]='data' allowPaging='true' allowSorting='true'>
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
 * </ejs-grid>
 * ```
 */
@EJComponentDecorator({})
export class AggregateDirective extends Vue {
    public render(): void {
        return;
    }
}
export const AggregatePlugin = {
    name: 'e-aggregate',
    install(Vue: any) {
        Vue.component(AggregatePlugin.name, AggregateDirective);
    }
}
