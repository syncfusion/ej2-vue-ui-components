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
export class AccumulationSeriesCollectionDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-accumulation-series-collection';
    }
}
export const AccumulationSeriesCollectionPlugin = {
    name: 'e-accumulation-series-collection',
    install(Vue: any) {
        Vue.component(AccumulationSeriesCollectionPlugin.name, AccumulationSeriesCollectionDirective);
    }
}


@EJComponentDecorator({}, isExecute)
export class AccumulationSeriesDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-accumulation-series';
    }
}
export const AccumulationSeriesPlugin = {
    name: 'e-accumulation-series',
    install(Vue: any) {
        Vue.component(AccumulationSeriesPlugin.name, AccumulationSeriesDirective);
    }
}
