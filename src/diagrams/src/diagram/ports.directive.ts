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
export class PortsDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-node-ports';
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
@EJComponentDecorator({}, isExecute)
export class PortDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-node-port';
    }
}
export const PortPlugin = {
    name: 'e-node-port',
    install(Vue: any) {
        Vue.component(PortPlugin.name, PortDirective);
    }
}
