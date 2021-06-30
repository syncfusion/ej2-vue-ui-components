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
export class SmithchartSeriesCollectionDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-seriesCollection';
    }
}
export const SmithchartSeriesCollectionPlugin = {
    name: 'e-seriesCollection',
    install(Vue: any) {
        Vue.component(SmithchartSeriesCollectionPlugin.name, SmithchartSeriesCollectionDirective);
    }
}


@EJComponentDecorator({}, isExecute)
export class SmithchartSeriesDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-series';
    }
}
export const SmithchartSeriesPlugin = {
    name: 'e-series',
    install(Vue: any) {
        Vue.component(SmithchartSeriesPlugin.name, SmithchartSeriesDirective);
    }
}
