import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class PresetsDirective extends Vue {
    public render(): void {
        return;
    }
}
export const PresetsPlugin = {
    name: 'e-presets',
    install(Vue: any) {
        Vue.component(PresetsPlugin.name, PresetsDirective);
    }
}

/**
 * 'e-presets' directive represent a presets of VueJS daterangepicker 
 * It must be contained in a daterangepicker component(`ej-daterangepicker`). 
 * ```html
 * <ejs-daterangepicker id='range'> 
 *   <e-presets>
 *   <e-preset label='Last Week' v-bind:start='startValue' v-bind:end='endValue'></e-preset>
 *   <e-preset label='Last Month' v-bind:start='startValue' v-bind:end='endValue'></e-preset>
 *   </e-presets>
 * </ejs-daterangepicker>
 * ```
 */
@EJComponentDecorator({})
export class PresetDirective extends Vue {
    public render(): void {
        return;
    }
}
export const PresetPlugin = {
    name: 'e-preset',
    install(Vue: any) {
        Vue.component(PresetPlugin.name, PresetDirective);
    }
}
