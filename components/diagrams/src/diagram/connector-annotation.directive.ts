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
export class ConnectorAnnotationsDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-connector-annotations';
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
@EJComponentDecorator({}, isExecute)
export class ConnectorAnnotationDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-connector-annotation';
    }
}
export const ConnectorAnnotationPlugin = {
    name: 'e-connector-annotation',
    install(Vue: any) {
        Vue.component(ConnectorAnnotationPlugin.name, ConnectorAnnotationDirective);
    }
}
