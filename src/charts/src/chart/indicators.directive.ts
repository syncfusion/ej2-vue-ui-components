import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class IndicatorsDirective extends Vue {
    public render(): void {
        return;
    }
}
export const IndicatorsPlugin = {
    name: 'e-indicators',
    install(Vue: any) {
        Vue.component(IndicatorsPlugin.name, IndicatorsDirective);
    }
}


@EJComponentDecorator({})
export class IndicatorDirective extends Vue {
    public render(): void {
        return;
    }
}
export const IndicatorPlugin = {
    name: 'e-indicator',
    install(Vue: any) {
        Vue.component(IndicatorPlugin.name, IndicatorDirective);
    }
}
