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
export class NodeAnnotationsDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-node-annotations';
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
@EJComponentDecorator({}, isExecute)
export class NodeAnnotationDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-node-annotation';
    }
}
export const NodeAnnotationPlugin = {
    name: 'e-node-annotation',
    install(Vue: any) {
        Vue.component(NodeAnnotationPlugin.name, NodeAnnotationDirective);
    }
}
