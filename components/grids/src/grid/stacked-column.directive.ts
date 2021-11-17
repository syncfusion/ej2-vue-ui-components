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
export class StackedColumnsDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-stacked-columns';
    }
}
export const StackedColumnsPlugin = {
    name: 'e-stacked-columns',
    install(Vue: any) {
        Vue.component(StackedColumnsPlugin.name, StackedColumnsDirective);
    }
}


@EJComponentDecorator({}, isExecute)
export class StackedColumnDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-stacked-column';
    }
}
export const StackedColumnPlugin = {
    name: 'e-stacked-column',
    install(Vue: any) {
        Vue.component(StackedColumnPlugin.name, StackedColumnDirective);
    }
}
