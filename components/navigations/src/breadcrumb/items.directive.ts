import { ComponentBase, EJComponentDecorator, allVue, gh } from '@syncfusion/ej2-vue-base';
import * as Vue3 from 'vue-class-component';
import { Options } from 'vue-class-component';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import Vue from 'vue';
// {{VueImport}}
export const isExecute: any = gh ? false : true;

let vueImport: any;
if (!isExecute || parseInt(allVue.version) < 3) {
    vueImport = (Vue3 as any).Vue;
} else {
    vueImport = Vue;
}

@EJComponentDecorator({}, isExecute)
/* Start Options({
    inject: {
        custom: {
            default: null
        }
    }
}) End */

export class BreadcrumbItemsDirective extends vueImport {
    constructor() {
        super(arguments);
    }
    public render(createElement: any): void {
        if (gh) {
            let h: any = gh || createElement;
            let slots: any = null;
            if(!isNullOrUndefined((this as any).$slots.default)) {
                slots = gh ? (this as any).$slots.default() : (this as any).$slots.default;
            }
            return h('div', { class: 'e-directive' }, slots);
        }
        return;
    }
    public updated(): void {
        if (gh && this.custom) {
            this.custom();
        }
    }
    public getTag(): string {
        return 'e-breadcrumb-items';
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
@EJComponentDecorator({}, isExecute)
export class BreadcrumbItemDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-breadcrumb-item';
    }
}
export const BreadcrumbItemPlugin = {
    name: 'e-breadcrumb-item',
    install(Vue: any) {
        Vue.component(BreadcrumbItemPlugin.name, BreadcrumbItemDirective);
    }
}