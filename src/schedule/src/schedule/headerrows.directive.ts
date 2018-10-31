import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class HeaderRowsDirective extends Vue {
    public render(): void {
        return;
    }
}
export const HeaderRowsPlugin = {
    name: 'e-header-rows',
    install(Vue: any) {
        Vue.component(HeaderRowsPlugin.name, HeaderRowsDirective);
    }
}

/**
 * `e-header-rows` directive represent a header rows of the VueJS Schedule. 
 * It must be contained in a Schedule component(`ejs-schedule`). 
 * ```vue
 * <ejs-schedule>
 *   <e-header-rows>
 *    <e-header-row option='Week'></e-header-row>
 *    <e-header-row option='Date'></e-header-row>
 *   </e-header-rows>
 * </ejs-schedule>
 * ```
 */
@EJComponentDecorator({})
export class HeaderRowDirective extends Vue {
    public render(): void {
        return;
    }
}
export const HeaderRowPlugin = {
    name: 'e-header-row',
    install(Vue: any) {
        Vue.component(HeaderRowPlugin.name, HeaderRowDirective);
    }
}
