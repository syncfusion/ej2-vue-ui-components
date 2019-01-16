import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class MenuItemsDirective extends Vue {
    public render(): void {
        return;
    }
}
export const MenuItemsPlugin = {
    name: 'e-menu-items',
    install(Vue: any) {
        Vue.component(MenuItemsPlugin.name, MenuItemsDirective);
    }
}


@EJComponentDecorator({})
export class MenuItemDirective extends Vue {
    public render(): void {
        return;
    }
}
export const MenuItemPlugin = {
    name: 'e-',
    install(Vue: any) {
        Vue.component(MenuItemPlugin.name, MenuItemDirective);
    }
}
