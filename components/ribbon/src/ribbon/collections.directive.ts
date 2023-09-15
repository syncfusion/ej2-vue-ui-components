import { gh, isExecute, vueDefineComponent, DefineVueDirective } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { RibbonCollectionModel } from '@syncfusion/ej2-ribbon';

export let RibbonCollectionsDirective =  vueDefineComponent({
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
            return 'e-ribbon-collections';
        }
    }
});
export const RibbonCollectionsPlugin = {
    name: 'e-ribbon-collections',
    install(Vue: any) {
        Vue.component(RibbonCollectionsPlugin.name, RibbonCollectionsDirective);
    }
}

/**
 * `e-ribbon-collection` directive represent a collection in the VueJS Ribbon. 
 * ```vue
 * <ejs-ribbon>
 *   <e-ribbon-tabs>
 *    <e-ribbon-tab></e-ribbon-tab>
 *    <e-ribbon-tab>
 *       <e-ribbon-groups>
 *         <e-ribbon-group>
 *             <e-ribbon-collections>
 *                 <e-ribbon-collection></e-ribbon-collection>
 *                 <e-ribbon-collection></e-ribbon-collection>
 *             </e-ribbon-collections>
 *         </e-ribbon-group>
 *       </e-ribbon-groups>
 *    </e-ribbon-tab>
 *   </e-ribbon-tabs>
 * </ejs-ribbon>
 * ```
 */
export let RibbonCollectionDirective: DefineVueDirective<RibbonCollectionModel> =  vueDefineComponent({
    render(): void {
        return;
    },
    methods: {
        getTag(): string {
            return 'e-ribbon-collection';
        }
    }
});
export const RibbonCollectionPlugin = {
    name: 'e-ribbon-collection',
    install(Vue: any) {
        Vue.component(RibbonCollectionPlugin.name, RibbonCollectionDirective);
    }
}