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
export class PresetsDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-presets';
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
@EJComponentDecorator({}, isExecute)
export class PresetDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-preset';
    }
}
export const PresetPlugin = {
    name: 'e-preset',
    install(Vue: any) {
        Vue.component(PresetPlugin.name, PresetDirective);
    }
}
