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
export class ChipsDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-chips';
    }
}
export const ChipsPlugin = {
    name: 'e-chips',
    install(Vue: any) {
        Vue.component(ChipsPlugin.name, ChipsDirective);
    }
}

/**
 * `e-chip` directive represent a chip of the Vue ChipList.
 * ```html
 * <ejs-chiplist > 
 *   <e-chips>
 *    <e-chip text='chip1'></e-chip>
 *    <e-chip text='chip2'></e-chip>
 *   </e-chips>
 * </ejs-chiplist>
 * ```
 */
@EJComponentDecorator({}, isExecute)
export class ChipDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-chip';
    }
}
export const ChipPlugin = {
    name: 'e-chip',
    install(Vue: any) {
        Vue.component(ChipPlugin.name, ChipDirective);
    }
}
