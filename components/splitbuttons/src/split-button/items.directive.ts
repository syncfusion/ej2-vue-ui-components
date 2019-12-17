import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class SplitButtonItemsDirective extends Vue {
    public render(): void {
        return;
    }
}
export const SplitButtonItemsPlugin = {
    name: 'e-splitbuttonitems',
    install(Vue: any) {
        Vue.component(SplitButtonItemsPlugin.name, SplitButtonItemsDirective);
    }
}


@EJComponentDecorator({})
export class SplitButtonItemDirective extends Vue {
    public render(): void {
        return;
    }
}
export const SplitButtonItemPlugin = {
    name: 'e-splitbuttonitem',
    install(Vue: any) {
        Vue.component(SplitButtonItemPlugin.name, SplitButtonItemDirective);
    }
}
