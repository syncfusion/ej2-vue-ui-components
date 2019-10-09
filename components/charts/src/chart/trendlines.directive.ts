import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class TrendlinesDirective extends Vue {
    public render(): void {
        return;
    }
}
export const TrendlinesPlugin = {
    name: 'e-trendlines',
    install(Vue: any) {
        Vue.component(TrendlinesPlugin.name, TrendlinesDirective);
    }
}


@EJComponentDecorator({})
export class TrendlineDirective extends Vue {
    public render(): void {
        return;
    }
}
export const TrendlinePlugin = {
    name: 'e-trendline',
    install(Vue: any) {
        Vue.component(TrendlinePlugin.name, TrendlineDirective);
    }
}
