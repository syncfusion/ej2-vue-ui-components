import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class PortsDirective extends Vue {
    public render(): void {
        return;
    }
}
export const PortsPlugin = {
    name: 'e-node-ports',
    install(Vue: any) {
        Vue.component(PortsPlugin.name, PortsDirective);
    }
}

/**
 * `e-port` directive represent a port of the vue Diagram. 
 * It must be contained in a Diagram component(`ejs-diagram`). 
 * ```html
 * <ejs-diagram>
 * <e-nodes>
 * <e-node>
 * <e-node-ports>
 * <e-node-port>
 * </e-node-port>
 * </e-node-ports>
 * </e-node>
 * </e-nodes>
 * </ejs-diagram>
 * ```
 */
@EJComponentDecorator({})
export class PortDirective extends Vue {
    public render(): void {
        return;
    }
}
export const PortPlugin = {
    name: 'e-node-port',
    install(Vue: any) {
        Vue.component(PortPlugin.name, PortDirective);
    }
}
