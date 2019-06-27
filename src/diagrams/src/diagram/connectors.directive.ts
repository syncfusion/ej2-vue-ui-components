import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class ConnectorsDirective extends Vue {
    public render(): void {
        return;
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
@EJComponentDecorator({})
export class ConnectorDirective extends Vue {
    public render(): void {
        return;
    }
}
export const ConnectorPlugin = {
    name: 'e-connector',
    install(Vue: any) {
        Vue.component(ConnectorPlugin.name, ConnectorDirective);
    }
}
