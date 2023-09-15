import { gh, isExecute, vueDefineComponent, DefineVueDirective } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { RibbonItemModel } from '@syncfusion/ej2-ribbon';

export let RibbonItemsDirective =  vueDefineComponent({
    inject: { custom: { default: null } },
    render(createElement: any): void {
        if (!isExecute) {
            let h: any = !isExecute ? gh : createElement;
            let slots: any = null;
            if(!isNullOrUndefined((this as any).$slots.default)) {
                slots = !isExecute ? (this as any).$slots.default() : (this as any).$slots.default;
            }
            return h('div', { class: 'e-directive' }, slots);
        }
        return;
    },
    updated(): void {
        if (!isExecute && this.custom) { this.custom() }
    },
    methods: {
        getTag(): string {
            return 'e-ribbon-items';
        }
    }
});
export const RibbonItemsPlugin = {
    name: 'e-ribbon-items',
    install(Vue: any) {
        Vue.component(RibbonItemsPlugin.name, RibbonItemsDirective);
    }
}

/**
 * `e-ribbon-item` directive represent a item in the VueJS Ribbon. 
 * ```vue
 * <ejs-ribbon>
 *   <e-ribbon-tabs>
 *    <e-ribbon-tab></e-ribbon-tab>
 *    <e-ribbon-tab>
 *       <e-ribbon-groups>
 *         <e-ribbon-group>
 *             <e-ribbon-collections>
 *                 <e-ribbon-collection>
 *                     <e-ribbon-items>
 *                         <e-ribbon-item></e-ribbon-item>
 *                         <e-ribbon-item></e-ribbon-item>
 *                     </e-ribbon-items>
 *                 </e-ribbon-collection>
 *             </e-ribbon-collections>
 *         </e-ribbon-group>
 *       </e-ribbon-groups>
 *    </e-ribbon-tab>
 *   </e-ribbon-tabs>
 * </ejs-ribbon>
 * ```
 */
export let RibbonItemDirective: DefineVueDirective<RibbonItemModel> =  vueDefineComponent({
    render(): void {
        return;
    },
    methods: {
        getTag(): string {
            return 'e-ribbon-item';
        }
    }
});
export const RibbonItemPlugin = {
    name: 'e-ribbon-item',
    install(Vue: any) {
        Vue.component(RibbonItemPlugin.name, RibbonItemDirective);
    }
}