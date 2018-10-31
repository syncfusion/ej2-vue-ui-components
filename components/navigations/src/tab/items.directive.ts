import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class TabItemsDirective extends Vue {
    public render(): void {
        return;
    }
}
export const TabItemsPlugin = {
    name: 'e-tabitems',
    install(Vue: any) {
        Vue.component(TabItemsPlugin.name, TabItemsDirective);
    }
}


@EJComponentDecorator({})
export class TabItemDirective extends Vue {
    public render(): void {
        return;
    }
}
export const TabItemPlugin = {
    name: 'e-tabitem',
    install(Vue: any) {
        Vue.component(TabItemPlugin.name, TabItemDirective);
    }
}
