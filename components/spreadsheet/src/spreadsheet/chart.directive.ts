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
export class ChartsDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-charts';
    }
}
export const ChartsPlugin = {
    name: 'e-charts',
    install(Vue: any) {
        Vue.component(ChartsPlugin.name, ChartsDirective);
    }
}


@EJComponentDecorator({}, isExecute)
export class ChartDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-chart';
    }
}
export const ChartPlugin = {
    name: 'e-chart',
    install(Vue: any) {
        Vue.component(ChartPlugin.name, ChartDirective);
    }
}
