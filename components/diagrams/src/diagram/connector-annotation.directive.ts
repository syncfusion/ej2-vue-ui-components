import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class ConnectorAnnotationsDirective extends Vue {
    public render(): void {
        return;
    }
}
export const ConnectorAnnotationsPlugin = {
    name: 'e-connector-annotations',
    install(Vue: any) {
        Vue.component(ConnectorAnnotationsPlugin.name, ConnectorAnnotationsDirective);
    }
}

/**
 * `e-connector-annotation` directive represent a annotation of the vue Diagram. 
 * It must be contained in a Diagram component(`ejs-diagram`). 
 * ```html
 * <ejs-diagram>
 * <e-connectors>
 * <e-connector>
 * <e-connector-annotations>
 * <e-connector-annotation>
 * </e-connector-annotation>
 * </e-connector-annotations>
 * </e-connector>
 * </e-connectors>
 * </ejs-diagram>
 * ```
 */
@EJComponentDecorator({})
export class ConnectorAnnotationDirective extends Vue {
    public render(): void {
        return;
    }
}
export const ConnectorAnnotationPlugin = {
    name: 'e-connector-annotation',
    install(Vue: any) {
        Vue.component(ConnectorAnnotationPlugin.name, ConnectorAnnotationDirective);
    }
}
