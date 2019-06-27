import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class ResourcesDirective extends Vue {
    public render(): void {
        return;
    }
}
export const ResourcesPlugin = {
    name: 'e-resources',
    install(Vue: any) {
        Vue.component(ResourcesPlugin.name, ResourcesDirective);
    }
}

/**
 * `e-resources` directive represent a resources of the VueJS Schedule. 
 * It must be contained in a Schedule component(`ejs-schedule`). 
 * ```vue
 * <ejs-schedule>
 *   <e-resources>
 *    <e-resource field='RoomId' name='Rooms'></e-resource>
 *    <e-resource field='OwnerId' name='Owners'></e-resource>
 *   </e-resources>
 * </ejs-schedule>
 * ```
 */
@EJComponentDecorator({})
export class ResourceDirective extends Vue {
    public render(): void {
        return;
    }
}
export const ResourcePlugin = {
    name: 'e-resource',
    install(Vue: any) {
        Vue.component(ResourcePlugin.name, ResourceDirective);
    }
}
