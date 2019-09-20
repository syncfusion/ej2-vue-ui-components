import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class RangeSettingsDirective extends Vue {
    public render(): void {
        return;
    }
}
export const RangeSettingsPlugin = {
    name: 'e-rangesettings',
    install(Vue: any) {
        Vue.component(RangeSettingsPlugin.name, RangeSettingsDirective);
    }
}

/**
 * `e-rangesetting` directive represent a range setting of the VueJS Spreadsheet.
 * It must be contained in a `e-sheet` directive.
 * ```vue
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet>
 *    <e-rangesettings>
 *    <e-rangesetting :dataSource='data'></e-rangesetting>
 *    </e-rangesettings>
 *    </e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
@EJComponentDecorator({})
export class RangeSettingDirective extends Vue {
    public render(): void {
        return;
    }
}
export const RangeSettingPlugin = {
    name: 'e-rangesetting',
    install(Vue: any) {
        Vue.component(RangeSettingPlugin.name, RangeSettingDirective);
    }
}
