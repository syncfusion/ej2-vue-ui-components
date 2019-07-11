import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class SmithchartSeriesCollectionDirective extends Vue {
    public render(): void {
        return;
    }
}
export const SmithchartSeriesCollectionPlugin = {
    name: 'e-seriesCollection',
    install(Vue: any) {
        Vue.component(SmithchartSeriesCollectionPlugin.name, SmithchartSeriesCollectionDirective);
    }
}


@EJComponentDecorator({})
export class SmithchartSeriesDirective extends Vue {
    public render(): void {
        return;
    }
}
export const SmithchartSeriesPlugin = {
    name: 'e-series',
    install(Vue: any) {
        Vue.component(SmithchartSeriesPlugin.name, SmithchartSeriesDirective);
    }
}
