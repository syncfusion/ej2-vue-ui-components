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
