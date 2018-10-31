import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class RangeBandSettingsDirective extends Vue {
    public render(): void {
        return;
    }
}
export const RangeBandSettingsPlugin = {
    name: 'e-rangeBandSettings',
    install(Vue: any) {
        Vue.component(RangeBandSettingsPlugin.name, RangeBandSettingsDirective);
    }
}


@EJComponentDecorator({})
export class RangeBandSettingDirective extends Vue {
    public render(): void {
        return;
    }
}
export const RangeBandSettingPlugin = {
    name: 'e-rangeBandSetting',
    install(Vue: any) {
        Vue.component(RangeBandSettingPlugin.name, RangeBandSettingDirective);
    }
}
