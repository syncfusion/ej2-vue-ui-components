import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class DropDownButtonItemsDirective extends Vue {
    public render(): void {
        return;
    }
}
export const DropDownButtonItemsPlugin = {
    name: 'e-dropdownbuttonitems',
    install(Vue: any) {
        Vue.component(DropDownButtonItemsPlugin.name, DropDownButtonItemsDirective);
    }
}


@EJComponentDecorator({})
export class DropDownButtonItemDirective extends Vue {
    public render(): void {
        return;
    }
}
export const DropDownButtonItemPlugin = {
    name: 'e-dropdownbuttonitem',
    install(Vue: any) {
        Vue.component(DropDownButtonItemPlugin.name, DropDownButtonItemDirective);
    }
}
