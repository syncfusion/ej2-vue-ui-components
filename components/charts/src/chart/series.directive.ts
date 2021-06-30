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
export class SeriesCollectionDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-series-collection';
    }
}
export const SeriesCollectionPlugin = {
    name: 'e-series-collection',
    install(Vue: any) {
        Vue.component(SeriesCollectionPlugin.name, SeriesCollectionDirective);
    }
}


@EJComponentDecorator({}, isExecute)
export class SeriesDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-series';
    }
}
export const SeriesPlugin = {
    name: 'e-series',
    install(Vue: any) {
        Vue.component(SeriesPlugin.name, SeriesDirective);
    }
}
