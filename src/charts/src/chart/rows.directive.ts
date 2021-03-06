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
export class RowsDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-rows';
    }
}
export const RowsPlugin = {
    name: 'e-rows',
    install(Vue: any) {
        Vue.component(RowsPlugin.name, RowsDirective);
    }
}


@EJComponentDecorator({}, isExecute)
export class RowDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-row';
    }
}
export const RowPlugin = {
    name: 'e-row',
    install(Vue: any) {
        Vue.component(RowPlugin.name, RowDirective);
    }
}
