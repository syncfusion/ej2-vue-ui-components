import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class ItemsDirective extends Vue {
    public render(): void {
        return;
    }
}
export const ItemsPlugin = {
    name: 'e-items',
    install(Vue: any) {
        Vue.component(ItemsPlugin.name, ItemsDirective);
    }
}


@EJComponentDecorator({})
export class ItemDirective extends Vue {
    public render(): void {
        return;
    }
}
export const ItemPlugin = {
    name: 'e-item',
    install(Vue: any) {
        Vue.component(ItemPlugin.name, ItemDirective);
    }
}
