import { gh, isExecute, vueDefineComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';

export let MenuItemsDirective =  vueDefineComponent({
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
            return 'e-menu-items';
        }
    }
});
export const MenuItemsPlugin = {
    name: 'e-menu-items',
    install(Vue: any) {
        Vue.component(MenuItemsPlugin.name, MenuItemsDirective);
    }
}


export let MenuItemDirective =  vueDefineComponent({
    render(): void {
        return;
    },
    methods: {
        getTag(): string {
            return 'e-';
        }
    }
});
export const MenuItemPlugin = {
    name: 'e-',
    install(Vue: any) {
        Vue.component(MenuItemPlugin.name, MenuItemDirective);
    }
}