import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class SelectedDataIndexesDirective extends Vue {
    public render(): void {
        return;
    }
}
export const SelectedDataIndexesPlugin = {
    name: 'e-selecteddataindexes',
    install(Vue: any) {
        Vue.component(SelectedDataIndexesPlugin.name, SelectedDataIndexesDirective);
    }
}


@EJComponentDecorator({})
export class SelectedDataIndexDirective extends Vue {
    public render(): void {
        return;
    }
}
export const SelectedDataIndexPlugin = {
    name: 'e-selecteddataindex',
    install(Vue: any) {
        Vue.component(SelectedDataIndexPlugin.name, SelectedDataIndexDirective);
    }
}
