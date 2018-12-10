import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class StockChartRowsDirective extends Vue {
    public render(): void {
        return;
    }
}
export const StockChartRowsPlugin = {
    name: 'e-stockchart-rows',
    install(Vue: any) {
        Vue.component(StockChartRowsPlugin.name, StockChartRowsDirective);
    }
}


@EJComponentDecorator({})
export class StockChartRowDirective extends Vue {
    public render(): void {
        return;
    }
}
export const StockChartRowPlugin = {
    name: 'e-stockchart-row',
    install(Vue: any) {
        Vue.component(StockChartRowPlugin.name, StockChartRowDirective);
    }
}
