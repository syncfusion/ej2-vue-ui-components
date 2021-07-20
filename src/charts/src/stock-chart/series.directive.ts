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
export class StockChartSeriesCollectionDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-stockchart-series-collection';
    }
}
export const StockChartSeriesCollectionPlugin = {
    name: 'e-stockchart-series-collection',
    install(Vue: any) {
        Vue.component(StockChartSeriesCollectionPlugin.name, StockChartSeriesCollectionDirective);
    }
}


@EJComponentDecorator({}, isExecute)
export class StockChartSeriesDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-stockchart-series';
    }
}
export const StockChartSeriesPlugin = {
    name: 'e-stockchart-series',
    install(Vue: any) {
        Vue.component(StockChartSeriesPlugin.name, StockChartSeriesDirective);
    }
}
