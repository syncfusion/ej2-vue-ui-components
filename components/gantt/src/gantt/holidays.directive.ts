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
export class HolidaysDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-holidays';
    }
}
export const HolidaysPlugin = {
    name: 'e-holidays',
    install(Vue: any) {
        Vue.component(HolidaysPlugin.name, HolidaysDirective);
    }
}

/**
 * `e-holidays` directive represent a holidays collection in Gantt. 
 * It must be contained in a Gantt component(`ejs-gantt`). 
 * ```vue
 * <ejs-gantt :dataSource]='data' allowSelection='true' allowSorting='true'>
 *   <e-holidays>
 *     <e-holiday from='02/20/2018' label='Holiday 1'/>
 *     <e-holiday from='05/15/2018' label='Holiday 2'/>
 *   </e-holidays>
 * </ejs-gantt>
 * ```
 */
@EJComponentDecorator({}, isExecute)
export class HolidayDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-holidays';
    }
}
export const HolidayPlugin = {
    name: 'e-holidays',
    install(Vue: any) {
        Vue.component(HolidayPlugin.name, HolidayDirective);
    }
}
