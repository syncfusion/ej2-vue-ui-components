import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class StockEventsDirective extends Vue {
    public render(): void {
        return;
    }
}
export const StockEventsPlugin = {
    name: 'e-stockchart-stockevents',
    install(Vue: any) {
        Vue.component(StockEventsPlugin.name, StockEventsDirective);
    }
}


@EJComponentDecorator({})
export class StockEventDirective extends Vue {
    public render(): void {
        return;
    }
}
export const StockEventPlugin = {
    name: 'e-stockchart-stockevent',
    install(Vue: any) {
        Vue.component(StockEventPlugin.name, StockEventDirective);
    }
}
