import { ComponentBase, EJComponentDecorator, allVue, gh } from '@syncfusion/ej2-vue-base';
import * as Vue3 from 'vue-class-component';
import Vue from 'vue';

export const isExecute: any = gh ? false : true;

let vueImport: any;
if (!isExecute || parseInt(allVue.version) < 3) {
    vueImport = (Vue3 as any).Vue;
} else {
    vueImport = Vue;
}

@EJComponentDecorator({}, isExecute)
export class TrendlinesDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-trendlines';
    }
}
export const TrendlinesPlugin = {
    name: 'e-trendlines',
    install(Vue: any) {
        Vue.component(TrendlinesPlugin.name, TrendlinesDirective);
    }
}


@EJComponentDecorator({}, isExecute)
export class TrendlineDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-trendline';
    }
}
export const TrendlinePlugin = {
    name: 'e-trendline',
    install(Vue: any) {
        Vue.component(TrendlinePlugin.name, TrendlineDirective);
    }
}
