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
export class BulletRangeCollectionDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-bullet-range-collection';
    }
}
export const BulletRangeCollectionPlugin = {
    name: 'e-bullet-range-collection',
    install(Vue: any) {
        Vue.component(BulletRangeCollectionPlugin.name, BulletRangeCollectionDirective);
    }
}


@EJComponentDecorator({}, isExecute)
export class BulletRangeDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-bullet-range';
    }
}
export const BulletRangePlugin = {
    name: 'e-bullet-range',
    install(Vue: any) {
        Vue.component(BulletRangePlugin.name, BulletRangeDirective);
    }
}
