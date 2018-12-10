import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class StockChartTrendlinesDirective extends Vue {
    public render(): void {
        return;
    }
}
export const StockChartTrendlinesPlugin = {
    name: 'e-trendlines',
    install(Vue: any) {
        Vue.component(StockChartTrendlinesPlugin.name, StockChartTrendlinesDirective);
    }
}


@EJComponentDecorator({})
export class StockChartTrendlineDirective extends Vue {
    public render(): void {
        return;
    }
}
export const StockChartTrendlinePlugin = {
    name: 'e-trendline',
    install(Vue: any) {
        Vue.component(StockChartTrendlinePlugin.name, StockChartTrendlineDirective);
    }
}
