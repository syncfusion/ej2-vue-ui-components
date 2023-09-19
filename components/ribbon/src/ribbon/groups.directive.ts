import { gh, isExecute, vueDefineComponent, DefineVueDirective } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { RibbonGroupModel } from '@syncfusion/ej2-ribbon';

export let RibbonGroupsDirective =  vueDefineComponent({
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
            return 'e-ribbon-groups';
        }
    }
});
export const RibbonGroupsPlugin = {
    name: 'e-ribbon-groups',
    install(Vue: any) {
        Vue.component(RibbonGroupsPlugin.name, RibbonGroupsDirective);
    }
}

/**
 * `e-ribbon-group` directive represent a group in the VueJS Ribbon. 
 * ```vue
 * <ejs-ribbon>
 *   <e-ribbon-tabs>
 *    <e-ribbon-tab></e-ribbon-tab>
 *    <e-ribbon-tab>
 *       <e-ribbon-groups>
 *         <e-ribbon-group></e-ribbon-group>
 *         <e-ribbon-group></e-ribbon-group>
 *       </e-ribbon-groups>
 *    </e-ribbon-tab>
 *   </e-ribbon-tabs>
 * </ejs-ribbon>
 * ```
 */
export let RibbonGroupDirective: DefineVueDirective<RibbonGroupModel> =  vueDefineComponent({
    render(): void {
        return;
    },
    methods: {
        getTag(): string {
            return 'e-ribbon-group';
        }
    }
});
export const RibbonGroupPlugin = {
    name: 'e-ribbon-group',
    install(Vue: any) {
        Vue.component(RibbonGroupPlugin.name, RibbonGroupDirective);
    }
}