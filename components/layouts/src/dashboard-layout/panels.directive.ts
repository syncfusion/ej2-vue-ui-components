import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class PanelsDirective extends Vue {
    public render(): void {
        return;
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
@EJComponentDecorator({})
export class PanelDirective extends Vue {
    public render(): void {
        return;
    }
}
export const PanelPlugin = {
    name: 'e-panel',
    install(Vue: any) {
        Vue.component(PanelPlugin.name, PanelDirective);
    }
}
