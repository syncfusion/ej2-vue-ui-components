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
export class IndicatorsDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-indicators';
    }
}
export const IndicatorsPlugin = {
    name: 'e-indicators',
    install(Vue: any) {
        Vue.component(IndicatorsPlugin.name, IndicatorsDirective);
    }
}


@EJComponentDecorator({}, isExecute)
export class IndicatorDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-indicator';
    }
}
export const IndicatorPlugin = {
    name: 'e-indicator',
    install(Vue: any) {
        Vue.component(IndicatorPlugin.name, IndicatorDirective);
    }
}
