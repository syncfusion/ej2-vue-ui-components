import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class StockChartStripLinesDirective extends Vue {
    public render(): void {
        return;
    }
}
export const StockChartStripLinesPlugin = {
    name: 'e-stockchart-striplines',
    install(Vue: any) {
        Vue.component(StockChartStripLinesPlugin.name, StockChartStripLinesDirective);
    }
}


@EJComponentDecorator({})
export class StockChartStripLineDirective extends Vue {
    public render(): void {
        return;
    }
}
export const StockChartStripLinePlugin = {
    name: 'e-stockchart-stripline',
    install(Vue: any) {
        Vue.component(StockChartStripLinePlugin.name, StockChartStripLineDirective);
    }
}
