import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class NodeFixedUserHandlesDirective extends Vue {
    public render(): void {
        return;
    }
}
export const NodeFixedUserHandlesPlugin = {
    name: 'e-node-fixeduserhandles',
    install(Vue: any) {
        Vue.component(NodeFixedUserHandlesPlugin.name, NodeFixedUserHandlesDirective);
    }
}

/**
 * `e-node` directive represent a annotation of the vue Diagram. 
 * It must be contained in a Diagram component(`ejs-diagram`). 
 * ```html
 * <ejs-diagram>
 * <e-nodes>
 * <e-node>
 * <e-node-fixeduserhandles>
 * <e-node-fixeduserhandle>
 * </e-node-fixeduserhandle>
 * </e-node-fixeduserhandles>
 * </e-node>
 * </e-nodes>
 * </ejs-diagram>
 * ```
 */
@EJComponentDecorator({})
export class NodeFixedUserHandleDirective extends Vue {
    public render(): void {
        return;
    }
}
export const NodeFixedUserHandlePlugin = {
    name: 'e-node-fixeduserhandle',
    install(Vue: any) {
        Vue.component(NodeFixedUserHandlePlugin.name, NodeFixedUserHandleDirective);
    }
}
