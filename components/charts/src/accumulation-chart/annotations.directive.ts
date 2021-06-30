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
export class AccumulationAnnotationsDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-accumulation-annotations';
    }
}
export const AccumulationAnnotationsPlugin = {
    name: 'e-accumulation-annotations',
    install(Vue: any) {
        Vue.component(AccumulationAnnotationsPlugin.name, AccumulationAnnotationsDirective);
    }
}


@EJComponentDecorator({}, isExecute)
export class AccumulationAnnotationDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-accumulation-annotation';
    }
}
export const AccumulationAnnotationPlugin = {
    name: 'e-accumulation-annotation',
    install(Vue: any) {
        Vue.component(AccumulationAnnotationPlugin.name, AccumulationAnnotationDirective);
    }
}
