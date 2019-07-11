import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class StockChartIndicatorsDirective extends Vue {
    public render(): void {
        return;
    }
}
export const StockChartIndicatorsPlugin = {
    name: 'e-stockchart-indicators',
    install(Vue: any) {
        Vue.component(StockChartIndicatorsPlugin.name, StockChartIndicatorsDirective);
    }
}


@EJComponentDecorator({})
export class StockChartIndicatorDirective extends Vue {
    public render(): void {
        return;
    }
}
export const StockChartIndicatorPlugin = {
    name: 'e-stockchart-indicator',
    install(Vue: any) {
        Vue.component(StockChartIndicatorPlugin.name, StockChartIndicatorDirective);
    }
}
