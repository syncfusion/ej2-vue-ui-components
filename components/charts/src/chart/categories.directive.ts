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
export class CategoriesDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-categories';
    }
}
export const CategoriesPlugin = {
    name: 'e-categories',
    install(Vue: any) {
        Vue.component(CategoriesPlugin.name, CategoriesDirective);
    }
}


@EJComponentDecorator({}, isExecute)
export class CategoryDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-category';
    }
}
export const CategoryPlugin = {
    name: 'e-category',
    install(Vue: any) {
        Vue.component(CategoryPlugin.name, CategoryDirective);
    }
}
