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
export class NavigationLinesDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-navigationLineSettings';
    }
}
export const NavigationLinesPlugin = {
    name: 'e-navigationLineSettings',
    install(Vue: any) {
        Vue.component(NavigationLinesPlugin.name, NavigationLinesDirective);
    }
}

/**
 * `NavigationLinesDirective` directive represent a bubble settings of the Vuejs maps.
 * ```vue
 * <ejs-maps>
 * <e-layers>
 * <e-layer>
 * <e-navigationLineSettings>
 * <e-navigationLineSetting>
 * </e-navigationLineSetting>
 * </e-navigationLineSettings>
 * </e-layer>
 * </e-layers>
 * </ejs-maps>
 * ```
 */
@EJComponentDecorator({}, isExecute)
export class NavigationLineDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-navigationLineSetting';
    }
}
export const NavigationLinePlugin = {
    name: 'e-navigationLineSetting',
    install(Vue: any) {
        Vue.component(NavigationLinePlugin.name, NavigationLineDirective);
    }
}
