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
export class SegmentsDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-segments';
    }
}
export const SegmentsPlugin = {
    name: 'e-segments',
    install(Vue: any) {
        Vue.component(SegmentsPlugin.name, SegmentsDirective);
    }
}


@EJComponentDecorator({}, isExecute)
export class SegmentDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-segment';
    }
}
export const SegmentPlugin = {
    name: 'e-segment',
    install(Vue: any) {
        Vue.component(SegmentPlugin.name, SegmentDirective);
    }
}
