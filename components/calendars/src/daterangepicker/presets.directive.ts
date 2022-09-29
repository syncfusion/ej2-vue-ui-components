import { ComponentBase, EJComponentDecorator, allVue, gh, isExecute } from '@syncfusion/ej2-vue-base';
import * as Vue3 from 'vue-class-component';
import { Options } from 'vue-class-component';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import Vue from 'vue';
// {{VueImport}}

let vueImport: any;
if (!isExecute || parseInt(allVue.version) < 3) {
    vueImport = (Vue3 as any).Vue;
} else {
    vueImport = Vue;
}

@EJComponentDecorator({}, isExecute)
/* Start Options({
    inject: {
        custom: {
            default: null
        }
    }
}) End */

export class PresetsDirective extends vueImport {
    constructor() {
        super(arguments);
    }
    public render(createElement: any): void {
        if (!isExecute) {
            let h: any = !isExecute ? gh : createElement;
            let slots: any = null;
            if(!isNullOrUndefined((this as any).$slots.default)) {
                slots = !isExecute ? (this as any).$slots.default() : (this as any).$slots.default;
            }
            return h('div', { class: 'e-directive' }, slots);
        }
        return;
    }
    public updated(): void {
        if (!isExecute && this.custom) {
            this.custom();
        }
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