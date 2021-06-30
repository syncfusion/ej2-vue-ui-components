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
export class ResourcesDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-resources';
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
@EJComponentDecorator({}, isExecute)
export class ResourceDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-resource';
    }
}
export const ResourcePlugin = {
    name: 'e-resource',
    install(Vue: any) {
        Vue.component(ResourcePlugin.name, ResourceDirective);
    }
}
