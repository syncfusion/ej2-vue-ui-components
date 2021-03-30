import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class RangeColorSettingsDirective extends Vue {
    public render(): void {
        return;
    }
}
export const RangeColorSettingsPlugin = {
    name: 'e-rangecolorsettings',
    install(Vue: any) {
        Vue.component(RangeColorSettingsPlugin.name, RangeColorSettingsDirective);
    }
}


@EJComponentDecorator({})
export class RangeColorSettingDirective extends Vue {
    public render(): void {
        return;
    }
}
export const RangeColorSettingPlugin = {
    name: 'e-rangecolorsetting',
    install(Vue: any) {
        Vue.component(RangeColorSettingPlugin.name, RangeColorSettingDirective);
    }
}
