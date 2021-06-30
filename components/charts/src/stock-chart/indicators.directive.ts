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
export class StockChartIndicatorsDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-stockchart-indicators';
    }
}
export const StockChartIndicatorsPlugin = {
    name: 'e-stockchart-indicators',
    install(Vue: any) {
        Vue.component(StockChartIndicatorsPlugin.name, StockChartIndicatorsDirective);
    }
}


@EJComponentDecorator({}, isExecute)
export class StockChartIndicatorDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-stockchart-indicator';
    }
}
export const StockChartIndicatorPlugin = {
    name: 'e-stockchart-indicator',
    install(Vue: any) {
        Vue.component(StockChartIndicatorPlugin.name, StockChartIndicatorDirective);
    }
}
