import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class AccumulationSeriesCollectionDirective extends Vue {
    public render(): void {
        return;
    }
}
export const AccumulationSeriesCollectionPlugin = {
    name: 'e-accumulation-series-collection',
    install(Vue: any) {
        Vue.component(AccumulationSeriesCollectionPlugin.name, AccumulationSeriesCollectionDirective);
    }
}


@EJComponentDecorator({})
export class AccumulationSeriesDirective extends Vue {
    public render(): void {
        return;
    }
}
export const AccumulationSeriesPlugin = {
    name: 'e-accumulation-series',
    install(Vue: any) {
        Vue.component(AccumulationSeriesPlugin.name, AccumulationSeriesDirective);
    }
}
