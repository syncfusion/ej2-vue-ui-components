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
export class PanelsDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-panels';
    }
}
export const PanelsPlugin = {
    name: 'e-panels',
    install(Vue: any) {
        Vue.component(PanelsPlugin.name, PanelsDirective);
    }
}

/**
 * 'e-panels' directive represent a presets of VueJS dashboardlayout component 
 * It must be contained in a dashboardlayout component(`ejs-dashboardlayout`). 
 * ```html
 * <ejs-dashboardlayout>
 *   <e-panels>
 *   <e-panel></e-panel>
 *   <e-panel></e-panel>
 *   </e-panels>
 * </ejs-dashboardlayout>
 * ```
 */
@EJComponentDecorator({}, isExecute)
export class PanelDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-panel';
    }
}
export const PanelPlugin = {
    name: 'e-panel',
    install(Vue: any) {
        Vue.component(PanelPlugin.name, PanelDirective);
    }
}
