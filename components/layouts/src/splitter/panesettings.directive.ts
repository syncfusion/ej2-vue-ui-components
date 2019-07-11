import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class PanesDirective extends Vue {
    public render(): void {
        return;
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
@EJComponentDecorator({})
export class PaneDirective extends Vue {
    public render(): void {
        return;
    }
}
export const PanePlugin = {
    name: 'e-pane',
    install(Vue: any) {
        Vue.component(PanePlugin.name, PaneDirective);
    }
}
