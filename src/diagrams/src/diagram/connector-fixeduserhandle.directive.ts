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
export class ConnectorFixedUserHandlesDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-connector-fixeduserhandles';
    }
}
export const ConnectorFixedUserHandlesPlugin = {
    name: 'e-connector-fixeduserhandles',
    install(Vue: any) {
        Vue.component(ConnectorFixedUserHandlesPlugin.name, ConnectorFixedUserHandlesDirective);
    }
}

/**
 * `e-connector` directive represent a annotation of the vue Diagram. 
 * It must be contained in a Diagram component(`ejs-diagram`). 
 * ```html
 * <ejs-diagram>
 * <e-connectors>
 * <e-connector>
 * <e-connector-fixeduserhandles>
 * <e-connector-fixeduserhandle>
 * </e-connector-fixeduserhandle>
 * </e-connector-fixeduserhandles>
 * </e-connector>
 * </e-connectors>
 * </ejs-diagram>
 * ```
 */
@EJComponentDecorator({}, isExecute)
export class ConnectorFixedUserHandleDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-connector-fixeduserhandle';
    }
}
export const ConnectorFixedUserHandlePlugin = {
    name: 'e-connector-fixeduserhandle',
    install(Vue: any) {
        Vue.component(ConnectorFixedUserHandlePlugin.name, ConnectorFixedUserHandleDirective);
    }
}
