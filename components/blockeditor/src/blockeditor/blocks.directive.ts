import { gh, isExecute, vueDefineComponent, DefineVueDirective } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { BlockModel } from '@syncfusion/ej2-blockeditor';

export let BlocksDirective =  vueDefineComponent({
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
            return 'e-blocks';
        }
    }
});
export const BlocksPlugin = {
    name: 'e-blocks',
    install(Vue: any) {
        Vue.component(BlocksPlugin.name, BlocksDirective);
    }
}

/**
 * `e-block` directive represent a block of the VueJS BlockEditor. 
 * It must be contained in a BlockEditor component(`ejs-blockeditor`). 
 * ```vue
 * <ejs-blockeditor>
 *   <e-blocks>
 *    <e-block></e-block>
 *    <e-block></e-block>
 *   </e-blocks>
 * </ejs-blockeditor>
 * ```
 */
export let BlockDirective: DefineVueDirective<BlockModel> =  vueDefineComponent({
    render(): void {
        return;
    },
    methods: {
        getTag(): string {
            return 'e-block';
        }
    }
});
export const BlockPlugin = {
    name: 'e-block',
    install(Vue: any) {
        Vue.component(BlockPlugin.name, BlockDirective);
    }
}