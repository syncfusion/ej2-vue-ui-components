import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class EventMarkersDirective extends Vue {
    public render(): void {
        return;
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
@EJComponentDecorator({})
export class EventMarkerDirective extends Vue {
    public render(): void {
        return;
    }
}
export const EventMarkerPlugin = {
    name: 'e-event-marker',
    install(Vue: any) {
        Vue.component(EventMarkerPlugin.name, EventMarkerDirective);
    }
}
