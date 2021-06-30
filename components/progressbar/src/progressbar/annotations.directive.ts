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
export class ProgressBarAnnotationsDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-progressbar-annotations';
    }
}
export const ProgressBarAnnotationsPlugin = {
    name: 'e-progressbar-annotations',
    install(Vue: any) {
        Vue.component(ProgressBarAnnotationsPlugin.name, ProgressBarAnnotationsDirective);
    }
}


@EJComponentDecorator({}, isExecute)
export class ProgressBarAnnotationDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-progressbar-annotation';
    }
}
export const ProgressBarAnnotationPlugin = {
    name: 'e-progressbar-annotation',
    install(Vue: any) {
        Vue.component(ProgressBarAnnotationPlugin.name, ProgressBarAnnotationDirective);
    }
}
