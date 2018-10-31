import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class ColumnsDirective extends Vue {
    public render(): void {
        return;
    }
}
export const ColumnsPlugin = {
    name: 'e-columns',
    install(Vue: any) {
        Vue.component(ColumnsPlugin.name, ColumnsDirective);
    }
}


@EJComponentDecorator({})
export class ColumnDirective extends Vue {
    public render(): void {
        return;
    }
}
export const ColumnPlugin = {
    name: 'e-column',
    install(Vue: any) {
        Vue.component(ColumnPlugin.name, ColumnDirective);
    }
}
