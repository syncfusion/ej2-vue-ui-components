import { ComponentBase, EJComponentDecorator, allVue, gh, isExecute } from '@syncfusion/ej2-vue-base';
import * as Vue3 from 'vue-class-component';
import { Options } from 'vue-class-component';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import Vue from 'vue';
// {{VueImport}}

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

export class AggregatesDirective extends vueImport {
    constructor() {
        super(arguments);
    }
    public render(createElement: any): void {
        if (!isExecute) {
            let h: any = !isExecute ? gh : createElement;
            let slots: any = null;
            if(!isNullOrUndefined((this as any).$slots.default)) {
                slots = !isExecute ? (this as any).$slots.default() : (this as any).$slots.default;
            }
            return h('div', { class: 'e-directive' }, slots);
        }
        return;
    }
    public updated(): void {
        if (!isExecute && this.custom) {
            this.custom();
        }
    }
    public getTag(): string {
        return 'e-aggregates';
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
@EJComponentDecorator({}, isExecute)
export class AggregateDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-aggregate';
    }
}
export const AggregatePlugin = {
    name: 'e-aggregate',
    install(Vue: any) {
        Vue.component(AggregatePlugin.name, AggregateDirective);
    }
}