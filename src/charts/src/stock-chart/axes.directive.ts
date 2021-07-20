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
export class StockChartAxesDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-stockchart-axes';
    }
}
export const StockChartAxesPlugin = {
    name: 'e-stockchart-axes',
    install(Vue: any) {
        Vue.component(StockChartAxesPlugin.name, StockChartAxesDirective);
    }
}


@EJComponentDecorator({}, isExecute)
export class StockChartAxisDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-stockchart-axis';
    }
}
export const StockChartAxisPlugin = {
    name: 'e-stockchart-axis',
    install(Vue: any) {
        Vue.component(StockChartAxisPlugin.name, StockChartAxisDirective);
    }
}
