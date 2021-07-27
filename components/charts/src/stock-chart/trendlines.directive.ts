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
export class StockChartTrendlinesDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-trendlines';
    }
}
export const StockChartTrendlinesPlugin = {
    name: 'e-trendlines',
    install(Vue: any) {
        Vue.component(StockChartTrendlinesPlugin.name, StockChartTrendlinesDirective);
    }
}


@EJComponentDecorator({}, isExecute)
export class StockChartTrendlineDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-trendline';
    }
}
export const StockChartTrendlinePlugin = {
    name: 'e-trendline',
    install(Vue: any) {
        Vue.component(StockChartTrendlinePlugin.name, StockChartTrendlineDirective);
    }
}
