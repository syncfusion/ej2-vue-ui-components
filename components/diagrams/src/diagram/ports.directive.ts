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
