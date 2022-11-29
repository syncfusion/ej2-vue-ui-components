import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class StackedColumnsDirective extends Vue {
    public render(): void {
        return;
    }
}
export const StackedColumnsPlugin = {
    name: 'e-stacked-columns',
    install(Vue: any) {
        Vue.component(StackedColumnsPlugin.name, StackedColumnsDirective);
    }
}


@EJComponentDecorator({})
export class StackedColumnDirective extends Vue {
    public render(): void {
        return;
    }
}
export const StackedColumnPlugin = {
    name: 'e-stacked-column',
    install(Vue: any) {
        Vue.component(StackedColumnPlugin.name, StackedColumnDirective);
    }
}
