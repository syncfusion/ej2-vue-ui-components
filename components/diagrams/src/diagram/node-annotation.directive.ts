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

/**
 * `e-node` directive represent a annotation of the vue Diagram. 
 * It must be contained in a Diagram component(`ejs-diagram`). 
 * ```html
 * <ejs-diagram>
 * <e-nodes>
 * <e-node>
 * <e-node-annotations>
 * <e-node-annotation>
 * </e-node-annotation>
 * </e-node-annotations>
 * </e-node>
 * </e-nodes>
 * </ejs-diagram>
 * ```
 */
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
