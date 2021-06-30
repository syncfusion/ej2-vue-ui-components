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
export class NodesDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-nodes';
    }
}
export const NodesPlugin = {
    name: 'e-nodes',
    install(Vue: any) {
        Vue.component(NodesPlugin.name, NodesDirective);
    }
}

/**
 * `e-node` directive represent a nodes of the vue diagram. 
 * It must be contained in a Diagram component(`ejs-diagram`). 
 * ```html
 * <ejs-diagram>
 * <e-nodes>
 * <e-node></e-node>
 * </e-nodes>
 * </ejs-diagram>
 * ```
 */
@EJComponentDecorator({}, isExecute)
export class NodeDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-node';
    }
}
export const NodePlugin = {
    name: 'e-node',
    install(Vue: any) {
        Vue.component(NodePlugin.name, NodeDirective);
    }
}
