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
export class MarkersDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-markerSettings';
    }
}
export const MarkersPlugin = {
    name: 'e-markerSettings',
    install(Vue: any) {
        Vue.component(MarkersPlugin.name, MarkersDirective);
    }
}

/**
 * `MarkerSettingsDirective` directive represent a marker settings of the Vuejs maps.
 * ```vue
 * <ejs-maps>
 * <e-layers>
 * <e-layer>
 * <e-markerSettings>
 * <e-markerSetting>
 * </e-markerSetting>
 * </e-markerSettings>
 * </e-layer>
 * </e-layers>
 * </ejs-maps>
 * ```
 */
@EJComponentDecorator({}, isExecute)
export class MarkerDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-markerSetting';
    }
}
export const MarkerPlugin = {
    name: 'e-markerSetting',
    install(Vue: any) {
        Vue.component(MarkerPlugin.name, MarkerDirective);
    }
}
