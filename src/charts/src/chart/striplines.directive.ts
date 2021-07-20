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
export class StripLinesDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-striplines';
    }
}
export const StripLinesPlugin = {
    name: 'e-striplines',
    install(Vue: any) {
        Vue.component(StripLinesPlugin.name, StripLinesDirective);
    }
}


@EJComponentDecorator({}, isExecute)
export class StripLineDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-stripline';
    }
}
export const StripLinePlugin = {
    name: 'e-stripline',
    install(Vue: any) {
        Vue.component(StripLinePlugin.name, StripLineDirective);
    }
}
