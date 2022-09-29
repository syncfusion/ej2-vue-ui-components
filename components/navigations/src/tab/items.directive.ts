import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class TabItemsDirective extends Vue {
    public render(): void {
        return;
    }
}
export const TabItemsPlugin = {
    name: 'e-tabitems',
    install(Vue: any) {
        Vue.component(TabItemsPlugin.name, TabItemsDirective);
    }
}

/**
 * 'e-tabitem' directive represent a item of the Vue Tab 
 * It must be contained in a Tab component(`ejs-tab`). 
 * ```html
 * <ejs-tab>
 *  <e-tabitems>
 *   <e-tabitem :header='Header 1' :content='Content 1'></e-tabitem>
 *   <e-tabitem :header='Header 2' :content='Content 2'></e-tabitem>
 *  <e-tabitems> 
 * </ejs-tab>
 * ```
 */
@EJComponentDecorator({})
export class TabItemDirective extends Vue {
    public render(): void {
        return;
    }
}
export const TabItemPlugin = {
    name: 'e-tabitem',
    install(Vue: any) {
        Vue.component(TabItemPlugin.name, TabItemDirective);
    }
}
