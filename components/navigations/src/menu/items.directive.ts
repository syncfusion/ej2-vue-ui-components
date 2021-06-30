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
export class MenuItemsDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-menu-items';
    }
}
export const MenuItemsPlugin = {
    name: 'e-menu-items',
    install(Vue: any) {
        Vue.component(MenuItemsPlugin.name, MenuItemsDirective);
    }
}


@EJComponentDecorator({}, isExecute)
export class MenuItemDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-';
    }
}
export const MenuItemPlugin = {
    name: 'e-',
    install(Vue: any) {
        Vue.component(MenuItemPlugin.name, MenuItemDirective);
    }
}
