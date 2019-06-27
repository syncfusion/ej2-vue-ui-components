import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class ViewsDirective extends Vue {
    public render(): void {
        return;
    }
}
export const ViewsPlugin = {
    name: 'e-views',
    install(Vue: any) {
        Vue.component(ViewsPlugin.name, ViewsDirective);
    }
}

/**
 * `e-views` directive represent a view of the VueJS Schedule. 
 * It must be contained in a Schedule component(`ejs-schedule`). 
 * ```vue
 * <ejs-schedule>
 *   <e-views>
 *    <e-view option='day' dateFormat='dd MMM'></e-view>
 *    <e-view option='week'></e-view>
 *   </e-views>
 * </ejs-schedule>
 * ```
 */
@EJComponentDecorator({})
export class ViewDirective extends Vue {
    public render(): void {
        return;
    }
}
export const ViewPlugin = {
    name: 'e-view',
    install(Vue: any) {
        Vue.component(ViewPlugin.name, ViewDirective);
    }
}
