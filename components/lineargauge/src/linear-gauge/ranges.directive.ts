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
export class RangesDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-ranges';
    }
}
export const RangesPlugin = {
    name: 'e-ranges',
    install(Vue: any) {
        Vue.component(RangesPlugin.name, RangesDirective);
    }
}

/**
 * `Ranges` directive represent a ranges of the VueJS linear gauge. 
 * ```vue
 * <ejs-lineargauge>
 * <e-axes>
 * <e-axis>
 * <e-ranges><e-range></e-range></e-ranges>
 * </e-axis>
 * </e-axes>
 * </ejs-lineargauge>
 * ```
 */
@EJComponentDecorator({}, isExecute)
export class RangeDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-range';
    }
}
export const RangePlugin = {
    name: 'e-range',
    install(Vue: any) {
        Vue.component(RangePlugin.name, RangeDirective);
    }
}
