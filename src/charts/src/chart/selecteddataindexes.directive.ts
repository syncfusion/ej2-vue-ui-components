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
export class SelectedDataIndexesDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-selecteddataindexes';
    }
}
export const SelectedDataIndexesPlugin = {
    name: 'e-selecteddataindexes',
    install(Vue: any) {
        Vue.component(SelectedDataIndexesPlugin.name, SelectedDataIndexesDirective);
    }
}


@EJComponentDecorator({}, isExecute)
export class SelectedDataIndexDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-selecteddataindex';
    }
}
export const SelectedDataIndexPlugin = {
    name: 'e-selecteddataindex',
    install(Vue: any) {
        Vue.component(SelectedDataIndexPlugin.name, SelectedDataIndexDirective);
    }
}
