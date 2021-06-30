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
export class DropDownButtonItemsDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-dropdownbuttonitems';
    }
}
export const DropDownButtonItemsPlugin = {
    name: 'e-dropdownbuttonitems',
    install(Vue: any) {
        Vue.component(DropDownButtonItemsPlugin.name, DropDownButtonItemsDirective);
    }
}


@EJComponentDecorator({}, isExecute)
export class DropDownButtonItemDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-dropdownbuttonitem';
    }
}
export const DropDownButtonItemPlugin = {
    name: 'e-dropdownbuttonitem',
    install(Vue: any) {
        Vue.component(DropDownButtonItemPlugin.name, DropDownButtonItemDirective);
    }
}
