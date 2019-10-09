import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class RangenavigatorSeriesCollectionDirective extends Vue {
    public render(): void {
        return;
    }
}
export const RangenavigatorSeriesCollectionPlugin = {
    name: 'e-rangenavigator-series-collection',
    install(Vue: any) {
        Vue.component(RangenavigatorSeriesCollectionPlugin.name, RangenavigatorSeriesCollectionDirective);
    }
}


@EJComponentDecorator({})
export class RangenavigatorSeriesDirective extends Vue {
    public render(): void {
        return;
    }
}
export const RangenavigatorSeriesPlugin = {
    name: 'e-rangenavigator-series',
    install(Vue: any) {
        Vue.component(RangenavigatorSeriesPlugin.name, RangenavigatorSeriesDirective);
    }
}
