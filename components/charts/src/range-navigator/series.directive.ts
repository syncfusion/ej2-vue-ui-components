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
export class RangenavigatorSeriesCollectionDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-rangenavigator-series-collection';
    }
}
export const RangenavigatorSeriesCollectionPlugin = {
    name: 'e-rangenavigator-series-collection',
    install(Vue: any) {
        Vue.component(RangenavigatorSeriesCollectionPlugin.name, RangenavigatorSeriesCollectionDirective);
    }
}


@EJComponentDecorator({}, isExecute)
export class RangenavigatorSeriesDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-rangenavigator-series';
    }
}
export const RangenavigatorSeriesPlugin = {
    name: 'e-rangenavigator-series',
    install(Vue: any) {
        Vue.component(RangenavigatorSeriesPlugin.name, RangenavigatorSeriesDirective);
    }
}
