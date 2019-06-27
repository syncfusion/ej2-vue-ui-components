import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class CategoriesDirective extends Vue {
    public render(): void {
        return;
    }
}
export const CategoriesPlugin = {
    name: 'e-categories',
    install(Vue: any) {
        Vue.component(CategoriesPlugin.name, CategoriesDirective);
    }
}


@EJComponentDecorator({})
export class CategoryDirective extends Vue {
    public render(): void {
        return;
    }
}
export const CategoryPlugin = {
    name: 'e-category',
    install(Vue: any) {
        Vue.component(CategoryPlugin.name, CategoryDirective);
    }
}
