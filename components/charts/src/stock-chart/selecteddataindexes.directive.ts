import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class StockChartSelectedDataIndexesDirective extends Vue {
    public render(): void {
        return;
    }
}
export const StockChartSelectedDataIndexesPlugin = {
    name: 'e-stockchart-selectedDataIndexes',
    install(Vue: any) {
        Vue.component(StockChartSelectedDataIndexesPlugin.name, StockChartSelectedDataIndexesDirective);
    }
}


@EJComponentDecorator({})
export class StockChartSelectedDataIndexDirective extends Vue {
    public render(): void {
        return;
    }
}
export const StockChartSelectedDataIndexPlugin = {
    name: 'e-stockchart-selectedDataIndex',
    install(Vue: any) {
        Vue.component(StockChartSelectedDataIndexPlugin.name, StockChartSelectedDataIndexDirective);
    }
}
