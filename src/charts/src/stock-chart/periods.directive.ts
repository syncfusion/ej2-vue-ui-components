import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class StockChartPeriodsDirective extends Vue {
    public render(): void {
        return;
    }
}
export const StockChartPeriodsPlugin = {
    name: 'e-stockchart-periods',
    install(Vue: any) {
        Vue.component(StockChartPeriodsPlugin.name, StockChartPeriodsDirective);
    }
}


@EJComponentDecorator({})
export class StockChartPeriodDirective extends Vue {
    public render(): void {
        return;
    }
}
export const StockChartPeriodPlugin = {
    name: 'e-stockchart-period',
    install(Vue: any) {
        Vue.component(StockChartPeriodPlugin.name, StockChartPeriodDirective);
    }
}
