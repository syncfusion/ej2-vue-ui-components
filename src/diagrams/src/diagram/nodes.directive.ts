import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class NodesDirective extends Vue {
    public render(): void {
        return;
    }
}
export const NodesPlugin = {
    name: 'e-nodes',
    install(Vue: any) {
        Vue.component(NodesPlugin.name, NodesDirective);
    }
}


@EJComponentDecorator({})
export class NodeDirective extends Vue {
    public render(): void {
        return;
    }
}
export const NodePlugin = {
    name: 'e-node',
    install(Vue: any) {
        Vue.component(NodePlugin.name, NodeDirective);
    }
}
