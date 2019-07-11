import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class StockChartAxesDirective extends Vue {
    public render(): void {
        return;
    }
}
export const StockChartAxesPlugin = {
    name: 'e-stockchart-axes',
    install(Vue: any) {
        Vue.component(StockChartAxesPlugin.name, StockChartAxesDirective);
    }
}


@EJComponentDecorator({})
export class StockChartAxisDirective extends Vue {
    public render(): void {
        return;
    }
}
export const StockChartAxisPlugin = {
    name: 'e-stockchart-axis',
    install(Vue: any) {
        Vue.component(StockChartAxisPlugin.name, StockChartAxisDirective);
    }
}
