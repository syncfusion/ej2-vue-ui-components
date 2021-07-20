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
export class ViewsDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-views';
    }
}
export const ViewsPlugin = {
    name: 'e-views',
    install(Vue: any) {
        Vue.component(ViewsPlugin.name, ViewsDirective);
    }
}

/**
 * `e-views` directive represent a view of the VueJS Schedule. 
 * It must be contained in a Schedule component(`ejs-schedule`). 
 * ```vue
 * <ejs-schedule>
 *   <e-views>
 *    <e-view option='day' dateFormat='dd MMM'></e-view>
 *    <e-view option='week'></e-view>
 *   </e-views>
 * </ejs-schedule>
 * ```
 */
@EJComponentDecorator({}, isExecute)
export class ViewDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-view';
    }
}
export const ViewPlugin = {
    name: 'e-view',
    install(Vue: any) {
        Vue.component(ViewPlugin.name, ViewDirective);
    }
}
