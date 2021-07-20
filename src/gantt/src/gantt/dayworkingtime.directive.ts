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
export class DayWorkingTimeCollectionDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-day-working-time-collection';
    }
}
export const DayWorkingTimeCollectionPlugin = {
    name: 'e-day-working-time-collection',
    install(Vue: any) {
        Vue.component(DayWorkingTimeCollectionPlugin.name, DayWorkingTimeCollectionDirective);
    }
}

/**
 * `e-day-working-time-collection` directive represent a working time ranges in a day. 
 * It must be contained in a Gantt component(`ejs-gantt`). 
 * ```vue
 * <ejs-gantt :dataSource]='data' allowSelection='true' allowSorting='true'>
 *   <e-day-working-time-collection>
 *     <e-day-working-time from='8' to='12'/>
 *     <e-day-working-time from='13' to='17'/>
 *   </e-day-working-time-collection>
 * </ejs-gantt>
 * ```
 */
@EJComponentDecorator({}, isExecute)
export class DayWorkingTimeDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-day-working-time';
    }
}
export const DayWorkingTimePlugin = {
    name: 'e-day-working-time',
    install(Vue: any) {
        Vue.component(DayWorkingTimePlugin.name, DayWorkingTimeDirective);
    }
}
