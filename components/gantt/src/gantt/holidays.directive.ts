import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class HolidaysDirective extends Vue {
    public render(): void {
        return;
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
@EJComponentDecorator({})
export class HolidayDirective extends Vue {
    public render(): void {
        return;
    }
}
export const HolidayPlugin = {
    name: 'e-holidays',
    install(Vue: any) {
        Vue.component(HolidayPlugin.name, HolidayDirective);
    }
}
