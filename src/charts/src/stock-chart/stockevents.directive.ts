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
export class StockEventsDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-stockchart-stockevents';
    }
}
export const StockEventsPlugin = {
    name: 'e-stockchart-stockevents',
    install(Vue: any) {
        Vue.component(StockEventsPlugin.name, StockEventsDirective);
    }
}


@EJComponentDecorator({}, isExecute)
export class StockEventDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-stockchart-stockevent';
    }
}
export const StockEventPlugin = {
    name: 'e-stockchart-stockevent',
    install(Vue: any) {
        Vue.component(StockEventPlugin.name, StockEventDirective);
    }
}
