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
export class EventMarkersDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-event-markers';
    }
}
export const EventMarkersPlugin = {
    name: 'e-event-markers',
    install(Vue: any) {
        Vue.component(EventMarkersPlugin.name, EventMarkersDirective);
    }
}

/**
 * `e-event-markers` directive represent a event marker collection in Gantt
 * It must be contained in a Gantt component(`ejs-gantt`). 
 * ```vue
 * <ejs-gantt :dataSource]='data' allowSelection='true' allowSorting='true'>
 *   <e-event-markers>
 *     <e-event-marker day='02/10/2018' label='Project Starts'/>
 *   </e-event-markers>
 * </ejs-gantt>
 * ```
 */
@EJComponentDecorator({}, isExecute)
export class EventMarkerDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-event-marker';
    }
}
export const EventMarkerPlugin = {
    name: 'e-event-marker',
    install(Vue: any) {
        Vue.component(EventMarkerPlugin.name, EventMarkerDirective);
    }
}
