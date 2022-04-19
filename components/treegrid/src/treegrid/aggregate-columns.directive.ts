import { ComponentBase, EJComponentDecorator, allVue, gh } from '@syncfusion/ej2-vue-base';
import * as Vue3 from 'vue-class-component';
import { Options } from 'vue-class-component';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import Vue from 'vue';
// {{VueImport}}
export const isExecute: any = gh ? false : true;

let vueImport: any;
if (!isExecute || parseInt(allVue.version) < 3) {
    vueImport = (Vue3 as any).Vue;
} else {
    vueImport = Vue;
}

@EJComponentDecorator({}, isExecute)
/* Start Options({
    inject: {
        custom: {
            default: null
        }
    }
}) End */

export class AggregateColumnsDirective extends vueImport {
    constructor() {
        super(arguments);
    }
    public render(createElement: any): void {
        if (gh) {
            let h: any = gh || createElement;
            let slots: any = null;
            if(!isNullOrUndefined((this as any).$slots.default)) {
                slots = gh ? (this as any).$slots.default() : (this as any).$slots.default;
            }
            return h('div', { class: 'e-directive' }, slots);
        }
        return;
    }
    public updated(): void {
        if (gh && this.custom) {
            this.custom();
        }
    }
    public getTag(): string {
        return 'e-columns';
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
@EJComponentDecorator({}, isExecute)
export class AggregateColumnDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-column';
    }
}
export const AggregateColumnPlugin = {
    name: 'e-column',
    install(Vue: any) {
        Vue.component(AggregateColumnPlugin.name, AggregateColumnDirective);
    }
}