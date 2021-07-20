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
export class PointersDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-pointers';
    }
}
export const PointersPlugin = {
    name: 'e-pointers',
    install(Vue: any) {
        Vue.component(PointersPlugin.name, PointersDirective);
    }
}

/**
 * `Pointers` directive represent a pointers of the VueJS linear gauge.
 * ```vue
 * <ejs-lineargauge>
 * <e-axes>
 * <e-axis>
 * <e-pointers><e-pointer></e-pointer></e-pointers>
 * </e-axis>
 * </e-axes>
 * </ejs-lineargauge>
 * ```
 */
@EJComponentDecorator({}, isExecute)
export class PointerDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-pointer';
    }
}
export const PointerPlugin = {
    name: 'e-pointer',
    install(Vue: any) {
        Vue.component(PointerPlugin.name, PointerDirective);
    }
}
