import { ComponentBase, EJComponentDecorator, allVue, gh } from '@syncfusion/ej2-vue-base';
import * as Vue3 from 'vue-class-component';
import Vue from 'vue';

export const isExecute: any = gh ? false : true;

let vueImport: any;
if (!isExecute || parseInt(allVue.version) < 3) {
    vueImport = (Vue3 as any).Vue;
} else {
    vueImport = Vue;
}

@EJComponentDecorator({}, isExecute)
export class ItemsDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-items';
    }
}
export const ItemsPlugin = {
    name: 'e-items',
    install(Vue: any) {
        Vue.component(ItemsPlugin.name, ItemsDirective);
    }
}

/**
 * 'e-item' directive represent a item of Vue Toolbar 
 * It must be contained in a Toolbar component(`ejs-toolbar`). 
 * ```html
 * <ejs-toolbar> 
 *   <e-items>
 *    <e-item text='Cut'></e-item>
 *    <e-item text='Copy'></e-item>
 *   </e-items>
 * </ejs-toolbar>
 * ```
 */
@EJComponentDecorator({}, isExecute)
export class ItemDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-item';
    }
}
export const ItemPlugin = {
    name: 'e-item',
    install(Vue: any) {
        Vue.component(ItemPlugin.name, ItemDirective);
    }
}
