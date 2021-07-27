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
export class RangeColorSettingsDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-rangecolorsettings';
    }
}
export const RangeColorSettingsPlugin = {
    name: 'e-rangecolorsettings',
    install(Vue: any) {
        Vue.component(RangeColorSettingsPlugin.name, RangeColorSettingsDirective);
    }
}


@EJComponentDecorator({}, isExecute)
export class RangeColorSettingDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-rangecolorsetting';
    }
}
export const RangeColorSettingPlugin = {
    name: 'e-rangecolorsetting',
    install(Vue: any) {
        Vue.component(RangeColorSettingPlugin.name, RangeColorSettingDirective);
    }
}
