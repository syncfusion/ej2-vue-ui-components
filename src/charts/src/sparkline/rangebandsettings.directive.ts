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
export class RangeBandSettingsDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-rangeBandSettings';
    }
}
export const RangeBandSettingsPlugin = {
    name: 'e-rangeBandSettings',
    install(Vue: any) {
        Vue.component(RangeBandSettingsPlugin.name, RangeBandSettingsDirective);
    }
}


@EJComponentDecorator({}, isExecute)
export class RangeBandSettingDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-rangeBandSetting';
    }
}
export const RangeBandSettingPlugin = {
    name: 'e-rangeBandSetting',
    install(Vue: any) {
        Vue.component(RangeBandSettingPlugin.name, RangeBandSettingDirective);
    }
}
