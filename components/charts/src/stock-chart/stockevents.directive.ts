import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class StockChartStockEventsDirective extends Vue {
    public render(): void {
        return;
    }
}
export const StockChartStockEventsPlugin = {
    name: 'e-stockchart-stockevents',
    install(Vue: any) {
        Vue.component(StockChartStockEventsPlugin.name, StockChartStockEventsDirective);
    }
}


@EJComponentDecorator({})
export class StockChartStockEventDirective extends Vue {
    public render(): void {
        return;
    }
}
export const StockChartStockEventPlugin = {
    name: 'e-stockchart-stockevent',
    install(Vue: any) {
        Vue.component(StockChartStockEventPlugin.name, StockChartStockEventDirective);
    }
}
