import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class StockChartSeriesCollectionDirective extends Vue {
    public render(): void {
        return;
    }
}
export const StockChartSeriesCollectionPlugin = {
    name: 'e-stockchart-series-collection',
    install(Vue: any) {
        Vue.component(StockChartSeriesCollectionPlugin.name, StockChartSeriesCollectionDirective);
    }
}


@EJComponentDecorator({})
export class StockChartSeriesDirective extends Vue {
    public render(): void {
        return;
    }
}
export const StockChartSeriesPlugin = {
    name: 'e-stockchart-series',
    install(Vue: any) {
        Vue.component(StockChartSeriesPlugin.name, StockChartSeriesDirective);
    }
}
