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
export class StockChartPeriodsDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-stockchart-periods';
    }
}
export const StockChartPeriodsPlugin = {
    name: 'e-stockchart-periods',
    install(Vue: any) {
        Vue.component(StockChartPeriodsPlugin.name, StockChartPeriodsDirective);
    }
}


@EJComponentDecorator({}, isExecute)
export class StockChartPeriodDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-stockchart-period';
    }
}
export const StockChartPeriodPlugin = {
    name: 'e-stockchart-period',
    install(Vue: any) {
        Vue.component(StockChartPeriodPlugin.name, StockChartPeriodDirective);
    }
}
