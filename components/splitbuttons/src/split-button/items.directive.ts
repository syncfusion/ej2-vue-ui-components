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
export class SplitButtonItemsDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-splitbuttonitems';
    }
}
export const SplitButtonItemsPlugin = {
    name: 'e-splitbuttonitems',
    install(Vue: any) {
        Vue.component(SplitButtonItemsPlugin.name, SplitButtonItemsDirective);
    }
}


@EJComponentDecorator({}, isExecute)
export class SplitButtonItemDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-splitbuttonitem';
    }
}
export const SplitButtonItemPlugin = {
    name: 'e-splitbuttonitem',
    install(Vue: any) {
        Vue.component(SplitButtonItemPlugin.name, SplitButtonItemDirective);
    }
}
