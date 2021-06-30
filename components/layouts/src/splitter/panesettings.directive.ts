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
export class PanesDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-panes';
    }
}
export const PanesPlugin = {
    name: 'e-panes',
    install(Vue: any) {
        Vue.component(PanesPlugin.name, PanesDirective);
    }
}

/**
 * 'e-pane' directive represent a pane of Vue Splitter 
 * It must be contained in a Splitter component(`ejs-splitter`). 
 * ```html
 * <ejs-splitter id='splitter'> 
 *   <e-panes>
 *    <e-pane size='150px'></e-pane>
 *    <e-pane size='150px'></e-pane>
 *   </e-panes>
 * </ejs-splitter>
 * ```
 */
@EJComponentDecorator({}, isExecute)
export class PaneDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-pane';
    }
}
export const PanePlugin = {
    name: 'e-pane',
    install(Vue: any) {
        Vue.component(PanePlugin.name, PaneDirective);
    }
}
