import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class BreadcrumbItemsDirective extends Vue {
    public render(): void {
        return;
    }
}
export const BreadcrumbItemsPlugin = {
    name: 'e-breadcrumb-items',
    install(Vue: any) {
        Vue.component(BreadcrumbItemsPlugin.name, BreadcrumbItemsDirective);
    }
}

/**
 * `e-breadcrumb-item` directive represent a item of the Vue Breadcrumb.
 * It must be contained in a Breadcrumb component(`ejs-breadcrumb`).
 * ```html
 * <ejs-breadcrumb>
 *   <e-breadcrumb-items>
 *    <e-breadcrumb-item text='Home' url='/'></e-breadcrumb-item>
 *    <e-breadcrumb-item text='Index' url='./index'></e-breadcrumb-item>
 *   </e-breadcrumb-items>
 * </ejs-breadcrumb>
 * ```
 */
@EJComponentDecorator({})
export class BreadcrumbItemDirective extends Vue {
    public render(): void {
        return;
    }
}
export const BreadcrumbItemPlugin = {
    name: 'e-breadcrumb-item',
    install(Vue: any) {
        Vue.component(BreadcrumbItemPlugin.name, BreadcrumbItemDirective);
    }
}
