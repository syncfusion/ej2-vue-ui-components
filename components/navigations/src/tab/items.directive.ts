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
export class TabItemsDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-tabitems';
    }
}
export const TabItemsPlugin = {
    name: 'e-tabitems',
    install(Vue: any) {
        Vue.component(TabItemsPlugin.name, TabItemsDirective);
    }
}

/**
 * 'e-tabitem' directive represent a item of the Vue Tab 
 * It must be contained in a Tab component(`ejs-tab`). 
 * ```html
 * <ejs-tab>
 *  <e-tabitems>
 *   <e-tabitem :header='Header 1' :content='Content 1'></e-tabitem>
 *   <e-tabitem :header='Header 2' :content='Content 2'></e-tabitem>
 *  <e-tabitems> 
 * </ejs-tab>
 * ```
 */
@EJComponentDecorator({}, isExecute)
export class TabItemDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-tabitem';
    }
}
export const TabItemPlugin = {
    name: 'e-tabitem',
    install(Vue: any) {
        Vue.component(TabItemPlugin.name, TabItemDirective);
    }
}
