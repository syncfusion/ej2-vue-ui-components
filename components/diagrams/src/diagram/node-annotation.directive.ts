import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class NodeAnnotationsDirective extends Vue {
    public render(): void {
        return;
    }
}
export const NodeAnnotationsPlugin = {
    name: 'e-node-annotations',
    install(Vue: any) {
        Vue.component(NodeAnnotationsPlugin.name, NodeAnnotationsDirective);
    }
}


@EJComponentDecorator({})
export class NodeAnnotationDirective extends Vue {
    public render(): void {
        return;
    }
}
export const NodeAnnotationPlugin = {
    name: 'e-node-annotation',
    install(Vue: any) {
        Vue.component(NodeAnnotationPlugin.name, NodeAnnotationDirective);
    }
}
