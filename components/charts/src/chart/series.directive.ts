import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class SeriesCollectionDirective extends Vue {
    public render(): void {
        return;
    }
}
export const SeriesCollectionPlugin = {
    name: 'e-series-collection',
    install(Vue: any) {
        Vue.component(SeriesCollectionPlugin.name, SeriesCollectionDirective);
    }
}


@EJComponentDecorator({})
export class SeriesDirective extends Vue {
    public render(): void {
        return;
    }
}
export const SeriesPlugin = {
    name: 'e-series',
    install(Vue: any) {
        Vue.component(SeriesPlugin.name, SeriesDirective);
    }
}
