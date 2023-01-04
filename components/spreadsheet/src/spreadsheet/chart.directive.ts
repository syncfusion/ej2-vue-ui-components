import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class ChartsDirective extends Vue {
    public render(): void {
        return;
    }
}
export const ChartsPlugin = {
    name: 'e-charts',
    install(Vue: any) {
        Vue.component(ChartsPlugin.name, ChartsDirective);
    }
}


@EJComponentDecorator({})
export class ChartDirective extends Vue {
    public render(): void {
        return;
    }
}
export const ChartPlugin = {
    name: 'e-chart',
    install(Vue: any) {
        Vue.component(ChartPlugin.name, ChartDirective);
    }
}
