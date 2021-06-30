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
export class ConnectorsDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-connectors';
    }
}
export const ConnectorsPlugin = {
    name: 'e-connectors',
    install(Vue: any) {
        Vue.component(ConnectorsPlugin.name, ConnectorsDirective);
    }
}

/**
 * `e-connectors` directive represent a connectors of the vue diagram. 
 * It must be contained in a Diagram component(`ejs-diagram`). 
 * ```html
 * <ejs-diagram>
 * <e-connectors>
 * <e-connector></e-connector>
 * </e-connectors>
 * </ejs-diagram>
 * ```
 */
@EJComponentDecorator({}, isExecute)
export class ConnectorDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-connector';
    }
}
export const ConnectorPlugin = {
    name: 'e-connector',
    install(Vue: any) {
        Vue.component(ConnectorPlugin.name, ConnectorDirective);
    }
}
