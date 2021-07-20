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
export class StockChartRowsDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-stockchart-rows';
    }
}
export const StockChartRowsPlugin = {
    name: 'e-stockchart-rows',
    install(Vue: any) {
        Vue.component(StockChartRowsPlugin.name, StockChartRowsDirective);
    }
}


@EJComponentDecorator({}, isExecute)
export class StockChartRowDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-stockchart-row';
    }
}
export const StockChartRowPlugin = {
    name: 'e-stockchart-row',
    install(Vue: any) {
        Vue.component(StockChartRowPlugin.name, StockChartRowDirective);
    }
}
