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
export class AxesDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-axes';
    }
}
export const AxesPlugin = {
    name: 'e-axes',
    install(Vue: any) {
        Vue.component(AxesPlugin.name, AxesDirective);
    }
}

/**
 * Axes directive represent a axes of the VueJS linear gauge.
 * ```vue
 * <ejs-lineargauge>
 * <e-axes><e-axis></e-axis></e-axes>
 * </ejs-lineargauge>
 * ```
 */
@EJComponentDecorator({}, isExecute)
export class AxisDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-axis';
    }
}
export const AxisPlugin = {
    name: 'e-axis',
    install(Vue: any) {
        Vue.component(AxisPlugin.name, AxisDirective);
    }
}
