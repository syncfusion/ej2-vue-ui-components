import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class StackedHeadersDirective extends Vue {
    public render(): void {
        return;
    }
}
export const StackedHeadersPlugin = {
    name: 'e-stackedHeaders',
    install(Vue: any) {
        Vue.component(StackedHeadersPlugin.name, StackedHeadersDirective);
    }
}

/**
 * `e-stackedHeaders` directive represent a stacked header of the VueJS Kanban board. 
 * It must be contained in a Kanban component(`ejs-kanban`). 
 * ```vue
 * <ejs-kanban>
 *   <e-stackedHeaders>
 *    <e-stackedHeader keyField='Open' text='To Do'></e-stackedHeader>
 *    <e-stackedHeader keyField='Close' text='Completed'></e-stackedHeader>
 *   </e-stackedHeaders>
 * </ejs-kanban>
 * ```
 */
@EJComponentDecorator({})
export class StackedHeaderDirective extends Vue {
    public render(): void {
        return;
    }
}
export const StackedHeaderPlugin = {
    name: 'e-stackedHeader',
    install(Vue: any) {
        Vue.component(StackedHeaderPlugin.name, StackedHeaderDirective);
    }
}
