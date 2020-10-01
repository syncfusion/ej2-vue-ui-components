import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class ConnectorFixedUserHandlesDirective extends Vue {
    public render(): void {
        return;
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
@EJComponentDecorator({})
export class ConnectorFixedUserHandleDirective extends Vue {
    public render(): void {
        return;
    }
}
export const ConnectorFixedUserHandlePlugin = {
    name: 'e-connector-fixeduserhandle',
    install(Vue: any) {
        Vue.component(ConnectorFixedUserHandlePlugin.name, ConnectorFixedUserHandleDirective);
    }
}
