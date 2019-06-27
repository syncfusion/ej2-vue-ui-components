import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class DayWorkingTimeCollectionDirective extends Vue {
    public render(): void {
        return;
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
@EJComponentDecorator({})
export class DayWorkingTimeDirective extends Vue {
    public render(): void {
        return;
    }
}
export const DayWorkingTimePlugin = {
    name: 'e-day-working-time',
    install(Vue: any) {
        Vue.component(DayWorkingTimePlugin.name, DayWorkingTimeDirective);
    }
}
