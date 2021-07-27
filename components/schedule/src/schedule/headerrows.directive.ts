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
export class HeaderRowsDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-header-rows';
    }
}
export const HeaderRowsPlugin = {
    name: 'e-header-rows',
    install(Vue: any) {
        Vue.component(HeaderRowsPlugin.name, HeaderRowsDirective);
    }
}

/**
 * `e-header-rows` directive represent a header rows of the VueJS Schedule. 
 * It must be contained in a Schedule component(`ejs-schedule`). 
 * ```vue
 * <ejs-schedule>
 *   <e-header-rows>
 *    <e-header-row option='Week'></e-header-row>
 *    <e-header-row option='Date'></e-header-row>
 *   </e-header-rows>
 * </ejs-schedule>
 * ```
 */
@EJComponentDecorator({}, isExecute)
export class HeaderRowDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-header-row';
    }
}
export const HeaderRowPlugin = {
    name: 'e-header-row',
    install(Vue: any) {
        Vue.component(HeaderRowPlugin.name, HeaderRowDirective);
    }
}
