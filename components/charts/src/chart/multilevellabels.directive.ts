import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class MultiLevelLabelsDirective extends Vue {
    public render(): void {
        return;
    }
}
export const MultiLevelLabelsPlugin = {
    name: 'e-multilevellabels',
    install(Vue: any) {
        Vue.component(MultiLevelLabelsPlugin.name, MultiLevelLabelsDirective);
    }
}


@EJComponentDecorator({})
export class MultiLevelLabelDirective extends Vue {
    public render(): void {
        return;
    }
}
export const MultiLevelLabelPlugin = {
    name: 'e-multilevellabel',
    install(Vue: any) {
        Vue.component(MultiLevelLabelPlugin.name, MultiLevelLabelDirective);
    }
}
