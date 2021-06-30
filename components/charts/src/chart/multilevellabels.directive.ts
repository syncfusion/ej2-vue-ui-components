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
export class MultiLevelLabelsDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-multilevellabels';
    }
}
export const MultiLevelLabelsPlugin = {
    name: 'e-multilevellabels',
    install(Vue: any) {
        Vue.component(MultiLevelLabelsPlugin.name, MultiLevelLabelsDirective);
    }
}


@EJComponentDecorator({}, isExecute)
export class MultiLevelLabelDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-multilevellabel';
    }
}
export const MultiLevelLabelPlugin = {
    name: 'e-multilevellabel',
    install(Vue: any) {
        Vue.component(MultiLevelLabelPlugin.name, MultiLevelLabelDirective);
    }
}
